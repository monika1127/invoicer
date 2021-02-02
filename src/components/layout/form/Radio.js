import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Radio extends Component {
    static propTypes = {
        radioLabel: PropTypes.string,
        options: PropTypes.array.isRequired,
        radioFormik: PropTypes.object,
        orientation: PropTypes.oneOf(['inline', 'list']),
        errorMsg: PropTypes.string,
    }

    render() {
        const {
            orientation,
            options,
            radioFormik,
            radioLabel,
            errorMsg } = this.props

        return (
            <div className={`form-body form_container--${orientation}`} role="group" aria-labelledby="my-radio-group">
                <div className={`radio-label-${orientation}`}>{radioLabel}
                    <div className='form__error-radio'>{errorMsg}</div>
                </div>
                <div className={`radio radio-${orientation}`}>
                    {options.map((option, index) => <label key={index}>
                        <input type="radio" {...radioFormik} value={option.value} checked={radioFormik.value === String(option.value)} />{option.text}</label>
                    )}
                </div>
            </div>
        )
    }
}

export default Radio

