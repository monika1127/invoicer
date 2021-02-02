import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Table extends Component {

    static propTypes = {
        columns: PropTypes.array.isRequired,
    }
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr className='table__header' >
                        {this.props.columns.map((column, index) => <th key={index}>{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data}
                </tbody>
            </table>
        )
    }
}

export default Table