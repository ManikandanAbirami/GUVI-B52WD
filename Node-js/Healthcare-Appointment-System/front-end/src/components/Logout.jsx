import React from 'react'
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom'

function Logout() {
    const { logout } = useUserContext();
    const navigateTo = useNavigate();

    const handleLogout = () => {
        logout();
        navigateTo('/login');
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout