import React, { Component, Fragment, useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import './newInvoiceForm.css'
import TopBar from '../layout/topBar/TopBar'
import Button from '../layout/button/Button'

const NewInvoiceForm = () => {

    const [contractors, setContractors] = useState([])

    const formik = useFormik({
        initialValues: {
            number: '',
            price: '',
            saleDate: '',
            isPaid: '',
            contractor: '',
            type: ''
        },
        validationSchema: Yup.object({
            number: Yup.string()
                .max(10, '! Improper form number')
                .required('! This field is required'),
            price: Yup.number()
                .max(100000.00, '! Improper form number')
                .min(0.00, '! Improper form number')
                .required('! This field is required'),
            saleDate: Yup.string()
                .max(16, 'Improper  format')
                .required('! This field is required'),
            isPaid: Yup.boolean()
                .required('zaznacz poprawne'),
            type: Yup.string()
                .required('zaznacz poprawne'),
            contractor: Yup.string()
                .required('wybierz firmę'),
        }),
        onSubmit: values => {
            const invoice = { ...values, creationDate: values.saleDate}
            fetch(`http://localhost:5000/invoices/`, {method: 'POST', headers:{"Content-type": "application/json"},body: JSON.stringify(invoice)})
            .then(res => res.json())
            .then(res=> console.log(res))


            formik.resetForm();
        }
    });

    useEffect(() => {
        fetch(`http://localhost:5000/contractors/`)
            .then(res => res.json())
            .then(json => { setContractors(json) })
    }, [])


    return (
        <div className='form__container'>
            <TopBar title='Zarejestruj nową fakturę:' topbarClass='topbar topbar-green' />
            <div className='form__container-body'>
                <form onSubmit={formik.handleSubmit}>

                    <div className='field-container'>
                        <div className='form-field'>
                            <label htmlFor='number'>Numer faktury</label>
                            <input pattern="\d{1,2}/\d{4}" placeholder='ex. 11/2020' id='number' type='text' {...formik.getFieldProps('number')} >
                            </input>
                        </div>
                        <div className='error'>{formik.touched.number && formik.errors.number ? formik.errors.number : null}</div>
                    </div>

                    <div className='field-container'>
                        <div className='form-field'>
                            <label htmlFor='price'>Kwota</label>
                            <input min='0.00'step="0.01"id='price' type='number' {...formik.getFieldProps('price')} ></input>
                                                    </div>
                        <div className='error'>{formik.touched.price && formik.errors.price ? formik.errors.price : null}</div>
                    </div>

                    <div className='field-container'>
                        <div className='form-field'>
                            <label htmlFor='saleDate'>Data sprzedaży</label>
                            <input id='saleDate' type='text' pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder='dd/mm/yyyy'{...formik.getFieldProps('saleDate')} >
                            </input>
                        </div>
                        <div className='error'>{formik.touched.saleDate && formik.errors.saleDate ? formik.errors.saleDate : null}</div>
                    </div>

                    <div className='field-container'>
                        <div className='form-field'>
                            <label htmlFor='contractor'>Kontrahent</label>
                            <select {...formik.getFieldProps('contractor')} >
                                <option value='' disabled >Wybierz firmę</option>
                                {contractors.map(contractor => <option
                                    key={contractor.id}
                                    value={contractor.companyName}>{contractor.companyName}</option>)}
                            </select>
                            <div className='new-contractor'> +add</div>
                        </div>
                        <div className='error'>{formik.touched.contractor && formik.errors.contractor ? formik.errors.contractor : null}</div>
                    </div>

                    <div className='form-field -type' role="group" aria-labelledby="my-radio-group">
                        <div className='invoice-type-label'>Typ faktury
                        <div className='error-radio'>{formik.touched.type && formik.errors.type ? formik.errors.type : null}</div>
                        </div>
                        <div className='invoice-type'>
                            <label>
                                <input type="radio" {...formik.getFieldProps('type')} value={'FV sprzedaż towarów i usług'} />FV sprzedaż towarów i usług
                            </label>
                            <label>
                                <input type="radio" {...formik.getFieldProps('type')} value={'XX wykonanie usługi'} />XX wykonanie usługi
                             </label>
                            <label>
                                <input type="radio" {...formik.getFieldProps('type')} value={'RR sprzedaż towaru'} />RR sprzedaż towaru
                             </label>
                        </div>
                    </div>

                    <div className='form-field-paid' role="group" aria-labelledby="my-radio-group">
                        <div className='paid-label' >Czy faktura zastła już opłacona?</div>
                        <label>
                            <input type="radio" {...formik.getFieldProps('isPaid')} value={true} />TAK
                        </label>
                        <label>
                            <input type="radio" {...formik.getFieldProps('isPaid')} value={false} />NIE
                        </label>
                    </div>
                    <div className='error-radio'>{formik.touched.isPaid && formik.errors.isPaid ? formik.errors.isPaid : null}</div>

                    <Button type="submit" name="Dodaj fakturę" class='btn btn-full btn-green' />
                </form>
                <Button name="Anuluj" class='btn btn-full btn-grey' />
            </div>
        </div>
    )
}

export default NewInvoiceForm
