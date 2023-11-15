import Button from 'components/Button/Button';
import NavBar from 'components/NavBar/NavBar';

import { navList } from 'src/constants/headerNavList';

import 'src/styles/header.scss'
import InputSearch from 'components/InputSearch/InputSearch';

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