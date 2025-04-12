'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NGENConference() {
    return (
        <div className='min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mx-auto max-w-3xl'>
                <h1 className='mb-4 text-4xl font-bold'>
                    NGEN Trailblazers Conference – Spring 2025
                </h1>
                <p className='mb-4 text-sm text-neutral-500 dark:text-neutral-400'>
                    April 12, 2025
                </p>

                <p className='mb-6'>
                    In the spirit of <em>“you can just do things,”</em> I pushed myself to attend
                    this entrepreneurship conference by myself. I tend to feel uncomfortable at
                    “networking” events; this was a great opportunity to make the uncomfortable feel
                    a bit more comfortable.
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Environment Matters</h2>
                <p className='mb-6'>
                    These kinds of events illustrate just how important environment is for success.
                    Everyone in the room had a story to share about what they were building. I felt
                    naked without a project of my own. It is human nature to want to fit in. In a
                    room full of complacency, I&apos;ll naturally sink to that level. But in a room
                    full of courage and passion, I&apos;ll rise to the occasion. Ambition is
                    contagious. More than any advice given by the speakers, getting to talk to the
                    other students was hands-down the most inspiring element of the conference. It
                    feels strange admitting that, because that seems like the kind of messaging
                    these networking events try to spread. But maybe there&apos;s really something
                    to it.
                </p>

                <p className='mb-6'>
                    Each speaker was tremendous. I want to record some thoughts given by some of my
                    favorites so I can look back and reference back to the important points.
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Speaker Highlights</h2>

                <p className='mb-6'>
                    <strong>Eric Chen</strong> gave an <em>awesome</em> presentation on customer
                    discovery. When building QuickCase, I worked out of order: I identified a
                    problem, built a prototype, then “interviewed” customers (gave them a Google
                    Form). Lots of problems here. I could not have known what customers truly wanted
                    before interviewing them. Instead, I spent a year guessing. I eventually asked
                    ridiculous hypotheticals (“assuming the product were accurate most of the
                    time”). The user testing cohort was a group of students from Penn Carey Law— my
                    brother&apos;s friends. They knew the product was built by the brother of their
                    friend, so they likely bit their tongue when giving feedback. I should have read
                    <em>The Mom Test</em>. I gained so much value from a workshop only 30 minutes in
                    length; I left with more questions than I came in with, which I believe is
                    actually a good thing. Maybe I will reach out to Chen to try to learn a bit more
                    from him one-on-one.
                </p>

                <p className='mb-6'>
                    A 30-minute workshop gave me more clarity than a year of guessing. I left with
                    more questions than I came with—probably a good sign. I&apos;m considering
                    reaching out to Chen directly to learn more.
                </p>

                <p className='mb-6'>
                    <strong>Geoff Ralston</strong>, former President of YC, was phenomenal, as
                    expected. He predicts AGI will be here by 2027, and no later than 2030. He
                    thinks society will soon be bifurcated into two distinct classes: humans and
                    superhumans (thought experiment: what happens when Neuralink soon interacts with
                    LLMs to give a single individual all of human knowledge?). He had some crazy
                    theory about quantum mechanics implying multiple universes exist— this one
                    definitely went over my head. But he gave these crazy takes to illustrate a
                    simple, yet powerful framework for evaluating a startup. To win, you need to
                    have a contrarian view. Eric Chen emphasized a similar point. Winners are those
                    whose views are right, but non-consensus. That&apos;s hard.
                </p>

                <Image
                    src='/right_vs_consensus_matrix.webp'
                    alt='Right vs. Consensus'
                    width={600}
                    height={600}
                    className='mx-auto rounded-sm shadow-lg'
                />

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Pitch Competition & Takeaways</h2>
                <p className='mb-6'>
                    One of the UPenn engineers I met earlier in the day ended up winning the
                    event&apos;s pitch competition, earning him a $10k note from BullMont Capital.
                    His product leveraged conversational AI agents for more efficient procurement
                    processes. Perhaps best of all, he was a nice, genuine guy. I truly was rooting
                    for him.
                </p>

                <p className='mb-6'>
                    Why not me? On the train ride home, I listened to YC podcasts about Vertical AI
                    Agents, watched tutorials on building agentic workflows in n8n, and brainstormed
                    potential SaaS replacements in my Notes app. This event reignited an
                    entrepreneurial excitement I haven&apos;t felt since the Silicon Valley Tiger
                    Trek trip in January.
                </p>
            </motion.div>
        </div>
    );
}
