'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Navbar() {
    return (
        <header className='fixed inset-x-0 top-0 z-50 mb-6 flex items-center justify-between px-6 py-4 backdrop-blur-sm'>
            <div className='text-xl font-bold'>
                <Image src='/logo_small.png' alt='Logo' height={92} width={92} />
            </div>
            <div className='flex items-center gap-4'>
                <nav className='flex gap-4'>
                    <Button variant='ghost' onClick={() => window.location.href = '/#home'}>
                        Home
                    </Button>
                    <Button variant='ghost' onClick={() => window.location.href = '/#projects'}>
                        Projects
                    </Button>
                    <Button variant='ghost' onClick={() => window.location.href = '/#blog'}>
                        Blog
                    </Button>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
