import { Request, Response } from 'express';

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

import { UserService } from '../services';

export class UserController {
    private userService!: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public profileData = async (req: Request, res: Response) => {
        const dependantdetails: IDependentDetails['dependantdetails'] = req.body.values.dependantDetails;
        const educationdetails: IEducationDetails['educationdetails'] = req.body.values.educationDetails;
        const workexperience: IWorkExperience['workexperience'] = req.body.values.workExperience;
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
        }: IBasicDetails &
            IHierarchyDetails &
            IHierarchyDetails &
            IIdentityDetails &
            IPersonalDetails &
            ISystemFields &
            IWorkDetails = req.body.values;
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

            const dependentdetails = await this.userService.dependentdetails({ employeeid, dependantdetails });
            const educationDetails = await this.userService.educationDetails({
                employeeid,
                educationdetails,
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
            const workExperience = await this.userService.workexperience({
                employeeid,
                workexperience,
            });

            if (
                basicinfo &&
                workinfo &&
                hierarchyinfo &&
                dependentdetails &&
                educationDetails &&
                identityinfo &&
                personaldetails &&
                systemfields &&
                workExperience
            ) {
                res.send('profile data added');
            } else {
                res.send('cannot add profile data');
            }
        } catch (err) {
            res.status(500).send({ message: 'unable to find user' });
        }
    };

    public getUserData = async (req: Request, res: Response) => {
        const uid = req.params.id;

        const basicdata = await this.userService.getBasicDetails(uid);
        const hierarchydata = await this.userService.getHierarchyDetails(uid);
        const identitydata = await this.userService.getIdentityDetails(uid);
        const perdsonaldata = await this.userService.getPersonalDetails(uid);
        const sytemfielddata = await this.userService.getSystemFields(uid);
        const workinfodata = await this.userService.getWorkInformation(uid);
        const workexperiencedata = await this.userService.getWorkExperience(uid);
        const educationdata = await this.userService.getEducation(uid);
        const dependentdata = await this.userService.getDependent(uid);

        const userdata = {
            ...basicdata[0],
            ...hierarchydata[0],
            ...identitydata[0],
            ...perdsonaldata[0],
            ...sytemfielddata[0],
            ...workinfodata[0],
            workexperience: workexperiencedata,
            educationdata: educationdata,
            dependentdata: dependentdata,
        };
        if (userdata) {
            res.status(200).send(userdata);
        } else {
            res.status(401).send({ msg: 'not found' });
        }
    };
}
