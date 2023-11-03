import '../../styles/header.scss'
import Button from '../Button/Button';
import { navList } from '../../constants/headerNavList';
import { useNavigation } from '../../hooks/useNavigation';

const Header = () => {
    const navigate = useNavigation()
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='nav__ul'>
                    {navList.map((item) => (
                        <li key={item.id} onClick={(e) => navigate(e.target.innerText)}>
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