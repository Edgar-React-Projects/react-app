import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{        
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'El nombre debe ser de 2 caracteres o más')
                                    .max(15, 'El nombre debe de tener 15 caracteres máximo')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .required('Requerido'),
                        password1: Yup.string()
                                    .min(6, 'Mínimo 6 caracteres')
                                    .required('Requerido'),
                        password2: Yup.string()
                                    .oneOf([ Yup.ref('password1') ], 'Las contraseñas deben ser iguales')
                                    .required('Requerido')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput 
                                label="Nombre"
                                name="name" 
                                placeholder="Edgar" 
                            />

                            <MyTextInput 
                                label="Email"
                                name="email" 
                                placeholder="jhonDoe@gmail.com" 
                            />

                            <MyTextInput 
                                label="Password"
                                name="password1" 
                                type="password"
                                placeholder="******" 
                            />

                            <MyTextInput 
                                label="Confirmar Password"
                                name="password2" 
                                type="password"
                                placeholder="******" 
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset } >Reset</button>
                            
                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};
