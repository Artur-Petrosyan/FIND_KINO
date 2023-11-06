const groupBySeasons = (data) => {
    const seasons = data.reduce((acc, current) => {
        const season = current.season;
        if (!acc[season]) {
            acc[season] = []
        }
        acc[season].push(current)
        return acc
    }, {})
    const res = Object.values(seasons)
    return res
}

export default groupBySeasons;