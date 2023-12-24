import React,{useEffect} from "react";
import './footer.css'
import video from "../Home/images/video.mp4"
import {FiSend} from 'react-icons/fi'
import {MdTravelExplore}  from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import aos from "aos";
import 'aos/dist/aos.css'
const Footer=()=>{
    useEffect(()=>{
      aos.init({duration:2000})
    },[])
    return(
        <section className="footer">

            <div className="videoDiv">
                <video src={video} loop autoPlay muted video="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us </h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Adresse"/>
                        <button data-aos="fade-up" className="btn flex" type="submit">SEND<FiSend className="icon"/></button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                    <div className="logoDiv">
                    <a href="#" className="logo flex">
                       <MdTravelExplore className="icon"/> Travel.
                    </a>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                    Le Lorem Ipsum est simplement du faux texte employé dans la 
                    composition et la mise en page avant impression. Le Lorem Ipsum 
                    est le faux texte standard de l'imprimerie depuis les années 1500, 
                    quand un peintre anonyme assembla ensemble des morceaux de texte pour 
                    réaliser un livre spécimen de polices de texte.
                    </div>
                    <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                Our Agency 
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payement
                            </li>
                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Booking
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostleWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                               LAST MINUTE 
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London 
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Casablanca
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rabat
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tanger
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED AYOUB ZOUINE</small>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Footer