import React from 'react';

const Footer = () => {
    return (
        <footer class="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
            <div class="relative h-8">
                <form
                    class="absolute inset-0 flex items-center justify-center gap-6 md:justify-start"
                >
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Was this page helpful?
                    </p>
                    <div
                        class="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10"
                    >
                        <button
                            type="submit"
                            class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                            data-response="yes"
                        >
                            Yes
                        </button>
                        <div class="bg-zinc-900/10 dark:bg-white/10"></div>
                        <button
                            type="submit"
                            class="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                            data-response="no"
                        >
                            No
                        </button>
                    </div>
                </form>
            </div>
            <div
                class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row"
            >
                <p class="text-xs text-zinc-600 dark:text-zinc-400">
                    © Copyright 2023. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;