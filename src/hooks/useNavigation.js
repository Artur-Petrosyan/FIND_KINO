import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
    const navigate = useNavigate()
    const navigateTo = (path) => {
        const lowerPath = path.toLowerCase()
        if (lowerPath === 'home') {
            return navigate('/')
        }
        return navigate(lowerPath)
    }

    return navigateTo;
}