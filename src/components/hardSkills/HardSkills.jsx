import './hardSkills.css';
import { GoTools } from 'react-icons/go';
import { BiLogoFigma, BiLogoSlack, BiLogoTailwindCss } from 'react-icons/bi';
import { RxNotionLogo } from 'react-icons/rx';
import { BsStack, BsGit } from 'react-icons/bs';
import { FaEmber, FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const HardSkills = () => {
  return (
    <div className='mt-2 p-3 w-[270px] h-[300px] border-[1px] border-solid border-dark rounded-[3px]'>
         <div className='flex'>
           <h3 className='flex items-center text-1xl text-orange'> <GoTools/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Tools</h3>
        </div>

      <div className='mt-3 flex'>
          <h3 className='px-2 text-4xl text-medium'> <RxNotionLogo/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <BiLogoFigma/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> < BiLogoSlack /> </h3>
          <h3 className='px-2 text-4xl text-medium'> <BiLogoTailwindCss /> </h3> 
      </div>

         <div className='mt-6 flex'>
           <h3 className='flex items-center text-1xl text-orange'> <BsStack/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Stacks</h3>
        </div>

      <div className='mt-3 flex'>
          <h3 className='px-2 text-3xl text-medium'> <SiJavascript/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaHtml5/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaCss3Alt /> </h3>
          <h3 className='px-2 text-4xl text-medium'> <FaEmber/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaReact/> </h3>
      </div>

        
      <div className='mt-6 flex'>
           <h3 className='flex items-center text-1xl text-orange'> <BsGit/> </h3>
           <h3 className='px-1 text-1xl text-dark'> Git versioning</h3>
      </div>
      
      <div className='mt-3 flex'>
          <h3 className='px-2 text-4xl text-medium'> <FaGithub/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaGitlab/> </h3> 
      </div>

      </div>
)
  };

export default HardSkills;