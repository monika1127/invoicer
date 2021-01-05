import React, { Component, Fragment } from 'react'
import InvoiceItem from './InvoiceItem'
import Spinner from '../layout/Spinner'

export class InvoicesList extends Component {
    state = {
        invoices: [],
        loading: false
    }

    componentDidMount (){
        this.setState({loading: true})
        fetch('http://localhost:5000/invoices')
        .then(res => res.json())
        .then(json => this.setState({ invoices: json, loading: false }))

    }

    render() {
        return (
            <Fragment>
                <div className='title__topbar-green'>
                    <div>Faktury</div>
                </div>
              <div className='table__container'>
                {this.state.loading ? <Spinner /> :
                <table className='table__invoices'>
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
                                invoice={invoice}/>)}

                        </tbody>
                </table>
    }
              </div>
            </Fragment>
        )
    }
}

export default InvoicesList
