import './bio.css';
import IMGBIO from '../../assets/image-bio.png';

const Bio = () => {
    return (
  <div className='bio-container flex mt-4 xxs:mt-1 xxs:w-[22em] xxs:h-[13em] xs:mt-4 xs:w-[22em] xs:h-[13em] sm:mt-4 sm:w-[40em] sm:h-[10em] md:mt-4 md:w-[40em] md:h-[10em] lg:mt-4 lg:w-[24em] lg:h-[9em] xl:mt-4 xl:w-[100%] xl:h-[7.3em] 2xl:mt-4 2xl:w-[100%] 3xl:mt-4 3xl:w-[100%] 3xl:h-[11em] 3xl:mt-10'>
     <div className="image-bio-container xxs:w-[17em] xxs:h-[17em] xs:h-[13em] xs:w-[31em] sm:h-[10em] sm:w-[31em] md:h-[10em] md:w-[31em] lg:h-[8.6em] lg:w-[31em] xl:h-[7.2em] xl:w-[31em] 2xl:h-[8em] 2xl:w-[31em] 3xl:h-[11em] 3xl:w-[38em]">
        <img className='image-bio border-[0.094em] border-solid border-orange rounded-[0.188] xxs:w-[25%] xs:w-[20%] sm:w-[17%] md:w-[17%] lg:w-[17%] xl:w-[15%] 2xl:w-[15%] 3xl:w-[17%]' src={IMGBIO} alt="bio picture"/>
     </div>
            <p className='text-bio absolute ml-[5em] text-justify text-medium xs:ml-[4.8em] xxs:w-[15em] xs:w-[20em] sm:ml-[6.5em] sm:w-[27em] md:ml-[6.5em] md:w-[27em] lg:ml-[5em] lg:w-[25em] lg:text-[0.9em] xl:ml-[5em] xl:w-[29.375em] xl:text-[0.87em] 2xl:ml-[5em] 2xl:w-[29.375em] 2xl:text-[1em] 3xl:ml-[5em] 3xl:ml-[7em] 3xl:mt-[1em] 3xl:text-[1.1em]'>
                Passionate about graphic design and computer science, I made the decision 2 years ago to change careers
                and steer myself towards this field.
                After being supervised for 1 year at Qonto for my front-end developer apprenticeship,
                I am now open to other opportunities to grow and improve my skills.
            </p>        
  </div>
)
  };

export default Bio;