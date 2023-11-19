import {useShowEpisodesViewModel} from "../model/useShowEpisodesViewModel";
import {ShowEpisodesPure} from "./components/ShowEpisodesPure";

const ShowEpisodes = () => {
    const {showInfo, singleShowInfoSeasons} = useShowEpisodesViewModel();
    return <ShowEpisodesPure
        showInfo={showInfo}
        singleShowInfoSeasons={singleShowInfoSeasons}
    />
};

export default ShowEpisodes;