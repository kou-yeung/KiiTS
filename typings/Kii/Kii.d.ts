// Type definitions for Kii SDK
// Kii cloud : http://jp-cloud.kii.com/
// Base on "Cloud SDK v2.1.19 "

declare module KiiCloud {

    interface KiiSite {
        US: string;
        JP: string;
        CN: string;
        SG: string;
    }

    enum KiiACLAction {
        KiiACLBucketActionCreateObjects,
        KiiACLBucketActionQueryObjects,
        KiiACLBucketActionDropBucket,
        KiiACLObjectActionRead,
        KiiACLObjectActionWrite,
    }

    export class KiiUser {
        // Create A New User Data
        public static userWithUsername(username: string, password: string): KiiUser;
        public static userWithEmailAddress(emailAddress: string, password: string): KiiUser;
        public static userWithEmailAddressAndUsername(emailAddress: string, username: string, password: string): KiiUser;
        public static userWithPhoneNumber(phoneNumber: string, password: string): KiiUser;
        public static userWithPhoneNumberAndUsername(phoneNumber: string, username: string, password: string): KiiUser;
        // Authenticate
        public static authenticate(username: string, password: string, callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public static authenticateWithToken(accessToken: string, callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public static getCurrentUser(): KiiUser;
        // userIdentifier : The user's email address
        public static resetPassword(userIdentifier: string, callbacks: { success(); failure(errorString: string) });
        // Get User Data
        public static userWithURI(userUri: string): KiiUser;
        public static userWithID(userId: string): KiiUser;
        public register(callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public verifyPhoneNumber(code: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public getAccessToken(): string;
        public updatePassword(fromPassword: string, toPassword: string, callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public refresh(callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string)});
        // Set the predefined fields.
        public changeEmail(emailAddress: string, callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public changePhone(phoneNumber: string, callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        public setDisplayName(displayName: string);
        public setCountry(country: string);
        public set<T>(key: string, value: T);
        public save(callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        // Get the predefined fields.
        public getUsername():string;
        public getEmailAddress(): string;
        public getPhoneNumber(): string;
        public getDisplayName(): string;
        public getCountry(): string;
        public get<T>(key: string): T;
        // delete User Data
        public delete(callbacks: { success(user: KiiUser); failure(user: KiiUser, errorString: string) });
        // KiiGroup
        public memberOfGroups(callbacks: { success(user: KiiUser, groups: KiiGroup[]); failure(user: KiiUser, errorString: string) });
        public ownerOfGroups(callbacks: { success(user: KiiUser, groups: KiiGroup[]); failure(user: KiiUser, errorString: string) });
        // KiiBucket
        bucketWithName(bucketName: string): KiiBucket;
    }

    export class KiiGroup {
        public static groupWithName(groupName: string): KiiGroup;
        public static groupWithURI(groupUri: string): KiiGroup;
        public static groupWithID(groupId: string): KiiGroup;

        public objectURI(): string;
        public getID(): string;
        public getName(): string;
        public refresh(callbacks: { success(group: KiiGroup); failure(group: KiiGroup, errorString: string) });
        public delete(callbacks: { success(group: KiiGroup); failure(group: KiiGroup, errorString: string) });
        public changeGroupName(newGroupName: string, callbacks: { success(group: KiiGroup); failure(group: KiiGroup, errorString: string) });
        public getMemberList(callbacks: { success(group: KiiGroup, members: KiiUser[]); failure(group: KiiGroup, errorString: string) });
        public addUser(user: KiiUser);
        public removeUser(user: KiiUser);
        public save(callbacks: { success(group: KiiGroup); failure(group: KiiGroup, errorString: string) });

        // KiiBucket
        public bucketWithName(bucketName: string): KiiBucket;
    }

    export class KiiACL {
        public putACLEntry(entry: KiiACLEntry);
        public save(callbacks: { success(bucket: KiiBucket); failure(bucket: KiiBucket, errorString: string) });
    }

    export class KiiBucket {
        public createObject(): KiiObject;
        public createObjectWithID(id: string): KiiObject;
        public acl(): KiiACL;
    }

    export class KiiAnyAuthenticatedUser { }
    export class KiiAnonymousUser { }

    export class KiiObject {
        public static isValidObjectID(id: string): boolean;
        public static objectWithURI(uri: string): KiiObject;
        public save(callbacks: { success(object: KiiObject); failure(object: KiiObject, errorString: string) });
        public saveAllFields(callbacks: { success(object: KiiObject); failure(object: KiiObject, errorString: string) });
        public set<T>(key: string, value: T);
        public get<T>(key: string): T;
        public setGeoPoint(key: string, geoPoint: KiiGeoPoint);
        public getGeoPoint(key: string): KiiGeoPoint;
        public objectURI(): string;
        public refresh(callbacks: { success(object: KiiObject); failure(object: KiiObject, errorString: string) });
        public getCreated(): string;
        public getModified(): string;
    }

    interface KiiACLEntry {
        // subject : KiiGroup | KiiUser | KiiAnyAuthenticatedUser | KiiAnonymousUser
        entryWithSubject(subject: any, action: KiiACLAction);
    }

    export class KiiGeoPoint {
        public static geoPoint(latitude: number, longitude: number): KiiGeoPoint;
        public getLatitude(): Number;
        public getLongitude(): Number;
    }

    interface Kii {
        initializeWithSite(appId: string, appKey: string, site: string);
        // KiiBucket
        bucketWithName(bucketName: string): KiiBucket;
    }
}

import KiiAnyAuthenticatedUser = KiiCloud.KiiAnyAuthenticatedUser;
import KiiAnonymousUser = KiiCloud.KiiAnonymousUser;
import KiiACL = KiiCloud.KiiACL;
import KiiACLAction = KiiCloud.KiiACLAction;
import KiiBucket = KiiCloud.KiiBucket;
import KiiObject = KiiCloud.KiiObject;
import KiiUser = KiiCloud.KiiUser;
import KiiGroup = KiiCloud.KiiGroup;
declare var KiiACLEntry: KiiCloud.KiiACLEntry;
declare var KiiSite: KiiCloud.KiiSite;
declare var Kii: KiiCloud.Kii;


/// JavaScript リファレンスガイドに沿って順番から対応してます
/// http://documentation.kii.com/ja/guides/javascript/
// 
// 1. ユーザー管理 : http://documentation.kii.com/ja/guides/javascript/managing-users/
// 1.1 ユーザー作成(完了)
// 1.2 ログイン(完了) [MEMO : getAccessToken()の対応が不十分です]
// 1.3 別サービスアカウントを利用した認証(未対応)
// 1.4 パスワード変更・リセット(完了)
// 1.5 ログインユーザー情報の取得(完了)
// 1.6 ユーザー属性(完了)
// 1.7 ユーザー削除(完了)
// 1.8 他ユーザーの情報を取得(完了)
// 1.9 アプリケーションユーザーの確認(必要ない)
//
// 2. グループ管理 : http://documentation.kii.com/ja/guides/javascript/managing-groups/
// 2.1 グループの作成(完了)
// 2.2 グループの削除(完了)
// 2.3 グループ名の変更(完了)
// 2.4 グループ一覧の取得(完了)
// 2.5 グループメンバー一覧の取得(完了)
// 2.6 グループメンバーの追加と削除(完了)
//
// 3. データ管理 : http://documentation.kii.com/ja/guides/javascript/managing-data/
// 3.1 Bucket
// 3.1.1 Bucketの作成(完了)
// 3.1.2 Bucket の ACL 設定(完了)
// 3.2 Object Storage
// 3.2.1 Object の作成(完了)
// 3.2.2 Object の取得(完了)
// 3.2.3 Object の更新(完了)