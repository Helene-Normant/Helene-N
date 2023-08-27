import './about.css';

import Bio from '../bio/Bio';
import Skills from '../Skills';

import { BsArrowDown } from 'react-icons/bs';

const About = () => {
    return (
      <div className='about-container flex flex-col border-[0.094em] border-solid border-dark rounded-[0.188em] xxs:mt-[1.8em] xxs:h-[40em] xxs:w-[22em] xs:mt-[1.8em] xs:h-[38em] xs:w-[28em] sm:mt-[1.8em] sm:h-[35em] sm:w-[38em] md:mt-[1.8em] md:w-[38em] md:h-[35em] lg:mt-[2.7em] lg:w-[30em] lg:h-[36em] xl:mt-[3.2em] xl:w-[35em] xl:h-[36em] 2xl:mt-[2.5em] 2xl:w-[38.688em] 2xl:h-[38.188em] 3xl:w-[50em] 3xl:h-[50em] 3xl:mt-[2.3em]'>
          <div className='about-title container flex p-3'>
            <h2 className='title-about text-2xl text-dark'>ABOUT ME</h2>
            <h2 className='arrow-about text-3xl text-dark'> <BsArrowDown/> </h2>
          </div>
            
           <div className='about-bio-container xxs:pl-[0.5em] xxs:w-[40em] xs:pl-[1em] xs:w-[40em] sm:h-[11em] sm:pl-[1.5em] sm:w-[40em] sm:h-[11em] md:pl-[1.5em] md:w-[40em] md:h-[11em] lg:pl-[1em] lg:w-[24em] lg:h-[11em] xl:w-[29em] xl:h-[10em] xl:pl-[2em] 2xl:pl-7 2xl:w-[37.5em] 2xl:h-[11em] 3xl:w-[42em] 3xl:pl-[4em]'>
               <Bio/>
            </div>
            
            <div className='work-about-container flex justify-center xxs:mt-[6.5em] xs:mt-[2.5em] sm:mt-[2em] md:mt-[2.3em] lg:mt-7 xl:mt-10 2xl:mt-5 3xl:mt-[7em]'>
              <h2 className='title-work-about text-[1.3rem] text-dark 3xl:text-[1.5rem]'>I WORK WITH</h2>
              <h2 className='loading-about text-[1.3rem] text-orange 3xl:text-[1.5rem]'></h2>
            </div>

            <div className="about-skills-container mt-[0.031em] border-1 border-solid border-medium w-[18.75em] xl:mb-1 2xl:ml-[9.375em] 3xl:mt-[0.9rem]"><hr /></div>
            <Skills/>
      </div>
)
  };

export default About;