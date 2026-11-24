import CSS from '@/components/technologies/CSS';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

const PythonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-4 shrink-0"
    aria-hidden="true"
  >
    <path
      fill="#3776AB"
      d="M11.914 0C5.82 0 6.2 2.64 6.2 2.64l.007 2.735h5.827v.82H3.903S0 5.747 0 11.964c0 6.217 3.404 5.998 3.404 5.998h2.032v-2.885s-.11-3.404 3.35-3.404h5.768s3.24.052 3.24-3.13V3.255S18.29 0 11.914 0ZM8.71 1.88a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"
    />
    <path
      fill="#FFD43B"
      d="M12.086 24c6.094 0 5.714-2.64 5.714-2.64l-.007-2.735h-5.827v-.82h8.131S24 18.253 24 12.036c0-6.217-3.404-5.998-3.404-5.998h-2.032v2.885s.11 3.404-3.35 3.404H9.446s-3.24-.052-3.24 3.13v5.294S5.71 24 12.086 24Zm3.204-1.88a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Z"
    />
  </svg>
);

const FastApiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-4 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" fill="#009688" />
    <path
      fill="#FFFFFF"
      d="M12.4 4.5 6.8 13.2h4.7l-.9 6.3 6.6-8.7h-4.7l-.1-6.3Z"
    />
  </svg>
);

export const projects: Project[] = [
  {
    title: 'LeadAtlas.io',
    description:
      'B2B local business lead-generation SaaS platform built with Python, FastAPI, Next.js, TypeScript, and PostgreSQL, featuring async data pipelines, Google Places API deduplication, Stripe billing, and CSV exports.',
    image: '/project/leadatlas.png',
    link: 'https://leadatlas.io',
    technologies: [
      { name: 'Python', icon: <PythonIcon key="python" /> },
      { name: 'FastAPI', icon: <FastApiIcon key="fastapi" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/Frunzulita85',
    live: 'https://leadatlas.io',
    details: true,
    projectDetailsPageSlug: '/projects/leadatlas',
    isWorking: true,
  },
  {
    title: 'DiriginteFrunza.ro',
    description:
      'Responsive presentation web application and SEO blog delivered in a 4-day sprint for an authorized site manager, optimized for performance, search visibility, and CI/CD deployment.',
    image: '/project/dirigintefrunza.png',
    link: 'https://www.dirigintefrunza.ro',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/Frunzulita85',
    live: 'https://www.dirigintefrunza.ro',
    details: true,
    projectDetailsPageSlug: '/projects/dirigintefrunza',
    isWorking: true,
  },
  {
    title: 'Barber Shop Website',
    description:
      'Modern web application built for a local barbershop showcase, highlighting services, styling sections, and clean mobile-first layout.',
    image: '/project/cutcraft.png',
    link: 'https://cutcraft-barber-shop.onrender.com',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/Frunzulita85',
    live: 'https://cutcraft-barber-shop.onrender.com',
    details: true,
    projectDetailsPageSlug: '/projects/cutcraft-barber-shop',
    isWorking: true,
  },
  {
    title: 'Electrician Presentation Demo',
    description:
      'Responsive service showcase website built with Next.js and Tailwind CSS for electrical installation and maintenance services, focused on clear service offerings and fast contact.',
    image: '/project/electric.png',
    link: 'https://demoelectric-one.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/Frunzulita85',
    live: 'https://demoelectric-one.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/electrician-demo',
    isWorking: true,
  },
  {
    title: 'Therapist Presentation Demo',
    description:
      'Clean presentation website built with Next.js and Tailwind CSS for psychotherapy and counseling services, structured around clarity, trust, and easy inquiry access.',
    image: '/project/terapeut.png',
    link: 'https://demowebsiteterapeut.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/Frunzulita85',
    live: 'https://demowebsiteterapeut.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/therapist-demo',
    isWorking: true,
  },
];