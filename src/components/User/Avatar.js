import React, { Component } from 'react';
import './avatar.css'

class Avatar extends Component {

    render(){
        const initials = this.props.firstName.charAt(0) + this.props.lastName.charAt(0)

        return (
            <div className='avatar'>{initials}</div>
        )
    }
}
export default Avatar