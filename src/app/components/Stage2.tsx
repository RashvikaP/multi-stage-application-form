import React from 'react';
import { useFormikContext } from 'formik';

import FormField from '../utils//FormField'; // Import the shared component
import type { FormValuesType } from '../components/MultiStageForm'; // Import the FormValues type


const Stage2: React.FC = () => {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<FormValuesType>();

    return (
        <div style={{padding:"20px"}}> 
            <FormField
                label="Departure Date"
                id="departureDate"
                name="departureDate"
                value={values.departureDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.departureDate}
                touched={touched.departureDate}
                type="date"
            />

            <FormField
                label="Return Date"
                id="returnDate"
                name="returnDate"
                value={values.returnDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.returnDate}
                touched={touched.returnDate}
                type="date"
            />

            <FormField
                label="Accommodation Preference"
                id="accommodation"
                name="accommodation"
                value={values.accommodation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.accommodation}
                touched={touched.accommodation}
                type="select"
            >
                <option value="">Select an option</option>
                <option value="spaceHotel">Space Hotel</option>
                <option value="martianBase">Martian Base</option>
            </FormField>

            <FormField
                label="Special Requests"
                id="specialRequests"
                name="specialRequests"
                value={values.specialRequests}
                onChange={handleChange}
                onBlur={handleBlur}
                type="textarea"  // Or just leave type out, textarea is the default
            />
        </div>
    );
};

export default Stage2;