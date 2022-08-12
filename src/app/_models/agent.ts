export class Agent {
  constructor(
    public _id: string,
    public agentUnits: [{ agentId: string; numberOfRenting: number }]
  ) {}
}
