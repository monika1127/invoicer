import React, { Component } from 'react'
//imported SVG files
import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer.svg'
import { ReactComponent as Arrow } from '../../assets/images/redo2.svg'

import Button from '../layout/button/Button'

import PropTypes from 'prop-types'

class InvoiceItem extends Component {

    render() {
        const {number, saleDate, creationDate, contractor,price, isPaid}=this.props.invoice
        return (
            <tr>
                <td>
                    <input type='checkbox'></input>
                </td>
                <td>
                    <Search height={14} width={14} />
                </td>
                <td>{number}</td>
                <td>{saleDate}</td>
                <td>{creationDate}</td>
                <td>{contractor}</td>
                <td>
                    <div>{price}</div>
                    <div>{isPaid ? "opłacono": "nieopłacono"}</div>
                </td>
                <td>
                    <Button class="btn btn-green btn-small" name='+ platność' />
                </td>
                <td>
                    <div className='container__flex-row'>
                        <div className='container-squere container-grey'>
                            <Clock height={14} width={14} />
                        </div>
                        <div className='container-squere container-grey'>
                            <Arrow height={14} width={14} />
                        </div>
                        <div className='container-squere container-grey'>
                            <Printer height={14} width={14} />
                        </div>
                    </div>



                </td>
            </tr>
        )
    }
}

export default InvoiceItem
