import Image from 'next/image';
import React from 'react';
import SearchFunc from './SearchFunc';

const Search = () => {
    return (
        <div className="relative hidden lg:block lg:max-w-md lg:flex-auto ">
            <SearchFunc />

            {/* <!-- result card --> */}
            
            {/* <div
                className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow"
            >
                <p className="!text-lg">
                    Showing results for
                    <span className="font-semibold">keyword:</span>
                </p>
                <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                    <li className="">
                        <a className="transition-all hover:text-emerald-600" href="#"
                        >How to create a new component in Vue.js</a
                        >
                    </li>
                    <li className="">
                        <a className="transition-all hover:text-emerald-600" href="#"
                        >How to create a new component in React.js</a
                        >
                    </li>
                    <li className="">
                        <a className="transition-all hover:text-emerald-600" href="#"
                        >Next.js Routing</a
                        >
                    </li>
                    <li className="">
                        <a className="transition-all hover:text-emerald-600" href="#"
                        >SSR - What is it?</a
                        >
                    </li>
                </ul>
            </div> */}
        
        </div>
    );
};

export default Search;