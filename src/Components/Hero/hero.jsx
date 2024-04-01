import React from 'react'
import './Hero.css'
// import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

 const Hero = () => {
  return (
    <div className='hero'>
         <div className="hero-left">
           <h2>NEW ARRIVALS</h2>
           <div>
           
             <div className='hero-hand-icon'>
             <p>Fun Brands = Delightful Surprises...</p>
               {/* <img src="https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1024984.jpg&fm=jpg" alt=""/> */}
             </div>
             <br></br>
             
             <p>MIN. 60% OFF</p>
             {/* <p>Love you,Love me more.</p> */}
           </div>
           <div className="hero-latest-btn">
             <div>Shop Now</div>
             <img src={arrow_icon} alt=""/>
           </div>
         </div>
         <div className="hero-right">
           <img src={hero_image} alt=""/>
         </div>
    </div>
    
       
  
  )
}
export default Hero