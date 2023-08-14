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
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        axios
            .get(`user/getuserdata/${id}`)
            .then((res) => setActiveTab(res.data))
            .catch((err) => console.log(err));
    }, []);

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
            .get('/auth/logout')
            // .then(() => auth.setIsLoggedIn(false))
            .then(() => navigate('/'))
            .catch((err) => console.log(err));
    };
    const handleAddUser = () => {
        navigate('/signupform');
    };

    const handleEdit = () => {
        navigate('/editprofile');
    };

    return (
        <div>
            <div className='header'>
                <h1>Welcome {location.state.username}</h1>
                <div className='navbar'>
                    <a href='/editprofile' id='editprofile-button'>
                        Add
                    </a>
                </div>
            </div>
            <div className='tab-header-container'>
                <button id='profile-button'>Profile</button>

                <button onClick={handleLogOut}>Logout</button>
                {location.state.role === 'admin' ? <button onClick={handleAddUser}>Add user</button> : <></>}
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
                                                <button>Edit data</button>
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        ) : (
                            <>
                                <div className='basic-information'>
                                    <h2>Basic Information</h2>
                                    <label htmlFor='employee-id'>Employee ID : {activeTab?.employee_id ?? ''}</label>

                                    <label htmlFor='first-name'>First Name : {activeTab?.first_name ?? ''}</label>

                                    <label id='last-namelabel' htmlFor='last-name'>
                                        Last Name : {activeTab?.last_name ?? ''}
                                    </label>

                                    <label id='email-address-label' htmlFor='email-address'>
                                        Email Address : {activeTab?.email ?? ''}
                                    </label>
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
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
