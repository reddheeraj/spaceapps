import React from 'react'
import '../styles/Story1.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Story1() {

    React.useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='story1'>
        <div className='story1-content' data-aos='fade-up' >
            <h1>The Launch Of Parker</h1>
            <div className='story1-intro'>
                <div className='card' data-aos='slide-up'>
                    <div className='card-content'>
                        <h2>What is Parker Solar Probe?</h2>
                        <p>Parker Solar Probe is a <span>NASA mission</span> to study the Sun. 
                            The space craft is expected to fly through the Sun's atmosphere, 
                            called <span>Corona</span>, closer than any spacecraft before it. 
                            The mission will help scientists answer long-standing 
                            questions about the <span>Sun</span> and <span>Solar wind</span>.
                            The spacecraft will also help scientists 
                            prepare for future human missions to the Sun.
                        </p>
                    </div> 
                </div>
                <div className='card1-img' data-aos='slide-up' ></div>
                <div className='card1' data-aos='slide-up'>
                    <div className='card-content'>
                        <h2>Launch from Earth</h2>
                        <p>NASA’s Parker Solar Probe mission launched <span>Aug. 12 2018</span> 
                            from <span>Cape Canaveral Air Force Station</span> in Florida. The mission 
                            will be the first to fly directly through the Sun’s corona;
                            the hazardous region of intense heat and solar radiation in
                            the Sun’s atmosphere that is visible during an eclipse.
                        </p>
                    </div>
                </div>
                <div className='card2-img' data-aos='slide-up' ></div>
            </div>
        </div>
    </div>
  );
}

export default Story1