import {usePeoplePageViewModel} from "../model";
import {PeoplePagePure} from "./components/PeoplePagePure";

const People = () => {
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        isLoading,
        selectOptions,
        setFiltredByGender
    } = usePeoplePageViewModel();

    return <PeoplePagePure
        isLoading={isLoading}
        selectOptions={selectOptions}
        data={data}
        setFiltredByGender={setFiltredByGender}
        sliced={sliced}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
    />;
};

export default People;