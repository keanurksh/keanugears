import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blue-600">KeanuGears</Link>
                    </div>

                    {/* search bar */}
                    <div className="hidden md:flex mx-4 flex-grow justify-center">
                        <SearchBar />
                    </div>

                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/reviews" className="text-gray-700 hover:text-blue-600">Reviews</Link>
                        <Link to="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
                        <Link to="/compare" className="text-gray-700 hover:text-blue-600">Compare</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    </div>

                    {/* mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
                            <Link to="/reviews" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Reviews</Link>
                            <Link to="/categories" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Categories</Link>
                            <Link to="/compare" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Compare</Link>
                            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;