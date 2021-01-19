import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        errorMsg: PropTypes.string,
    }

    render() {
        const { inputConnection,
            inputLabel,
            inputId,
            inputType,
            inputPattern,
            inputPlaceholder,
            inputFormik,
            errorMsg } = this.props

        return (
                <div className='form-body'>
                    <label htmlFor={inputConnection}>{inputLabel}</label>
                    <div className='input-field'>
                        <input
                            id={inputId}
                            type={inputType}
                            pattern={inputPattern}
                            placeholder={inputPlaceholder}
                            {...inputFormik} />
                        <div className='error'>{errorMsg}</div>
                    </div>
                </div>
        )
    }
}

export default Input
