import React, { Component, Fragment } from 'react'
import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner/Spinner'
import TopBar from '../layout/topBar/TopBar'
import InvoiceDetails from './InvoiceDetails/InvoiceDetails'
import './invoices.css'

export class InvoicesList extends Component {
    state = {
        invoices: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('http://localhost:5000/invoices')
            .then(res => res.json())
            .then(json => this.setState({ invoices: json, loading: false }))
    }


    render() {
        const table =  <table className='table__invoices'>
        <thead>
            <tr className='table__header' >
                <th></th>
                <th></th>
                <th>Numer</th>
                <th>Data Sprzedaży</th>
                <th>Data Wystawienia</th>
                <th>Kontrahent</th>
                <th>Brutto</th>
                <th>Pozostałe</th>
                <th>Operacje</th>
            </tr>
        </thead>
        <tbody>
            {this.state.invoices.map(invoice => <InvoiceItem
                key={invoice.id}
                invoice={invoice} />)}
        </tbody>
    </table>
        return (
            <Fragment>
                <div className='section'>
                    <TopBar topbarClass='topbar-green' title='Faktury' />
                    <div className='table__container'>
                        {this.state.loading ? <Spinner /> : table}
                    </div>
                </div>
                <div className='section'>
                    <InvoiceDetails />
                </div>
            </Fragment>
        )
    }
}

export default InvoicesList