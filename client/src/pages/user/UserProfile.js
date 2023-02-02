import React from 'react'
import UserLayout from '../../components/user/UserLayout'

const UserProfile = () => {
    return (
        <UserLayout>
            <div className='mx-2 my-6'>
                <div className='flex flex-wrap m-2'>
                    <div className='aspect-square w-40 h-40 rounded-full'>
                        <img className='aspect-square w-40 object-cover rounded-full' src={"https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
                    </div>
                    <div className='my-auto ml-8 flex-1' >
                        <div className='flex flex-wrap'>
                            <div className='mx-2' >First Name</div>
                            <div className='mx-2' >Last Name</div>
                        </div>
                        <div className='m-2'>
                            Email
                        </div>
                        <div className='m-2'>
                            Mobile No
                        </div>
                        <div className='m-2'>
                            Address
                        </div>
                    </div>
                    <div className='aspect-[9/5] w-72 bg-white rounded-lg' >
                        Map
                    </div>
                </div>
            </div>
            <div className='m-2'>
                <div>
                    My Bids on others product
                </div>
                <div>
                    Bids on my products
                </div>
            </div>
        </UserLayout>
    )
}

export default UserProfile