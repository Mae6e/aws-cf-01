const AWS = require('@aws-sdk/client-cloudformation');
const fs = require('fs');

const keyPair = process.env.KEY_PAIR_NAME;
const StackName = process.env.STACK_NAME;
const region = process.env.REGION;

const cloudformation = new AWS.CloudFormation({ region });

const params = {
  StackName,
  TemplateBody: fs.readFileSync('cloud-formation/ec2-s3-stack.yml', 'utf8'),
  Parameters: [{ ParameterKey: 'KeyName', ParameterValue: keyPair }],
};

cloudformation.updateStack(params, (error, data) => {
  if (error) console.error('Update failed:', error.message);
  else console.log('Updating stack:', data.StackId);
});
