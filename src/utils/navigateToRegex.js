const navigateToRegex = (name) => {
    const regex = / /g;
    let newName = name.replace(regex, '-')
    return newName
}

export default navigateToRegex