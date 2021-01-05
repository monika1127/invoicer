import React, { Component } from 'react'
//imported SVG files
import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Clock } from '../../assets/images/clock2.svg'
import { ReactComponent as Printer } from '../../assets/images/printer.svg'
import { ReactComponent as Arrow } from '../../assets/images/redo2.svg'

import PropTypes from 'prop-types'

class InvoiceItem extends Component {

    render() {
        return (
            <tr>
                <td>
                    <input type='checkbox'></input>
                </td>
                <td>
                    <Search height={14} width={14} />
                </td>
                <td>{this.props.invoice.number}</td>
                <td>{this.props.invoice.saleDate}</td>
                <td>{this.props.invoice.creationDate}</td>
                <td>{this.props.invoice.contractor}</td>
                <td>
                    <div>
                        {this.props.invoice.price}
                    </div>
                    <div>
                        {this.props.invoice.isPaid ? "opłacono": "nieopłacono"}
                    </div>
                </td>
                <td>
                    <button className="btn__primary btn-green">+ platność</button>

                </td>
                <td>
                    <div className='container__flex-row'>
                        <div className='btn-squere btn-grey'>
                            <Clock height={14} width={14} />
                        </div>
                        <div className='btn-squere btn-grey'>
                            <Arrow height={14} width={14} />
                        </div>
                        <div className='btn-squere btn-grey'>
                            <Printer height={14} width={14} />
                        </div>
                    </div>



                </td>
            </tr>
        )
    }
}

export default InvoiceItem
