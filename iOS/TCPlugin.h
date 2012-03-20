//
//  TCPlugin.h
//  Twilio Client plugin for Cordova (PhoneGap)
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

@interface TCPlugin : CDVPlugin <TCDeviceDelegate> { }

-(void)device:(TCDevice *)device didStopListeningForIncomingConnections:(NSError *)error;

-(void)deviceSetup:(NSArray *)token withDict:(NSMutableDictionary*)options;

@end