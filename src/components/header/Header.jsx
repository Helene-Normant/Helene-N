import { useState } from 'react';

import './header.css';
import ModalContact from '../modalContact/modalContact';
import CV from '../../assets/CV-helene_normant.pdf';

import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useMediaQuery } from '@react-hook/media-query';


const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const isMdScreen = useMediaQuery('(max-width: 790px)');



    return (
        <div className="header-container">  
         <div className="header-line mt-3 border-[0.044em] border-solid border-dark"><hr /></div>
        <div className='header-buttons-container flex justify-between' >
          {isMdScreen ? (
        // Afficher le menu burger ici pour "md"
            <div className="md-burger-menu flex justify-center">
              <div className="flex items-center justify-between">
       <nav>
        <section>
          <div
            className="HAMBURGER-ICON space-y-3 ml-5"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-[4em] bg-dark"></span>
            <span className="block h-0.5 w-[4em] bg-dark"></span>
            <span className="block h-0.5 w-[4em] bg-dark"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-3 py-3"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                      >
                        <AiOutlineClose className='text-3xl text-dark'/>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
              <li className="border-b-[0.1em] border-solid border-dark my-8 uppercase">
                  <h1>
                     <a href={CV} download className='download-link-header header-hover-download text-3xl cursor-pointer'>DOWNLOAD CV </a>
                   </h1>
                </li>
              <li className="border-b-[0.1em] border-solid border-dark my-8 uppercase">
                    <button className='contact-button-header header-hover-contact text-3xl text-dark cursor-pointer' onClick={() => {setOpenModal(true)}}>CONTACT</button>
                    {openModal && <ModalContact closeModal={setOpenModal} />}
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
         </div>
             ) : (
        // Afficher les boutons du header ici pour les autres tailles d'écran
                <div className='link-header-container flex items-center'>
                  <h1 className='download-arrow-header text-3xl text-dark lg:ml-[2.3rem] xl:ml-[4.563rem] 2xl:ml-[5rem] 3xl:ml-[8rem]'> <BsArrowRight /> </h1>
                    <h1>
                     <a href={CV} download className='download-link-header header-hover-download text-3xl cursor-pointer'>DOWNLOAD CV </a>
                    </h1>
                     <h1 className='contact-arrow-header text-center text-3xl text-dark lg:ml-[3rem] xl:ml-[12.5rem] 2xl:ml-[12.5rem] 3xl:ml-[25rem]'> <BsArrowDown /> </h1>
                 <div>
                    <button className='contact-button-header header-hover-contact text-3xl text-dark cursor-pointer' onClick={() => {setOpenModal(true)}}>CONTACT</button>
                    {openModal && <ModalContact closeModal={setOpenModal} />}
                 </div>
            </div>
                )}
             <div className='flex header-title-container'>  
                <div className='header-denomination-container bg-medium w-[12.5em] text-center xxs:ml-4 xs:ml-00 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 3xl:ml-0'>
                      <h1 className='denomination-title-header text-3xl text-light'>FRONT-END</h1> 
                      <h1 className='denomination-title-header text-3xl text-light'>DEVELOPER</h1>
                </div>
                <div className='header-full-name-container'>
                     <h1 className='name-title-header w-[8.125rem] text-center text-3xl text-dark border-solid border-dark xxs:invisible sx:border-b-[0] xs:border-r-[0] xs:visible  sm:border-b-[0.031em] sm:border-r-[0.031em] sm:visible  md:border-b-[0.031em] md:border-r-[0.031em] md:visible lg:border-b-[0.031em] lg:border-r-[0.031em] lg:visible xl:border-b-[0.031em] xl:border-r-[0.031em] xl:visible  2xl:border-b-[0.031em] 2xl:border-r-[0.031em] 2xl:visible 3xl:border-b-[0.031em] 3xl:border-r-[0.031em] 3xl:visible'>HELENE</h1>
                     <h1 className='surname-title-header w-[10rem] text-center text-3xl text-dark border-t-[0.031em] border-l-[0.031em] border-solid border-dark xxs:invisible xs:ml-[0] xs:visible  sm:ml-[8.063rem] sm:visible  md:ml-[8.063rem] md:visible lg:ml-[8.063rem] lg:visible xl:ml-[8.063rem] xl:visible 2xl:ml-[8.063rem] 2xl:visible 3xl:ml-[8.063rem] 3xl:visible '>NORMANT</h1>
                    </div>
              </div>  
            </div>
            <div className="header-line border-[0.044em] border-solid border-dark"><hr /></div>
        </div>
)
  };

export default Header;