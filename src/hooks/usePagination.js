import { useSelector } from "react-redux";

const usePagination = (shows, pageNumber) => {
    const limit = 9;
    const lastShow = pageNumber * limit;
    const firstShow = lastShow - limit;
    let slicedShows = shows.slice(firstShow, lastShow)
    return slicedShows;
}

export default usePagination;