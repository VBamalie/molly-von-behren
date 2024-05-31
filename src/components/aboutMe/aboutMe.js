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
       <p>My favorite thing in the world is to learn something new. From how computer memory is stored to learning various taste profiles of fancy green teas, I love absorbing that knowledge like a sponge and applying it wherever and whenever possible. That is why software development has sparked such a passion within me. The world of Technology is constantly changing by its very definition. There will always be a quicker, more efficient way to create programs, optimize storage, enhance connectivity, etc. and I am very excited to become one of the people who discovers those solutions! <br></br><br></br>

        In my quest to consume all knowledge, I have grown a particular fondness for coding. I am currently majoring in Computer Programming and Analysis, where I have learned languages such as Java, C and C# and have gained SQL data management and Business Analysist skills. I finished a certificate in Full-Stack wed Development, learning how to build a website with a MERN stack. I am seeking a role where I can find new ways to apply my skills and contribute to the development of innovative software solutions. 

        I am looking forward to connecting with you on LinkedIn or you can email me at vbamalie@gmail.com.</p>
       <h4>Techs I excell in:</h4>
       <ul>
           <li>JavaScript</li>
           <li>React</li>
           <li>CSS/HTML</li>
           <li>Java</li>
       </ul>
       </div>
   </div>
   )
}
export default Aboutme