import '../../styles/header.scss'
import Button from '../Button/Button';
import { navList } from '../../constants/headerNavList';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header className='header'>
            <NavBar navList={navList} />
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

export default Header;