import {ShowSeasonsPure} from "./ui/components";
import {useShowSeasonsViewModel} from "./model";

const ShowSeasons = () => {
    const {showInfo, info} = useShowSeasonsViewModel();
    return ShowSeasonsPure(showInfo, info);
};

export default ShowSeasons;