import React from "react";
import "./navbar.css"

class Navbar extends React.Component {
    render() {
        return (
            <header className="head">
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Hire Me</a></li>
                </ul>
                
            </header>
        );
    }
}

export default Navbar;