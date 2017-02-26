export class AccountAccountCounters {
    constructor (
        readonly friends: number,
        readonly messages: number,
        readonly photos: number,
        readonly videos: number,
        readonly gifts: number,
        readonly events: number,
        readonly groups: number,
        readonly notifications: number,
        readonly appRequests: number,
        readonly friendsSuggestions: number
    ) {

    }

    static deserialize(raw: Object): AccountAccountCounters {
        return new AccountAccountCounters (
            raw['friends'],
            raw['messages'],
            raw['photos'],
            raw['videos'],
            raw['gifts'],
            raw['events'],
            raw['groups'],
            raw['notifications'],
            raw['app_requests'],
            raw['friends_suggestions']
        )
    }
}
export class AccountLookupResult {
    constructor (
        readonly found: AccountUserXtrContact|undefined[]|undefined,
        readonly other: AccountOtherContact|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AccountLookupResult {
        return new AccountLookupResult (
            raw['found'] ? raw['found'].map(v => v ? AccountUserXtrContact.deserialize(v) : undefined) : undefined,
            raw['other'] ? raw['other'].map(v => v ? AccountOtherContact.deserialize(v) : undefined) : undefined
        )
    }
}
export class AccountNameRequest {
    constructor (
        readonly id: number,
        readonly status: string,
        readonly firstName: string,
        readonly lastName: string
    ) {

    }

    static deserialize(raw: Object): AccountNameRequest {
        return new AccountNameRequest (
            raw['id'],
            raw['status'],
            raw['first_name'],
            raw['last_name']
        )
    }
}
export class AccountOffer {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly instruction: string,
        readonly instructionHtml: string,
        readonly shortDescription: string,
        readonly description: string,
        readonly img: string,
        readonly tag: string,
        readonly price: number
    ) {

    }

    static deserialize(raw: Object): AccountOffer {
        return new AccountOffer (
            raw['id'],
            raw['title'],
            raw['instruction'],
            raw['instruction_html'],
            raw['short_description'],
            raw['description'],
            raw['img'],
            raw['tag'],
            raw['price']
        )
    }
}
export class AccountOnoffOptions {
    constructor (
    ) {

    }

    static deserialize(raw: Object): AccountOnoffOptions {
        return new AccountOnoffOptions (
        )
    }
}
export class AccountOtherContact {
    constructor (
        readonly contact: string,
        readonly commonCount: number
    ) {

    }

    static deserialize(raw: Object): AccountOtherContact {
        return new AccountOtherContact (
            raw['contact'],
            raw['common_count']
        )
    }
}
export class AccountPushConversations {
    constructor (
        readonly count: number,
        readonly items: AccountPushConversationsItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AccountPushConversations {
        return new AccountPushConversations (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? AccountPushConversationsItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class AccountPushConversationsItem {
    constructor (
        readonly peerId: number,
        readonly sound: boolean,
        readonly disabledUntil: number
    ) {

    }

    static deserialize(raw: Object): AccountPushConversationsItem {
        return new AccountPushConversationsItem (
            raw['peer_id'],
            !!raw['sound'],
            raw['disabled_until']
        )
    }
}
export class AccountPushParams {
    constructor (
        readonly msg: string[]|undefined,
        readonly chat: string[]|undefined,
        readonly friend: AccountOnoffOptions|undefined[]|undefined,
        readonly friendFound: AccountOnoffOptions|undefined[]|undefined,
        readonly friendAccepted: AccountOnoffOptions|undefined[]|undefined,
        readonly reply: AccountOnoffOptions|undefined[]|undefined,
        readonly comment: string[]|undefined,
        readonly mention: string[]|undefined,
        readonly like: string[]|undefined,
        readonly repost: string[]|undefined,
        readonly wallPost: AccountOnoffOptions|undefined[]|undefined,
        readonly wallPublish: AccountOnoffOptions|undefined[]|undefined,
        readonly groupInvite: AccountOnoffOptions|undefined[]|undefined,
        readonly groupAccepted: AccountOnoffOptions|undefined[]|undefined,
        readonly eventSoon: AccountOnoffOptions|undefined[]|undefined,
        readonly photosTag: string[]|undefined,
        readonly appRequest: AccountOnoffOptions|undefined[]|undefined,
        readonly sdkOpen: AccountOnoffOptions|undefined[]|undefined,
        readonly newPost: AccountOnoffOptions|undefined[]|undefined,
        readonly birthday: AccountOnoffOptions|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AccountPushParams {
        return new AccountPushParams (
            raw['msg'] ? raw['msg'].map(v => v) : undefined,
            raw['chat'] ? raw['chat'].map(v => v) : undefined,
            raw['friend'] ? raw['friend'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['friend_found'] ? raw['friend_found'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['friend_accepted'] ? raw['friend_accepted'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['reply'] ? raw['reply'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['comment'] ? raw['comment'].map(v => v) : undefined,
            raw['mention'] ? raw['mention'].map(v => v) : undefined,
            raw['like'] ? raw['like'].map(v => v) : undefined,
            raw['repost'] ? raw['repost'].map(v => v) : undefined,
            raw['wall_post'] ? raw['wall_post'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['wall_publish'] ? raw['wall_publish'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['group_invite'] ? raw['group_invite'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['group_accepted'] ? raw['group_accepted'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['event_soon'] ? raw['event_soon'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['photos_tag'] ? raw['photos_tag'].map(v => v) : undefined,
            raw['app_request'] ? raw['app_request'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['sdk_open'] ? raw['sdk_open'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['new_post'] ? raw['new_post'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined,
            raw['birthday'] ? raw['birthday'].map(v => v ? AccountOnoffOptions.deserialize(v) : undefined) : undefined
        )
    }
}
export class AccountPushSettings {
    constructor (
        readonly disabled: boolean,
        readonly disabledUntil: number,
        readonly conversations: AccountPushConversations|undefined,
        readonly settings: AccountPushParams|undefined
    ) {

    }

    static deserialize(raw: Object): AccountPushSettings {
        return new AccountPushSettings (
            !!raw['disabled'],
            raw['disabled_until'],
            raw['conversations'] ? AccountPushConversations.deserialize(raw['conversations']) : undefined,
            raw['settings'] ? AccountPushParams.deserialize(raw['settings']) : undefined
        )
    }
}
export class AccountUserSettings {
    constructor (
        readonly firstName: string,
        readonly lastName: string,
        readonly maidenName: string,
        readonly screenName: string,
        readonly sex: BaseSex|undefined,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly relationPending: number,
        readonly relationRequests: UsersUserMin|undefined[]|undefined,
        readonly bdate: string,
        readonly bdateVisibility: number,
        readonly homeTown: string,
        readonly country: BaseCountry|undefined,
        readonly city: BaseObject|undefined,
        readonly status: string,
        readonly phone: string,
        readonly nameRequest: AccountNameRequest|undefined
    ) {

    }

    static deserialize(raw: Object): AccountUserSettings {
        return new AccountUserSettings (
            raw['first_name'],
            raw['last_name'],
            raw['maiden_name'],
            raw['screen_name'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['relation_pending'],
            raw['relation_requests'] ? raw['relation_requests'].map(v => v ? UsersUserMin.deserialize(v) : undefined) : undefined,
            raw['bdate'],
            raw['bdate_visibility'],
            raw['home_town'],
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['status'],
            raw['phone'],
            raw['name_request'] ? AccountNameRequest.deserialize(raw['name_request']) : undefined
        )
    }
}
export class AccountUserXtrContact {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly contact: string,
        readonly requestSent: number,
        readonly sortNum: number
    ) {

    }

    static deserialize(raw: Object): AccountUserXtrContact {
        return new AccountUserXtrContact (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['contact'],
            raw['request_sent'],
            raw['sort_num']
        )
    }
}
export class AccountInfo {
    constructor (
        readonly country: string,
        readonly httpsRequired: boolean,
        readonly ownPostsDefault: boolean,
        readonly noWallReplies: boolean,
        readonly intro: boolean,
        readonly lang: number,
        readonly twoFaRequired: boolean
    ) {

    }

    static deserialize(raw: Object): AccountInfo {
        return new AccountInfo (
            raw['country'],
            !!raw['https_required'],
            !!raw['own_posts_default'],
            !!raw['no_wall_replies'],
            !!raw['intro'],
            raw['lang'],
            !!raw['twoFaRequired']
        )
    }
}
export class AdsAccessRole {
    constructor (
    ) {

    }

    static deserialize(raw: Object): AdsAccessRole {
        return new AdsAccessRole (
        )
    }
}
export class AdsAccesses {
    constructor (
        readonly clientId: string,
        readonly role: AdsAccessRole|undefined
    ) {

    }

    static deserialize(raw: Object): AdsAccesses {
        return new AdsAccesses (
            raw['client_id'],
            raw['role'] ? AdsAccessRole.deserialize(raw['role']) : undefined
        )
    }
}
export class AdsAccount {
    constructor (
        readonly accountId: number,
        readonly accountType: string,
        readonly accountStatus: boolean,
        readonly accessRole: AdsAccessRole|undefined
    ) {

    }

    static deserialize(raw: Object): AdsAccount {
        return new AdsAccount (
            raw['account_id'],
            raw['account_type'],
            !!raw['account_status'],
            raw['access_role'] ? AdsAccessRole.deserialize(raw['access_role']) : undefined
        )
    }
}
export class AdsAd {
    constructor (
        readonly id: number,
        readonly campaignId: number,
        readonly adFormat: number,
        readonly costType: number,
        readonly cpc: number,
        readonly cpm: number,
        readonly impressionsLimit: number,
        readonly impressionsLimited: number,
        readonly adPlatform: any,
        readonly allLimit: number,
        readonly category1Id: number,
        readonly category2Id: number,
        readonly status: number,
        readonly name: string,
        readonly approved: number,
        readonly video: boolean,
        readonly disclaimerMedical: boolean,
        readonly disclaimerSpecialist: boolean,
        readonly disclaimerSupplements: boolean
    ) {

    }

    static deserialize(raw: Object): AdsAd {
        return new AdsAd (
            raw['id'],
            raw['campaign_id'],
            raw['ad_format'],
            raw['cost_type'],
            raw['cpc'],
            raw['cpm'],
            raw['impressions_limit'],
            raw['impressions_limited'],
            raw['ad_platform'],
            raw['all_limit'],
            raw['category1_id'],
            raw['category2_id'],
            raw['status'],
            raw['name'],
            raw['approved'],
            !!raw['video'],
            !!raw['disclaimer_medical'],
            !!raw['disclaimer_specialist'],
            !!raw['disclaimer_supplements']
        )
    }
}
export class AdsAdLayout {
    constructor (
        readonly id: number,
        readonly campaignId: number,
        readonly adFormat: number,
        readonly costType: number,
        readonly video: boolean,
        readonly title: string,
        readonly description: string,
        readonly linkUrl: string,
        readonly linkDomain: string,
        readonly previewLink: any,
        readonly imageSrc: number,
        readonly imageSrc2x: number
    ) {

    }

    static deserialize(raw: Object): AdsAdLayout {
        return new AdsAdLayout (
            raw['id'],
            raw['campaign_id'],
            raw['ad_format'],
            raw['cost_type'],
            !!raw['video'],
            raw['title'],
            raw['description'],
            raw['link_url'],
            raw['link_domain'],
            raw['preview_link'],
            raw['image_src'],
            raw['image_src_2x']
        )
    }
}
export class AdsCampaign {
    constructor (
        readonly id: number,
        readonly type: string,
        readonly name: string,
        readonly status: number,
        readonly dayLimit: string,
        readonly allLimit: string,
        readonly startTime: number,
        readonly stopTime: number
    ) {

    }

    static deserialize(raw: Object): AdsCampaign {
        return new AdsCampaign (
            raw['id'],
            raw['type'],
            raw['name'],
            raw['status'],
            raw['day_limit'],
            raw['all_limit'],
            raw['start_time'],
            raw['stop_time']
        )
    }
}
export class AdsCategory {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: BaseObjectWithName|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsCategory {
        return new AdsCategory (
            raw['id'],
            raw['name'],
            raw['subcategories'] ? raw['subcategories'].map(v => v ? BaseObjectWithName.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsClient {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly dayLimit: string,
        readonly allLimit: string
    ) {

    }

    static deserialize(raw: Object): AdsClient {
        return new AdsClient (
            raw['id'],
            raw['name'],
            raw['day_limit'],
            raw['all_limit']
        )
    }
}
export class AdsCriteria {
    constructor (
        readonly sex: number,
        readonly ageFrom: number,
        readonly ageTo: number,
        readonly birthday: number,
        readonly country: number,
        readonly cities: string,
        readonly citiesNot: string,
        readonly statuses: string,
        readonly groups: string,
        readonly apps: string,
        readonly appsNot: string,
        readonly districts: string,
        readonly stations: string,
        readonly streets: string,
        readonly schools: string,
        readonly positions: string,
        readonly religions: string,
        readonly interests: string,
        readonly interestCategories: string,
        readonly userDevices: string,
        readonly userOs: string,
        readonly userBrowsers: string,
        readonly retargetingGroups: string,
        readonly retargetingGroupsNot: string,
        readonly paying: boolean,
        readonly travellers: BasePropertyExists|undefined,
        readonly schoolFrom: number,
        readonly schoolTo: number,
        readonly uniFrom: number,
        readonly uniTo: number
    ) {

    }

    static deserialize(raw: Object): AdsCriteria {
        return new AdsCriteria (
            raw['sex'],
            raw['age_from'],
            raw['age_to'],
            raw['birthday'],
            raw['country'],
            raw['cities'],
            raw['cities_not'],
            raw['statuses'],
            raw['groups'],
            raw['apps'],
            raw['apps_not'],
            raw['districts'],
            raw['stations'],
            raw['streets'],
            raw['schools'],
            raw['positions'],
            raw['religions'],
            raw['interests'],
            raw['interest_categories'],
            raw['user_devices'],
            raw['user_os'],
            raw['user_browsers'],
            raw['retargeting_groups'],
            raw['retargeting_groups_not'],
            !!raw['paying'],
            raw['travellers'] ? BasePropertyExists.deserialize(raw['travellers']) : undefined,
            raw['school_from'],
            raw['school_to'],
            raw['uni_from'],
            raw['uni_to']
        )
    }
}
export class AdsDemoStats {
    constructor (
        readonly id: number,
        readonly type: AdsObjectType|undefined,
        readonly stats: AdsDemostatsFormat|undefined
    ) {

    }

    static deserialize(raw: Object): AdsDemoStats {
        return new AdsDemoStats (
            raw['id'],
            raw['type'] ? AdsObjectType.deserialize(raw['type']) : undefined,
            raw['stats'] ? AdsDemostatsFormat.deserialize(raw['stats']) : undefined
        )
    }
}
export class AdsDemostatsFormat {
    constructor (
        readonly day: string,
        readonly month: string,
        readonly overall: number,
        readonly sex: AdsStatsSex|undefined[]|undefined,
        readonly age: AdsStatsAge|undefined[]|undefined,
        readonly sexAge: AdsStatsSexAge|undefined[]|undefined,
        readonly cities: AdsStatsCities|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsDemostatsFormat {
        return new AdsDemostatsFormat (
            raw['day'],
            raw['month'],
            raw['overall'],
            raw['sex'] ? raw['sex'].map(v => v ? AdsStatsSex.deserialize(v) : undefined) : undefined,
            raw['age'] ? raw['age'].map(v => v ? AdsStatsAge.deserialize(v) : undefined) : undefined,
            raw['sex_age'] ? raw['sex_age'].map(v => v ? AdsStatsSexAge.deserialize(v) : undefined) : undefined,
            raw['cities'] ? raw['cities'].map(v => v ? AdsStatsCities.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsFloodStats {
    constructor (
        readonly left: number,
        readonly refresh: number
    ) {

    }

    static deserialize(raw: Object): AdsFloodStats {
        return new AdsFloodStats (
            raw['left'],
            raw['refresh']
        )
    }
}
export class AdsLinkStatus {
    constructor (
        readonly status: string,
        readonly description: string,
        readonly redirectUrl: string
    ) {

    }

    static deserialize(raw: Object): AdsLinkStatus {
        return new AdsLinkStatus (
            raw['status'],
            raw['description'],
            raw['redirect_url']
        )
    }
}
export class AdsObjectType {
    constructor (
    ) {

    }

    static deserialize(raw: Object): AdsObjectType {
        return new AdsObjectType (
        )
    }
}
export class AdsParagraphs {
    constructor (
        readonly paragraph: string
    ) {

    }

    static deserialize(raw: Object): AdsParagraphs {
        return new AdsParagraphs (
            raw['paragraph']
        )
    }
}
export class AdsRejectReason {
    constructor (
        readonly comment: string,
        readonly rules: AdsRules|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsRejectReason {
        return new AdsRejectReason (
            raw['comment'],
            raw['rules'] ? raw['rules'].map(v => v ? AdsRules.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsRules {
    constructor (
        readonly title: string,
        readonly paragraphs: AdsParagraphs|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsRules {
        return new AdsRules (
            raw['title'],
            raw['paragraphs'] ? raw['paragraphs'].map(v => v ? AdsParagraphs.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsStats {
    constructor (
        readonly id: number,
        readonly type: AdsObjectType|undefined,
        readonly stats: AdsStatsFormat|undefined
    ) {

    }

    static deserialize(raw: Object): AdsStats {
        return new AdsStats (
            raw['id'],
            raw['type'] ? AdsObjectType.deserialize(raw['type']) : undefined,
            raw['stats'] ? AdsStatsFormat.deserialize(raw['stats']) : undefined
        )
    }
}
export class AdsStatsFormat {
    constructor (
        readonly day: string,
        readonly month: string,
        readonly overall: number,
        readonly spent: number,
        readonly impressions: number,
        readonly clicks: number,
        readonly reach: number,
        readonly videoViews: number,
        readonly videoViewsHalf: number,
        readonly videoViewsFull: number,
        readonly videoClicksSite: number,
        readonly joinRate: number
    ) {

    }

    static deserialize(raw: Object): AdsStatsFormat {
        return new AdsStatsFormat (
            raw['day'],
            raw['month'],
            raw['overall'],
            raw['spent'],
            raw['impressions'],
            raw['clicks'],
            raw['reach'],
            raw['video_views'],
            raw['video_views_half'],
            raw['video_views_full'],
            raw['video_clicks_site'],
            raw['join_rate']
        )
    }
}
export class AdsStatsAge {
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): AdsStatsAge {
        return new AdsStatsAge (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}
export class AdsStatsCities {
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): AdsStatsCities {
        return new AdsStatsCities (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value'],
            raw['name']
        )
    }
}
export class AdsStatsSex {
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): AdsStatsSex {
        return new AdsStatsSex (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}
export class AdsStatsSexAge {
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): AdsStatsSexAge {
        return new AdsStatsSexAge (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}
export class AdsTargStats {
    constructor (
        readonly audienceCount: number,
        readonly recommendedCpc: number,
        readonly recommendedCpm: number
    ) {

    }

    static deserialize(raw: Object): AdsTargStats {
        return new AdsTargStats (
            raw['audience_count'],
            raw['recommended_cpc'],
            raw['recommended_cpm']
        )
    }
}
export class AdsTargSuggestions {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): AdsTargSuggestions {
        return new AdsTargSuggestions (
            raw['id'],
            raw['name']
        )
    }
}
export class AdsTargSuggestionsRegions {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): AdsTargSuggestionsRegions {
        return new AdsTargSuggestionsRegions (
            raw['id'],
            raw['name'],
            raw['type']
        )
    }
}
export class AdsTargSuggestionsCities {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly parent: string
    ) {

    }

    static deserialize(raw: Object): AdsTargSuggestionsCities {
        return new AdsTargSuggestionsCities (
            raw['id'],
            raw['name'],
            raw['parent']
        )
    }
}
export class AdsTargSuggestionsSchools {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly desc: string,
        readonly type: string,
        readonly parent: string
    ) {

    }

    static deserialize(raw: Object): AdsTargSuggestionsSchools {
        return new AdsTargSuggestionsSchools (
            raw['id'],
            raw['name'],
            raw['desc'],
            raw['type'],
            raw['parent']
        )
    }
}
export class AdsTargSettings {
    constructor (
        readonly id: number,
        readonly campaignId: number,
        readonly sex: number,
        readonly ageFrom: number,
        readonly ageTo: number,
        readonly birthday: number,
        readonly country: number,
        readonly cities: string,
        readonly citiesNot: string,
        readonly statuses: string,
        readonly groups: string,
        readonly apps: string,
        readonly appsNot: string,
        readonly districts: string,
        readonly stations: string,
        readonly streets: string,
        readonly schools: string,
        readonly positions: string,
        readonly religions: string,
        readonly interests: string,
        readonly interestCategories: string,
        readonly userDevices: string,
        readonly userOs: string,
        readonly userBrowsers: string,
        readonly retargetingGroups: string,
        readonly retargetingGroupsNot: string,
        readonly paying: boolean,
        readonly travellers: BasePropertyExists|undefined,
        readonly schoolFrom: number,
        readonly schoolTo: number,
        readonly uniFrom: number,
        readonly uniTo: number
    ) {

    }

    static deserialize(raw: Object): AdsTargSettings {
        return new AdsTargSettings (
            raw['id'],
            raw['campaign_id'],
            raw['sex'],
            raw['age_from'],
            raw['age_to'],
            raw['birthday'],
            raw['country'],
            raw['cities'],
            raw['cities_not'],
            raw['statuses'],
            raw['groups'],
            raw['apps'],
            raw['apps_not'],
            raw['districts'],
            raw['stations'],
            raw['streets'],
            raw['schools'],
            raw['positions'],
            raw['religions'],
            raw['interests'],
            raw['interest_categories'],
            raw['user_devices'],
            raw['user_os'],
            raw['user_browsers'],
            raw['retargeting_groups'],
            raw['retargeting_groups_not'],
            !!raw['paying'],
            raw['travellers'] ? BasePropertyExists.deserialize(raw['travellers']) : undefined,
            raw['school_from'],
            raw['school_to'],
            raw['uni_from'],
            raw['uni_to']
        )
    }
}
export class AdsTargetGroup {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly domain: string,
        readonly audienceCount: number,
        readonly lifetime: number,
        readonly pixel: string
    ) {

    }

    static deserialize(raw: Object): AdsTargetGroup {
        return new AdsTargetGroup (
            raw['id'],
            raw['name'],
            raw['domain'],
            raw['audience_count'],
            raw['lifetime'],
            raw['pixel']
        )
    }
}
export class AdsUsers {
    constructor (
        readonly userId: number,
        readonly accesses: AdsAccesses|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsUsers {
        return new AdsUsers (
            raw['user_id'],
            raw['accesses'] ? raw['accesses'].map(v => v ? AdsAccesses.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsPostStats {
    constructor (
        readonly adId: number,
        readonly reachSubscribers: number,
        readonly reachTotal: number,
        readonly links: number,
        readonly toGroup: number,
        readonly joinGroup: number,
        readonly report: number,
        readonly hide: number,
        readonly unsubscribe: number
    ) {

    }

    static deserialize(raw: Object): AdsPostStats {
        return new AdsPostStats (
            raw['ad_id'],
            raw['reach_subscribers'],
            raw['reach_total'],
            raw['links'],
            raw['to_group'],
            raw['join_group'],
            raw['report'],
            raw['hide'],
            raw['unsubscribe']
        )
    }
}
export class AppsApp {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly screenName: string,
        readonly description: string,
        readonly icon278: string,
        readonly icon150: string,
        readonly icon139: string,
        readonly icon75: string,
        readonly banner560: string,
        readonly banner1120: string,
        readonly type: string,
        readonly section: string,
        readonly authorUrl: string,
        readonly authorId: number,
        readonly authorGroup: number,
        readonly membersCount: number,
        readonly publishedDate: number,
        readonly catalogPosition: number,
        readonly screenshots: PhotosPhoto|undefined[]|undefined,
        readonly international: number,
        readonly leaderboardType: number,
        readonly genreId: number,
        readonly genre: string,
        readonly platformId: number,
        readonly isInCatalog: number
    ) {

    }

    static deserialize(raw: Object): AppsApp {
        return new AppsApp (
            raw['id'],
            raw['title'],
            raw['screen_name'],
            raw['description'],
            raw['icon_278'],
            raw['icon_150'],
            raw['icon_139'],
            raw['icon_75'],
            raw['banner_560'],
            raw['banner_1120'],
            raw['type'],
            raw['section'],
            raw['author_url'],
            raw['author_id'],
            raw['author_group'],
            raw['members_count'],
            raw['published_date'],
            raw['catalog_position'],
            raw['screenshots'] ? raw['screenshots'].map(v => v ? PhotosPhoto.deserialize(v) : undefined) : undefined,
            raw['international'],
            raw['leaderboard_type'],
            raw['genre_id'],
            raw['genre'],
            raw['platform_id'],
            raw['is_in_catalog']
        )
    }
}
export class AppsLeaderboard {
    constructor (
        readonly score: number,
        readonly level: number,
        readonly points: number,
        readonly userId: number
    ) {

    }

    static deserialize(raw: Object): AppsLeaderboard {
        return new AppsLeaderboard (
            raw['score'],
            raw['level'],
            raw['points'],
            raw['user_id']
        )
    }
}
export class AudioAudioAlbum {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): AudioAudioAlbum {
        return new AudioAudioAlbum (
            raw['id'],
            raw['owner_id'],
            raw['title']
        )
    }
}
export class AudioAudio {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly artist: string,
        readonly title: string,
        readonly url: string,
        readonly accessKey: string
    ) {

    }

    static deserialize(raw: Object): AudioAudio {
        return new AudioAudio (
            raw['id'],
            raw['owner_id'],
            raw['artist'],
            raw['title'],
            raw['url'],
            raw['access_key']
        )
    }
}
export class AudioAudioFull {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly artist: string,
        readonly title: string,
        readonly url: string,
        readonly accessKey: string,
        readonly duration: number,
        readonly date: number,
        readonly albumId: number,
        readonly lyricsId: number,
        readonly genreId: number,
        readonly noSearch: boolean
    ) {

    }

    static deserialize(raw: Object): AudioAudioFull {
        return new AudioAudioFull (
            raw['id'],
            raw['owner_id'],
            raw['artist'],
            raw['title'],
            raw['url'],
            raw['access_key'],
            raw['duration'],
            raw['date'],
            raw['album_id'],
            raw['lyrics_id'],
            raw['genre_id'],
            !!raw['no_search']
        )
    }
}
export class AudioLyrics {
    constructor (
        readonly lyricsId: number,
        readonly text: string
    ) {

    }

    static deserialize(raw: Object): AudioLyrics {
        return new AudioLyrics (
            raw['lyrics_id'],
            raw['text']
        )
    }
}
export class AudioAudioUploadResponse {
    constructor (
        readonly redirect: string,
        readonly server: number,
        readonly audio: string,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): AudioAudioUploadResponse {
        return new AudioAudioUploadResponse (
            raw['redirect'],
            raw['server'],
            raw['audio'],
            raw['hash']
        )
    }
}
export class BaseCommentsInfo {
    constructor (
        readonly count: number,
        readonly canPost: number
    ) {

    }

    static deserialize(raw: Object): BaseCommentsInfo {
        return new BaseCommentsInfo (
            raw['count'],
            raw['can_post']
        )
    }
}
export class BaseCountry {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): BaseCountry {
        return new BaseCountry (
            raw['id'],
            raw['title']
        )
    }
}
export class BaseError {
    constructor (
        readonly errorCode: number,
        readonly errorMsg: string,
        readonly requestParams: BaseRequestParam|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): BaseError {
        return new BaseError (
            raw['error_code'],
            raw['error_msg'],
            raw['request_params'] ? raw['request_params'].map(v => v ? BaseRequestParam.deserialize(v) : undefined) : undefined
        )
    }
}
export class BaseRequestParam {
    constructor (
        readonly key: string,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): BaseRequestParam {
        return new BaseRequestParam (
            raw['key'],
            raw['value']
        )
    }
}
export class BaseGeo {
    constructor (
        readonly type: string,
        readonly coordinates: string,
        readonly place: BasePlace|undefined,
        readonly showmap: number
    ) {

    }

    static deserialize(raw: Object): BaseGeo {
        return new BaseGeo (
            raw['type'],
            raw['coordinates'],
            raw['place'] ? BasePlace.deserialize(raw['place']) : undefined,
            raw['showmap']
        )
    }
}
export class BaseLikesInfo {
    constructor (
        readonly count: number,
        readonly userLikes: number,
        readonly canLike: number,
        readonly canPublish: number
    ) {

    }

    static deserialize(raw: Object): BaseLikesInfo {
        return new BaseLikesInfo (
            raw['count'],
            raw['user_likes'],
            raw['can_like'],
            raw['can_publish']
        )
    }
}
export class BaseLikes {
    constructor (
        readonly userLikes: boolean,
        readonly count: number
    ) {

    }

    static deserialize(raw: Object): BaseLikes {
        return new BaseLikes (
            !!raw['user_likes'],
            raw['count']
        )
    }
}
export class BaseLink {
    constructor (
        readonly url: string,
        readonly title: string,
        readonly caption: string,
        readonly description: string,
        readonly photo: PhotosPhoto|undefined,
        readonly isExternal: boolean,
        readonly previewUrl: string,
        readonly previewPage: string,
        readonly button: BaseLinkButton|undefined,
        readonly product: BaseLinkProduct|undefined,
        readonly rating: BaseLinkRating|undefined,
        readonly application: BaseLinkApplication|undefined
    ) {

    }

    static deserialize(raw: Object): BaseLink {
        return new BaseLink (
            raw['url'],
            raw['title'],
            raw['caption'],
            raw['description'],
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            !!raw['is_external'],
            raw['preview_url'],
            raw['preview_page'],
            raw['button'] ? BaseLinkButton.deserialize(raw['button']) : undefined,
            raw['product'] ? BaseLinkProduct.deserialize(raw['product']) : undefined,
            raw['rating'] ? BaseLinkRating.deserialize(raw['rating']) : undefined,
            raw['application'] ? BaseLinkApplication.deserialize(raw['application']) : undefined
        )
    }
}
export class BaseLinkButton {
    constructor (
        readonly title: string,
        readonly action: BaseLinkButtonAction|undefined
    ) {

    }

    static deserialize(raw: Object): BaseLinkButton {
        return new BaseLinkButton (
            raw['title'],
            raw['action'] ? BaseLinkButtonAction.deserialize(raw['action']) : undefined
        )
    }
}
export class BaseLinkButtonAction {
    constructor (
        readonly type: BaseLinkButtonActionType|undefined,
        readonly url: string
    ) {

    }

    static deserialize(raw: Object): BaseLinkButtonAction {
        return new BaseLinkButtonAction (
            raw['type'] ? BaseLinkButtonActionType.deserialize(raw['type']) : undefined,
            raw['url']
        )
    }
}
export class BaseLinkButtonActionType {
    constructor (
    ) {

    }

    static deserialize(raw: Object): BaseLinkButtonActionType {
        return new BaseLinkButtonActionType (
        )
    }
}
export class BaseLinkProduct {
    constructor (
        readonly price: MarketPrice|undefined
    ) {

    }

    static deserialize(raw: Object): BaseLinkProduct {
        return new BaseLinkProduct (
            raw['price'] ? MarketPrice.deserialize(raw['price']) : undefined
        )
    }
}
export class BaseLinkApplication {
    constructor (
        readonly appId: number,
        readonly store: BaseLinkApplicationStore|undefined
    ) {

    }

    static deserialize(raw: Object): BaseLinkApplication {
        return new BaseLinkApplication (
            raw['app_id'],
            raw['store'] ? BaseLinkApplicationStore.deserialize(raw['store']) : undefined
        )
    }
}
export class BaseLinkApplicationStore {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): BaseLinkApplicationStore {
        return new BaseLinkApplicationStore (
            raw['id'],
            raw['name']
        )
    }
}
export class BaseLinkRating {
    constructor (
        readonly stars: number,
        readonly reviewsCount: number
    ) {

    }

    static deserialize(raw: Object): BaseLinkRating {
        return new BaseLinkRating (
            raw['stars'],
            raw['reviews_count']
        )
    }
}
export class BaseObject {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): BaseObject {
        return new BaseObject (
            raw['id'],
            raw['title']
        )
    }
}
export class BaseObjectWithName {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): BaseObjectWithName {
        return new BaseObjectWithName (
            raw['id'],
            raw['name']
        )
    }
}
export class BaseObjectCount {
    constructor (
        readonly count: number
    ) {

    }

    static deserialize(raw: Object): BaseObjectCount {
        return new BaseObjectCount (
            raw['count']
        )
    }
}
export class BaseOkResponse {
    constructor (
    ) {

    }

    static deserialize(raw: Object): BaseOkResponse {
        return new BaseOkResponse (
        )
    }
}
export class BasePlace {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly latitude: number,
        readonly longitude: number,
        readonly created: number,
        readonly icon: string,
        readonly checkins: number,
        readonly type: string,
        readonly country: string,
        readonly city: string,
        readonly address: string
    ) {

    }

    static deserialize(raw: Object): BasePlace {
        return new BasePlace (
            raw['id'],
            raw['title'],
            raw['latitude'],
            raw['longitude'],
            raw['created'],
            raw['icon'],
            raw['checkins'],
            raw['type'],
            raw['country'],
            raw['city'],
            raw['address']
        )
    }
}
export class BasePropertyExists {
    constructor (
    ) {

    }

    static deserialize(raw: Object): BasePropertyExists {
        return new BasePropertyExists (
        )
    }
}
export class BaseRepostsInfo {
    constructor (
        readonly count: number,
        readonly userReposted: number
    ) {

    }

    static deserialize(raw: Object): BaseRepostsInfo {
        return new BaseRepostsInfo (
            raw['count'],
            raw['user_reposted']
        )
    }
}
export class BaseSticker {
    constructor (
        readonly id: number,
        readonly productId: number,
        readonly photo64: string,
        readonly photo128: string,
        readonly photo256: string,
        readonly photo352: string,
        readonly width: number,
        readonly height: number
    ) {

    }

    static deserialize(raw: Object): BaseSticker {
        return new BaseSticker (
            raw['id'],
            raw['product_id'],
            raw['photo_64'],
            raw['photo_128'],
            raw['photo_256'],
            raw['photo_352'],
            raw['width'],
            raw['height']
        )
    }
}
export class BaseUserId {
    constructor (
        readonly userId: number
    ) {

    }

    static deserialize(raw: Object): BaseUserId {
        return new BaseUserId (
            raw['user_id']
        )
    }
}
export class BaseSex {
    constructor (
    ) {

    }

    static deserialize(raw: Object): BaseSex {
        return new BaseSex (
        )
    }
}
export class BoardDefaultOrder {
    constructor (
    ) {

    }

    static deserialize(raw: Object): BoardDefaultOrder {
        return new BoardDefaultOrder (
        )
    }
}
export class BoardTopicPoll {
    constructor (
        readonly pollId: number,
        readonly ownerId: number,
        readonly created: number,
        readonly isClosed: boolean,
        readonly question: string,
        readonly votes: string,
        readonly answerId: number,
        readonly answers: PollsAnswer|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): BoardTopicPoll {
        return new BoardTopicPoll (
            raw['poll_id'],
            raw['owner_id'],
            raw['created'],
            !!raw['is_closed'],
            raw['question'],
            raw['votes'],
            raw['answer_id'],
            raw['answers'] ? raw['answers'].map(v => v ? PollsAnswer.deserialize(v) : undefined) : undefined
        )
    }
}
export class BoardTopic {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly created: number,
        readonly createdBy: number,
        readonly updated: number,
        readonly updatedBy: number,
        readonly isClosed: boolean,
        readonly isFixed: boolean,
        readonly comments: number
    ) {

    }

    static deserialize(raw: Object): BoardTopic {
        return new BoardTopic (
            raw['id'],
            raw['title'],
            raw['created'],
            raw['created_by'],
            raw['updated'],
            raw['updated_by'],
            !!raw['is_closed'],
            !!raw['is_fixed'],
            raw['comments']
        )
    }
}
export class BoardTopicComment {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly date: number,
        readonly text: string,
        readonly attachments: WallCommentAttachment|undefined[]|undefined,
        readonly realOffset: number
    ) {

    }

    static deserialize(raw: Object): BoardTopicComment {
        return new BoardTopicComment (
            raw['id'],
            raw['from_id'],
            raw['date'],
            raw['text'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallCommentAttachment.deserialize(v) : undefined) : undefined,
            raw['real_offset']
        )
    }
}
export class BaseImage {
    constructor (
        readonly url: string,
        readonly width: number,
        readonly height: number
    ) {

    }

    static deserialize(raw: Object): BaseImage {
        return new BaseImage (
            raw['url'],
            raw['width'],
            raw['height']
        )
    }
}
export class DatabaseCity {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly area: string,
        readonly region: string,
        readonly important: boolean
    ) {

    }

    static deserialize(raw: Object): DatabaseCity {
        return new DatabaseCity (
            raw['id'],
            raw['title'],
            raw['area'],
            raw['region'],
            !!raw['important']
        )
    }
}
export class DatabaseFaculty {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): DatabaseFaculty {
        return new DatabaseFaculty (
            raw['id'],
            raw['title']
        )
    }
}
export class DatabaseRegion {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): DatabaseRegion {
        return new DatabaseRegion (
            raw['id'],
            raw['title']
        )
    }
}
export class DatabaseSchool {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): DatabaseSchool {
        return new DatabaseSchool (
            raw['id'],
            raw['title']
        )
    }
}
export class DatabaseStreet {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): DatabaseStreet {
        return new DatabaseStreet (
            raw['id'],
            raw['title']
        )
    }
}
export class DatabaseUniversity {
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): DatabaseUniversity {
        return new DatabaseUniversity (
            raw['id'],
            raw['title']
        )
    }
}
export class DocsDoc {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly size: number,
        readonly ext: string,
        readonly url: string,
        readonly date: number,
        readonly type: number,
        readonly preview: DocsDocPreview|undefined,
        readonly accessKey: string
    ) {

    }

    static deserialize(raw: Object): DocsDoc {
        return new DocsDoc (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['size'],
            raw['ext'],
            raw['url'],
            raw['date'],
            raw['type'],
            raw['preview'] ? DocsDocPreview.deserialize(raw['preview']) : undefined,
            raw['access_key']
        )
    }
}
export class DocsDocTypes {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly count: number
    ) {

    }

    static deserialize(raw: Object): DocsDocTypes {
        return new DocsDocTypes (
            raw['id'],
            raw['title'],
            raw['count']
        )
    }
}
export class DocsDocUploadResponse {
    constructor (
        readonly file: string
    ) {

    }

    static deserialize(raw: Object): DocsDocUploadResponse {
        return new DocsDocUploadResponse (
            raw['file']
        )
    }
}
export class DocsDocPreview {
    constructor (
        readonly photo: DocsDocPreviewPhoto|undefined,
        readonly video: DocsDocPreviewVideo|undefined
    ) {

    }

    static deserialize(raw: Object): DocsDocPreview {
        return new DocsDocPreview (
            raw['photo'] ? DocsDocPreviewPhoto.deserialize(raw['photo']) : undefined,
            raw['video'] ? DocsDocPreviewVideo.deserialize(raw['video']) : undefined
        )
    }
}
export class DocsDocPreviewPhoto {
    constructor (
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsDocPreviewPhoto {
        return new DocsDocPreviewPhoto (
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsDocPreviewVideo {
    constructor (
        readonly src: string,
        readonly width: number,
        readonly height: number,
        readonly filesize: number
    ) {

    }

    static deserialize(raw: Object): DocsDocPreviewVideo {
        return new DocsDocPreviewVideo (
            raw['src'],
            raw['width'],
            raw['height'],
            raw['filesize']
        )
    }
}
export class FaveFavesLink {
    constructor (
        readonly id: number,
        readonly url: string,
        readonly title: string,
        readonly description: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string
    ) {

    }

    static deserialize(raw: Object): FaveFavesLink {
        return new FaveFavesLink (
            raw['id'],
            raw['url'],
            raw['title'],
            raw['description'],
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200']
        )
    }
}
export class FriendsFriendsList {
    constructor (
        readonly name: string,
        readonly id: number
    ) {

    }

    static deserialize(raw: Object): FriendsFriendsList {
        return new FriendsFriendsList (
            raw['name'],
            raw['id']
        )
    }
}
export class FriendsRequests {
    constructor (
        readonly userId: number,
        readonly from: string,
        readonly mutual: FriendsRequestsMutual|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsRequests {
        return new FriendsRequests (
            raw['user_id'],
            raw['from'],
            raw['mutual'] ? FriendsRequestsMutual.deserialize(raw['mutual']) : undefined
        )
    }
}
export class FriendsRequestsMutual {
    constructor (
        readonly count: number,
        readonly users: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsRequestsMutual {
        return new FriendsRequestsMutual (
            raw['count'],
            raw['users'] ? raw['users'].map(v => v) : undefined
        )
    }
}
export class FriendsRequestsXtrMessage {
    constructor (
        readonly userId: number,
        readonly from: string,
        readonly mutual: FriendsRequestsMutual|undefined,
        readonly message: string
    ) {

    }

    static deserialize(raw: Object): FriendsRequestsXtrMessage {
        return new FriendsRequestsXtrMessage (
            raw['user_id'],
            raw['from'],
            raw['mutual'] ? FriendsRequestsMutual.deserialize(raw['mutual']) : undefined,
            raw['message']
        )
    }
}
export class FriendsFriendStatus {
    constructor (
        readonly userId: number,
        readonly friendStatus: number,
        readonly requestMessage: string,
        readonly readState: number,
        readonly sign: string
    ) {

    }

    static deserialize(raw: Object): FriendsFriendStatus {
        return new FriendsFriendStatus (
            raw['user_id'],
            raw['friend_status'],
            raw['request_message'],
            raw['read_state'],
            raw['sign']
        )
    }
}
export class FriendsUserXtrLists {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly lists: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsUserXtrLists {
        return new FriendsUserXtrLists (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['lists'] ? raw['lists'].map(v => v) : undefined
        )
    }
}
export class FriendsUserXtrPhone {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly phone: string
    ) {

    }

    static deserialize(raw: Object): FriendsUserXtrPhone {
        return new FriendsUserXtrPhone (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['phone']
        )
    }
}
export class GiftsLayout {
    constructor (
        readonly id: number,
        readonly thumb256: string,
        readonly thumb96: string,
        readonly thumb48: string
    ) {

    }

    static deserialize(raw: Object): GiftsLayout {
        return new GiftsLayout (
            raw['id'],
            raw['thumb_256'],
            raw['thumb_96'],
            raw['thumb_48']
        )
    }
}
export class GiftsGift {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly message: string,
        readonly date: number,
        readonly gift: GiftsLayout|undefined,
        readonly privacy: number,
        readonly giftHash: string
    ) {

    }

    static deserialize(raw: Object): GiftsGift {
        return new GiftsGift (
            raw['id'],
            raw['from_id'],
            raw['message'],
            raw['date'],
            raw['gift'] ? GiftsLayout.deserialize(raw['gift']) : undefined,
            raw['privacy'],
            raw['gift_hash']
        )
    }
}
export class GroupsBanInfo {
    constructor (
        readonly adminId: number,
        readonly date: number,
        readonly reason: number,
        readonly comment: string,
        readonly endDate: number
    ) {

    }

    static deserialize(raw: Object): GroupsBanInfo {
        return new GroupsBanInfo (
            raw['admin_id'],
            raw['date'],
            raw['reason'],
            raw['comment'],
            raw['end_date']
        )
    }
}
export class GroupsGroupsArray {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGroupsArray {
        return new GroupsGroupsArray (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class GroupsGroupCategory {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: BaseObjectWithName|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGroupCategory {
        return new GroupsGroupCategory (
            raw['id'],
            raw['name'],
            raw['subcategories'] ? raw['subcategories'].map(v => v ? BaseObjectWithName.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGroupCategoryFull {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: GroupsGroupCategory|undefined[]|undefined,
        readonly pageCount: number,
        readonly pagePreviews: GroupsGroup|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGroupCategoryFull {
        return new GroupsGroupCategoryFull (
            raw['id'],
            raw['name'],
            raw['subcategories'] ? raw['subcategories'].map(v => v ? GroupsGroupCategory.deserialize(v) : undefined) : undefined,
            raw['page_count'],
            raw['page_previews'] ? raw['page_previews'].map(v => v ? GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsContactsItem {
    constructor (
        readonly userId: number,
        readonly desc: string,
        readonly email: string,
        readonly phone: string
    ) {

    }

    static deserialize(raw: Object): GroupsContactsItem {
        return new GroupsContactsItem (
            raw['user_id'],
            raw['desc'],
            raw['email'],
            raw['phone']
        )
    }
}
export class GroupsCountersGroup {
    constructor (
        readonly photos: number,
        readonly albums: number,
        readonly topics: number,
        readonly videos: number,
        readonly audios: number,
        readonly docs: number,
        readonly market: number
    ) {

    }

    static deserialize(raw: Object): GroupsCountersGroup {
        return new GroupsCountersGroup (
            raw['photos'],
            raw['albums'],
            raw['topics'],
            raw['videos'],
            raw['audios'],
            raw['docs'],
            raw['market']
        )
    }
}
export class GroupsCover {
    constructor (
        readonly enabled: boolean,
        readonly images: BaseImage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsCover {
        return new GroupsCover (
            !!raw['enabled'],
            raw['images'] ? raw['images'].map(v => v ? BaseImage.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGroup {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly screenName: string,
        readonly isClosed: number,
        readonly type: string,
        readonly isAdmin: boolean,
        readonly adminLevel: number,
        readonly isMember: boolean,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string
    ) {

    }

    static deserialize(raw: Object): GroupsGroup {
        return new GroupsGroup (
            raw['id'],
            raw['name'],
            raw['screen_name'],
            raw['is_closed'],
            raw['type'],
            !!raw['is_admin'],
            raw['admin_level'],
            !!raw['is_member'],
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200']
        )
    }
}
export class GroupsGroupFull {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly screenName: string,
        readonly isClosed: number,
        readonly type: string,
        readonly isAdmin: boolean,
        readonly adminLevel: number,
        readonly isMember: boolean,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string,
        readonly market: GroupsMarketInfo|undefined,
        readonly memberStatus: number,
        readonly isFavorite: boolean,
        readonly isSubscribed: boolean,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly verified: boolean,
        readonly description: string,
        readonly wikiPage: string,
        readonly membersCount: number,
        readonly counters: GroupsCountersGroup|undefined,
        readonly cover: GroupsCover|undefined,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly activity: string,
        readonly fixedPost: number,
        readonly canCreateTopic: boolean,
        readonly canUploadVideo: boolean,
        readonly status: string,
        readonly mainAlbumId: number,
        readonly links: GroupsLinksItem|undefined[]|undefined,
        readonly contacts: GroupsContactsItem|undefined[]|undefined,
        readonly site: string,
        readonly mainSection: number,
        readonly canMessage: boolean,
        readonly isMessagesAllowed: boolean,
        readonly startDate: number,
        readonly finishDate: number,
        readonly deactivated: string,
        readonly ageLimits: number
    ) {

    }

    static deserialize(raw: Object): GroupsGroupFull {
        return new GroupsGroupFull (
            raw['id'],
            raw['name'],
            raw['screen_name'],
            raw['is_closed'],
            raw['type'],
            !!raw['is_admin'],
            raw['admin_level'],
            !!raw['is_member'],
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200'],
            raw['market'] ? GroupsMarketInfo.deserialize(raw['market']) : undefined,
            raw['member_status'],
            !!raw['is_favorite'],
            !!raw['is_subscribed'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            !!raw['verified'],
            raw['description'],
            raw['wiki_page'],
            raw['members_count'],
            raw['counters'] ? GroupsCountersGroup.deserialize(raw['counters']) : undefined,
            raw['cover'] ? GroupsCover.deserialize(raw['cover']) : undefined,
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            raw['activity'],
            raw['fixed_post'],
            !!raw['can_create_topic'],
            !!raw['can_upload_video'],
            raw['status'],
            raw['main_album_id'],
            raw['links'] ? raw['links'].map(v => v ? GroupsLinksItem.deserialize(v) : undefined) : undefined,
            raw['contacts'] ? raw['contacts'].map(v => v ? GroupsContactsItem.deserialize(v) : undefined) : undefined,
            raw['site'],
            raw['main_section'],
            !!raw['can_message'],
            !!raw['is_messages_allowed'],
            raw['start_date'],
            raw['finish_date'],
            raw['deactivated'],
            raw['age_limits']
        )
    }
}
export class GroupsGroupXtrInvitedBy {
    constructor (
        readonly id: string,
        readonly name: string,
        readonly screenName: string,
        readonly isClosed: boolean,
        readonly type: string,
        readonly isAdmin: boolean,
        readonly adminLevel: number,
        readonly isMember: boolean,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string,
        readonly invitedBy: number
    ) {

    }

    static deserialize(raw: Object): GroupsGroupXtrInvitedBy {
        return new GroupsGroupXtrInvitedBy (
            raw['id'],
            raw['name'],
            raw['screen_name'],
            !!raw['is_closed'],
            raw['type'],
            !!raw['is_admin'],
            raw['admin_level'],
            !!raw['is_member'],
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200'],
            raw['invited_by']
        )
    }
}
export class GroupsGroupLink {
    constructor (
        readonly id: number,
        readonly url: string,
        readonly editTitle: boolean,
        readonly desc: string,
        readonly imageProcessing: boolean
    ) {

    }

    static deserialize(raw: Object): GroupsGroupLink {
        return new GroupsGroupLink (
            raw['id'],
            raw['url'],
            !!raw['edit_title'],
            raw['desc'],
            !!raw['image_processing']
        )
    }
}
export class GroupsLinksItem {
    constructor (
        readonly id: number,
        readonly url: string,
        readonly editTitle: number,
        readonly name: number,
        readonly desc: string,
        readonly photo50: string,
        readonly photo100: string
    ) {

    }

    static deserialize(raw: Object): GroupsLinksItem {
        return new GroupsLinksItem (
            raw['id'],
            raw['url'],
            raw['edit_title'],
            raw['name'],
            raw['desc'],
            raw['photo_50'],
            raw['photo_100']
        )
    }
}
export class GroupsMarketInfo {
    constructor (
        readonly enabled: boolean,
        readonly priceMin: number,
        readonly priceMax: number,
        readonly mainAlbumId: number,
        readonly contactId: number,
        readonly currency: MarketCurrency|undefined,
        readonly currencyText: string
    ) {

    }

    static deserialize(raw: Object): GroupsMarketInfo {
        return new GroupsMarketInfo (
            !!raw['enabled'],
            raw['price_min'],
            raw['price_max'],
            raw['main_album_id'],
            raw['contact_id'],
            raw['currency'] ? MarketCurrency.deserialize(raw['currency']) : undefined,
            raw['currency_text']
        )
    }
}
export class GroupsMemberRole {
    constructor (
        readonly id: number,
        readonly role: string
    ) {

    }

    static deserialize(raw: Object): GroupsMemberRole {
        return new GroupsMemberRole (
            raw['id'],
            raw['role']
        )
    }
}
export class GroupsMemberStatus {
    constructor (
        readonly member: boolean,
        readonly userId: number
    ) {

    }

    static deserialize(raw: Object): GroupsMemberStatus {
        return new GroupsMemberStatus (
            !!raw['member'],
            raw['user_id']
        )
    }
}
export class GroupsMemberStatusFull {
    constructor (
        readonly member: boolean,
        readonly userId: number,
        readonly invitation: boolean,
        readonly request: boolean
    ) {

    }

    static deserialize(raw: Object): GroupsMemberStatusFull {
        return new GroupsMemberStatusFull (
            !!raw['member'],
            raw['user_id'],
            !!raw['invitation'],
            !!raw['request']
        )
    }
}
export class GroupsGroupSettings {
    constructor (
        readonly title: string,
        readonly description: string,
        readonly address: string,
        readonly place: PlacesPlaceMin|undefined,
        readonly wall: number,
        readonly photos: number,
        readonly video: number,
        readonly audio: number,
        readonly docs: number,
        readonly topics: number,
        readonly wiki: number,
        readonly obsceneFilter: boolean,
        readonly obsceneStopwords: boolean,
        readonly obsceneWords: string,
        readonly access: number,
        readonly subject: number,
        readonly subjectList: GroupsSubjectItem|undefined[]|undefined,
        readonly rss: string,
        readonly website: string
    ) {

    }

    static deserialize(raw: Object): GroupsGroupSettings {
        return new GroupsGroupSettings (
            raw['title'],
            raw['description'],
            raw['address'],
            raw['place'] ? PlacesPlaceMin.deserialize(raw['place']) : undefined,
            raw['wall'],
            raw['photos'],
            raw['video'],
            raw['audio'],
            raw['docs'],
            raw['topics'],
            raw['wiki'],
            !!raw['obscene_filter'],
            !!raw['obscene_stopwords'],
            raw['obscene_words'],
            raw['access'],
            raw['subject'],
            raw['subject_list'] ? raw['subject_list'].map(v => v ? GroupsSubjectItem.deserialize(v) : undefined) : undefined,
            raw['rss'],
            raw['website']
        )
    }
}
export class GroupsSubjectItem {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): GroupsSubjectItem {
        return new GroupsSubjectItem (
            raw['id'],
            raw['name']
        )
    }
}
export class GroupsUserXtrBanInfo {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseObject|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: boolean,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly banInfo: GroupsBanInfo|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsUserXtrBanInfo {
        return new GroupsUserXtrBanInfo (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseObject.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            !!raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['ban_info'] ? GroupsBanInfo.deserialize(raw['ban_info']) : undefined
        )
    }
}
export class GroupsRoleOptions {
    constructor (
    ) {

    }

    static deserialize(raw: Object): GroupsRoleOptions {
        return new GroupsRoleOptions (
        )
    }
}
export class GroupsUserXtrRole {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly role: GroupsRoleOptions|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsUserXtrRole {
        return new GroupsUserXtrRole (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['role'] ? GroupsRoleOptions.deserialize(raw['role']) : undefined
        )
    }
}
export class LeadsLead {
    constructor (
        readonly limit: number,
        readonly spent: number,
        readonly cost: number,
        readonly impressions: number,
        readonly started: number,
        readonly completed: number,
        readonly days: LeadsLeadDays|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsLead {
        return new LeadsLead (
            raw['limit'],
            raw['spent'],
            raw['cost'],
            raw['impressions'],
            raw['started'],
            raw['completed'],
            raw['days'] ? LeadsLeadDays.deserialize(raw['days']) : undefined
        )
    }
}
export class LeadsLeadDays {
    constructor (
        readonly impressions: number,
        readonly started: number,
        readonly completed: number,
        readonly spent: number
    ) {

    }

    static deserialize(raw: Object): LeadsLeadDays {
        return new LeadsLeadDays (
            raw['impressions'],
            raw['started'],
            raw['completed'],
            raw['spent']
        )
    }
}
export class LeadsStart {
    constructor (
        readonly testMode: boolean,
        readonly vkSid: string
    ) {

    }

    static deserialize(raw: Object): LeadsStart {
        return new LeadsStart (
            !!raw['test_mode'],
            raw['vk_sid']
        )
    }
}
export class LeadsChecked {
    constructor (
        readonly result: string,
        readonly reason: string,
        readonly startLink: string,
        readonly sid: string
    ) {

    }

    static deserialize(raw: Object): LeadsChecked {
        return new LeadsChecked (
            raw['result'],
            raw['reason'],
            raw['start_link'],
            raw['sid']
        )
    }
}
export class LeadsComplete {
    constructor (
        readonly limit: number,
        readonly spent: number,
        readonly cost: number,
        readonly testMode: boolean,
        readonly success: BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsComplete {
        return new LeadsComplete (
            raw['limit'],
            raw['spent'],
            raw['cost'],
            !!raw['test_mode'],
            raw['success'] ? BaseOkResponse.deserialize(raw['success']) : undefined
        )
    }
}
export class LeadsEntry {
    constructor (
        readonly uid: number,
        readonly aid: number,
        readonly sid: string,
        readonly date: number,
        readonly status: number,
        readonly testMode: boolean,
        readonly startDate: number,
        readonly comment: string
    ) {

    }

    static deserialize(raw: Object): LeadsEntry {
        return new LeadsEntry (
            raw['uid'],
            raw['aid'],
            raw['sid'],
            raw['date'],
            raw['status'],
            !!raw['test_mode'],
            raw['start_date'],
            raw['comment']
        )
    }
}
export class MarketMarketAlbum {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly count: number,
        readonly updatedTime: number,
        readonly photo: PhotosPhoto|undefined
    ) {

    }

    static deserialize(raw: Object): MarketMarketAlbum {
        return new MarketMarketAlbum (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['count'],
            raw['updated_time'],
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined
        )
    }
}
export class MarketMarketCategory {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly section: MarketSection|undefined
    ) {

    }

    static deserialize(raw: Object): MarketMarketCategory {
        return new MarketMarketCategory (
            raw['id'],
            raw['name'],
            raw['section'] ? MarketSection.deserialize(raw['section']) : undefined
        )
    }
}
export class MarketCurrency {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): MarketCurrency {
        return new MarketCurrency (
            raw['id'],
            raw['name']
        )
    }
}
export class MarketMarketItem {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string,
        readonly price: MarketPrice|undefined,
        readonly category: MarketMarketCategory|undefined,
        readonly date: number,
        readonly thumbPhoto: string,
        readonly availability: number
    ) {

    }

    static deserialize(raw: Object): MarketMarketItem {
        return new MarketMarketItem (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['description'],
            raw['price'] ? MarketPrice.deserialize(raw['price']) : undefined,
            raw['category'] ? MarketMarketCategory.deserialize(raw['category']) : undefined,
            raw['date'],
            raw['thumb_photo'],
            raw['availability']
        )
    }
}
export class MarketMarketItemFull {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string,
        readonly price: MarketPrice|undefined,
        readonly category: MarketMarketCategory|undefined,
        readonly date: number,
        readonly thumbPhoto: string,
        readonly availability: number,
        readonly photos: PhotosPhoto|undefined[]|undefined,
        readonly canComment: boolean,
        readonly canRepost: boolean,
        readonly likes: BaseLikes|undefined,
        readonly viewsCount: number
    ) {

    }

    static deserialize(raw: Object): MarketMarketItemFull {
        return new MarketMarketItemFull (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['description'],
            raw['price'] ? MarketPrice.deserialize(raw['price']) : undefined,
            raw['category'] ? MarketMarketCategory.deserialize(raw['category']) : undefined,
            raw['date'],
            raw['thumb_photo'],
            raw['availability'],
            raw['photos'] ? raw['photos'].map(v => v ? PhotosPhoto.deserialize(v) : undefined) : undefined,
            !!raw['can_comment'],
            !!raw['can_repost'],
            raw['likes'] ? BaseLikes.deserialize(raw['likes']) : undefined,
            raw['views_count']
        )
    }
}
export class MarketPrice {
    constructor (
        readonly amount: string,
        readonly currency: MarketCurrency|undefined,
        readonly text: string
    ) {

    }

    static deserialize(raw: Object): MarketPrice {
        return new MarketPrice (
            raw['amount'],
            raw['currency'] ? MarketCurrency.deserialize(raw['currency']) : undefined,
            raw['text']
        )
    }
}
export class MarketSection {
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): MarketSection {
        return new MarketSection (
            raw['id'],
            raw['name']
        )
    }
}
export class MessagesAttachmentsHistory {
    constructor (
        readonly type: string,
        readonly photo: PhotosPhoto|undefined,
        readonly video: VideoVideo|undefined,
        readonly audio: AudioAudioFull|undefined,
        readonly doc: DocsDoc|undefined,
        readonly link: BaseLink|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesAttachmentsHistory {
        return new MessagesAttachmentsHistory (
            raw['type'],
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['video'] ? VideoVideo.deserialize(raw['video']) : undefined,
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined,
            raw['doc'] ? DocsDoc.deserialize(raw['doc']) : undefined,
            raw['link'] ? BaseLink.deserialize(raw['link']) : undefined
        )
    }
}
export class MessagesMessageAttachment {
    constructor (
        readonly photo: PhotosPhoto|undefined,
        readonly audio: AudioAudioFull|undefined,
        readonly video: VideoVideo|undefined,
        readonly doc: DocsDoc|undefined,
        readonly link: BaseLink|undefined,
        readonly market: MarketMarketItem|undefined,
        readonly marketMarketAlbum: MarketMarketAlbum|undefined,
        readonly gift: GiftsLayout|undefined,
        readonly sticker: BaseSticker|undefined,
        readonly wall: WallWallpostAttached|undefined,
        readonly wallReply: WallWallComment|undefined,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): MessagesMessageAttachment {
        return new MessagesMessageAttachment (
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined,
            raw['video'] ? VideoVideo.deserialize(raw['video']) : undefined,
            raw['doc'] ? DocsDoc.deserialize(raw['doc']) : undefined,
            raw['link'] ? BaseLink.deserialize(raw['link']) : undefined,
            raw['market'] ? MarketMarketItem.deserialize(raw['market']) : undefined,
            raw['market_market_album'] ? MarketMarketAlbum.deserialize(raw['market_market_album']) : undefined,
            raw['gift'] ? GiftsLayout.deserialize(raw['gift']) : undefined,
            raw['sticker'] ? BaseSticker.deserialize(raw['sticker']) : undefined,
            raw['wall'] ? WallWallpostAttached.deserialize(raw['wall']) : undefined,
            raw['wall_reply'] ? WallWallComment.deserialize(raw['wall_reply']) : undefined,
            raw['type']
        )
    }
}
export class MessagesChat {
    constructor (
        readonly id: number,
        readonly type: string,
        readonly title: string,
        readonly adminId: number,
        readonly users: number[]|undefined,
        readonly pushSettings: MessagesChatPushSettings|undefined,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string,
        readonly left: boolean,
        readonly kicked: boolean
    ) {

    }

    static deserialize(raw: Object): MessagesChat {
        return new MessagesChat (
            raw['id'],
            raw['type'],
            raw['title'],
            raw['admin_id'],
            raw['users'] ? raw['users'].map(v => v) : undefined,
            raw['push_settings'] ? MessagesChatPushSettings.deserialize(raw['push_settings']) : undefined,
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200'],
            !!raw['left'],
            !!raw['kicked']
        )
    }
}
export class MessagesChatFull {
    constructor (
        readonly id: number,
        readonly type: string,
        readonly title: string,
        readonly adminId: number,
        readonly users: MessagesUserXtrInvitedBy|undefined[]|undefined,
        readonly pushSettings: MessagesChatPushSettings|undefined,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string,
        readonly left: boolean,
        readonly kicked: boolean
    ) {

    }

    static deserialize(raw: Object): MessagesChatFull {
        return new MessagesChatFull (
            raw['id'],
            raw['type'],
            raw['title'],
            raw['admin_id'],
            raw['users'] ? raw['users'].map(v => v ? MessagesUserXtrInvitedBy.deserialize(v) : undefined) : undefined,
            raw['push_settings'] ? MessagesChatPushSettings.deserialize(raw['push_settings']) : undefined,
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200'],
            !!raw['left'],
            !!raw['kicked']
        )
    }
}
export class MessagesChatPushSettings {
    constructor (
        readonly sound: boolean,
        readonly disabledUntil: number
    ) {

    }

    static deserialize(raw: Object): MessagesChatPushSettings {
        return new MessagesChatPushSettings (
            !!raw['sound'],
            raw['disabled_until']
        )
    }
}
export class MessagesDialog {
    constructor (
        readonly unread: number,
        readonly message: MessagesMessage|undefined,
        readonly inRead: number,
        readonly outRead: number
    ) {

    }

    static deserialize(raw: Object): MessagesDialog {
        return new MessagesDialog (
            raw['unread'],
            raw['message'] ? MessagesMessage.deserialize(raw['message']) : undefined,
            raw['in_read'],
            raw['out_read']
        )
    }
}
export class MessagesLastActivity {
    constructor (
        readonly online: boolean,
        readonly time: number
    ) {

    }

    static deserialize(raw: Object): MessagesLastActivity {
        return new MessagesLastActivity (
            !!raw['online'],
            raw['time']
        )
    }
}
export class MessagesLongpollParams {
    constructor (
        readonly key: string,
        readonly server: string,
        readonly ts: number,
        readonly pts: number
    ) {

    }

    static deserialize(raw: Object): MessagesLongpollParams {
        return new MessagesLongpollParams (
            raw['key'],
            raw['server'],
            raw['ts'],
            raw['pts']
        )
    }
}
export class MessagesLongpollMessages {
    constructor (
        readonly count: number,
        readonly items: MessagesMessage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesLongpollMessages {
        return new MessagesLongpollMessages (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesMessage {
    constructor (
        readonly id: number,
        readonly date: number,
        readonly out: boolean,
        readonly userId: number,
        readonly fromId: number,
        readonly randomId: number,
        readonly important: boolean,
        readonly deleted: boolean,
        readonly fwdMessages: MessagesMessage|undefined[]|undefined,
        readonly readState: boolean,
        readonly title: string,
        readonly body: string,
        readonly attachments: MessagesMessageAttachment|undefined[]|undefined,
        readonly chatId: number,
        readonly chatActive: number[]|undefined,
        readonly usersCount: number,
        readonly adminId: number,
        readonly photo50: string,
        readonly photo100: string,
        readonly photo200: string,
        readonly geo: BaseGeo|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesMessage {
        return new MessagesMessage (
            raw['id'],
            raw['date'],
            !!raw['out'],
            raw['user_id'],
            raw['from_id'],
            raw['random_id'],
            !!raw['important'],
            !!raw['deleted'],
            raw['fwd_messages'] ? raw['fwd_messages'].map(v => v ? MessagesMessage.deserialize(v) : undefined) : undefined,
            !!raw['read_state'],
            raw['title'],
            raw['body'],
            raw['attachments'] ? raw['attachments'].map(v => v ? MessagesMessageAttachment.deserialize(v) : undefined) : undefined,
            raw['chat_id'],
            raw['chat_active'] ? raw['chat_active'].map(v => v) : undefined,
            raw['users_count'],
            raw['admin_id'],
            raw['photo_50'],
            raw['photo_100'],
            raw['photo_200'],
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined
        )
    }
}
export class MessagesUserXtrInvitedBy {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly type: string,
        readonly invitedBy: number
    ) {

    }

    static deserialize(raw: Object): MessagesUserXtrInvitedBy {
        return new MessagesUserXtrInvitedBy (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['type'],
            raw['invited_by']
        )
    }
}
export class NewsfeedNewsfeedItem {
    constructor (
        readonly type: string,
        readonly sourceId: number,
        readonly date: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedNewsfeedItem {
        return new NewsfeedNewsfeedItem (
            raw['type'],
            raw['source_id'],
            raw['date']
        )
    }
}
export class NewsfeedItemAudio {
    constructor (
        readonly audio: NewsfeedItemAudioAudio|undefined,
        readonly postId: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemAudio {
        return new NewsfeedItemAudio (
            raw['audio'] ? NewsfeedItemAudioAudio.deserialize(raw['audio']) : undefined,
            raw['post_id']
        )
    }
}
export class NewsfeedItemAudioAudio {
    constructor (
        readonly count: number,
        readonly items: AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemAudioAudio {
        return new NewsfeedItemAudioAudio (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemFriend {
    constructor (
        readonly friends: BaseUserId|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemFriend {
        return new NewsfeedItemFriend (
            raw['friends'] ? raw['friends'].map(v => v ? BaseUserId.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemNote {
    constructor (
        readonly notes: NewsfeedItemNoteNotes|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemNote {
        return new NewsfeedItemNote (
            raw['notes'] ? NewsfeedItemNoteNotes.deserialize(raw['notes']) : undefined
        )
    }
}
export class NewsfeedItemNoteNotes {
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedNote|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemNoteNotes {
        return new NewsfeedItemNoteNotes (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedNote.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemPhoto {
    constructor (
        readonly photos: NewsfeedItemPhotoPhotos|undefined,
        readonly postId: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemPhoto {
        return new NewsfeedItemPhoto (
            raw['photos'] ? NewsfeedItemPhotoPhotos.deserialize(raw['photos']) : undefined,
            raw['post_id']
        )
    }
}
export class NewsfeedItemPhotoPhotos {
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemPhotoPhotos {
        return new NewsfeedItemPhotoPhotos (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemPhotoTag {
    constructor (
        readonly photoTags: NewsfeedItemPhotoTagPhotoTags|undefined,
        readonly postId: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemPhotoTag {
        return new NewsfeedItemPhotoTag (
            raw['photo_tags'] ? NewsfeedItemPhotoTagPhotoTags.deserialize(raw['photo_tags']) : undefined,
            raw['post_id']
        )
    }
}
export class NewsfeedItemPhotoTagPhotoTags {
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemPhotoTagPhotoTags {
        return new NewsfeedItemPhotoTagPhotoTags (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemTopic {
    constructor (
        readonly postId: number,
        readonly text: string,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemTopic {
        return new NewsfeedItemTopic (
            raw['post_id'],
            raw['text'],
            raw['comments'] ? BaseCommentsInfo.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined
        )
    }
}
export class NewsfeedItemVideo {
    constructor (
        readonly video: NewsfeedItemVideoVideo|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemVideo {
        return new NewsfeedItemVideo (
            raw['video'] ? NewsfeedItemVideoVideo.deserialize(raw['video']) : undefined
        )
    }
}
export class NewsfeedItemVideoVideo {
    constructor (
        readonly count: number,
        readonly items: VideoVideo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemVideoVideo {
        return new NewsfeedItemVideoVideo (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedItemWallpost {
    constructor (
        readonly postId: number,
        readonly postType: string,
        readonly text: string,
        readonly copyHistory: WallWallpost|undefined[]|undefined,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined,
        readonly postSource: WallPostSource|undefined,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined,
        readonly reposts: BaseRepostsInfo|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedItemWallpost {
        return new NewsfeedItemWallpost (
            raw['post_id'],
            raw['post_type'],
            raw['text'],
            raw['copy_history'] ? raw['copy_history'].map(v => v ? WallWallpost.deserialize(v) : undefined) : undefined,
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined,
            raw['comments'] ? BaseCommentsInfo.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseRepostsInfo.deserialize(raw['reposts']) : undefined
        )
    }
}
export class NewsfeedList {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly noReposts: boolean,
        readonly sourceIds: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedList {
        return new NewsfeedList (
            raw['id'],
            raw['title'],
            !!raw['no_reposts'],
            raw['source_ids'] ? raw['source_ids'].map(v => v) : undefined
        )
    }
}
export class NewsfeedNewsfeedNote {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly comments: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedNewsfeedNote {
        return new NewsfeedNewsfeedNote (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['comments']
        )
    }
}
export class NewsfeedNewsfeedPhoto {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string,
        readonly likes: BaseLikes|undefined,
        readonly comments: BaseObjectCount|undefined,
        readonly canComment: boolean,
        readonly canRepost: boolean
    ) {

    }

    static deserialize(raw: Object): NewsfeedNewsfeedPhoto {
        return new NewsfeedNewsfeedPhoto (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key'],
            raw['likes'] ? BaseLikes.deserialize(raw['likes']) : undefined,
            raw['comments'] ? BaseObjectCount.deserialize(raw['comments']) : undefined,
            !!raw['can_comment'],
            !!raw['can_repost']
        )
    }
}
export class NotesNoteComment {
    constructor (
        readonly id: number,
        readonly uid: number,
        readonly nid: number,
        readonly oid: number,
        readonly date: number,
        readonly message: string,
        readonly replyTo: number
    ) {

    }

    static deserialize(raw: Object): NotesNoteComment {
        return new NotesNoteComment (
            raw['id'],
            raw['uid'],
            raw['nid'],
            raw['oid'],
            raw['date'],
            raw['message'],
            raw['reply_to']
        )
    }
}
export class NotesNote {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly comments: number,
        readonly canComment: boolean,
        readonly date: number,
        readonly title: string,
        readonly text: string,
        readonly textWiki: string,
        readonly viewUrl: string
    ) {

    }

    static deserialize(raw: Object): NotesNote {
        return new NotesNote (
            raw['id'],
            raw['owner_id'],
            raw['comments'],
            !!raw['can_comment'],
            raw['date'],
            raw['title'],
            raw['text'],
            raw['text_wiki'],
            raw['view_url']
        )
    }
}
export class NotificationsNotificationsComment {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly date: number,
        readonly text: string,
        readonly photo: PhotosPhoto|undefined,
        readonly video: VideoVideo|undefined,
        readonly post: WallWallpost|undefined,
        readonly topic: BoardTopic|undefined
    ) {

    }

    static deserialize(raw: Object): NotificationsNotificationsComment {
        return new NotificationsNotificationsComment (
            raw['id'],
            raw['owner_id'],
            raw['date'],
            raw['text'],
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['video'] ? VideoVideo.deserialize(raw['video']) : undefined,
            raw['post'] ? WallWallpost.deserialize(raw['post']) : undefined,
            raw['topic'] ? BoardTopic.deserialize(raw['topic']) : undefined
        )
    }
}
export class NotificationsNotification {
    constructor (
        readonly type: string,
        readonly date: number,
        readonly parent: any,
        readonly feedback: NotificationsFeedback|undefined,
        readonly reply: NotificationsReply|undefined
    ) {

    }

    static deserialize(raw: Object): NotificationsNotification {
        return new NotificationsNotification (
            raw['type'],
            raw['date'],
            raw['parent'],
            raw['feedback'] ? NotificationsFeedback.deserialize(raw['feedback']) : undefined,
            raw['reply'] ? NotificationsReply.deserialize(raw['reply']) : undefined
        )
    }
}
export class NotificationsFeedback {
    constructor (
        readonly id: number,
        readonly toId: number,
        readonly fromId: number,
        readonly text: string,
        readonly likes: BaseLikesInfo|undefined,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined
    ) {

    }

    static deserialize(raw: Object): NotificationsFeedback {
        return new NotificationsFeedback (
            raw['id'],
            raw['to_id'],
            raw['from_id'],
            raw['text'],
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined
        )
    }
}
export class NotificationsReply {
    constructor (
        readonly id: number,
        readonly date: number,
        readonly text: number
    ) {

    }

    static deserialize(raw: Object): NotificationsReply {
        return new NotificationsReply (
            raw['id'],
            raw['date'],
            raw['text']
        )
    }
}
export class OauthError {
    constructor (
        readonly error: string,
        readonly errorDescription: string,
        readonly redirectUri: string
    ) {

    }

    static deserialize(raw: Object): OauthError {
        return new OauthError (
            raw['error'],
            raw['error_description'],
            raw['redirect_uri']
        )
    }
}
export class OrdersOrder {
    constructor (
        readonly id: number,
        readonly appOrderId: number,
        readonly status: string,
        readonly userId: number,
        readonly receiverId: number,
        readonly item: string,
        readonly amount: number,
        readonly date: number,
        readonly transactionId: number,
        readonly cancelTransactionId: number
    ) {

    }

    static deserialize(raw: Object): OrdersOrder {
        return new OrdersOrder (
            raw['id'],
            raw['app_order_id'],
            raw['status'],
            raw['user_id'],
            raw['receiver_id'],
            raw['item'],
            raw['amount'],
            raw['date'],
            raw['transaction_id'],
            raw['cancel_transaction_id']
        )
    }
}
export class OrdersAmount {
    constructor (
        readonly amounts: OrdersAmountItem|undefined[]|undefined,
        readonly currency: string
    ) {

    }

    static deserialize(raw: Object): OrdersAmount {
        return new OrdersAmount (
            raw['amounts'] ? raw['amounts'].map(v => v ? OrdersAmountItem.deserialize(v) : undefined) : undefined,
            raw['currency']
        )
    }
}
export class OrdersAmountItem {
    constructor (
        readonly votes: string,
        readonly amount: number,
        readonly description: string
    ) {

    }

    static deserialize(raw: Object): OrdersAmountItem {
        return new OrdersAmountItem (
            raw['votes'],
            raw['amount'],
            raw['description']
        )
    }
}
export class PagesPrivacySettings {
    constructor (
    ) {

    }

    static deserialize(raw: Object): PagesPrivacySettings {
        return new PagesPrivacySettings (
        )
    }
}
export class PagesWikipage {
    constructor (
        readonly id: number,
        readonly groupId: number,
        readonly title: string,
        readonly whoCanView: PagesPrivacySettings|undefined,
        readonly whoCanEdit: PagesPrivacySettings|undefined,
        readonly views: number,
        readonly editorId: number,
        readonly editorName: string,
        readonly creatorId: number,
        readonly creatorName: number
    ) {

    }

    static deserialize(raw: Object): PagesWikipage {
        return new PagesWikipage (
            raw['id'],
            raw['group_id'],
            raw['title'],
            raw['who_can_view'] ? PagesPrivacySettings.deserialize(raw['who_can_view']) : undefined,
            raw['who_can_edit'] ? PagesPrivacySettings.deserialize(raw['who_can_edit']) : undefined,
            raw['views'],
            raw['editor_id'],
            raw['editor_name'],
            raw['creator_id'],
            raw['creator_name']
        )
    }
}
export class PagesWikipageFull {
    constructor (
        readonly id: number,
        readonly groupId: number,
        readonly title: string,
        readonly currentUserCanEdit: boolean,
        readonly currentUserCanEditAccess: boolean,
        readonly whoCanView: PagesPrivacySettings|undefined,
        readonly whoCanEdit: PagesPrivacySettings|undefined,
        readonly edited: number,
        readonly created: number,
        readonly views: number,
        readonly editorId: number,
        readonly creatorId: number,
        readonly source: string,
        readonly html: string,
        readonly viewUrl: string
    ) {

    }

    static deserialize(raw: Object): PagesWikipageFull {
        return new PagesWikipageFull (
            raw['id'],
            raw['group_id'],
            raw['title'],
            !!raw['current_user_can_edit'],
            !!raw['current_user_can_edit_access'],
            raw['who_can_view'] ? PagesPrivacySettings.deserialize(raw['who_can_view']) : undefined,
            raw['who_can_edit'] ? PagesPrivacySettings.deserialize(raw['who_can_edit']) : undefined,
            raw['edited'],
            raw['created'],
            raw['views'],
            raw['editor_id'],
            raw['creator_id'],
            raw['source'],
            raw['html'],
            raw['view_url']
        )
    }
}
export class PagesWikipageVersion {
    constructor (
        readonly id: number,
        readonly length: number,
        readonly edited: number,
        readonly editorId: number,
        readonly editorName: string
    ) {

    }

    static deserialize(raw: Object): PagesWikipageVersion {
        return new PagesWikipageVersion (
            raw['id'],
            raw['length'],
            raw['edited'],
            raw['editor_id'],
            raw['editor_name']
        )
    }
}
export class PhotosPhotoAlbum {
    constructor (
        readonly id: number,
        readonly thumb: PhotosPhoto|undefined,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string,
        readonly created: number,
        readonly updated: number,
        readonly size: number
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoAlbum {
        return new PhotosPhotoAlbum (
            raw['id'],
            raw['thumb'] ? PhotosPhoto.deserialize(raw['thumb']) : undefined,
            raw['owner_id'],
            raw['title'],
            raw['description'],
            raw['created'],
            raw['updated'],
            raw['size']
        )
    }
}
export class PhotosPhotoAlbumFull {
    constructor (
        readonly id: number,
        readonly thumbId: number,
        readonly thumbSrc: string,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string,
        readonly created: number,
        readonly updated: number,
        readonly size: number,
        readonly privacyView: string[]|undefined,
        readonly privacyComment: string[]|undefined,
        readonly uploadByAdminsOnly: boolean,
        readonly commentsDisabled: boolean,
        readonly canUpload: boolean,
        readonly thumbIsLast: boolean,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoAlbumFull {
        return new PhotosPhotoAlbumFull (
            raw['id'],
            raw['thumb_id'],
            raw['thumb_src'],
            raw['owner_id'],
            raw['title'],
            raw['description'],
            raw['created'],
            raw['updated'],
            raw['size'],
            raw['privacy_view'] ? raw['privacy_view'].map(v => v) : undefined,
            raw['privacy_comment'] ? raw['privacy_comment'].map(v => v) : undefined,
            !!raw['upload_by_admins_only'],
            !!raw['comments_disabled'],
            !!raw['can_upload'],
            !!raw['thumb_is_last'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosCommentXtrPid {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly date: number,
        readonly text: string,
        readonly likes: BaseLikesInfo|undefined,
        readonly replyToUser: number,
        readonly replyToComment: number,
        readonly attachments: WallCommentAttachment|undefined[]|undefined,
        readonly pid: number
    ) {

    }

    static deserialize(raw: Object): PhotosCommentXtrPid {
        return new PhotosCommentXtrPid (
            raw['id'],
            raw['from_id'],
            raw['date'],
            raw['text'],
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reply_to_user'],
            raw['reply_to_comment'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallCommentAttachment.deserialize(v) : undefined) : undefined,
            raw['pid']
        )
    }
}
export class PhotosMarketAlbumUploadResponse {
    constructor (
        readonly gid: number,
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): PhotosMarketAlbumUploadResponse {
        return new PhotosMarketAlbumUploadResponse (
            raw['gid'],
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}
export class PhotosMarketUploadResponse {
    constructor (
        readonly groupId: number,
        readonly server: number,
        readonly photo: string,
        readonly hash: string,
        readonly cropData: string,
        readonly cropHash: string
    ) {

    }

    static deserialize(raw: Object): PhotosMarketUploadResponse {
        return new PhotosMarketUploadResponse (
            raw['group_id'],
            raw['server'],
            raw['photo'],
            raw['hash'],
            raw['crop_data'],
            raw['crop_hash']
        )
    }
}
export class PhotosMessageUploadResponse {
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): PhotosMessageUploadResponse {
        return new PhotosMessageUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}
export class PhotosOwnerUploadResponse {
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): PhotosOwnerUploadResponse {
        return new PhotosOwnerUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}
export class PhotosPhoto {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string
    ) {

    }

    static deserialize(raw: Object): PhotosPhoto {
        return new PhotosPhoto (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key']
        )
    }
}
export class PhotosPhotoFull {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string,
        readonly likes: BaseLikes|undefined,
        readonly reposts: BaseObjectCount|undefined,
        readonly comments: BaseObjectCount|undefined,
        readonly canComment: boolean,
        readonly tags: BaseObjectCount|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoFull {
        return new PhotosPhotoFull (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key'],
            raw['likes'] ? BaseLikes.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseObjectCount.deserialize(raw['reposts']) : undefined,
            raw['comments'] ? BaseObjectCount.deserialize(raw['comments']) : undefined,
            !!raw['can_comment'],
            raw['tags'] ? BaseObjectCount.deserialize(raw['tags']) : undefined
        )
    }
}
export class PhotosPhotoFullXtrRealOffset {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string,
        readonly likes: BaseLikes|undefined,
        readonly reposts: BaseObjectCount|undefined,
        readonly comments: BaseObjectCount|undefined,
        readonly canComment: boolean,
        readonly tags: BaseObjectCount|undefined,
        readonly hidden: BasePropertyExists|undefined,
        readonly realOffset: number
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoFullXtrRealOffset {
        return new PhotosPhotoFullXtrRealOffset (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key'],
            raw['likes'] ? BaseLikes.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseObjectCount.deserialize(raw['reposts']) : undefined,
            raw['comments'] ? BaseObjectCount.deserialize(raw['comments']) : undefined,
            !!raw['can_comment'],
            raw['tags'] ? BaseObjectCount.deserialize(raw['tags']) : undefined,
            raw['hidden'] ? BasePropertyExists.deserialize(raw['hidden']) : undefined,
            raw['real_offset']
        )
    }
}
export class PhotosPhotoXtrRealOffset {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string,
        readonly hidden: BasePropertyExists|undefined,
        readonly realOffset: number
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoXtrRealOffset {
        return new PhotosPhotoXtrRealOffset (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key'],
            raw['hidden'] ? BasePropertyExists.deserialize(raw['hidden']) : undefined,
            raw['real_offset']
        )
    }
}
export class PhotosPhotoXtrTagInfo {
    constructor (
        readonly id: number,
        readonly albumId: number,
        readonly ownerId: number,
        readonly userId: number,
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined,
        readonly photo75: string,
        readonly photo130: string,
        readonly photo604: string,
        readonly photo807: string,
        readonly photo1280: string,
        readonly photo2560: string,
        readonly postId: number,
        readonly width: number,
        readonly height: number,
        readonly text: string,
        readonly date: number,
        readonly lat: number,
        readonly long: number,
        readonly accessKey: string,
        readonly placerId: number,
        readonly tagCreated: number,
        readonly tagId: number
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoXtrTagInfo {
        return new PhotosPhotoXtrTagInfo (
            raw['id'],
            raw['album_id'],
            raw['owner_id'],
            raw['user_id'],
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined,
            raw['photo_75'],
            raw['photo_130'],
            raw['photo_604'],
            raw['photo_807'],
            raw['photo_1280'],
            raw['photo_2560'],
            raw['post_id'],
            raw['width'],
            raw['height'],
            raw['text'],
            raw['date'],
            raw['lat'],
            raw['long'],
            raw['access_key'],
            raw['placer_id'],
            raw['tag_created'],
            raw['tag_id']
        )
    }
}
export class PhotosPhotoSizes {
    constructor (
        readonly src: string,
        readonly width: number,
        readonly height: number,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoSizes {
        return new PhotosPhotoSizes (
            raw['src'],
            raw['width'],
            raw['height'],
            raw['type']
        )
    }
}
export class PhotosPhotoTag {
    constructor (
        readonly userId: number,
        readonly id: number,
        readonly placerId: number,
        readonly taggedName: string,
        readonly date: number,
        readonly x: number,
        readonly y: number,
        readonly x2: number,
        readonly y2: number,
        readonly viewed: boolean
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoTag {
        return new PhotosPhotoTag (
            raw['user_id'],
            raw['id'],
            raw['placer_id'],
            raw['tagged_name'],
            raw['date'],
            raw['x'],
            raw['y'],
            raw['x2'],
            raw['y2'],
            !!raw['viewed']
        )
    }
}
export class PhotosPhotoUpload {
    constructor (
        readonly uploadUrl: string,
        readonly albumId: number,
        readonly userId: number
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoUpload {
        return new PhotosPhotoUpload (
            raw['upload_url'],
            raw['album_id'],
            raw['user_id']
        )
    }
}
export class PhotosPhotoUploadResponse {
    constructor (
        readonly server: number,
        readonly photosList: string,
        readonly aid: number,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): PhotosPhotoUploadResponse {
        return new PhotosPhotoUploadResponse (
            raw['server'],
            raw['photos_list'],
            raw['aid'],
            raw['hash']
        )
    }
}
export class PhotosWallUploadResponse {
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    static deserialize(raw: Object): PhotosWallUploadResponse {
        return new PhotosWallUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}
export class PlacesCheckin {
    constructor (
        readonly id: number,
        readonly userId: number,
        readonly date: number,
        readonly latitude: number,
        readonly longitude: number,
        readonly placeId: number,
        readonly text: string,
        readonly distance: number,
        readonly placeTitle: string,
        readonly placeCountry: number,
        readonly placeCity: number,
        readonly placeType: string,
        readonly placeIcon: string
    ) {

    }

    static deserialize(raw: Object): PlacesCheckin {
        return new PlacesCheckin (
            raw['id'],
            raw['user_id'],
            raw['date'],
            raw['latitude'],
            raw['longitude'],
            raw['place_id'],
            raw['text'],
            raw['distance'],
            raw['place_title'],
            raw['place_country'],
            raw['place_city'],
            raw['place_type'],
            raw['place_icon']
        )
    }
}
export class PlacesPlaceMin {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly latitude: number,
        readonly longitude: number,
        readonly created: number,
        readonly icon: string,
        readonly checkins: number,
        readonly type: string,
        readonly country: number,
        readonly city: number,
        readonly address: string
    ) {

    }

    static deserialize(raw: Object): PlacesPlaceMin {
        return new PlacesPlaceMin (
            raw['id'],
            raw['title'],
            raw['latitude'],
            raw['longitude'],
            raw['created'],
            raw['icon'],
            raw['checkins'],
            raw['type'],
            raw['country'],
            raw['city'],
            raw['address']
        )
    }
}
export class PlacesPlaceFull {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly latitude: number,
        readonly longitude: number,
        readonly created: number,
        readonly icon: string,
        readonly checkins: number,
        readonly type: string,
        readonly country: number,
        readonly city: number,
        readonly address: string,
        readonly distance: number,
        readonly groupId: number,
        readonly groupPhoto: string
    ) {

    }

    static deserialize(raw: Object): PlacesPlaceFull {
        return new PlacesPlaceFull (
            raw['id'],
            raw['title'],
            raw['latitude'],
            raw['longitude'],
            raw['created'],
            raw['icon'],
            raw['checkins'],
            raw['type'],
            raw['country'],
            raw['city'],
            raw['address'],
            raw['distance'],
            raw['group_id'],
            raw['group_photo']
        )
    }
}
export class PlacesTypes {
    constructor (
        readonly id: number,
        readonly title: number,
        readonly icon: string
    ) {

    }

    static deserialize(raw: Object): PlacesTypes {
        return new PlacesTypes (
            raw['id'],
            raw['title'],
            raw['icon']
        )
    }
}
export class PollsAnswer {
    constructor (
        readonly id: number,
        readonly text: string,
        readonly votes: number,
        readonly rate: number
    ) {

    }

    static deserialize(raw: Object): PollsAnswer {
        return new PollsAnswer (
            raw['id'],
            raw['text'],
            raw['votes'],
            raw['rate']
        )
    }
}
export class PollsPoll {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly created: number,
        readonly question: string,
        readonly votes: string,
        readonly answerId: number,
        readonly answers: PollsAnswer|undefined[]|undefined,
        readonly anonymous: boolean
    ) {

    }

    static deserialize(raw: Object): PollsPoll {
        return new PollsPoll (
            raw['id'],
            raw['owner_id'],
            raw['created'],
            raw['question'],
            raw['votes'],
            raw['answer_id'],
            raw['answers'] ? raw['answers'].map(v => v ? PollsAnswer.deserialize(v) : undefined) : undefined,
            !!raw['anonymous']
        )
    }
}
export class PollsVoters {
    constructor (
        readonly answerId: number,
        readonly users: PollsVotersUsers|undefined
    ) {

    }

    static deserialize(raw: Object): PollsVoters {
        return new PollsVoters (
            raw['answer_id'],
            raw['users'] ? PollsVotersUsers.deserialize(raw['users']) : undefined
        )
    }
}
export class PollsVotersUsers {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): PollsVotersUsers {
        return new PollsVotersUsers (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class SearchHint {
    constructor (
        readonly type: string,
        readonly section: string,
        readonly description: string,
        readonly global: boolean,
        readonly group: GroupsGroup|undefined,
        readonly profile: UsersUserMin|undefined
    ) {

    }

    static deserialize(raw: Object): SearchHint {
        return new SearchHint (
            raw['type'],
            raw['section'],
            raw['description'],
            !!raw['global'],
            raw['group'] ? GroupsGroup.deserialize(raw['group']) : undefined,
            raw['profile'] ? UsersUserMin.deserialize(raw['profile']) : undefined
        )
    }
}
export class SecureLevel {
    constructor (
        readonly uid: number,
        readonly level: number
    ) {

    }

    static deserialize(raw: Object): SecureLevel {
        return new SecureLevel (
            raw['uid'],
            raw['level']
        )
    }
}
export class SecureSmsNotification {
    constructor (
        readonly id: number,
        readonly appId: number,
        readonly userId: number,
        readonly date: number,
        readonly message: string
    ) {

    }

    static deserialize(raw: Object): SecureSmsNotification {
        return new SecureSmsNotification (
            raw['id'],
            raw['app_id'],
            raw['user_id'],
            raw['date'],
            raw['message']
        )
    }
}
export class SecureTokenChecked {
    constructor (
        readonly success: BaseOkResponse|undefined,
        readonly userId: number,
        readonly date: number,
        readonly expire: number
    ) {

    }

    static deserialize(raw: Object): SecureTokenChecked {
        return new SecureTokenChecked (
            raw['success'] ? BaseOkResponse.deserialize(raw['success']) : undefined,
            raw['user_id'],
            raw['date'],
            raw['expire']
        )
    }
}
export class SecureTransaction {
    constructor (
        readonly id: number,
        readonly uidFrom: number,
        readonly uidTo: number,
        readonly votes: number,
        readonly date: number
    ) {

    }

    static deserialize(raw: Object): SecureTransaction {
        return new SecureTransaction (
            raw['id'],
            raw['uid_from'],
            raw['uid_to'],
            raw['votes'],
            raw['date']
        )
    }
}
export class StatsPeriod {
    constructor (
        readonly day: string,
        readonly views: number,
        readonly visitors: number,
        readonly reach: number,
        readonly reachSubscribers: number,
        readonly subscribed: number,
        readonly unsubscribed: number,
        readonly sex: StatsSex|undefined[]|undefined,
        readonly age: StatsAge|undefined[]|undefined,
        readonly sexAge: StatsSexAge|undefined[]|undefined,
        readonly cities: StatsCity|undefined[]|undefined,
        readonly countries: StatsCountry|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): StatsPeriod {
        return new StatsPeriod (
            raw['day'],
            raw['views'],
            raw['visitors'],
            raw['reach'],
            raw['reach_subscribers'],
            raw['subscribed'],
            raw['unsubscribed'],
            raw['sex'] ? raw['sex'].map(v => v ? StatsSex.deserialize(v) : undefined) : undefined,
            raw['age'] ? raw['age'].map(v => v ? StatsAge.deserialize(v) : undefined) : undefined,
            raw['sex_age'] ? raw['sex_age'].map(v => v ? StatsSexAge.deserialize(v) : undefined) : undefined,
            raw['cities'] ? raw['cities'].map(v => v ? StatsCity.deserialize(v) : undefined) : undefined,
            raw['countries'] ? raw['countries'].map(v => v ? StatsCountry.deserialize(v) : undefined) : undefined
        )
    }
}
export class StatsAge {
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): StatsAge {
        return new StatsAge (
            raw['visitors'],
            raw['value']
        )
    }
}
export class StatsCountry {
    constructor (
        readonly visitors: number,
        readonly value: number,
        readonly code: string,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): StatsCountry {
        return new StatsCountry (
            raw['visitors'],
            raw['value'],
            raw['code'],
            raw['name']
        )
    }
}
export class StatsCity {
    constructor (
        readonly visitors: number,
        readonly value: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): StatsCity {
        return new StatsCity (
            raw['visitors'],
            raw['value'],
            raw['name']
        )
    }
}
export class StatsSex {
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): StatsSex {
        return new StatsSex (
            raw['visitors'],
            raw['value']
        )
    }
}
export class StatsSexAge {
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    static deserialize(raw: Object): StatsSexAge {
        return new StatsSexAge (
            raw['visitors'],
            raw['value']
        )
    }
}
export class StatsWallpostStat {
    constructor (
        readonly reachSubscribers: number,
        readonly reachTotal: number,
        readonly links: number,
        readonly toGroup: number,
        readonly joinGroup: number,
        readonly report: number,
        readonly hide: number,
        readonly unsubscribe: number
    ) {

    }

    static deserialize(raw: Object): StatsWallpostStat {
        return new StatsWallpostStat (
            raw['reach_subscribers'],
            raw['reach_total'],
            raw['links'],
            raw['to_group'],
            raw['join_group'],
            raw['report'],
            raw['hide'],
            raw['unsubscribe']
        )
    }
}
export class StatusStatus {
    constructor (
        readonly text: string,
        readonly audio: AudioAudioFull|undefined
    ) {

    }

    static deserialize(raw: Object): StatusStatus {
        return new StatusStatus (
            raw['text'],
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined
        )
    }
}
export class UtilsDomainResolved {
    constructor (
        readonly type: string,
        readonly objectId: number
    ) {

    }

    static deserialize(raw: Object): UtilsDomainResolved {
        return new UtilsDomainResolved (
            raw['type'],
            raw['object_id']
        )
    }
}
export class UtilsLinkChecked {
    constructor (
        readonly status: string,
        readonly link: string
    ) {

    }

    static deserialize(raw: Object): UtilsLinkChecked {
        return new UtilsLinkChecked (
            raw['status'],
            raw['link']
        )
    }
}
export class UsersUsersArray {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersUsersArray {
        return new UsersUsersArray (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class UsersUserCounters {
    constructor (
        readonly albums: number,
        readonly videos: number,
        readonly audios: number,
        readonly notes: number,
        readonly photos: number,
        readonly groups: number,
        readonly gifts: number,
        readonly friends: number,
        readonly onlineFriends: number,
        readonly userPhotos: number,
        readonly userVideos: number,
        readonly followers: number,
        readonly subscriptions: number,
        readonly pages: number
    ) {

    }

    static deserialize(raw: Object): UsersUserCounters {
        return new UsersUserCounters (
            raw['albums'],
            raw['videos'],
            raw['audios'],
            raw['notes'],
            raw['photos'],
            raw['groups'],
            raw['gifts'],
            raw['friends'],
            raw['online_friends'],
            raw['user_photos'],
            raw['user_videos'],
            raw['followers'],
            raw['subscriptions'],
            raw['pages']
        )
    }
}
export class UsersUser {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number
    ) {

    }

    static deserialize(raw: Object): UsersUser {
        return new UsersUser (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app']
        )
    }
}
export class UsersUserFullXtrType {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): UsersUserFullXtrType {
        return new UsersUserFullXtrType (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['type']
        )
    }
}
export class UsersUserXtrType {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): UsersUserXtrType {
        return new UsersUserXtrType (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['type']
        )
    }
}
export class UsersUserMin {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number
    ) {

    }

    static deserialize(raw: Object): UsersUserMin {
        return new UsersUserMin (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden']
        )
    }
}
export class UsersUserBroadcast {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly statusAudio: AudioAudioFull|undefined
    ) {

    }

    static deserialize(raw: Object): UsersUserBroadcast {
        return new UsersUserBroadcast (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined
        )
    }
}
export class UsersUserFull {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string
    ) {

    }

    static deserialize(raw: Object): UsersUserFull {
        return new UsersUserFull (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes']
        )
    }
}
export class UsersCareer {
    constructor (
        readonly groupId: number,
        readonly company: string,
        readonly countryId: number,
        readonly cityId: number,
        readonly from: number,
        readonly until: number,
        readonly position: string
    ) {

    }

    static deserialize(raw: Object): UsersCareer {
        return new UsersCareer (
            raw['group_id'],
            raw['company'],
            raw['country_id'],
            raw['city_id'],
            raw['from'],
            raw['until'],
            raw['position']
        )
    }
}
export class UsersExports {
    constructor (
        readonly twitter: number,
        readonly facebook: number,
        readonly livejournal: number
    ) {

    }

    static deserialize(raw: Object): UsersExports {
        return new UsersExports (
            raw['twitter'],
            raw['facebook'],
            raw['livejournal']
        )
    }
}
export class UsersMilitary {
    constructor (
        readonly unit: string,
        readonly unitId: number,
        readonly countryId: number,
        readonly from: number,
        readonly until: number
    ) {

    }

    static deserialize(raw: Object): UsersMilitary {
        return new UsersMilitary (
            raw['unit'],
            raw['unit_id'],
            raw['country_id'],
            raw['from'],
            raw['until']
        )
    }
}
export class UsersRelative {
    constructor (
        readonly id: number,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): UsersRelative {
        return new UsersRelative (
            raw['id'],
            raw['type']
        )
    }
}
export class UsersUserLim {
    constructor (
        readonly id: number,
        readonly photo: string,
        readonly name: string,
        readonly nameGen: string
    ) {

    }

    static deserialize(raw: Object): UsersUserLim {
        return new UsersUserLim (
            raw['id'],
            raw['photo'],
            raw['name'],
            raw['name_gen']
        )
    }
}
export class UsersLastSeen {
    constructor (
        readonly time: number,
        readonly platform: number
    ) {

    }

    static deserialize(raw: Object): UsersLastSeen {
        return new UsersLastSeen (
            raw['time'],
            raw['platform']
        )
    }
}
export class UsersUniversity {
    constructor (
        readonly id: number,
        readonly country: number,
        readonly city: number,
        readonly name: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly chair: number,
        readonly chairName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string
    ) {

    }

    static deserialize(raw: Object): UsersUniversity {
        return new UsersUniversity (
            raw['id'],
            raw['country'],
            raw['city'],
            raw['name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['chair'],
            raw['chair_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status']
        )
    }
}
export class UsersSchool {
    constructor (
        readonly id: string,
        readonly country: number,
        readonly city: number,
        readonly name: string,
        readonly yearFrom: number,
        readonly yearTo: number,
        readonly yearGraduated: number,
        readonly schoolClass: string,
        readonly type: number,
        readonly typeStr: string
    ) {

    }

    static deserialize(raw: Object): UsersSchool {
        return new UsersSchool (
            raw['id'],
            raw['country'],
            raw['city'],
            raw['name'],
            raw['year_from'],
            raw['year_to'],
            raw['year_graduated'],
            raw['schoolClass'],
            raw['type'],
            raw['type_str']
        )
    }
}
export class UsersCropPhoto {
    constructor (
        readonly photo: PhotosPhoto|undefined,
        readonly crop: UsersCropPhotoCrop|undefined,
        readonly rect: UsersCropPhotoRect|undefined
    ) {

    }

    static deserialize(raw: Object): UsersCropPhoto {
        return new UsersCropPhoto (
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['crop'] ? UsersCropPhotoCrop.deserialize(raw['crop']) : undefined,
            raw['rect'] ? UsersCropPhotoRect.deserialize(raw['rect']) : undefined
        )
    }
}
export class UsersCropPhotoCrop {
    constructor (
        readonly x: number,
        readonly y: number,
        readonly x2: number,
        readonly y2: number
    ) {

    }

    static deserialize(raw: Object): UsersCropPhotoCrop {
        return new UsersCropPhotoCrop (
            raw['x'],
            raw['y'],
            raw['x2'],
            raw['y2']
        )
    }
}
export class UsersCropPhotoRect {
    constructor (
        readonly x: number,
        readonly y: number,
        readonly x2: number,
        readonly y2: number
    ) {

    }

    static deserialize(raw: Object): UsersCropPhotoRect {
        return new UsersCropPhotoRect (
            raw['x'],
            raw['y'],
            raw['x2'],
            raw['y2']
        )
    }
}
export class UsersOccupation {
    constructor (
        readonly type: string,
        readonly id: number,
        readonly name: string
    ) {

    }

    static deserialize(raw: Object): UsersOccupation {
        return new UsersOccupation (
            raw['type'],
            raw['id'],
            raw['name']
        )
    }
}
export class UsersPersonal {
    constructor (
        readonly political: number,
        readonly langs: string[]|undefined,
        readonly religion: string,
        readonly inspiredBy: string,
        readonly peopleMain: number,
        readonly lifeMain: number,
        readonly smoking: number,
        readonly alcohol: number
    ) {

    }

    static deserialize(raw: Object): UsersPersonal {
        return new UsersPersonal (
            raw['political'],
            raw['langs'] ? raw['langs'].map(v => v) : undefined,
            raw['religion'],
            raw['inspired_by'],
            raw['people_main'],
            raw['life_main'],
            raw['smoking'],
            raw['alcohol']
        )
    }
}
export class UsersUserXtrCounters {
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly sex: BaseSex|undefined,
        readonly screenName: string,
        readonly photo50: string,
        readonly photo100: string,
        readonly online: boolean,
        readonly onlineMobile: boolean,
        readonly onlineApp: number,
        readonly nickname: string,
        readonly maidenName: string,
        readonly domain: string,
        readonly bdate: string,
        readonly city: BaseObject|undefined,
        readonly country: BaseCountry|undefined,
        readonly timezone: number,
        readonly photo200: string,
        readonly photoMax: string,
        readonly photo200Orig: string,
        readonly photo400Orig: string,
        readonly photoMaxOrig: string,
        readonly photoId: string,
        readonly hasPhoto: number,
        readonly hasMobile: boolean,
        readonly isFriend: boolean,
        readonly friendStatus: number,
        readonly wallComments: boolean,
        readonly canPost: boolean,
        readonly canSeeAllPosts: boolean,
        readonly canSeeAudio: boolean,
        readonly canWritePrivateMessage: boolean,
        readonly canSendFriendRequest: boolean,
        readonly mobilePhone: string,
        readonly homePhone: string,
        readonly skype: string,
        readonly facebook: string,
        readonly facebookName: string,
        readonly twitter: string,
        readonly livejournal: string,
        readonly instagram: string,
        readonly site: string,
        readonly statusAudio: AudioAudioFull|undefined,
        readonly status: string,
        readonly activity: string,
        readonly lastSeen: UsersLastSeen|undefined,
        readonly exports: UsersExports|undefined,
        readonly cropPhoto: UsersCropPhoto|undefined,
        readonly verified: boolean,
        readonly followersCount: number,
        readonly blacklisted: boolean,
        readonly blacklistedByMe: boolean,
        readonly isFavorite: boolean,
        readonly isHiddenFromFeed: boolean,
        readonly commonCount: number,
        readonly occupation: UsersOccupation|undefined,
        readonly career: UsersCareer|undefined[]|undefined,
        readonly military: UsersMilitary|undefined[]|undefined,
        readonly university: number,
        readonly universityName: string,
        readonly faculty: number,
        readonly facultyName: string,
        readonly graduation: number,
        readonly educationForm: string,
        readonly educationStatus: string,
        readonly homeTown: string,
        readonly relation: number,
        readonly relationPartner: UsersUserMin|undefined,
        readonly personal: UsersPersonal|undefined,
        readonly interests: string,
        readonly music: string,
        readonly activities: string,
        readonly movies: string,
        readonly tv: string,
        readonly books: string,
        readonly games: string,
        readonly universities: UsersUniversity|undefined[]|undefined,
        readonly schools: UsersSchool|undefined[]|undefined,
        readonly about: string,
        readonly relatives: UsersRelative|undefined[]|undefined,
        readonly quotes: string,
        readonly counters: UsersUserCounters|undefined
    ) {

    }

    static deserialize(raw: Object): UsersUserXtrCounters {
        return new UsersUserXtrCounters (
            raw['id'],
            raw['first_name'],
            raw['last_name'],
            raw['deactivated'],
            raw['hidden'],
            raw['sex'] ? BaseSex.deserialize(raw['sex']) : undefined,
            raw['screen_name'],
            raw['photo_50'],
            raw['photo_100'],
            !!raw['online'],
            !!raw['online_mobile'],
            raw['online_app'],
            raw['nickname'],
            raw['maiden_name'],
            raw['domain'],
            raw['bdate'],
            raw['city'] ? BaseObject.deserialize(raw['city']) : undefined,
            raw['country'] ? BaseCountry.deserialize(raw['country']) : undefined,
            raw['timezone'],
            raw['photo_200'],
            raw['photo_max'],
            raw['photo_200_orig'],
            raw['photo_400_orig'],
            raw['photo_max_orig'],
            raw['photo_id'],
            raw['has_photo'],
            !!raw['has_mobile'],
            !!raw['is_friend'],
            raw['friend_status'],
            !!raw['wall_comments'],
            !!raw['can_post'],
            !!raw['can_see_all_posts'],
            !!raw['can_see_audio'],
            !!raw['can_write_private_message'],
            !!raw['can_send_friend_request'],
            raw['mobile_phone'],
            raw['home_phone'],
            raw['skype'],
            raw['facebook'],
            raw['facebook_name'],
            raw['twitter'],
            raw['livejournal'],
            raw['instagram'],
            raw['site'],
            raw['status_audio'] ? AudioAudioFull.deserialize(raw['status_audio']) : undefined,
            raw['status'],
            raw['activity'],
            raw['last_seen'] ? UsersLastSeen.deserialize(raw['last_seen']) : undefined,
            raw['exports'] ? UsersExports.deserialize(raw['exports']) : undefined,
            raw['crop_photo'] ? UsersCropPhoto.deserialize(raw['crop_photo']) : undefined,
            !!raw['verified'],
            raw['followers_count'],
            !!raw['blacklisted'],
            !!raw['blacklisted_by_me'],
            !!raw['is_favorite'],
            !!raw['is_hidden_from_feed'],
            raw['common_count'],
            raw['occupation'] ? UsersOccupation.deserialize(raw['occupation']) : undefined,
            raw['career'] ? raw['career'].map(v => v ? UsersCareer.deserialize(v) : undefined) : undefined,
            raw['military'] ? raw['military'].map(v => v ? UsersMilitary.deserialize(v) : undefined) : undefined,
            raw['university'],
            raw['university_name'],
            raw['faculty'],
            raw['faculty_name'],
            raw['graduation'],
            raw['education_form'],
            raw['education_status'],
            raw['home_town'],
            raw['relation'],
            raw['relation_partner'] ? UsersUserMin.deserialize(raw['relation_partner']) : undefined,
            raw['personal'] ? UsersPersonal.deserialize(raw['personal']) : undefined,
            raw['interests'],
            raw['music'],
            raw['activities'],
            raw['movies'],
            raw['tv'],
            raw['books'],
            raw['games'],
            raw['universities'] ? raw['universities'].map(v => v ? UsersUniversity.deserialize(v) : undefined) : undefined,
            raw['schools'] ? raw['schools'].map(v => v ? UsersSchool.deserialize(v) : undefined) : undefined,
            raw['about'],
            raw['relatives'] ? raw['relatives'].map(v => v ? UsersRelative.deserialize(v) : undefined) : undefined,
            raw['quotes'],
            raw['counters'] ? UsersUserCounters.deserialize(raw['counters']) : undefined
        )
    }
}
export class VideoVideoAlbum {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string
    ) {

    }

    static deserialize(raw: Object): VideoVideoAlbum {
        return new VideoVideoAlbum (
            raw['id'],
            raw['owner_id'],
            raw['title']
        )
    }
}
export class VideoVideoAlbumFull {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly count: number,
        readonly photo160: string,
        readonly photo320: string,
        readonly updatedTime: number,
        readonly isSystem: number
    ) {

    }

    static deserialize(raw: Object): VideoVideoAlbumFull {
        return new VideoVideoAlbumFull (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['count'],
            raw['photo_160'],
            raw['photo_320'],
            raw['updated_time'],
            raw['is_system']
        )
    }
}
export class VideoCatBlock {
    constructor (
        readonly items: VideoCatElement|undefined[]|undefined,
        readonly next: string,
        readonly name: string,
        readonly id: number,
        readonly view: string,
        readonly canHide: boolean,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): VideoCatBlock {
        return new VideoCatBlock (
            raw['items'] ? raw['items'].map(v => v ? VideoCatElement.deserialize(v) : undefined) : undefined,
            raw['next'],
            raw['name'],
            raw['id'],
            raw['view'],
            !!raw['can_hide'],
            raw['type']
        )
    }
}
export class VideoCatElement {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly type: string,
        readonly description: string,
        readonly duration: number,
        readonly photo130: string,
        readonly photo160: string,
        readonly photo320: string,
        readonly photo640: string,
        readonly photo800: string,
        readonly date: number,
        readonly views: number,
        readonly comments: number,
        readonly canAdd: number,
        readonly canEdit: number,
        readonly isPrivate: number,
        readonly count: number,
        readonly updatedTime: number
    ) {

    }

    static deserialize(raw: Object): VideoCatElement {
        return new VideoCatElement (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['type'],
            raw['description'],
            raw['duration'],
            raw['photo_130'],
            raw['photo_160'],
            raw['photo_320'],
            raw['photo_640'],
            raw['photo_800'],
            raw['date'],
            raw['views'],
            raw['comments'],
            raw['can_add'],
            raw['can_edit'],
            raw['is_private'],
            raw['count'],
            raw['updated_time']
        )
    }
}
export class VideoSaveResult {
    constructor (
        readonly uploadUrl: string,
        readonly videoId: number,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string
    ) {

    }

    static deserialize(raw: Object): VideoSaveResult {
        return new VideoSaveResult (
            raw['upload_url'],
            raw['video_id'],
            raw['owner_id'],
            raw['title'],
            raw['description']
        )
    }
}
export class VideoVideoTag {
    constructor (
        readonly userId: number,
        readonly id: number,
        readonly placerId: number,
        readonly taggedName: string,
        readonly date: number,
        readonly viewed: boolean
    ) {

    }

    static deserialize(raw: Object): VideoVideoTag {
        return new VideoVideoTag (
            raw['user_id'],
            raw['id'],
            raw['placer_id'],
            raw['tagged_name'],
            raw['date'],
            !!raw['viewed']
        )
    }
}
export class VideoUploadResponse {
    constructor (
        readonly size: number,
        readonly videoId: number
    ) {

    }

    static deserialize(raw: Object): VideoUploadResponse {
        return new VideoUploadResponse (
            raw['size'],
            raw['video_id']
        )
    }
}
export class VideoVideo {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly duration: number,
        readonly description: string,
        readonly date: number,
        readonly views: number,
        readonly comments: number,
        readonly photo130: string,
        readonly photo320: string,
        readonly photo800: string,
        readonly accessKey: string,
        readonly addingDate: number,
        readonly player: string,
        readonly canEdit: boolean,
        readonly canAdd: boolean,
        readonly processing: BasePropertyExists|undefined,
        readonly live: BasePropertyExists|undefined,
        readonly files: VideoVideoFiles|undefined
    ) {

    }

    static deserialize(raw: Object): VideoVideo {
        return new VideoVideo (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['duration'],
            raw['description'],
            raw['date'],
            raw['views'],
            raw['comments'],
            raw['photo_130'],
            raw['photo_320'],
            raw['photo_800'],
            raw['access_key'],
            raw['adding_date'],
            raw['player'],
            !!raw['can_edit'],
            !!raw['can_add'],
            raw['processing'] ? BasePropertyExists.deserialize(raw['processing']) : undefined,
            raw['live'] ? BasePropertyExists.deserialize(raw['live']) : undefined,
            raw['files'] ? VideoVideoFiles.deserialize(raw['files']) : undefined
        )
    }
}
export class VideoVideoFiles {
    constructor (
        readonly mp240: string,
        readonly mp360: string,
        readonly mp480: string,
        readonly mp720: string,
        readonly mp1080: string,
        readonly external: string
    ) {

    }

    static deserialize(raw: Object): VideoVideoFiles {
        return new VideoVideoFiles (
            raw['mp_240'],
            raw['mp_360'],
            raw['mp_480'],
            raw['mp_720'],
            raw['mp_1080'],
            raw['external']
        )
    }
}
export class VideoVideoTagInfo {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly duration: number,
        readonly description: string,
        readonly date: number,
        readonly views: number,
        readonly comments: number,
        readonly photo130: string,
        readonly photo320: string,
        readonly photo800: string,
        readonly accessKey: string,
        readonly addingDate: number,
        readonly player: string,
        readonly canEdit: boolean,
        readonly canAdd: boolean,
        readonly processing: BasePropertyExists|undefined,
        readonly live: BasePropertyExists|undefined,
        readonly files: VideoVideoFiles|undefined,
        readonly placerId: number,
        readonly tagCreated: number,
        readonly tagId: number
    ) {

    }

    static deserialize(raw: Object): VideoVideoTagInfo {
        return new VideoVideoTagInfo (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['duration'],
            raw['description'],
            raw['date'],
            raw['views'],
            raw['comments'],
            raw['photo_130'],
            raw['photo_320'],
            raw['photo_800'],
            raw['access_key'],
            raw['adding_date'],
            raw['player'],
            !!raw['can_edit'],
            !!raw['can_add'],
            raw['processing'] ? BasePropertyExists.deserialize(raw['processing']) : undefined,
            raw['live'] ? BasePropertyExists.deserialize(raw['live']) : undefined,
            raw['files'] ? VideoVideoFiles.deserialize(raw['files']) : undefined,
            raw['placer_id'],
            raw['tag_created'],
            raw['tag_id']
        )
    }
}
export class VideoVideoFull {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly duration: number,
        readonly description: string,
        readonly date: number,
        readonly views: number,
        readonly comments: number,
        readonly photo130: string,
        readonly photo320: string,
        readonly photo800: string,
        readonly accessKey: string,
        readonly addingDate: number,
        readonly player: string,
        readonly canEdit: boolean,
        readonly canAdd: boolean,
        readonly processing: BasePropertyExists|undefined,
        readonly live: BasePropertyExists|undefined,
        readonly files: VideoVideoFiles|undefined,
        readonly privacyView: string[]|undefined,
        readonly privacyComment: string[]|undefined,
        readonly canComment: boolean,
        readonly canRepost: boolean,
        readonly likes: BaseLikes|undefined,
        readonly repeat: boolean
    ) {

    }

    static deserialize(raw: Object): VideoVideoFull {
        return new VideoVideoFull (
            raw['id'],
            raw['owner_id'],
            raw['title'],
            raw['duration'],
            raw['description'],
            raw['date'],
            raw['views'],
            raw['comments'],
            raw['photo_130'],
            raw['photo_320'],
            raw['photo_800'],
            raw['access_key'],
            raw['adding_date'],
            raw['player'],
            !!raw['can_edit'],
            !!raw['can_add'],
            raw['processing'] ? BasePropertyExists.deserialize(raw['processing']) : undefined,
            raw['live'] ? BasePropertyExists.deserialize(raw['live']) : undefined,
            raw['files'] ? VideoVideoFiles.deserialize(raw['files']) : undefined,
            raw['privacy_view'] ? raw['privacy_view'].map(v => v) : undefined,
            raw['privacy_comment'] ? raw['privacy_comment'].map(v => v) : undefined,
            !!raw['can_comment'],
            !!raw['can_repost'],
            raw['likes'] ? BaseLikes.deserialize(raw['likes']) : undefined,
            !!raw['repeat']
        )
    }
}
export class WallAppPost {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly photo130: string,
        readonly photo604: string
    ) {

    }

    static deserialize(raw: Object): WallAppPost {
        return new WallAppPost (
            raw['id'],
            raw['name'],
            raw['photo_130'],
            raw['photo_604']
        )
    }
}
export class WallAttachedNote {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly comments: number,
        readonly readComments: number,
        readonly date: number,
        readonly title: string,
        readonly viewUrl: string
    ) {

    }

    static deserialize(raw: Object): WallAttachedNote {
        return new WallAttachedNote (
            raw['id'],
            raw['owner_id'],
            raw['comments'],
            raw['read_comments'],
            raw['date'],
            raw['title'],
            raw['view_url']
        )
    }
}
export class WallCommentAttachment {
    constructor (
        readonly photo: PhotosPhoto|undefined,
        readonly audio: AudioAudioFull|undefined,
        readonly video: VideoVideo|undefined,
        readonly doc: DocsDoc|undefined,
        readonly link: BaseLink|undefined,
        readonly note: WallAttachedNote|undefined,
        readonly page: PagesWikipageFull|undefined,
        readonly marketMarketAlbum: MarketMarketAlbum|undefined,
        readonly market: MarketMarketItem|undefined,
        readonly sticker: BaseSticker|undefined,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): WallCommentAttachment {
        return new WallCommentAttachment (
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined,
            raw['video'] ? VideoVideo.deserialize(raw['video']) : undefined,
            raw['doc'] ? DocsDoc.deserialize(raw['doc']) : undefined,
            raw['link'] ? BaseLink.deserialize(raw['link']) : undefined,
            raw['note'] ? WallAttachedNote.deserialize(raw['note']) : undefined,
            raw['page'] ? PagesWikipageFull.deserialize(raw['page']) : undefined,
            raw['market_market_album'] ? MarketMarketAlbum.deserialize(raw['market_market_album']) : undefined,
            raw['market'] ? MarketMarketItem.deserialize(raw['market']) : undefined,
            raw['sticker'] ? BaseSticker.deserialize(raw['sticker']) : undefined,
            raw['type']
        )
    }
}
export class WallGraffiti {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly photo200: string,
        readonly photo586: string
    ) {

    }

    static deserialize(raw: Object): WallGraffiti {
        return new WallGraffiti (
            raw['id'],
            raw['owner_id'],
            raw['photo_200'],
            raw['photo_586']
        )
    }
}
export class WallPostSource {
    constructor (
        readonly type: string,
        readonly platform: string,
        readonly data: string,
        readonly url: string
    ) {

    }

    static deserialize(raw: Object): WallPostSource {
        return new WallPostSource (
            raw['type'],
            raw['platform'],
            raw['data'],
            raw['url']
        )
    }
}
export class WallPostedPhoto {
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly photo130: string,
        readonly photo604: string
    ) {

    }

    static deserialize(raw: Object): WallPostedPhoto {
        return new WallPostedPhoto (
            raw['id'],
            raw['owner_id'],
            raw['photo_130'],
            raw['photo_604']
        )
    }
}
export class WallPostType {
    constructor (
    ) {

    }

    static deserialize(raw: Object): WallPostType {
        return new WallPostType (
        )
    }
}
export class WallWallComment {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly date: number,
        readonly text: string,
        readonly likes: BaseLikesInfo|undefined,
        readonly replyToUser: number,
        readonly replyToComment: number,
        readonly attachments: WallCommentAttachment|undefined[]|undefined,
        readonly realOffset: number
    ) {

    }

    static deserialize(raw: Object): WallWallComment {
        return new WallWallComment (
            raw['id'],
            raw['from_id'],
            raw['date'],
            raw['text'],
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reply_to_user'],
            raw['reply_to_comment'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallCommentAttachment.deserialize(v) : undefined) : undefined,
            raw['real_offset']
        )
    }
}
export class WallWallpost {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly ownerId: number,
        readonly date: number,
        readonly postType: WallPostType|undefined,
        readonly text: string,
        readonly signerId: number,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined,
        readonly postSource: WallPostSource|undefined
    ) {

    }

    static deserialize(raw: Object): WallWallpost {
        return new WallWallpost (
            raw['id'],
            raw['from_id'],
            raw['owner_id'],
            raw['date'],
            raw['post_type'] ? WallPostType.deserialize(raw['post_type']) : undefined,
            raw['text'],
            raw['signer_id'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined
        )
    }
}
export class WallWallpostAttached {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly toId: number,
        readonly date: number,
        readonly postType: WallPostType|undefined,
        readonly text: string,
        readonly canDelete: number,
        readonly signerId: number,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined,
        readonly postSource: WallPostSource|undefined,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined,
        readonly reposts: BaseRepostsInfo|undefined,
        readonly copyOwnerId: number,
        readonly copyPostId: number,
        readonly copyText: string
    ) {

    }

    static deserialize(raw: Object): WallWallpostAttached {
        return new WallWallpostAttached (
            raw['id'],
            raw['from_id'],
            raw['to_id'],
            raw['date'],
            raw['post_type'] ? WallPostType.deserialize(raw['post_type']) : undefined,
            raw['text'],
            raw['can_delete'],
            raw['signer_id'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined,
            raw['comments'] ? BaseCommentsInfo.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseRepostsInfo.deserialize(raw['reposts']) : undefined,
            raw['copy_owner_id'],
            raw['copy_post_id'],
            raw['copy_text']
        )
    }
}
export class WallWallpostAttachment {
    constructor (
        readonly photo: PhotosPhoto|undefined,
        readonly postedPhoto: WallPostedPhoto|undefined,
        readonly audio: AudioAudioFull|undefined,
        readonly video: VideoVideo|undefined,
        readonly doc: DocsDoc|undefined,
        readonly link: BaseLink|undefined,
        readonly graffiti: WallGraffiti|undefined,
        readonly note: WallAttachedNote|undefined,
        readonly app: WallAppPost|undefined,
        readonly poll: PollsPoll|undefined,
        readonly page: PagesWikipageFull|undefined,
        readonly album: PhotosPhotoAlbum|undefined,
        readonly photosList: string[]|undefined,
        readonly marketMarketAlbum: MarketMarketAlbum|undefined,
        readonly market: MarketMarketItem|undefined,
        readonly type: string
    ) {

    }

    static deserialize(raw: Object): WallWallpostAttachment {
        return new WallWallpostAttachment (
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['posted_photo'] ? WallPostedPhoto.deserialize(raw['posted_photo']) : undefined,
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined,
            raw['video'] ? VideoVideo.deserialize(raw['video']) : undefined,
            raw['doc'] ? DocsDoc.deserialize(raw['doc']) : undefined,
            raw['link'] ? BaseLink.deserialize(raw['link']) : undefined,
            raw['graffiti'] ? WallGraffiti.deserialize(raw['graffiti']) : undefined,
            raw['note'] ? WallAttachedNote.deserialize(raw['note']) : undefined,
            raw['app'] ? WallAppPost.deserialize(raw['app']) : undefined,
            raw['poll'] ? PollsPoll.deserialize(raw['poll']) : undefined,
            raw['page'] ? PagesWikipageFull.deserialize(raw['page']) : undefined,
            raw['album'] ? PhotosPhotoAlbum.deserialize(raw['album']) : undefined,
            raw['photos_list'] ? raw['photos_list'].map(v => v) : undefined,
            raw['market_market_album'] ? MarketMarketAlbum.deserialize(raw['market_market_album']) : undefined,
            raw['market'] ? MarketMarketItem.deserialize(raw['market']) : undefined,
            raw['type']
        )
    }
}
export class WallWallpostToId {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly toId: number,
        readonly date: number,
        readonly postId: number,
        readonly postType: WallPostType|undefined,
        readonly text: string,
        readonly signerId: number,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined,
        readonly postSource: WallPostSource|undefined,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined,
        readonly reposts: BaseRepostsInfo|undefined,
        readonly copyOwnerId: number,
        readonly copyPostId: number
    ) {

    }

    static deserialize(raw: Object): WallWallpostToId {
        return new WallWallpostToId (
            raw['id'],
            raw['from_id'],
            raw['to_id'],
            raw['date'],
            raw['post_id'],
            raw['post_type'] ? WallPostType.deserialize(raw['post_type']) : undefined,
            raw['text'],
            raw['signer_id'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined,
            raw['comments'] ? BaseCommentsInfo.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseRepostsInfo.deserialize(raw['reposts']) : undefined,
            raw['copy_owner_id'],
            raw['copy_post_id']
        )
    }
}
export class WallWallpostFull {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly ownerId: number,
        readonly date: number,
        readonly postType: WallPostType|undefined,
        readonly text: string,
        readonly signerId: number,
        readonly attachments: WallWallpostAttachment|undefined[]|undefined,
        readonly geo: BaseGeo|undefined,
        readonly postSource: WallPostSource|undefined,
        readonly copyHistory: WallWallpost|undefined[]|undefined,
        readonly canEdit: number,
        readonly createdBy: number,
        readonly canDelete: number,
        readonly canPin: number,
        readonly isPinned: number,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined,
        readonly reposts: BaseRepostsInfo|undefined
    ) {

    }

    static deserialize(raw: Object): WallWallpostFull {
        return new WallWallpostFull (
            raw['id'],
            raw['from_id'],
            raw['owner_id'],
            raw['date'],
            raw['post_type'] ? WallPostType.deserialize(raw['post_type']) : undefined,
            raw['text'],
            raw['signer_id'],
            raw['attachments'] ? raw['attachments'].map(v => v ? WallWallpostAttachment.deserialize(v) : undefined) : undefined,
            raw['geo'] ? BaseGeo.deserialize(raw['geo']) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined,
            raw['copy_history'] ? raw['copy_history'].map(v => v ? WallWallpost.deserialize(v) : undefined) : undefined,
            raw['can_edit'],
            raw['created_by'],
            raw['can_delete'],
            raw['can_pin'],
            raw['is_pinned'],
            raw['comments'] ? BaseCommentsInfo.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseRepostsInfo.deserialize(raw['reposts']) : undefined
        )
    }
}
export class WidgetsWidgetComment {
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly toId: number,
        readonly date: number,
        readonly user: UsersUserFull|undefined,
        readonly postType: number,
        readonly text: string,
        readonly canDelete: number,
        readonly media: WidgetsCommentMedia|undefined,
        readonly attachments: WallCommentAttachment|undefined[]|undefined,
        readonly postSource: WallPostSource|undefined,
        readonly comments: WidgetsCommentReplies|undefined,
        readonly likes: BaseLikesInfo|undefined,
        readonly reposts: BaseRepostsInfo|undefined
    ) {

    }

    static deserialize(raw: Object): WidgetsWidgetComment {
        return new WidgetsWidgetComment (
            raw['id'],
            raw['from_id'],
            raw['to_id'],
            raw['date'],
            raw['user'] ? UsersUserFull.deserialize(raw['user']) : undefined,
            raw['post_type'],
            raw['text'],
            raw['can_delete'],
            raw['media'] ? WidgetsCommentMedia.deserialize(raw['media']) : undefined,
            raw['attachments'] ? raw['attachments'].map(v => v ? WallCommentAttachment.deserialize(v) : undefined) : undefined,
            raw['post_source'] ? WallPostSource.deserialize(raw['post_source']) : undefined,
            raw['comments'] ? WidgetsCommentReplies.deserialize(raw['comments']) : undefined,
            raw['likes'] ? BaseLikesInfo.deserialize(raw['likes']) : undefined,
            raw['reposts'] ? BaseRepostsInfo.deserialize(raw['reposts']) : undefined
        )
    }
}
export class WidgetsCommentMedia {
    constructor (
        readonly type: string,
        readonly ownerId: number,
        readonly itemId: number,
        readonly thumbSrc: string
    ) {

    }

    static deserialize(raw: Object): WidgetsCommentMedia {
        return new WidgetsCommentMedia (
            raw['type'],
            raw['owner_id'],
            raw['item_id'],
            raw['thumb_src']
        )
    }
}
export class WidgetsCommentReplies {
    constructor (
        readonly count: number,
        readonly canPost: number,
        readonly replies: WidgetsCommentRepliesItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WidgetsCommentReplies {
        return new WidgetsCommentReplies (
            raw['count'],
            raw['can_post'],
            raw['replies'] ? raw['replies'].map(v => v ? WidgetsCommentRepliesItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class WidgetsCommentRepliesItem {
    constructor (
        readonly cid: number,
        readonly uid: number,
        readonly date: number,
        readonly text: string,
        readonly likes: WidgetsWidgetLikes|undefined,
        readonly user: UsersUserFull|undefined
    ) {

    }

    static deserialize(raw: Object): WidgetsCommentRepliesItem {
        return new WidgetsCommentRepliesItem (
            raw['cid'],
            raw['uid'],
            raw['date'],
            raw['text'],
            raw['likes'] ? WidgetsWidgetLikes.deserialize(raw['likes']) : undefined,
            raw['user'] ? UsersUserFull.deserialize(raw['user']) : undefined
        )
    }
}
export class WidgetsWidgetLikes {
    constructor (
        readonly count: number
    ) {

    }

    static deserialize(raw: Object): WidgetsWidgetLikes {
        return new WidgetsWidgetLikes (
            raw['count']
        )
    }
}
export class WidgetsWidgetPage {
    constructor (
        readonly id: number,
        readonly title: string,
        readonly description: string,
        readonly photo: string,
        readonly url: string,
        readonly likes: BaseObjectCount|undefined,
        readonly comments: BaseObjectCount|undefined,
        readonly date: number,
        readonly pageId: string
    ) {

    }

    static deserialize(raw: Object): WidgetsWidgetPage {
        return new WidgetsWidgetPage (
            raw['id'],
            raw['title'],
            raw['description'],
            raw['photo'],
            raw['url'],
            raw['likes'] ? BaseObjectCount.deserialize(raw['likes']) : undefined,
            raw['comments'] ? BaseObjectCount.deserialize(raw['comments']) : undefined,
            raw['date'],
            raw['page_id']
        )
    }
}

