import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Topdone.css';
import mapsway_logo from "./mapsway_logo.png";
import babyt from "./babyt.jpg";
import Datas from "./Datas";
import About from "./About";

class Topdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showServices: false,
            showContacts: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.performAsyncTask();
    };

    toggleServices = () => {
        this.setState({ showServices: !this.state.showServices });
    };

    toggleContacts = () => {
        this.setState({ showContacts: !this.state.showContacts });
    };

    performAsyncTask = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate asynchronous operation
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.href = '/Datass';
    };

    performAsyncTaskabout = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate asynchronous operation
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.href = '/About';
    };

    handleServiceClick = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        this.toggleServices(); // Toggle the visibility of the services dropdown
    };

    handleContactClick = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        this.toggleContacts(); // Toggle the visibility of the contacts dropdown
    };

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/Datass" element={<Datas />} />
                    <Route path="/About" element={<About />} />
                </Routes>

                <div className="top-headers">
                    <div className="top-headers-sub">
                        <ul>
                            <li><PlaceIcon /><a href="#">Thirumazhisai-Jawahar st-Chennai-600124</a></li>
                            <li><EmailIcon /><a href="#">Mapsway@gmail.com</a></li>
                            <li><PhoneIcon /><a href="#">phone</a></li>
                        </ul>
                    </div>
                </div>
                <div className="top-headers2">
                    <div className="top-headers2-sub">
                        <ul>
                            <li><img src={mapsway_logo} alt="logo" /></li>
                            <li><Link to="/">Home</Link><ArrowDropDownIcon /></li>
                            <li onClick={this.handleServiceClick}><a href="#">Service</a><ArrowDropDownIcon /></li>
                            {this.state.showServices && (
                                <div className="Services">
                                    <ul>
                                        <li>Praveshika</li>
                                        <li>Rashtrabasha</li>
                                        <li>Madhyama</li>
                                        <li>Prathamic</li>
                                    </ul>
                                </div>
                            )}
                            <li><Link to="/About" onClick={this.performAsyncTaskabout}>About</Link><ArrowDropDownIcon /></li>
                            <li><Link to="/gallery">Gallery</Link><ArrowDropDownIcon /></li>
                            <li onClick={this.handleContactClick}><a href="#">Contact</a><ArrowDropDownIcon /></li>
                            {this.state.showContacts && (
                                <div className="Contacts">
                                    <ul>
                                        <li><a href="tel:9962297792">7010117792</a></li>
                                        <li><a href="mailto:MapsWays@gmail.com">MapsWays@gmail.com</a></li>
                                    </ul>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="top-img">
                    <div className="images">
                        <img src={babyt} alt="student" />
                        <Link to="/Datass">
                            <button onClick={this.handleSubmit}>Join Now</button>
                        </Link>
                        <marquee scrollAmount="9">.....Free Class For One Week Uase this Opportunity And Free Hindi Book Provide All The participate Student.....⭐⭐⭐ Dont'think just try the free demo class for one week ⭐⭐⭐⭐</marquee>
                    </div>
                    <div className="waper-poxs">
                        <div className="wrapper">
                            <div className="typing-demo">
                                Together We'll Learn New Things Daily.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="boxdiv">
                    <div className="boxs one">
                        <div className="inner_box"> <h1>Prathamik Hindi Exam</h1></div><div className="inner_booking">Book Free Demo Class (:'Prathamik':) For<b> One Week</b></div><div className="linkbutton"><Link to="/Datass"><button onClick={this.handleSubmit}>Click To Join</button> </Link></div>
                    </div>  
                    <div className="boxs two">
                        <div className="inner_box"> <h1>Madhyama Hindi Exam</h1></div><div className="inner_booking">Book Free Demo Class (:'Madhyama':) For<b> One Week</b></div><div className="linkbutton"><Link to="/Datass"><button>Click To Join</button> </Link></div>
                    </div>
                    <div className="boxs three"><div className="inner_box"><h1>Rashtrasha Hindi Exam</h1></div><div className="inner_booking">Book Free Demo Class (:'Rashtrasha':) For<b> One Week</b></div><div className="linkbutton"><Link to="/Datass"><button onClick={this.handleSubmit}>Click To Join</button> </Link></div></div>
                    <div className="boxs four"><div className="inner_box"><h1>Praveshika Hindi Exam</h1></div><div className="inner_booking">Book Free Demo Class (:'Praveshika':) For<b> One Week</b></div><div className="linkbutton"><Link to="/Datass"><button onClick={this.handleSubmit}>Click To Join</button> </Link></div></div>
                </div>
                <About/>
                </div>
            </BrowserRouter>
        );  
    }
}

export default Topdown;
