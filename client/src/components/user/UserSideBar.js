import React from 'react'
import Menu from '../Menu'
import userRoutes from '../../routes/userRoutes'

const UserSideBar = () => {
    return (
        <div className='bg-purple-600 text-white mx-2 my-4 px-2 py-4 rounded-lg min-h-[95%] overflow-y-auto text-center' >
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