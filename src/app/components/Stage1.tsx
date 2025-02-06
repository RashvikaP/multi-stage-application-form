import React from 'react';
import { useFormikContext } from 'formik';
import FormField from '../utils/FormField'; // Import shared component
import { FormValuesType } from '../components/MultiStageForm'; // Import FormValues interface

const Stage1: React.FC = () => {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<FormValuesType>();

    return (
        <div >
            <FormField
                label="Full Name"
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName}
                touched={touched.fullName}
                type="text"
            />

            <FormField
                label="Date of Birth"
                id="dob"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.dob}
                touched={touched.dob}
                type="date"
            />
            <FormField
                label="Nationality"
                id="nationality"
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.nationality}
                touched={touched.nationality}
                type="text"
            />

            <FormField
                label="Email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                type="email"
            />

            <FormField
                label="Phone"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
                touched={touched.phone}
                type="tel"
            />
        </div>
    );
};

export default Stage1;