import React, { PureComponent } from 'react'
import './navbar.css'
import { ReactComponent as Logo } from '../../../assets/logo/stack.svg'
import { ReactComponent as Plus } from '../../../assets/images/plus.svg'
export default class Navbar extends PureComponent {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar__name'>
                    <Logo />
                    <h1>Invoicer</h1>
                </div>
                <ul className='navbar__items'>
                    <li className='navbar__item'>Home</li>
                    <li className='navbar__item'>Home</li>
                    <li className='navbar__item'>Lista faktur</li>
                    <li className='navbar__item -add'>
                        <div className='add_btn'>
                            <Plus width={12} height={12}/></div>
                        <div>Dodaj fakturę</div>
                    </li>
                </ul>
            </div>
        )
    }
}
