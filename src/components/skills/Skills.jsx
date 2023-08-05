import './skills.css';
import { BiLogoFigma, BiLogoSlack, BiLogoTailwindCss } from 'react-icons/bi';
import { RxNotionLogo } from 'react-icons/rx';
import { FaEmber, FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const Skills = () => {
    return (
      <div>
        <div className='mt-[20px]'>
        <div className="flex item-center typewriter">
          <h1 className='text-[1rem] text-medium'>TOOLS</h1>
        </div>
        <div className='mt-1 flex item-center justify-center'>
          <h3 className='px-2 text-4xl text-medium'> <RxNotionLogo/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <BiLogoFigma/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> < BiLogoSlack /> </h3>
          <h3 className='px-2 text-4xl text-medium'> <BiLogoTailwindCss /> </h3> 
          </div>
      </div>
        
      <div className='mt-10'>
        <div className="flex item-center typewriter">
          <h1 className='text-[1rem] text-medium'>STACKS</h1>
        </div>
         <div className='mt-1 flex item-center justify-center'>
          <h3 className='px-2 text-3xl text-medium'> <SiJavascript/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaHtml5/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaCss3Alt /> </h3>
          <h3 className='px-2 text-4xl text-medium'> <FaEmber/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaReact/> </h3>
          <h3 className='px-2 text-3xl text-medium'> <SiTypescript/> </h3>
          </div>
        </div>
        
        <div className='mt-10'>
        <div className="flex item-center typewriter px-5">
          <h1 className='text-[1rem] text-medium'>VERSIONING</h1>
        </div>
        <div className='mt-1 flex item-center justify-center'>
          <h3 className='px-2 text-4xl text-medium'> <FaGithub/> </h3> 
          <h3 className='px-2 text-4xl text-medium'> <FaGitlab/> </h3> 
      </div>
        </div>
      </div>
        
)
  };

export default Skills;
