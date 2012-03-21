var TwilioPlugin = {
    Device: function() {
        this.delegate = {}
        return this;
    },
    
    Connection: function() {
        this.delegate = {}
        return this;
    }
}

TwilioPlugin.Device.prototype.setup = function(token) {
    // Take a token and instantiate a new device object
    var self = this;
    
    var error = function(callback) {
    
    }
    
    var success = function(callback) {
        var argument = callback['arguments'] || new Twilio.Connection();
        if(self.delegate[callback['callback']]) self.delegate[callback['callback']](argument);
    }
    
    Cordova.exec(success, error, "TCPlugin", "deviceSetup", [token]);
}

// polymorphic function. if called with function as an argument, the function is invoked
// when a connection has been established. if called with an object a connection is established with those options
TwilioPlugin.Device.prototype.connect = function(argument) {
    if(typeof(argument) == 'function') {
        this.delegate['onconnect'] = argument;
    } else if(typeof(argument) == 'object') {
        Cordova.exec("TCPlugin.connect", argument)
    }
}

TwilioPlugin.Device.prototype.disconnectAll = function() {
	Cordova.exec('TCPlugin.disconnectAll');
}

TwilioPlugin.Device.prototype.disconnect = function(fn) {
    this.delegate['ondisconnect'] = fn;
}

TwilioPlugin.Device.prototype.ready = function(fn) {
    this.delegate['onready'] = fn;
}

TwilioPlugin.Device.prototype.offline = function(fn) {
    this.delegate['onoffline'] = fn;
}

TwilioPlugin.Device.prototype.incoming = function(fn) {
    this.delegate['onincoming'] = fn;
}

TwilioPlugin.Device.prototype.cancel = function(fn) {
    this.delegate['oncancel'] = fn;
}

TwilioPlugin.Device.prototype.error = function(fn) {
    this.delegate['onerror'] = fn;
}

TwilioPlugin.Device.prototype.presence = function(fn) {
    this.delegate['onpresence'] = fn;
}

TwilioPlugin.Device.prototype.status = function() {
	
}

TwilioPlugin.Device.prototype.sounds = {
    incoming:   function(boolean) {},
    outgoing:   function(boolean) {},
    disconnect: function(boolean) {}
}

TwilioPlugin.Connection.prototype.accept = function(fn) {}

TwilioPlugin.Connection.prototype.reject = function(fn) {}

TwilioPlugin.Connection.prototype.disconnect = function(fn) {}

TwilioPlugin.Connection.prototype.error = function(fn) {}

TwilioPlugin.Connection.prototype.mute = function() {}

TwilioPlugin.Connection.prototype.unmute = function() {}

TwilioPlugin.Connection.prototype.sendDigits = function(string) {}

TwilioPlugin.Connection.prototype.status = function() {}

TwilioPlugin.install = function() {
    if (!window.Twilio) window.Twilio = {}; 
    if (!window.Twilio.Device) window.Twilio.Device = new TwilioPlugin.Device();
    if (!window.Twilio.Connection) window.Twilio.Connection = TwilioPlugin.Connection;
}

Cordova.addConstructor(TwilioPlugin.install);
