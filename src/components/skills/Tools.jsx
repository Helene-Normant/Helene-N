import { BiLogoFigma, BiLogoSlack, BiLogoTailwindCss } from 'react-icons/bi';
import { RxNotionLogo } from 'react-icons/rx';

const Tools = () => {
    return (
         <div className='tools-container xxs:mt-[0.7em] xs:mt-[1em]sm:mt-[1em] 
        md:mt-[1em] lg:mt-[2em] xl:mt-[2em] 2xl:mt-[2em] 3xl:mt-[2em]'>
          <div className="tools-title-container flex item-center">
            <h1 className='tools-title text-[1rem] text-medium max-w-[9.375em] 
            border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>
              TOOLS
            </h1>
          </div>
          <div className='icons-tools-container mt-1 flex item-center justify-center'>
            <h3 className='icon-notion px-2 text-4xl text-medium'> <RxNotionLogo/> </h3> 
            <h3 className='icon-figma px-2 text-4xl text-medium'> <BiLogoFigma/> </h3> 
            <h3 className='icon-slack px-2 text-4xl text-medium'> < BiLogoSlack /> </h3>
            <h3 className='icon-tailwind px-2 text-4xl text-medium'> <BiLogoTailwindCss /> </h3> 
         </div>
      </div>
)
  };

export default Tools;