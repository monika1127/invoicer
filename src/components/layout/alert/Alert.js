import React, { Component } from 'react'
import { AlertProvider } from '../../../context/alert/alertContext'
import './alert.css'
import Button from '../button/Button'
import { ReactComponent as Close } from '../../../assets/images/cross.svg'

export default class Alert extends Component {
    state = {
        isActive: false,
        message: '',
        type: ''
    }

    setAlert = (message, type) => {
        this.setState({ message, type, isActive: true })
        this.state.type === 'pass' && setTimeout(() => this.setState({ isActive: false, message: '', type: '' }), 3000)
    }

    closeAlert = () => {
        this.setState({ isActive: false, message: '', type: '' })
    }

    render() {
        return (
            <AlertProvider value={{ setAlertMessage: this.setAlert }}>
                {this.state.isActive &&
                    <div className={`alert ${this.state.type}`}>
                        <p className='alert-msg'>{this.state.message}</p>
                        {this.state.type === 'fail' &&
                            <Button color='red' size='square' onClick={this.closeAlert}>
                                <Close height={12} width={12} />
                            </Button>
                        }
                    </div>}
                <div>{this.props.children}</div>
            </AlertProvider>
        )
    }
}
