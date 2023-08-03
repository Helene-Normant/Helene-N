import { BsArrowDown } from 'react-icons/bs';
import HardSkills from './hardSkills/HardSkills';
import Soft from './Soft';
import Bio from './Bio';


const About = () => {
    return (
        <div className='flex flex-col w-[619px] h-[611px] mt-[80px] border-[1.5px] border-solid border-dark rounded-[5px]'>
          <div className='flex p-3'>
            <h2 className='text-2xl text-dark'>ABOUT ME</h2>
            <h2 className='text-3xl text-dark'> <BsArrowDown/> </h2>
            </div>
           <div className='pl-7 w-[600px] h-[191px]'>
               <Bio/>
            </div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col'>
                <h3 className='tools text-1xl text-dark text-center'>HARD SKILLS</h3>
                <HardSkills/>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-1xl text-dark text-center'>SOFT SKILLS</h3>
                <Soft/>
            </div>
        </div>
         </div>
)
  };

export default About;