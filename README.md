# AWS S3 and STS Wrapper for Meteor

A lean wrapper for the AWS SDK, containing only the S3 and STS services. Created
for use with the `edgee:slingshot` package.

## Usage

Add the package with `meteor add webantic:aws-s3-sts`.

Define your S3 settings in your `settings.json` to auto-configure the AWS SDK
```
{
	"S3Key": "YOUR_KEY",
	"S3Secret": "YOUR_SECRET",
	"S3Bucket": "YOUR_BUCKET", // e.g. "myWebApp"
	"S3Region": "YOUR_BUCKET_REGION" // e.g. "eu-west-1"
}
```

Alternatively, you can manually configure the AWS SDK;
```
AWS.config.update({
	accessKeyId: "YOUR_KEY",
	secretAccessKey: "YOUR_SECRET"
});
```

You'll have the usual `AWS` global variable, which is available on both client
and server. It will contain the `S3` and `STS` services.



## Slingshot

A `getTemporaryCredentials` method has been added to the `AWS.STS` prototype so
you can do the following:
```
var sts = new AWS.STS();
Slingshot.createDirective('projectFiles', Slingshot.S3Storage.TempCredentials, {
	temporaryCredentials: sts.getTemporaryCredentials,
	bucket: Meteor.settings.S3Bucket,
	region: Meteor.settings.S3Region,
	acl: 'private',
	(...)
});
```
