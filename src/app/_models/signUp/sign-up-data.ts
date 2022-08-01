
export enum Gender{
    male = "male",
    female = "female"
  }

export class SignUpData {
    constructor(
        public firstName:string,
        public middleName:string,
        public lastName:string,
        public email:string,
        public password:string,
        public nationalId:number,
        public phone:number,
        public gender:Gender,
        public age:number,
        public confirmPassword:string

        
    ){}
}
