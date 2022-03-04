import React from "react";
import './contactform.css';

class Contactform extends React.Component {
    render() {
        return (
            
           <form name="contact" method="post" className='contactForm'>
            <input type="hidden" name="form-name" value="contact" />
           <div className="field">
             <label htmlFor="name">Name<span className="required">*</span></label>
             <input type="text" id="name" name="name" required="required" placeholder="Full name" />
           </div>
           <div className="field">
             <label htmlFor="email">Email<span className="required">*</span></label>
             <input type="email" id="email" name="email" required placeholder="Email Address" />
           </div>
           <div className="field">
             <label htmlFor="message" className="message">Message<span className="required">*</span></label>
             <textarea type="text" id="message" name="message" required placeholder="Your Message"></textarea>
           </div>
           <div>
            <button className="btn" type='submit'>Send Message</button>
           </div>
         </form>
       );
    }
}

export default Contactform;