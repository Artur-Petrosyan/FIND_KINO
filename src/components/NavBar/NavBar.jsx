import { useNavigation } from "../../hooks/useNavigation";
import '../../styles/header.scss'
const NavBar = ({ navList, subMenu }) => {
    const navigate = useNavigation()
    return (
        <nav className='header__nav'>
            <ul className={`nav__ul ${subMenu ? 'sub-menu' : ''}`}>
                {navList.map((item) => (
                    <li className="nav__li" key={item.id} onClick={(e) => navigate(e.target.innerText)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;