import React from 'react'
import {connect} from 'react-redux'
import './user.css'

const User =({user:{user}})=> {
        const {firstName, companyName, NIP, adress} = user
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
const mapStateToProps = (state)=>({
    user: state.user
})

export default connect(mapStateToProps, null )(User)
