import React from 'react'
import {connect} from 'react-redux'
import { userSelector } from '../../redux/user/selectors'

const User =({user:{user}})=> {
        const {firstName, companyName, NIP, adress} = user
        return (
            <div className='user-info'>
                <h1>Witaj {firstName}!</h1>
                <h2>Dane Firmy</h2>
                <div className='user__company'>
                    <span className='user__company-title'>Nazwa firmy</span>
                    <p className='user__company-data'>{companyName}</p>
                </div>
                <div className='user__company'>
                    <span className='user__company-title'>NIP</span>
                    <p className='user__company-data'>{NIP}</p>
                </div>
                <div className='user__company'>
                    <span className='user__company-title'>Adres</span>
                    <p className='user__company-data'>{adress}</p>
                </div>
            </div>
        )
    }
const mapStateToProps = (state)=>({
    user: userSelector(state)
})

export default connect(mapStateToProps)(User)
