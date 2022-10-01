import React from 'react'
import '../styles/AboutUs.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function AboutUs() {
  return (
    <div className='aboutus'>
        <div className='aboutus_header'>
            <h1>About the Team</h1>
        </div>
        <div className='aboutus_container'>
            <div className='card'>
                <div className='content'>
                    <div className='imgBx1'>
                    </div>
                    {/* <h2>Team Lead</h2> */}
                    <h1>Dheeraj</h1>
                    <h2>Full Stack Developer</h2>
                    <p>Hi! I'm Dheeraj and I love to code and play Guitar! 
                        I'm passionate about what I do and I have built a wide variety of skills for myself.
                        Feel free to Connect with me on Linkedin!</p>
                    <div className='sci_icons'>
                        <a href='https://www.instagram.com/red_dheeraj/' target='_blank' rel="noreferrer">
                            <FaInstagram size={"25px"} />
                        </a>
                        <a href='https://www.linkedin.com/in/dheeraj-reddy-889a10222/' target='_blank' rel="noreferrer">
                            <FaLinkedin size={"25px"} />
                        </a>
                        <a href='https://www.github.com/reddheeraj' target='_blank' rel="noreferrer">
                            <FaGithub size={"25px"} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='card'>  
                <div className='content'>
                        <div className='imgBx2'>
                        
                        </div>
                    {/* <h2>Team Member</h2> */}
                    <h1>Bhargav</h1>
                    <h2>Back End Developer</h2>
                    <p>I am a hardworking and motivated coder who has acquired extensive knowledge in the field of programming languages.</p>
                    <div className='sci_icons'>
                        <a href='https://www.instagram.com/dixith_bhargav/' target='_blank' rel="noreferrer">
                            <FaInstagram size={"25px"} />
                        </a>
                        <a href='https://www.linkedin.com/in/bhargav-403b93226/' target='_blank' rel="noreferrer">
                            <FaLinkedin size={"25px"} />
                        </a>
                        <a href='https://github.com/Bhargav2506' target='_blank' rel="noreferrer">
                            <FaGithub size={"25px"} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='backicon'>
                <li>
                    <a href='/spaceapps'>Back to Home</a>
                </li>
            </div>
        </div>
    </div>
  )
}

export default AboutUs