import {useShowsPageViewModel} from "../model";
import {ShowsPure} from "./components";

const Shows = () => {
    const {setPageNumber, sliced, data, pageNumber} = useShowsPageViewModel();
    return <ShowsPure
        sliced={sliced}
        data={data}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
    />
};

export default Shows;