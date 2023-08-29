import { useState } from 'react';

import '../header.css';
import Close from '../../Close';
import ModalContact from '../../modalContact/modalContact';
import CV from '../../../assets/CV-helene_normant.pdf';


const BurgerMenu = () => {
  const [openModal, setOpenModal] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    return (
    <div className="md-burger-menu flex justify-center">
      <div className="burger-container flex items-center justify-between">
       <nav>
        <section>
          <div
            className="burger-menu-display space-y-3 ml-5"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-[4em] bg-dark"></span>
            <span className="block h-0.5 w-[4em] bg-dark"></span>
            <span className="block h-0.5 w-[4em] bg-dark"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className="burger-menu-close absolute top-0 right-0 px-3 py-3">
               <Close onClose={() => setIsNavOpen(false)} />
              </div>
            <ul className=" burger-menu-list flex flex-col items-center justify-between">
              <li className="burger-menu-download border-b-[0.1em] border-solid border-dark my-8">
                  <h1>
                      <a href={CV} download className='download-link-header header-hover-download text-3xl'>
                        DOWNLOAD CV
                      </a>
                   </h1>
                </li>
              <li className="burger-menu-contact border-b-[0.1em] border-solid border-dark my-8">
                    <button className='contact-button-header header-hover-contact text-3xl text-dark' onClick={() => { setOpenModal(true) }}>
                      CONTACT
                    </button>
                    {openModal && <ModalContact closeModal={setOpenModal} />}
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
</div>
)
  };

export default BurgerMenu;