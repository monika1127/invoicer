import React, { Component, Fragment, useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import './newInvoiceForm.css'

import TopBar from '../layout/topBar/TopBar'
import Button from '../layout/button/Button'
import Input from '../layout/form/Input'
import Select from '../layout/form/Select'
import Radio from '../layout/form/Radio'
import Devider from '../layout/devider/Devider'
import Alert from '../layout/alert/Alert'
import DateInput from '../layout/form/DateInput'
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
                .required('! This field is required'),
            isPaid: Yup.boolean()
                .required('zaznacz poprawne'),
            type: Yup.string()
                .required('zaznacz poprawne'),
            contractor: Yup.string()
                .required('wybierz firmę'),
        }),
        onSubmit: values => {
            const isPaid = values.isPaid === "true"
            const saleDate = values.saleDate.toLocaleDateString('en-GB')
            const invoice = { ...values, creationDate: saleDate, isPaid, saleDate }
            fetch(`http://localhost:5000/invoices/`, { method: 'POST', headers: { "Content-type": "application/json" }, body: JSON.stringify(invoice) })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.log(err))
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
            <TopBar title='Zarejestruj nową fakturę:' color='green' />
            <div className='form__container-body'>
                <form onSubmit={formik.handleSubmit}>

                    <Input
                        connectiedWith='number'
                        inputLabel='Numer faktury'
                        inputId='number'
                        inputType='text'
                        inputPattern="\d{1,2}/\d{4}"
                        inputPlaceholder='ex. 11/2020'
                        inputFormik={formik.getFieldProps('number')}
                        errorMsg={formik.touched.number && formik.errors.number ? formik.errors.number : null}
                    />

                    <Input
                        connectiedWith='price'
                        inputLabel='Kwota'
                        inputId='price'
                        inputType='number'
                        inputPattern=''
                        inputPlaceholder=''
                        inputFormik={formik.getFieldProps('price')}
                        errorMsg={formik.touched.price && formik.errors.price ? formik.errors.price : null}
                    />


                    <DateInput
                    connectiedWith='saleDate'
                    inputLabel='Data'
                    errorMsg={formik.touched.saleDate && formik.errors.saleDate ? formik.errors.saleDate : null}
                    onChange={formik.setFieldValue}
                    name='saleDate'
                    value={formik.values.saleDate}
                    />
                    {/* <Input
                        connectiedWith='saleDate'
                        inputLabel='Data'
                        inputId='saleDate'
                        inputType='date'
                        inputPlaceholder='dd/mm/yyyy'
                        inputFormik={formik.getFieldProps('saleDate')}
                        errorMsg={formik.touched.saleDate && formik.errors.saleDate ? formik.errors.saleDate : null}
                    /> */}

                    <Select
                        connectiedWith='contractor'
                        selectLabel='Kontrahent'
                        defaultOption='Wybierz firmę'
                        selectFormik={formik.getFieldProps('contractor')}
                        options={contractors.map(contractor => ({ value: contractor.companyName, label: contractor.companyName }))}
                        errorMsg={formik.touched.contractor && formik.errors.contractor ? formik.errors.contractor : null}
                    />
                    <Button type='button'  size='small' color="grey" specialClass="contractor" >Dodaj</Button>

                    <Radio
                        radioLabel='Typ faktury'
                        options={[
                            {
                                value: "FV sprzedaż towarów i usług",
                                text: "FV sprzedaż towarów i usług"
                            },
                            {
                                value: "XX wykonanie usługi",
                                text: "XX wykonanie usługi"
                            },
                            {
                                value: "RR sprzedaż towaru",
                                text: "RR sprzedaż towaru"
                            },
                        ]}
                        radioFormik={formik.getFieldProps('type')}
                        orientation='list'
                        errorMsg={formik.touched.type && formik.errors.type ? formik.errors.type : null}
                    />

                    <Devider color='grey' />

                    <Radio
                        radioLabel='Czy faktura zastła już opłacona?'
                        options={[{
                            value: false,
                            text: "NIE"
                        },
                        {
                            value: true,
                            text: "TAK"
                        },]}
                        radioFormik={formik.getFieldProps('isPaid')}
                        orientation='inline'
                        errorMsg={formik.touched.isPaid && formik.errors.isPaid ? formik.errors.isPaid : null}
                    />
                    <Devider color='grey' />

                    <Button type="submit" size='full' color='green' >Dodaj fakturę</Button>
                </form>
                <Button  size='full' color='grey' >Anuluj</Button>
            </div>
        </div>
    )
}

export default NewInvoiceForm
