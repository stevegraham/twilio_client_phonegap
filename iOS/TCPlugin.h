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
-(void)deviceStatus:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

# pragma mark connection delegate methods
-(void)connection:(TCConnection*)connection didFailWithError:(NSError*)error;
-(void)connectionDidStartConnecting:(TCConnection*)connection;
-(void)connectionDidConnect:(TCConnection*)connection;
-(void)connectionDidDisconnect:(TCConnection*)connection;
-(void)connectionStatus:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

# pragma mark javascript mapper methods
-(void)deviceSetup:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)connect:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)disconnectAll:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)acceptConnection:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)disconnectConnection:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)muteConnection:(NSArray *)arguments withDict:(NSMutableDictionary *)options;
-(void)sendDigits:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

@end