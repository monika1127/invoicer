import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { addInvoice } from '../../redux/invoices/invoicesActions'
import { getContractors } from '../../redux/contractors/contractorsActions'

import AlertContext from '../../context/alert/alertContext'
import Button from '../layout/button/Button'
import Card from '../layout/card/Card'
import DateInput from '../layout/form/DateInput'
import Devider from '../layout/devider/Devider'
import Input from '../layout/form/Input'
import Radio from '../layout/form/Radio'
import Select from '../layout/form/Select'

import './newInvoiceForm.css'

const NewInvoiceForm = ({ contractors: { contractorsList }, getContractors, addInvoice }) => {

    useEffect(() => {
        !contractorsList && getContractors()
    }, [])


    // variables for Alert display - AlertContext
    const alertCtx = useContext(AlertContext)
    const { setAlertMessage } = alertCtx

    //routing
    const history = useHistory()
    const goToInvoicesList = () => history.push('/invoices')
    const goToNewContractorForm = () => history.push('/contractor/new')

    //local storage - form fields values
    const formValues = localStorage.getItem('formValues')
    const initialValues = formValues ? JSON.parse(formValues) : {
        number: '',
        price: '',
        saleDate: '',
        isPaid: '',
        contractor: '',
        type: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
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
            const newInvoiceData = { ...values, creationDate: saleDate, isPaid, saleDate }
            const callback = (alertTxt, alertType) => {
                setAlertMessage(alertTxt, alertType)
                if(alertType==='fail') return
                localStorage.removeItem('formValues')
                goToInvoicesList()
                formik.resetForm();
            }
            addInvoice(newInvoiceData, callback)
        }
    });
    //dont display form until contractors list uploaded
    if (!contractorsList) return null

    return (
        <div className='forms-container'>
            <Card size='small' cardName='Zarejestruj nową fakturę:' variant='secondary'>
                <form onSubmit={formik.handleSubmit}>

                    <Input
                        inputLabel='Numer faktury'
                        inputId='number'
                        inputType='text'
                        inputPattern="\d{1,2}/\d{4}"
                        inputPlaceholder='ex. 11/2020'
                        inputFormik={formik.getFieldProps('number')}
                        errorMsg={formik.touched.number && formik.errors.number ? formik.errors.number : null}
                    />

                    <Input
                        inputLabel='Kwota'
                        inputId='price'
                        inputType='number'
                        inputPattern=''
                        inputPlaceholder=''
                        inputFormik={formik.getFieldProps('price')}
                        errorMsg={formik.touched.price && formik.errors.price ? formik.errors.price : null}
                    />

                    <DateInput
                        inputLabel='Data'
                        errorMsg={formik.touched.saleDate && formik.errors.saleDate ? formik.errors.saleDate : null}
                        onChange={formik.setFieldValue}
                        name='saleDate'
                        value={formik.values.saleDate}
                    />

                    <Select
                        selectLabel='Kontrahent'
                        defaultOption='Wybierz firmę'
                        selectFormik={formik.getFieldProps('contractor')}
                        onClick={() => {
                            goToNewContractorForm()
                            localStorage.setItem("formValues", JSON.stringify(formik.values))
                        }}
                        options={contractorsList.map(contractor => ({ value: contractor.companyName, label: contractor.companyName }))}
                        errorMsg={formik.touched.contractor && formik.errors.contractor ? formik.errors.contractor : null}
                    />
                    <Radio
                        radioLabel='Typ faktury'
                        options={[
                            {
                                value: "FV sprzedaż towarów i usług",
                                text: "FV sprzedaż towarów i usług",
                            },
                            {
                                value: "XX wykonanie usługi",
                                text: "XX wykonanie usługi",
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

                    <Button type="submit" size='full' color='secondary' >Dodaj fakturę</Button>
                </form>
                <Link to='/user'>
                    <Button size='full' color='neutral' onClick={() => localStorage.removeItem('formValues')}>Anuluj</Button>
                </Link>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    contractors: state.contractors
})

export default connect(mapStateToProps, { getContractors, addInvoice })(NewInvoiceForm)
