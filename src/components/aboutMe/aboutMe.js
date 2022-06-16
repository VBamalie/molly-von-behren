import React from 'react'
import pic from "./molly.JPG"
import Image from 'react-bootstrap/Image'
import "./aboutMe.css"

function Aboutme(){
   return (
   <div className="aboutMe" id="aboutMe">
       <Image className="molly" src={pic}></Image>
       <div className='block-text'>
       <h2>About Molly Von Behren</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
       <p>
       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <h4>Techs I excell in:</h4>
       <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
       </ul>
       </div>
   </div>
   )
}
export default Aboutme