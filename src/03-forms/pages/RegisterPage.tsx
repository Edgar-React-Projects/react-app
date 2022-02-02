import '../styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { 
        formData, isValidEmail, onChange, resetForm, name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });


    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ (e) => onSubmit(e) }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={ `${ !isValidEmail( email ) && 'has-error'}` }
                />
                { !isValidEmail( email ) && <span>Email inválido</span>}
                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password1.trim().length > 0 && password1.trim().length < 6  && <span>El password debe tener al menos 6 caracteres</span>}
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span>El password no coincide</span>}
                <button
                    type="submit"
                >
                    Create
                </button>
                <button
                    type="button"
                    onClick={ resetForm }
                >
                    Reset
                </button>
            </form>
        </div>
    );
};
