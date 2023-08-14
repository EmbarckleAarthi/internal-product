import { database } from '../database';

export class AdminService {
    public async getUsers() {
        return new Promise((resolve, reject) => {
            database.query(
                `SELECT basic_information.employee_id,basic_information.first_name,system_fields.added_by,system_fields.modified_by,modified_time FROM basic_information INNER JOIN system_fields ON basic_information.employee_id = system_fields.employee_id`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
}
