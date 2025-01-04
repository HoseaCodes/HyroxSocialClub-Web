// app/logs/page.js
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import HerokuControl from '../components/HerokuControl';

const LogViewer = dynamic(() => import('../components/LogViewer'), {
    ssr: false
});

function LogsPage() {
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