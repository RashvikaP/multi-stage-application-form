import React from 'react';
import { useFormikContext } from 'formik';
import FormField from '../utils/FormField';
import type { FormValuesType } from '../components/MultiStageForm';
import styles from '../styles/FormField.module.css'
const Stage3: React.FC = () => {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<FormValuesType>();

    return (
        <div>
            {/* Health Declaration - Radio Buttons */}
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <FormField
                    label="Yes"
                    id="healthDeclarationYes"
                    name="healthDeclaration"
                    type="radio"
                    value="Yes"
                    checked={values.healthDeclaration === "Yes"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                

                <FormField
                    
                    id="healthDeclarationNo"
                    name="healthDeclaration"
                    type="radio"
                    value="No"
                    checked={values.healthDeclaration === "No"}
                    onChange={handleChange}
                    onBlur={handleBlur} label="No"                />
               
            </div>

            {/* Emergency Contact - Only visible if health declaration is Yes */}
            {values.healthDeclaration === "Yes" && (
                <FormField
                    label="Emergency Contact"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={values.emergencyContact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.emergencyContact}
                    touched={touched.emergencyContact}
                    type="text"
                />
            )}

            {/* Medical Conditions - Only visible if health declaration is Yes */}
            {values.healthDeclaration === "Yes" && (
                <FormField
                    label="Medical Conditions (if applicable)"
                    id="medicalConditions"
                    name="medicalConditions"
                    value={values.medicalConditions}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.medicalConditions}
                    touched={touched.medicalConditions}
                    type="textarea"
                />
            )}

{values.healthDeclaration === "No" && (
                <>
                    <FormField
                        label="Emergency Contact"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={values.emergencyContact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.emergencyContact}
                        touched={touched.emergencyContact}
                        type="text"
                        disabled={true}
                    />
                    <FormField
                        label="Medical Conditions (if applicable)"
                        id="medicalConditions"
                        name="medicalConditions"
                        value={values.medicalConditions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.medicalConditions}
                        touched={touched.medicalConditions}
                        type="textarea"
                        disabled={true}
                    />
                </>
            )}
        </div>
    );
};

export default Stage3;



