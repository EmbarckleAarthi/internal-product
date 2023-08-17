export interface IDependentDetails {
    employeeid: string;
    dependantdetails: [
        {
            name: string;
            relationship: string;
            relationdateofbirth: string;
        },
    ];
}
