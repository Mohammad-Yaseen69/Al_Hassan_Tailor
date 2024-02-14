import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import auth from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()



        auth.login({
            Email: email,
            Password: password,
        }).
            then((data) => {
                dispatch(login(data))
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })

        navigate('/admin')
        setPassword('')
        setEmail('')
    }

    return (
        <div>
            <div class="flex flex-col items-center justify-center h-screen">
                <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form onSubmit={handleSubmit} class="flex flex-col">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" autoComplete="current-password" required="" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type='password' placeholder="Password" />
                        <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm