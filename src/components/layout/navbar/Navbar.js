import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logIn, logOut } from '../../../redux/user/actions'

import Button from '../button/Button'
import Avatar from '../../User/Avatar'

import { ReactComponent as Logo } from '../../../assets/logo/stack.svg'
import { ReactComponent as Plus } from '../../../assets/images/plus.svg'
import { ReactComponent as LogInIcon } from '../../../assets/images/enter.svg'
import { ReactComponent as LogOutIcon } from '../../../assets/images/exit.svg'

import './navbar.css'

const Navbar = ({ user: { isLogged }, logIn, logOut }) => {


    const onExit = ()=>{
        logOut()
        localStorage.removeItem('formValues')
    }
    return (
        <div className='navbar'>
            <div className='navbar__name'>
                <Logo width={42} height={42} />
                <h1>Invoicer</h1>
            </div>
            {isLogged
                ?
                <div className='navbar__items'>
                    <div className='navbar__item'>Home</div>
                    <Link className='navbar__item' to='/user'>User</Link>
                    <Link className='navbar__item' to='/invoices'> Lista faktur</Link>
                    <Link className='navbar__item navbar__item--main' to='/invoices/new'>
                        <div className='navbar__add-btn'>
                            <Plus width={12} height={12} /></div>
                        <div>Dodaj fakturę</div>
                    </Link>

                    <div className='navbar__item navbar__item--main navbar__item--user'>
                        <Avatar />
                    </div>
                    <div className='navbar__logout-icon' onClick={onExit}>
                        <LogOutIcon width={24} height={24} />
                    </div>
                </div>
                :
                <Link to="/user" className='navbar__items'>
                    <Button color='secondary' size='large' onClick={logIn}>
                        <div className='navbar__login-icon'>
                            <div>Zaloguj</div>
                            <LogInIcon width={24} height={24} />
                        </div>
                    </Button>
                </Link>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, { logIn, logOut })(Navbar)
