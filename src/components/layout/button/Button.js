import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'

export default class Button extends Component {
    static propTypes = {
        size: PropTypes.oneOf(["small", "large", "full"]),
        color: PropTypes.oneOf(["green", "grey", "dark-grey", "red"]),
        label: PropTypes,
        onClick: PropTypes.func,
        type: PropTypes.string
    }
    render() {

        const {type, onClick, size, color}=this.props
        return (
            <button
                type={type}
                onClick={onClick}
                className={`btn btn-${size} btn-${color}`}
            >
                {this.props.children}
            </button>
        )
    }
}
