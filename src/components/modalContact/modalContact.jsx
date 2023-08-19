import { useRef } from 'react';

import './modalContact.css'; 

import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


const ModalContact = ({ closeModal }) => {
    const form = useRef();

//   
    const sendEmail = async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm('service_jtefeih', 'template_cp7n91k', form.current, 'ut-QCXmhwtfNQ95Iu');
        // alert('Message envoyé');
         toast.success("Message envoyé", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: "🚀",
            });
        e.target.reset();
    } catch (error) {
        console.log(error.text);
    }
};

    return (
        <div className='overlay absolute top-0 left-0 h-full w-full'>
            <div className='modal-container fixed w-[56.25em] h-[32.25em] top-[50%] left-[50%] bg-light border-[0.063em] border-solid border-dark rounded-[0.188em]'>
                <div className='close-modal-container flex justify-right mr-[0.375em] mt-[0.375em]'>
                    <button className='close-modal-button text-medium text-3xl' onClick={() => closeModal(false)}> <AiOutlineClose /> </button>
                </div>
                <div className='modal-title-container flex items-center justify-center title-modal text-medium text-3xl text-center'>
                    <h1 className='modal-title-arrow text-3xl text-dark'> <BsArrowRight/> </h1>
                    <h1 className='modal-title text-3xl text-dark'>&nbsp;&nbsp;&nbsp;Let's keep in touch&nbsp;&nbsp;&nbsp;</h1>
                    <h1 className='modal-title-arrow text-3xl text-dark'> <BsArrowLeft/> </h1>
                </div>
                <div className='modal-form-container flex justify-center mt-7 content-modal'>
                  <form className='modal-form space-y-6 flex flex-col' ref={form} onSubmit={sendEmail}>
                      <input className='modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="text" name='name' placeholder='Your name' required />
                      <input className='modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="email" name="email" placeholder='Your email' required />
                      <textarea className='modal-textarea pl-4 text-medium bg-light w-[31.25em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:p-2' name="message" rows="7" placeholder='Your message' required></textarea>
                     <div className='modal-button-container text-center'>
                        <button className='modal-submit-button px-[1.375em] py-[0.625em] w-[12.5em] text-center inline-block bg-medium hover:bg-light border-[0.094em] border-solid border-medium hover:border-orange rounded-[0.188em] text-light hover:text-orange' type="submit">
                         Send your message
                        </button>
                     </div>
                    </form>
                </div>
            </div>
              <ToastContainer />
        </div>
    );
  };

export default ModalContact;