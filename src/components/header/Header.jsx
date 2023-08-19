import { useState } from 'react';

import './header.css';
import ModalContact from '../modalContact/modalContact';
import CV from '../../assets/CV-helene_normant.pdf';

import { BsArrowDown, BsArrowRight } from 'react-icons/bs';


const Header = () => {
  const [openModal, setOpenModal] = useState(false);

    return (
        <div className="header-container">  
         <div className="header-line mt-3 border-[0.7px] border-solid border-dark"><hr /></div>
            <div className='header-buttons-container flex justify-between' >
                <div className='link-header-container flex items-center'>
                    <h1 className='download-arrow-header ml-[73px] text-3xl text-dark'> <BsArrowRight/> </h1>
                    <h1>
                     <a href={CV} download className='download-link-header header-hover-download text-3xl cursor-pointer'>DOWNLOAD CV </a>
                    </h1>
                     <h1 className='contact-arrow-header ml-[200px] text-center text-3xl text-dark'> <BsArrowDown /> </h1>
                 <div>
                    <button className='contact-button-header header-hover-contact text-3xl text-dark cursor-pointer' onClick={() => {setOpenModal(true)}}>CONTACT</button>
                    {openModal && <ModalContact closeModal={setOpenModal} />}
                 </div>
            </div>
             <div className='flex header-title-container'>  
                <div className='header-denomination-container bg-medium w-[200px] text-center'>
                      <h1 className='denomination-title-header text-3xl text-light'>FRONT-END</h1> 
                      <h1 className='denomination-title-header text-3xl text-light'>DEVELOPER</h1>
                </div>
                <div className='header-full-name-container'>
                     <h1 className='name-title-header w-[130px] text-center text-3xl text-dark border-[0.5px] border-b border-r border-solid border-dark'>HELENE</h1>
                     <h1 className='surname-title-header w-[160px] ml-[129px] text-center text-3xl text-dark border-[0.5px] border-t border-l border-solid border-dark'>NORMANT</h1>
                    </div>
              </div>  
            </div>
            <div className="header-line border-[0.7px] border-solid border-dark"><hr /></div>
        </div>
)
  };

export default Header;