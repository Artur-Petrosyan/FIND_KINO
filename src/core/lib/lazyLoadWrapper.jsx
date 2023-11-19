import {Suspense} from "react";
import {Loader} from "../ui";

export const LazyLoadWrapper = (children) => {
    return (
        <Suspense fallback={<Loader/>}>
            {children}
        </Suspense>
    )
}