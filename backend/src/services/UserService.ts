import {
    IBasicDetails,
    IDependentDetails,
    IEducationDetails,
    IHierarchyDetails,
    IIdentityDetails,
    IPersonalDetails,
    ISystemFields,
    IWorkDetails,
    IWorkExperience,
} from '@common/interface';

import { database } from '../database';

export class UserService {
    public async basicdetails({
        employeeid,
        firstname,
        lastname,
        email,
        workphonenumber,
        personalmobilenumber,
        personalemailaddress,
        address,
    }: IBasicDetails): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO basic_information values(?,?,?,?,?,?,?,?)`,
                [
                    employeeid,
                    firstname,
                    lastname,
                    email,
                    workphonenumber,
                    personalmobilenumber,
                    personalemailaddress,
                    address,
                ],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('data added successfully');
                    }
                }
            );
        });
    }

    public async workinformation({
        employeeid,
        businessunit,
        division,
        employmenttype,
        department,
        employmentstatus,
        location,
        sourceofhire,
        designation,
        dateofjoining,
    }: IWorkDetails): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO work_information values(?,?,?,?,?,?,?,?,?,?)`,
                [
                    employeeid,
                    businessunit,
                    division,
                    employmenttype,
                    department,
                    employmentstatus,
                    location,
                    sourceofhire,
                    designation,
                    dateofjoining,
                ],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('work information added');
                    }
                }
            );
        });
    }

    public async hierarchyinformation({ employeeid, reportingmanager }: IHierarchyDetails): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO hierarchy_info values(?,?)`, [employeeid, reportingmanager], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('hierarchy info added successfully');
                }
            });
        });
    }

    public async dependentdetails({ employeeid, dependantdetails }: IDependentDetails) {
        return Promise.all(
            dependantdetails.map((item) => {
                new Promise((resolve, reject) => {
                    const res = database.query(`INSERT INTO dependent_details values(?,?,?,?)`, [
                        employeeid,
                        item.name,
                        item.relationship,
                        item.relationdateofbirth,
                    ]);
                    if (res) {
                        resolve('');
                    } else {
                        reject('not fulfilled');
                    }
                });
            })
        );
    }

    public async educationDetails({ employeeid, educationdetails }: IEducationDetails): Promise<string[]> {
        return Promise.all(
            educationdetails.map<Promise<string>>((item) => {
                return new Promise((resolve, reject) => {
                    const res = database.query(`INSERT INTO education_details values(?,?,?,?,?)`, [
                        employeeid,
                        item.institutename,
                        item.degree,
                        item.specialization,
                        item.dateofcompletion,
                    ]);
                    if (res) {
                        return resolve('data inserted');
                    } else {
                        return reject('not fulfilled');
                    }
                });
            })
        );
    }

    public async workexperience({ employeeid, workexperience }: IWorkExperience): Promise<string[]> {
        return Promise.all(
            workexperience.map<Promise<string>>((item) => {
                return new Promise((resolve, reject) => {
                    const res = database.query(`INSERT INTO work_experience values(?,?,?,?,?,?)`, [
                        employeeid,
                        item.companyname,
                        item.jobtitle,
                        item.fromdate,
                        item.todate,
                        item.jobdescription,
                    ]);
                    if (res) {
                        resolve('data inserted');
                    } else {
                        reject('not fulfilled');
                    }
                });
            })
        );
    }

    public async identityinformation({ employeeid, uan, pan, aadhar }: IIdentityDetails): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO identity_info values (?,?,?,?)`, [employeeid, uan, pan, aadhar], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('identity info added');
                }
            });
        });
    }
    public async personaldetails({
        employeeid,
        dateofbirth,
        maritalstatus,
        aboutme,
    }: IPersonalDetails): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO personal_details values (?,?,?,?)`,
                [employeeid, dateofbirth, maritalstatus, aboutme],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('personal info added');
                    }
                }
            );
        });
    }

    public async systemfields({
        employeeid,
        addedby,
        addedtime,
        modifiedby,
        modifiedtime,
    }: ISystemFields): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO system_fields values (?,?,?,?,?)`,
                [employeeid, addedby, addedtime, modifiedby, modifiedtime],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('system fields added');
                    }
                }
            );
        });
    }

    public async getBasicDetails(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM basic_information where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async getHierarchyDetails(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM hierarchy_info where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async getIdentityDetails(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM identity_info where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async getPersonalDetails(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM personal_details where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    public async getSystemFields(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM system_fields where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    public async getWorkInformation(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM work_information where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async getWorkExperience(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM work_experience where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public async getEducation(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM education_details where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    public async getDependent(employeeid: string) {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM dependent_details where employee_id = "${employeeid}"`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
