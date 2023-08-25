import { BiLogoFigma, BiLogoSlack, BiLogoTailwindCss } from 'react-icons/bi';
import { RxNotionLogo } from 'react-icons/rx';
import { FaEmber, FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const Skills = () => {
    return (
    <div className='skills-container'>
      <div className='tools-container xxs:mt-[0.7em] xs:mt-[1em] sm:mt-[1em] md:mt-[1em] lg:mt-[2em] xl:mt-[2em] 2xl:mt-[2em] 3xl:mt-[2em]'>
          <div className="tools-title-container flex item-center">
            <h1 className='tools-title text-[1rem] text-medium max-w-[9.375em] border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>TOOLS</h1>
          </div>
          <div className='icons-tools-container mt-1 flex item-center justify-center'>
            <h3 className='icon-notion px-2 text-4xl text-medium'> <RxNotionLogo/> </h3> 
            <h3 className='icon-figma px-2 text-4xl text-medium'> <BiLogoFigma/> </h3> 
            <h3 className='icon-slack px-2 text-4xl text-medium'> < BiLogoSlack /> </h3>
            <h3 className='icon-tailwind px-2 text-4xl text-medium'> <BiLogoTailwindCss /> </h3> 
         </div>
      </div>
        
      <div className='stacks-container xxs:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-9 3xl:mt-[3em]'>
        <div className="stacks-title-container flex item-center">
          <h1 className='stacks-title text-[1rem] text-medium max-w-[9.375em] border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>STACKS</h1>
        </div>
         <div className='icons-stacks-container mt-1 flex item-center justify-center'>
          <h3 className='icon-javascript px-2 text-3xl text-medium'> <SiJavascript/> </h3> 
          <h3 className='icon-html px-2 text-4xl text-medium'> <FaHtml5/> </h3> 
          <h3 className='icon-css px-2 text-4xl text-medium'> <FaCss3Alt /> </h3>
          <h3 className='icon-ember px-2 text-4xl text-medium'> <FaEmber/> </h3> 
          <h3 className='icon-react px-2 text-4xl text-medium'> <FaReact/> </h3>
          <h3 className='icon-typescript px-2 text-3xl text-medium'> <SiTypescript/> </h3>
          </div>
        </div>
        
        <div className='versioning-container xxs:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-9 3xl:mt-[3em]'>
        <div className="versionning-container-title flex item-center px-5">
          <h1 className='versioning-title text-[1rem] text-medium max-w-[9.375em] border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>VERSIONING</h1>
        </div>
        <div className='icons-versioning-container mt-1 flex item-center justify-center'>
          <h3 className='icon-github px-2 text-4xl text-medium'> <FaGithub/> </h3> 
          <h3 className='icon-gitlab px-2 text-4xl text-medium'> <FaGitlab/> </h3> 
      </div>
        </div>
    </div>
        
)
  };

export default Skills;
