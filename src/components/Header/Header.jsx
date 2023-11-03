import '../../styles/header.scss'
import Button from '../Button/Button';
const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                  <ul className='nav__ul'>
                    <li className='nav__li'>Home</li>
                    <li className='nav__li'>Shows</li>
                  </ul>
            </nav>
            <Button variant={'button-logout'}>Log out</Button>
        </header>
    );
};

export default Header;