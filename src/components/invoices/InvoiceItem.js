import React, { Component } from 'react'
//imported SVG files
import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer-black.svg'
import { ReactComponent as Arrow } from '../../assets/images/redo2.svg'

import Button from '../layout/button/Button'

import PropTypes from 'prop-types'

class InvoiceItem extends Component {
    static propTypes = {
        invoice: PropTypes.object.isRequired,
        setCurrent: PropTypes.func.isRequired,
    }
    render() {
        const { number, saleDate, creationDate, contractor, price, isPaid, id } = this.props.invoice

               return (
            <tr>
                <td className='txt-center'>
                    <input type='checkbox'></input>
                </td>
                <td className='txt-center'>
                    <div onClick={() => this.props.setCurrent(this.props.invoice)} class='show-details' >
                        <Search height={14} width={14} />
                    </div>
                </td>
                <td className='txt-blue txt-bold'>{number}</td>
                <td className='txt-center'>{saleDate}</td>
                <td className='txt-center'>{creationDate}</td>
                <td className='txt-blue'>{contractor}</td>
                <td className='txt-right'>
                    <div className='txt-bold'>{Number.parseFloat(price).toFixed(2) + ' PLN'}</div>
                    <div className='txt-vsmall'>{isPaid ? "opłacono" : "nieopłacono"}</div>
                </td>
                <td className='txt-center'>
                    <Button class="btn btn-green btn-small" name='+ platność' />
                </td>
                <td>
                    <div className='container__flex-row'>
                        <Button class='btn btn-square' name={<Clock height={14} width={14} />} />
                        <Button class='btn btn-square' name={<Arrow height={14} width={14} />} />
                        <Button class='btn btn-square' name={<Printer height={14} width={14} />} />
                    </div>



                </td>
            </tr>
        )
    }
}

export default InvoiceItem
