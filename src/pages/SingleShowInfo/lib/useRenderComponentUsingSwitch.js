import React, {useMemo} from "react";
import ShowMain from "pages/ShowMain/ui/ShowMain";
import ShowEpisodes from "pages/ShowEpisodes/ui/ShowEpisodes";
import ShowSeasons from "pages/ShowSeasons/ui/ShowSeasons";
import ShowCast from "pages/ShowCast/ShowCast";

export const useRenderComponentUsingSwitch = info => useMemo(() => {
    switch (info) {
        case 'main':
            return <ShowMain/>;
        case 'episodes':
            return <ShowEpisodes/>;
        case 'seasons':
            return <ShowSeasons/>;
        case 'cast':
            return <ShowCast/>;
        default:
            return <ShowMain/>
    }
}, [info]);