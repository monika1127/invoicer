import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'
import './form.css'
export class Input extends Component {
    static propTypes = {
        connectiedWith: PropTypes.string,
        inputLabel: PropTypes.string,
        inputId: PropTypes.string.isRequired,
        inputType: PropTypes.string.isRequired,
        inputPattern: PropTypes.string,
        inputPlaceholder: PropTypes.string,
        inputFormik: PropTypes.object,
        errorMsg:PropTypes.string,
    }

    render() {
        const {inputConnection,
            inputLabel,
            inputId,
            inputType,
            inputPattern,
            inputPlaceholder,
            inputFormik,
            errorMsg } = this.props

        return (
            <div className='container-body'>
            <div className='container'>
                <label htmlFor={inputConnection}>{inputLabel}</label>
                <input
                    id={inputId}
                    type={inputType}
                    pattern={inputPattern}
                    placeholder={inputPlaceholder}
                    {...inputFormik}>
                </input>

            </div>
            <div className='error'>{errorMsg}</div>
        </div>
        )
    }
}

export default Input
