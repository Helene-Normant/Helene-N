import { useRef } from 'react';

import { sendEmail } from './emailFunctions'; 
import Inputs from './inputs/Inputs';
import Close from '../Close';
import ButtonLarge from './button/ButtonLarge';

import './modalContact.css'; 
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


const ModalContact = ({ closeModal }) => {
    const form = useRef();

    const handleSendEmail = async (e) => {
        e.preventDefault();
        await sendEmail(form.current);
    };

    return (
        <div className='overlay absolute top-0 left-0 h-full w-full'>
            <div className='modal-container fixed top-[50%] left-[50%] bg-light border-[0.063em] 
            border-solid border-dark rounded-[0.188em] xxs:w-[100%] xxs:h-[100%] xs:w-[100%] xs:h-[100%]
            sm:w-[100%] sm:h-[100%] md:w-[100%] md:h-[100%] lg:w-[56.25em] lg:h-[32.25em] xl:w-[56.25em]
            xl:h-[32.25em] 2xl:w-[56.25em] 2xl:h-[32.25em] 3xl:w-[56.25em] 3xl:h-[32.25em]'>
                
                <div className='close-modal-container flex justify-right mr-[0.375em] mt-[0.375em]'>
                <Close onClose={() => closeModal(false)} />
                </div>

                <div className='modal-title-container flex items-center justify-center title-modal text-medium 
                text-3xl text-center xxs:mt-[35%] xs:mt-[50%] sm:mt-[30%] md:mt-[20%] lg:mt-[0%] xl:mt-[0%]
                2xl:mt-[0%] 3xl:mt-[0%]'>
                    <h1 className='modal-title-arrow text-3xl text-dark'>
                        <BsArrowRight />
                    </h1>
                    <h1 className='modal-title text-2xl text-dark'>
                        &nbsp;&nbsp;&nbsp;Let's keep in touch&nbsp;&nbsp;&nbsp;
                    </h1>
                    <h1 className='modal-title-arrow text-3xl text-dark'>
                        <BsArrowLeft />
                    </h1>
                </div>

                <div className='modal-form-container flex justify-center mt-7 content-modal'>
                    <form className='modal-form' ref={form} onSubmit={handleSendEmail}>
                        < Inputs />
                     <div className='modal-button-container text-center'>
                       <div className='modal-button-container text-center'>
                         <ButtonLarge className='modal-submit-button mt-6 px-[1.375em] py-[0.625em] w-[12.5em] text-center 
                        inline-block bg-medium hover:bg-light border-[0.094em] border-solid border-medium hover:border-orange
                        rounded-[0.188em] text-light hover:text-orange' children="Send your message" type="submit" />                  
                       </div>      
                     </div>
                    </form>
                </div>
            </div>
             <div className='modal-toast-container'>
                <ToastContainer />
             </div>
        </div>
    );
  };

export default ModalContact;