import React, { useState } from "react";
import './Datas.css';
import lbcvideo from './lbcvideo.mp4';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Datas = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobilenumber: '',
    email: '',
    gender: '',
    class: '',
    subject: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleButtonClick = async () => {
    console.log('FormData:', formData);
    window.scrollTo(0, document.body.scrollHeight);
    window.alert("Successfully Submitted! Short Time Send In To Message");
    window.location.href = '/Topdown';

    const response = await axios.post('http://localhost:8081/save', formData);
    console.log('Data saved successfully:', response.data);
  };

  return (
    <div className="headerform">
      <div className="moves">
        <marquee>
          <h1>⭐⭐⭐ Dont'think just try the free demo class for one week ⭐⭐⭐⭐.....Free Class For One Week Uase this Opportunity And Free Hindi Book Provide All The participate Student.....</h1>
        </marquee>
      </div>
      <div className="inner_headerform_right">
        <video loop autoPlay muted id="backgroundVideo">
          <source
            src={lbcvideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="grrenna">
        <div className="greena_sub">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" name="mobilenumber" placeholder="Mobile Number" value={formData.mobilenumber} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form_div">
              <label>Gender:</label>
              <div>
                <label>
                  <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
                  Male
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="class">Class:</label>
              <select id="class" name="class" value={formData.class} onChange={handleInputChange}>
                <option value="">Select Class</option>
                <option value="1st">1st Standard</option>
    <option value="2nd">2nd Standard</option>
    <option value="3rd">3rd Standard</option>
    <option value="4th">4th Standard</option>
    <option value="5th">5th Standard</option>
    <option value="6th">6th Standard</option>
    <option value="7th">7th Standard</option>
    <option value="8th">8th Standard</option>
    <option value="9th">9th Standard</option>
    <option value="10th">10th Standard</option>
    <option value="11th">11th Standard</option>
    <option value="12th">12th Standard</option>
    <option value="graduate"> Any Graduate</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange}>
                <option value="">Select subject</option>
                <option value="Prathamic">Prathamic</option>
    <option value="Madhyama">Madhyama</option>
    <option value="Rashtrabasha">Rashtrabasha</option>
    <option value="Praveshika">Praveshika</option>
              </select>
            </div>
            <button type="button" onClick={handleButtonClick}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Datas;
