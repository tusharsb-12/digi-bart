import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/user/UserLayout';
import ProductTable from '../../components/util/ProductTable';
import { Scrollbars } from 'react-custom-scrollbars';
import { getUserData } from '../../api/user';
import Map from '../../components/Map';
import PageTitle from '../../components/typography/PageTitle';
const UserProfile = () => {
    const [userData, setUserData] = useState({
        location: {
            type: 'Point',
            coordinates: [0, 0],
        },
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        address: '',
        rating: 0,
    });
    useEffect(() => {
        (async () => {
            const data = await getUserData();
            setUserData({
                ...data.data.user,
            });
            console.log(data.data.user);
        })();
    }, []);
    return (
        <UserLayout>
            <Scrollbars>
                <PageTitle>
                    {' '}
                    <div className="mt-[-16px] mx-4">Profile</div>{' '}
                </PageTitle>
                <div className="h-full">
                    <div className="mx-2 my-6">
                        <div className="flex flex-wrap m-2 drop-shadow-lg">
                            <div className="aspect-square w-40 h-40 rounded-full">
                                <img
                                    className="aspect-square w-40 object-cover rounded-full"
                                    src={
                                        'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="my-auto ml-8 flex-1">
                                <div className="flex flex-wrap">
                                    <div className="ml-2 mr-1">
                                        {userData.firstName}
                                    </div>
                                    <div className="mr-1">
                                        {userData.lastName}
                                    </div>

                                </div>
                                <div className="m-2">
                                    <span>4.75 <span className="star">&#9733;</span> Rated</span>
                                </div>
                                <div className="m-2">{userData.email}</div>
                                <div className="m-2">
                                    {userData.contactNumber}
                                </div>
                                <div className="m-2">{userData.address}</div>
                            </div>
                        </div>
                        {/* <div className="aspect-[9/5] w-full bg-white rounded-lg object-contain">
                            <Map className='object-contain' position={[51.505, -0.09]} />
                        </div> */}
                    </div>
                    {/* <Scrollbars > */}
                    <div className="m-2">
                        <div>
                            <ProductTable
                                title={'Offers for my Products'}
                                tableCols={['My Product', 'In Exchange of']}
                                enableActions={false}
                                demoView={true}
                                redirectLink={'/user/product'}
                            />
                        </div>
                        <div>
                            <ProductTable
                                title={'My Offers'}
                                tableCols={['In Exchange of', 'My Product']}
                                enableActions={false}
                                demoView={true}
                                redirectLink={'/user/offer'}
                            />
                        </div>
                    </div>
                    {/* </Scrollbars> */}
                </div>
            </Scrollbars>
        </UserLayout>
    );
};

export default UserProfile;
