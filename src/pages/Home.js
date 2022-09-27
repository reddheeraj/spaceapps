import React from 'react'
// import Glass from '../components/glass'
import '../styles/Home.css'
import { FaArrowDown, FaBars } from 'react-icons/fa'
import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'


function Home() {

  function MenuToggle() {
    const menu = document.querySelector('.toggle');
    menu.classList.toggle('active');

    const section = document.querySelector('.section');
    section.classList.toggle('active');

    const bars = document.querySelector('.bars');
    bars.classList.toggle('active');

    const home = document.querySelector('.home');
    home.classList.toggle('active');
  }

  return (
    <div className="home">
      <div className='section'>
        <div className='header'>
          <a href='/' className='logo'>Space.</a>
          <div className='toggle' onClick={MenuToggle}>
            <FaBars size={"25px"} color="white" className='bars'/>
          </div>
        </div>
        <div className='glassnav'></div>
        <div className='content'>
          <h2>Parker Solar Probe<br /><span>A story to be told...</span></h2>
        </div>
        <ul className='sci'>
          <li><a href='https://blogs.nasa.gov/parkersolarprobe/2018/08/11/the-parker-solar-probe-mission/' target='_blank' rel="noreferrer">NASA</a></li>
          <li><a href='/'>Github</a></li>
        </ul>
        <ul className='navigation'>
          <li><a href='/'>Option1</a></li>
          <li><a href='/'>Option2</a></li>
          <li><a href='/aboutus'>About the Team</a></li>
        </ul>
        <div className='scrolldown'>
          <h2>Scroll Down</h2>
          <br />
          <FaArrowDown size={"25px"} className='arrow'/>
        </div>
      </div>
      <div className='story1'>
        <Story1 />
      </div>
      <div className='story2'>
        <Story2 />
      </div>
      <div className='story3'>
        <Story3 />
      </div>
    </div>
  )
}    

export default Home