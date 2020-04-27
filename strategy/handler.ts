import * as AWS from "aws-sdk";
import { ReferralProvider } from "./angular";
import { RepositoryContext } from "./angular";

const ddb = new AWS.DynamoDB.DocumentClient();

export const getReferrals = new ReferralProvider(new RepositoryContext(ddb));

// export const getReferralById = new ReferralProvider().getDataById();
//
// export const getReferralGroups = new ReferralGroup().getAllData();
//
// export const getReferralGroupById = new ReferralGroup().getDataById();
