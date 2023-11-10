const sliceForPagination = (data, pageNumber) => {
    const limit = 40;
    const lastShow = pageNumber * limit;
    const firstShow = lastShow - limit;
    let slicedData = data.slice(firstShow, lastShow)
    return slicedData;
}

export default sliceForPagination;