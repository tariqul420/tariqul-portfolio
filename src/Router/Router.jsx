import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error404 from "../Pages/Shared/Error404";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Works from "../Pages/Works/Works";
import ContactMe from "../Pages/Contact/ContactMe";
import ProjectDetails from "@/Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-me",
                element: <AboutMe />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/works",
                element: <Works />
            },
            {
                path: "/contact-me",
                element: <ContactMe />
            },
            {
                path: "/project-details/:id",
                element: <ProjectDetails />
            }
        ]
    }
])

export default router;