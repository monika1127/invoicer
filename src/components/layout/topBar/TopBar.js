import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './topBar.css'

export class TopBar extends Component {
    static propTypes = {
        topbarClass: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }
    render() {
        return (
        <div className={`topbar ${this.props.topbarClass}`}>
            <div>{this.props.title}</div>
        </div>
        )
        }
}

export default TopBar