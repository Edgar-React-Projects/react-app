import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components/index';

import '../styles/styles.css';

export const FormikAbstraction = () => {    

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: ''
                    }
                }

                onSubmit={ 
                    ( values ) => {
                        console.log(values);
                    }
                }

                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Must be 15 characters or less.')
                                        .required('Required.'),
                        lastName: Yup.string()
                                        .max(15, 'Must be 15 characters or less.')
                                        .required('Required.'),
                        email: Yup.string()
                                        .email('Is not a valid email.')
                                        .required('Required.'),
                        terms: Yup.boolean()
                                        .oneOf([true], 'Must accept terms and conditions.'),
                        jobType: Yup.string()
                                        .notOneOf(['it-junior'], 'This options is not accepted.')
                                        .required('Required.')
                    })
                }
            >

                {
                    (formik) => (
                        <Form noValidate >
                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="First Name" 
                                type="text"
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Last Name" 
                                type="text"
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email" 
                                placeholder="Email"
                                type="email" 
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms ans Contidions" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

            
        </div>
    );
};
