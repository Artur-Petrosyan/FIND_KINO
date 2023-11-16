import {Loader, NavBar} from "src/core";
import subMenuList from "src/constants/subMenuList";
import SingleShowInfo from "src/pages/SingleShowInfo/SIngleShowInfo";
import React from "react";

export function SingleShowPure({isLoading, navigateTo}) {
    return (
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
}