import React from "react";
import './About.css'
import about_img from './free-registration-img.webp'

const About = () => {
    const handleButtonClick = () => {
        window.scrollTo(0, document.body.scrollHeight);
        // Navigate to the Topdown component when the button is clicked
        window.location.href = '/Topdown';
      };
    
    return (
        <div className="about_container">
            <div className="split1">
                <img src={about_img} alt="image"/>
            </div>
            <div className="split2">
            <h3>Better Results.Better Coaching</h3>
           <h1>About Us</h1>
           <p><h4>ative Learning Techniques at MAPSWAY TUITION!</h4><br/>
    🔍 Searching for Excellent Hindi Coaching?<br/>
    👩‍🎓 Tailored for School Students across Various Boards<br/>
    📚 From Primary Education to Higher Secondary Levels<br/>
🎓 Undergraduate Support Available Too!<br/>

    🌟 Why Choose MAPSWAY TUITION? 🌟<br/>
    ✨ Experienced Educators Committed to Your Success<br/>
✨ Engaging Teaching Methodologies<br/>
✨ Personalized Attention for Every Student<br/>
✨ Comprehensive Curriculum Coverage<br/>

🔗 Connect with Us Today and Transform Your Learning Experience! 📝</p>
<button onClick={handleButtonClick}>Join Now</button>
            </div>
        </div>
    );
}

export default About;
