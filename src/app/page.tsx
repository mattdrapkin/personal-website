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
        description: 'Sharing the story of the hardest I have ever worked in my life.',
        date: 'April 23, 2025',
        category: 'Personal Development',
        slug: '100k-shots',
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
            <section id='home' className='flex min-h-screen items-center px-6 pt-24'>
                <div className='mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row'>
                    <div className='md:w-1/3'>
                        <Image
                            src='/selfie_pic.jpeg'
                            alt='Matt Drapkin'
                            width={600}
                            height={600}
                            className='rounded-sm shadow-lg'
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <h1 className='mb-4 text-4xl font-bold'>Hi, I&apos;m Matt.</h1>
                        <p className='mb-4 text-lg'>
                            I studied CS at Princeton, graduating in May 2025. There, I tried my
                            hand at{' '}
                            <a
                                href='https://www.dailyprincetonian.com/staff/matt-drapkin'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-300'>
                                journalism
                            </a>
                            ,{' '}
                            <a
                                href='https://www.amazon.jobs/content/en/teams/e-commerce-foundation/ascs'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-300'>
                                engineering
                            </a>
                            ,{' '}
                            <a
                                href='https://hack4impactprinceton.netlify.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-300'>
                                {' '}
                                design
                            </a>
                            , and most recently,
                            <a
                                href='https://princo.princeton.edu/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-300'>
                                {' '}
                                investing.
                            </a>
                        </p>
                        <p className='mb-4 text-lg'>
                            I&apos;m interested in tech and entrepreneurship. I love basketball
                            (TTP). I am trying to improve both my{' '}
                            <a
                                href='https://www.goodreads.com/user/show/155808148-matt-drapkin'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-blue-600 dark:text-blue-300'>
                                reading
                            </a>{' '}
                            and{' '}
                            <span
                                className='cursor-pointer text-blue-600 dark:text-blue-300'
                                onClick={() => scrollToSection('blog')}>
                                writing
                            </span>{' '}
                            skills.
                        </p>
                        <p className='mb-4 text-lg'>
                            Learn more about some of my side projects and rambling thoughts below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id='projects' className='min-h-screen px-6 py-24'>
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
                                    <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'>
                                        {article.category}
                                    </span>
                                    <time className='text-sm text-neutral-500 dark:text-neutral-400'>
                                        {article.date}
                                    </time>
                                </div>
                                <Link href={`/blog/${article.slug}`}>
                                    <h2 className='mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400'>
                                        {article.title}
                                    </h2>
                                </Link>
                                <p className='text-neutral-600 dark:text-neutral-400'>
                                    {article.description}
                                </p>
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className='mt-4 inline-flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300'>
                                    Read more
                                    <svg
                                        className='ml-1 size-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                                        />
                                    </svg>
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
