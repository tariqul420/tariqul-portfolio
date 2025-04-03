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
      <div className="flex relative flex-col gap-20 lg:flex-row items-center">
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
          {/* Section Title */}
          <Heading headingTitle="About Me" />

          <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-6">Md. Tariqul Islam</h2>

          <p className="text-justify text-lg font-medium leading-[31px]">
            Hey there! I’m <strong>Tariqul Islam</strong>, a passionate <strong>Junior Frontend Developer</strong> focused on creating{' '}
            <strong>modern, interactive, and high-performance web applications</strong>. My journey into programming started from a simple curiosity—how do websites work? That curiosity soon turned
            into an obsession with crafting seamless user experiences and bringing ideas to life through code.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-10">
        <p className="text-justify text-lg font-medium leading-[31px]">
          Over time, I have mastered <strong>React, TypeScript, Tailwind CSS,</strong> and backend technologies like <strong>Node.js & MongoDB</strong>. Whether it&apos;s developing feature-rich web
          apps, building scalable backend systems, or optimizing UI/UX, I thrive on turning complex challenges into simple, elegant solutions.
        </p>

        {/* My Passion Section */}
        <div className="mt-8">
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <Lightbulb className="text-primary1" /> My Passion?
          </strong>
          <ul className="mt-3 space-y-2 text-lg">
            <li>- Building highly responsive and scalable applications.</li>
            <li>- Writing clean, efficient, and maintainable code.</li>
            <li>- Exploring new technologies and keeping up with modern trends.</li>
            <li>- Creating engaging user experiences with smooth interactions.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mt-10">
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <FolderKanban className="text-primary1" /> Projects That Define Me:
          </strong>
          <ul className="mt-3 space-y-2">
            <li>
              {' '}
              -
              <a href="https://kutto-0.web.app/" target="_blank" className="text-primary2 hover:underline ml-2 font-semibold">
                Kutto
              </a>{' '}
              → A pet adoption platform connecting users with pets in need of loving homes.
            </li>
            <li>
              {' '}
              -
              <a href="https://bd-army-police.vercel.app/" target="_blank" className="text-primary2 hover:underline ml-2 font-semibold">
                Bangladesh Army & Police
              </a>{' '}
              → A resource hub providing essential information about army & police services.
            </li>
            <li>
              {' '}
              -
              <a href="https://service-orbit.web.app/" target="_blank" className="text-primary2 hover:underline ml-2 font-semibold">
                Service Orbit
              </a>{' '}
              → A service-sharing platform designed to connect users effortlessly.
            </li>
            <li>
              {' '}
              -
              <a href="https://film-fusion-0.web.app/" target="_blank" className="text-primary2 hover:underline ml-2 font-semibold">
                Film Fusion
              </a>{' '}
              → A sleek and dynamic movie information hub.
            </li>
          </ul>
        </div>

        {/* Beyond Coding Section */}
        <div className="mt-10">
          <strong className="flex items-center gap-2 text-xl font-semibold">
            <Terminal className="text-primary1" /> Beyond Coding:
          </strong>
          <p className="mt-3 text-lg">
            When I’m not coding, you’ll probably find me cycling through nature trails, exploring new frontend tools, or reading about the latest advancements in tech. I believe that learning is a
            never-ending journey, and I’m always eager to grow, improve, and push the boundaries of what’s possible.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 flex items-center gap-2 text-2xl font-semibold">
          Let’s create something amazing together! <Rocket className="text-primary1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
