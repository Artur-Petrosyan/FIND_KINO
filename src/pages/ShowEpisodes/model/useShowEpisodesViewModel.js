import {useSelector} from "react-redux";
import {singleShowInfoSelector} from "src/redux/selectors/singleShowInfo";

export const useShowEpisodesViewModel = () => {
    const showInfo = useSelector(singleShowInfoSelector)
    const singleShowInfoSeasons = useSelector(state => state.singleShowInfoSeasons)
    return {showInfo, singleShowInfoSeasons};
};