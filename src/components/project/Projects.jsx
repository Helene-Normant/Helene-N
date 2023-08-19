import './project.css';

import Cards from '../cards/Cards';


const Projects = () => {
  return (

  <div className='project-container mt-[2.5em]'>
      <div className='cards-container p-1 pl-2 scroll w-[38.688em] h-[38.188em] border-[0.063em] border-solid border-dark rounded-[0.188em] bg-light'>
           <Cards/>
      </div>
  </div>
)
  };

export default Projects;