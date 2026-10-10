import { goToSection, wheelTo } from "../lib/engineNav.js";

// DOM order of the first four .menu-item elements MUST stay
// Home, About, Work, Contact — index.js binds them by position [0..3].
// Display order is set with the CSS `order` property (sidebar order).
const EXTRA_ITEMS = [
  { label: "Skills", order: 3, onClick: () => document.querySelectorAll(".menu-item")[1]?.click() },
  { label: "Technologies", order: 5, section: "technologies-section" },
  { label: "Experience", order: 6, section: "experience-section" },
  { label: "Education", order: 7, section: "education-section" },
  { label: "Certificates", order: 8, section: "certificates-section" },
];

export default function Menu() {
    return (
        <div id="menu-container" className="column">
            <div id="menu-content-container" className="column">
                {/*Menu Items*/}
                <div id="menu-items-container">
                    <div className="column menu-items-column-container">
                        <span className="menu-item active-menu-item" style={{ order: 1 }}>Home</span>
                        <span className="menu-item" data-section="about-section" style={{ order: 2 }}>About</span>
                        <span className="menu-item" data-section="work-section" style={{ order: 4 }}>Work</span>
                        <span className="menu-item" data-section="contact-section" style={{ order: 9 }}>Contact</span>
                        {EXTRA_ITEMS.map((item) => (
                            <span
                                key={item.label}
                                className="menu-item"
                                data-section={item.section}
                                style={{ order: item.order }}
                                onClick={item.onClick || (() => goToSection(item.section))}
                            >
                                {item.label}
                            </span>
                        ))}
                        <a
                            className="menu-item"
                            href="/images/cvs/CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            style={{ order: 10 }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
                {/*Menu Social Link*/}
                <div id="menu-social-container" className="row">
                    {/* <a tabindex="-1" target="_blank" href="https://discord.gg/P9QvEeAm"><img className="social-icon"
                            src="./images/discord.png" alt="discord Menu Icon" height="28" width="28"></img></a> */}
                    <a tabIndex="-1" target="_blank" href="https://github.com/yashchauhan008">
                        <i className="fab fa-github social-icon"></i>
                    </a>

                    <a tabIndex="-1" href="mailto:yashchauhan1775@gmail.com">
                        <i className="fas fa-envelope social-icon"></i>
                    </a>

                    <a tabIndex="-1" target="_blank" href="https://www.instagram.com/yash_chauhan________">
                        <i className="fab fa-instagram social-icon"></i>
                    </a>

                    <a tabIndex="-1" target="_blank" href="https://www.linkedin.com/in/yash-chauhan-842162321">
                        <i className="fab fa-linkedin social-icon"></i>
                    </a>
                </div>
                <hr />
                {/*Music Credits*/}
                <div id="music-credit-container" className="row">
                    <span></span>
                </div>
            </div>
        </div>
    );
}
