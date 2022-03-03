import React from "react";
import Contact from "../Contact/contact";
import './about.css';
import profileImage from '../../images/ProfilePic.png';

class About extends React.Component {
    render() {
        return (
          <section id="about">
            <div className="wrapper">
              <div className="infosection">
                <div className="profileimage" >
                  <img className="Image" src={profileImage}  alt="Picture of Pooja Patel"></img>
                </div>
                <div className="info">
                  <h1>Hi, I am Pooja</h1>
                  <p>I am an Web Developer, currently undertaking a rigourous 9-month full time backend web development course 
                  jointly developed by Amazon and BloomTech (formerly Lambda School). </p>
                  <p>Prior to this course, I worked as a Human Resource Professional for 5 years across Retail, Tech and non-profit companies, 
                  after graduating with an MBA from a premier b-school in India. I am an engineer at heart (undergraducate degree in Electronics Engineering) 
                  and felt compelled to re-skill myself to pursue a career in technology development, which led me to join BloomTech.</p>
                  <p>A growth mindset developer that works well with a team or independently in a remote setting</p>
                </div>
                
              </div>
            </div>
            
          </section>

          //   <section id="about">
          //   <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center">
          //         Hi, I'm Pooja
          //         <br className="hidden lg:inline-block" />I love to build amazing
          //         apps.
          //       </h1>
          //       <p className="mb-8 leading-relaxed">
          //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          //         laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          //         Laborum, voluptas natus?
          //       </p>
          //       <div className="flex justify-center">
          //         <a
          //           href="#contact"
          //           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          //           Work With Me
          //         </a>
          //         <br></br>
          //         <a
          //           href="#projects"
          //           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          //           See My Past Work
          //         </a>
          //       </div>
          //     </div>
          //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          //       <img
          //         className="object-cover object-center rounded"
          //         alt="hero"
          //         src="./coding.svg"
          //       />
          //     </div>
          //   </div>
          // </section>  
        );
    }
}

export default About;