import './cards.css'; 
import {data} from './data';

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


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




