import React from 'react';
import request from '../utils/requests';
import { useRouter } from 'next/router';

function Nav() {
    const router = useRouter();
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {/* 
                this pulls the requst from the utils, and gets the key, and then uses
                the- deconstruction too grab each part of what you need, ie the title and/or the url
                 */}
                {Object.entries(request).map(([key, {title, url}]) => (
                    // key prop is needed.
                    <h2 
                    key={key} 
                    onClick={() => router.push(`/?genre${key}`)}
                    className='last:pr-12 cursor-pointer transition duration-100 transform 
                    hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-6 w-1/12' />
        </nav>
    )
}

export default Nav
