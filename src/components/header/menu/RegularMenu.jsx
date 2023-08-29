import { useState } from 'react';

import ModalContact from '../../modalContact/modalContact';
import CV from '../../../assets/CV-helene_normant.pdf';
import '../header.css';

import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

const RegularMenu = () => {
  const [openModal, setOpenModal] = useState(false);
    
    return (
   <div className='link-header-container flex items-center'>
        <h1 className='download-arrow-header text-3xl text-dark lg:ml-[2.3rem] xl:ml-[4.563rem] 2xl:ml-[5rem] 3xl:ml-[8rem]'>
          <BsArrowRight />
        </h1>
        <h1>
          <a href={CV} download className='download-link-header header-hover-download text-3xl cursor-pointer'>
            DOWNLOAD CV
          </a>
          </h1>
                     
        <h1 className='contact-arrow-header text-center text-3xl text-dark lg:ml-[3rem] xl:ml-[12.5rem] 2xl:ml-[12.5rem] 3xl:ml-[25rem]'>
          <BsArrowDown />
        </h1>
        <div>
          <button className='contact-button-header header-hover-contact text-3xl text-dark cursor-pointer' onClick={() => { setOpenModal(true) }}>
            CONTACT
          </button>
            {openModal && <ModalContact closeModal={setOpenModal} />}
        </div>
     </div>
)
  };

export default RegularMenu;