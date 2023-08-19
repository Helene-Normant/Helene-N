import './about.css';

import Bio from '../bio/Bio';
import Skills from '../Skills';

import { BsArrowDown } from 'react-icons/bs';

const About = () => {
    return (
      <div className='about-container flex flex-col w-[619px] h-[611px] mt-[40px] border-[1.5px] border-solid border-dark rounded-[3px]'>
          <div className='about-title container flex p-3'>
            <h2 className='title-about text-2xl text-dark'>ABOUT ME</h2>
            <h2 className='arrow-about text-3xl text-dark'> <BsArrowDown/> </h2>
          </div>
            
           <div className='about-bio-container pl-7 w-[600px] h-[191px]'>
               <Bio/>
            </div>
            
            <div className='work-about-container flex justify-center mt-5'>
              <h2 className='title-work-about text-[1.3rem] text-dark'>I WORK WITH</h2>
              <h2 className='loading-about text-[1.3rem] text-orange'></h2>
            </div>

            <div className="about-skills-container mt-[0.5px] ml-[150px] border-1 border-solid border-medium w-[300px]"><hr /></div>
            <Skills/>
      </div>
)
  };

export default About;