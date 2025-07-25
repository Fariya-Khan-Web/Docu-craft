import Image from 'next/image';
import React from 'react';

const SearchFunc = () => {
    return (
        <>
            <button
                type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
                <Image src="/search.svg" alt='search-icon' className="h-5 w-5" width={10} height={10} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 focus:border-none focus:outline-none"
                />
                <kbd
                    className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500"
                >
                    <kbd className="font-sans">Ctrl </kbd>
                    <kbd className="font-sans">K</kbd>
                </kbd>
            </button>

        </>
    );
};

export default SearchFunc;