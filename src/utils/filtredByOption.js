export const filtredByOption = (option,data,setFiltredByGender) => {
    if (option === "All Persons") {
        return setFiltredByGender(data)
    }
    const filtredArr = data.filter((item) => item.gender === option)
    return setFiltredByGender(filtredArr)
}