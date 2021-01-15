import React, { Component, Fragment } from 'react'
import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import Table from '../layout/table/Table'
import InvoiceDetails from './InvoiceDetails/InvoiceDetails'
import './invoices.css'

export class InvoicesList extends Component {
    state = {
        invoices: [],
        loading: true,
        current: null,
        contractorInfo: null
    }

    componentDidMount() {
        fetch('http://localhost:5000/invoices')
            .then(res => res.json())
            .then(json => this.setState({ invoices: json, loading: false }))
    }

    render() {
        const setCurrent = (invoice) => {
            fetch(`http://localhost:5000/contractors/`)
                .then(res => res.json())
                .then(json => {
                    const contractorInfo = json.find(i => i.companyName === invoice.contractor)
                    this.setState({ current: invoice, contractorInfo })
                })
        }


        //close invoice details function //
        const closeInvoiceDetails = ()=>{
            this.setState({ current: null, contractorInfo: null })
        }

        //dane do tablicy//
        const columns = ['', '', 'Numer', "Data Sprzedaży", 'Data Wystawienia','Kontrahent', 'Brutto', 'Pozostałe', 'Operacje']
        const tableData = this.state.invoices.map(invoice => <InvoiceItem
            key={invoice.id}
            invoice={invoice}
            setCurrent={setCurrent} />)

        console.log(tableData)

        return (
            <Fragment>
                <div className='section'>
                    <TopBar color='green' title='Faktury' />
                    <div className='table__container'>
                        {this.state.loading ? <Spinner /> : <Table
                        columns={columns}
                        data={tableData} />}
                    </div>
                </div>
                <div className='section'>
                    {this.state.current && <InvoiceDetails
                        invoice={this.state.current}
                        contractorInfo={this.state.contractorInfo}
                        closeInvoiceDetails={closeInvoiceDetails}/> }
                </div>
            </Fragment>
        )
    }
}

export default InvoicesList
