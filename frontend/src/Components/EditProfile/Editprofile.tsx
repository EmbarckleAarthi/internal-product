import React, { useState } from 'react';
import './style.scss';

export const Editprofile = () => {
  const [state, setState] = useState({
    employeeid: "",
    firstname: "",
    lastname: "",
    email: "",
    businessunit:"",
    role:"",
    division:"",
    employmenttype:"",
    department:"",
    employmentstatus:"",
    location:"",
    sourceofhire:"",
    designation:"",
    dateofjoining:"",
    reportingmanager:"",
    dateofbirth:"",
    maritalstatus:"",
    aboutme:"",
    uan:"",
    pan:"",
    aadhar:"",
    workphonenumber:"",
    personalmobilenumber:"",
    personalemailaddress:"",
    address:"",
    addedby:"",
    modifiedby:"",
    addedtime:"",
    modifiedtime:"",
    companyname:"",
    jobtitle:"",
    fromdate:"",
    todate:"",
    jobdescription:"",
    institutename:"",
    degree:"",
    specialization:"",
    dateofcompletion:"",
    name:"",
    relationship:"",
    relationdateofbirth:""
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: { target: { value: any; name: any; }; }) {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div className='user-details'>
      <form className='profile-form' onSubmit={handleSubmit}>
        <div className='basic-information'>
          <h2>Basic Information</h2>
          <label htmlFor='employee-id'>Employee ID</label>
          <input
            id='employee-id'
            type='text'
            name='employeeid'
            value={state.employeeid}
            onChange={handleChange}
            required
          />

          <label htmlFor='first-name'>First Name</label>
          <input
            id='first-name'
            type='text'
            name='firstname'
            value={state.firstname}
            onChange={handleChange}
            required
          />

          <label htmlFor='last-name'>Last Name</label>
          <input
            id='last-name'
            type='text'
            name='lastname'
            value={state.lastname}
            onChange={handleChange}
            required
          />

          <label htmlFor='email-address'>Email Address</label>
          <input
            id='email-address'
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
            required
          />

        </div>
        <div className='work-information'>
        <h2>Work Information</h2>

          <label htmlFor='business-unit'>Business Unit</label>
          <input
            id='business-unit'
            type='text'
            name='business-unit'
            value={state.businessunit}
            onChange={handleChange}
            required
          />

          <label htmlFor='division'>Division</label>
          <input
            id='division'
            type='text'
            name='division'
            value={state.division}
            onChange={handleChange}
            required
          />

          <label htmlFor='employmenttype'>Employment Type</label>
          <input
            id='employmenttype'
            type='text'
            name='employmenttype'
            value={state.employmenttype}
            onChange={handleChange}
            required
          />

          <label htmlFor='department'>Department</label>
          <input
            id='department'
            type='text'
            name='department'
            value={state.department}
            onChange={handleChange}
            required
          />
          
          <label htmlFor='employmentstatus'>Employment Status</label>
          <input
            id='employmentstatus'
            type='text'
            name='employmentstatus'
            value={state.employmentstatus}
            onChange={handleChange}
            required
          />
          <label htmlFor='location'>Location</label>
          <input
            id='location'
            type='text'
            name='location'
            value={state.location}
            onChange={handleChange}
            required
          />
          <label htmlFor='sourceofhire'>Source Of Hire</label>
          <input
            id='sourceofhire'
            type='text'
            name='sourceofhire'
            value={state.sourceofhire}
            onChange={handleChange}
            required
          />
          <label htmlFor='designation'>Designation</label>
          <input
            id='designation'
            type='text'
            name='designation'
            value={state.designation}
            onChange={handleChange}
            required
          />
          <label htmlFor='dateofjoining'>Date Of Joining</label>
          <input
            id='dateofjoining'
            type='text'
            name='dateofjoining'
            value={state.dateofjoining}
            onChange={handleChange}
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
            value={state.reportingmanager}
            onChange={handleChange}
            required
          />
</div>

            <div className='personal-details'>
            <h2>Personal Details</h2>

            <label htmlFor='dateofbirth'>Date Of Birth</label>
            <input
            id='dateofbirth'
            type='text'
            name='dateofbirth'
            value={state.dateofbirth}
            onChange={handleChange}
            required
            />
            <label htmlFor='maritalstatus'>Marital Status</label>
            <input
            id='maritalstatus'
            type='text'
            name='maritalstatus'
            value={state.maritalstatus}
            onChange={handleChange}
            required
            />
            <label htmlFor='aboutme'>About Me</label>
            <input
            id='aboutme'
            type='text'
            name='aboutme'
            value={state.aboutme}
            onChange={handleChange}
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
            value={state.uan}
            onChange={handleChange}
            required
            />
            <label htmlFor='pan'>PAN</label>
            <input
            id='pan'
            type='text'
            name='pan'
            value={state.pan}
            onChange={handleChange}
            required
            />
            <label htmlFor='aadhar'>Aadhar</label>
            <input
            id='aadhar'
            type='text'
            name='aadhar'
            value={state.aadhar}
            onChange={handleChange}
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
            value={state.workphonenumber}
            onChange={handleChange}
            required
            />
            <label htmlFor='personalmobilenumber'>Personal Mobile Number</label>
            <input
            id='personalmobilenumber'
            type='text'
            name='personalmobilenumber'
            value={state.personalmobilenumber}
            onChange={handleChange}
            required
            />
            <label htmlFor='personalemailaddress'>Personal Email Address</label>
            <input
            id='personalemailaddress'
            type='text'
            name='personalemailaddress'
            value={state.personalemailaddress}
            onChange={handleChange}
            required
            />
            <label htmlFor='address'>Address</label>
            <input
            id='address'
            type='text'
            name='address'
            value={state.address}
            onChange={handleChange}
            required
            />
        <div className='system-fields'>
            <h2>System Fields</h2>

            <label htmlFor='addedby'>Added By</label>
            <input
            id='addedby'
            type='text'
            name='addedby'
            value={state.addedby}
            onChange={handleChange}
            required
            />
            <label htmlFor='modifiedby'>Modified By</label>
            <input
            id='modifiedby'
            type='text'
            name='modifiedby'
            value={state.modifiedby}
            onChange={handleChange}
            required
            />
            <label htmlFor='addedtime'>Added Time</label>
            <input
            id='addedtime'
            type='text'
            name='addedtime'
            value={state.addedtime}
            onChange={handleChange}
            required
            />
            <label htmlFor='modifiedtime'>Modified Time</label>
            <input
            id='modifiedtime'
            type='text'
            name='modifiedtime'
            value={state.modifiedtime}
            onChange={handleChange}
            required
            />
</div>

<div className='work-experience'>
            <h2>Work Experience</h2>

            <label htmlFor='companyname'>Company Name</label>
            <input
            id='companyname'
            type='text'
            name='companyname'
            value={state.companyname}
            onChange={handleChange}
            required
            />
            <label htmlFor='jobtitle'>Job Title</label>
            <input
            id='jobtitle'
            type='text'
            name='jobtitle'
            value={state.jobtitle}
            onChange={handleChange}
            required
            />
            <label htmlFor='fromdate'>From Date</label>
            <input
            id='fromdate'
            type='text'
            name='fromdate'
            value={state.fromdate}
            onChange={handleChange}
            required
            />
            <label htmlFor='todate'>To Date</label>
            <input
            id='todate'
            type='text'
            name='todate'
            value={state.todate}
            onChange={handleChange}
            required
            />
            <label htmlFor='jobdescription'>Job Description</label>
            <input
            id='jobdescription'
            type='text'
            name='jobdescription'
            value={state.jobdescription}
            onChange={handleChange}
            required
            />
</div>
<div className='educationdetails'>
            <h2>Education Details</h2>

            <label htmlFor='institutename'>Institute Name</label>
            <input
            id='institutename'
            type='text'
            name='institutename'
            value={state.institutename}
            onChange={handleChange}
            required
            />
            <label htmlFor='degree'>Degree/Diploma</label>
            <input
            id='degree'
            type='text'
            name='degree'
            value={state.degree}
            onChange={handleChange}
            required
            />
            <label htmlFor='specialization'>Specialization</label>
            <input
            id='specialization'
            type='text'
            name='specialization'
            value={state.specialization}
            onChange={handleChange}
            required
            />
            <label htmlFor='dateofcompletion'>Date Of Completion</label>
            <input
            id='dateofcompletion'
            type='text'
            name='dateofcompletion'
            value={state.dateofcompletion}
            onChange={handleChange}
            required
            />
            </div>
            <div className='dependantdetails'>
            <h2>Dependant Details</h2>

            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            name='name'
            value={state.name}
            onChange={handleChange}
            required
            />
            <label htmlFor='relationship'>Relationship</label>
            <input
            id='relationship'
            type='text'
            name='relationship'
            value={state.relationship}
            onChange={handleChange}
            required
            />
            <label htmlFor='relationdateofbirth'>Date Of Birth</label>
            <input
            id='relationdateofbirth'
            type='text'
            name='relationdateofbirth'
            value={state.relationdateofbirth}
            onChange={handleChange}
            required
            />
            <label htmlFor='dateofcompletion'>Date Of Completion</label>
            <input
            id='dateofcompletion'
            type='text'
            name='dateofcompletion'
            value={state.dateofcompletion}
            onChange={handleChange}
            required
            />
            </div>
            </div>

          <button id='submit-button' type='submit'>Submit</button>
          <button id='cancel-button' type='submit'>Cancel</button>
        
      </form>
    </div>
  );
};
