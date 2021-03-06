import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getInvoices } from '../../redux/invoices/invoicesActions'
import { getContractors } from '../../redux/contractors/contractorsActions'
import { contractorsSelector } from '../../redux/contractors/selectors'
import { invoicesSelector } from '../../redux/invoices/selectors'

import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import Table from '../layout/table/Table'

const InvoicesList = ({
    invoices: { invoicesList, loading },
    contractors:{contractorsList},
    getInvoices,
    getContractors
}) => {

    useEffect(() => { getInvoices() }, [getInvoices])
    useEffect(() => { getContractors() }, [getContractors])

    //dane do tablicy//
    const columns = ['', '', 'Numer', "Data Sprzedaży", 'Data Wystawienia', 'Kontrahent', 'Brutto', 'Pozostałe', 'Operacje']
    if (!invoicesList || !contractorsList) return null

    return (
        <div className='card card--large'>
            <TopBar color='secondary' title='Faktury' />
            <div className='invoices__table-container'>
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
    contractors: contractorsSelector(state)
})

export default connect(mapStateToProps, { getInvoices, getContractors })(InvoicesList)
