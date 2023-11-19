import {Suspense} from "react";
import {Loader} from "../ui";

export const LazyLoadWrapperHOC = (children) => {
    return (
        <Suspense fallback={<Loader/>}>
            {children}
        </Suspense>
    )
}