import ParticlesUI from "@/Animation/ParticlesUI";
import { SkillCloud } from "@/Components/Skills/SkillCloud";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Skills = () => {
    const [learningSkills, setLearningSkills] = useState([]);
    const [comfortableSkills, setComfortableSkills] = useState([]);
    const [frontEnd, setFrontEnd] = useState([]);
    const [backEnd, setBackEnd] = useState([]);
    const [tools, setTools] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get('/skills/front-end.json').then(res => setFrontEnd(res.data));
        axios.get('/skills/back-end.json').then(res => setBackEnd(res.data));
        axios.get('/skills/tools.json').then(res => setTools(res.data));
        axios.get('/skills/learningSkills.json').then(res => setLearningSkills(res.data));
        axios.get('/skills/comfortable.json').then(res => setComfortableSkills(res.data));
    }, []);

    return (
        <section className={`w-11/12 my-20 mx-auto ${location.pathname === "/" ? 'pt-28' : 'my-20'}`}>
            {/* Particles */}
            {location.pathname === '/skills' && <ParticlesUI />}

            {/* Section Title */}
            <div className="flex flex-col items-center justify-center">
                <button className="px-4 py-2 bg-white rounded-lg mb-8 flex items-center gap-2 dark:bg-dark-lite">
                    <FaArrowRight /> Skills
                </button>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <SkillCard title="Frontend" skills={frontEnd} />

                    {/* Backend Skills */}
                    <SkillCard title="Backend" skills={backEnd} />

                    {/* Tools */}
                    <SkillCard title="Tools" skills={tools} />
                </div>
            </div>

            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Current Learning */}
                <SkillCard title="Current Learning" skills={learningSkills} />

                <SkillCloud />

                {/* Comfortable */}
                <SkillCard title="Comfortable" skills={comfortableSkills} />
            </div>

        </section>
    );
};

const SkillCard = ({ title, skills }) => (
    <div className="p-6 bg-white dark:bg-dark-lite rounded-xl">
        <button className="px-4 py-2 gap-2 bg-white-lite rounded-lg mb-4 flex items-center gap- dark:bg-dark-deep">
            <FaArrowRight /> {title}
        </button>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {skills?.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
            ))}
        </div>
    </div>
);

// Reusable Skill Item Component
const SkillItem = ({ skill }) => (
    <div className="lang flex flex-col items-center justify-center space-y-3">
        <img className="w-10 h-10 object-contain" src={skill?.image} alt={skill?.name} />
        <p className="font-bold text-dark-lite tracking-widest dark:text-white-deep">{skill?.name}</p>
    </div>
);

SkillCard.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
};

SkillItem.propTypes = {
    skill: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
};

export default Skills;
