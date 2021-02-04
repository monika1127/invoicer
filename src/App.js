import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import { userSelector } from './redux/user/selectors';
import Alert from './components/layout/alert/Alert'
import InvoicesList from './components/invoices/InvoicesList'
import InvoiceDetails from './components/invoices/InvoiceDetails/InvoiceDetails';
import Navbar from './components/layout/navbar/Navbar'
import NewContractorForm from './components/newContractor/NewContractorForm';
import NewInvoiceForm from './components/newInvoice/NewInvoiceForm'
import User from './components/User/User'

import './stylesheet/application.css';

const App =({user: {isLogged}})=> {
    return (
        <Router>
          <Navbar />
          {isLogged &&
            <Alert>
              <Switch>
                <Route exact path='/user' component={User} />
                <Route exact path='/invoices' component={InvoicesList} />
                <Route exact path='/invoices/new' component={NewInvoiceForm} />
                <Route exact path='/invoices/:id' component={InvoiceDetails} />
                <Route exact path='/contractor/new' component={NewContractorForm} />
              </Switch>
            </Alert>}
        </Router>
    );
  }

const mapStateToProps = state =>({
  user: userSelector(state)
})
export default connect(mapStateToProps)(App);
