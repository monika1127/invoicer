
//numer faktury
//data sprzedaży
//cena
// kontraktr (wybieralne z listy)
//typ faktury (radio button)
// czy opłacona (Y/N)


import React, { Component, Fragment, useState, useEffect } from 'react'
import { Formik, Field, useFormik } from 'formik'
import * as Yup from 'yup'
import './newInvoiceForm.css'
import TopBar from '../layout/topBar/TopBar'
import Button from '../layout/button/Button'

const NewInvoiceForm = () => {

    const [contractors, setContractors] = useState([])

    const formik = useFormik({
        initialValues: {
            invoiceId: '',
            price: '',
            date: '',
            paid: '',
            contractor: '',
            type: ''
        },
        validationSchema: Yup.object({
            invoiceId: Yup.string()
                .max(10, '! Improper form number')
                .required('! This field is required'),
            price: Yup.string()
                .max(10, '! Improper form number')
                .required('! This field is required'),
            date: Yup.string()
                .max(16, 'Improper date format')
                .required('! This field is required'),
            paid: Yup.boolean()
                .required('zaznacz poprawne'),
            type: Yup.boolean()
                .required('zaznacz poprawne'),
            contractor: Yup.string()
                .required('wybierz firmę'),
        }),
        onSubmit: values => alert(JSON.stringify(values, null, 2))
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
                            <label htmlFor='invoiceId'>Numer faktury</label>
                            <input id='invoiceId' type='text' {...formik.getFieldProps('invoiceId')} >
                            </input>
                        </div>
                        <div className='error'>{formik.touched.invoiceId && formik.errors.invoiceId ? formik.errors.invoiceId : null}</div>
                    </div>

                    <div className='field-container'>
                        <div className='form-field'>
                            <label htmlFor='price'>Kwota</label>
                            <input id='price' type='text' {...formik.getFieldProps('price')} ></input>
                        </div>
                        <div className='error'>{formik.touched.price && formik.errors.price ? formik.errors.price : null}</div>
                    </div>

                    <div className='field-container'>
                    <div className='form-field'>
                        <label htmlFor='date'>Data sprzedaży</label>
                        <input id='date' type='text' {...formik.getFieldProps('date')} >
                        </input>
                        </div>
                        <div className='error'>{formik.touched.date && formik.errors.date ? formik.errors.date : null}</div>
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
                                <input type="radio" {...formik.getFieldProps('type')} value={true} />FV sprzedaż towarów i usług
                            </label>
                            <label>
                                <input type="radio" {...formik.getFieldProps('type')} value={false} />XX wykonanie usługi
                        </label>
                            <label>
                                <input type="radio" {...formik.getFieldProps('type')} value={false} />RR sprzedaż towaru
                        </label>
                        </div>

                    </div>


                    <div className='form-field-paid' role="group" aria-labelledby="my-radio-group">
                            <div className='paid-label' >Czy faktura zastła już opłacona?</div>
                            <label>
                                <input type="radio" {...formik.getFieldProps('paid')} value={true} />TAK
                            </label>
                            <label>
                                <input type="radio" {...formik.getFieldProps('paid')} value={false} />NIE
                            </label>
                            </div>
                            <div className='error-radio'>{formik.touched.paid && formik.errors.paid ? formik.errors.paid : null}</div>





                    <Button type="submit" name="Dodaj fakturę" class='btn btn-full btn-green' />

                </form>
                <Button name="Anuluj" class='btn btn-full btn-grey' />
            </div>
        </div>
    )
}


export default NewInvoiceForm
