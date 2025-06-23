'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation if needed, though the prompt specified external.

export default function YCAIStartupSchool() {
    return (
        <div className='min-h-screen bg-neutral-50 px-6 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mx-auto max-w-3xl'>
                <h1 className='mb-4 text-4xl font-bold'>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png'
                        alt='Y Combinator Logo'
                        width={28}
                        height={28}
                        style={{
                            height: '1.5em',
                            width: 'auto',
                            marginRight: 8,
                            display: 'inline-block',
                        }}
                        className='inline align-middle'
                        priority
                    />
                    Y Combinator AI Startup School
                </h1>
                <p className='my-4 text-neutral-600 dark:text-neutral-300'>
                    This past week, I attended YC’s first ever AI Startup School in SF.
                </p>
                <Image
                    src='https://pbs.twimg.com/media/GtqUGUMaQAAZVUd?format=jpg&name=4096x4096'
                    alt='YC AI Startup School'
                    width={1000}
                    height={1000}
                />

                <p className='my-4'>
                    Originally, I wanted to summarize the notes I took from the speakers— a
                    star-studded lineup, including Sam Altman, Elon Musk, Andrej Karpathy, and more.
                    However, over the last few days, I’ve seen tons of (both human and AI-generated)
                    summaries being pumped out on X and LinkedIn, which already cover the essential
                    takeaways from each event.
                </p>
                <p className='my-4'>
                    To avoid redundancy and practice brevity, I will take a different approach here.
                    I will write the single, most important takeaway from each speaker using only
                    the handwritten notes I took live during the conference.
                </p>

                <p className='my-6 text-xs italic'>
                    As an aside, I think taking hand-written notes offers numerous benefits compared
                    to other methods of notetaking. Handwriting forces the note-taker to remain more
                    engaged compared to recording entire-length voice transcriptions (which enables
                    the note-taker to opt out of focusing completely, with the rationale that “I can
                    just listen to it back later”). Handwriting also forces the note-taker to
                    prioritize certain pieces of information over others; it is impossible to write
                    every single word down, causing note-takers to actively process and evaluate
                    information as it is presented. In contrast, typing can often lead note-takers
                    to mindlessly echo the information presented without actively engaging with it.
                    See{' '}
                    <Link
                        href='https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-300'>
                        this article from Scientific American
                    </Link>{' '}
                    for a longer discussion.
                </p>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Speaker Takeaways</h2>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Sam Altman{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder, CEO of OpenAI)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Successful innovation requires one to be contrarian, but ultimately right.
                    </p>
                    <p className='my-6'>
                        When OpenAI released GPT-1, Elon Musk said the company had a 0% chance of
                        succeeding. That was the majority opinion of the time. Altman himself called
                        the model crap. But he had the conviction to keep progressing, believing
                        something great would come out of the project in due time. The advice is
                        simple to understand, but incredibly difficult to follow in practice.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Jared Kaplan{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder, CSO at Anthropic)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Scaling laws continue to guide AI progress. What’s left to build around it
                        is simple.
                    </p>
                    <p className='my-6'>
                        The relationships discovered between compute, dataset size, parameters, and
                        model accuracy has paved the way for massive AI progress over the last
                        decade. The models will continue to improve.{' '}
                    </p>

                    <p className='mb-6'>
                        For that reason, it is crucial that people build things that don’t (yet)
                        work. Try to get ahead of the curve. That way, once science improves AI
                        capabilities, the necessary workflows will already be in place waiting for
                        new models to be plugged in.{' '}
                    </p>

                    <p className='mb-6'>
                        This was my approach with my senior thesis,{' '}
                        <Link
                            href='/projects/quickcase'
                            className='text-blue-600 dark:text-blue-300'>
                            QuickCase
                        </Link>
                        . A model capable of complex problem-solving is necessary for verifying
                        legal formatting minutia. OpenAI’s full version of o1 was released four
                        months into the development of QC. I didn’t know when the new model would
                        come, or exactly how powerful it’d be. But I knew it would come. And they
                        will continue to come.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Aarvind Srinivas{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder, CEO of Perplexity)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Competition is to be expected, because things worth building are competed
                        over by well-funded companies.
                    </p>
                    <p className='my-6'>
                        The true moats today are moving fast, and both embracing and sleeping with
                        the fear of competition every day. That’s real.
                    </p>
                    <p className='my-6'>
                        I am not a Perplexity user myself, so I was genuinely curious how they
                        haven’t been stomped out by the incumbents yet. But people online really do
                        believe Perplexity offers better search and citation capabilities compared
                        to ChatGPT, Claude, etc. I’m excited to see how Aarvind continues to
                        challenge the big guys over the next few years with sheer velocity and a
                        chip on his shoulder.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Elon Musk{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Wears Many Hats)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        First principles thinking unlocks solutions otherwise shrouded by
                        abstraction.
                    </p>
                    <p className='my-6'>
                        People told Elon that rockets cost tens of millions of dollars. This
                        top-down perspective is limiting. Instead, Elon asked, what is a rocket made
                        of? How much does each component cost? What quantity of each component is
                        necessary? He quickly discovered how much bloat could be avoided by creating
                        rockets himself. Hence, SpaceX was born.
                    </p>
                </div>

                <Image
                    src='https://singjupost.com/wp-content/uploads/2025/06/fireside-with-Elon-Musk-at-AI-Startup-School-in-San-Francisco.jpg'
                    alt='YC AI Startup School'
                    width={1000}
                    height={1000}
                />

                <p className='mb-6'>
                    (Musk talked about a wide array of topics in just under an hour— humanoid
                    robots, multiplanetary species, etc. Find the whole conversation{' '}
                    <Link
                        href='https://www.youtube.com/watch?v=cFIlta1GkiE'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 dark:text-blue-300'>
                        here
                    </Link>
                    .)
                </p>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Satya Nadella{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (CEO of Microsoft)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        If you’re going to use energy, it better be socially acceptable. In other
                        words, AI’s energy consumption will only be “worth it” if AI is showing up
                        in real stats (like GDP surplus).
                    </p>
                    <p className='mb-6'>
                        Earlier this month, the World Bank released{' '}
                        <Link
                            href='https://www.bbc.com/news/articles/cg4v9nr23r7o'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            growth forecasts
                        </Link>{' '}
                        which predict the worst decade for global growth since the 1960’s. At the
                        same time,{' '}
                        <Link
                            href='https://privatebank.jpmorgan.com/nam/en/insights/markets-and-investing/ideas-and-insights/how-ai-can-boost-productivity-and-jump-start-growth'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            some analysts
                        </Link>{' '}
                        like those at J.P. Morgan project major boosts in GDP due to AI over the
                        next decade. In April, the U.S. government released{' '}
                        <Link
                            href='https://www.congress.gov/crs-product/IF12762#:~:text=Estimates%20of%20the%20effects%20of,over%20the%20same%20time%20frame.'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            their own analysis
                        </Link>{' '}
                        of the macroeconomic effects of AI, assessing that most estimates for the
                        short and long run effects on U.S. GDP vary, but are typically positive.
                    </p>
                    <p className='mb-6'>
                        Nadella points to GDP as an easily identifiable metric for which to assess
                        AI by— if GDP is increasing, the energy consumption associated with the
                        progress is broadly “worth it” for society. This assessment kicks the can
                        down the road a bit too far. The time lags which exist between AI adoption
                        and GDP growth imply cause-effect relationships can only be assessed after
                        time has passed since the new tech’s adoption. By 2028, AI is projected to
                        consume up to 22% of all U.S. household electricity use, and the share of
                        U.S. electricity going to data centers may triple. Policymakers won’t see
                        the effects of this on GDP for another few years— by that time, energy
                        consumption will likely rise even more.
                    </p>
                    <p className='mb-6'>
                        I am not advocating for a halt on AI progress— I actually lean more towards
                        AI optimist than doomer. But that’s beside the point. I would just ask Satya
                        how engineers and researchers should think about this concept of progress
                        being “worth it” in practice. Because the delay between AI adoption and GDP
                        impact makes it impossible to assess whether the tech is socially acceptable
                        before actually consuming more energy.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Andrej Karpathy{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder of OpenAI, Prev. Director of AI at Tesla)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Build less Iron Man robots, and more Iron Man suits.
                    </p>
                    <p className='mb-6'>
                        This talk was a fan-favorite. So many great nuggets of knowledge. Check out
                        the full talk{' '}
                        <Link
                            href='https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            here
                        </Link>
                        .
                    </p>
                    <p className='mb-6'>
                        My favorite part of the talk was Karpathy’s Iron Man analogy. The suit
                        extends Iron Man using both augmentation (giving the user strength,
                        information, and other tools) and autonomy (like having a mind of its own).
                        Today, we can build both. We can build AI tools that augment our workflows,
                        and we can build fully autonomous agents that act on our behalf.
                    </p>
                    <p className='mb-6'>
                        This gives way to the concept of the “autonomy slider,” which offers users
                        the ability to tune how much autonomy they are willing to give up for a
                        given task. For example, in Cursor, one can use just tab-completion, leaving
                        the developer almost fully in control. However, one can also give up full
                        control to agentic mode to manipulate the code base as the AI assistant sees
                        fit.
                    </p>
                    <Image
                        src='https://pbs.twimg.com/media/Gt-4bVKa4AEeeZ0.jpg'
                        alt='Andrej Karpathy - Autonomy Slider'
                        width={1456}
                        height={819}
                        className='mx-auto rounded-sm shadow-lg'
                    />
                    <p className='my-6 text-center text-xs text-gray-500 dark:text-gray-400'></p>
                    <p className='mb-6'>
                        Karpathy thinks this autonomy slider will be crucial to successful apps in
                        the coming years. Building “Cursor for X” will be a common pattern amongst
                        winning startups in the AI age. But for now, while LLMs are still fallible
                        (hallucinating, demonstrating jagged intelligence, and forgetting things
                        often), it makes sense to build less Iron Man robots and more Iron Man
                        suits.
                    </p>
                    <p className='mb-6'>
                        Less building flashy demos of autonomous agents, and more building partial
                        autonomy products.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Andrew Ng{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Chairman and Cofounder of Coursera, Founder of DeepLearning.AI)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        The greatest predictor of startup success today is{' '}
                        <span className='italic'>speed</span>. And AI speeds up startups.
                    </p>
                    <p className='mb-6'>
                        Early research has shown that AI can speed up writing production software by
                        ~30-50%. But AI can speed up prototyping by ~10x.
                    </p>

                    <p className='mb-6'>
                        Designing application architecture is now more of a{' '}
                        <Link
                            href='https://www.linkedin.com/posts/jasonyoong_jeff-bezos-explains-the-difference-between-activity-7244164615729733632-tDdM/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            two-way door
                        </Link>{' '}
                        than a one-way door. If something breaks when prototyping, it is now
                        sometimes more cost-effective to rewrite from scratch than refactor
                        entirely. AI has flipped typical software development conventions upside
                        down.{' '}
                    </p>

                    <p className='mb-6'>
                        Production software still requires another level of care and diligence.
                        Wiring up integrations, patching up security concerns, and other
                        considerations still require careful human oversight.{' '}
                    </p>

                    <p className='mb-6'>
                        But for lean startups racing to product-market fit? Having concrete ideas,
                        leveraging AI to bring those ideas to life, quickly capturing feedback, and
                        adjusting based on that feedback is the new competitive advantage.{' '}
                    </p>

                    <p className='mb-6'>
                        The same{' '}
                        <Link
                            href='https://theleanstartup.com/principles'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            build-measure-learn
                        </Link>{' '}
                        feedback loop makes up the playbook. But now, AI unlocks a 10x speed
                        advantage.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Chelsea Finn{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Assistant Prof. in CS & EE at Stanford)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        For complex tasks, training on broad datasets followed by finetuning on
                        specific, consistent examples yields better performance.
                    </p>
                    <Image
                        src='https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b9ef7a6-c0d0-48a2-82af-6bac0fd2760e_927x698.png'
                        alt='Chelsea Finn - Training Methods'
                        width={1456}
                        height={1096}
                        className='mx-auto rounded-sm shadow-lg'
                    />
                    <p className='my-6 text-center text-xs text-gray-500 dark:text-gray-400'></p>
                    <p className='mb-6'>
                        I know very little about robotics. But watching Finn’s demonstration of her
                        lab’s robot folding laundry made me feel like a kid in a candy shop. I want
                        that!
                    </p>

                    <p className='mb-6'>
                        Comparing performance across three training methods— training only on
                        curated dataset, training on all the data, or a mix of both pre-training and
                        post-training— demonstrated that the third method dramatically boosts
                        performance.
                    </p>
                    <p className='mb-6'>
                        Intuitively, this mirrors how humans learn new skills. First, the human
                        generally learns about the world around them through diverse experiences.
                        Then, the human intentionally practices a particular skill through high-
                        quality repetitions. Only experiencing one or the other would hinder
                        performance. Such is the case as well with robotics.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Jake Heller{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder, CEO of Casetext)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Find where people are outsourcing labor. Attack those markets.
                    </p>
                    <p className='mb-6'>Before: TAM = (# of seats) x ($ per seat).</p>
                    <p className='mb-6'>
                        Today: TAM = combined salaries of everyone completing a task.
                    </p>
                    <p className='mb-6'>
                        Ask the question, how would the best X professionals in the world do their
                        job with unlimited time and resources? Replace that work with reliable AI.{' '}
                    </p>
                    <p className='mb-6'>
                        Most steps salary workers take in their jobs can be replaced by either
                        deterministic algorithms or AI prompts. The more flexible in nature the
                        process, the more agentic the solution.{' '}
                    </p>
                    <p className='mb-6'>
                        {' '}
                        To build truly reliable systems, half-baked, vague prompts won’t cut it.
                        Well-defined evaluations help guide the system towards top-tier reliability.
                        Heller offered a clear roadmap for achieving reliable AI:{' '}
                    </p>
                    <ul className='mb-6 list-decimal space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800'>
                        <li className='ml-5'>
                            <strong>Ask: What does GREAT look like?</strong> For each outcome? For
                            each micro-task? Start with dozens of evals per prompt (e.g. tell GPT to
                            output T/F, or output a number between 1-7).
                        </li>

                        <li className='ml-5'>
                            <strong>
                                Iterate until the system passes all test cases consistently.
                            </strong>{' '}
                            Then add 50 more. Realistically, this could take 2+ weeks. (Most people
                            will stop iterating after a first round of prompts. Then, more people
                            will drop out after a 1% improvement. More will drop out after a 2%
                            improvement. In this game, however, EVERY % MATTERS!)
                        </li>

                        <li className='ml-5'>
                            <strong>Pre-release,</strong> ~100 evals per prompt and ~100 evals per
                            task should exist (and system should pass all evals).
                        </li>

                        <li className='ml-5'>
                            <strong>Listen + Learn:</strong> every user complaint is an opportunity
                            to add more evals
                        </li>

                        <li className='ml-5'>
                            <strong>KEEP ITERATING!</strong>
                        </li>
                    </ul>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Varun Mohan{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Cofounder, CEO of Windsurf)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        For your startup to succeed, you need to be irrationally optimistic and
                        uncompromisingly realistic.
                    </p>
                    <p className='mb-6'>
                        Mohan was irrationally optimistic at the beginning of his journey with
                        Windsurf. Most assumed GitHub Copilot would be the clear winner in the AI
                        dev-tools space (access to proprietary data, Microsoft distribution). But
                        Mohan still believed his team’s grasp on training and running models
                        themselves gave them a fighting chance at competing. His uncompromising
                        realism guided him towards his pivot away from Exafunction and towards
                        Codeium (now Windsurf).{' '}
                    </p>

                    <p className='mb-6'>
                        “Strategic moats” are dead. Network effects, branding, etc. still exist, but
                        they’re much more malleable now than ever before. Today, speed, focus, and
                        catching the wave on the next innovation are what matter most.
                    </p>
                </div>

                <div className='my-6'>
                    <span className='mb-2 mt-6 block text-xl font-bold'>
                        Sriram Krishnan{' '}
                        <span className='font-semibold text-neutral-600 dark:text-neutral-300'>
                            (Senior Policy Advisor for AI, White House)
                        </span>
                    </span>
                    <p className='mb-6 bg-yellow-600 px-2 py-1 font-bold text-black'>
                        Krishnan’s goal is to maximize American market share of tokens inferenced
                        each month.
                    </p>
                    <p className='mb-6'>
                        This is our next space race. The release of DeepSeek was “the Sputnik
                        moment.” Right now, the competition with China is tight. If we stop
                        progressing now, they could get ahead past the point of no return.{' '}
                    </p>
                    <p className='mb-6'>
                        Learning{' '}
                        <Link
                            href='http://www.incompleteideas.net/IncIdeas/BitterLesson.html'
                            target='_blank'
                            className='text-blue-600 dark:text-blue-300'>
                            The Bitter Lesson
                        </Link>{' '}
                        changed the way Krishnan thinks about AI. He{' '}
                        <Link
                            href='https://x.com/sriramk/status/1935086483440095635/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-600 dark:text-blue-300'>
                            reports sending someone the essay at least once a week
                        </Link>
                        . Internalizing the lesson and becoming “bitter-lesson pilled” sooner rather
                        than later will speed up progress by maintaining focus on the research that
                        truly moves the needle.
                    </p>
                </div>

                <h2 className='mb-4 mt-10 text-2xl font-semibold'>Closing Thoughts</h2>
                <p className='mb-6'>
                    As is usually the case after attending this sort of conference, I left feeling
                    motivated, inspired, and called towards building something people want. I
                    attribute lots of it to the YC propaganda (Garry Tan’s words of affirmation,
                    “Make Something People Want” hats and t-shirts). But I also know it comes from
                    surrounding myself with some really incredible people. From PhD-level
                    researchers to first-time founders, it was impossible to <em>not</em> dream big
                    in that environment. Everyone around me was doing so.
                </p>
                <p className='mb-6'>
                    I’m still on my own personal journey towards finding a pain point customers
                    badly want solved. I don’t want to force my way into being a founder. I don’t
                    want to try to jam puzzle pieces where they don’t belong. But my eyes are now
                    more open than ever. My curiosity is running wild. And while I do not feel
                    absolutely destined to eventually start something of my own, I am becoming more
                    confident each day that if I want it, then it is within my reach.
                </p>
            </motion.div>
        </div>
    );
}
