import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';

import { navList } from '../../constants/headerNavList';

import '../../styles/header.scss'
import InputSearch from '../InputSearch/InputSearch';

const Header = () => {
    return (
        <header className='header'>
            <NavBar navList={navList} />
            <InputSearch />
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

export default Header;