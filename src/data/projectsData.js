import movieapp from '../assets/Projectvideos/movieapp.mp4';
import obysagency from '../assets/Projectvideos/obysagency.mp4';
import hotel from '../assets/Projectvideos/hotel.mp4';
import exoape from '../assets/Projectvideos/exoape.mp4'
import refokus from '../assets/Projectvideos/refokus.mp4';

import movieappPhoto from '../assets/Projectphotos/movieapp.jpg';
import obysagencyPhoto from '../assets/Projectphotos/obysagency.jpg';
import hotelPhoto from '../assets/Projectphotos/hotel.jpg';
import exoapePhoto from '../assets/Projectphotos/exoape.jpg'
import refokusPhoto from '../assets/Projectphotos/refokus.jpg';
export const projectsData = [
    {
      id: 1,
      videoSrc: movieapp,
      imageSrc: movieappPhoto,
      projectName: 'Movie App',
      projectDescription: 'A React  app that uses the TMDB API to fetch and display movie data.',
      techStack: ['React', 'Tailwind CSS', 'Database'],
      demoLink: 'https://project-one-demo.com',
      repoLink: 'https://github.com/user/project-one',
    },
    {
      id: 2,
      videoSrc:obysagency ,
      imageSrc: obysagencyPhoto,
      projectName: 'Obys Agency Clone',
      projectDescription: 'Cloned the Obys Agency website, replicating its sleek design, animations, and responsive layout for a modern, interactive user experience',
      techStack: ['html', 'css', 'js','GSAP','Sheryjs'],
      demoLink: 'https://project-two-demo.com',
      repoLink: 'https://ritik913553.github.io/Obys_Agency_Clone_Project/',
    },
    {
        id: 3,
        videoSrc: hotel,
        imageSrc: hotelPhoto,
        projectName: 'Hotel Website ',
        projectDescription: 'Created a frontend website highlighting hotel facilities and room views with animations, featuring fade-in text and scroll-triggered letter highlighting.',
        techStack: ['html', 'Tailwind CSS', 'js','GSAP'],
        demoLink: 'https://hotel-website-swart-six.vercel.app/',
        repoLink: 'https://github.com/ritik913553/Hotel-Website',
      },
      {
        id: 4,
        videoSrc:exoape,
        imageSrc: exoapePhoto,
        projectName: 'exoApe Showcase',
        projectDescription: 'Developed a frontend website for exoApe featuring dynamic animations and a parallax scrolling effect.',
        techStack: ['React', 'Tailwind CSS','GSAP','Framer Motion'],
        demoLink: 'https://exo-ape-project.vercel.app/',
        repoLink: 'https://github.com/ritik913553/exoApeProject',
      },
      {
        id: 5,
        videoSrc: refokus,
        imageSrc: refokusPhoto ,
        projectName: 'Refokus Animation Showcase',
        projectDescription: " In this project, I showcased my animation skills using React, demonstrating advanced techniques that are essential for creating dynamic and engaging interfaces. This project is an excellent example of how interactive animations can enhance a design company's portfolio " ,
        techStack: ['React', 'Tailwind CSS','GSAP','Framer Motion'],
        demoLink: 'https://refokus-project-neon.vercel.app/',
        repoLink: 'https://github.com/ritik913553/refokusProject',
      },
      
  ];
  