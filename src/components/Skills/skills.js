import React from "react";
import './skills.css';
import dynamoIcon from '../../images/dynamoDB.png';
import restApi from '../../images/restapi.png'
import lambda from '../../images/lambda.png'
import aws from '../../images/aws1.png'

class Skills extends React.Component {
    render() {
        return (
            <div id="skills" className="skillsection">
                <h2> Skills &amp; Technologies </h2>
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
                        {/* <i class="fab fa-js" aria-hidden="true"></i> */}
                        <p>Javascript</p>
                    </div>
                    <div className="boxIcon">
                        <i class="devicon devicon-react-original" aria-hidden="true"></i>
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
                        <img className="imageIcon" src={dynamoIcon}></img>
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
                    <div className="boxIcon">
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

                <h3>Currently working on:</h3>
                <p>Improving my skills in, and understanding of Docker, Kubernetes.</p>
            </div>

        );
    }
}

export default Skills;