'use client'
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import styles from '../styles/shared-styles.module.css';
import FormField from "../utils/FormField";
import ErrorMessage from "../utils/ErrorMessage";
import ProgressBar from "./ProgressBar";

interface FormValues {
    fullName: string;
    dob: string;
    nationality: string;
    email: string;
    phone: string;
    departureDate: string;
    returnDate: string;
    accommodation: string;
    specialRequests: string;
    healthDeclaration: string;
    emergencyContact: string;
    medicalConditions: string;
}

const MultiStageForm: React.FC = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status
    const totalStages = 3;
    const isLastStep = currentStage === totalStages - 1;
    
    const [formData, setFormData] = useState<FormValues>({
        fullName: '',
        dob: '',
        nationality: '',
        email: '',
        phone: '',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: 'Yes',
        emergencyContact: '',
        medicalConditions: '',
    });

    const validationSchema = [
        Yup.object().shape({
            fullName: Yup.string().required('Required'),
            dob: Yup.date().required('Required'),
            nationality: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email format').required('Required'),
            phone: Yup.string()
                .matches(/^\d+$/, 'Invalid phone format (numbers only)')
                .length(10, 'Phone number must be exactly 10 digits')
                .required('Required'),
        }),
        Yup.object().shape({
            departureDate: Yup.date().required('Required'),
            returnDate: Yup.date().required('Required'),
            accommodation: Yup.string().required('Required'),
            specialRequests: Yup.string(),
        }),
        Yup.object().shape({
            healthDeclaration: Yup.boolean().oneOf([true], 'You must declare your health status').required("Required"),
            emergencyContact: Yup.string().required('Required'),
            medicalConditions: Yup.string(),
        }),
    ];

    const initialValues: FormValues = formData;

    const handleSubmit = (values: FormValues,{setSubmitting}:any) => {
        setFormData({
            ...formData,
            ...values,  
        }); 
        console.log("Stage Data:", values); 
        if (currentStage < totalStages - 1) {
            setCurrentStage(currentStage + 1);
           
        } else {
            console.log("Final Form Submission:", formData);
            setIsSubmitted(true);
            
        }
        setSubmitting(false);
    };
    

    const handlePrev = () => {
        if (currentStage > 0) {
            setCurrentStage(currentStage - 1);
        }
    };

    const renderStageTitle = () => {
        switch (currentStage) {
            case 0: return " Personal Information";
            case 1: return " Travel Details";
            case 2: return " Health Declaration";
            default: return "";
        }
    };

    const renderStage = (props: any) => {
        switch (currentStage) {
            case 0: return <Stage1 {...props} FormField={FormField} ErrorMessage={ErrorMessage} />;
            case 1: return <Stage2 {...props} FormField={FormField} ErrorMessage={ErrorMessage} />;
            case 2: return <Stage3 {...props} FormField={FormField} ErrorMessage={ErrorMessage} />;
            default: return null;
        }
    };

  const Button: React.FC<{ children: React.ReactNode, [key: string]: any }> = ({ children, ...props }) => (
        <button {...props} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    );


    return (
        <Formik
    initialValues={initialValues}
    validationSchema={validationSchema[currentStage]}
    onSubmit={handleSubmit}
>
    {({ values, errors, touched, setTouched,  setFieldValue }) => (
        
        <Form  className={styles.container}>
            {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md border border-green-200">
                    <h2 className="font-semibold text-xl">Form Submitted Successfully!</h2>
                    <p>Your form has been successfully submitted. Thank you for your response!</p>
                </div>
            ) : (
                <>
                    <ProgressBar currentStage={currentStage} totalStages={totalStages} />
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>{renderStageTitle()}</h2>
                        {renderStage({ values, errors, touched, setTouched, setFieldValue })}

                        <div className={`${styles.flex} ${styles.justifyBetween} ${styles.mt4}`}>
                            {currentStage > 0 && (
                                <Button type="button" onClick={handlePrev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                    Previous
                                </Button>
                            )}
                            <Button type="submit">
                                {currentStage === totalStages - 1 ? 'Submit' : 'Next'}
                            </Button>

                        </div>
                    </div>
                </>
            )}
        </Form>
    )}
</Formik>

    );
};

export default MultiStageForm;
export type FormValuesType = FormValues;
