import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Input extends Component {
    static propTypes = {
        inputLabel: PropTypes.string,
        inputId: PropTypes.string.isRequired,
        inputType: PropTypes.string.isRequired,
        inputPattern: PropTypes.string,
        inputPlaceholder: PropTypes.string,
        inputFormik: PropTypes.object,
        errorMsg: PropTypes.string,
    }

    render() {
        const {
            inputLabel,
            inputId,
            inputType,
            inputPattern,
            inputPlaceholder,
            inputFormik,
            errorMsg } = this.props

        return (
                <div className='form-body'>
                    <label className='input-label' htmlFor={inputId}>{inputLabel}</label>
                    <div >
                        <input
                            className='input-field'
                            id={inputId}
                            type={inputType}
                            pattern={inputPattern}
                            placeholder={inputPlaceholder}
                            {...inputFormik} />
                        <div className='form__error'>{errorMsg}</div>
                    </div>
                </div>
        )
    }
}

export default Input
