import React, {useMemo} from "react";
import ShowMain from "../../ShowMain/ShowMain";
import ShowEpisodes from "../../ShowEpisodes/ShowEpisodes";
import ShowSeasons from "../../ShowSeasons/ShowSeasons";
import ShowCast from "../../ShowCast/ShowCast";

export function useRenderComponentUsingSwitch(info) {
    return useMemo(() => {
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
}