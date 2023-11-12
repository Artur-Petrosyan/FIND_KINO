import navigateToRegex from "./navigateToRegex"

export const navigateWithRegex = (id, name, navigate) => {
    const newName = navigateToRegex(name)
    return navigate(`${id}/${newName}/main`)
}
