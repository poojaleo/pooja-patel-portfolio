import React from "react";
import "./navbar.css";
import Resume from '../../images/Resume_Pooja Patel.pdf';

class Navbar extends React.Component {
    render() {
        return (
            <header className="head">
                <ul className="list">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills" className="hide">Skills</a></li>
                    <li><a href="#contact" className="hide">Hire Me</a></li>
                </ul>
                <div className="resume">
                    <a className="resumeButton" href={Resume} target="_blank" rel="noopener noreferrer" >Resume</a>
                
                </div>
                
            </header>
        );
    }
}

export default Navbar;