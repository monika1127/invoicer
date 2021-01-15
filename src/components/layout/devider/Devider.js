import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './devider.css'

export class Devider extends Component {
    static propTypes = {
        color: PropTypes.string
    }

    render() {
        return (
            <div className={`devider ${this.props.color}`}> </div>
        )
    }
}

export default Devider
