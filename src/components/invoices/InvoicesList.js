import React, { Component} from 'react'
import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import Table from '../layout/table/Table'

import './invoices.css'
export class InvoicesList extends Component {
    state = {
        invoices: [],
        loading: true,
    }

    componentDidMount() {
        fetch('http://localhost:5000/invoices')
            .then(res => res.json())
            .then(json => this.setState({ invoices: json, loading: false }))
    }

    render() {

        //dane do tablicy//
        const columns = ['', '', 'Numer', "Data Sprzedaży", 'Data Wystawienia', 'Kontrahent', 'Brutto', 'Pozostałe', 'Operacje']

        return (
            <div className='section'>
                <TopBar color='secondary' title='Faktury' />
                <div className='table__container'>
                    {this.state.loading
                    ? <Spinner />
                    : <Table
                        columns={columns}
                        data= {this.state.invoices.map(invoice => <InvoiceItem
                            key={invoice.id}
                            invoice={invoice} />)}
                    />}
                </div>
            </div>
        )
    }
}

export default InvoicesList
