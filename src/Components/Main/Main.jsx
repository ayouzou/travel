import React,{useEffect} from "react";
import './main.css'
import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
// import img from "../Home/images/a1.jpg"
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'
import aos from "aos";
import 'aos/dist/aos.css'
const Data=[
    {
        id:1,
        imgSrc:img,
        desTitle:'bora bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'498$',
        description:'hhhhhhhhhhhl llllll mmmm ggggg fffff dddddddd sssssss f'
    },
    {
        id:2,
        imgSrc:img,
        desTitle:'bora bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'498$',
        description:'hhhhhhhhhhhl llllll mmmm ggggg fffff dddddddd sssssss f'
    },
    {
        id:3,
        imgSrc:img,
        desTitle:'bora bora',
        location:'new zealand',
        grade:'CULTURAL RELAX',
        fees:'498$',
        description:'hhhhhhhhhhhl llllll mmmm ggggg fffff dddddddd sssssss f'
    },
    
]
const Main=()=>{
    useEffect(()=>{
     aos.init({duration:2000})
    },[])


    return(
        <section className="main container section  mx-auto ">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent  sm:flex ">
               {Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
                return(
                    <div key={id} className="signleDestination  m-5">

                        <div className="imageDiv">
                            <img src={imgSrc} alt={desTitle}/>
                        </div>
                        <div className="cardInfo cursor-pointer ">
                            <h4  className="desTitle">{desTitle}</h4>
                            <span className="continent-flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                             </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>
                           <div className="desc">
                                <p>{description}</p>
                           </div>
                           <button className="btn flex">
                            details<BsClipboardCheck className="icon"/>
                           </button>
                        </div>
                    </div>
                )
               })
               }
            </div>
        </section>
    )
}




export default Main