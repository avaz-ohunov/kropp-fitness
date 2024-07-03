// main.js

'use strict';


// Мышка-кнопка
document.addEventListener('DOMContentLoaded', () => {
    const videoPoster = document.querySelector('.join-us-video');
    const playButton = document.querySelector('.join-us-video-play-button');

    videoPoster.addEventListener('mousemove', (e) => {
        const rect = videoPoster.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY + rect.top;
        playButton.style.left = `${x}px`;
        playButton.style.top = `${y}px`;
    });

    videoPoster.addEventListener('mouseenter', () => {
        playButton.style.display = 'flex';
    });

    videoPoster.addEventListener('mouseleave', () => {
        playButton.style.display = 'inline-flex';
        playButton.style.left = '50%';
        playButton.style.top = '50%';
    });
});
