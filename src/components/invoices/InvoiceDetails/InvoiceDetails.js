import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TopBar from '../../layout/topBar/TopBar'
import Button from '../../layout/button/Button'
import Table from '../../layout/table/Table'

import './invoiceDetails.css'

import { ReactComponent as Mail } from '../../../assets/images/mail.svg'
import { ReactComponent as Print } from '../../../assets/images/printer.svg'
import { ReactComponent as Set } from '../../../assets/images/cog.svg'
export default class InvoiceDetails extends Component {

    static propTypes = {
        contractorInfo: PropTypes.object.isRequired,
        invoice: PropTypes.object.isRequired,
        closeInvoiceDetails: PropTypes.func.isRequired,
    }



    render() {

        //destrukturyzacja propsów //
        const { companyName, street, post, tel, NIP, city } = this.props.contractorInfo
        const { number, saleDate, creationDate, contractor, price, isPaid, id } = this.props.invoice


        //dane pomocnicze -które powinny się zaciągać z jakiś baz danych których nie mam //
        const VAT = 0.23
        const showVAT = (VAT * 100) + '%'
        const netto = Number.parseFloat(price / (1 + VAT)).toFixed(2)

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


        //button layout //
        const buttonSaveValue =
            <div>
                <div>
                    <Print height={12} width={12} />
                    <p>Wydrukuj / zapisz</p>
                </div>
                <Set height={12} width={12} />
            </div>
        const buttonMailValue =
            <div>
                <Mail height={12} width={12} />
                <p> Wyślij wiadomość</p>
            </div>

        // topbar layout //
        const topBarValue =
            <div>
                <div>Szczegóły</div>
                <Button class='btn btn-close' name='x' onClick={this.props.closeInvoiceDetails}/>
            </div>



        return (
            <Fragment>
                <TopBar topbarClass='topbar topbar-grey topbar-invoiceDetails' title={topBarValue} />
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
                            <div>{Number.parseFloat(price - poRabacie).toFixed(2)}</div>
                        </div>
                        <div className='container-flex text-separate'>
                            <h3>Razem Brutto</h3>
                            <div className='txt-highlited'>{Number.parseFloat(price).toFixed(2)} PLN</div>
                        </div>
                        <Button class='btn btn-green btn-full invoideDetails-btn ' name={buttonSaveValue} />
                        <Button class='btn btn-grey btn-full invoideDetails-btn' name={buttonMailValue} />
                    </div>

                </div>
            </Fragment>
        )
    }
}
