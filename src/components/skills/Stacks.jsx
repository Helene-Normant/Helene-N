import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FaEmber, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';


const Stacks = () => {
    return (
        <div className='stacks-container xxs:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-9 3xl:mt-[3em]'>
        <div className="stacks-title-container flex item-center">
            <h1 className='stacks-title text-[1rem] text-medium max-w-[9.375em] border-solid border-r-[0.3em] 
          border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>
              STACKS
            </h1>
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
)
  };

export default Stacks;