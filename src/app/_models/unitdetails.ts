export class Unitdetails {
  constructor(
    public unitInfo: string,
    public landlordId: string,
    public estateType: string,
    public isPetsAllowed: boolean,
    public isAvailable: boolean,
    public images: string,
    public dailyPrice: number,
    public cover: string,
    public address: string,
    public geoLocation: string
  ) {}
}
