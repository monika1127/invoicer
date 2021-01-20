import React, { Component } from 'react'
import './user.css'

export class User extends Component {

    render() {
        return (
            <div className='user-info'>
                <h1>Witaj {this.props.user.firstName}!</h1>
                <h2>Dane Firmy</h2>
                <div className='company-data'>
                <h3>Nazwa firmy</h3>
                <p>{this.props.user.companyName}</p>
                </div>
                <div className='company-data'>
                <h3>NIP</h3>
                <p>{this.props.user.NIP}</p>
                </div>
                <div className='company-data'>
                <h3>Adres</h3>
                <p>{this.props.user.adress}</p>
                </div>
            </div>
        )
    }
}

export default User
