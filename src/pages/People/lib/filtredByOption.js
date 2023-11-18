/**
 * Filters data by a given option and returns the filtered data.
 * @param {string} option - The option to filter by.
 * @param {Array} data - The data to be filtered.
 * @param {Function} setFiltredByGender - The function to set the filtered data.
 * @returns {Array} The filtered data.
 */
export const filtredByOption = (option, data, setFiltredByGender) => {
    if (option === "All Persons") {
        return setFiltredByGender(data)
    }
    let filtredArr = data.filter((item) => item.gender === option);
    return setFiltredByGender(filtredArr)
}