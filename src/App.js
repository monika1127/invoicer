import { Fragment } from 'react';

import InvoicesList from './components/invoices/InvoicesList'
import Navbar from './components/layout/navbar/Navbar'
import NewInvoiceForm from './components/newInvoice/NewInvoiceForm'
import Alert from './components/layout/alert/Alert'

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Alert>
        <InvoicesList />
        <NewInvoiceForm />
      </Alert>
    </Fragment>
  );
}

export default App;
