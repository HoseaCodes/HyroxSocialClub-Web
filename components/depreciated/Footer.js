import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    return (
        <section className="text-white py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between md:items-center sm:items-start mb-12">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center sm:justify-center sm:gap-5 mb-8 sm:mb-0 sm:flex-row hidden sm:flex">
                        <img src="css/imgae/flex.jpg" alt="Logo" className="w-20" />
                    </div>

                    {/* Navbar */}
                    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-center sm:text-left">
                        <Link href="/" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/about' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            About
                        </Link>
                        <Link href="/community" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/community' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            Community
                        </Link>
                        <Link href="/docs" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/docs' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            Docs
                        </Link>
                        <Link href="/logs" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/logs' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            Logs
                        </Link>
                        <Link href="/blog" className={`text-gray-400 hover:text-[#FF2525] ${pathname === '/blog' ? 'text-[#FF2525] border-b-2 border-[#FF2525]' : ''}`}>
                            Blog
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 md:flex-row justify-center md:items-baseline sm:flex-col sm:items-center sm:space-y-4 mt-8 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-[#FF2525]">
                            <img src="css/imgae/facebook-circle-fill.png" alt="Facebook" className="w-[40px] mb-4 sm:mb-0" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#FF2525]">
                            <img src="css/imgae/twitter-fill.png" alt="Twitter" className="w-[40px] mb-4 sm:mb-0" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#FF2525]">
                            <img src="css/imgae/instagram-fill(1).png" alt="Instagram" className="w-[40px]" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
