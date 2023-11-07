import { useNavigation } from "../../hooks/useNavigation";
import '../../styles/header.scss'
import { NavLink } from "react-router-dom";
const NavBar = ({ navList, subMenu }) => {
    const navigate = useNavigation()
    return (
        <nav className='header__nav'>
            <ul className={`nav__ul ${subMenu ? 'sub-menu' : ''}`}>
                {navList.map((item) => (
                    <NavLink to={navigate(item.name)} className={({ isActive }) => `nav__li ${isActive ? ' active' : ''}`}
                        key={item.id} >
                        {item.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;