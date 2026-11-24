import CSS from '@/components/technologies/CSS';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import React from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

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

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'LeadAtlas.io',
    position: 'Founder & Lead Full-Stack Engineer',
    location: 'Brasov, Romania',
    image: '/company/leadatlas.png',
    description: [
      'Architected and deployed a full-stack B2B lead-generation SaaS platform using FastAPI, Python, Next.js, and PostgreSQL.',
      'Implemented asynchronous processing pipelines to handle large-scale lead extraction workloads efficiently.',
      'Integrated Google Places API and automated data extraction with deduplication workflows to ensure lead data accuracy.',
      'Designed credit-based billing with Stripe webhook synchronization, optimized PostgreSQL indexing for fast CSV exports, and configured Docker + CI/CD pipelines to Vercel and Railway.',
    ],
    startDate: '2025',
    endDate: 'Present',
    website: 'https://leadatlas.io',
    github: 'https://github.com/Frunzulita85',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <PythonIcon />,
      },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <FastApiIcon />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'DiriginteFrunza.ro',
    position: 'Full-Stack Developer',
    location: 'Brasov, Romania',
    image: '/company/dirigintefrunza.png',
    description: [
      'Designed, developed, and deployed a production-ready presentation web application using Next.js and Tailwind CSS within a 4-day delivery sprint.',
      'Optimized Core Web Vitals, mobile responsiveness, SEO metadata, and user engagement flows.',
      'Implemented automated version control and deployment workflows using GitHub and Vercel CI/CD.',
    ],
    startDate: '2026',
    endDate: '2026',
    website: 'https://www.dirigintefrunza.ro',
    github: 'https://github.com/Frunzulita85',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'HTML',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        icon: <CSS />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'Operational & Logistics Roles',
    position: 'Hornbach, Bolt, Unix Auto, Ribestrans',
    location: 'Romania',
    image: '/company/operations.png',
    description: [
      'Demonstrated strong problem-solving, operational adaptability, time management, and cross-functional collaboration in fast-paced commercial and logistics environments.',
    ],
    startDate: '2008',
    endDate: '2026',
    website: 'https://leadatlas.io',
    technologies: [],
  },
];