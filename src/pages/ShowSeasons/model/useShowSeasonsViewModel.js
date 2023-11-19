import {useSelector} from "react-redux";
import {singleShowInfoSelector} from "../../../redux/selectors/singleShowInfo";
import {useParams} from "react-router-dom";

export const useShowSeasonsViewModel = () => {
    const showInfo = useSelector(singleShowInfoSelector)
    const {info} = useParams()
    return {showInfo, info};
};