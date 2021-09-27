import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    const route = props.route || { params: {numero: 0}}
    return (
        <CentralText colorBackground='#9932cd'>View C - {route.params.numero}</CentralText>
    )
}