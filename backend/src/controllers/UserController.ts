import { Request, Response } from 'express';

import { UserService } from '../services';

export class UserController {
    private userService!: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public profileData = async (req: Request, res: Response) => {
        console.log(req.body);
        const {
            employeeid,
            firstname,
            lastname,
            email,
            workphonenumber,
            personalmobilenumber,
            personalemailaddress,
            address,
            businessunit,
            division,
            employmenttype,
            department,
            employmentstatus,
            location,
            sourceofhire,
            designation,
            dateofjoining,
            reportingmanager,
            name,
            relationship,
            relationdateofbirth,
            institutename,
            degree,
            specialization,
            dateofcompletion,
            uan,
            pan,
            aadhar,
            dateofbirth,
            maritalstatus,
            aboutme,
            addedby,
            addedtime,
            modifiedby,
            modifiedtime,
            companyname,
            jobtitle,
            fromdate,
            todate,
            jobdescription,
        } = req.body;
        try {
            const basicinfo = await this.userService.basicdetails({
                employeeid,
                firstname,
                lastname,
                email,
                workphonenumber,
                personalmobilenumber,
                personalemailaddress,
                address,
            });
            const workinfo = await this.userService.workinformation({
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
            });

            const hierarchyinfo = await this.userService.hierarchyinformation({
                employeeid,
                reportingmanager,
            });

            const dependentdetails = await this.userService.dependentdetails({
                employeeid,
                name,
                relationship,
                relationdateofbirth,
            });
            const educationdetails = await this.userService.educationdetails({
                employeeid,
                institutename,
                degree,
                specialization,
                dateofcompletion,
            });

            const identityinfo = await this.userService.identityinformation({
                employeeid,
                uan,
                pan,
                aadhar,
            });
            const personaldetails = await this.userService.personaldetails({
                employeeid,
                dateofbirth,
                maritalstatus,
                aboutme,
            });
            const systemfields = await this.userService.systemfields({
                employeeid,
                addedby,
                addedtime,
                modifiedby,
                modifiedtime,
            });
            const workexperience = await this.userService.workexperience({
                employeeid,
                companyname,
                jobtitle,
                fromdate,
                todate,
                jobdescription,
            });

            if (
                basicinfo &&
                workinfo &&
                hierarchyinfo &&
                dependentdetails &&
                educationdetails &&
                identityinfo &&
                personaldetails &&
                systemfields &&
                workexperience
            ) {
                res.send('profile data added');
            } else {
                res.send('cannot add profile data');
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: 'unable to find user' });
        }
    };
}
