import React from "react";
import Airform from 'react-airform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import './contact.css';

class Contact extends React.Component {
    render() {
        const emailElement = <FontAwesomeIcon icon={faSquareEnvelope} />;
       

        return (
            <div id="contact">
                <div className="wrapper">
                    <div className="contactHeading">
                        <h1>Contact</h1>
                        <h3>Get in Touch</h3>
                        <div className="contactCointainer">
                            <div className="containerForm">
                                <p>Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!</p>
                                <div className="form">
                                    <Airform  email="poojapatel.leo@gmail.com">
                                    <div className="field">
                                        <label for="name">Name<span className="required">*</span></label>
                                        <input type="text" name="name" id="name" required="required" placeholder="Full name"></input>
                                        
                                    </div>
                                    <div className="field">
                                        <label for="email">Email<span class="required">*</span></label>
                                        <input type="email" name="_replyto" id="email" required="required" placeholder="Email Address" />
                                        
                                    </div>
                                    <div className="field">
                                        <label for="message" class="message">Message<span class="required">*</span></label>
                                        <textarea type="text" name="message" id="message" required="required" placeholder="Your Message"></textarea>
                                        
                                    </div>
                                    <button class="btn" value="send">
                                        <span>Send message</span>
                                        <i class="far fa-envelope-open" aria-hidden="true"></i>
                                    </button>
                                    </Airform>
                                </div>
                            </div>
                            

                            <div className="containerSocial">
                                <p>Feeling social? Find me on these online spaces too or send me an email!</p>
                                <div className="socialIcons">
                                    <ul>
                                        <li className="icon">
                                        <a href="https://github.com/poojaleo" target="_blank" aria-label="open link to pooja patel's github page.">
                                        <i className="devicon devicon-github-original-wordmark"></i></a>
                                        </li>
                                        <li className="icon">
                                        <a href="https://www.linkedin.com/in/poojapatel04/" target="_blank" aria-label="open link to pooja patel's Linkedin's page.">
                                        {/* <i className="devicon devicon-linkedin-plain"></i></a> */}
                                        <i className="devicon linkedin devicon-linkedin-plain"></i></a>
                                        </li>
                                        <li className="icon">
                                        <a href="mailto:poojapatel.leo@gmail.com" target="_blank" aria-label="Email to pooja patel">
                                        <div className="devicon">{emailElement}</div></a>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;