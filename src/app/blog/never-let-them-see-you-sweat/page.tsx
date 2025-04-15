'use client';

import { motion } from 'framer-motion';

export default function NeverLetThemSeeYouSweat() {
    return (
        <div className='min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mx-auto max-w-3xl'>
                <h1 className='mb-4 text-4xl font-bold'>Never Let Them See You Sweat</h1>
                <p className='mb-4 text-sm text-neutral-500 dark:text-neutral-400'>
                    April 14, 2025
                </p>

                <p className='mb-6'>
                    The Last Lectures series is a Princeton tradition. Distinguished speakers are
                    invited to campus to speak to the senior class in the weeks leading up to
                    graduation. The first one I attended was{' '}
                    <strong>Never Let Them See You Sweat</strong>, presented by the current CEO of
                    Kuwait Foreign Petroleum Exploration Company (KFPEC),{' '}
                    <a
                        href='https://energycouncil.com/event-speakers/sheikh-nawaf-al-sabah/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-300'>
                        Nawaf Al-Sabah
                    </a>
                    .
                </p>

                <p className='mb-6'>
                    I thought I learned more in this hour-long session than I have in my
                    semester-long leadership development class this semester. Jotting down some key
                    takeaways below.
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Never Let Them See You Sweat</h2>
                <p className='mb-6'>
                    The overarching theme of Al-Sabah’s lecture: “Never let them see you sweat.” He
                    took a gap year during his time at Princeton to help his family in Kuwait during
                    the Gulf War. His father was the Ambassador to the U.S. at the time. Al-Sabah
                    recalled his father being an emotional man at home. But in public, he was stoic
                    and steel faced. He was only selectively vulnerable to the public. He was a
                    leader his people wanted to look up to.
                </p>

                <p className='mb-6'>
                    In times of stress, people want a leader who is confident and composed. People
                    want to be put at ease. They want to know things will be okay. Even if the
                    leader is unsure, they should never let it show. People don’t want to see their
                    leader sweat.
                </p>

                <p className='mb-6'>
                    Appealing to pathos isn’t inherently destructive, but it must be done with
                    caution in positions of power. Recognizing the correct context to share
                    vulnerabilities is crucial to keeping people calm under times of duress.
                </p>

                <p className='mb-6'>
                    Al-Sabah said he likes to have at least one or two people in his inner-circle
                    (for him, his CFO and General Counsel) who can give a quick wink if his emotions
                    ever outwardly cross an appropriate threshold. No individual is perfect— not
                    even the CEO. Having others who can keep the leader in check is crucial to
                    having that leader maximize their potential.
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>
                    Three Key Principles of Leadership
                </h2>

                <p className='mb-6'>
                    <strong>Know what you don’t know; never fake it.</strong> <br />
                    Humility will open doors intelligence alone could never. Al-Sabah was a master
                    of both international relations and law when he got to KFPEC, but he knew very
                    little about the technology and economics behind the energy industry. Allowing
                    himself to ask for help from people from trade schools, carrying skillsets
                    wholly different from his own, allowed him to accelerate his learning. Remaining
                    humble, identifying his weak points, and finding people best suited to fill in
                    those gaps allowed him to learn, fast.
                </p>

                <p className='mb-6'>
                    <strong>Act like the person you want to be.</strong> <br />
                    In college, Al-Sabah looked up to U.S. Secretary of State James A. Baker III,
                    Princeton Class of 1952, who preached “The Five P’s: Proper Preparation Prevents
                    Poor Performance.” Al-Sabah instilled this into his own leadership style. He
                    recognized that the seemingly off-the-cuff, remarkable presentation skills of
                    successful leaders like Baker was usually the result of hours of unseen
                    preparation. Al-Sabah wanted to be this kind of charismatic speaker. So he
                    started acting like the kind of person that would. I am not surprised by this—
                    he was a charismatic and confident lecturer in front of our Princeton crowd.
                    Al-Sabah’s prep helped develop the same swagger he saw in Baker as a speaker.
                    Acting like the person you want to be is a straightforward way to inherit their
                    most admirable tried-and-true qualities.
                </p>

                <p className='mb-6'>
                    <strong>Don’t sweat your mistakes.</strong> <br />
                    Everyone fails. Successful people fail a lot. Great leaders aren’t shaken up by
                    mistakes. Enumerating the outcomes makes it logically clear why we shouldn’t
                    sweat our mistakes: Some mistakes which seem awful to us aren’t even noticed by
                    others. Don’t sweat these. If they are noticed by others, they’re often
                    forgotten after some relatively short period of time. Don’t sweat these. Even if
                    they are not forgotten for a long time, most people aren’t hyper fixated on that
                    mistake for very long. Don’t sweat these. If this mistake is one which isn’t
                    going away, and is truly a mistake which can’t be ignored, assess what can be
                    done to remedy the mistake. If it is out of your control, there’s nothing to be
                    done. Don’t sweat these. If the problem is within your control, execute and fix
                    the mistake as a good leader would. Because you’re able to solve the issue,
                    guess what? Don’t sweat!
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Takeaways</h2>
                <p className='mb-6'>A few shorter lessons Al-Sabah shared with the crowd:</p>
                <ul className='mb-6 list-inside list-disc'>
                    <li>
                        Maintain intergenerational ties. Catching up with the parents of his friends
                        from high school is an extremely fulfilling part of his life to this day.
                    </li>
                    <li>
                        Tell people happy birthday. An easy way to remind those in your network of
                        your connection (and perhaps more importantly, a nice thing to do).
                    </li>
                    <li>
                        On imposter syndrome: He’s never felt it. He’s acknowledged how much he has
                        to learn at different stages of his career, but never doubted his own
                        ability to get the job done.
                    </li>
                </ul>

                <p className='mb-6'>
                    This last point is one of major interest to me. I recently read on{' '}
                    <a
                        href='https://x.com/auren/status/1910774041981362238'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-300'>
                        X
                    </a>{' '}
                    that “no great founder ever had imposter syndrome… Jobs, Gates, Zuck, Elon… Not
                    one of them.” I was skeptical. But then, I heard Al-Sabah, CEO of KFPEC, echo a
                    similar sentiment. Hm. Maybe it could be true, then. All great founders/CEOs
                    have such immense self-confidence that they never fear they lack what it takes.
                </p>

                <p className='mb-6'>
                    This is scary news for myself— and, most humans, I’d imagine— because I feel
                    imposter syndrome relatively frequently. It comes and goes in waves, and I have
                    gotten better at managing my own. But it is still there, isn’t it? Maybe I am
                    unfit to ever run a company. Maybe imposter syndrome automatically disqualifies
                    me from ever being a founder.
                </p>

                <p className='mb-6'>
                    Or maybe, I should keep it to myself. The same way Al-Sabah might keep it to
                    himself. The same way Jobs and Gates and Zuck and Elon might keep it to
                    themselves. After all, the one takeaway Al-Sabah wanted to impart on Princeton’s
                    Class of 2025 was exactly that: <strong>never let them see you sweat</strong>.
                </p>
            </motion.div>
        </div>
    );
}
