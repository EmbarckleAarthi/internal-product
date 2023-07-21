import { UserService } from "../services/UserService";

export class AuthController {
    public async signup(Userdata):Promise(
        const existinguser = await UserService.findbyMail(Userdata.email);
        if(existinguser){
            console.log('user exixts already')
        }
        UserService.createUser(Userdata);
    )
}