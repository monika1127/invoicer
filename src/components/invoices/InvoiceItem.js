import React, { Component } from 'react'
import { Link, } from 'react-router-dom'

import Button from '../layout/button/Button'

import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer.svg'
import { ReactComponent as Arrow } from '../../assets/images/redo2.svg'
class InvoiceItem extends Component {
    render() {
        const { number, saleDate, creationDate, contractor, price, isPaid, id } = this.props.invoice

        return (
            <tr>
                <td className='table__txt--center'>
                    <input type='checkbox'></input>
                </td>
                <td className='table__txt--center'>
                    <Link to={`invoices/${id}`} className='invoice__icon-show-details'>
                        <Search width={16} height={16} />
                    </Link>
                </td>
                <td className='table__txt--primary-color table__txt--bold'>{number}</td>
                <td className='table__txt--center'>{saleDate}</td>
                <td className='table__txt--center'>{creationDate}</td>
                <td className='table__txt--blue'>{contractor}</td>
                <td className='table__txt--right'>
                    <div className='table__txt--bold'>{Number.parseFloat(price).toFixed(2) + ' PLN'}</div>
                    <div className='table__txt--vsmall'>{isPaid ? "opłacono" : "nieopłacono"}</div>
                </td>
                <td className='table__txt--center'>
                    <Button size="small" color="secondary">płatność</Button>
                </td>
                <td>
                    <div className='invoice__action-icons'>
                        <Button size='square' >
                            <Clock width={16} height={16} />
                        </Button>
                        <Button size='square'>
                            <Arrow width={16} height={16} />
                        </Button>
                        <Button size='square'>
                            <Printer width={16} height={16} />
                        </Button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default InvoiceItem
