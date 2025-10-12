import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getImageUrl(person: any) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
