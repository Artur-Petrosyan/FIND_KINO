const sliceForPagination = (shows, pageNumber) => {
    const limit = 16;
    const lastShow = pageNumber * limit;
    const firstShow = lastShow - limit;
    let slicedShows = shows.slice(firstShow, lastShow)
    return slicedShows;
}

export default sliceForPagination;