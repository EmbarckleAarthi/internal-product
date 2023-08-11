import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/utils/Auth';
import './style.scss';
import { Card, CardContent, Typography } from '@mui/material';

export const Dashboard: React.FC = () => {

const [activeTab, setActiveTab] = useState<{}>();
const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();
    const auth = useAuth();

// axios.get(`user/getuserdata/${id}`)
//     .then(res=>setActiveTab(res.data))
//         .catch(err=>console.log(err))

useEffect(() => {
axios
.get(`user/getuserdata/${id}`)
.then((res) => setActiveTab(res.data))
.catch((err) => console.log(err));
}, []);
    
console.log('at',activeTab)
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

    const handledata = () => {
        const id = 'EE0000045';
        axios
            .get(`/user/getuserdata/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div className='header'>
            <h1>Welcome {location.state.username}</h1>
            <div className='navbar'>
<a href='/editprofile' id='editprofile-button' >Add</a>
</div>
</div>
<div className="tab-header-container">
<button id='profile-button'>Profile</button>

            <button onClick={handleLogOut}>Logout</button>
            {location.state.role === 'admin' ? <button onClick={handleAddUser}>Add user</button> : <></>}
            <button onClick={handleEdit}>Edit profile</button>
            <button onClick={handledata}>getdata</button>
            </div>
            <div className="card-container">
    {
   
      <Card className="movie-card"
      
      >
     
        <CardContent className="card-content">
       
        <div className='basic-information'>
        <h2>Basic Information</h2>
        <label htmlFor='employee-id'>Employee ID : {activeTab?.basic[0]?.employee_id ?? ""}</label>
          
        
       
        <label htmlFor='first-name'>First Name :  {activeTab?.basic[0]?.first_name ?? ""}</label>
        
       
        <label id='last-namelabel' htmlFor='last-name'>Last Name :  {activeTab?.basic[0]?.last_name ?? ""}</label>
       

        <label id='email-address-label' htmlFor='email-address'>Email Address : {activeTab?.basic[0]?.email ?? ""}</label>
       
        
        </div>

        <div className='work-information'>
        <h2>Work Information</h2>

        <label htmlFor='businessunit'>Business Unit : {activeTab?.workinfo[0]?.business_unit ?? ""}</label>
        

        <label htmlFor='division'>Division : {activeTab?.workinfo[0]?.division ?? ""}</label>
       

        <label htmlFor='employmenttype'>Employment Type : {activeTab?.workinfo[0]?.employment_type ?? ""}</label>
        

        <label htmlFor='department'>Department : {activeTab?.workinfo[0]?.department ?? ""}</label>
       

        <label htmlFor='employmentstatus'>Employment Status : {activeTab?.workinfo[0]?.employment_status ?? ""}</label>
        
        <label id='locationlabel' htmlFor='location'>Location : {activeTab?.workinfo[0]?.location ?? ""}</label>
        
        <label id='sourcelabel' htmlFor='sourceofhire'>Source Of Hire : {activeTab?.workinfo[0]?.source_of_hire ?? ""}</label>
        
        <label id="designationlabel" htmlFor='designation'>Designation : {activeTab?.workinfo[0]?.designation ?? ""}</label>
        
        <label id='dateofjoininglabel' htmlFor='dateofjoining'>Date Of Joining: {activeTab?.workinfo[0]?.joining_date ?? ""}</label>
        
      </div>

      <div className='hierarchy-information'>
       <h2>Hierarchy Information</h2>

        <label htmlFor='reportingmanager'>Reporting Manager :  {activeTab?.hierachy[0]?.reporting_manager ?? ""}</label>
        
      </div>

      <div className='personal-details'>
          <h2>Personal Details</h2>

          <label htmlFor='dateofbirth'>Date Of Birth : {activeTab?.personalinfo[0]?.date_of_birth ?? ""}</label>
          
          <label htmlFor='maritalstatus'>Marital Status : {activeTab?.personalinfo[0]?.marital_status ?? ""}</label>
         
          <label id='aboutmelabel' htmlFor='aboutme'>About Me : {activeTab?.personalinfo[0]?.aboutme ?? ""}</label>
          
      </div>

      <div className='identity-information'>
          <h2>Identity Information</h2>

          <label htmlFor='uan'>UAN : {activeTab?.identity[0]?.uan ?? ""}</label>
         
          <label htmlFor='pan'>PAN : {activeTab?.identity[0]?.pan ?? ""}</label>
         
          <label id='aadhar-label' htmlFor='aadhar'>Aadhar : {activeTab?.identity[0]?.aadhar ?? ""}</label>
          
      </div>

      <div className='contact-details'>
          <h2>Contact Details</h2>

          <label htmlFor='workphonenumber'>Work Phone Number : {activeTab?.basic[0]?.work_phonenumber ?? ""}</label>
          
          <label htmlFor='personalmobilenumber'>Personal Mobile Number : {activeTab?.basic[0]?.personal_mobilenumber ?? ""}</label>
          
          <label id='personalemailaddress-label' htmlFor='personalemailaddress'>Personal Email Address : {activeTab?.basic[0]?.personal_email ?? ""}</label>
         
          <label id='address-label' htmlFor='address'>Address : {activeTab?.basic[0]?.address ?? ""}</label>
          
      </div>

      <div className='system-fields'>
          <h2>System Fields</h2>

          <label htmlFor='addedby'>Added By : {activeTab?.systemfield[0]?.added_by ?? ""}</label>
         
          <label htmlFor='modifiedby'>Modified By : {activeTab?.systemfield[0]?.modified_by ?? ""}</label>
          
          <label id='addedtimelabel' htmlFor='addedtime'>Added Time : {activeTab?.systemfield[0]?.added_time ?? ""}</label>
          
          <label id='modifiedtimelabel' htmlFor='modifiedtime'>Modified Time : {activeTab?.systemfield[0]?.modified_time ?? ""}</label>
          
      </div>

      {/* <div className='work-experience'>
            <h2>Work Experience</h2>
              <div className="work-experience-header">
                  <label id='company-name'>Company name</label>
                  <label id='job-title'>Job Title</label>
                  <label id='from-date'>From Date</label>
                  <label id='to-date'>To Date</label>
                  <label id='job-description'>Job Description</label>
               </div>
      </div> */}

      
          {/* <Typography variant="h5" className="additional-text">
            FirstName: gjhghjgjhgjh
          </Typography>
          <Typography variant="h5" className="additional-text">
            lastname: hjgjhgjhgj
          </Typography> */}

          {/* <Typography variant="body2" className="additional-text">
          {movie.Rated}
          </Typography> */}

        {/* <Typography variant="body2">
         {movie.Images && <img src={movie.Images} alt={movie.Title} className="movie-image"/>}
        </Typography> */}

         
      </CardContent>
     
      </Card>
    
   
    }

</div>
        </div>
    );
};
