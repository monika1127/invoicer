import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../layout/button/Button'

import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer.svg'
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
                    <div onClick={() => this.props.setCurrent(this.props.invoice)} className='show-details' >
                        <Search width={16} height={16}/>
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
