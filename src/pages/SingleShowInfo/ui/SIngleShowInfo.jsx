import {SingleShowInfoPure} from "./components/SingleShowInfoPure";
import {useSingleShowInfoViewModel} from "../model";

const SingleShowInfo = () => {
    const {isLoading, renderComponent} = useSingleShowInfoViewModel();
    return SingleShowInfoPure(isLoading, renderComponent);
};

export default SingleShowInfo;