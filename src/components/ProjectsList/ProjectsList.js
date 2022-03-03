import React from "react";
import projectsdata from './projectsdata';
import Projects from "../Projects/projects";
import './ProjectsList.css';

class ProjectList extends React.Component {
    render() {
        return (
            <section id="projects">
            <div className="wrapper">
                <div className="projectInfo">
                    <h1>Projects I've built</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.</p>
                </div>
    
                <div className="ProjectsList">
                {
                    projectsdata.map(project => {
                        return <Projects key={project.id} project={project} />
                    })
                }
                </div>
            </div>
            </section>
            
        )
    }
}

export default ProjectList;
