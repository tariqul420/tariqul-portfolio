import ParticlesUI from '@/Animation/ParticlesUI';
import { Heading } from '@/Components/Common/Heading';
import ShineBorder from '@/Components/ui/shine-border';
import { FolderKanban, Lightbulb, Rocket, Terminal } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Tariqul from '../../assets/Images/tariqul_cartoon.jpeg';

const AboutMe = () => {
  const location = useLocation();

  return (
    <section className={`w-11/12 mx-auto ${location.pathname === '/' ? 'pt-28' : 'my-20'}`}>
      <div className="relative flex flex-col gap-20 lg:flex-row items-center">
        {/* Particles */}
        {location.pathname === '/about-me' && <ParticlesUI />}

        {/* Image Section */}
        <div className="lg:w-[30%] flex justify-center">
          <ShineBorder borderRadius={9999} color="#38BD67" borderWidth={3} className="dark:bg-transparent bg-transparent">
            <img className="lg:w-[320px] w-10/12 rounded-full shadow-lg" src={Tariqul} alt="Tariqul Islam" />
          </ShineBorder>
        </div>

        {/* About Content Section */}
        <div className="lg:w-[70%] flex flex-col items-center lg:items-start text-dark-lite dark:text-white-deep">
          <Heading headingTitle="About Me" />
          <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-6">Md. Tariqul Islam</h2>
          <p className="text-justify text-lg font-medium leading-[31px]">
            I’m <strong>Tariqul Islam</strong>, a dedicated <strong>Junior Frontend Developer</strong> with a passion for building{' '}
            <strong>modern, responsive, and user-focused web applications</strong>. What started as a curiosity about how websites function has evolved into a career driven by creating seamless
            digital experiences and solving real-world problems through code.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 space-y-12">
        {/* Skills & Expertise */}
        <div>
          <p className="text-justify text-lg font-medium leading-[31px]">
            I specialize in <strong>React, TypeScript, and Tailwind CSS</strong>, complemented by hands-on experience with backend technologies like <strong>Node.js and MongoDB</strong>. My focus is
            on delivering clean, efficient, and scalable solutions—whether it’s crafting intuitive UI/UX, optimizing performance, or integrating robust backend systems.
          </p>
        </div>

        {/* Passion Section */}
        <div>
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <Lightbulb className="text-primary1" /> What Drives Me
          </strong>
          <ul className="mt-3 space-y-2 text-lg list-disc list-inside">
            <li>Designing responsive and scalable web applications.</li>
            <li>Writing clean, maintainable, and well-documented code.</li>
            <li>Enhancing user experiences through thoughtful design and interactivity.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <FolderKanban className="text-primary1" /> Featured Projects
          </strong>
          <ul className="mt-3 space-y-3 text-lg list-disc list-inside">
            <li>
              <a href="https://edu-genius.vercel.app" target="_blank" className="text-primary2 hover:underline font-semibold">
                Edu Genius
              </a>{' '}
              – A platform streamlining service sharing for users.
            </li>
            <li>
              <a href="https://kutto-0.web.app/" target="_blank" className="text-primary2 hover:underline font-semibold">
                Kutto
              </a>{' '}
              – A pet adoption platform connecting pets with loving homes.
            </li>
            <li>
              <a href="https://bd-army-police.vercel.app/" target="_blank" className="text-primary2 hover:underline font-semibold">
                Bangladesh Army & Police
              </a>{' '}
              – A comprehensive resource hub for army and police services.
            </li>
          </ul>
        </div>

        {/* Beyond Coding Section */}
        <div>
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <Terminal className="text-primary1" /> Beyond the Code
          </strong>
          <p className="mt-3 text-lg font-medium leading-[31px]">
            Outside of development, I enjoy cycling through scenic trails, diving into new frontend frameworks, and staying informed on tech innovations. I’m a lifelong learner, always seeking to
            refine my skills and explore new possibilities in the ever-evolving world of technology.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex items-center gap-3 text-xl font-semibold">
          Ready to collaborate? Let’s build something extraordinary! <Rocket className="text-primary1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
