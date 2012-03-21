//
//  TCPlugin.h
//  Twilio Client plugin for PhoneGap
//
//  Copyright 2012 Stevie Graham.
//

#import <Foundation/Foundation.h>
#import "TwilioClient.h"

#ifdef CORDOVA_FRAMEWORK
#import <Cordova/CDVPlugin.h>
#else
#import "CDVPlugin.h"
#endif

@interface TCPlugin : CDVPlugin <TCDeviceDelegate, TCConnectionDelegate> { }

# pragma mark device delegate method
-(void)device:(TCDevice *)device didStopListeningForIncomingConnections:(NSError *)error;
-(void)device:(TCDevice*)device didReceiveIncomingConnection:(TCConnection*)connection;
-(void)device:(TCDevice *)device didReceivePresenceUpdate:(TCPresenceEvent *)presenceEvent;
-(void)deviceDidStartListeningForIncomingConnections:(TCDevice*)device;

# pragma mark connection delegate methods
-(void)connection:(TCConnection*)connection didFailWithError:(NSError*)error;
-(void)connectionDidStartConnecting:(TCConnection*)connection;
-(void)connectionDidConnect:(TCConnection*)connection;
-(void)connectionDidDisconnect:(TCConnection*)connection;

# pragma mark javascript mapper methods
-(void)deviceSetup:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)connect:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)disconnectAll:(NSArray *)arguments withDict:(NSMutableDictionary *)options;

@end