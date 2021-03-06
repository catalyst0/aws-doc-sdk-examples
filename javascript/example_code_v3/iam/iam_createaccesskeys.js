/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/iam-examples-managing-access-keys.html.

Purpose:
iam_createaccesskeys.js demonstrates how to create a new AWS access key and AWS access key ID for an IAM user.

Inputs (into command line below):
- REGION
 - IAM_USER_NAME

Running the code:
node iam_createaccesskeys.js REGION IAM_USER_NAME >newuserkeys.txt
(This create newuserkeys.txt and adds the access key ID and secret key to it.)
 */
// snippet-start:[iam.JavaScript.v3.keys.createAccessKey]
// Import required AWS SDK clients and commands for Node.js
const {IAMClient, CreateAccessKeyCommand} = require("@aws-sdk/client-iam");
// Set the AWS Region
const region = process.argv[2];
// Create IAM service object
const iam = new IAMClient(region);
// Set the parameters
const userName = process.argv[3];

async function run() {
  try{
    const data = await iam.send(new CreateAccessKeyCommand(userName));
    console.log("Success", data.AccessKey);
    }
  catch (err) {
  console.log('Error', err);
    }
};
run();
// snippet-end:[iam.JavaScript.v3.keys.createAccessKey]
exports.run = run; //for unit tests only
