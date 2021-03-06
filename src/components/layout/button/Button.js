import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Button extends Component {
    static propTypes = {
        size: PropTypes.oneOf(["small", "large", "full", "square"]),
        color: PropTypes.oneOf(["secondary", "neutral", "dark-neutral", "danger"]),
        label: PropTypes.string,
        onClick: PropTypes.func,
        type: PropTypes.string
    }
    render() {

        const {type, onClick, size, color}=this.props
        return (
            <button
                type={type ? type : 'button'}
                onClick={onClick}
                className={`btn btn-${size} btn-${color}`}
            >
                {this.props.children}
            </button>
        )
    }
}
