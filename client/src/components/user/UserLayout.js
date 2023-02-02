import React from 'react'
import Layout from '../Layout'
import UserSideBar from './UserSideBar'
// import { UserSidebarProvider } from '../context/UserSideBarContext'

const UserLayout = ({ children }) => {
    return (
        // <UserSidebarProvider>
        <div>
            <Layout>

                <div className='flex flex-wrap'>
                    <div className='w-1/5'>
                        <UserSideBar />
                    </div>
                    <div className='w-4/5'>
                        <div className='bg-purple-600 text-white mx-2 my-4 p-2 rounded-lg min-h-[95%] overflow-y-auto' >
                            {children}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
        // </UserSidebarProvider>

    )
}

export default UserLayout