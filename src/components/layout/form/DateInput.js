import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'
export class DateInput extends Component {
    static propTypes = {
        inputLabel: PropTypes.string,
        errorMsg: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
    }

    render() {
        const {
            inputLabel,
            name,
            onChange,
            value,
            errorMsg } = this.props

        return (
                <div className='form-body'>
                    <label className='input-label'>{inputLabel}</label>
                    <div>
                        <div className='input-field input-field__date'>
                            <DatePicker
                            onChange={(nextValue) => onChange(name, nextValue)} value={value} format="dd/MM/yyyy"
                            />
                        </div>
                        <div className='form__error'>{errorMsg}</div>
                    </div>
                </div>
        )
    }

}
export default DateInput
