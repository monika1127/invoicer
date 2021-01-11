import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'

export class Button extends Component {
    static propTypes = {
        class: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
    }
    render() {
        return (
        <button type={this.props.type} className={`${this.props.class}`} onClick={this.props.onClick}>
            {this.props.name}
        </button>
        )
        }
}

export default Button