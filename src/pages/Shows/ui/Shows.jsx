import {useShowsPageViewModel} from "../model";
import {ShowsPure} from "./components";

const Shows = () => {
    const {setPageNumber, sliced, data, pageNumber, isLoading} = useShowsPageViewModel();
    return ShowsPure(isLoading, sliced, data, pageNumber, setPageNumber);
};

export default Shows;