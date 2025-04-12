'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'The Clutch Problem',
        description:
            'Can we predict whether a player will make a shot in the clutch? Using NBA data, this project explores what defines a clutch player and whether analytics can guide end-of-game strategy.',
        image: '/clutch_intro.png',
    },
    {
        title: 'Data Sources & Features',
        description:
            'Data from NBA.com and basketball-reference.com was collected using R’s `nbastatR` package. Features included shot location, shot type, time remaining, and player season averages.',
        image: '/clutch_data.png',
    },
    {
        title: 'Modeling Approaches',
        description:
            'Three models were trained to predict shot success: logistic regression, random forests, and XGBoost. Logistic regression performed the best with ~64% accuracy.',
        image: '/clutch_modeling.png',
    },
    {
        title: 'Feature Insights',
        description:
            'All models emphasized shot location and type. The findings suggest teams should seek closer shots in clutch moments—even if it means breaking away from today’s 3-point heavy norms.',
        image: '/3p_trends.png',
    },
];

export default function Clutch() {
    return (
        <div className='relative mt-12 min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    Predicting the Clutch
                </h1>
                <div className='mt-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30'>
                    <span className='text-sm text-blue-800 dark:text-blue-300'>
                        Final Project for SML 310: Research Projects in Data Science
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
