import React from 'react'
import UserLayout from '../../components/user/UserLayout'
import ProductTable from '../../components/util/ProductTable'
import { Scrollbars } from 'react-custom-scrollbars';

const UserProfile = () => {
    return (
        <UserLayout>
            <Scrollbars>
                <div className='h-full'>
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
                    {/* <Scrollbars > */}
                        <div className='m-2'>
                            <div>
                                <ProductTable title={"Offers for my Products"}
                                    tableCols={["My Product", "In Exchange of"]}
                                    enableActions={false}
                                    demoView={true}
                                    redirectLink={"/user/product"}
                                />
                            </div>
                            <div>
                                <ProductTable title={"My Offers"}
                                    tableCols={["In Exchange of", "My Product"]}
                                    enableActions={false}
                                    demoView={true}
                                    redirectLink={"/user/offer"}
                                />
                            </div>
                        </div>
                    {/* </Scrollbars> */}
                </div>
            </Scrollbars>
        </UserLayout>
    )
}

export default UserProfile