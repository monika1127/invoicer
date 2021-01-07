import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TopBar from '../../layout/topBar/TopBar'
import Button from '../../layout/button/Button'
import './invoiceDetails.css'
export default class InvoiceDetails extends Component {

    static propTypes = {
        contractorInfo: PropTypes.object.isRequired,
        invoice: PropTypes.object.isRequired,
    }



    render() {
const {companyName, street, post, tel, NIP, city}=this.props.contractorInfo
const { number, saleDate, creationDate, contractor, price, isPaid, id } = this.props.invoice
        return (
            <Fragment>
                <TopBar topbarClass='topbar topbar-grey' title='szczegóły' />
                <div className='invoice__details-section'>
                    <div className='container-flex-main'>
                        <div className='container-flex'>
                            <h4 >Nabywca</h4><div>

                                <div>{this.props.invoice.contractor}</div>
                                <div>test:{this.props.contractorInfo.companyName}</div>
                            </div>
                        </div>
                        <div>
                            <div className='container-flex'>
                                <h4>Data wystawienia</h4>
                                <div>11/11/11</div>
                            </div>
                            <div className='container-flex'>
                                <h4>Data wystawienia</h4>
                                <div>{creationDate}</div>
                            </div>
                            <div className='container-flex'>
                                <h4>Data sprzedaży</h4>
                                <div>{saleDate}</div>
                            </div>
                            <div className='container-flex'>
                                <h4>Data wystawienia</h4>
                                <div>11/11/11</div>
                            </div>
                        </div>
                        <div className='container-flex'>
                            <h4>Data wystawienia</h4>
                            <div>11/11/11</div>
                        </div>
                    </div>
                </div>
                <div className='invoice__details-section'>
                    <table className='table__invoices'>
                        <thead>
                            <tr className='table__header' >
                                <th></th>
                                <th>Nazwa towaru lub usługi</th>
                                <th>CN/PKW</th>
                                <th>CTU</th>
                                <th>Ilość</th>
                                <th>Jednostka</th>
                                <th>Cena Jednostkowa netto</th>
                                <th>Rapat</th>
                                <th>Po rabacie</th>
                                <th>Wartość Netto</th>
                                <th>VAT</th>
                            </tr>
                        </thead>

                    </table>
                </div>
                <div className='invoice__details-section'>
                    <div className='summary'>
                        <h2>Podsumowanie faktury</h2>
                        <div className='container-flex text-separate'>
                            <h3>Razem Netto</h3>
                            <div>100</div>
                        </div>
                        <div className='container-flex text-separate'>
                            <h3>VAT</h3>
                            <div>20</div>
                        </div>
                        <div className='container-flex text-separate'>
                            <h3>Razem Brutto</h3>
                            <div>20</div>
                        </div>
                        <Button class='btn btn-green btn-full' name='wydrukuj / zapisz' />
                        <Button class='btn btn-grey btn-full' name='wyślij email' />
                    </div>

                </div>
            </Fragment>
        )
    }
}
