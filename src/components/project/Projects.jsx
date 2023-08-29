import './project.css';
import Cards from '../cards/Cards';


const Projects = () => {
  return (

  <div className='project-container'>
      <div className='cards-container scroll p-1 pl-2 
      border-[0.063em] border-solid border-dark rounded-[0.188em]
      bg-light xxs:mt-[1.8em] xxs:h-[25em] xxs:w-[22em] xs:mt-[1.8em]
      xs:h-[38em] xs:w-[28em] sm:mt-[1.5em] sm:w-[38em] sm:h-[35em] md:mt-[1.5em]
       md:w-[38em] md:h-[35em] lg:mt-[3.125em] lg:w-[30em] lg:h-[36em] xl:mt-[3.125em]
       xl:w-[35em] xl:h-[35em] 2xl:mt-[2.5em] 2xl:w-[38.688em] 2xl:h-[38.188em] 3xl:w-[50em]
       3xl:h-[50em] 3xl:mt-[2.6em]'>
           <Cards/>
      </div>
  </div>
)
  };

export default Projects;