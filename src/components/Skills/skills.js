import React from "react";
import './skills.css';
import db from '../../images/db.png';
import restApi from '../../images/api2.png';
import lambda from '../../images/lambda1.png';
import aws from '../../images/aws3.png';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class Skills extends React.Component {
    render() {
        
        const databaseElement = <FontAwesomeIcon icon={faDatabase} />;

        return (
            <div id="skills" className="skillsection">
                <h1> Skills &amp; Technologies </h1>
                <p>The skills, tools and technologies I use to bring products to life:</p>
                <div className="containersIcon">
                    <div className="boxIcon">
                        <i className="devicon devicon-html5-plain" aria-hidden="true"></i>
                        <p>html5</p>
                    </div>
                    <div className="boxIcon">
                        <i className="devicon devicon-css3-plain" aria-hidden="true"></i>
                        <p>CSS3</p>
                    </div>
                    <div className="boxIcon">
                        <i className="devicon devicon-javascript-plain"></i>
                        {/* <i className="fab fa-js" aria-hidden="true"></i> */}
                        <p>Javascript</p>
                    </div>
                    <div className="boxIcon">
                        <i className="devicon devicon-react-original" aria-hidden="true"></i>
                        <p>React</p>
                    </div>
                    <div className="boxIcon">
                        <i className="devicon devicon-visualstudio-plain" aria-hidden="true"></i>
                        <p>VS Code</p>
                    </div>

                    <div className="boxIcon">
                        <i className="devicon devicon-java-plain"></i>
                        
                        <p>Java</p>
                    </div>

                    <div className="boxIcon">
                        <i className="devicon devicon-spring-plain"></i>
                        <p>Spring Framework</p>
                    </div>

                    <div className="boxIcon">
                        <img className="imageIcon" src={db}></img>
                        {/* <i class="devicon fas fa-database"></i> */}
                        <p>DynamoDB</p>
                    </div>
                    <div className="boxIcon">
                    <i className="devicon devicon-gradle-plain" aria-hidden="true"></i>
                    <p>Gradle</p>
                    </div>
                    <div className="boxIcon">
                    <i className="devicon devicon-intellij-plain" aria-hidden="true"></i>
                    <p>Intellij</p>
                    </div>
                    <div className="boxIcon lambda">
                        <img className="imageIcon" src={lambda}></img>
                        <p>AWS Lambda</p>
                    </div>
                    <div className="boxIcon">
                        <img className="imageIcon" src={aws}></img>
                        <p>AWS Web Services</p>
                    </div>

                    <div className="boxIcon"> 
                        <img className="imageIcon" src={restApi}></img>
                        <p>Restful API's</p>
                    </div>
                    
                    
                    <div className="boxIcon">
                        <i className="devicon devicon-git-plain" aria-hidden="true"></i>
                        <p>Git</p>
                    </div>
                    {/* <div className="boxIcon">
                        <i class="devicon devicon-github-plain" aria-hidden="true"></i>
                        <p>Github</p>
                    </div> */}

                    
                    <div className="boxIcon">
                    <i className="devicon devicon-bash-plain" aria-hidden="true"></i>
                    <p>Bash</p>
                    </div>
                </div>

                <div className="currentlyWorking">
                    <h3>Currently working on:</h3>
                    <p>Improving my skills in, and understanding of Docker, Kubernetes.</p>
                </div>
            </div>

        );
    }
}

export default Skills;