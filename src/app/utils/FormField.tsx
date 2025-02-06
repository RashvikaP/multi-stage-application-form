import React from 'react';
import styles from '../styles/FormField.module.css';
import ErrorMessage from './ErrorMessage';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    label: string;
    error?: string;
    touched?: boolean;
    type?: string; // Input type, textarea, or select
}

const FormField: React.FC<FormFieldProps> = ({ label, error, touched, children, type, ...props }) => {
    const inputClass = `${styles.input} ${error && touched ? styles.errorInput : ''}`;

    return (
        <div className={styles.formGroup}>
            <label htmlFor={props.id} className={styles.label}>{label} </label>
            {type === 'textarea' ? (
                <textarea className={inputClass} {...props} />
            ) : type === 'select' ? (
                <select className={inputClass} {...props}>
                    {children}
                </select>
            ) : type === 'radio' ? (
                <input className={inputClass} {...props} type="radio"  checked={props.checked} />
            ) : (
                <input className={inputClass} type={type} {...props} />
            )}
            {touched && error && <ErrorMessage message={error} />}
        </div>
    );
};

export default FormField;
