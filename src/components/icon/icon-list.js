import * as React from 'react';

export const heartRed = (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='28' height='28'>
        <defs>
            <path id='a' d='M14.486 24.908l-1.762-1.54C6.465 17.92 2.334 14.327 2.334 9.917c0-3.594 2.94-6.417 6.683-6.417 2.115 0 4.144.945 5.47 2.438C15.81 4.445 17.84 3.5 19.954 3.5c3.743 0 6.684 2.823 6.684 6.417 0 4.41-4.132 8.003-10.39 13.463l-1.763 1.528z' />
            <path id='b' d='M14.486 24.908l-1.762-1.54C6.465 17.92 2.334 14.327 2.334 9.917c0-3.594 2.94-6.417 6.683-6.417 2.115 0 4.144.945 5.47 2.438C15.81 4.445 17.84 3.5 19.954 3.5c3.743 0 6.684 2.823 6.684 6.417 0 4.41-4.132 8.003-10.39 13.463l-1.763 1.528z' />
        </defs>
        <g fill='none' fillRule='evenodd'>
            <path d='M0 0h28v28H0z' />
            <use fill='#000' fillRule='nonzero' opacity='.2' xlinkHref='#a' />
            <path d='M0 0h28v28H0z' />
            <use fill='#FF5746' fillRule='nonzero' xlinkHref='#b' />
        </g>
    </svg>
);

export const heart = (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='28' height='28' viewBox='0 0 28 28'>
        <defs>
            <path id='a' d='M13.862 24.896l-1.72-1.503C6.033 18.075 2 14.568 2 10.263 2 6.756 4.87 4 8.524 4c2.064 0 4.045.922 5.338 2.38C15.155 4.922 17.136 4 19.2 4c3.654 0 6.524 2.756 6.524 6.263 0 4.305-4.033 7.812-10.142 13.141l-1.72 1.492z' />
            <path id='b' d='M13.862 24.896l-1.72-1.503C6.033 18.075 2 14.568 2 10.263 2 6.756 4.87 4 8.524 4c2.064 0 4.045.922 5.338 2.38C15.155 4.922 17.136 4 19.2 4c3.654 0 6.524 2.756 6.524 6.263 0 4.305-4.033 7.812-10.142 13.141l-1.72 1.492z' />
        </defs>
        <g fill='none' fillRule='nonzero'>
            <use fill='#000' opacity='.3' xlinkHref='#a' />
            <use stroke='#FFF' xlinkHref='#b' />
        </g>
    </svg>
);
