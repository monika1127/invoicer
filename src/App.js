
import { Fragment } from 'react';

import InvoicesList from './components/invoices/InvoicesList'
import Navbar from './components/layout/navbar/Navbar'
import NewInvoiceForm from './components/newInvoice/NewInvoiceForm'

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <InvoicesList />
      <NewInvoiceForm />
    </Fragment>
  );
}

export default App;
