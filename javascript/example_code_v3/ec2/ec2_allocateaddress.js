/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide//ec2-example-elastic-ip-addresses.html

Purpose:
ec2_allocateaddress.js demonstrates how to allocate and associate an Elastic IP address to an Amazon EC2 instance.

Inputs:
- REGION (into command line below)
- INSTANCE_ID (into command line below)

Running the code:
node ec2_allocateaddress.js REGION INSTANCE_ID
*/
// snippet-start:[ec2.JavaScript.v3.Addresses.allocateAddress]
// Import required AWS SDK clients and commands for Node.js
const {
    EC2, AllocateAddressCommand, AssociateAddressCommand
} = require("@aws-sdk/client-ec2");
// Set the AWS region
const region = process.argv[2];
// Create EC2 service object
const ec2client = new EC2(region);
// Set the parameters
const paramsAllocateAddress = {Domain: 'vpc'};

async function run(){
    try {
        const data = await ec2client.allocateAddress(paramsAllocateAddress);
        console.log("Address allocated:", data.AllocationId);
        var paramsAssociateAddress = {
            AllocationId: data.AllocationId,
            InstanceId: process.argv[3]
        }
    }
    catch(err){
        console.log("Address Not Allocated", err);
    }
    try{
        const results = await ec2client.send(new AssociateAddressCommand(paramsAssociateAddress))
        console.log("Address associated:", results.AssociationId);
    }
    catch(err){
        console.log("Address Not Associated", err);
    }
};
run();
// snippet-end:[ec2.JavaScript.v3.Addresses.allocateAddress]
exports.run = run; //for unit tests only
