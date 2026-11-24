import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface SkillItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

const PythonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-6 shrink-0"
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
    className="size-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" fill="#009688" />
    <path
      fill="#FFFFFF"
      d="M12.4 4.5 6.8 13.2h4.7l-.9 6.3 6.6-8.7h-4.7l-.1-6.3Z"
    />
  </svg>
);

export const mySkills: SkillItem[] = [
  {
    key: 'python',
    label: 'Python',
    icon: <PythonIcon />,
  },
  {
    key: 'fastapi',
    label: 'FastAPI',
    icon: <FastApiIcon />,
  },
  {
    key: 'postgresql',
    label: 'PostgreSQL',
    icon: (
      <span className="inline-flex size-6 items-center justify-center">
        <PostgreSQL />
      </span>
    ),
  },
  {
    key: 'nextjs',
    label: 'Next.js',
    icon: (
      <span className="inline-flex size-6 items-center justify-center dark:invert">
        <NextJs />
      </span>
    ),
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    icon: (
      <span className="inline-flex size-6 items-center justify-center">
        <TypeScript />
      </span>
    ),
  },
  {
    key: 'javascript',
    label: 'JavaScript',
    icon: (
      <span className="inline-flex size-6 items-center justify-center">
        <JavaScript />
      </span>
    ),
  },
  {
    key: 'tailwindcss',
    label: 'Tailwind CSS',
    icon: (
      <span className="inline-flex size-6 items-center justify-center">
        <TailwindCss />
      </span>
    ),
  },
  {
    key: 'vercel',
    label: 'Vercel',
    icon: (
      <span className="inline-flex size-6 items-center justify-center dark:invert">
        <Vercel />
      </span>
    ),
  },
];

export const about = {
  name: 'Calin Frunza',
  description: `Software Engineer and Python Full-Stack Developer based in Brasov, Romania, building and scaling full-stack web applications and SaaS products. Founder of LeadAtlas.io and developer of DiriginteFrunza.ro, focused on FastAPI REST APIs, async data pipelines, PostgreSQL, Next.js, Stripe billing, and CI/CD.`,
};