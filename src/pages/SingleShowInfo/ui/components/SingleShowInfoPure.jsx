import React from "react";
import {Loader} from "src/core";
import './singleShow.scss'

export const SingleShowInfoPure = ({isLoading, renderComponent}) => (
    <div>
        {isLoading ? <Loader/> : renderComponent}
    </div>
);