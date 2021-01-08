import React, {  Component } from 'react'
import PropTypes from 'prop-types'
import './table.css'

class Table extends Component {

    static propTypes ={
        columns: PropTypes.array.isRequired,
    }

    render(){
        return (

<table className='table__invoices'>
            <thead>
                <tr className='table__header' >
                    {this.props.columns.map(column => <th>{column}</th>)}
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