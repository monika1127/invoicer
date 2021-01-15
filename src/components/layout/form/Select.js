import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './form.css'

export class Select extends Component {
    static propTypes = {
        connectiedWith: PropTypes.string,
        selectLabel: PropTypes.string,
        defaultOption: PropTypes.string,
        selectFormik: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
        errorMsg: PropTypes.string
    }

    render() {
        const {
            connectiedWith,
            selectLabel,
            defaultOption,
            selectFormik,
            options
        } = this.props

        return (
            <div className='container-body'>
                <div className='container'>
                    <label htmlFor={connectiedWith}>{selectLabel}</label>
                    <select {...selectFormik} >
                        <option value='' disabled >{defaultOption}</option>
                        {options.map((option, index)=> <option key={index} value={option.value}>{option.label}</option>)}
                    </select>
                </div>
                <div className='error'></div>
            </div>
        )
    }
}

export default Select
