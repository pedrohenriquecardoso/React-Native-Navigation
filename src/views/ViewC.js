import React from 'react'
import CentralText from '../components/CentralText'

export default props => {
    const numero = props && props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
    return (
        <CentralText colorBackground='#9932cd'>View C - {numero}</CentralText>
    )
}