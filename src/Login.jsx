import React from 'react'

const Login = () => {
    const handleLogin = async () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/google`, '_self')
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    )
}

export default Login
