import {useSingleShowViewModel} from "./model";
import {SingleShowPure} from "./ui/components";


const SingleShow = () => {
    const {isLoading, navigateTo} = useSingleShowViewModel();
    return <SingleShowPure
        isLoading={isLoading}
        navigateTo={navigateTo}
    />;
};

export default SingleShow;