export class Units {
  constructor(
    public landlordId: string,
    public agentId: string,
    public cityId: string,
    public estateType: string,
    public address: string,
    public dailyPrice: number,
    public isAvailable: boolean,
    public cover: string,
    public images: string,
    public isPetsAllowed: boolean,
    public numberOfResidents: number,
    public unitInfo: string,
    public allowedGender: string,
    public geoLocation: string,
  ) {}
}
