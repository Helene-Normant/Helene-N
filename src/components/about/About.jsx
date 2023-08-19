import './about.css';

import Bio from '../bio/Bio';
import Skills from '../Skills';

import { BsArrowDown } from 'react-icons/bs';

const About = () => {
    return (
      <div className='about-container flex flex-col w-[38.688em] h-[38.188em] mt-[2.5em] border-[0.094em] border-solid border-dark rounded-[0.188em]'>
          <div className='about-title container flex p-3'>
            <h2 className='title-about text-2xl text-dark'>ABOUT ME</h2>
            <h2 className='arrow-about text-3xl text-dark'> <BsArrowDown/> </h2>
          </div>
            
           <div className='about-bio-container pl-7 w-[37.5em] h-[11.938em]'>
               <Bio/>
            </div>
            
            <div className='work-about-container flex justify-center mt-5'>
              <h2 className='title-work-about text-[1.3rem] text-dark'>I WORK WITH</h2>
              <h2 className='loading-about text-[1.3rem] text-orange'></h2>
            </div>

            <div className="about-skills-container mt-[0.031em] ml-[9.375em] border-1 border-solid border-medium w-[18.75em]"><hr /></div>
            <Skills/>
      </div>
)
  };

export default About;