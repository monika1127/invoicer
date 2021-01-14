import React, { Component } from 'react'
import './alert.css'

export default class Alert extends Component {
   state={
       message: ''
   }
    render() {
        return (<div className='alert'>{this.state.message}</div>
        )
    }
}
