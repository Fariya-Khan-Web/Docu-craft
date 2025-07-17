import Link from 'next/link';
import React from 'react';

const Sidebar = ({ docs }) => {

    const roots = docs.filter(doc => !doc.parent)

    const nonRoots = Object.groupBy(docs.filter(doc => doc.parent), ({ parent }) => parent)


    return (
            <nav className="hidden lg:mt-10 lg:block">
                <ul role="list" className="border-l border-transparent">
                    <div className="relative mt-3 pl-2">

                        <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                        <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                        <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                        {
                            roots.map((rootNode) => (
                                <li key={rootNode.id}>
                                    <Link
                                        aria-current="page"
                                        className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                        href={`/docs/${rootNode.id}`}>

                                        <span className="truncate">
                                            {rootNode.title}
                                        </span>
                                    </Link>

                                    {nonRoots[rootNode.id] &&

                                        <ul role="list"
                                        // style={"opacity: 1"}
                                        >
                                            {
                                                nonRoots[rootNode.id].map((obj, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                            href={`/docs/${rootNode.id}/${obj.id}`}
                                                        >
                                                            <span class="truncate">{obj.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                                )
                                            }
                                        </ul>
                                    }
                                </li>
                            ))
                        }

                    </div>
                </ul>
            </nav>
    );
};

export default Sidebar;