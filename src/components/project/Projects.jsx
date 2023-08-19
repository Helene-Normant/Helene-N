import './project.css';

import Cards from '../cards/Cards';


const Projects = () => {
  return (

  <div className='project-container mt-[40px]'>
      <div className='cards-container p-1 pl-2 scroll w-[619px] h-[611px] border-[1px] border-solid border-dark rounded-[3px] bg-light'>
           <Cards/>
      </div>
  </div>
)
  };

export default Projects;