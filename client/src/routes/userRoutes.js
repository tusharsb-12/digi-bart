const userRoutes = [
    {
        path: '/user', // the url
        icon1: 'AccountBlackIcon', // the component being exported from icons/index.js
        icon2: 'AccountWhiteIcon', // the component being exported from icons/index.js
        name: 'Profile', // name that appear in Sidebar
    },
    {
        path: '/user/product',
        icon2: 'InventoryBlackIcon',
        icon1: 'InventoryWhiteIcon',
        name: 'My Products',
    },
    {
        path: '/user/offer',
        icon2: 'OfferBlackIcon',
        icon1: 'OfferWhiteIcon',
        name: 'My Offers',
    },
    {
        path: '/user/setting',
        icon2: 'SettingBlackIcon',
        icon1: 'SettingWhiteIcon',
        name: 'Settings',
    },
]

export default userRoutes
