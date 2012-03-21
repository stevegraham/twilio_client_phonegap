//
//  TCPlugin.h
//  Twilio Client plugin for PhoneGap
//
//  Copyright 2012 Stevie Graham.
//

#import "TCPlugin.h"

@interface TCPlugin() {
    TCDevice *_device;
    NSString *_callback;
}

@property(nonatomic, strong) TCDevice     *device;
@property(nonatomic, strong) NSString     *callback;
@property(nonatomic, strong) TCConnection *current_connection;

-(void)javascriptCallback:(NSString *)event;

@end

@implementation TCPlugin

@synthesize device             = _device;
@synthesize callback           = _callback;
@synthesize current_connection = _current_connection;

# pragma mark device delegate method
-(void)device:(TCDevice *)device didStopListeningForIncomingConnections:(NSError *)error {}
-(void)device:(TCDevice *)device didReceiveIncomingConnection:(TCConnection *)connection {}
-(void)device:(TCDevice *)device didReceivePresenceUpdate:(TCPresenceEvent *)presenceEvent {}
-(void)deviceDidStartListeningForIncomingConnections:(TCDevice *)device {}

# pragma mark connection delegate methods
-(void)connection:(TCConnection*)connection didFailWithError:(NSError*)error {}

-(void)connectionDidStartConnecting:(TCConnection*)connection {
    self.current_connection = connection;
    // What to do here? The JS library doesn't have an event for connection negotiation.
}

-(void)connectionDidConnect:(TCConnection*)connection {
    self.current_connection = connection;
    [self javascriptCallback:@"onconnect"];
}

-(void)connectionDidDisconnect:(TCConnection*)connection {
    self.current_connection = connection;
    [self javascriptCallback:@"ondisconnect"];
    self.current_connection = nil;
}

# pragma mark javascript mapper methods

-(void)deviceSetup:(NSMutableArray *)arguments withDict:(NSMutableDictionary*)options {
    self.callback = [arguments pop];
    self.device = [[TCDevice alloc] initWithCapabilityToken:[arguments pop] delegate:self];
    // Disable sounds. was getting EXC_BAD_ACCESS
    self.device.incomingSoundEnabled   = NO;
    self.device.outgoingSoundEnabled   = NO;
    self.device.disconnectSoundEnabled = NO;
}

-(void)connect:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options {
    [self.device connect:options delegate:self];
}

-(void)disconnectAll:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options {
    [self.device disconnectAll];
}

-(void)javascriptCallback:(NSString *)event {
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:event];
    result.keepCallback = [NSNumber numberWithBool:YES];
    [self performSelectorOnMainThread:@selector(writeJavascript:) withObject:[result toSuccessCallbackString:self.callback] waitUntilDone:NO];
}

@end