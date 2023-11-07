export const useNavigation = () => {
    const navigateTo = (path) => {
        const lowerPath = path.toLowerCase()
        if (lowerPath === 'home') {
            return '/'
        }
        if (lowerPath === 'shows') {
            return 'shows/1'
        }
        if(lowerPath === 'people'){
            return 'people/1'
        }
        return lowerPath
    }

    return navigateTo;
}