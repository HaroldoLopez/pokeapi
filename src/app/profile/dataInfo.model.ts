import { FormGroup } from "@angular/forms";

export class DataInfo {
    hobbies:any[]
    infoForm:FormGroup

    constructor(infoForm:FormGroup, hobbies:any){
        this.hobbies = hobbies
        this.infoForm = infoForm
    }
}