import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleShow } from '../../redux/actions/asyncSingleShow';
import { API_ENDPOINTS } from '../../constants/api';


import NavBar from '../../components/NavBar/NavBar';
import subMenuList from '../../constants/subMenuList';
import SingleShowInfo from '../SingleShowInfo/SIngleShowInfo';
import Loader from '../../components/Loader/Loader';


const SingleShow = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navigateTo = (name) => {
        const path = name.toLowerCase()
        navigate(`${path}`)
    }
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleShow(API_ENDPOINTS.SHOWS, id, setIsLoading))
    }, [dispatch, id])
    return (
        <div >
            {isLoading ? <Loader /> :
                <>
                    <div className='nav__bar'>
                        <NavBar navList={subMenuList} subMenu={true} navigateTo={navigateTo} />
                    </div>
                    <div>
                        <SingleShowInfo />
                    </div>
                </>}
        </div >
    );
};

export default SingleShow;