import './cards.css'; 

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import IMG1 from '../../assets/triplink.png'
import IMG2 from '../../assets/Castorlama.png'
import IMG3 from '../../assets/portfolio-v1.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Triplink | Front-end team | Graduate project',
    subtitle :'Traveler social network',
    description:'WIP: During our final year, I am participating in a group project with 4 members. Our team consists of two people working on the front and two on the back. I have a multifaceted role, serving as both a designer and a front-end developer. Additionally, I am demonstrating strong teamwork abilities and playing a crucial role in organizing the project.',
    github: 'https://github.com/Helene-Normant/Ride_my_bike',
    demo:''
  },

  {
    id: 2,
    image: IMG2,
    title: 'Castorlama | Front-end team',
    subtitle: 'Furnitures marketplace',
    description:'This two-week project during my studies provided me with a better understanding of the interaction between the back-end and the front-end. It also allowed us to establish a structured organization based on the agile methodology. I was able to handle both the design and front-end development aspects effectively.',
    github: 'https://github.com/Helene-Normant/pimp_emoji',
    demo:''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio_v1 | Personal project',
    subtitle:'My first react portfolio',
    description: 'During my search for an apprenticeship, I chose to deepen my knowledge in front-end development and focus on React. This led me to combine learning with practicality by creating a portfolio. This not only allowed me to grasp the fundamentals but also showcased my skills during my job search efforts.',
    github: 'https://github.com/Helene-Normant/helene-normant.github.io',
    demo:''
  }

]

const Cards = () => {
    return (
        <section>
      <div className='portfolio-container'>
        {
          data.map(({id, image, title, subtitle, description, github }) => {
              return (
            <div key={id} className='cards-container flex m-6 border-[1.5px] border-solid border-dark rounded-[3px]'>
              <article>
                    <div className='cards-content-container'>
                             <div className='cards-img-container conteneura'>
                                <img className='img-cards rounded-[3px]' src={image} alt="Portfolio image" />
                              <div className='cards-title-container p-4 w-[544px] h-[310px] flex flex-col'>
                                <h2 className='title-cards flex justify-center bg-medium text-2xl text-light rounded-[3px]'>{title}</h2>
                              <div className='cards-subtitle-container mt-5 typewriter'>
                                <h3 className='subtitle-cards flex justify-center text-2xl text-medium max-w-[305px] border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[.05em] m-auto'>{subtitle}</h3>
                              </div>
                                <p className='description-cards mt-3 text-justify text-medium text-[15px]'>{description}</p>
                              <div className='cards-buttons-container mt-5 flex justify-around'>
                                    <button className='github-button-cards px-[22px] py-[10px] text-center inline-block bg-light bg-opacity-50 hover:bg-orange border-[1.5px] border-solid border-orange rounded-[3px] text-orange hover:text-medium'>
                                      <a className='text-[1rem]' href={github} target="_blank">GitHub </a> 
                                     </button>
                                     <a className='demo-link-disable-cards my-anchor-element cursor-not-allowed px-[22px] py-[10px] text-center inline-block bg-light bg-opacity-50 border-[1.5px] border-solid border-orange rounded-[3px] text-orange'>  
                                     Démo
                                     </a>
                                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                                     Available soon!
                                   </Tooltip> 
                                </div>     
                              </div>
                         </div>     
                    </div>
              </article>
            </div>

            )

          })
        }

      </div>
    </section>
       
)
};

export default Cards;




