import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './topBar.css'

export class TopBar extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className={`topbar topbar-${this.props.color}`}>
                <div>{this.props.title}</div>
                {this.props.children}
            </div>
        )
    }
}

export default TopBar