import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Devider extends Component {
    static propTypes = {
        color: PropTypes.string
    }

    render() {
        return (
            <div className={`devider devider--${this.props.color}`}> </div>
        )
    }
}

export default Devider
