import { useRef } from 'react';

import './modalContact.css'; 
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import { useMediaQuery } from '@react-hook/media-query';

import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight, BsArrowLeft, BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BiSolidError } from 'react-icons/bi';


const ModalContact = ({ closeModal }) => {
    const form = useRef();
    const isXxsScreen = useMediaQuery('(max-width: 470px)');

    const sendEmail = async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm('service_jtefeih', 'template_cp7n91k', form.current, 'ut-QCXmhwtfNQ95Iu');
         toast.success("Your message has been sent", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: <BsFillRocketTakeoffFill/>,
            });
        e.target.reset();
    } catch (error) {
        console.log(error.text);
        toast.error("Oops an error occurred, try again", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: <BiSolidError/>,
            });
    }
};

    return (
        <div className='overlay absolute top-0 left-0 h-full w-full'>
            <div className='modal-container fixed top-[50%] left-[50%] bg-light border-[0.063em] border-solid border-dark rounded-[0.188em] xxs:w-[100%] xxs:h-[100%] xs:w-[100%] xs:h-[100%] sm:w-[100%] sm:h-[100%] md:w-[100%] md:h-[100%] lg:w-[56.25em] lg:h-[32.25em] xl:w-[56.25em] xl:h-[32.25em] 2xl:w-[56.25em] 2xl:h-[32.25em] 3xl:w-[56.25em] 3xl:h-[32.25em]'>
                <div className='close-modal-container flex justify-right mr-[0.375em] mt-[0.375em]'>
                    <button className='close-modal-button text-medium text-3xl' onClick={() => closeModal(false)}> <AiOutlineClose /> </button>
                </div>
                <div className='modal-title-container flex items-center justify-center title-modal text-medium text-3xl text-center xxs:mt-[35%] xs:mt-[50%] sm:mt-[30%] md:mt-[20%] lg:mt-[0%] xl:mt-[0%] 2xl:mt-[0%] 3xl:mt-[0%]'>
                    <h1 className='modal-title-arrow text-3xl text-dark'> <BsArrowRight/> </h1>
                    <h1 className='modal-title text-2xl text-dark'>&nbsp;&nbsp;&nbsp;Let's keep in touch&nbsp;&nbsp;&nbsp;</h1>
                    <h1 className='modal-title-arrow text-3xl text-dark'> <BsArrowLeft/> </h1>
                </div>
                <div className='modal-form-container flex justify-center mt-7 content-modal'>
                    <form className='modal-form' ref={form} onSubmit={sendEmail}>
                        {isXxsScreen ? (
                    <div className='modal-form space-y-6 flex flex-col'>    
                      <input className= 'modal-input xxs:w-[20em] pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="text" name='name' placeholder='Your name' required />
                      <input className='modal-input xxs:w-[100%] pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="email" name="email" placeholder='Your email' required />
                      <textarea className='modal-textarea xxs:w-[100%] pl-4 text-medium bg-light w-[31.25em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:p-2' name="message" rows="7" placeholder='Your message' maxLength="800" required></textarea>
                    </div>
                        ) : (
                    <div className='modal-form space-y-6 flex flex-col'>
                      <input className= 'modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="text" name='name' placeholder='Your name' required />
                      <input className='modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="email" name="email" placeholder='Your email' required />
                      <textarea className='modal-textarea pl-4 text-medium bg-light w-[31.25em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:p-2' name="message" rows="7" placeholder='Your message' maxLength="800" required></textarea>
                    </div>         
                        )}
                     <div className='modal-button-container text-center'>
                        <button className='modal-submit-button mt-6 px-[1.375em] py-[0.625em] w-[12.5em] text-center inline-block bg-medium hover:bg-light border-[0.094em] border-solid border-medium hover:border-orange rounded-[0.188em] text-light hover:text-orange' type="submit">
                         Send your message
                        </button>
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