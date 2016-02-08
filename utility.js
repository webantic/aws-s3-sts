if ( Meteor.settings && Meteor.settings.S3Key && Meteor.settings.S3Secret ) {
	AWS.config.update({
		accessKeyId: Meteor.settings.S3Key,
		secretAccessKey: Meteor.settings.S3Secret
	});
}

AWS.STS.prototype.getTemporaryCredentials = Meteor.wrapAsync(function (expire, callback) {
	// AWS dictates that the minimum duration must be 900 seconds:
	var duration = Math.max(Math.round(expire / 1000), 900);
	new AWS.STS().getSessionToken({
		DurationSeconds: duration
	}, function (error, result) {
		callback(error, result && result.Credentials);
	});
});
