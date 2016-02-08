Package.describe({
  name: 'webantic:aws-s3-sts',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A lean wrapper for the AWS SDK, containing only the S3 and STS services.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/webantic/aws-s3-sts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
	"xhr2": "0.1.3",
	"xmldom": "0.1.22"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
	api.addFiles('aws-s3-sts.js');
  api.addFiles('utility.js');
	api.export('AWS', ['client', 'server']);
	api.export('slingshotTempCredentials', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('webantic:aws-s3-sts');
  api.addFiles('aws-s3-sts-tests.js');
});
