import { Date, ObjectId } from 'mongoose';

export class Contract {
  constructor(
    public _id?: ObjectId,
    public unitId?: ObjectId,
    public landlordId?: any,
    public agentId?:any,
    public rentalStart?: string,
    public rentalEnd?: string,
    public totalAmount?: number,
    public paymentAmount?: number,
    public paymentMethod?: number,
    public offerPercentage?: number,
    public state: string = 'proposed'
  ) {}
}
