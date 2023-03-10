import React from 'react'
import Menu from '../Menu'
import userRoutes from '../../routes/userRoutes'

const UserSideBar = () => {
    return (
        <div className='bg-white  text-black mx-2 my-4 px-2 py-4 rounded-lg h-[90%] text-center' >
            <div className='mt-2 mb-4'>
                <h1 className='text-xl' >
                    UserSideBar
                </h1>
            </div>
            <hr />
            <Menu routes={userRoutes} />
        </div>
    )
}

export default UserSideBar