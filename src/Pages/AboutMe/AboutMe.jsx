import { FaArrowRight } from "react-icons/fa";
import Tariqul from "../../assets/Images/tariqul-logo.jpg";
import { useLocation } from "react-router-dom";
import ParticlesUI from "@/Animation/ParticlesUI";
import ShineBorder from "@/Components/ui/shine-border";

const AboutMe = () => {
    const location = useLocation();

    return (
        <section className={`w-11/12 mx-auto ${location.pathname === "/" ? "pt-28" : "my-20"
            }`}>
            <div
                className={`flex relative flex-col gap-20 lg:flex-row `}
            >
                {/* Particles */}
                {location.pathname === "/about-me" && <ParticlesUI />}

                {/* Image Section */}
                <div className="lg:w-[30%] flex flex-col relative">
                    <ShineBorder
                        borderRadius={9999}
                        color="#38BD67"
                        borderWidth={3}
                        className={`dark:bg-transparent bg-transparent`}
                    >
                        <img
                            className="lg:w-[320px] w-10/12 rounded-full"
                            src={Tariqul}
                            alt="Tariqul Islam"
                        />
                    </ShineBorder>
                </div>

                {/* About Content Section */}
                <div className="lg:w-[70%] flex flex-col items-center lg:items-start ">
                    {/* Section Title */}
                    <button className="px-4 py-2 bg-white rounded-lg mb-4 flex items-center gap-2 dark:bg-dark-lite">
                        <FaArrowRight /> About Me
                    </button>
                    <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-10">
                        Md. Tariqul Islam
                    </h2>
                    <p className="text-center lg:text-start text-[1.1rem] text-dark-lite font-medium leading-[31px] dark:text-white-deep">
                        Hey there! 👋 I’m <strong>Tariqul Islam</strong>, a passionate{" "}
                        <strong>Junior Frontend Developer</strong> with a focus on creating{" "}
                        <strong>modern, interactive, and high-performance web applications</strong>.
                        My journey into programming started from a simple curiosity—how do websites work?
                        That curiosity soon turned into an obsession with **crafting seamless user experiences**
                        and bringing ideas to life through code.
                    </p>
                </div>
            </div>
            <p className="text-center lg:text-start text-[1.1rem] text-dark-lite font-medium leading-[31px] dark:text-white-deep">
                <br />
                Over time, I have mastered **React, TypeScript, Tailwind CSS, and backend technologies like Node.js & MongoDB**.
                Whether it&apos;s developing **feature-rich web apps**, **building scalable backend systems**, or **optimizing UI/UX**,
                I thrive on **turning complex challenges into simple, elegant solutions**.
                <br />
                <br />
                <strong>💡 My Passion?</strong>
                - Building **highly responsive** and **scalable** applications.
                - Writing **clean, efficient, and maintainable code**.
                - Exploring **new technologies** and keeping up with modern trends.
                - Creating **engaging user experiences** with smooth interactions.
                <br />
                <br />
                <strong>🚀 Projects That Define Me:</strong>
                - **Kutto** → A pet adoption platform connecting users with pets in need of loving homes.
                - **Service Orbit** → A service-sharing platform designed to connect users effortlessly.
                - **Film Fusion** → A sleek and dynamic movie information hub.
                - And many more innovative projects in the works!
                <br />
                <br />
                <strong>🌟 Beyond Coding:</strong>
                When I’m not coding, you’ll probably find me **cycling through nature trails, exploring new frontend tools, or reading about the latest advancements in tech**.
                I believe that **learning is a never-ending journey**, and I’m always eager to **grow, improve, and push the boundaries** of what’s possible.
                <br />
                <br />
                **Let’s create something amazing together! 🚀**
            </p>
        </section>
    );
};

export default AboutMe;
