import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from "react";
import { loginAPI } from './utils/API-calls'

const RouterProtector = ({ children }) => {
    // const { user, setUser } = useCurrentUser() 
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    const getLoggedInUser = useCallback(async () => {
        const { data } = await loginAPI()
        if (data.user) {
            setCurrentUser(data.user)
        } else {
            navigate('/login')
        }
    }, [navigate]) 

    useEffect(() => {
        getLoggedInUser()
    }, [getLoggedInUser])  
    
    return (
        currentUser?
        <div>{children}</div>:null
    ) 
}

export default RouterProtector
