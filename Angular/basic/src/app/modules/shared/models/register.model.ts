export class RegisterModel {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    mobile: string = "";

    constructor(data?: any) {
        this.firstName = data?.firstName || "";
        this.lastName = data?.lastName || "";
        this.email = data?.email || "";
        this.mobile = data?.mobile || "";
    }
}