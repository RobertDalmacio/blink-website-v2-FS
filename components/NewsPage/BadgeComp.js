import React from 'react'
import {Badge} from 'reactstrap'


const BadgeComp = ({children, styleInfo}) => {
    const colorKey = {
        'Music': 'primary',
        'Endorsements': 'success',
        'ShowAppearances': 'danger',
        'LiveStages': 'warning',
        'MagazineFeatures': 'info',
    }
    
    return (
        <h5 style={styleInfo}>
            <Badge color={colorKey[children]}>{children}</Badge>
        </h5>
    )
}

export default BadgeComp