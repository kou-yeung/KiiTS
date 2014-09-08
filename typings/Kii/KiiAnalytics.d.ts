// Type definitions for Kii SDK
// Kii cloud : http://jp-cloud.kii.com/
// Base on "Analytics SDK v2.1.4"
// http://documentation.kii.com/references/js/analytics/latest/index.html

// Kii
declare module KiiCloud {
    interface KiiAnalyticsSite {
        US: string;
        JP: string;
        CN: string;
        SG: string;
    }
    export class KiiAnalytics {
        public static error(message: string);
        //Retrieve the current app ID
        public static getAppID(): string;
        //Retrieve the current app key
        public static getAppKey(): string;
        public static getBaseURL(): string;
        //Get the deviceId.
        public static getDeviceId(): string;
        //Kii Analytics SDK Version Number
        public static getSDKVersion(): string;
        //Initialize the KiiAnalytics SDK Should be the first KiiAnalytics SDK action your application makes
        public static initialize(appId: string, appKey: string, deviceid?: string);
        //Initialize the Kii SDK with a specific URL Should be the first Kii SDK action your application makes
        public static initializeWithSite(appId: string, appKey: string, site: string, deviceid?: string);
        //Is the SDK printing logs to the console?
        public static isLogging(): boolean;
        //Utilize the KiiAnalytics logger to track SDK - specific actions Helpful for development - we strongly advice you turn off logging for any production code.
        public static logger(message: string);
        //Set a custom API endpoint URL
        public static setBaseURL(url: string);
        //Set the logging status of the SDK Helpful for development - we strongly advice you turn off logging for any production code.
        public static setLogging(enable: boolean);
        //Log a single event to be uploaded to KiiAnalytics Use this method if you'd like to track an event by name only.
        public static trackEvent(eventName: string): boolean;
        //Log a single event to be uploaded to KiiAnalytics Use this method if you'd like to track an event by name and add extra information to the event.
        public static trackEventWithExtras(eventName: string, extras): boolean;
        //Log a single event to be uploaded to KiiAnalytics Use this method if you'd like to track an event asynchronously by name and add extra information to the event.    }
        public static trackEventWithExtrasAndCallbacks(eventName: string, extras, callbacks: { success(); failure(errorString:string, statusCode:number) });
    }
}

declare var KiiAnalyticsSite: KiiCloud.KiiAnalyticsSite;
import KiiAnalytics = KiiCloud.KiiAnalytics;


