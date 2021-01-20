import React, { Fragment, Component } from 'react';

import InvoicesList from './components/invoices/InvoicesList'
import Navbar from './components/layout/navbar/Navbar'
import NewInvoiceForm from './components/newInvoice/NewInvoiceForm'
import Alert from './components/layout/alert/Alert'
import User from './components/User/User'

import './App.css';

class App extends Component {
  state = {
    isLogged: false,
    user: ''
  }

  render() {
    const logIn = () => {
      fetch(`http://localhost:5000/users/`)
      .then(res => res.json())
      .then(json => this.setState({user: json, isLogged: true}))
    }
    const logOut = () => {
      this.setState({user: '', isLogged: false})
    }

    return (
      <Fragment>
        <Navbar
          logIn={logIn}
          logOut={logOut}
          isLogged={this.state.isLogged}
          user={this.state.user} />
        {this.state.isLogged &&
          <Alert>
            <User
              user={this.state.user} />
            <InvoicesList />
            <NewInvoiceForm />
          </Alert>}

      </Fragment>
    );
  }
}

export default App;
