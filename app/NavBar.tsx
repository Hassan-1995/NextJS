'use client'
import React from 'react';
import Link from 'next/link';
import GetIcon from './GetIcon';

const NavBar = () => {
    return (
        <div className="flex items-center bg-primary px-3 py-5">
            <div className="flex space-x-3">
                <Link href="/" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Home
                </Link>
                <Link href="/users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    All
                </Link>
                <Link href="/active-users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Active
                </Link>
                <Link href="/draft-users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Draft
                </Link>
                <Link href="/archived-users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Archived
                </Link>
            </div>
        
            <div className="flex-grow"></div>
        
            <div className="flex space-x-3">
                <Link href="/draft-users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Export
                </Link>
                <Link href="/archived-users" passHref className="px-2 py-1 text-white font-bold rounded hover:bg-secondary hover:text-black">
                    Add Product
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
