import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/Button'
import './form.css'

export class Select extends Component {
    static propTypes = {
        selectLabel: PropTypes.string,
        defaultOption: PropTypes.string,
        selectFormik: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
        errorMsg: PropTypes.string,
        onClick: PropTypes.func,
    }

    render() {
        const {
            selectLabel,
            defaultOption,
            selectFormik,
            options,
            errorMsg,
            onClick
        } = this.props

        return (
            <div className='form-body'>
                <label >{selectLabel}</label>
                <div className='input-field input-field-select'>
                    <div className='add-btn-container'>
                        <select {...selectFormik} >
                            <option value='' disabled >{defaultOption}</option>
                            {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
                        </select>
                        <Button type='button' size='small' color="grey" onClick={onClick}>Dodaj</Button>
                    </div>
                    <div className='error'>{errorMsg}</div>
                </div>
            </div>
        )
    }
}

export default Select
