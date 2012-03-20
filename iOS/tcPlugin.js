var TwilioPlugin = {
    Device: function() {
        return this;
    } 
}

TwilioPlugin.Device.prototype.setup = function(token) {
    // Take a token and instantiate a new device object
    Cordova.exec("TCPlugin.deviceSetup", token);
}

TwilioPlugin.Device.prototype.ready = function(fn) {
    // deviceDidStartListeningForIncomingConnections
}

TwilioPlugin.Device.prototype.error = function(fn) {
    // error callback
}

TwilioPlugin.Device.prototype.connect = function(arg) {
    // polymorphic function. if called with function as an argument, the function is invoked
    // when a connection has been established. if called with a string
}

TwilioPlugin.Device.prototype.connect = function(arg) {
    // polymorphic function. if called with function as an argument, the function is invoked
    // when a connection has been established. if called with a string
}

TwilioPlugin.Device.prototype.connect = function(arg) {
    // polymorphic function. if called with function as an argument, the function is invoked
    // when a connection has been established. if called with a string
}

TwilioPlugin.Device.prototype.discconect = function(fn) {
    
}

TwilioPlugin.Device.prototype.incoming = function(fn) {
    
}

TwilioPlugin.install = function() {
    if (!window.Twilio) window.Twilio = {}; 
    if (!window.Twilio.Device) window.Twilio.Device = new TwilioPlugin.Device();
}

Cordova.addConstructor(TwilioPlugin.install);
