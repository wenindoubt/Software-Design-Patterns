import * as AWS from "aws-sdk";

interface GenericData {
  getAllData();
  getDataById();
}

export class ReferralProvider implements GenericData {
  constructor(private readonly referralProvider: GenericData) {}

  public async getAllData() {
    return await this.referralProvider.getAllData();
  }

  getDataById() {
    throw new Error("Method not implemented.");
  }
}

export class ReferralGroup implements GenericData {
  getAllData() {
    throw new Error("Method not implemented.");
  }

  getDataById() {
    throw new Error("Method not implemented.");
  }
}

class DataContext {
  constructor(private strategy: GenericData) {}

  public setStrategy(strategy: GenericData) {
    this.strategy = strategy;
  }

  public loadAllData() {
    this.strategy.getAllData();
  }

  public loadDataById() {
    this.strategy.getDataById();
  }
}

export class RepositoryContext {
  constructor(private ddb: any) {}

  public loadAllData() {
    this.ddb.scan({ TableName: "test" });
  }
}
