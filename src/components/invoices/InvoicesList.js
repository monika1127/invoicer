import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getInvoices } from '../../redux/invoices/invoicesActions'
import { getContractors } from '../../redux/contractors/contractorsActions'
import { invoicesSelector } from '../../redux/invoices/selectors'

import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import Table from '../layout/table/Table'

import './invoices.css'

const InvoicesList = ({
    invoices: { invoicesList, loading },
    contractors:{contractorsList},
    getInvoices,
    getContractors
}) => {

    useEffect(() => { getInvoices() }, [])
    useEffect(() => { getContractors() }, [])

    //dane do tablicy//
    const columns = ['', '', 'Numer', "Data Sprzedaży", 'Data Wystawienia', 'Kontrahent', 'Brutto', 'Pozostałe', 'Operacje']
    if (!invoicesList || !contractorsList) return null

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
                            invoice={invoice}
                         />)}
                    />}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    invoices: invoicesSelector(state),
    contractors: state.contractors
})

export default connect(mapStateToProps, { getInvoices, getContractors })(InvoicesList)
