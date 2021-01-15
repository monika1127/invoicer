import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'


export class DateInput extends Component {
    static propTypes = {
        connectiedWith: PropTypes.string,
        inputLabel: PropTypes.string,
        errorMsg: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
    }

    render() {
        const { connectiedWith,
            inputLabel,
            name,
            onChange,
            value,
            errorMsg } = this.props




            return (
                <div className='container-body'>
                    <div className='container-date'>
                        <label htmlFor={connectiedWith}>{inputLabel}</label>
                        <DatePicker
                            onChange={(nextValue)=>onChange(name, nextValue)} value={value} format="dd/MM/yyyy"
                            />
                    </div>
                    <div className='error'>{errorMsg}</div>
                </div>
            )
        }

    }
    export default DateInput
