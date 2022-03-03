import React from "react";
import './projects.css';
import jammingImage from '../../images/jamming.jpeg';
import yelpImage from '../../images/yelp.jpeg';

class Projects extends React.Component {
    render() {
            const project = this.props.project;
        return (
                <div className="projects">
                    <div className="imageContainer">
                        <img className="projectImage" src = {project.image} alt="project image" />
                    </div>
                    <h2>{project.title}</h2>
                    <div className="projectInformation">
                        <h4>{project.subtitle}</h4>
                        <p>{project.description}</p>
                    </div>
                    <div className="workButtons">
                        <a href= {project.weblink} target = "_blank" className="linkbutton">
                            <span>View It Here</span>
                        </a>
                        <a href= {project.gitlink} target = "_blank" className="linkbutton">
                            <span>View Github Repo</span>
                        </a>
                    </div>
                    
                </div>
        );
    }
}

export default Projects;