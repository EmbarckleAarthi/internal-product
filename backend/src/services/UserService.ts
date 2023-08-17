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
    public async basicdetailsUpdate({
        employeeid,
        firstname,
        lastname,
        email,
        workphonenumber,
        personalmobilenumber,
        personalemailaddress,
        address,
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE basic_information SET employee_id= '${employeeid}',
                 first_name='${firstname}', last_name='${lastname}',email='${email}',work_phonenumber='${workphonenumber}',
                 personal_mobilenumber='${personalmobilenumber}',personal_email='${personalemailaddress}',address='${address}'
                 where employee_id='${employeeid}'`,

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

    public async workinformationUpdate({
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
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE work_information SET business_unit='${businessunit}',division='${division}',
                    employment_type='${employmenttype}',department='${department}',employment_status='${employmentstatus}',
                    location='${location}',source_of_hire='${sourceofhire}',designation='${designation}',joining_date='${dateofjoining}'
                     where employee_id='${employeeid}'`,

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

    public async hierarchyinformationUpdate({ employeeid, reportingmanager }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE hierarchy_info SET reporting_manager = '${reportingmanager}' where employee_id = '${employeeid}'`,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('hierarchy info added successfully');
                    }
                }
            );
        });
    }

    public async dependentdetailsUpdate({ employeeid, dependantdetails }): Promise<string[]> {
        return Promise.all(
            dependantdetails.map((item: { name: string; relationship: string; relationdateofbirth: string }) => {
                new Promise((resolve, reject) => {
                    const res = database.query(`
                    UPDATE dependent_details SET name='${item.name}', relationship='${item.relationship}',
                    relation_birthday='${item.relationdateofbirth}' where employee_id ='${employeeid}'`);
                    if (res) {
                        resolve('data inserted');
                    } else {
                        reject('not fulfilled');
                    }
                });
            })
        );
    }

    public async educationDetailsUpdate({ employeeid, educationdetails }): Promise<string[]> {
        return Promise.all(
            educationdetails.map(
                (item: { institutename: string; degree: string; specialization: string; dateofcompletion: string }) => {
                    new Promise((resolve, reject) => {
                        const res = database.query(
                            `UPDATE education_details SET institute_name = '${item.institutename}',
                    degree='${item.degree}', specialization = '${item.specialization}',
                    completion_date = '${item.dateofcompletion}' where employee_id = '${employeeid}'`
                        );
                        if (res) {
                            resolve('data inserted');
                        } else {
                            reject('not fulfilled');
                        }
                    });
                }
            )
        );
    }

    public async workexperienceUpdate({ employeeid, workexperience }): Promise<string[]> {
        return Promise.all(
            workexperience.map((item) => {
                new Promise((resolve, reject) => {
                    const res = database.query(
                        `UPDATE work_experience SET company_name = '${item.companyname}',
                    job_title = '${item.jobtitle}', from_date='${item.fromdate}',to_date ='${item.todate}',
                    job_description='${item.jobdescription}'
                    where employee_id ='${employeeid}'`
                    );
                    if (res) {
                        resolve('data inserted');
                    } else {
                        reject('not fulfilled');
                    }
                });
            })
        );
    }

    public async identityinformationUpdate({ employeeid, uan, pan, aadhar }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE identity_info SET uan='${uan}', pan = '${pan}', aadhar = '${aadhar}' where employee_id = '${employeeid}'`,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('identity info added');
                    }
                }
            );
        });
    }
    public async personaldetailsUpdate({ employeeid, dateofbirth, maritalstatus, aboutme }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE personal_details SET date_of_birth= '${dateofbirth}', marital_status = '${maritalstatus}', aboutme = '${aboutme}' where employee_id = '${employeeid}'`,

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

    public async systemfieldsUpdate({ employeeid, addedby, addedtime, modifiedby, modifiedtime }): Promise<string> {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE system_fields SET added_by = '${addedby}', added_time ='${addedtime}', modified_by = '${modifiedby}',
                modified_time = '${modifiedtime}' where employee_id = '${employeeid}'`,

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
}
