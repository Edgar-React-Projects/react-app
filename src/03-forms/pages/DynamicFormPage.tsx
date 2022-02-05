import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2 , `Mínimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'validEmail' ) {
            schema = schema.email('Formato de email inválido');
        }
    }

    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ (values) => {
                    console.log( values );
                }}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map( ({ type, name, placeholder, label, options }) => {
                                
                                    if ( type === 'input' || type === 'password' || type === 'email' ) {
                                        return (
                                                <MyTextInput 
                                                    key={ name } 
                                                    type={ type as any } 
                                                    name={ name } 
                                                    label={ label }
                                                    placeholder={ placeholder } 
                                                />
                                        )
                                    } else if ( type === 'select' ) {
                                        return (
                                                <MySelect
                                                    key={ name } 
                                                    type={ type as any } 
                                                    name={ name } 
                                                    label={ label }
                                                    placeholder={ placeholder }
                                                >
                                                    <option value="" >Select a role</option>
                                                    {
                                                        options?.map( (options) => (
                                                            <option
                                                                key={ options.id }
                                                                value={ options.id }
                                                            >
                                                                { options.label }
                                                            </option>
                                                        ))
                                                    }
                                                </MySelect>
                                        )
                                    }
                                    return <h1>`Type: ${type} is not supported`</h1>

                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
