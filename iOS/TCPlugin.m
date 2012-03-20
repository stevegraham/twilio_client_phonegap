//
//  TCPlugin.h
//  Twilio Client plugin for PhoneGap
//
//  Copyright 2012 Stevie Graham.
//

#import "TCPlugin.h"

@interface TCPlugin() {
    TCDevice *_device;
}

@property(nonatomic, strong) TCDevice *device;

@end

@implementation TCPlugin

@synthesize device = _device;

-(void)device:(TCDevice *)device didStopListeningForIncomingConnections:(NSError *)error { 
    
}

-(void)deviceSetup:(NSArray *)arguments withDict:(NSMutableDictionary*)options {
    self.device = [[TCDevice alloc] initWithCapabilityToken:[arguments objectAtIndex:0] delegate:self];
}

@end