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
                    <h3>Nazwa firmy</h3>
                    <p>{companyName}</p>
                </div>
                <div className='company-data'>
                    <h3>NIP</h3>
                    <p>{NIP}</p>
                </div>
                <div className='company-data'>
                    <h3>Adres</h3>
                    <p>{adress}</p>
                </div>
            </div>
        )
    }
}

export default User
