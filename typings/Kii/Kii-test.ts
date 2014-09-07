/// <reference path="Kii.d.ts" />

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
}

