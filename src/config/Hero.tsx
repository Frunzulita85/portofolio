import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

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

// Component mapping for skills
export const skillComponents = {
  Python: PythonIcon,
  FastAPI: FastApiIcon,
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Calin Frunza',
  title: 'Software Engineer & Python Full-Stack Developer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'FastAPI',
      href: 'https://fastapi.tiangolo.com/',
      component: 'FastAPI',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      component: 'JavaScript',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'Founder of <b>LeadAtlas.io</b> and creator of <b>DiriginteFrunza.ro</b>, building and scaling full-stack web applications and SaaS products using {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4} and {skills:5}. Focused on <b>REST APIs</b>, async data pipelines, Stripe billing, and CI/CD.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/c%C4%83lin-frunz%C4%83-a99b26105/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/Frunzulita85',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:calinfrunza85@gmail.com',
    icon: <Mail />,
  },
];