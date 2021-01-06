import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'

export class Button extends Component {
    static propTypes = {
        class: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }
    render() {
        return (
        <button className={`${this.props.class}`}>
            {this.props.name}
        </button>
        )
        }
}

export default Button