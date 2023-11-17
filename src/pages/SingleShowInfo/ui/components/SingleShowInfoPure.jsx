import React from "react";
import {Loader} from "src/core";
import './singleShow.scss'

export function SingleShowInfoPure(isLoading, renderComponent) {
    return (
        <div>
            {isLoading ? <Loader/> : renderComponent}
        </div>
    );
}