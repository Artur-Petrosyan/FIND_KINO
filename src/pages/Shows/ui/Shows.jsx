import 'src/styles/shows.scss'
import {useShowsPageViewModel} from "../model";
import {ShowesPagePure} from "./components";

const Shows = () => {
    const {setPageNumber, sliced, data, pageNumber, isLoading} = useShowsPageViewModel();
    return ShowesPagePure(isLoading, sliced, data, pageNumber, setPageNumber);
};

export default Shows;