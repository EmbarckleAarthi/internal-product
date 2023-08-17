export interface IEducationDetails {
    employeeid: string;
    educationdetails: {
        institutename: string;
        degree: string;
        specialization: string;
        dateofcompletion: string;
    }[];
}
