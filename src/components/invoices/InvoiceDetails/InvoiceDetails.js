import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'

import TopBar from '../../layout/topBar/TopBar'
import Button from '../../layout/button/Button'
import Table from '../../layout/table/Table'

import { ReactComponent as Mail } from '../../../assets/images/mail.svg'
import { ReactComponent as Print } from '../../../assets/images/printer.svg'
import { ReactComponent as Set } from '../../../assets/images/cog.svg'
import { ReactComponent as Close } from '../../../assets/images/cross.svg'

import { contractorsSelector } from '../../../redux/contractors/selectors'
import { invoicesSelector } from '../../../redux/invoices/selectors'

const InvoiceDetails = ({
    invoices: { invoicesList },
    contractors: { contractorsList } }) => {

    const history = useHistory()
    const closeInvoiceDetails = () => history.push('/invoices')

    const { id } = useParams()
    const currentInvoice = invoicesList.find((inv) => inv.id.toString() === id)
    const currentContractor = contractorsList.find((c) => c.companyName === currentInvoice.contractor)

    const { street, post, NIP, city } = currentContractor
    const { saleDate, creationDate, contractor, price } = currentInvoice

    const VAT = 0.23
    const showVAT = (VAT * 100) + '%'
    const netto = Number.parseFloat(price / (1+VAT)).toFixed(2)

    const rabat = 0
    const poRabacie = Number.parseFloat(netto - rabat).toFixed(2)

    // table layout//
    const tableColumns = ['', "Nazwa towaru lub usługi", "CN/PKW", 'CTU', "Ilość", 'Jednostka', "Cena Jednostkowa netto", "Rabat", 'Po rabacie', "Wartość Netto", 'VAT']
    const tableData =
        <tr>
            <td>1.</td>
            <td>Name of product or service</td>
            <td></td>
            <td className='table__txt--center'>-</td>
            <td className='table__txt--center'>1</td>
            <td className='table__txt--center'>usługa</td>
            <td className='table__txt--right'>{netto} PLN</td>
            <td className='table__txt--center'>{rabat}</td>
            <td className='table__txt--right'>{poRabacie} PLN</td>
            <td className='table__txt--right'>{poRabacie} PLN</td>
            <td className='table__txt--right'>{showVAT}</td>
        </tr>

    return (
        <div className='card card--large'>
            <TopBar color='neutral' title="Szczegóły">
                <Link to='/invoices'>
                    <Button color='dark-neutral' size='square' onClick={closeInvoiceDetails}>
                        <Close height={12} width={12} />
                    </Button>
                </Link>
            </TopBar>


            <Fragment>
                <div className='invoice-details__section'>
                    <div className='invoice-details__main-container'>
                        <div className='invoice-details__container'>
                            <h4 className='contractor__title'>Nabywca</h4>
                            <div className='contractor__title'>
                                <p className='contractor__name'>{contractor}</p>
                                <p>{street}</p>
                                <p>{post} {city}</p>
                                <p>NIP: {NIP}</p>
                            </div>
                        </div>
                        <div className='invoice-details__container invoice-details__container--dates'>
                            <div className='date__container'>
                                <h4 className='date__title'>Data wystawienia</h4>
                                <div>{creationDate}</div>
                            </div>
                            <div className='date__container'>
                                <h4 className='date__title'>Data sprzedaży</h4>
                                <div>{saleDate}</div>
                            </div>
                            <div className='date__container'>
                                <h4 className='date__title'>Termin płatności</h4>
                                <div>{saleDate}</div>
                            </div>
                        </div>
                        <div className='invoice-details__container'>
                            <h4 className='date__title'>Format daty</h4>
                            <div>dzienny</div>
                        </div>
                    </div>
                </div>
                <div className='invoice-details__section'>
                    <Table columns={tableColumns} data={tableData} />
                </div>
                <div className='invoice-details__section'>
                    <div className='invoice-details__summary'>
                        <h2>Podsumowanie faktury</h2>
                        <div className='summary__item'>
                            <h3 className='summary__item--height'>Razem Netto</h3>
                            <div>{poRabacie}</div>
                        </div>
                        <div className='summary__item'>
                            <h3 className='summary__item--height'>VAT</h3>
                            <div>{Number.parseFloat(price-netto).toFixed(2)}</div>
                        </div>
                        <div className='summary__item'>
                            <h3 className='summary__item--height'>Razem Brutto</h3>
                            <div className='summary__item--highlited'>{Number.parseFloat(price).toFixed(2)} PLN</div>
                        </div>
                        <Button color="secondary" size="full"  >
                            <div className="invoice-details__btn">
                                <div>
                                    <Print width={16} height={16} />
                                    <p className='invoice-details__btn-text'>Wydrukuj / zapisz</p>
                                </div>
                                <Set width={16} height={16} />
                            </div>
                        </Button>
                        <Button color="neutral" size='full'>
                            <div className='invoice-details__btn'>
                                <Mail width={16} height={16} />
                                <p className='invoice-details__btn-text'> Wyślij wiadomość</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    invoices: invoicesSelector(state),
    contractors: contractorsSelector(state)
})

export default connect(mapStateToProps)(InvoiceDetails)
