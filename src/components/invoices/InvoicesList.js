import React, { useEffect } from 'react'
import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import Table from '../layout/table/Table'
import { getInvoices } from '../../redux/invoices/invoicesActions'
import { connect } from 'react-redux'


import './invoices.css'
const InvoicesList = ({ invoices: { invoicesList, loading }, getInvoices }) => {

    useEffect(() => {getInvoices()}, [])


    //dane do tablicy//
    const columns = ['', '', 'Numer', "Data Sprzedaży", 'Data Wystawienia', 'Kontrahent', 'Brutto', 'Pozostałe', 'Operacje']
    if(!invoicesList)return null

    return (
        <div className='section'>
            <TopBar color='secondary' title='Faktury' />
            <div className='table__container'>
                {loading
                    ? <Spinner />
                    : <Table
                        columns={columns}
                        data={invoicesList.map(invoice => <InvoiceItem
                            key={invoice.id}
                            invoice={invoice} />)}
                    />}
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    invoices: state.invoices
})

export default  connect(mapStateToProps, {getInvoices})(InvoicesList)
