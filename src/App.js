
import { Fragment } from 'react';
import './App.css';
import InvoicesList from './components/invoices/InvoicesList'
import Navbar from './components/layout/navbar/Navbar'


function App() {
  return (
    <Fragment>
      <Navbar />
      <InvoicesList />
    </Fragment>
  );
}

export default App;
