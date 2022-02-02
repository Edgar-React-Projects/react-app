import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

//...props mean the rest operator and it's excluding label
export const MyCheckbox = ( { label, ...props }: Props ) => {
    
    const [ field ] = useField({ ...props, type:'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
        </>
    )
};
