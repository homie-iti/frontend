export class Users {
  constructor(
    public _id?: string,
    public fullName?: string,
    public email?: string,
    public password?: string,
    public age?: number,
    public gender?: string,
    public phone?: string,
    public national_id?: number,
    public image?: string,
    public balance?: number,
    public address?: object,
    public favoriteUnits?: string[],
    public isLandlord: boolean = false,
    public isAgent: boolean = false,
    public isAccountActivated: boolean = false,
    public resetLink: string = ''
  ) {}
}
