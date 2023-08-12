import './bio.css';
import IMGBIO from '../../assets/Bio-img.jpeg';

const Bio = () => {
    return (
  <div className='bio mt-4 0 flex'>
     <div className="wrap-image">
        <img className='image-bio rounded-[3px]' src={IMGBIO} alt="bio picture"/>
     </div>
            <p className='text-bio text-justify text-medium text-0xl'>

                Passionate about graphic design and computer science, I made the decision 2 years ago to change careers
                and steer myself towards this field.
                After being supervised for 1 year at Qonto for my front-end developer apprenticeship,
                I am now open to other opportunities to grow and improve my skills.
            </p>        
  </div>
)
  };

export default Bio;