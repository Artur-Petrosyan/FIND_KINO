import {ShowSeasonsPure} from "./components";
import {useShowSeasonsViewModel} from "../model";

const ShowSeasons = () => {
    const {showInfo, info} = useShowSeasonsViewModel();
    return <ShowSeasonsPure
        showInfo={showInfo}
        info={info}
    />;
};

export default ShowSeasons;