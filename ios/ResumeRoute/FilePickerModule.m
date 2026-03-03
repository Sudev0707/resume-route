#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FilePicker, NSObject)

RCT_EXTERN_METHOD(pickFile:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
