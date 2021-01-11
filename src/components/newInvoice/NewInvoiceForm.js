
//numer faktury
//data sprzedaży
//cena
// kontraktr (wybieralne z listy)
// opis faktury (konieczne dodanie do bazy danych nowego pola)
//typ faktury (radio button)
// czy opłacona (Y/N)


import React, { Component, Fragment } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import './newInvoiceForm.css'
import TopBar from '../layout/topBar/TopBar'
import Button from '../layout/button/Button'

const NewInvoiceForm = () => {
    const formik = useFormik({
        initialValues: {
            invoiceId: '',
            price: '',
            date: ''
        },
        validationSchema: Yup.object({
            invoiceId: Yup.string()
                .max(10, 'Improper form number')
                .required(' ! This field is required'),
            price: Yup.string()
                .max(10, 'Improper form number')
                .required(' ! This field is required'),
            date: Yup.string()
                .max(16, 'Improper date format')
                .required(' ! This field is required'),
        }),
        onSubmit: values => alert(JSON.stringify(values, null, 2))
    });

    return (
        <div className='form__container'>
            <TopBar title='Zarejestruj nową fakturę:' topbarClass='topbar topbar-green' />
            <div className='form__container-body'>

                <form onSubmit={formik.handleSubmit}>
                    <div className='form-field'>
                        <label htmlFor='invoiceId'>Numer faktury</label>
                        <input id='invoiceId' type='text' {...formik.getFieldProps('invoiceId')} >
                        </input>
                        {formik.touched.invoiceId && formik.errors.invoiceId ? (
                            <div className='error'>{formik.errors.invoiceId}</div>
                        ) : null}
                    </div>

                    <div className='form-field'>
                        <label htmlFor='price'>Kwota</label>
                        <input id='price' type='text' {...formik.getFieldProps('price')} ></input>
                        {formik.touched.price && formik.errors.price ? (
                            <div className='error'>{formik.errors.price}</div>
                        ) : null}
                    </div>

                    <div className='form-field'>
                    <label htmlFor='date'>Numer faktury</label>
                    <input id='date' type='text' {...formik.getFieldProps('date')} >
                    </input>
                    {formik.touched.date && formik.errors.date ? (
                        <div className='error'>{formik.errors.date}</div>
                    ) : null}
                     </div>
                     <Button type="submit" name="Dodaj fakturę" class='btn btn-full btn-green'/>
                     <Button  name="Anuluj" class='btn btn-full btn-grey'/>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
    )
}


export default NewInvoiceForm
