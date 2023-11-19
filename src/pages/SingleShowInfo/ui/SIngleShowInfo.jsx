import {SingleShowInfoPure} from "./components/SingleShowInfoPure";
import {useSingleShowInfoViewModel} from "../model";

const SingleShowInfo = () => {
    const {isLoading, renderComponent} = useSingleShowInfoViewModel();
    return <SingleShowInfoPure
        isLoading={isLoading}
        renderComponent={renderComponent}
    />;
};

export default SingleShowInfo;