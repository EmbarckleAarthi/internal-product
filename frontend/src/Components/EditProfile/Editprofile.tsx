/* eslint-disable @typescript-eslint/no-unused-vars */
import './style.scss';

import axios from 'axios';
import { Field, FieldArray, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Editprofile = () => {
    const [activeTab, setActiveTab] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    const [isFieldsDisabled, setIsFieldsDisabled] = useState(false);
    const disable = location.state.role;
    useEffect(() => {
        setIsFieldsDisabled(location.state.role === 'user');
    }, [location.state.role]);

    useEffect(() => {
        axios
            .get(`user/getuserdata/${id}`)
            .then((res) => {
                const data = res.data;
                console.log('res', res.data);
                data.workexperience = data.workexperience?.map((item: string) => {
                    return {
                        companyname: item.company_name,
                        jobtitle: item.job_title,
                        fromdate: item.from_date,
                        todate: item.to_date,
                        jobdescription: item.job_description,
                    };
                });
                data.educationdata = data.educationdata?.map((item: string) => {
                    // alert(item);
                    return {
                        institutename: item.institute_name,
                        degree: item.degree,
                        specialization: item.specialization,
                        dateofcompletion: item.completion_date,
                    };
                });
                data.dependentdata = data.dependentdata?.map((item: string) => {
                    return {
                        name: item.name,
                        relationship: item.relationship,
                        relationdateofbirth: item.relation_birthday,
                    };
                });

                setActiveTab(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const formik = useFormik({
        initialValues: {
            firstname: activeTab.first_name,
            lastname: activeTab.last_name,
            employeeid: activeTab.employee_id,
            email: activeTab.email,
            businessunit: activeTab.business_unit,
            division: activeTab.division,
            employmenttype: activeTab.employment_type,
            department: activeTab.department,
            employmentstatus: activeTab.employment_type,
            location: activeTab.location,
            sourceofhire: activeTab.source_of_hire,
            designation: activeTab.designation,
            dateofjoining: activeTab.joining_date,
            reportingmanager: activeTab.reporting_manager,
            dateofbirth: activeTab.date_of_birth,
            maritalstatus: activeTab.marital_status,
            aboutme: activeTab.aboutme,
            uan: activeTab.uan,
            pan: activeTab.pan,
            aadhar: activeTab.aadhar,
            workphonenumber: activeTab.work_phonenumber,
            personalmobilenumber: activeTab.personal_mobilenumber,
            personalemailaddress: activeTab.personal_email,
            address: activeTab.address,
            addedby: activeTab.added_by,
            modifiedby: activeTab.modified_by,
            addedtime: activeTab.added_time,
            modifiedtime: activeTab.modified_time,
            workExperience: activeTab.workexperience,
            educationDetails: activeTab.educationdata,
            dependantDetails: activeTab.dependentdata,
        },

        onSubmit: (values) => {
            axios
                .post('user/profiledata', { values })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        },
        enableReinitialize: true,
    });
    const handleCancel = () => {
        navigate('/dashboard');
    };
    const maxDate = new Date().toISOString().split('T')[0];
    return (
        <FormikProvider value={formik}>
            <div className='user-details'>
                <form id='profile-form' onSubmit={formik.handleSubmit}>
                    <div className='basic-information'>
                        <h2>Basic Information</h2>
                        <label htmlFor='employee-id'>Employee ID</label>
                        <Field
                            id='employee-id'
                            type='text'
                            name='employeeid'
                            value={formik.values.employeeid}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label htmlFor='first-name'>First Name</label>
                        <Field
                            id='first-name'
                            type='text'
                            name='firstname'
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label id='last-namelabel' htmlFor='last-name'>
                            Last Name
                        </label>
                        <Field
                            id='last-name'
                            type='text'
                            name='lastname'
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label id='email-address-label' htmlFor='email-address'>
                            Email Address
                        </label>
                        <Field
                            id='email-address'
                            type='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                    </div>

                    <div className='work-information'>
                        <h2>Work Information</h2>

                        <label htmlFor='businessunit'>Business Unit</label>
                        <Field
                            id='businessunit'
                            type='text'
                            name='businessunit'
                            value={formik.values.businessunit}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label htmlFor='division'>Division</label>
                        <Field
                            id='division'
                            type='text'
                            name='division'
                            value={formik.values.division}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label htmlFor='employmenttype'>Employment Type</label>
                        <Field
                            id='employmenttype'
                            type='text'
                            name='employmenttype'
                            value={formik.values.employmenttype}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label htmlFor='department'>Department</label>
                        <Field
                            id='department'
                            type='text'
                            name='department'
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />

                        <label htmlFor='employmentstatus'>Employment Status</label>
                        <Field
                            id='employmentstatus'
                            type='text'
                            name='employmentstatus'
                            value={formik.values.employmentstatus}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='locationlabel' htmlFor='location'>
                            Location
                        </label>
                        <Field
                            id='location'
                            type='text'
                            name='location'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='sourcelabel' htmlFor='sourceofhire'>
                            Source Of Hire
                        </label>
                        <Field
                            id='sourceofhire'
                            type='text'
                            name='sourceofhire'
                            value={formik.values.sourceofhire}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='designationlabel' htmlFor='designation'>
                            Designation
                        </label>
                        <Field
                            id='designation'
                            type='text'
                            name='designation'
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='dateofjoininglabel' htmlFor='dateofjoining'>
                            Date Of Joining
                        </label>
                        <Field
                            id='dateofjoining'
                            type='date'
                            name='dateofjoining'
                            value={formik.values.dateofjoining}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            max={maxDate}
                        />
                    </div>

                    <div className='hierarchy-information'>
                        <h2>Hierarchy Information</h2>

                        <label htmlFor='reportingmanager'>Reporting Manager</label>
                        <Field
                            id='reportingmanager'
                            type='text'
                            name='reportingmanager'
                            value={formik.values.reportingmanager}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                    </div>

                    <div className='personal-details'>
                        <h2>Personal Details</h2>

                        <label htmlFor='dateofbirth'>Date Of Birth</label>
                        <Field
                            id='dateofbirth'
                            type='date'
                            name='dateofbirth'
                            value={formik.values.dateofbirth}
                            onChange={formik.handleChange}
                            max={maxDate}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label htmlFor='maritalstatus'>Marital Status</label>
                        <Field
                            id='maritalstatus'
                            type='text'
                            name='maritalstatus'
                            value={formik.values.maritalstatus}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='aboutmelabel' htmlFor='aboutme'>
                            About Me
                        </label>
                        <Field
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
                        <Field
                            id='uan'
                            type='text'
                            name='uan'
                            value={formik.values.uan}
                            onChange={formik.handleChange}
                            required
                        />
                        <label htmlFor='pan'>PAN</label>
                        <Field
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
                        <Field
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
                        <Field
                            id='workphonenumber'
                            type='tel'
                            name='workphonenumber'
                            value={formik.values.workphonenumber}
                            onChange={formik.handleChange}
                            pattern='[6-9]{1}-[0-9]{5}-[0-9]{4}'
                            required
                        />

                        <label htmlFor='personalmobilenumber'>Personal Mobile Number</label>
                        <Field
                            id='personalmobilenumber'
                            type='tel'
                            name='personalmobilenumber'
                            value={formik.values.personalmobilenumber}
                            onChange={formik.handleChange}
                            pattern='[6-9]{1}-[0-9]{5}-[0-9]{4}'
                            required
                        />
                        <label id='personalemailaddress-label' htmlFor='personalemailaddress'>
                            Personal Email Address
                        </label>
                        <Field
                            id='personalemailaddress'
                            type='email'
                            name='personalemailaddress'
                            value={formik.values.personalemailaddress}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='address-label' htmlFor='address'>
                            Address
                        </label>
                        <Field
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
                        <Field
                            id='addedby'
                            type='text'
                            name='addedby'
                            value={formik.values.addedby}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label htmlFor='modifiedby'>Modified By</label>
                        <Field
                            id='modifiedby'
                            type='text'
                            name='modifiedby'
                            value={formik.values.modifiedby}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            required
                        />
                        <label id='addedtimelabel' htmlFor='addedtime'>
                            Added Time
                        </label>
                        <Field
                            id='addedtime'
                            type='datetime-local'
                            name='addedtime'
                            value={formik.values.addedtime}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            max={maxDate}
                            required
                        />
                        <label id='modifiedtimelabel' htmlFor='modifiedtime'>
                            Modified Time
                        </label>
                        <Field
                            id='modifiedtime'
                            type='datetime-local'
                            name='modifiedtime'
                            value={formik.values.modifiedtime}
                            onChange={formik.handleChange}
                            disabled={isFieldsDisabled}
                            max={maxDate}
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
                                    {formik.values.workExperience?.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                id={'companyname'}
                                                name={`companyname`}
                                                type='text'
                                                value={exp.companyname}
                                            />
                                            <Field id={'jobtitle'} name={`jobtitle`} type='text' value={exp.jobtitle} />
                                            <Field
                                                id={'fromdate'}
                                                name={`fromdate`}
                                                type='date'
                                                max={maxDate}
                                                value={exp.fromdate}
                                            />
                                            <Field
                                                id={'todate'}
                                                name={`todate`}
                                                type='date'
                                                max={maxDate}
                                                value={exp.todate}
                                            />

                                            <Field
                                                id={`jobdescription`}
                                                name={`jobdescription`}
                                                as='textarea'
                                                value={exp.jobdescription}
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
                                    {formik.values.educationDetails?.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                id={`institute`}
                                                name={`educationDetails.${index}.institutename`}
                                                type='text'
                                                value={exp.institutename}
                                            />
                                            <Field
                                                 id={'degree-1'}
                                                 name={`educationDetails.${index}.degree`}
                                                 type='text'
                                                 defaultValue={exp.degree}
                                            />
                                            <Field
                                                id={'specialization-1'}
                                                name={`educationDetails.${index}.specialization`}
                                                type='text'
                                                defaultValue={exp.specialization}
                                            />
                                            <Field
                                                id={'dateofcompletion'}
                                                name={`educationDetails.${index}.dateofcompletion`}
                                                type='date'
                                                defaultValue={exp.completion_date}
                                                max={maxDate}
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
                                    {formik.values.dependantDetails?.map((exp, index) => (
                                        <div key={index} className='work-experience-item'>
                                            <Field
                                                 id={`relation-name`}
                                                 name={`dependantDetails.${index}.name`}
                                                 type='text'
                                                 value={exp.name}
                                            />
                                            <Field
                                                id={'relation-ship'}
                                                name={`dependantDetails.${index}.relationship`}
                                                type='text'
                                                value={exp.relationship}
                                            />
                                            <Field
                                                id={'relationdateofbirth'}
                                                name={`dependantDetails.${index}.relationdateofbirth`}
                                                type='date'
                                                value={exp.relationdateofbirth}
                                                max={maxDate}
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
                        <button id='cancel-button' onClick={handleCancel} type='submit'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </FormikProvider>
    );
};


