import 'src/styles/shows.scss'
import {useShowsPageViewModel} from "./model/useShowsPageViewModel";
import {ShowesPagePure} from "./ui/components/ShowesPagePure";

const Shows = () => {
    const {setPageNumber, sliced, data, pageNumber, isLoading} = useShowsPageViewModel();
    return ShowesPagePure(isLoading, sliced, data, pageNumber, setPageNumber);
};

export default Shows;