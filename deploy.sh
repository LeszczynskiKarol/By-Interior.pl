#!/bin/bash
S3_BUCKET="www.by-interior.pl"
CLOUDFRONT_ID="E2RLHQXK8LIL3M"

cd /d/by-interior.pl
npm run build
aws s3 sync dist/ s3://${S3_BUCKET} --delete
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"
echo "✅ Deployed to https://www.by-interior.pl"
