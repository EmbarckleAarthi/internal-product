export interface IWorkExperience {
    employeeid: string;
    workexperience: [
        {
            companyname: string;
            jobtitle: string;
            fromdate: string;
            todate: string;
            jobdescription: string;
        },
    ];
}
