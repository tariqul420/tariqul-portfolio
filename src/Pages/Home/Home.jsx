import { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import ParticlesUI from "@/Animation/ParticlesUI";
import Banner from "../../Components/Home/Banner";
import StartProject from "../../Components/Home/StartProject";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact/ContactMe";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";

const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isBottom = window.innerHeight + scrollY >= document.body.offsetHeight;

            if (scrollY > 200 && !isBottom) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="relative">
            {/* Particles */}
            <ParticlesUI />

            <Banner />
            <AboutMe />
            <Skills />
            <Works />
            <ContactMe />

            <StartProject />

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    className="fixed bottom-6 right-3 text-primary2 bg-white dark:bg-dark-lite p-0 rounded-full shadow-lg"
                    onClick={scrollToTop}
                >
                    <IoIosArrowDropup className="text-5xl" />
                </button>
            )}
        </div>
    );
};

export default Home;
