
#//? logs a specefic stack with aws cli
aws cloudformation describe-stack-events --stack-name ec2-s3-stack --query 'StackEvents[?ResourceStatus==`CREATE_FAILED`].[LogicalResourceId, ResourceStatusReason]' --output table


