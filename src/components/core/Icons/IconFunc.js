import React from 'react'
import IconsList from './IconsList'

const IconFunc = (props)=>{

    const {name, classname, width, height, color, onClick} = props;
    return (
        <IconsList icon={name} classname={classname} width={width} height={height} color={color} onClick={onClick} />
    )
}

export default IconFunc