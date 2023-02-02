import React from 'react'
import Layout from '../Layout'
import UserSideBar from './UserSideBar'
// import { UserSidebarProvider } from '../context/UserSideBarContext'
import { Scrollbars } from 'react-custom-scrollbars'

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
                        <Scrollbars>
                            <div className='bg-purple-600 text-white mx-2 my-4 p-2 rounded-lg h-[90%] overflow-y-auto' >
                                {children}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </Layout>
        </div>
        // </UserSidebarProvider>

    )
}

export default UserLayout