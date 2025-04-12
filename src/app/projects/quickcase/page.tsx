'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'Dashboard Interface',
        description:
            'QuickCase centralizes all your legal manuscript management needs. Track document statuses, upload new manuscripts, and review editing progress from one intuitive dashboard.',
        image: '/qc_dashboard.png',
    },
    {
        title: 'Intelligent Footnote Extraction',
        description:
            'Effortlessly extract and organize footnotes from legal manuscripts. Our system automatically detects citation errors and offers AI-powered Bluebooking suggestions based on current legal standards.',
        image: '/qc_footnotes.png',
    },
    {
        title: 'RAG-Driven Citation Analyzer',
        description:
            'QuickCase uses Retrieval Augmented Generation (RAG) to analyze citations and provide detailed insights, greatly reducing the likelihood of hallucinations or faulty suggestions.',
        image: '/qc_rag.png',
    },
    {
        title: 'AI-Powered Footnote Analysis',
        description:
            'Leverage advanced AI to analyze and validate your legal citations. QuickCase highlights necessary corrections, links relevant citation guidelines, and ensures your manuscript meets professional standards.',
        image: '/qc_footnote_analysis.png',
    },
    {
        title: 'Comprehensive Source Analysis',
        description:
            'Go beyond extraction—with detailed source analysis. Quickly verify and review each reference to ensure every legal citation in your manuscript is accurate and fully supports your claims.',
        image: '/qc_source_analysis.png',
    },
];

export default function QuickCasePage() {
    return (
        <div className='relative my-12 min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text pb-4 text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    <a
                        href='https://quickcase.org'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400'>
                        QuickCase
                    </a>
                    : The AI-Powered Legal Editing Assistant
                </h1>
                <div className='mt-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30'>
                    <span className='text-sm text-blue-800 dark:text-blue-300'>
                        Princeton Senior Thesis 2025
                    </span>
                </div>
            </motion.div>

            {/* Features Section */}
            <div className='mx-auto mt-20 max-w-6xl'>
                <h2 className='mb-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    The Problem
                </h2>
                <p className='mb-8 text-neutral-600 dark:text-neutral-400'>
                    “Law Review” is one of the most prestigious extracurriculars for students in law
                    school. However, the actual work required of editors can be tedious, mundane,
                    and repetitive.
                </p>
                <h2 className='mb-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    What is QuickCase?
                </h2>
                <p className='mb-8 text-neutral-600 dark:text-neutral-400'>
                    QuickCase, The AI-Powered Legal Editing Assistant, transforms a week-long
                    editing process into one that can be completed in a single sitting. The process
                    is simple: Upload your draft to catch any Bluebook formatting mistakes, gather
                    all referenced sources at once, and find where each source adequately supports
                    the claims made in the manuscript.
                </p>
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
        </div>
    );
}
