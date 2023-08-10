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
    }) {
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
    }) {
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

    public async hierarchyinformation({ employeeid, reportingmanager }) {
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

    public async dependentdetails({ employeeid, name, relationship, relationdateofbirth }) {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO dependent_details values(?,?,?,?)`,
                [employeeid, name, relationship, relationdateofbirth],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('dependent details added');
                    }
                }
            );
        });
    }
    public async educationdetails({ employeeid, institutename, degree, specialization, dateofcompletion }) {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO education_details values(?,?,?,?,?)`,
                [employeeid, institutename, degree, specialization, dateofcompletion],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('education details added');
                    }
                }
            );
        });
    }

    public async identityinformation({ employeeid, uan, pan, aadhar }) {
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
    public async personaldetails({ employeeid, dateofbirth, maritalstatus, aboutme }) {
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

    public async systemfields({ employeeid, addedby, addedtime, modifiedby, modifiedtime }) {
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
    public async workexperience({ employeeid, companyname, jobtitle, fromdate, todate, jobdescription }) {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO work_experience values (?,?,?,?,?,?)`,
                [employeeid, companyname, jobtitle, fromdate, todate, jobdescription],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('work experience added');
                    }
                }
            );
        });
    }
}
