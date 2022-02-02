import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

//...props mean the rest operator and it's excluding label
export const MySelect = ( { label, ...props }: Props ) => {
    
    const [ field ] = useField( props );

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
        </>
    )
};