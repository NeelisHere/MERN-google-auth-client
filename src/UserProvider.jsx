import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { loginAPI } from './utils/API-calls'

const UserContext = createContext(null)

export const useCurrentUser = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const getLoggedInUSer = useCallback(async () => {
        const { data } = await loginAPI()
        // console.log(data)
        setUser(data.user)
    }, []) 

    useEffect(() => {
        getLoggedInUSer()
    }, [getLoggedInUSer])  

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider