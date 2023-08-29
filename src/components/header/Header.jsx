import './header.css';
import Menu from './menu/Menu';


const Header = () => {

    return (
    <div className="header-container">  
      <div className="header-line mt-3 border-[0.044em] border-solid border-dark"><hr /></div>
        <div className='header-buttons-container flex justify-between' >
          < Menu />
          <div className='flex header-title-container'>  
            <div className='header-denomination-container bg-medium w-[12.5em] text-center xxs:ml-4 
              xs:ml-00 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 3xl:ml-0'>
              <h1 className='denomination-title-header text-3xl text-light'>
                FRONT-END
              </h1> 
              <h1 className='denomination-title-header text-3xl text-light'>
                DEVELOPER
              </h1>
                </div>
                <div className='header-full-name-container'>
                   <h1 className='name-title-header w-[8.125rem] text-center text-3xl text-dark border-solid 
                     border-dark xxs:invisible sx:border-b-[0] xs:border-r-[0] xs:visible  sm:border-b-[0.031em]
                     sm:border-r-[0.031em] sm:visible  md:border-b-[0.031em] md:border-r-[0.031em] md:visible
                     lg:border-b-[0.031em] lg:border-r-[0.031em] lg:visible xl:border-b-[0.031em] xl:border-r-[0.031em]
                     xl:visible  2xl:border-b-[0.031em] 2xl:border-r-[0.031em] 2xl:visible 3xl:border-b-[0.031em] 3xl:border-r-[0.031em]
                     3xl:visible'>
                     HELENE
                   </h1>
                  <h1 className='surname-title-header w-[10rem] text-center text-3xl text-dark border-t-[0.031em] border-l-[0.031em] 
                    border-solid border-dark xxs:invisible xs:ml-[0] xs:visible  sm:ml-[8.063rem] sm:visible  md:ml-[8.063rem] md:visible
                    lg:ml-[8.063rem] lg:visible xl:ml-[8.063rem] xl:visible 2xl:ml-[8.063rem] 2xl:visible 3xl:ml-[8.063rem] 3xl:visible '>
                    NORMANT
                  </h1>
               </div>
              </div>  
            </div>
            <div className="header-line border-[0.044em] border-solid border-dark"><hr /></div>
        </div>
)
  };

export default Header;