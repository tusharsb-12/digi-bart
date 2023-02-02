import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './util/Icon'

const Menu = ({ routes }) => {
    return (
        <ul className='h-full mx-2'>
            {routes.map((route, idx) => {
                return <Link key={idx} to={route.path}><li className='group relative  p-1 px-2 w-full hover:bg-purple-700 rounded-lg my-2 '>

                    <div className='flex text-black group-hover:text-white'>
                        <Icon className="w-5 h-5 mt-1 group-hover:hidden" aria-hidden="true" icon={route.icon1} />
                        <Icon className='hidden w-5 h-5 mt-1 group-hover:block' aria-hidden="true" icon={route.icon2} />
                        <span className='mx-2'>
                            {route.name}
                        </span>
                    </div>
                    <span className='invisible absolute w-1 my-auto right-0 bottom-0 bg-purple-300 h-[100%] invisible group-hover:visible rounded-l-lg'></span>
                </li></Link>
            })}
        </ul>
    )
}

export default Menu