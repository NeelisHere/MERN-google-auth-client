import { logoutAPI } from './utils/API-calls'
import { useCurrentUser } from './UserProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { user, setUser } = useCurrentUser()
    const navigate = useNavigate()

    const handleLogout = async () => {
        setUser(async(user) => {
            const { data } = await logoutAPI()
            return data.user
        })
        navigate('/login')
    }

    return (
        <div>
            <h1>Home</h1>
            <div style={{ border: '2px solid red', margin: '20px' }}>
                <p>{user?.username}</p>
                <p>{user?.email}</p>
                <img src={user?.picture} alt="x" height={50} weight={50} />
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
