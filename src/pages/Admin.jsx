import { useState } from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddProductsForm } from '../components'
import auth from '../appwrite/auth'
import { login, logout } from '../store/authSlice'


const Admin = () => {
    const navigate = useNavigate()
    const userData = useSelector(state => state.user)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    console.log(userData);
    useEffect(() => {
        auth.getCurrentUser().then((data) => {
            if (data) {
                dispatch(login(data))
            }
            else{
                dispatch(logout(data))
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const handleLogout = () => {
        auth.logout().then(() => {
            dispatch(logout())
            navigate('/admin')
        })
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {loading ? <h1 className='loader'></h1> : <div>
                {!userData.isAdmin ? <button onClick={() => navigate('login')} className='button2'>Login Your Account</button>
                    :
                    <div className='w-full gap-3 flex flex-col items-center h-auto justify-center'>
                        <button onClick={handleLogout} className='button3'>Logout</button>
                        <AddProductsForm />
                    </div>}
            </div>
            }
        </div>
    )
}

export default Admin