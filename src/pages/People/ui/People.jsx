import {usePeoplePageViewModel} from "../model";
import {PeoplePagePure} from "./components/PeoplePagePure";

const People = () => {
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        selectOptions,
        setFiltredByGender
    } = usePeoplePageViewModel();

    return <PeoplePagePure
        selectOptions={selectOptions}
        data={data}
        setFiltredByGender={setFiltredByGender}
        sliced={sliced}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
    />;
};

export default People;