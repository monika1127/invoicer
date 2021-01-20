import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './avatar.css'
class Avatar extends Component {

    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }

    render(){
        const initials = this.props.firstName.charAt(0) + this.props.lastName.charAt(0)

        return (
            <div className='avatar'>{initials}</div>
        )
    }
}
export default Avatar
