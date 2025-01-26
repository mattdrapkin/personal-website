'use client';

import { IconArrowNarrowRight } from '@tabler/icons-react';
import { useEffect, useId, useRef, useState } from 'react';

interface SlideData {
    title: string;
    button: string;
    src: string;
    url?: string;
    goto?: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty('--x', `${x}px`);
            slideRef.current.style.setProperty('--y', `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = '1';
    };

    const { src, button, title, url, goto } = slide;

    return (
        <li
            ref={slideRef}
            className='relative z-10 mx-[4vmin] flex size-[70vmin] flex-1 flex-col items-center justify-center text-center text-white opacity-100 transition-all duration-300 ease-in-out'
            onClick={() => handleSlideClick(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform:
                    current !== index ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: 'bottom',
            }}>
            <div
                className='absolute left-0 top-0 size-full overflow-hidden rounded-[1%] bg-[#1D1F2F] transition-all duration-150 ease-out'
                style={{
                    transform:
                        current === index
                            ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                            : 'none',
                }}>
                <img
                    className='duration-600 absolute inset-0 size-[120%] object-cover opacity-100 transition-opacity ease-in-out'
                    style={{
                        opacity: current === index ? 1 : 0.5,
                    }}
                    alt={title}
                    src={src}
                    onLoad={imageLoaded}
                    loading='eager'
                    decoding='sync'
                />
                {current === index && (
                    <div className='absolute inset-0 bg-black/30 transition-all duration-1000' />
                )}
            </div>

            <article
                className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
                    current === index ? 'visible opacity-100' : 'invisible opacity-0'
                }`}>
                <h2 className='relative text-lg font-semibold md:text-2xl lg:text-4xl'>{title}</h2>
                <div className='flex justify-center'>
                    <button className='mx-auto mt-6 flex h-12 w-fit items-center justify-center rounded-2xl border border-transparent bg-white px-4 py-2 text-xs text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 hover:shadow-lg sm:text-sm'>
                        {button}
                    </button>
                </div>
            </article>
        </li>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
    return (
        <button
            className={`border-3 mx-2 flex size-10 items-center justify-center rounded-full border-transparent bg-neutral-200 transition duration-200 hover:-translate-y-0.5 focus:border-[#6D64F7] focus:outline-none active:translate-y-0.5 dark:bg-neutral-800 ${
                type === 'previous' ? 'rotate-180' : ''
            }`}
            title={title}
            onClick={handleClick}>
            <IconArrowNarrowRight className='text-neutral-600 dark:text-neutral-200' />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        } else {
            const slide = slides[index];
            if (slide?.goto) {
                window.open(`/projects/${slide.goto?.toLowerCase().replace(/\s+/g, '-')}`, '_self');
            } else if (slide?.url) {
                window.open(slide.url, '_blank');
            }
        }
    };

    const id = useId();

    return (
        <div className='relative mx-auto size-[70vmin]' aria-labelledby={`carousel-heading-${id}`}>
            <ul
                className='perspective-[1200px] transform-style-[preserve-3d] absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out'
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </ul>

            <div className='absolute top-[calc(100%+1rem)] flex w-full justify-center'>
                <CarouselControl
                    type='previous'
                    title='Go to previous slide'
                    handleClick={handlePreviousClick}
                />

                <CarouselControl
                    type='next'
                    title='Go to next slide'
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}
