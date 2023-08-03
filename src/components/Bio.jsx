import './bio.css';
import IMGBIO from '../assets/Bio-img.jpeg'

const Bio = () => {
    return (
  <div className='bio mt-4 0 flex'>
     <div className="wrap-image">
        <img className='image-bio rounded-[5px]' src={IMGBIO} alt="bio picture"/>
    </div>
            <p className='text-bio text-justify text-light text-1xl'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five 
            </p>        
  </div>
)
  };

export default Bio;