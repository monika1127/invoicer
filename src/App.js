import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Alert from './components/layout/alert/Alert'
import InvoicesList from './components/invoices/InvoicesList'
import InvoiceDetails from './components/invoices/InvoiceDetails/InvoiceDetails';
import Navbar from './components/layout/navbar/Navbar'
import NewInvoiceForm from './components/newInvoice/NewInvoiceForm'
import User from './components/User/User'

import './App.css';
import NewContractorForm from './components/newContractor/NewContractorForm';
class App extends Component {
  state = {
    isLogged: false,
    user: {}
  }

  render() {
    const logIn = () => {
      fetch(`http://localhost:5000/users/`)
        .then(res => res.json())
        .then(json => this.setState({ user: json, isLogged: true }))
    }
    const logOut = () => {
      this.setState({ user: {}, isLogged: false })
    }

    return (
      <Router>
      <Navbar
      logIn={logIn}
      logOut={logOut}
      isLogged={this.state.isLogged}
      user={this.state.user} />
        {this.state.isLogged &&
          <Alert>
            <Switch>
              <Route exact path='/user' render={(props) => <User user={this.state.user} />} />
              <Route exact path='/invoices'>
                <InvoicesList />
              </Route>
              <Route exact path='/invoices/new' component={NewInvoiceForm} />
              <Route exact path='/invoices/:id' component={InvoiceDetails} />
              <Route exact path='/contractor/new' component={NewContractorForm} />
            </Switch>
          </Alert>}
      </Router>
    );
  }
}

export default App;
