import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getBaseUrl() {
    if (typeof window !== 'undefined') return window.location.origin;
    return `https://mattdrapkin.vercel.app`;
}
