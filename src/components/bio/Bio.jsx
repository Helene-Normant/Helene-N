import './bio.css';
import IMGBIO from '../../assets/Bio-img.jpg';

const Bio = () => {
    return (
  <div className='bio-container mt-4 flex'>
     <div className="image-bio-container w-[500px]">
        <img className='image-bio w-[15%] border-[1.5px] border-solid border-orange rounded-[3px]' src={IMGBIO} alt="bio picture"/>
     </div>
            <p className='text-bio absolute w-[470px] ml-[80px] text-justify text-medium text-0xl'>
                Passionate about graphic design and computer science, I made the decision 2 years ago to change careers
                and steer myself towards this field.
                After being supervised for 1 year at Qonto for my front-end developer apprenticeship,
                I am now open to other opportunities to grow and improve my skills.
            </p>        
  </div>
)
  };

export default Bio;