import './cards.css'; 
import {data} from './data';

import { useMediaQuery } from '@react-hook/media-query';

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const Cards = () => {
      const isXxsScreen = useMediaQuery('(max-width: 470px)');

    return (
        <section>
      <div className='portfolio-container'>
        {
          data.map(({id, image, title, subtitle, description, github }) => {
              return (
            <div key={id} className='cards-container flex border-[0.094em] border-solid border-dark rounded-[0.188em] xxs:mt-4 xxs:mb-4 xxs:m-1 xs:m-6 sm:m-6 md:m-6 lg:m-6 xl:mt-6 2xl:m-6 3xl:m-6'>
              <article>
                    <div className='cards-content-container'>
                             <div className='cards-img-container'>
                                <img className='img-cards rounded-[0.188em]' src={image} alt="Portfolio image" />
                              <div className='cards-title-container flex flex-col p-4 xxs:w-[20.5em] xxs:h-[11.663] xs:w-[23.375em] xs:h-[13.294em] sm:w-[33.375em] sm:h-[18.938em] p-4 md:w-[33.375em] md:h-[18.938em] lg:w-[25.375em] lg:h-[14.438em] xl:w-[30.375em] xl:h-[17.25em] 2xl:w-[34em] 2xl:h-[19.375em] 3xl:w-[45.375em] 3xl:h-[25.813em]'>
                                <h2 className='title-cards flex justify-center bg-medium xxs:text-[0.8em] xs:text-[1.3em] sm:text-[1.3em] md:text-[1.3em] lg:text-[1.3em] xl:text-[1.3em] 2xl:text-2xl text-light rounded-[0.188em]'>{title}</h2>
                              <div className='cards-subtitle-container xxs:mt-4 xs:mt-3 md:mt-3 lg:mt-3 xl:mt-6 2xl:mt-6 typewriter'>
                                <h3 className='subtitle-cards flex justify-center text-medium border-solid border-r-[0.3em] border-[#FD9C7D] tracking-[.06em] m-auto xxs:max-w-[12.8rem] xs:max-w-[12.8rem] sm:max-w-[13rem] md:max-w-[13rem] lg:max-w-[13rem] xl:max-w-[17rem] xl:text-[1.3em] 2xl:max-w-[19.063rem] 2xl:text-2xl'>{subtitle}</h3>
                          </div>
                          {isXxsScreen ? (
                          <p className='description-cards xxs:mt-9'/>
                          ) :
                            (
                              <p className='description-cards text-medium text-justify xs:text-[0.60em] xs:mt-1 sm:mt-3 sm:text-[0.938em] md:mt-3 md:text-[0.938em] lg:mt-1 lg:text-[0.70em] xl:text-[0.85em] xl:mt-1 2xl:text-[0.938em] 2xl:mt-3 3xl:text-[1.3em] 3xl:mt-7'>{description}</p>

                            )}
                              <div className='cards-buttons-container flex justify-around xs:mt-2 sm:mt-4 md:mt-4 lg:mt-3 xl:mt-3 2xl:mt-5 3xl:mt-9'>
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




