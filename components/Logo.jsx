import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Protocol"
                    className="h-6 w-auto"
                    width={10}
                    height={10}
                />
            </Link>
        </div>
    );
};

export default Logo;