import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../button/Button'
import Avatar from '../../User/Avatar'

import { ReactComponent as Logo } from '../../../assets/logo/stack.svg'
import { ReactComponent as Plus } from '../../../assets/images/plus.svg'
import { ReactComponent as LogIn } from '../../../assets/images/enter.svg'
import { ReactComponent as LogOut } from '../../../assets/images/exit.svg'

import './navbar.css'
class Navbar extends Component {
    static propTypes = {
        user: PropTypes.object,
        isLogged: PropTypes.bool.isRequired,
    }
    render() {
        return (
            <div className='navbar'>
                <div className='navbar__name'>
                    <Logo width={42} height={42} />
                    <h1>Invoicer</h1>
                </div>
                {this.props.isLogged
                    ?
                    <div className='navbar__items'>
                        <li className='navbar__item'>Home</li>
                        <Link  className='navbar__item' to='/user'>User</Link>
                        <li className='navbar__item'>
                            <Link to='/invoices'> Lista faktur</Link>
                        </li>
                        <li className='navbar__item -main'>
                            <Link to='/invoices/new'>
                            <div className='add_btn'>
                                <Plus width={12} height={12} /></div>
                            <div>Dodaj fakturę</div>
                            </Link>
                        </li>
                        <li className='navbar__item -main user'>
                            <Avatar firstName={this.props.user.firstName} lastName={this.props.user.lastName} />
                        </li>
                        <li className='logout' onClick={this.props.logOut}>
                            <LogOut width={24} height={24} />
                        </li>
                    </div>
                    :
                    <Link to="/user">
                        <Button color='secondary' size='large' onClick={this.props.logIn}>
                            <div className='login'>
                                <div>Zaloguj</div>
                                <LogIn width={24} height={24} />
                            </div>
                        </Button>
                    </Link>
                }
            </div>
        )
    }
}
export default Navbar
