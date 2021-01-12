import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../layout/button/Button'

import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer-black.svg'
import { ReactComponent as Arrow } from '../../assets/images/redo2.svg'
class InvoiceItem extends Component {
    static propTypes = {
        invoice: PropTypes.object.isRequired,
        setCurrent: PropTypes.func.isRequired,
    }
    render() {
        const { number, saleDate, creationDate, contractor, price, isPaid } = this.props.invoice

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
                    <Button size="small" color="green">płatność</Button>
                </td>
                <td>
                    <div className='container__flex-row'>
                        <Button size='square' >
                            <Clock height={14} width={14} />
                        </Button>
                        <Button size='square'>
                            <Arrow height={14} width={14} />
                        </Button>
                        <Button size='square'>
                            <Printer height={14} width={14} />
                        </Button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default InvoiceItem
