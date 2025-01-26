'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'Reading Experience',
        description:
            'A clean, distraction-free reading interface that lets users focus on content. The e-reader supports .epub files and provides a smooth reading experience with customizable font sizes, themes, and navigation controls.',
        image: '/read.png',
    },
    {
        title: 'Interactive Quizzes',
        description:
            "AI-generated questions test comprehension and retention. Questions are contextually relevant and adapt to the reader's progress through the text, ensuring effective learning and engagement.",
        image: '/answering.png',
    },
    {
        title: 'Progress Tracking',
        description:
            'Comprehensive review system that tracks progress over time. Users can revisit past questions, review their performance, and focus on areas that need more attention.',
        image: '/review.png',
    },
    {
        title: 'Smart Feedback System',
        description:
            'Detailed explanations for both correct and incorrect answers, providing positive reinforcement and learning opportunities. The system adapts to user performance and provides personalized guidance.',
        image: '/correct.png',
    },
];

export default function Locked() {
    return (
        <div className='relative min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    Locked: The AI E-reader
                </h1>
                <div className='mt-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30'>
                    <span className='text-sm text-blue-800 dark:text-blue-300'>
                        Princeton&apos;s Spring 2024 Exemplary Independent Work Award in Computer
                        Science
                    </span>
                </div>
            </motion.div>

            {/* Features Section */}
            <div className='mx-auto mt-20 max-w-6xl'>
                <div className='grid gap-16'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col items-center gap-8 md:flex-row ${
                                index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}>
                            <div className='flex-1 space-y-4'>
                                <h2 className='text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                                    {feature.title}
                                </h2>
                                <p className='text-neutral-600 dark:text-neutral-400'>
                                    {feature.description}
                                </p>
                            </div>
                            <div className='relative flex-1'>
                                <div className='overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-neutral-800'>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={300}
                                        height={100}
                                        className='size-full object-cover'
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='mx-auto mt-20 max-w-2xl text-center'>
                <a
                    href='https://github.com/mattdrapkin/locked_ereader'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition-transform hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'>
                    <span>View on GitHub</span>
                    <svg className='size-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                    </svg>
                </a>
            </motion.div>
        </div>
    );
}
