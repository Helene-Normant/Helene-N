import { useMediaQuery } from '@react-hook/media-query';

const Input = () => {
const isXxsScreen = useMediaQuery('(max-width: 470px)');

    return (
      <>
        {
        isXxsScreen?(
         <div className='modal-form space-y-6 flex flex-col'>    
            <input className= 'modal-input xxs:w-[20em] pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' 
            type="text" name='name' placeholder='Your name' required />
              <input className='modal-input xxs:w-[100%] pl-4 text-medium bg-light h-[2.5em] text-1xl 
                border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl
                placeholder:text-orange placeholder:pl-2' type="email" name="email" placeholder='Your email' required />
              
              <textarea className='modal-textarea xxs:w-[100%] pl-4 text-medium bg-light w-[31.25em] text-1xl 
                border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange
                placeholder:p-2' name="message" rows="7" placeholder='Your message' maxLength="800" required/>
            </div>
            
          ) : (
              
        <div className='modal-form space-y-6 flex flex-col'>
          <input className= 'modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2' 
            type="text" name='name' placeholder='Your name' required />
          <input className='modal-input pl-4 text-medium bg-light h-[2.5em] text-1xl border-[0.094em] border-solid 
            border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:pl-2'
            type="email" name="email" placeholder='Your email' required />
          
          <textarea className='modal-textarea pl-4 text-medium bg-light w-[31.25em] text-1xl border-[0.094em] 
            border-solid border-dark rounded-[0.313em] placeholder:text-1xl placeholder:text-orange placeholder:p-2'
            name="message" rows="7" placeholder='Your message' maxLength="800" required/>
        </div>       
    )
}
    </>  
)
  };

export default Input;