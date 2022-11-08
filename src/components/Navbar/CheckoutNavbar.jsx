import React, { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
const CheckoutNavbar = () => {
    const navigate = useNavigate()
    const [user] = useState({
        name: "Divyansh Sharma"
    })
    return <>
        <nav className='p-4 flex bg-white shadow-md w-full items-center'>
            <div className='container px-4 md:px-20 mx-auto'>
                <div className='flex items-center justify-between w-full'>
                    <AiOutlineArrowLeft className='cursor-pointer' onClick={() => navigate(-1)} />
                    <div className='w-28'>
                        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full' />
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='border border-gray-300 text-zomato-400 w-12 h-12 rounded-full overflow-hidden'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQmFYe2KZvQcnKEfGNICxM4I4udEh_-uG90chKLlXMx2HDGPr_ODubOdkpUFdJVGSKs0&usqp=CAU'
                                alt=''
                                className=' w-full h-full rounded-full object-cover ' />
                        </div>
                        {user.name}
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default CheckoutNavbar