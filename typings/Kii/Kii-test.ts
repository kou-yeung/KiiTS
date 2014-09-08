/// <reference path="Kii.d.ts" />
/// <reference path="KiiAnalytics.d.ts" />

function main() {
    // initialize the Kii SDK
    Kii.initializeWithSite("AppID", "AppKey", KiiSite.JP);
    var username = "user_123";
    var password = "123ABC";
    // auth
    KiiUser.authenticate(username, password, {
        success: function (user: KiiUser) {
            console.log("User authenticated!");
            console.log(user);
        },
        failure: function (user: KiiUser, errStr: string) {
            console.log("Error authenticating: " + errStr);
        }
    });

    KiiAnalytics.initializeWithSite("AppId", "AppKey", KiiAnalyticsSite.JP);
    var eventType = "MyUser";
    var extras = {
        "gender": "M",
        "city": "San Francisco",
        "location": "US",
        "children": 2,
        "age": 35
    };
    KiiAnalytics.trackEventWithExtrasAndCallbacks(eventType, extras, {
        success() {
            console.log("Did succeed");
        },
        failure(errorString: string, statusCode: number) {
            console.log("Did fail: " + errorString);
        }
    });
}

