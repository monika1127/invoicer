import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './invoiceDetails.css'

import TopBar from '../../layout/topBar/TopBar'
import Button from '../../layout/button/Button'
import Table from '../../layout/table/Table'

import { ReactComponent as Mail } from '../../../assets/images/mail.svg'
import { ReactComponent as Print } from '../../../assets/images/printer.svg'
import { ReactComponent as Set } from '../../../assets/images/cog.svg'
import { ReactComponent as Close } from '../../../assets/images/cross.svg'
export default class InvoiceDetails extends Component {

    static propTypes = {
        contractorInfo: PropTypes.object.isRequired,
        invoice: PropTypes.object.isRequired,
        closeInvoiceDetails: PropTypes.func.isRequired,
    }
    render() {

        //destrukturyzacja propsów //
        const { street, post, NIP, city } = this.props.contractorInfo
        const { saleDate, creationDate, contractor, price } = this.props.invoice

        //dane pomocnicze -które powinny się zaciągać z jakiś baz danych których nie mam //
        const VAT = 0.23
        const showVAT = (VAT * 100) + '%'
        const netto = Number.parseFloat(price * (1 + VAT)).toFixed(2)

        const rabat = 0
        const poRabacie = Number.parseFloat(netto - rabat).toFixed(2)

        //table layout//
        const tableColumns = ['', "Nazwa towaru lub usługi", "CN/PKW", 'CTU', "Ilość", 'Jednostka', "Cena Jednostkowa netto", "Rabat", 'Po rabacie', "Wartość Netto", 'VAT']
        const tableData =
            <tr>
                <td>1.</td>
                <td>tekst dodać do bazy danych jakiś...</td>
                <td></td>
                <td className='txt-center'>-</td>
                <td className='txt-center'>1</td>
                <td className='txt-center'>usługa</td>
                <td className='txt-right'>{netto} PLN</td>
                <td className='txt-center'>{rabat}</td>
                <td className='txt-right'>{poRabacie} PLN</td>
                <td className='txt-right'>{poRabacie} PLN</td>
                <td className='txt-right'>{showVAT}</td>
            </tr>

        return (
            <Fragment>
                <TopBar color='grey' title="Szczegóły" cl=' topbar-invoiceDetails'>
                    <div>
                        <Button color='dark-grey' size='square' onClick={this.props.closeInvoiceDetails}>
                            <Close height={12} width={12} />
                        </Button>
                    </div>
                </TopBar>
                <div className='invoice__details-section'>
                    <div className='container-flex-main'>
                        <div className='container-flex'>
                            <h4 >Nabywca</h4>
                            <div className='address'>
                                <p className='txt-blue'>{contractor}</p>
                                <p>{street}</p>
                                <p>{post} {city}</p>
                                <p>NIP: {NIP}</p>
                            </div>
                        </div>
                        <div className='container-flex container-flex-date'>
                            <div className='one-line'>
                                <h4>Data wystawienia</h4>
                                <div>{creationDate}</div>
                            </div>
                            <div className='one-line'>
                                <h4>Data sprzedaży</h4>
                                <div>{saleDate}</div>
                            </div>
                            <div className='one-line'>
                                <h4>Termin płatności</h4>
                                <div>{saleDate}</div>
                            </div>
                        </div>
                        <div className='container-flex'>
                            <h4>Format daty</h4>
                            <div>dzienny</div>
                        </div>
                    </div>
                </div>
                <div className='invoice__details-section'>
                    <Table columns={tableColumns} data={tableData} />
                </div>
                <div className='invoice__details-section'>
                    <div className='summary'>
                        <h2>Podsumowanie faktury</h2>
                        <div className='container-flex text-separate'>
                            <h3>Razem Netto</h3>
                            <div>{poRabacie}</div>
                        </div>
                        <div className='container-flex text-separate'>
                            <h3>VAT</h3>
                            <div>{Number.parseFloat(poRabacie - price).toFixed(2)}</div>
                        </div>
                        <div className='container-flex text-separate'>
                            <h3>Razem Brutto</h3>
                            <div className='txt-highlited'>{Number.parseFloat(price).toFixed(2)} PLN</div>
                        </div>
                        <Button color="green" size="full"  >
                            <div className="invoiceDetails-btn">
                                <div>
                                    <Print width={16} height={16} />
                                    <p>Wydrukuj / zapisz</p>
                                </div>
                                <Set width={16} height={16}/>
                            </div>
                        </Button>
                        <Button color="grey" size='full'>
                            <div className='invoiceDetails-btn'>

                                <Mail width={16} height={16}/>
                                <p> Wyślij wiadomość</p>

                            </div>
                        </Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
