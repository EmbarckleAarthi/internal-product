import './style.scss';

import axios from 'axios';
import { Field, FieldArray, FormikProvider, useFormik } from 'formik';
import React from 'react';

export const Editprofile = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            employeeid: '',
            email: '',
            businessunit: '',
            division: '',
            employmenttype: '',
            department: '',
            employmentstatus: '',
            location: '',
            sourceofhire: '',
            designation: '',
            dateofjoining: '',
            reportingmanager: '',
            dateofbirth: '',
            maritalstatus: '',
            aboutme: '',
            uan: '',
            pan: '',
            aadhar: '',
            workphonenumber: '',
            personalmobilenumber: '',
            personalemailaddress: '',
            address: '',
            addedby: '',
            modifiedby: '',
            addedtime: '',
            modifiedtime: '',
            workExperience: [
                {
                    companyname: '',
                    jobtitle: '',
                    fromdate: '',
                    todate: '',
                    jobdescription: '',
                },
            ],
            educationDetails: [
                {
                    institutename: '',
                    degree: '',
                    specialization: '',
                    dateofcompletion: '',
                },
            ],
            dependantDetails: [
                {
                    name: '',
                    relationship: '',
                    relationdateofbirth: '',
                },
            ],
        },

        onSubmit: (values) => {
            axios
                .post('user/profiledata', { values })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        },
    });

    return (
        <FormikProvider value={formik}>
            <div className='user-details'>
                <form id='profile-form' onSubmit={formik.handleSubmit}>
                    <div className='basic-information'>
                        <h2>Basic Information</h2>
                        <label htmlFor='employee-id'>Employee ID</label>
                        <input
                            id='employee-id'
                            type='text'
                            name='employeeid'
                            value={formik.values.employeeid}
                            onChange={formik.handleChange}
                            required
                        />

                        <label htmlFor='first-name'>First Name</label>
                        <input
                            id='first-name'
                            type='text'
                            name='firstname'
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            required
                        />

                        <label id='last-namelabel' htmlFor='last-name'>
                            Last Name
                        </label>
                        <input
                            id='last-name'
                            type='text'
                            name='lastname'
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            required
                        />

                        <label id='email-address-label' htmlFor='email-address'>
                            Email Address
                        </label>
                        <input
                            id='email-address'
                            type='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='work-information'>
                        <h2>Work Information</h2>

                        <label htmlFor='businessunit'>Business Unit</label>
                        <input
                            id='businessunit'
                            type='text'
                            name='businessunit'
                            value={formik.values.businessunit}
                            onChange={formik.handleChange}
                            required
                        />

                        <label htmlFor='division'>Division</label>
                        <input
                            id='division'
                            type='text'
                            name='division'
                            value={formik.values.division}
                            onChange={formik.handleChange}
                            required
                        />

                        <label htmlFor='employmenttype'>Employment Type</label>
                        <input
                            id='employmenttype'
                            type='text'
                            name='employmenttype'
                            value={formik.values.employmenttype}
                            onChange={formik.handleChange}
                            required
                        />

                        <label htmlFor='department'>Department</label>
                        <input
                            id='department'
                            type='text'
                            name='department'
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            required
                        />

                        <label htmlFor='employmentstatus'>Employment Status</label>
                        <input
                            id='employmentstatus'
                            type='text'
                            name='employmentstatus'
                            value={formik.values.employmentstatus}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='locationlabel' htmlFor='location'>
                            Location
                        </label>
                        <input
                            id='location'
                            type='text'
                            name='location'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='sourcelabel' htmlFor='sourceofhire'>
                            Source Of Hire
                        </label>
                        <input
                            id='sourceofhire'
                            type='text'
                            name='sourceofhire'
                            value={formik.values.sourceofhire}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='designationlabel' htmlFor='designation'>
                            Designation
                        </label>
                        <input
                            id='designation'
                            type='text'
                            name='designation'
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='dateofjoininglabel' htmlFor='dateofjoining'>
                            Date Of Joining
                        </label>
                        <input
                            id='dateofjoining'
                            type='date'
                            name='dateofjoining'
                            value={formik.values.dateofjoining}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='hierarchy-information'>
                        <h2>Hierarchy Information</h2>

                        <label htmlFor='reportingmanager'>Reporting Manager</label>
                        <input
                            id='reportingmanager'
                            type='text'
                            name='reportingmanager'
                            value={formik.values.reportingmanager}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='personal-details'>
                        <h2>Personal Details</h2>

                        <label htmlFor='dateofbirth'>Date Of Birth</label>
                        <input
                            id='dateofbirth'
                            type='date'
                            name='dateofbirth'
                            value={formik.values.dateofbirth}
                            onChange={formik.handleChange}
                            required
                        />
                        <label htmlFor='maritalstatus'>Marital Status</label>
                        <input
                            id='maritalstatus'
                            type='text'
                            name='maritalstatus'
                            value={formik.values.maritalstatus}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='aboutmelabel' htmlFor='aboutme'>
                            About Me
                        </label>
                        <input
                            id='aboutme'
                            type='text'
                            name='aboutme'
                            value={formik.values.aboutme}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='identity-information'>
                        <h2>Identity Information</h2>

                        <label htmlFor='uan'>UAN</label>
                        <input
                            id='uan'
                            type='text'
                            name='uan'
                            value={formik.values.uan}
                            onChange={formik.handleChange}
                            required
                        />
                        <label htmlFor='pan'>PAN</label>
                        <input
                            id='pan'
                            type='text'
                            name='pan'
                            value={formik.values.pan}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='aadhar-label' htmlFor='aadhar'>
                            Aadhar
                        </label>
                        <input
                            id='aadhar'
                            type='text'
                            name='aadhar'
                            value={formik.values.aadhar}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='contact-details'>
                        <h2>Contact Details</h2>

                        <label htmlFor='workphonenumber'>Work Phone Number</label>
                        <input
                            id='workphonenumber'
                            type='text'
                            name='workphonenumber'
                            value={formik.values.workphonenumber}
                            onChange={formik.handleChange}
                            required
                        />
                        <label htmlFor='personalmobilenumber'>Personal Mobile Number</label>
                        <input
                            id='personalmobilenumber'
                            type='text'
                            name='personalmobilenumber'
                            value={formik.values.personalmobilenumber}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='personalemailaddress-label' htmlFor='personalemailaddress'>
                            Personal Email Address
                        </label>
                        <input
                            id='personalemailaddress'
                            type='email'
                            name='personalemailaddress'
                            value={formik.values.personalemailaddress}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='address-label' htmlFor='address'>
                            Address
                        </label>
                        <input
                            id='address'
                            type='text'
                            name='address'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='system-fields'>
                        <h2>System Fields</h2>

                        <label htmlFor='addedby'>Added By</label>
                        <input
                            id='addedby'
                            type='text'
                            name='addedby'
                            value={formik.values.addedby}
                            onChange={formik.handleChange}
                            required
                        />
                        <label htmlFor='modifiedby'>Modified By</label>
                        <input
                            id='modifiedby'
                            type='text'
                            name='modifiedby'
                            value={formik.values.modifiedby}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='addedtimelabel' htmlFor='addedtime'>
                            Added Time
                        </label>
                        <input
                            id='addedtime'
                            type='time'
                            name='addedtime'
                            value={formik.values.addedtime}
                            onChange={formik.handleChange}
                            required
                        />
                        <label id='modifiedtimelabel' htmlFor='modifiedtime'>
                            Modified Time
                        </label>
                        <input
                            id='modifiedtime'
                            type='time'
                            name='modifiedtime'
                            value={formik.values.modifiedtime}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className='work-experience'>
                        <h2>Work Experience</h2>

                        <FieldArray name='workExperience'>
                            {(arrayHelpers: {
                                remove: (arg0: number) => void;
                                push: (arg0: {
                                    companyname: string;
                                    jobtitle: string;
                                    fromdate: string;
                                    todate: string;
                                    jobdescription: string;
                                }) => void;
                            }) => (
                                <>
                                    <div className='work-experience-header'>
                                        <label id='company-name'>Company name</label>
                                        <label id='job-title'>Job Title</label>
                                        <label id='from-date'>From Date</label>
                                        <label id='to-date'>To Date</label>
                                        <label id='job-description'>Job Description</label>
                                    </div>
                                    <button
                                        id='add-button'
                                        type='button'
                                        onClick={() =>
                                            arrayHelpers.push({
                                                companyname: '',
                                                jobtitle: '',
                                                fromdate: '',
                                                todate: '',
                                                jobdescription: '',
                                            })
                                        }
                                    >
                                        +
                                    </button>
                                    {formik.values.workExperience.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                id={'companyname'}
                                                name={`workExperience.${index}.companyname`}
                                                type='text'
                                            />
                                            <Field
                                                id={'jobtitle'}
                                                name={`workExperience.${index}.jobtitle`}
                                                type='text'
                                            />
                                            <Field
                                                id={'fromdate'}
                                                name={`workExperience.${index}.fromdate`}
                                                type='date'
                                            />
                                            <Field id={'todate'} name={`workExperience.${index}.todate`} type='date' />
                                            <Field
                                                id={`jobdescription`}
                                                name={`workExperience.${index}.jobdescription`}
                                                as='textarea'
                                            />
                                            {index > 0 && (
                                                <button
                                                    id='remove-button'
                                                    type='button'
                                                    onClick={() => arrayHelpers.remove(index)}
                                                >
                                                    -
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                    </div>
                    <div className='educationdetails'>
                        <h2>Education Details</h2>

                        <FieldArray name='educationDetails'>
                            {(arrayHelpers: {
                                remove: (arg0: number) => void;
                                push: (arg0: {
                                    institutename: string;
                                    degree: string;
                                    specialization: string;
                                    dateofcompletion: string;
                                }) => void;
                            }) => (
                                <>
                                    <div className='work-experience-header'>
                                        <label id='institute-name'>Institue name</label>
                                        <label id='degree'>Degree</label>
                                        <label id='specialization'>Specialization</label>
                                        <label id='date-of-completion'>Date of Completion</label>
                                    </div>
                                    <button
                                        id='add-button'
                                        type='button'
                                        onClick={() =>
                                            arrayHelpers.push({
                                                institutename: '',
                                                degree: '',
                                                specialization: '',
                                                dateofcompletion: '',
                                            })
                                        }
                                    >
                                        +
                                    </button>
                                    {formik.values.educationDetails.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                id={`institute`}
                                                name={`educationDetails.${index}.institutename`}
                                                type='text'
                                            />
                                            <Field
                                                id={'degree-1'}
                                                name={`educationDetails.${index}.degree`}
                                                type='text'
                                            />
                                            <Field
                                                id={'specialization-1'}
                                                name={`educationDetails.${index}.specialization`}
                                                type='text'
                                            />
                                            <Field
                                                id={'dateofcompletion'}
                                                name={`educationDetails.${index}.dateofcompletion`}
                                                type='date'
                                            />

                                            {index > 0 && (
                                                <button
                                                    id='remove-button'
                                                    type='button'
                                                    onClick={() => arrayHelpers.remove(index)}
                                                >
                                                    -
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                    </div>

                    <div className='dependant-details'>
                        <h2>Dependant Details</h2>

                        <FieldArray name='dependantDetails'>
                            {(arrayHelpers: {
                                remove: (arg0: number) => void;
                                push: (arg0: {
                                    name: string;
                                    relationship: string;
                                    relationdateofbirth: string;
                                }) => void;
                            }) => (
                                <>
                                    <div className='dependant-details-header'>
                                        <label id='name'>Name</label>
                                        <label id='relationship'>Relationship</label>
                                        <label id='relationdateofbirth'>Date Of Birth</label>
                                    </div>
                                    <button
                                        id='add-button'
                                        type='button'
                                        onClick={() =>
                                            arrayHelpers.push({ name: '', relationship: '', relationdateofbirth: '' })
                                        }
                                    >
                                        +
                                    </button>
                                    {formik.values.dependantDetails.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                id={`relation-name`}
                                                name={`dependantDetails.${index}.name`}
                                                type='text'
                                            />
                                            <Field
                                                id={'relation-ship'}
                                                name={`dependantDetails.${index}.relationship`}
                                                type='text'
                                            />
                                            <Field
                                                id={'relationdateofbirth'}
                                                name={`dependantDetails.${index}.relationdateofbirth`}
                                                type='date'
                                            />

                                            {index > 0 && (
                                                <button
                                                    id='remove-button'
                                                    type='button'
                                                    onClick={() => arrayHelpers.remove(index)}
                                                >
                                                    -
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                    </div>

                    <div className='button-container'>
                        <button id='submit-button' type='submit'>
                            Submit
                        </button>
                        <button id='cancel-button' type='submit'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </FormikProvider>
    );
};
