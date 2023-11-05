import { useState } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import '../../styles/header.scss'
const NavBar = ({ navList, subMenu }) => {
    const navigate = useNavigation()
    const [list, setList] = useState(navList)
    const setActive = (id) => {
        let newList = []
        newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, active: true }
            }
            else return { ...item, active: false }
        })
        setList(newList)
    }
    return (
        <nav className='header__nav'>
            <ul className={`nav__ul ${subMenu ? 'sub-menu' : ''}`}>
                {list.map((item) => (
                    <li className={`nav__li ${item.active ? 'active' : ''}`}
                        key={item.id}
                        onClick={(e) => {
                            setActive(item.id)
                            navigate(e.target.innerText)
                        }}>

                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;