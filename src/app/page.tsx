'use client';

import Carousel from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Reusing the articles data from the blog page
const articles = [
    {
        title: 'The Game',
        description: "Why it's time for me to start a blog.",
        date: 'April 11, 2025',
        category: 'Personal Development',
        slug: 'the-game',
    },
    {
        title: 'Never Let Them See You Sweat',
        description:
            'Notes from the Last Lectures: Nawaf Al-Sabah, CEO of Kuwait Petroleum Company.',
        date: 'April 14, 2025',
        category: 'Entrepreneurship',
        slug: 'never-let-them-see-you-sweat',
    },
    {
        title: 'NGEN Trailblazers Conference – Spring 2025',
        description: 'Notes from the Ivy+ entrepreneurship conference.',
        date: 'April 12, 2025',
        category: 'Entrepreneurship',
        slug: 'ngen-conference-2025',
    },
    {
        title: '100,000 Shots',
        description: 'Basketball made me who I am today. This is my story.',
        date: 'April 23, 2025',
        category: 'Personal Development',
        slug: '100k-shots',
    },
    {
        title: 'Newly Graduated. Once Again, Terrified.',
        description: 'I graduated from Princeton. Now what?',
        date: 'May 29, 2025',
        category: 'Personal Development',
        slug: 'newly-graduated',
    },
    {
        title: 'Y Combinator AI Startup School',
        description: 'Notes from Elon Musk, Sam Altman, and more.',
        date: 'June 22, 2025',
        category: 'Entrepreneurship',
        slug: 'yc-ai-sus',
    },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Reusing the projects data
const slideData = [
    {
        title: 'QuickCase',
        button: 'Learn more',
        src: '/qc_cover.png',
        goto: 'quickcase',
    },
    {
        title: 'Locked',
        button: 'Learn more',
        src: '/locked_cover.png',
        goto: 'locked',
    },
    {
        title: 'Image Super-Resolution Using Deep Convolutional Networks',
        button: 'Learn more',
        src: '/srcnn_cover.webp',
        goto: 'cv',
    },
    {
        title: "inFormal: Princeton's New Clothing Marketplace",
        button: 'Learn more',
        src: '/informal_cover.png',
        goto: 'informal',
    },
    {
        title: 'Predicting the Clutch in the 2022-23 NBA Season',
        button: 'Learn more',
        src: '/clutch_cover.jpg',
        goto: 'clutch',
    },
    {
        title: 'The Daily Princetonian: MBB Beat Writer',
        button: 'See articles',
        src: '/princeton_mbb.jpg',
        url: 'https://www.dailyprincetonian.com/staff/matt-drapkin',
    },
];

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col'>
            {/* Home Section */}
            <section
                id='home'
                className='relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-10'>
                {/* Minimalist Background */}
                <div className='pointer-events-none absolute inset-0 -z-10 size-full bg-[#faf8f5] dark:bg-[#1a1a1a]' />

                <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2'>
                    {/* Left Column: Large Typography */}
                    <div className='order-2 flex flex-col md:order-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='mb-3 text-sm font-medium uppercase tracking-widest text-[#1e5a35] dark:text-[#a6c9b5]'>
                            Matt Drapkin
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='mb-12 font-serif text-[5rem] leading-none tracking-tight text-[#1e5a35] dark:text-[#e9f0ec] md:text-[7rem]'>
                            <div className='block'>TECH</div>
                            <div className='block'>BUILDER</div>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className='max-w-md text-lg text-[#496953] dark:text-[#b7d1c1]'>
                            CS @ Princeton &middot; Investor at Princeton University Investment
                            Company{' '}
                            <Link
                                href='https://princo.princeton.edu/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                (PRINCO)
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='mt-16'>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className='border-2 border-[#1e5a35] px-8 py-3 text-sm font-medium uppercase tracking-wider text-[#1e5a35] transition-colors duration-300 hover:bg-[#1e5a35] hover:text-white dark:border-[#a6c9b5] dark:text-[#a6c9b5] dark:hover:bg-[#a6c9b5] dark:hover:text-[#1a1a1a]'>
                                View Projects
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Image with Decorative Rotating Blob BG */}
                    <div className='relative order-1 flex items-center justify-center md:order-2'>
                        {/* Rotating blob as background, always behind everything */}
                        <motion.div
                            aria-hidden
                            className='absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2'
                            style={{ width: 480, height: 480 }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatType: 'loop',
                            }}>
                            <svg
                                width='100%'
                                height='100%'
                                viewBox='0 0 480 480'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M240,0 C312,0,360,48,408,72 C456,96,480,168,480,240 C480,312,456,384,408,408 C360,432,312,480,240,480 C168,480,120,432,72,408 C24,384,0,312,0,240 C0,168,24,96,72,72 C120,48,168,0,240,0 Z'
                                    fill='#d5d7f0'
                                    className='dark:fill-[#384d41]'
                                />
                            </svg>
                        </motion.div>
                        {/* Photo always on top, centered */}
                        <div
                            className='relative flex items-center justify-center'
                            style={{ width: 400, height: 400 }}>
                            <Image
                                src='/yc-ai-sus-selfie.jpeg'
                                alt='Matt Drapkin'
                                width={400}
                                height={400}
                                priority
                                style={{ objectFit: 'cover' }}
                                className='rounded-lg border-4 border-white shadow-xl dark:border-neutral-900'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id='projects' className='min-h-screen overflow-x-hidden px-6 py-24'>
                <div className='mx-auto max-w-6xl'>
                    <h2 className='mb-12 text-center text-3xl font-bold'>Projects</h2>
                    <div className='relative size-full'>
                        <Carousel slides={slideData} />
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id='blog' className='min-h-screen px-6 py-24'>
                <div className='mx-auto max-w-4xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-12 text-center'>
                        <h2 className='mb-4 text-3xl font-bold'>Blog</h2>
                        <p className='text-neutral-600 dark:text-neutral-400'>
                            Writing to improve my skills in writing.
                        </p>
                    </motion.div>

                    <div className='grid gap-8'>
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='group relative rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900'>
                                <div className='mb-2 flex items-center gap-4'>
                                    <span className='rounded-full bg-[#feffff] px-3 py-1 text-xs font-medium text-[#1e5a35] dark:bg-[#333d37] dark:text-[#a6c9b5]'>
                                        {article.category}
                                    </span>
                                    <time className='text-sm text-neutral-500 dark:text-neutral-400'>
                                        {article.date}
                                    </time>
                                </div>
                                <Link href={`/blog/${article.slug}`}>
                                    <h2 className='mb-2 flex items-center gap-2 text-xl font-semibold text-[#1e5a35] transition-colors group-hover:text-[#496953] dark:text-[#e9f0ec] dark:group-hover:text-[#b7d1c1]'>
                                        {article.slug === 'yc-ai-sus' && (
                                            <Image
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png'
                                                alt='Y Combinator Logo'
                                                width={28}
                                                height={28}
                                                style={{
                                                    height: '1.5em',
                                                    width: 'auto',
                                                    marginRight: 8,
                                                    display: 'inline-block',
                                                }}
                                                className='inline align-middle'
                                                priority
                                            />
                                        )}
                                        {article.title}
                                    </h2>
                                </Link>
                                <p className='text-neutral-600 dark:text-neutral-400'>
                                    {article.description}
                                </p>
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className='text-[#1e5a35] hover:text-[#496953] hover:underline dark:text-[#a6c9b5] dark:hover:text-[#b7d1c1]'>
                                    Read more →
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className='fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900'>
                <div className='mx-auto flex max-w-6xl items-center justify-center space-x-6 px-6 py-4'>
                    <a
                        href='https://www.linkedin.com/in/mattdrapkin/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-600 transition hover:text-blue-600 dark:text-neutral-300'
                        aria-label='LinkedIn'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            className='size-6'
                            viewBox='0 0 24 24'>
                            <path d='M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.6-1.2 2.2-2.4 4.4-2.4 4.7 0 5.6 3.1 5.6 7.1V24h-4v-7.8c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.9h-4V8z' />
                        </svg>
                    </a>
                    <a
                        href='https://x.com/mattdrapkin'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-600 transition hover:text-blue-400 dark:text-neutral-300'
                        aria-label='X (Twitter)'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            className='size-6'
                            viewBox='0 0 24 24'>
                            <path d='M20.66 2H17.8L10.93 10.35 4.8 2H.61l8.3 10.97L.09 22h2.86l6.74-8.37 6.54 8.37h4.2l-8.66-11.3L20.66 2z' />
                        </svg>
                    </a>
                    <a
                        href='https://github.com/mattdrapkin/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white'
                        aria-label='GitHub'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            className='size-6'
                            viewBox='0 0 24 24'>
                            <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 1.5.7 1.9 1.2.1-1 .4-1.6.8-2-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.7 9.7 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.8 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6a11.6 11.6 0 0 0 7.9-10.9C23.5 5.65 18.35.5 12 .5z' />
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}
