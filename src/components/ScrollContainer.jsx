import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import TechGrid from "./about/TechGrid.jsx";
import ExperienceCards from "./about/ExperienceCards.jsx";
import EducationList from "./about/EducationList.jsx";
import CertificatesGrid from "./about/CertificatesGrid.jsx";

export default function ScrollContainer() {
    return (
        <div id="scroll-container" className="center column">
            {/*About Container*/}
            <About />

            <div id="hover-icon-color-switch"></div>

            {/*Work Container*/}
            <Work />

            {/*Mid sections (between projects and contact) — also registered
                in the engine's sections list in index.js */}
            <section id="technologies-section" className="content-width">
                <TechGrid />
            </section>
            <section id="experience-section" className="content-width">
                <ExperienceCards />
            </section>
            <section id="education-section" className="content-width">
                <EducationList />
            </section>
            <section id="certificates-section" className="content-width">
                <CertificatesGrid />
            </section>

            {/*Contact Container*/}
            <Contact />

            <Footer />
        </div>
    );
}
