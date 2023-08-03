import './hardSkills.css';
import { GoTools } from 'react-icons/go';
import { BiLogoFigma, BiLogoSlack, BiLogoTailwindCss } from 'react-icons/bi';
import { RxNotionLogo } from 'react-icons/rx';
import { BsStack, BsGit } from 'react-icons/bs';
import { FaEmber, FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const HardSkills = () => {
  return (
    <div className='mt-2 p-3 w-[270px] h-[300px] border-[1px] border-solid border-dark rounded-[5px]'>
         <div className='flex'>
           <h3 className='flex items-center text-1xl text-orange'> <GoTools/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Tools</h3>
        </div>

      <div className='mt-3 flex'>
          <h3 className='px-2 text-4xl text-dark'> <RxNotionLogo/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> <BiLogoFigma/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> < BiLogoSlack /> </h3>
          <h3 className='px-2 text-4xl text-dark'> <BiLogoTailwindCss /> </h3> 
      </div>

         <div className='mt-6 flex'>
           <h3 className='flex items-center text-1xl text-orange'> <BsStack/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Stacks</h3>
        </div>

      <div className='mt-3 flex'>
          <h3 className='px-2 text-3xl text-dark'> <SiJavascript/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> <FaHtml5/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> <FaCss3Alt /> </h3>
          <h3 className='px-2 text-4xl text-dark'> <FaEmber/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> <FaReact/> </h3>
      </div>

        
      <div className='mt-6 flex'>
           <h3 className='flex items-center text-1xl text-orange'> <BsGit/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Git versioning</h3>
      </div>
      
      <div className='mt-3 flex'>
          <h3 className='px-2 text-4xl text-dark'> <FaGithub/> </h3> 
          <h3 className='px-2 text-4xl text-dark'> <FaGitlab/> </h3> 
      </div>

      </div>
)
  };

export default HardSkills;