import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
    const navigate = useNavigate()
    const navigateTo = (path) => {
        const lowerPath = path.toLowerCase()
        if (lowerPath === 'home') {
            return navigate('/')
        }
        if (lowerPath === 'shows') {
            return navigate('shows/1')
        }
        return navigate(lowerPath)
    }

    return navigateTo;
}