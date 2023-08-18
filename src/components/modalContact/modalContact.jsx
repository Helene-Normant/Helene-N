import './modalContact.css'; 
import { AiOutlineClose} from 'react-icons/ai';


const ModalContact = ({closeModal}) => {
    return (
        <div className='overlay'>
            <div className='modal-container border-[1px] border-solid border-dark'>
                   <div className='close-modal'>
                    <button className='text-medium text-3xl' onClick={() => closeModal(false)}> <AiOutlineClose /> </button>
                    </div>
                <div className='title-modal text-medium text-3xl text-center'>
                    <h1>Let's keep in touch</h1>
                </div>
                <div className='flex justify-center mt-7 content-modal'>
                <form className='space-y-6 flex flex-col'>
                    <input className='pl-4 text-medium h-[40px] text-1xl border-[1.5px] border-solid border-dark rounded-[5px] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="text" name='name' placeholder='Your name' required />
                    <input className='pl-4 text-medium h-[40px] text-1xl border-[1.5px] border-solid border-dark rounded-[5px] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' type="email" name="email" placeholder='Your email' required />
                    <textarea className='textarea pl-4 text-medium w-[500px] text-1xl border-[1.5px] border-solid border-dark rounded-[5px] placeholder:text-1xl placeholder:text-orange placeholder:text-center placeholder:p-4 ' name="message" rows="7" placeholder='Your message' required></textarea>
                    <div className='text-center'>
                            <button className='px-[22px] py-[10px] w-[200px] text-center inline-block bg-medium hover:bg-light border-[1.5px] border-solid border-medium hover:border-orange rounded-[3px] text-light hover:text-orange' type="submit">
                                Send your message
                            </button>
                    </div>
                    </form>
                </div>
           </div>
        </div>
    );
  };

export default ModalContact;