import '../../styles/header.scss'
import Button from '../Button/Button';
import { navList } from '../../constants/headerNavList';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='nav__ul'>
                    {navList.map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

export default Header;