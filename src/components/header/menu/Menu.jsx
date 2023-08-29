import RegularMenu from './RegularMenu';
import BurgerMenu from './BurgerMenu';
import '../header.css';

import { useMediaQuery } from '@react-hook/media-query';

const Menu = () => {
  const isMdScreen = useMediaQuery('(max-width: 790px)');

    return (
        <>
            {isMdScreen ? (
            
                <BurgerMenu />
    
            ) : (
                <RegularMenu />
    )}
        </>
)
  };

export default Menu;