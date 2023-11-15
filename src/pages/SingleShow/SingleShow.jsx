import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleShow } from 'src/redux/actions/asyncSingleShow';
import { API_ENDPOINTS } from 'src/constants/api';


import NavBar from 'src/components//NavBar/NavBar';
import subMenuList from 'src/constants/subMenuList';
import SingleShowInfo from 'src/pages/SingleShowInfo/SIngleShowInfo';
import Loader from 'src/components//Loader/Loader';


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