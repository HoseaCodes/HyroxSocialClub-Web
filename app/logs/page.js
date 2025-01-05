// app/logs/page.js
'use client';


import { useAuth } from '../context/auth-context'; // Import auth context
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use the new `next/navigation` package for redirects
import dynamic from 'next/dynamic';
import HerokuControl from '../components/HerokuControl';

const LogViewer = dynamic(() => import('../components/LogViewer'), {
    ssr: false
});

function LogsPage() {
    const { auth } = useAuth(); // Get the auth state
    const router = useRouter();

    useEffect(() => {
        console.log(auth);
        if (auth === false) {
          // Redirect to the login page if not authenticated
          router.push('/login');
        }
      }, [auth, router]);
    
      if (auth === null) {
        return <div>Loading...</div>; // Optional loading state while checking auth
      }
    
      if (auth === false) {
        return null; // Prevent rendering if not authenticated
      }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Heroku Logs Dashboard
                    </h1>
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