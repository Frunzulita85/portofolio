import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/logo.png"
          alt={about.name}
          width={240}
          height={240}
          className="border-secondary size-60 shrink-0 rounded-md border-2 bg-blue-300 object-cover dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="hover:cursor-pointer">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}