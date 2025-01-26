'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
    {
        title: 'Building an AI-Powered E-reader: Lessons Learned',
        description:
            'My journey developing Locked, challenges faced, and insights gained along the way.',
        date: 'January 20, 2024',
        category: 'Tech',
        slug: 'building-ai-ereader',
    },
    {
        title: 'The Future of Reading: AI and Education',
        description: 'How artificial intelligence is transforming the way we read and learn.',
        date: 'January 15, 2024',
        category: 'Education',
        slug: 'future-of-reading',
    },
    {
        title: 'Princeton Basketball: Mid-Season Analysis',
        description: "Breaking down the Tigers' performance and what to expect in the second half.",
        date: 'January 10, 2024',
        category: 'Basketball',
        slug: 'princeton-basketball-analysis',
    },
    {
        title: 'Tech Internship Experience at [Company]',
        description: 'What I learned during my summer internship and tips for future interns.',
        date: 'December 20, 2023',
        category: 'Career',
        slug: 'tech-internship-experience',
    },
];

export default function Blog() {
    return (
        <div className='mx-auto min-h-screen max-w-4xl px-6 py-16'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-12 text-center'>
                <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100'>Blog</h1>
                <p className='mt-4 text-neutral-600 dark:text-neutral-400'>
                    Thoughts on tech, basketball, and everything in between.
                </p>
                <p className='mt-4 text-neutral-600 dark:text-neutral-400'>
                    (These are all fake articles for now— time to get writing soon!)
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
    );
}
