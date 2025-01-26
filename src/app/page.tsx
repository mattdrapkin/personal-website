'use client';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className='mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-black dark:text-white md:text-4xl lg:text-5xl lg:leading-snug'>
                My name is{' '}
                <Highlight className='text-black dark:text-white'>Matt Drapkin</Highlight>. I&apos;m
                passionate about tech, investing, and basketball. Welcome!
            </motion.h1>
        </HeroHighlight>
    );
}
