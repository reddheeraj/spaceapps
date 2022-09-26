import React from 'react'
import '../styles/Story2.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Story2() {

        React.useEffect(() => {
            Aos.init({duration: 2000});
        }, []);
  return (
    <div className='story2'>
        <div className='story2-content' data-aos='slide-up'>
            <h1>Journey to Sun</h1>
            <div className='story2-intro' data-aos='slide-up'>
                <div className='story2-intro-text'>
                    <h2>While traveling, Parker faced many obstacles!</h2>
                    <p>As it orbits the Sun, NASA’s Parker Solar Probe 
                        encounters some of the most challenging conditions 
                        ever faced by a spacecraft!
                    </p>
                </div>
                <div className='story2-intro-obs1' data-aos='slide-up'>
                    <span>High temperatures of 1,500 degrees Fahrenheit</span>
                </div>
                <div className='story2-intro-obs2' data-aos='slide-up'>
                    <span>Space dust that could easily degrade materials and instruments</span>
                </div>
                <div className='story2-intro-obs3' data-aos='slide-up'>
                    <span>Intense light and high-speed particles escaping from our closest star</span>
                </div>
            </div>
            <div className='story2-mid' data-aos='slide-up'>
                <div className='story2-mid-text'>
                    <h2>But...</h2>
                    <p>Parker has weathered it all while flying approximately  
                        <span> 2.7 billion miles</span> (4.4 billion kilometers) — roughly the
                         distance from the Sun to Neptune — and doing it faster 
                         than any mission before.
                    </p>
                </div>
            </div>
            <div className='story2-end' data-aos='slide-up'>
                <div className='story2-end-text'>
                    <h2>How does Parker Solar Probe survive?
                    </h2>
                    <span>(It’s all about the heat shield!)</span>
                    <p>
                        It’s all thanks to its unique design and engineering.
                        Parker Solar Probe is the <span>first</span> spacecraft to fly through
                        the Sun’s atmosphere, the corona, and the <span>first</span> to
                        touch the Sun. It’s also the <span>fastest</span> human-made object ever
                        launched, traveling at more than 430,000 miles per hour (700,000 kilometers per hour).
                    </p>
                </div>
                <div className='gcontainer'>
                    <div className='gcard'>
                        <div className='gcontent'>
                            <h3>Heat Shield</h3>
                            <p>
                                Parker Solar Probe makes use of a heat shield known as the <span>Thermal Protection System</span>, or TPS.
                                It is made of <span>carbon-carbon</span>, a material that can withstand
                                temperatures of 3,000 degrees Fahrenheit (1,650 degrees Celsius).
                            </p>
                        </div>
                    </div>
                    <div className='gcard'>
                        <div className='gcontent'>
                            <h3>Faraday cup</h3>
                            <p>
                            a sensor designed to measure the <span>ion</span> and <span>electron fluxes</span> and 
                            <span> flow
                            angles</span> from the solar wind. Unique tech had to be engineered 
                            to make sure that not only can the instrument survive, but also 
                            the electronics aboard can send back accurate readings.
                            </p>
                        </div>
                    </div>
                    <div className='gcard'>
                        <div className='gcontent'>
                            <h3>Cooling System</h3>
                            <p>
                            Parker Solar Probe’s <span>cooling system</span> is designed to keep the spacecraft
                            at a temperature of about 85 degrees Fahrenheit.
                            The cooling system is powerful and will keep the solar arrays and instrumentation 
                            cool and functioning while in the heat of the Sun.
                            </p>
                        </div>
                    </div>  
                    <div className='gimg'></div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story2