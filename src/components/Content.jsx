import About from './about/About';
import Pojects from './project/Projects';
import '../components/content.css'

const Content = () => {
    return (
        <div className='body-container xxs:flex xxs:flex-col xxs:place-items-center xs:flex xs:flex-col xs:place-items-center sm:flex sm:flex-col sm:place-items-center md:flex-col md:flex md:flex-col md:place-items-center lg:flex lg:justify-evenly lg:place-items-start lg:flex-row xl:flex xl:flex-row xl:place-items-start xl:justify-evenly 2xl:flex 2xl:flex-row 3xl:flex 3xl:flex-row 2xl:flex 2xl:place-items-star 2xl:justify-evenly 3xl:flex 3xl:place-items-star 3xl:justify-evenly'>
          <About/>
          <Pojects/>   
        </div>
)
  };

export default Content;