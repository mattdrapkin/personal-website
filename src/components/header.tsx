'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export function Header() {
    return (
        <header className='fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm'>
            <Link href='/' className='text-xl font-bold'>
                <Image src='/logo_small.png' alt='Logo' height={92} width={92} />
            </Link>
            <div className='flex items-center gap-4'>
                <nav className='flex gap-4'>
                    <Button variant='ghost' asChild>
                        <Link href='/projects'>Projects</Link>
                    </Button>
                    {/* <Button variant='ghost' asChild>
                        <Link href='/blog'>Blog</Link>
                    </Button> */}
                    <Button variant='ghost' asChild>
                        <Link href='/contact'>Contact</Link>
                    </Button>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
