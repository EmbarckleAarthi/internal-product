import './style.scss';

import { Card, CardContent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/utils/Auth';

export const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState({});
    const [adminData, setAdminData] = useState([]);
    const location = useLocation();
    const id = location.state.id;
    const disable = location.state.role;
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        axios
            .get(`user/getuserdata/${id}`)
            .then((res) => setActiveTab(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(activeTab);
    useEffect(() => {
        axios
            .get(`admin/getusers`)
            .then((res) => setAdminData(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log('at', activeTab);
    console.log('ad', adminData);
    const handleLogOut = () => {
        axios
            .get('/auth/logout', { withCredentials: true })
            .then(() => navigate('/'))
            .catch((err) => console.log(err));
    };
    const handleAddUser = () => {
        navigate('/signupform');
    };
    const handleEdit = () => {
        navigate(`/editprofile`, {
            state: { role: disable, id: id },
        });
    };

    const handleAdminEdit = async (id: string) => {
        navigate(`/editprofile`, {
            state: { id: id },
        });
    };

    return (
        <div>
            <div className='header'>
                <h1>Welcome {location.state.username}</h1>
                <div className='navbar'>
                    <button id='editprofile-button' onClick={handleEdit}>
                        Edit
                    </button>
                    <button id='logout-button' onClick={handleLogOut}>
                        Logout
                    </button>
                </div>
                <div className='tab-header-container'>
                    <button id='profile-button'>Profile</button>

                    {location.state.role === 'admin' ? (
                        <button id='adduser-button' onClick={handleAddUser}>
                            Add user
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <div className='card-container'>
                <Card className='movie-card'>
                    <CardContent className='card-content'>
                        {location.state.role === 'admin' ? (
                            <div className='admin-card'>
                                <h3>Members of Organization</h3>
                                <table>
                                    <tr className='table-heading'>
                                        <td className='heading-content'>Employee_id</td>
                                        <td className='heading-content'>Name</td>
                                        <td className='heading-content'>Modified by</td>
                                        <td className='heading-content'>Added by</td>
                                    </tr>
                                    {adminData.map((item) => (
                                        <tr>
                                            <td>{item.employee_id}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.modified_by}</td>
                                            <td>{item.added_by}</td>
                                            <td>
                                                <button onClick={() => handleAdminEdit(item.employee_id)}>
                                                    Edit data
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        ) : (
                            <>
                                <div className='basic-information'>
                                    <h2>Basic Information</h2>
                                    <div>
                                        <label htmlFor='employee-id'>
                                            Employee ID : {activeTab?.employee_id ?? ''}
                                        </label>

                                        <label htmlFor='first-name'>First Name : {activeTab?.first_name ?? ''}</label>

                                        <label id='last-namelabel' htmlFor='last-name'>
                                            Last Name : {activeTab?.last_name ?? ''}
                                        </label>

                                        <label id='email-address-label' htmlFor='email-address'>
                                            Email Address : {activeTab?.email ?? ''}
                                        </label>
                                    </div>
                                </div>
                                <div className='work-information'>
                                    <h2>Work Information</h2>

                                    <label htmlFor='businessunit'>
                                        Business Unit : {activeTab?.business_unit ?? ''}
                                    </label>

                                    <label htmlFor='division'>Division : {activeTab?.division ?? ''}</label>

                                    <label htmlFor='employmenttype'>
                                        Employment Type : {activeTab?.employment_type ?? ''}
                                    </label>

                                    <label htmlFor='department'>Department : {activeTab?.department ?? ''}</label>

                                    <label htmlFor='employmentstatus'>
                                        Employment Status : {activeTab?.employment_status ?? ''}
                                    </label>

                                    <label id='locationlabel' htmlFor='location'>
                                        Location : {activeTab?.location ?? ''}
                                    </label>

                                    <label id='sourcelabel' htmlFor='sourceofhire'>
                                        Source Of Hire : {activeTab?.source_of_hire ?? ''}
                                    </label>

                                    <label id='designationlabel' htmlFor='designation'>
                                        Designation : {activeTab?.designation ?? ''}
                                    </label>

                                    <label id='dateofjoininglabel' htmlFor='dateofjoining'>
                                        Date Of Joining: {activeTab?.joining_date ?? ''}
                                    </label>
                                </div>
                                <div className='hierarchy-information'>
                                    <h2>Hierarchy Information</h2>

                                    <label htmlFor='reportingmanager'>
                                        Reporting Manager : {activeTab?.reporting_manager ?? ''}
                                    </label>
                                </div>
                                <div className='personal-details'>
                                    <h2>Personal Details</h2>

                                    <label htmlFor='dateofbirth'>
                                        Date Of Birth : {activeTab?.date_of_birth ?? ''}
                                    </label>

                                    <label htmlFor='maritalstatus'>
                                        Marital Status : {activeTab?.marital_status ?? ''}
                                    </label>

                                    <label id='aboutmelabel' htmlFor='aboutme'>
                                        About Me : {activeTab?.aboutme ?? ''}
                                    </label>
                                </div>
                                <div className='identity-information'>
                                    <h2>Identity Information</h2>

                                    <label htmlFor='uan'>UAN : {activeTab?.uan ?? ''}</label>

                                    <label htmlFor='pan'>PAN : {activeTab?.pan ?? ''}</label>

                                    <label id='aadhar-label' htmlFor='aadhar'>
                                        Aadhar : {activeTab?.aadhar ?? ''}
                                    </label>
                                </div>
                                <div className='contact-details'>
                                    <h2>Contact Details</h2>

                                    <label htmlFor='workphonenumber'>
                                        Work Phone Number : {activeTab?.work_phonenumber ?? ''}
                                    </label>

                                    <label htmlFor='personalmobilenumber'>
                                        Personal Mobile Number : {activeTab?.personal_mobilenumber ?? ''}
                                    </label>

                                    <label id='personalemailaddress-label' htmlFor='personalemailaddress'>
                                        Personal Email Address : {activeTab?.personal_email ?? ''}
                                    </label>

                                    <label id='address-label' htmlFor='address'>
                                        Address : {activeTab?.address ?? ''}
                                    </label>
                                </div>
                                <div className='system-fields'>
                                    <h2>System Fields</h2>

                                    <label htmlFor='addedby'>Added By : {activeTab?.added_by ?? ''}</label>

                                    <label htmlFor='modifiedby'>Modified By : {activeTab?.modified_by ?? ''}</label>

                                    <label id='addedtimelabel' htmlFor='addedtime'>
                                        Added Time : {activeTab?.added_time ?? ''}
                                    </label>

                                    <label id='modifiedtimelabel' htmlFor='modifiedtime'>
                                        Modified Time : {activeTab?.modified_time ?? ''}
                                    </label>
                                </div>

                                <div className='work-experience'>
                                    <h2>Work Experience</h2>
                                    <div className='work-experience-header'>
                                        <label htmlFor='company-name' id='company-name'>
                                            <b>Company name</b>
                                        </label>
                                        <label id='job-title'>
                                            <b>Job Title</b>
                                        </label>
                                        <label id='from-date'>
                                            <b>From Date</b>
                                        </label>
                                        <label id='to-date'>
                                            <b>To Date</b>
                                        </label>
                                        <label id='job-description'>
                                            <b>Job Description</b>
                                        </label>
                                    </div>
                                    {activeTab?.workexperience &&
                                        activeTab.workexperience.map(
                                            (
                                                experience: {
                                                    company_name: string;
                                                    job_title: string;
                                                    from_date: string;
                                                    to_date: string;
                                                    job_description: string;
                                                },
                                                index: React.Key | null | undefined
                                            ) => (
                                                <div className='work-experience-item' key={index}>
                                                    <label htmlFor='company-name' id='company-name'>
                                                        {experience.company_name ?? ''}
                                                    </label>
                                                    <label id='job-title'>{experience.job_title ?? ''}</label>
                                                    <label id='from-date'>{experience.from_date ?? ''}</label>
                                                    <label id='to-date'>{experience.to_date ?? ''}</label>
                                                    <label id='job-description'>
                                                        {experience.job_description ?? ''}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                </div>

                                <div className='education-details'>
                                    <h2>Education Details</h2>
                                    <div className='education-details-header'>
                                        <label htmlFor='institute' id='institute'>
                                            <b>Institute</b>
                                        </label>
                                        <label id='degree'>
                                            <b>Degree</b>
                                        </label>
                                        <label id='specialization'>
                                            <b>Specialization</b>
                                        </label>
                                        <label id='dateof-completion'>
                                            <b>Date Of Completion</b>
                                        </label>
                                    </div>
                                    {activeTab?.educationdata &&
                                        activeTab.educationdata.map(
                                            (
                                                education: {
                                                    institute_name: any;
                                                    degree: any;
                                                    specialization: any;
                                                    completion_date: any;
                                                },
                                                index: React.Key | null | undefined
                                            ) => (
                                                <div className='education-details-item' key={index}>
                                                    <label htmlFor='institute' id='institute'>
                                                        {education.institute_name ?? ''}
                                                    </label>
                                                    <label id='degree'>{education.degree ?? ''}</label>
                                                    <label id='specialization'>{education.specialization ?? ''}</label>
                                                    <label id='dateof-completion'>
                                                        {education.completion_date ?? ''}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                </div>

                                <div className='dependant-details'>
                                    <h2>Dependant Details</h2>
                                    <div className='dependant-details-header'>
                                        <label htmlFor='name' id='name'>
                                            <b>Name</b>
                                        </label>
                                        <label id='relationship'>
                                            <b>Relationship</b>
                                        </label>
                                        <label id='relation_birthday'>
                                            <b>Relation Date Of Birth</b>
                                        </label>
                                    </div>
                                    {activeTab?.dependentdata &&
                                        activeTab.dependentdata.map(
                                            (
                                                dependent: { name: any; relationship: any; relation_birthday: any },
                                                index: React.Key | null | undefined
                                            ) => (
                                                <div className='dependant-details-item' key={index}>
                                                    <label htmlFor='name' id='name'>
                                                        {dependent.name ?? ''}
                                                    </label>
                                                    <label id='relationship'>{dependent.relationship ?? ''}</label>
                                                    <label id='relation_birthday'>
                                                        {dependent.relation_birthday ?? ''}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
