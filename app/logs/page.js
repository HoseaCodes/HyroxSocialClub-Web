'use client';

import { useAuth } from '../context/auth-context';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import HerokuControl from '../components/HerokuControl';

const LogViewer = dynamic(() => import('../components/LogViewer'), {
    ssr: false
});

function LogsPage() {
    const router = useRouter();
    const { auth, isInitialized } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Logs page mounted, auth state:', { auth, isInitialized });
        
        // Handle authentication check once we know the state
        if (isInitialized) {
            if (auth === false) {
                console.log('User not authenticated, redirecting to login');
                router.push('/login');
            } else {
                console.log('User is authenticated, showing logs page');
                setLoading(false);
            }
        }
    }, [auth, isInitialized, router]);

    // Show loading spinner while checking auth
    if (loading || !isInitialized) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
                <div className="text-xl text-center dark:text-white">
                    <div className="mb-4">Loading logs...</div>
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
            </div>
        );
    }

    // This will only render if authenticated
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Heroku Logs Dashboard
                    </h1>
                    <button
                        onClick={() => {
                            const { logout } = useAuth();
                            logout().then(() => router.push('/login'));
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
                <div>
                    <HerokuControl />
                </div>
                <LogViewer />
            </div>
        </div>
    );
}

export default LogsPage;