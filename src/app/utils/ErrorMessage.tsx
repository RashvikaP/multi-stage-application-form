import React from 'react';
import styles from '../styles/ErrorMessage.module.css';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <div className={styles.errorMessage}>{message}</div>
);

export default ErrorMessage;