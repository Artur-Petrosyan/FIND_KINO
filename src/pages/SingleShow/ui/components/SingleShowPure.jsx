import {Loader, NavBar} from "src/core";
import subMenuList from "src/constants/subMenuList";
import SingleShowInfo from "src/pages/SingleShowInfo/ui/SIngleShowInfo";
import React from "react";

export const SingleShowPure = ({isLoading, navigateTo}) => (
    <div>
        {isLoading ? <Loader/> :
            <>
                <div className='nav__bar'>
                    <NavBar navList={subMenuList} subMenu={true} navigateTo={navigateTo}/>
                </div>
                <div>
                    <SingleShowInfo/>
                </div>
            </>}
    </div>
);