export default function Contact() {
    return (
        <section id="contact-section" className="content-width column">
            <div className="column" id="contact-header-container">
                <div className="section-subheader-container">
                    <hr />
                    <h5>Say hello 👋</h5>
                </div>
                <h1 className="section-header-container">Contact me</h1>
            </div>

            <div id="contact-container">
                {/*Form Container*/}
                <div id="contact-form-container" className="column contact-container">
                    <div id="contact-name-input" className="input-container column">
                        <div className="row">
                            <label htmlFor="contact-name-input-field">Name :</label>
                            <span className="error-label hide">Please enter your name.</span>
                        </div>
                        <input id="contact-name-input-field" tabIndex="-1" />
                    </div>
                    <div id="contact-email-input" className="input-container column">
                        <div className="row">
                            <label htmlFor="contact-email-input-field">Email :</label>
                            <span className="error-label hide">Please enter a valid email address.</span>
                        </div>
                        <input id="contact-email-input-field" type="email" tabIndex="-1" />
                    </div>
                    <div id="contact-message-input" className="input-container column">
                        <div className="row">
                            <label htmlFor="contact-message-input-field">Message :</label>
                            <span className="error-label hide">Please enter your message.</span>
                        </div>
                        <textarea id="contact-message-input-field" tabIndex="-1"></textarea>
                    </div>
                    <div className="row" id="contact-button-container">
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

                            {/*Submit Button*/}
                            <div id="contact-submit-button" className="small-button orange-hover">Submit</div>
                        </div>
                    </div>
                </div>

                {/*Loading Container*/}
                <div id="contact-loading-container" className="center contact-container hide">
                    <h4>Delivering...</h4>
                </div>

                {/*Result Container*/}
                <div id="contact-result-container" className="contact-container column center hide">
                    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                        <polyline id="contact-success-line" className="hide" stroke="#A1CC4D" points="10,70 40,100 115,20"></polyline>
                        <line stroke="rgb(216, 84, 84)" className="contact-error-line" x1="5" y1="5" x2="115" y2="115"></line>
                        <line stroke="rgb(216, 84, 84)" className="contact-error-line" x1="115" y1="5" x2="5" y2="115"></line>
                    </svg>
                    <div id="contact-result-message-container" className="center column"></div>
                    <div className="small-button orange-hover" id="contact-result-button"></div>
                </div>
            </div>
        </section>
    );
}
