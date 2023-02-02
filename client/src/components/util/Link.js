import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const Link = ({to}) => {
    return (
        <div>
            <RouterLink to={to}/>
        </div>
    )
}

export default Link