'use client';

import { motion } from 'framer-motion';

export default function TheGame() {
    return (
        <div className='min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mx-auto max-w-3xl'>
                <h1 className='mb-4 text-4xl font-bold'>The Game</h1>
                <p className='mb-4 text-sm text-neutral-500 dark:text-neutral-400'>
                    April 11, 2025
                </p>

                <p className='mb-6'>
                    In too many areas of my life, I find myself theorizing profusely while sitting
                    idly. I tell people I like the idea of entrepreneurship; yet I refuse to ship. I
                    tell people I like journaling; yet I refuse to write. I tell people I like
                    limiting my caffeine intake; yet I drink two energy drinks per day.
                </p>

                <p className='mb-6'>
                    Would I call myself an unambitious person? Certainly not. I pride myself on my
                    work ethic and drive. There are certain facets of my life— grades, athletics,
                    career— which have received the nourishment necessary to grow to a level I am
                    proud. In other areas, however, I am weak. Not only have I acknowledged that I
                    am weak, but I have acknowledged what needs to change as well. I’ve read the
                    motivational quotes. I’ve heard the benefits of reading long-form content. But I
                    don’t act on them.
                </p>

                <p className='mb-6'>
                    Where does this disconnect stem from? In some respects, I am an absolute killer.
                    In others, I feel almost paralyzed.
                </p>

                <p className='mb-6'>
                    I believe the key differentiator between those domains which I thrive in and
                    those which I fail to act on is the existence of <em>the game</em>.
                </p>

                <p className='mb-6'>
                    I am pretty good at playing the game. Those pre-existing systems deeply
                    ingrained into society are those which I manage to excel in. Put me in school at
                    age 4, and watch me figure out how to get straight A’s. Put me on a basketball
                    court, and watch me figure out how to earn all-league honors. Put me in a
                    computer science program at Princeton University, and watch me secure a FAANG
                    internship.
                </p>

                <p className='mb-6'>
                    In these instances, an environment already exists where the rules are explicit:
                    do x and achieve f(x). Do your homework, and get good grades. Shoot 100,000
                    shots, and improve your three-point percentage. Do 300 LeetCode problems, and
                    get a SWE job. Because I am confident in my ability to work hard, these games
                    serve me well.
                </p>

                <p className='mb-6'>
                    What happens when you enter a game without knowing the rules? The reward
                    function is much less clear. I am about to graduate college. What is f(x) now?
                    “Success” or “happiness” sound nice. But these aren’t well-defined. What is f(x)
                    in my career? What is f(x) in my personal relationships? Do I want f(x) because
                    everyone else wants f(x)? I know that I can do x, because I’ve done some really
                    hard x before. This doesn’t intimidate me. The issue is, I need to identify what
                    f(x) is worth pursuing. And then, I need to determine what x will get me there.
                    I need to think deeply about the game I want to play.
                </p>

                <p className='mb-6'>
                    I’ve decided to start a blog as a first step towards creating my own game. One
                    f(x) I want is to be a good writer. <em>Good writers write.</em> Alright. To
                    become a good writer (f(x)), I will write (x). Hence, this blog.
                </p>

                <p className='mb-6'>
                    Some other rewards f(x) I am looking to achieve over time: learn more about
                    history, get better at sales, bench 225 lbs for reps, build a startup, take my
                    parents on vacation.
                </p>

                <p className='mb-6'>
                    Life is a game. Leaving school behind means entering a game where the rules are
                    much less clear. Writing in public will get me out of my comfort zone, improve
                    my skills along the way, and push me to think deeply about what kind of game I
                    want to play.
                </p>
            </motion.div>
        </div>
    );
}
