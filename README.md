# Twilio Client Phonegap plugins

This is a Phonegap plugin that exposes the same JS API as Twilio Client for web, meaning you should be able to use the same Twilio Client code from your web application inside of your Phonegap application. 

To use copy the Objective-C files into the `plugins` directory of your Phonegap project, and the JavaScript file into the `www` directory.

## Limitations

This is plugin should be considered alpha. Please report any issues.

Some of the event handlers are currently no-ops because of differences between the web SDK and the iOS SDK, i.e. they both expose events the other does not, e.g. Twilio.Device.cancel is a no-op.

Twilio.Connection objects are just proxy objects that delegate to the Objective-C layer.

Sounds are currently disabled and the JS methods that control them are no-ops because enabling them causes `EXC_BAD_ACCESS` errors. Will fix.

Twilio Client documentation: http://www.twilio.com/docs/client/twilio-js