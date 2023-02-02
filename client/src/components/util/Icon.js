import React from 'react'
import * as Icons from '../../assets/icons'

function Icon({ icon, ...props }) {
    const Icon = Icons[icon]
    return <Icon {...props} />
}

export default Icon