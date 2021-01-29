import React, { useContext } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Card from '../layout/card/Card'
import Input from '../layout/form/Input'
import Button from '../layout/button/Button'
import AlertContext from '../../context/alert/alertContext'

const NewContractorForm = (props) => {

    // variables for Alert display - AlertContext
    const alertCtx = useContext(AlertContext)
    const { setAlertMessage } = alertCtx

    const formik = useFormik({
        initialValues: {
            companyName: '',
            NIP: '',
            street: '',
            post: '',
            city: '',
            tel: ''
        },

        validationSchema: Yup.object({
            companyName: Yup.string()
                .max(30, "Maksymalnie 30 znaków")
                .required('Required'),
            NIP: Yup.string()
                .required('Required'),
            street: Yup.string()
                .max(30, "Maksymalnie 30 znaków")
                .required('Required'),
            post: Yup.string()
                .max(10, "Maksymalnie 10 znaków")
                .required('Required'),
            city: Yup.string()
                .max(30, "Maksymalnie 30 znaków")
                .required('Required'),
            tel: Yup.string()
                .max(14, "Maksymalnie 14 znaków")
                .required('Required'),
        }),

        onSubmit: values => {
            console.log(values)
            fetch(`http://localhost:5000/contractors/`,
                {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ ...values })
                })
                .then(res => res.json())
                .then(res => {
                    setAlertMessage('Kontrahent został dodany', 'pass')
                    props.history.push('/invoices/new')
                })
                .catch(err => {
                    setAlertMessage('Wystąpił błąd! Kontrahent nie została dodany', 'fail')
                    console.log(err)
                })
        }
    })

    return (
        <Card size='small' cardName='Dodaj nowego kontrahenta:' variant='neutral'>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    inputLabel='Nazwa Firmy'
                    inputId='companyName'
                    inputType='text'
                    inputFormik={formik.getFieldProps('companyName')}
                    errorMsg={formik.touched.companyName && formik.errors.companyName ? formik.errors.companyName : null}
                />
                <Input
                    inputLabel='NIP'
                    inputId='NIP'
                    inputType='text'
                    inputPattern="\d{3}-\d{3}-\d{3}-\d{3}"
                    inputPlaceholder='ex. 111-111-111-111'
                    inputFormik={formik.getFieldProps('NIP')}
                    errorMsg={formik.touched.NIP && formik.errors.NIP ? formik.errors.NIP : null}
                />
                <Input
                    inputLabel='Adres'
                    inputId='street'
                    inputType='text'
                    inputFormik={formik.getFieldProps('street')}
                    errorMsg={formik.touched.street && formik.errors.street ? formik.errors.street : null}
                />
                <Input
                    inputLabel='Kod Pocztowy'
                    inputId='post'
                    inputType='text'
                    inputFormik={formik.getFieldProps('post')}
                    errorMsg={formik.touched.post && formik.errors.post ? formik.errors.post : null}
                />
                <Input
                    inputLabel='Miasto'
                    inputId='city'
                    inputType='text'
                    inputFormik={formik.getFieldProps('city')}
                    errorMsg={formik.touched.city && formik.errors.city ? formik.errors.city : null}
                />
                <Input
                    inputLabel='Telefon'
                    inputId='tel'
                    inputType='text'
                    inputFormik={formik.getFieldProps('tel')}
                    errorMsg={formik.touched.tel && formik.errors.tel ? formik.errors.tel : null}
                />
                <Button type="submit" size='full' color='secondary' >Dodaj kontrahenta</Button>
            </form>
            <Button type="button" size='full' color='neutral' onClick={()=>props.history.push('/invoices/new')}>Anuluj</Button>
        </Card>
    )
}

export default NewContractorForm
