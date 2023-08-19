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
            <div key={id} className='cards-container flex m-6 border-[0.094em] border-solid border-dark rounded-[0.188em]'>
              <article>
                    <div className='cards-content-container'>
                             <div className='cards-img-container conteneura'>
                                <img className='img-cards rounded-[0.188em]' src={image} alt="Portfolio image" />
                              <div className='cards-title-container p-4 w-[34em] h-[19.375em] flex flex-col'>
                                <h2 className='title-cards flex justify-center bg-medium text-2xl text-light rounded-[0.188em]'>{title}</h2>
                              <div className='cards-subtitle-container mt-5 typewriter'>
                                <h3 className='subtitle-cards flex justify-center text-2xl text-medium max-w-[19.063rem] border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[.06em] m-auto'>{subtitle}</h3>
                              </div>
                                <p className='description-cards mt-3 text-justify text-medium text-[0.938em]'>{description}</p>
                              <div className='cards-buttons-container mt-5 flex justify-around'>
                                    <button className='github-button-cards px-[1.375em] py-[0.625em] text-center inline-block bg-light bg-opacity-50 hover:bg-orange border-[0.094em] border-solid border-orange rounded-[0.188em] text-orange hover:text-medium'>
                                      <a className='text-[1rem]' href={github} target="_blank">GitHub </a> 
                                     </button>
                                     <a className='demo-link-disable-cards my-anchor-element cursor-not-allowed px-[1.375em] py-[0.625em] text-center inline-block bg-light bg-opacity-50 border-[0.094em] border-solid border-orange rounded-[0.188em] text-orange'>  
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




