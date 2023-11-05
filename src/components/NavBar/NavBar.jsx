import { useNavigation } from "../../hooks/useNavigation";

const NavBar = ({ navList }) => {
    const navigate = useNavigation()
    return (
        <nav className='header__nav'>
            <ul className='nav__ul'>
                {navList.map((item) => (
                    <li key={item.id} onClick={(e) => navigate(e.target.innerText)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;