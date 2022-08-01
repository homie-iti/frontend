
export enum Gender{
    male = "male",
    female = "female"
  }

export class SignUpData {
    constructor(
        public firstname:string,
        public middlename:string,
        public lastname:string,
        public email:string,
        public password:string,
        public nationalId:number,
        public phone:string,
        public gender:Gender,
        public age:number

        
    ){}
}
