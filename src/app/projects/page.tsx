'use client';
import Carousel from '@/components/ui/carousel';

export default function Projects() {
    const slideData = [
        {
            title: 'Locked',
            button: 'Learn more',
            src: '/locked_cover.png',
            goto: 'locked',
        },
        {
            title: 'Image Super-Resolution Using Deep Convolutional Networks',
            button: 'Learn more',
            src: '/srcnn_cover.webp',
            goto: 'cv',
        },
        {
            title: "inFormal: Princeton's New Clothing Marketplace",
            button: 'Learn more',
            src: '/informal_cover.png',
            goto: 'informal',
        },
        {
            title: 'The Daily Princetonian: MBB Beat Writer',
            button: 'See articles',
            src: '/princeton_mbb.jpg',
            url: 'https://www.dailyprincetonian.com/staff/matt-drapkin',
        },
    ];
    return (
        <div className='relative size-full overflow-hidden py-20'>
            <Carousel slides={slideData} />
        </div>
    );
}
