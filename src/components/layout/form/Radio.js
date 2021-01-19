import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './form.css'

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
            <div className={`form-body container-${orientation}`} role="group" aria-labelledby="my-radio-group">
                    <div className={`radio__label-${orientation}`}>{radioLabel}
                        <div className='error-radio'>{errorMsg}</div>
                    </div>
                    <div className={`radio radio-${orientation}`}>
                        {options.map((option, index) => <label key={index}>
                            <input type="radio" {...radioFormik} value={option.value} />{option.text}</label>
                        )}
                    </div>
                </div>
        )
    }
}

export default Radio

