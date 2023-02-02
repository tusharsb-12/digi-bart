const userRoutes = [
    {
        path: '/user', // the url
        icon: 'AccountIcon', // the component being exported from icons/index.js
        name: 'Profile', // name that appear in Sidebar
    },
    {
        path: '/user/product',
        icon: 'InventoryIcon',
        name: 'My Products',
    },
    {
        path: '/user/offer',
        icon: 'OfferIcon',
        name: 'My Offers',
    },
    {
        path: '/user/setting',
        icon: 'SettingIcon',
        name: 'Settings',
    },
]

export default userRoutes
