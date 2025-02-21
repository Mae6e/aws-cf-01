
#//? update stack with aws cli
aws cloudformation update-stack --stack-name ec2-s3-stack --template-body file://cloud-formation/ec2-s3-stack.yml   --parameters ParameterKey=KeyName,ParameterValue=dev-key

