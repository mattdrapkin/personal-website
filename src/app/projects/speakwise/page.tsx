'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
    {
        title: 'Audio Analysis',
        description:
            'Our AI analyzes your vocal delivery to identify patterns and provide data-driven insights.',
        bullets: [
            'Detailed pace and rhythm analysis',
            'Expressiveness and engagement monitoring',
            'Compare your delivery to conversational standards',
        ],
        image: '/sw_audio.png',
    },
    {
        title: 'Video Analysis',
        description:
            'Watch back your own video to understand how others see you. Seeing is believing.',
        bullets: ['Do you fidget?', 'Do you make eye contact?', 'Do you smile?'],
        image: '/sw_video.png',
    },
    {
        title: 'Transcript Review',
        description:
            'Review a transcript of your recording alongside personalized AI-powered feedback.',
        bullets: [
            'Do you use filler words (um, uh, like, you know)?',
            'Do you repeat yourself too often?',
            'How expansive is your vocabulary?',
        ],
        image: '/sw_transcript.png',
    },
    {
        title: 'AI-Powered Feedback',
        description: 'Our AI provides personalized feedback to help you improve your delivery.',
        bullets: [
            'Detailed pace and rhythm analysis',
            'Expressiveness and engagement monitoring',
            'Compare your delivery to conversational standards',
        ],
        image: '/sw_ai.png',
    },
];

const benefits = [
    {
        title: 'Just Listen— No Visuals',
        description:
            "Removing the video forces you to hear yourself as others do. You'll notice things you typically miss — like speed, tone, and vocal confidence.",
    },
    {
        title: 'Watch without sound — Focus on Body Language',
        description:
            'When you remove audio, you become acutely aware of your physical presence. This is how your audience sees you — gestures, posture, eye contact, facial expressions.',
    },
    {
        title: "Read Your Words — As If You're the Listener",
        description:
            'Reading your own speech exposes patterns in language and structure. It helps you identify filler words, rambling, repetition, and lack of clarity that might not stand out when speaking.',
    },
];

export default function SpeakwisePage() {
    return (
        <div className='relative my-12 min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12 dark:from-neutral-950 dark:to-neutral-900'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mx-auto max-w-4xl text-center'>
                <h1 className='bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text pb-4 text-5xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-500'>
                    <a href='https://speakwise.art' target='_blank' rel='noopener noreferrer'>
                        <span className='bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent'>
                            Speakwise
                        </span>
                    </a>
                    : Master Public Speaking with Deliberate Practice
                </h1>
                <div className='mt-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30'>
                    <span className='text-sm text-blue-800 dark:text-blue-300'>
                        Your AI-powered public speaking coach
                    </span>
                </div>
            </motion.div>

            {/* Three-Step Process */}
            <div className='mx-auto mt-20 max-w-6xl'>
                <h2 className='mb-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    The Three-Step Process
                </h2>
                <p className='mb-8 text-neutral-600 dark:text-neutral-400'>
                    Our structured approach is grounded in academic research to transform your
                    communication skills through deliberate practice and AI-powered feedback.
                </p>
                <div className='grid gap-16'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className='flex-1 space-y-4'>
                                <h2 className='text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                                    {step.title}
                                </h2>
                                <p className='text-neutral-600 dark:text-neutral-400'>
                                    {step.description}
                                </p>
                                <ul className='list-disc pl-5 text-neutral-600 dark:text-neutral-400'>
                                    {step.bullets.map(bullet => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='relative flex-1'>
                                <div className='overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-neutral-800'>
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={300}
                                        height={180}
                                        className='size-full object-cover'
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why Speakwise Works */}
            <div className='mx-auto mt-20 max-w-6xl'>
                <h2 className='mb-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100'>
                    Why Speakwise Works
                </h2>
                <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {/* Purple Card */}
                    <div className='flex flex-col items-start rounded-xl border border-purple-300 bg-purple-100/70 p-6 shadow-md transition-all dark:border-purple-600 dark:bg-purple-900/30'>
                        <h3 className='mb-2 text-xl font-semibold text-purple-900 dark:text-purple-100'>
                            {benefits?.[0]?.title}
                        </h3>
                        <p className='text-base text-purple-900 opacity-90 dark:text-purple-100'>
                            {benefits?.[0]?.description}
                        </p>
                    </div>
                    {/* Green Card */}
                    <div className='flex flex-col items-start rounded-xl border border-green-300 bg-green-100/70 p-6 shadow-md transition-all dark:border-green-600 dark:bg-green-900/30'>
                        <h3 className='mb-2 text-xl font-semibold text-green-900 dark:text-green-100'>
                            {benefits?.[1]?.title}
                        </h3>
                        <p className='text-base text-green-900 opacity-90 dark:text-green-100'>
                            {benefits?.[1]?.description}
                        </p>
                    </div>
                    {/* Blue Card */}
                    <div className='flex flex-col items-start rounded-xl border border-blue-300 bg-blue-100/70 p-6 shadow-md transition-all dark:border-blue-600 dark:bg-blue-900/30'>
                        <h3 className='mb-2 text-xl font-semibold text-blue-900 dark:text-blue-100'>
                            {benefits?.[2]?.title}
                        </h3>
                        <p className='text-base text-blue-900 opacity-90 dark:text-blue-100'>
                            {benefits?.[2]?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
