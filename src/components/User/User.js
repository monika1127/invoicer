import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './user.css'
export class User extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    }
    render() {
        const {firstName, companyName, NIP, adress} = this.props.user
        return (
            <div className='user-info'>
                <h1>Witaj {firstName}!</h1>
                <h2>Dane Firmy</h2>
                <div className='company-data'>
                    <span>Nazwa firmy</span>
                    <p>{companyName}</p>
                </div>
                <div className='company-data'>
                    <span>NIP</span>
                    <p>{NIP}</p>
                </div>
                <div className='company-data'>
                    <span>Adres</span>
                    <p>{adress}</p>
                </div>
            </div>
        )
    }
}

export default User
