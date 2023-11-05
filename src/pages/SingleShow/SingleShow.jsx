import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleShow } from '../../redux/actions/asyncSingleShow';
import { API_ENDPOINTS } from '../../constants/api';
import { singleShowSelector } from '../../redux/selectors/singleShow';
import NavBar from '../../components/NavBar/NavBar';
import subMenuList from '../../constants/subMenuList';
import SingleShowInfo from '../SingleShowInfo/SIngleShowInfo';
const SingleShow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navigateTo = (name) => {
        const path = name.toLowerCase()
        navigate(`${path}`)
    }
    const { id } = useParams()
    const singleShow = useSelector(singleShowSelector)
    useEffect(() => {
        dispatch(getSingleShow(API_ENDPOINTS.SHOWS, id))
    }, [dispatch, id])
    return (
        <div >
            <div className='nav__bar'>
                <NavBar navList={subMenuList} subMenu={true}  navigateTo={navigateTo}/>
            </div>
            <div>
                <SingleShowInfo singleShow={singleShow}  />
            </div>
        </div >
    );
};

export default SingleShow;