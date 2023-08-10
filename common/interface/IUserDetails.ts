export interface IUserDetails {
    firstname: string;
    lastname: string;
    employeeid: string;
    email: string;
    businessunit: string;
    division: string;
    employmenttype: string;
    department: string;
    employmentstatus: string;
    location: string;
    sourceofhire: string;
    designation: string;
    dateofjoining: string;
    reportingmanager: string;
    dateofbirth: string;
    maritalstatus: string;
    aboutme: string;
    uan: string;
    pan: string;
    aadhar: string;
    workphonenumber: string;
    personalmobilenumber: string;
    personalemailaddress: string;
    address: string;
    addedby: string;
    modifiedby: string;
    addedtime: string;
    modifiedtime: string;
    workExperience: [
        {
            companyname: string;
            jobtitle: string;
            fromdate: string;
            todate: string;
            jobdescription: string;
        },
    ];
    dependantDetails: [
        {
            name: string;
            relationship: string;
            relationdateofbirth: string;
        },
    ];
}
