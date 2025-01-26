'use client';

import { LinkPreview } from '@/components/ui/link-preview';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'What is inFormal?',
        description:
            'inFormal Clothing is a web-based application that allows Princeton students to borrow and lend clothing with each other. Any person with a valid Princeton netID can access our app, and each user can act as both a lender and a borrower.',
        image: '/informal_landing.png',
    },
    {
        title: 'Seamless Borrowing and Lending',
        description:
            'Users can create listings, browse available items, and manage transactions with ease.',
        image: '/borrow_lend.png',
    },
    {
        title: 'Robust Transaction System',
        description:
            'Incorporates advanced features like black-out dates, transaction statuses, and user ratings to ensure a smooth borrowing and lending experience.',
        image: '/transactions.png',
    },
    {
        title: 'Responsive and Intuitive UI',
        description:
            'Built with user-friendly design principles, the platform is accessible on desktop and mobile, featuring interactive elements and clear navigation.',
        image: '/ui_design.png',
    },
    {
        title: 'Advanced Features',
        description:
            'Includes user notifications, bookmarks, multi-image uploads, and profile editing. A points-based economy is used to manage transactions.',
        image: '/features.png',
    },
    {
        title: 'Extensive Testing and Feedback',
        description:
            'The system underwent rigorous testing, including internal, white-box, and black-box testing, as well as iterative user evaluations to optimize functionality.',
        image: '/testing.png',
    },
];

export default function InFormal() {
    return (
        <div className='relative min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    inFormal Clothing
                </h1>
                <h3 className='text-md neutral-900 mt-3 bg-clip-text text-transparent dark:text-neutral-500'>
                    Developed by Katie Heller &apos;25, Brandon Cheng &apos;25, Caiden Kiani
                    &apos;25, Jacob Santelli &apos;25, and Matt Drapkin &apos;25.
                </h3>
                <div className='mt-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30'>
                    <span className='text-sm text-blue-800 dark:text-blue-300'>
                        Selected by Princeton{' '}
                        <LinkPreview url='https://www.tigerapps.org' className='font-semibold'>
                            TigerApps
                        </LinkPreview>{' '}
                        to be onboarded into 2024 Academic Year.
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
        </div>
    );
}
