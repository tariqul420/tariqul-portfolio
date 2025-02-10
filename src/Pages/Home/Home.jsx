import ParticlesUI from "@/Animation/ParticlesUI";
import Banner from "../../Components/Home/Banner";
import StartProject from "../../Components/Home/StartProject";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact/ContactMe";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";

const Home = () => {
    return (
        <div>
            {/* Particles */}
            <ParticlesUI />

            <Banner />
            <AboutMe />
            <Skills />
            <Works />
            <ContactMe />

            <StartProject />
        </div>
    );
};

export default Home;