import { useState } from 'react';
import './header.css';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import ModalContact from '../modalContact/modalContact';
import CV from '../../assets/CV-helene_normant.pdf'

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

    return (
        <div className="header-container">  
         <div className="mt-3 border-[0.7px] border-solid border-dark"><hr /></div>
          <div className='flex justify-between' >
                <div className='flex items-center'>
                        <h1 className='ml-[73px] text-3xl text-dark'> <BsArrowRight/> </h1>
            <h1>
             <a href={CV} download className='header-hover-download text-3xl cursor-pointer'>DOWNLOAD CV </a>
            </h1>
            <h1 className='ml-[200px] text-center text-3xl text-dark'> <BsArrowDown /> </h1>
            <div>
              <button className='header-hover-contact text-3xl text-dark cursor-pointer' onClick={() => {setOpenModal(true)}}>CONTACT</button>
              {openModal && <ModalContact closeModal={setOpenModal} />}
            </div>
             </div>
             <div className='flex'>  
                <div className='bg-medium w-[200px] text-center'>
                       <h1 className='text-3xl text-light'>FRONT-END</h1> 
                       <h1 className='text-3xl text-light'>DEVELOPER</h1>
                </div>
                <div className='Header-full-name'>
                    <h1 className='w-[130px] text-center text-3xl text-dark border-[0.5px] border-b border-r border-solid border-dark'>HELENE</h1>
                     <h1 className='w-[160px] ml-[129px] text-center text-3xl text-dark border-[0.5px] border-t border-l border-solid border-dark'>NORMANT</h1>
                    </div>
              </div>  
            </div>
            <div className="border-[0.7px] border-solid border-dark"><hr /></div>
        </div>
)
  };

export default Header;