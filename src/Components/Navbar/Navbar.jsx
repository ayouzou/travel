import React, {useState,useEffect} from "react";
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import aos from "aos";
import 'aos/dist/aos.css'
const Navbar=()=>{
    useEffect(()=>{
       aos.init({duration:2000})
     },[])

    const[active ,setActive]=useState('navBar')
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    const remove=()=>{
        setActive('navBar')
    }
    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>
                    Travel.</h1>
                </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#"> BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={remove} className="closeNavbar"><AiFillCloseCircle className="icon"/></div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}




export default Navbar