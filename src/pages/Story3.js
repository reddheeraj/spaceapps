import React from 'react'
import '../styles/story3.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Story3() {
    React.useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
  return (
    <div className='story3'>
        <div className='story3-content' data-aos='slide-up'>
            <h1>Parkar's Venus Flight</h1>
                <div className='story3-intro' data-aos='slide-up'>
                    <div className='story3-intro-text'>
                        <h2>Parkar's Encounter With Venus!</h2>
                        <p>Though designed to study the Sun, NASA's Parker
                           Solar Probe has scored a first by collecting the
                           first images of the surface of Venus in visible light
                           using its Wide-Field Imager while flying by 
                           the planet's night side in 2020 and 2021.
                        </p>
                    </div>
                        <div className='story3-intro-obs1' data-aos='slide-up'>
                        <span>First results are reported about images of the night side of 
                            Venus from the WISPR imager on board Parker Solar Probe.
                        </span>
                        </div>
                        <div className='story3-intro-obs2' data-aos='slide-up'>
                        <span>Thermal emission from the surface is observed at shorter
                             wavelengths than ever before seen.
                        </span>
                        </div>
                        <div className='story3-intro-obs3' data-aos='slide-up'>
                        <span>Nightglow emission from molecular oxygen 
                            is observed at the limb
                        </span>
                        </div>
                    <div className='card3-img1' data-aos='slide-up' ></div>
                </div>
                    <div className='story3-end' data-aos='slide-up'>
                        <div className='story3-end-text'>
                        <h2>Parkar's Observation Of Planet Venus.
                        </h2>
                        <p>
                        WISPR has also imaged Venus orbital dust ring a doughnut-shaped track
                         of microscopic particles strewn in the wake of Venus orbit around the 
                         Sun and the FIELDS instrument made direct measurements of radio waves 
                         in the Venusian atmosphere, helping scientists understand how the upper 
                         atmosphere changes during the Sun's 11-year cycle of activity.
                        </p>
                        </div>
                 
                        <div className='story3-intro-obs4' data-aos='slide-up'>
                        <span>In December 2021, researchers published new findings about the 
                              rediscovery of the comet-like tail of plasma streaming out behind Venus,
                              called a “tail ray”.
                        </span>
                        </div>
                        <div className='card3-img2' data-aos='slide-up' ></div>
                    </div>


        </div>
    </div>
  )
}

export default Story3