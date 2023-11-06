import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';

import { navList } from '../../constants/headerNavList';

import '../../styles/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <NavBar navList={navList} />
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

export default Header;