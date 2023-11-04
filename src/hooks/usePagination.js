const sliceForPagination = (shows, pageNumber) => {
    console.log("WORKED");
    const limit = 9;
    const lastShow = pageNumber * limit;
    const firstShow = lastShow - limit;
    let slicedShows = shows.slice(firstShow, lastShow)
    return slicedShows;
}

export default sliceForPagination;