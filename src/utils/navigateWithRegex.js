import navigateToRegex from "./navigateToRegex"

export const navigateWithRegex = (id, name, navigate,path) => {
    const newName = navigateToRegex(name)
    if(path === '/search') {
      return  navigate(`/shows/1/${id}/${newName}/main`)
    }
    return navigate(`${id}/${newName}/main`)
}
