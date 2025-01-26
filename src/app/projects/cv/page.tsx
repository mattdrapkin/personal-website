'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: 'Image Super-Resolution',
        description:
            'Leverages SRCNN (Super-Resolution Convolutional Neural Networks) to upscale low-resolution images to high resolution. It provides sharpness, contrast enhancement, and texture improvements, ensuring high-quality visual outputs.',
        image: '/super_resolution.png',
    },
    {
        title: 'Dataset Diversity',
        description:
            'Trained on diverse datasets like DIV2K and Human Faces, ensuring adaptability to various use cases from real-world scenery to detailed facial features.',
        image: '/datasets.png',
    },
    {
        title: 'Quantitative Metrics',
        description:
            'Evaluates models using MSE, PSNR, and SSIM to ensure objective assessment of image quality and structural similarity. Demonstrates consistent performance across different datasets.',
        image: '/metrics.png',
    },
    {
        title: 'Innovative Architecture',
        description:
            'Explores variations in convolutional filter sizes and downsampling factors to push the boundaries of SRCNN capabilities while maintaining computational efficiency.',
        image: '/architecture.png',
    },
];

export default function ComputerVisionProject() {
    return (
        <div className='relative min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    Image Super-Resolution with SRCNN
                </h1>
                <h3 className='text-md neutral-900 mt-3 bg-clip-text text-transparent dark:text-neutral-500'>
                    Princeton COS 429 Spring 2024 Project by John Van Horn &apos;25, Clara
                    Toujas-Bernate &apos;25, and Matt Drapkin &apos;25.
                </h3>
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
