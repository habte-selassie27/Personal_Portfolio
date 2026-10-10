export default function Landing() {
    return (
        <div id="landing-page" className="content-container landing-slow-transition">
            <section id="landing-page-section" className="content-width slide-out-left-transition">
                <svg id="landing-content-svg" viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
                    <text className="landing-headline" y="58" x="5">
                        Hi, my
                    </text>
                    <text className="landing-headline" y="133" x="5">
                        name is Habte
                    </text>
                    <text className="landing-headline" y="208" x="5">
                        Selassie Fitsum.
                    </text>
                </svg>

                <p className="landing-intro">
                    Experienced Software Engineer with 2&#8211;3 years of expertise in
                    Software Development, Blockchain, and AI. Skilled in building
                    scalable applications, developing smart contracts, and creating
                    AI-powered solutions. Passionate about Web3, emerging
                    technologies, and solving complex problems through innovative
                    software. Committed to continuous learning and building impactful
                    digital products.
                </p>

                <div id="landing-cta-button" className="big-button orange-hover">
                    Get in touch
                </div>
            </section>
        </div>
    );
}
