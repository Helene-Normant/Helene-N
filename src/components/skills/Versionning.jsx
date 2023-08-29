import { FaEmber, FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaReact } from 'react-icons/fa';

const Versionning = () => {
    return (
        <div className='versioning-container xxs:mt-3 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-9 3xl:mt-[3em]'>
        <div className="versionning-container-title flex item-center px-5">
            <h1 className='versioning-title text-[1rem] text-medium max-w-[9.375em] border-solid border-r-[0.3em]
           border-[#FD9C7D] tracking-[0.2em] m-auto 3xl:text-[1.3rem]'>
            VERSIONING</h1>
        </div>
        <div className='icons-versioning-container mt-1 flex item-center justify-center'>
          <h3 className='icon-github px-2 text-4xl text-medium'> <FaGithub/> </h3> 
          <h3 className='icon-gitlab px-2 text-4xl text-medium'> <FaGitlab/> </h3> 
      </div>
        </div>
       )
  };

export default Versionning;