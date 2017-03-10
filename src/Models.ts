export class AccountAccountCounters {
    /**
     * @class
     * @property {number} friends New friends requests number
     * @property {number} messages New messages number
     * @property {number} photos New photo tags number
     * @property {number} videos New video tags number
     * @property {number} gifts New gifts number
     * @property {number} events New events number
     * @property {number} groups New groups number
     * @property {number} notifications New notifications number
     * @property {number} appRequests New app requests number
     * @property {number} friendsSuggestions New friends suggestions number
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountAccountCounters}
     */
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
    /**
     * @class
     * @property {AccountUserXtrContact|undefined[]|undefined} found
     * @property {AccountOtherContact|undefined[]|undefined} other
     */
    constructor (
        readonly found: AccountUserXtrContact|undefined[]|undefined,
        readonly other: AccountOtherContact|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountLookupResult}
     */
    static deserialize(raw: Object): AccountLookupResult {
        return new AccountLookupResult (
            raw['found'] ? raw['found'].map(v => v ? AccountUserXtrContact.deserialize(v) : undefined) : undefined,
            raw['other'] ? raw['other'].map(v => v ? AccountOtherContact.deserialize(v) : undefined) : undefined
        )
    }
}

export class AccountNameRequest {
    /**
     * @class
     * @property {number} id Request ID needed to cancel the request
     * @property {string} status Request status
     * @property {string} firstName First name in request
     * @property {string} lastName Last name in request
     */
    constructor (
        readonly id: number,
        readonly status: string,
        readonly firstName: string,
        readonly lastName: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountNameRequest}
     */
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
    /**
     * @class
     * @property {number} id Offer ID
     * @property {string} title Offer title
     * @property {string} instruction Instruction how to process the offer
     * @property {string} instructionHtml Instruction how to process the offer (HTML format)
     * @property {string} shortDescription Offer short description
     * @property {string} description Offer description
     * @property {string} img URL of the preview image
     * @property {string} tag Offer tag
     * @property {number} price Offer price
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountOffer}
     */
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
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountOnoffOptions}
     */
    static deserialize(raw: Object): AccountOnoffOptions {
        return new AccountOnoffOptions (
        )
    }
}

export class AccountOtherContact {
    /**
     * @class
     * @property {string} contact Contact
     * @property {number} commonCount Mutual friends count
     */
    constructor (
        readonly contact: string,
        readonly commonCount: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountOtherContact}
     */
    static deserialize(raw: Object): AccountOtherContact {
        return new AccountOtherContact (
            raw['contact'],
            raw['common_count']
        )
    }
}

export class AccountPushConversations {
    /**
     * @class
     * @property {number} count Items count
     * @property {AccountPushConversationsItem|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: AccountPushConversationsItem|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountPushConversations}
     */
    static deserialize(raw: Object): AccountPushConversations {
        return new AccountPushConversations (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? AccountPushConversationsItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class AccountPushConversationsItem {
    /**
     * @class
     * @property {number} peerId Peer ID
     * @property {boolean} sound Information whether the sound are enabled
     * @property {number} disabledUntil Time until that notifications are disabled in seconds
     */
    constructor (
        readonly peerId: number,
        readonly sound: boolean,
        readonly disabledUntil: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountPushConversationsItem}
     */
    static deserialize(raw: Object): AccountPushConversationsItem {
        return new AccountPushConversationsItem (
            raw['peer_id'],
            !!raw['sound'],
            raw['disabled_until']
        )
    }
}

export class AccountPushParams {
    /**
     * @class
     * @property {string[]|undefined} msg
     * @property {string[]|undefined} chat
     * @property {AccountOnoffOptions|undefined[]|undefined} friend
     * @property {AccountOnoffOptions|undefined[]|undefined} friendFound
     * @property {AccountOnoffOptions|undefined[]|undefined} friendAccepted
     * @property {AccountOnoffOptions|undefined[]|undefined} reply
     * @property {string[]|undefined} comment
     * @property {string[]|undefined} mention
     * @property {string[]|undefined} like
     * @property {string[]|undefined} repost
     * @property {AccountOnoffOptions|undefined[]|undefined} wallPost
     * @property {AccountOnoffOptions|undefined[]|undefined} wallPublish
     * @property {AccountOnoffOptions|undefined[]|undefined} groupInvite
     * @property {AccountOnoffOptions|undefined[]|undefined} groupAccepted
     * @property {AccountOnoffOptions|undefined[]|undefined} eventSoon
     * @property {string[]|undefined} photosTag
     * @property {AccountOnoffOptions|undefined[]|undefined} appRequest
     * @property {AccountOnoffOptions|undefined[]|undefined} sdkOpen
     * @property {AccountOnoffOptions|undefined[]|undefined} newPost
     * @property {AccountOnoffOptions|undefined[]|undefined} birthday
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountPushParams}
     */
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
    /**
     * @class
     * @property {boolean} disabled Information whether notifications are disabled
     * @property {number} disabledUntil Time until that notifications are disabled in Unixtime
     * @property {AccountPushConversations|undefined} conversations
     * @property {AccountPushParams|undefined} settings
     */
    constructor (
        readonly disabled: boolean,
        readonly disabledUntil: number,
        readonly conversations: AccountPushConversations|undefined,
        readonly settings: AccountPushParams|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountPushSettings}
     */
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
    /**
     * @class
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} maidenName User maiden name
     * @property {string} screenName Domain name of the user's page
     * @property {BaseSex|undefined} sex User sex
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {number} relationPending Information whether relation status is pending
     * @property {UsersUserMin|undefined[]|undefined} relationRequests
     * @property {string} bdate User's date of birth
     * @property {number} bdateVisibility Information whether user's birthdate are hidden
     * @property {string} homeTown User's hometown
     * @property {BaseCountry|undefined} country
     * @property {BaseObject|undefined} city
     * @property {string} status User status
     * @property {string} phone User phone number with some hidden digits
     * @property {AccountNameRequest|undefined} nameRequest
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountUserSettings}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {string} contact
     * @property {number} requestSent
     * @property {number} sortNum
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountUserXtrContact}
     */
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
    /**
     * @class
     * @property {string} country Country code
     * @property {boolean} httpsRequired Information whether HTTPS-only is enabled
     * @property {boolean} ownPostsDefault Information whether only owners posts should be shown
     * @property {boolean} noWallReplies Information whether wall comments should be hidden
     * @property {boolean} intro Information whether user has been processed intro
     * @property {number} lang Language ID
     * @property {boolean} twoFaRequired Two factor authentication is enabled
     */
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

    /**
     * @param {Object} raw
     * @returns {AccountInfo}
     */
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
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsAccessRole}
     */
    static deserialize(raw: Object): AdsAccessRole {
        return new AdsAccessRole (
        )
    }
}

export class AdsAccesses {
    /**
     * @class
     * @property {string} clientId Client ID
     * @property {AdsAccessRole|undefined} role
     */
    constructor (
        readonly clientId: string,
        readonly role: AdsAccessRole|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsAccesses}
     */
    static deserialize(raw: Object): AdsAccesses {
        return new AdsAccesses (
            raw['client_id'],
            raw['role'] ? AdsAccessRole.deserialize(raw['role']) : undefined
        )
    }
}

export class AdsAccount {
    /**
     * @class
     * @property {number} accountId Account ID
     * @property {string} accountType Account type
     * @property {boolean} accountStatus Information whether account is active
     * @property {AdsAccessRole|undefined} accessRole
     */
    constructor (
        readonly accountId: number,
        readonly accountType: string,
        readonly accountStatus: boolean,
        readonly accessRole: AdsAccessRole|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsAccount}
     */
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
    /**
     * @class
     * @property {number} id Ad ID
     * @property {number} campaignId Campaign ID
     * @property {number} adFormat Ad format
     * @property {number} costType Cost type
     * @property {number} cpc Cost of a click, kopecks
     * @property {number} cpm Cost of 1000 impressions, kopecks
     * @property {number} impressionsLimit Impressions limit
     * @property {number} impressionsLimited Information whether impressions are limited
     * @property {any} adPlatform Ad platform
     * @property {number} allLimit Total limit
     * @property {number} category1Id Category ID
     * @property {number} category2Id Additional category ID
     * @property {number} status Ad atatus
     * @property {string} name Ad title
     * @property {number} approved Review status
     * @property {boolean} video Information whether the ad is a video
     * @property {boolean} disclaimerMedical Information whether disclaimer is enabled
     * @property {boolean} disclaimerSpecialist Information whether disclaimer is enabled
     * @property {boolean} disclaimerSupplements Information whether disclaimer is enabled
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsAd}
     */
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
    /**
     * @class
     * @property {number} id Ad ID
     * @property {number} campaignId Campaign ID
     * @property {number} adFormat Ad format
     * @property {number} costType Cost type
     * @property {boolean} video Information whether the ad is a video
     * @property {string} title Ad title
     * @property {string} description Ad description
     * @property {string} linkUrl URL of advertised object
     * @property {string} linkDomain Domain of advertised object
     * @property {any} previewLink link to preview an ad as it is shown on the website
     * @property {number} imageSrc Image URL
     * @property {number} imageSrc2x URL of the preview image in double size
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsAdLayout}
     */
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
    /**
     * @class
     * @property {number} id Campaign ID
     * @property {string} type Campaign type
     * @property {string} name Campaign title
     * @property {number} status Campaign status
     * @property {string} dayLimit Campaign's day limit, rubles
     * @property {string} allLimit Campaign's total limit, rubles
     * @property {number} startTime Campaign start time, as Unixtime
     * @property {number} stopTime Campaign stop time, as Unixtime
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsCampaign}
     */
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
    /**
     * @class
     * @property {number} id Category ID
     * @property {string} name Category name
     * @property {BaseObjectWithName|undefined[]|undefined} subcategories
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: BaseObjectWithName|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCategory}
     */
    static deserialize(raw: Object): AdsCategory {
        return new AdsCategory (
            raw['id'],
            raw['name'],
            raw['subcategories'] ? raw['subcategories'].map(v => v ? BaseObjectWithName.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsClient {
    /**
     * @class
     * @property {number} id Client ID
     * @property {string} name Client name
     * @property {string} dayLimit Client's day limit, rubles
     * @property {string} allLimit Client's total limit, rubles
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly dayLimit: string,
        readonly allLimit: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsClient}
     */
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
    /**
     * @class
     * @property {number} sex Sex
     * @property {number} ageFrom Age from
     * @property {number} ageTo Age to
     * @property {number} birthday Days to birthday
     * @property {number} country Country ID
     * @property {string} cities Cities IDs
     * @property {string} citiesNot Cities IDs to except
     * @property {string} statuses Relationship statuses
     * @property {string} groups Communities IDs
     * @property {string} apps Apps IDs
     * @property {string} appsNot Apps IDs to except
     * @property {string} districts Districts IDs
     * @property {string} stations Stations IDs
     * @property {string} streets Streets IDs
     * @property {string} schools Schools IDs
     * @property {string} positions Positions IDs
     * @property {string} religions Religions IDs
     * @property {string} interests Interests
     * @property {string} interestCategories Interests categories IDs
     * @property {string} userDevices Devices
     * @property {string} userOs Operating systems
     * @property {string} userBrowsers Browsers
     * @property {string} retargetingGroups Retargeting groups IDs
     * @property {string} retargetingGroupsNot Retargeting groups IDs to except
     * @property {boolean} paying Information whether the user has proceeded VK payments before
     * @property {BasePropertyExists|undefined} travellers Travellers only
     * @property {number} schoolFrom School graduation year from
     * @property {number} schoolTo School graduation year to
     * @property {number} uniFrom University graduation year from
     * @property {number} uniTo University graduation year to
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsCriteria}
     */
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
    /**
     * @class
     * @property {number} id Object ID
     * @property {AdsObjectType|undefined} type
     * @property {AdsDemostatsFormat|undefined} stats
     */
    constructor (
        readonly id: number,
        readonly type: AdsObjectType|undefined,
        readonly stats: AdsDemostatsFormat|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsDemoStats}
     */
    static deserialize(raw: Object): AdsDemoStats {
        return new AdsDemoStats (
            raw['id'],
            raw['type'] ? AdsObjectType.deserialize(raw['type']) : undefined,
            raw['stats'] ? AdsDemostatsFormat.deserialize(raw['stats']) : undefined
        )
    }
}

export class AdsDemostatsFormat {
    /**
     * @class
     * @property {string} day Day as YYYY-MM-DD
     * @property {string} month Month as YYYY-MM
     * @property {number} overall 1 if period=overall
     * @property {AdsStatsSex|undefined[]|undefined} sex
     * @property {AdsStatsAge|undefined[]|undefined} age
     * @property {AdsStatsSexAge|undefined[]|undefined} sexAge
     * @property {AdsStatsCities|undefined[]|undefined} cities
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsDemostatsFormat}
     */
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
    /**
     * @class
     * @property {number} left Requests left
     * @property {number} refresh Time to refresh in seconds
     */
    constructor (
        readonly left: number,
        readonly refresh: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsFloodStats}
     */
    static deserialize(raw: Object): AdsFloodStats {
        return new AdsFloodStats (
            raw['left'],
            raw['refresh']
        )
    }
}

export class AdsLinkStatus {
    /**
     * @class
     * @property {string} status Link status
     * @property {string} description Reject reason
     * @property {string} redirectUrl URL
     */
    constructor (
        readonly status: string,
        readonly description: string,
        readonly redirectUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsLinkStatus}
     */
    static deserialize(raw: Object): AdsLinkStatus {
        return new AdsLinkStatus (
            raw['status'],
            raw['description'],
            raw['redirect_url']
        )
    }
}

export class AdsObjectType {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsObjectType}
     */
    static deserialize(raw: Object): AdsObjectType {
        return new AdsObjectType (
        )
    }
}

export class AdsParagraphs {
    /**
     * @class
     * @property {string} paragraph Rules paragraph
     */
    constructor (
        readonly paragraph: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsParagraphs}
     */
    static deserialize(raw: Object): AdsParagraphs {
        return new AdsParagraphs (
            raw['paragraph']
        )
    }
}

export class AdsRejectReason {
    /**
     * @class
     * @property {string} comment Comment text
     * @property {AdsRules|undefined[]|undefined} rules
     */
    constructor (
        readonly comment: string,
        readonly rules: AdsRules|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsRejectReason}
     */
    static deserialize(raw: Object): AdsRejectReason {
        return new AdsRejectReason (
            raw['comment'],
            raw['rules'] ? raw['rules'].map(v => v ? AdsRules.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsRules {
    /**
     * @class
     * @property {string} title Comment
     * @property {AdsParagraphs|undefined[]|undefined} paragraphs
     */
    constructor (
        readonly title: string,
        readonly paragraphs: AdsParagraphs|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsRules}
     */
    static deserialize(raw: Object): AdsRules {
        return new AdsRules (
            raw['title'],
            raw['paragraphs'] ? raw['paragraphs'].map(v => v ? AdsParagraphs.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsStats {
    /**
     * @class
     * @property {number} id Object ID
     * @property {AdsObjectType|undefined} type
     * @property {AdsStatsFormat|undefined} stats
     */
    constructor (
        readonly id: number,
        readonly type: AdsObjectType|undefined,
        readonly stats: AdsStatsFormat|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsStats}
     */
    static deserialize(raw: Object): AdsStats {
        return new AdsStats (
            raw['id'],
            raw['type'] ? AdsObjectType.deserialize(raw['type']) : undefined,
            raw['stats'] ? AdsStatsFormat.deserialize(raw['stats']) : undefined
        )
    }
}

export class AdsStatsFormat {
    /**
     * @class
     * @property {string} day Day as YYYY-MM-DD
     * @property {string} month Month as YYYY-MM
     * @property {number} overall 1 if period=overall
     * @property {number} spent Spent funds
     * @property {number} impressions Impressions number
     * @property {number} clicks Clicks number
     * @property {number} reach Reach
     * @property {number} videoViews Video views number
     * @property {number} videoViewsHalf Video views (half of video)
     * @property {number} videoViewsFull Video views (full video)
     * @property {number} videoClicksSite Clickthoughs to the advertised site
     * @property {number} joinRate Events number
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsStatsFormat}
     */
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
    /**
     * @class
     * @property {number} impressionsRate Impressions rate
     * @property {number} clicksRate Clicks rate
     * @property {string} value Age interval
     */
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsStatsAge}
     */
    static deserialize(raw: Object): AdsStatsAge {
        return new AdsStatsAge (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}

export class AdsStatsCities {
    /**
     * @class
     * @property {number} impressionsRate Impressions rate
     * @property {number} clicksRate Clicks rate
     * @property {number} value City ID
     * @property {string} name City name
     */
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsStatsCities}
     */
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
    /**
     * @class
     * @property {number} impressionsRate Impressions rate
     * @property {number} clicksRate Clicks rate
     * @property {string} value Sex
     */
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsStatsSex}
     */
    static deserialize(raw: Object): AdsStatsSex {
        return new AdsStatsSex (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}

export class AdsStatsSexAge {
    /**
     * @class
     * @property {number} impressionsRate Impressions rate
     * @property {number} clicksRate Clicks rate
     * @property {string} value Sex and age interval
     */
    constructor (
        readonly impressionsRate: number,
        readonly clicksRate: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsStatsSexAge}
     */
    static deserialize(raw: Object): AdsStatsSexAge {
        return new AdsStatsSexAge (
            raw['impressions_rate'],
            raw['clicks_rate'],
            raw['value']
        )
    }
}

export class AdsTargStats {
    /**
     * @class
     * @property {number} audienceCount Audience
     * @property {number} recommendedCpc Recommended CPC value
     * @property {number} recommendedCpm Recommended CPM value
     */
    constructor (
        readonly audienceCount: number,
        readonly recommendedCpc: number,
        readonly recommendedCpm: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargStats}
     */
    static deserialize(raw: Object): AdsTargStats {
        return new AdsTargStats (
            raw['audience_count'],
            raw['recommended_cpc'],
            raw['recommended_cpm']
        )
    }
}

export class AdsTargSuggestions {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} name Object name
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargSuggestions}
     */
    static deserialize(raw: Object): AdsTargSuggestions {
        return new AdsTargSuggestions (
            raw['id'],
            raw['name']
        )
    }
}

export class AdsTargSuggestionsRegions {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} name Object name
     * @property {string} type Object type
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly type: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargSuggestionsRegions}
     */
    static deserialize(raw: Object): AdsTargSuggestionsRegions {
        return new AdsTargSuggestionsRegions (
            raw['id'],
            raw['name'],
            raw['type']
        )
    }
}

export class AdsTargSuggestionsCities {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} name Object name
     * @property {string} parent Parent object
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly parent: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargSuggestionsCities}
     */
    static deserialize(raw: Object): AdsTargSuggestionsCities {
        return new AdsTargSuggestionsCities (
            raw['id'],
            raw['name'],
            raw['parent']
        )
    }
}

export class AdsTargSuggestionsSchools {
    /**
     * @class
     * @property {number} id School ID
     * @property {string} name School title
     * @property {string} desc Full school title
     * @property {string} type School type
     * @property {string} parent City name
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly desc: string,
        readonly type: string,
        readonly parent: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargSuggestionsSchools}
     */
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
    /**
     * @class
     * @property {number} id Ad ID
     * @property {number} campaignId Campaign ID
     * @property {number} sex Sex
     * @property {number} ageFrom Age from
     * @property {number} ageTo Age to
     * @property {number} birthday Days to birthday
     * @property {number} country Country ID
     * @property {string} cities Cities IDs
     * @property {string} citiesNot Cities IDs to except
     * @property {string} statuses Relationship statuses
     * @property {string} groups Communities IDs
     * @property {string} apps Apps IDs
     * @property {string} appsNot Apps IDs to except
     * @property {string} districts Districts IDs
     * @property {string} stations Stations IDs
     * @property {string} streets Streets IDs
     * @property {string} schools Schools IDs
     * @property {string} positions Positions IDs
     * @property {string} religions Religions IDs
     * @property {string} interests Interests
     * @property {string} interestCategories Interests categories IDs
     * @property {string} userDevices Devices
     * @property {string} userOs Operating systems
     * @property {string} userBrowsers Browsers
     * @property {string} retargetingGroups Retargeting groups IDs
     * @property {string} retargetingGroupsNot Retargeting groups IDs to except
     * @property {boolean} paying Information whether the user has proceeded VK payments before
     * @property {BasePropertyExists|undefined} travellers Travellers only
     * @property {number} schoolFrom School graduation year from
     * @property {number} schoolTo School graduation year to
     * @property {number} uniFrom University graduation year from
     * @property {number} uniTo University graduation year to
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsTargSettings}
     */
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
    /**
     * @class
     * @property {number} id Group ID
     * @property {string} name Group name
     * @property {string} domain Site domain
     * @property {number} audienceCount Audience
     * @property {number} lifetime Number of days for user to be in group
     * @property {string} pixel Pixel code
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly domain: string,
        readonly audienceCount: number,
        readonly lifetime: number,
        readonly pixel: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsTargetGroup}
     */
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
    /**
     * @class
     * @property {number} userId User ID
     * @property {AdsAccesses|undefined[]|undefined} accesses
     */
    constructor (
        readonly userId: number,
        readonly accesses: AdsAccesses|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsUsers}
     */
    static deserialize(raw: Object): AdsUsers {
        return new AdsUsers (
            raw['user_id'],
            raw['accesses'] ? raw['accesses'].map(v => v ? AdsAccesses.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsPostStats {
    /**
     * @class
     * @property {number} adId Object ID
     * @property {number} reachSubscribers Subscribers reach
     * @property {number} reachTotal Total reach
     * @property {number} links Link clickthrough
     * @property {number} toGroup Clickthrough to community
     * @property {number} joinGroup People have joined the group
     * @property {number} report Reports number
     * @property {number} hide Hidings number
     * @property {number} unsubscribe Unsubscribed members
     */
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

    /**
     * @param {Object} raw
     * @returns {AdsPostStats}
     */
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
    /**
     * @class
     * @property {number} id Application ID
     * @property {string} title Application title
     * @property {string} screenName Screen name
     * @property {string} description Application description
     * @property {string} icon278 URL of the app icon with 279 px in width
     * @property {string} icon150 URL of the app icon with 150 px in width
     * @property {string} icon139 URL of the app icon with 139 px in width
     * @property {string} icon75 URL of the app icon with 75 px in width
     * @property {string} banner560 URL of the app banner with 560 px in width
     * @property {string} banner1120 URL of the app banner with 1120 px in width
     * @property {string} type Application type
     * @property {string} section Application section name
     * @property {string} authorUrl Application author's URL
     * @property {number} authorId Application author's ID
     * @property {number} authorGroup Official community's ID
     * @property {number} membersCount Members number
     * @property {number} publishedDate Date when the application has been published in Unixtime
     * @property {number} catalogPosition Catalog position
     * @property {PhotosPhoto|undefined[]|undefined} screenshots
     * @property {number} international Information whether the application is multilanguage
     * @property {number} leaderboardType Leaderboard type
     * @property {number} genreId Genre ID
     * @property {string} genre Genre name
     * @property {number} platformId Application ID in store
     * @property {number} isInCatalog Information whther application is in mobile catalog
     */
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

    /**
     * @param {Object} raw
     * @returns {AppsApp}
     */
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
    /**
     * @class
     * @property {number} score Score number
     * @property {number} level Level
     * @property {number} points Points number
     * @property {number} userId User ID
     */
    constructor (
        readonly score: number,
        readonly level: number,
        readonly points: number,
        readonly userId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsLeaderboard}
     */
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
    /**
     * @class
     * @property {number} id Album ID
     * @property {number} ownerId Album owner's ID
     * @property {string} title Album title
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioAudioAlbum}
     */
    static deserialize(raw: Object): AudioAudioAlbum {
        return new AudioAudioAlbum (
            raw['id'],
            raw['owner_id'],
            raw['title']
        )
    }
}

export class AudioAudio {
    /**
     * @class
     * @property {number} id Audio ID
     * @property {number} ownerId Audio owner's ID
     * @property {string} artist Artist name
     * @property {string} title Title
     * @property {string} url URL of mp3 file
     * @property {string} accessKey Access key for the audio
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly artist: string,
        readonly title: string,
        readonly url: string,
        readonly accessKey: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioAudio}
     */
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
    /**
     * @class
     * @property {number} id Audio ID
     * @property {number} ownerId Audio owner's ID
     * @property {string} artist Artist name
     * @property {string} title Title
     * @property {string} url URL of mp3 file
     * @property {string} accessKey Access key for the audio
     * @property {number} duration Duration in seconds
     * @property {number} date Date when uploaded
     * @property {number} albumId Album ID
     * @property {number} lyricsId Lyrics ID
     * @property {number} genreId Genre ID
     * @property {boolean} noSearch Information whether the audio is hidden from search
     */
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

    /**
     * @param {Object} raw
     * @returns {AudioAudioFull}
     */
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
    /**
     * @class
     * @property {number} lyricsId Lyrics ID
     * @property {string} text Lyrics text
     */
    constructor (
        readonly lyricsId: number,
        readonly text: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioLyrics}
     */
    static deserialize(raw: Object): AudioLyrics {
        return new AudioLyrics (
            raw['lyrics_id'],
            raw['text']
        )
    }
}

export class AudioAudioUploadResponse {
    /**
     * @class
     * @property {string} redirect Redirect URL
     * @property {number} server Upload server number
     * @property {string} audio Uploaded aduio data
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly redirect: string,
        readonly server: number,
        readonly audio: string,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioAudioUploadResponse}
     */
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
    /**
     * @class
     * @property {number} count Comments number
     * @property {number} canPost Information whether current user can comment the post
     */
    constructor (
        readonly count: number,
        readonly canPost: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseCommentsInfo}
     */
    static deserialize(raw: Object): BaseCommentsInfo {
        return new BaseCommentsInfo (
            raw['count'],
            raw['can_post']
        )
    }
}

export class BaseCountry {
    /**
     * @class
     * @property {number} id Country ID
     * @property {string} title Country title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseCountry}
     */
    static deserialize(raw: Object): BaseCountry {
        return new BaseCountry (
            raw['id'],
            raw['title']
        )
    }
}

export class BaseError {
    /**
     * @class
     * @property {number} errorCode Error code
     * @property {string} errorMsg Error message
     * @property {BaseRequestParam|undefined[]|undefined} requestParams
     */
    constructor (
        readonly errorCode: number,
        readonly errorMsg: string,
        readonly requestParams: BaseRequestParam|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseError}
     */
    static deserialize(raw: Object): BaseError {
        return new BaseError (
            raw['error_code'],
            raw['error_msg'],
            raw['request_params'] ? raw['request_params'].map(v => v ? BaseRequestParam.deserialize(v) : undefined) : undefined
        )
    }
}

export class BaseRequestParam {
    /**
     * @class
     * @property {string} key Parameter name
     * @property {string} value Parameter value
     */
    constructor (
        readonly key: string,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseRequestParam}
     */
    static deserialize(raw: Object): BaseRequestParam {
        return new BaseRequestParam (
            raw['key'],
            raw['value']
        )
    }
}

export class BaseGeo {
    /**
     * @class
     * @property {string} type Place type
     * @property {string} coordinates String with coordinates
     * @property {BasePlace|undefined} place
     * @property {number} showmap Information whether a map is showed
     */
    constructor (
        readonly type: string,
        readonly coordinates: string,
        readonly place: BasePlace|undefined,
        readonly showmap: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseGeo}
     */
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
    /**
     * @class
     * @property {number} count Likes number
     * @property {number} userLikes Information whether current uer has liked the post
     * @property {number} canLike Information whether current user can like the post
     * @property {number} canPublish Information whether current user can repost
     */
    constructor (
        readonly count: number,
        readonly userLikes: number,
        readonly canLike: number,
        readonly canPublish: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLikesInfo}
     */
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
    /**
     * @class
     * @property {boolean} userLikes Information whether current user likes the photo
     * @property {number} count Likes number
     */
    constructor (
        readonly userLikes: boolean,
        readonly count: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLikes}
     */
    static deserialize(raw: Object): BaseLikes {
        return new BaseLikes (
            !!raw['user_likes'],
            raw['count']
        )
    }
}

export class BaseLink {
    /**
     * @class
     * @property {string} url Link URL
     * @property {string} title Link title
     * @property {string} caption Link caption
     * @property {string} description Link description
     * @property {PhotosPhoto|undefined} photo
     * @property {boolean} isExternal Information whether the link is external
     * @property {string} previewUrl URL of the page with article preview
     * @property {string} previewPage String ID of the page with article preview
     * @property {BaseLinkButton|undefined} button
     * @property {BaseLinkProduct|undefined} product
     * @property {BaseLinkRating|undefined} rating
     * @property {BaseLinkApplication|undefined} application
     */
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

    /**
     * @param {Object} raw
     * @returns {BaseLink}
     */
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
    /**
     * @class
     * @property {string} title Button title
     * @property {BaseLinkButtonAction|undefined} action Button action
     */
    constructor (
        readonly title: string,
        readonly action: BaseLinkButtonAction|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkButton}
     */
    static deserialize(raw: Object): BaseLinkButton {
        return new BaseLinkButton (
            raw['title'],
            raw['action'] ? BaseLinkButtonAction.deserialize(raw['action']) : undefined
        )
    }
}

export class BaseLinkButtonAction {
    /**
     * @class
     * @property {BaseLinkButtonActionType|undefined} type
     * @property {string} url Action URL
     */
    constructor (
        readonly type: BaseLinkButtonActionType|undefined,
        readonly url: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkButtonAction}
     */
    static deserialize(raw: Object): BaseLinkButtonAction {
        return new BaseLinkButtonAction (
            raw['type'] ? BaseLinkButtonActionType.deserialize(raw['type']) : undefined,
            raw['url']
        )
    }
}

export class BaseLinkButtonActionType {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkButtonActionType}
     */
    static deserialize(raw: Object): BaseLinkButtonActionType {
        return new BaseLinkButtonActionType (
        )
    }
}

export class BaseLinkProduct {
    /**
     * @class
     * @property {MarketPrice|undefined} price
     */
    constructor (
        readonly price: MarketPrice|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkProduct}
     */
    static deserialize(raw: Object): BaseLinkProduct {
        return new BaseLinkProduct (
            raw['price'] ? MarketPrice.deserialize(raw['price']) : undefined
        )
    }
}

export class BaseLinkApplication {
    /**
     * @class
     * @property {number} appId Application Id
     * @property {BaseLinkApplicationStore|undefined} store
     */
    constructor (
        readonly appId: number,
        readonly store: BaseLinkApplicationStore|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkApplication}
     */
    static deserialize(raw: Object): BaseLinkApplication {
        return new BaseLinkApplication (
            raw['app_id'],
            raw['store'] ? BaseLinkApplicationStore.deserialize(raw['store']) : undefined
        )
    }
}

export class BaseLinkApplicationStore {
    /**
     * @class
     * @property {number} id Store Id
     * @property {string} name Store name
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkApplicationStore}
     */
    static deserialize(raw: Object): BaseLinkApplicationStore {
        return new BaseLinkApplicationStore (
            raw['id'],
            raw['name']
        )
    }
}

export class BaseLinkRating {
    /**
     * @class
     * @property {number} stars Count of stars
     * @property {number} reviewsCount Count of reviews
     */
    constructor (
        readonly stars: number,
        readonly reviewsCount: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseLinkRating}
     */
    static deserialize(raw: Object): BaseLinkRating {
        return new BaseLinkRating (
            raw['stars'],
            raw['reviews_count']
        )
    }
}

export class BaseObject {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} title Object title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseObject}
     */
    static deserialize(raw: Object): BaseObject {
        return new BaseObject (
            raw['id'],
            raw['title']
        )
    }
}

export class BaseObjectWithName {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} name Object name
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseObjectWithName}
     */
    static deserialize(raw: Object): BaseObjectWithName {
        return new BaseObjectWithName (
            raw['id'],
            raw['name']
        )
    }
}

export class BaseObjectCount {
    /**
     * @class
     * @property {number} count Items count
     */
    constructor (
        readonly count: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseObjectCount}
     */
    static deserialize(raw: Object): BaseObjectCount {
        return new BaseObjectCount (
            raw['count']
        )
    }
}

export class BaseOkResponse {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseOkResponse}
     */
    static deserialize(raw: Object): BaseOkResponse {
        return new BaseOkResponse (
        )
    }
}

export class BasePlace {
    /**
     * @class
     * @property {number} id Place ID
     * @property {string} title Place title
     * @property {number} latitude Place latitude
     * @property {number} longitude Place longitude
     * @property {number} created Date of the place creation in Unixtime
     * @property {string} icon URL of the place's icon
     * @property {number} checkins Checkins number
     * @property {string} type Place type
     * @property {string} country Country name
     * @property {string} city City name
     * @property {string} address Place address
     */
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

    /**
     * @param {Object} raw
     * @returns {BasePlace}
     */
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
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BasePropertyExists}
     */
    static deserialize(raw: Object): BasePropertyExists {
        return new BasePropertyExists (
        )
    }
}

export class BaseRepostsInfo {
    /**
     * @class
     * @property {number} count Reposts number
     * @property {number} userReposted Information whether current user has reposted the post
     */
    constructor (
        readonly count: number,
        readonly userReposted: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseRepostsInfo}
     */
    static deserialize(raw: Object): BaseRepostsInfo {
        return new BaseRepostsInfo (
            raw['count'],
            raw['user_reposted']
        )
    }
}

export class BaseSticker {
    /**
     * @class
     * @property {number} id Sticker ID
     * @property {number} productId Collection ID
     * @property {string} photo64 URL of the preview image with 64 px in height
     * @property {string} photo128 URL of the preview image with 128 px in height
     * @property {string} photo256 URL of the preview image with 256 px in height
     * @property {string} photo352 URL of the preview image with 352 px in height
     * @property {number} width Width in px
     * @property {number} height Hieght in px
     */
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

    /**
     * @param {Object} raw
     * @returns {BaseSticker}
     */
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
    /**
     * @class
     * @property {number} userId User ID
     */
    constructor (
        readonly userId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseUserId}
     */
    static deserialize(raw: Object): BaseUserId {
        return new BaseUserId (
            raw['user_id']
        )
    }
}

export class BaseSex {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseSex}
     */
    static deserialize(raw: Object): BaseSex {
        return new BaseSex (
        )
    }
}

export class BoardDefaultOrder {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardDefaultOrder}
     */
    static deserialize(raw: Object): BoardDefaultOrder {
        return new BoardDefaultOrder (
        )
    }
}

export class BoardTopicPoll {
    /**
     * @class
     * @property {number} pollId Poll ID
     * @property {number} ownerId Poll owner's ID
     * @property {number} created Date when poll has been created in Unixtime
     * @property {boolean} isClosed Information whether the poll is closed
     * @property {string} question Poll question
     * @property {string} votes Votes number
     * @property {number} answerId Current user's answer ID
     * @property {PollsAnswer|undefined[]|undefined} answers
     */
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

    /**
     * @param {Object} raw
     * @returns {BoardTopicPoll}
     */
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
    /**
     * @class
     * @property {number} id Topic ID
     * @property {string} title Topic title
     * @property {number} created Date when the topic has been created in Unixtime
     * @property {number} createdBy Creator ID
     * @property {number} updated Date when the topic has been updated in Unixtime
     * @property {number} updatedBy ID of user who updated the topic
     * @property {boolean} isClosed Information whether the topic is closed
     * @property {boolean} isFixed Information whether the topic is fixed
     * @property {number} comments Comments number
     */
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

    /**
     * @param {Object} raw
     * @returns {BoardTopic}
     */
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
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} fromId Author ID
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {string} text Comment text
     * @property {WallCommentAttachment|undefined[]|undefined} attachments
     * @property {number} realOffset Real position of the comment
     */
    constructor (
        readonly id: number,
        readonly fromId: number,
        readonly date: number,
        readonly text: string,
        readonly attachments: WallCommentAttachment|undefined[]|undefined,
        readonly realOffset: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardTopicComment}
     */
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
    /**
     * @class
     * @property {string} url Image url
     * @property {number} width Image width
     * @property {number} height Image height
     */
    constructor (
        readonly url: string,
        readonly width: number,
        readonly height: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BaseImage}
     */
    static deserialize(raw: Object): BaseImage {
        return new BaseImage (
            raw['url'],
            raw['width'],
            raw['height']
        )
    }
}

export class DatabaseCity {
    /**
     * @class
     * @property {number} id Object ID
     * @property {string} title Object title
     * @property {string} area Area title
     * @property {string} region Region title
     * @property {boolean} important Information whether the city is included in important cities list
     */
    constructor (
        readonly id: number,
        readonly title: string,
        readonly area: string,
        readonly region: string,
        readonly important: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseCity}
     */
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
    /**
     * @class
     * @property {number} id Faculty ID
     * @property {string} title Faculty title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseFaculty}
     */
    static deserialize(raw: Object): DatabaseFaculty {
        return new DatabaseFaculty (
            raw['id'],
            raw['title']
        )
    }
}

export class DatabaseRegion {
    /**
     * @class
     * @property {number} id Region ID
     * @property {string} title Region title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseRegion}
     */
    static deserialize(raw: Object): DatabaseRegion {
        return new DatabaseRegion (
            raw['id'],
            raw['title']
        )
    }
}

export class DatabaseSchool {
    /**
     * @class
     * @property {number} id School ID
     * @property {string} title School title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseSchool}
     */
    static deserialize(raw: Object): DatabaseSchool {
        return new DatabaseSchool (
            raw['id'],
            raw['title']
        )
    }
}

export class DatabaseStreet {
    /**
     * @class
     * @property {number} id Street ID
     * @property {string} title Street title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseStreet}
     */
    static deserialize(raw: Object): DatabaseStreet {
        return new DatabaseStreet (
            raw['id'],
            raw['title']
        )
    }
}

export class DatabaseUniversity {
    /**
     * @class
     * @property {number} id University ID
     * @property {string} title University title
     */
    constructor (
        readonly id: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseUniversity}
     */
    static deserialize(raw: Object): DatabaseUniversity {
        return new DatabaseUniversity (
            raw['id'],
            raw['title']
        )
    }
}

export class DocsDoc {
    /**
     * @class
     * @property {number} id Document ID
     * @property {number} ownerId Document owner ID
     * @property {string} title Document title
     * @property {number} size File size in bites
     * @property {string} ext File extension
     * @property {string} url File URL
     * @property {number} date Date when file has been uploaded in Unixtime
     * @property {number} type Document type
     * @property {DocsDocPreview|undefined} preview
     * @property {string} accessKey Access key for the document
     */
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

    /**
     * @param {Object} raw
     * @returns {DocsDoc}
     */
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
    /**
     * @class
     * @property {number} id Doc type ID
     * @property {string} title Doc type title
     * @property {number} count Number of docs
     */
    constructor (
        readonly id: number,
        readonly title: string,
        readonly count: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDocTypes}
     */
    static deserialize(raw: Object): DocsDocTypes {
        return new DocsDocTypes (
            raw['id'],
            raw['title'],
            raw['count']
        )
    }
}

export class DocsDocUploadResponse {
    /**
     * @class
     * @property {string} file Uploaded file data
     */
    constructor (
        readonly file: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDocUploadResponse}
     */
    static deserialize(raw: Object): DocsDocUploadResponse {
        return new DocsDocUploadResponse (
            raw['file']
        )
    }
}

export class DocsDocPreview {
    /**
     * @class
     * @property {DocsDocPreviewPhoto|undefined} photo
     * @property {DocsDocPreviewVideo|undefined} video
     */
    constructor (
        readonly photo: DocsDocPreviewPhoto|undefined,
        readonly video: DocsDocPreviewVideo|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDocPreview}
     */
    static deserialize(raw: Object): DocsDocPreview {
        return new DocsDocPreview (
            raw['photo'] ? DocsDocPreviewPhoto.deserialize(raw['photo']) : undefined,
            raw['video'] ? DocsDocPreviewVideo.deserialize(raw['video']) : undefined
        )
    }
}

export class DocsDocPreviewPhoto {
    /**
     * @class
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     */
    constructor (
        readonly sizes: PhotosPhotoSizes|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDocPreviewPhoto}
     */
    static deserialize(raw: Object): DocsDocPreviewPhoto {
        return new DocsDocPreviewPhoto (
            raw['sizes'] ? raw['sizes'].map(v => v ? PhotosPhotoSizes.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsDocPreviewVideo {
    /**
     * @class
     * @property {string} src Video URL
     * @property {number} width Video's width in pixels
     * @property {number} height Video's height in pixels
     * @property {number} filesize Video file size in bites
     */
    constructor (
        readonly src: string,
        readonly width: number,
        readonly height: number,
        readonly filesize: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDocPreviewVideo}
     */
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
    /**
     * @class
     * @property {number} id Link ID
     * @property {string} url Link URL
     * @property {string} title Link title
     * @property {string} description Link description
     * @property {string} photo50 URL of the preview image with 50 px in width
     * @property {string} photo100 URL of the preview image with 100 px in width
     * @property {string} photo200 URL of the preview image with 200 px in width
     */
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

    /**
     * @param {Object} raw
     * @returns {FaveFavesLink}
     */
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
    /**
     * @class
     * @property {string} name List title
     * @property {number} id List ID
     */
    constructor (
        readonly name: string,
        readonly id: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsFriendsList}
     */
    static deserialize(raw: Object): FriendsFriendsList {
        return new FriendsFriendsList (
            raw['name'],
            raw['id']
        )
    }
}

export class FriendsRequests {
    /**
     * @class
     * @property {number} userId User ID
     * @property {string} from ID of the user by whom friend has been suggested
     * @property {FriendsRequestsMutual|undefined} mutual
     */
    constructor (
        readonly userId: number,
        readonly from: string,
        readonly mutual: FriendsRequestsMutual|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsRequests}
     */
    static deserialize(raw: Object): FriendsRequests {
        return new FriendsRequests (
            raw['user_id'],
            raw['from'],
            raw['mutual'] ? FriendsRequestsMutual.deserialize(raw['mutual']) : undefined
        )
    }
}

export class FriendsRequestsMutual {
    /**
     * @class
     * @property {number} count Total mutual friends number
     * @property {number[]|undefined} users
     */
    constructor (
        readonly count: number,
        readonly users: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsRequestsMutual}
     */
    static deserialize(raw: Object): FriendsRequestsMutual {
        return new FriendsRequestsMutual (
            raw['count'],
            raw['users'] ? raw['users'].map(v => v) : undefined
        )
    }
}

export class FriendsRequestsXtrMessage {
    /**
     * @class
     * @property {number} userId User ID
     * @property {string} from ID of the user by whom friend has been suggested
     * @property {FriendsRequestsMutual|undefined} mutual
     * @property {string} message Message sent with a request
     */
    constructor (
        readonly userId: number,
        readonly from: string,
        readonly mutual: FriendsRequestsMutual|undefined,
        readonly message: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsRequestsXtrMessage}
     */
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
    /**
     * @class
     * @property {number} userId User ID
     * @property {number} friendStatus Friend status with the user
     * @property {string} requestMessage Message sent with request
     * @property {number} readState Information whether request is unviewed
     * @property {string} sign MD5 hash for the result validation
     */
    constructor (
        readonly userId: number,
        readonly friendStatus: number,
        readonly requestMessage: string,
        readonly readState: number,
        readonly sign: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsFriendStatus}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {number[]|undefined} lists
     */
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

    /**
     * @param {Object} raw
     * @returns {FriendsUserXtrLists}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {string} phone User phone
     */
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

    /**
     * @param {Object} raw
     * @returns {FriendsUserXtrPhone}
     */
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
    /**
     * @class
     * @property {number} id Gift ID
     * @property {string} thumb256 URL of the preview image with 256 px in width
     * @property {string} thumb96 URL of the preview image with 96 px in width
     * @property {string} thumb48 URL of the preview image with 48 px in width
     */
    constructor (
        readonly id: number,
        readonly thumb256: string,
        readonly thumb96: string,
        readonly thumb48: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GiftsLayout}
     */
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
    /**
     * @class
     * @property {number} id Gift ID
     * @property {number} fromId Gift sender ID
     * @property {string} message Comment text
     * @property {number} date Date when gist has been sent in Unixtime
     * @property {GiftsLayout|undefined} gift
     * @property {number} privacy Gift privacy
     * @property {string} giftHash Hash
     */
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

    /**
     * @param {Object} raw
     * @returns {GiftsGift}
     */
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
    /**
     * @class
     * @property {number} adminId Administrator ID
     * @property {number} date Date when user has been added to blacklist in Unixtime
     * @property {number} reason Ban reason
     * @property {string} comment Comment for a ban
     * @property {number} endDate Date when user will be removed from blacklist in Unixtime
     */
    constructor (
        readonly adminId: number,
        readonly date: number,
        readonly reason: number,
        readonly comment: string,
        readonly endDate: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsBanInfo}
     */
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
    /**
     * @class
     * @property {number} count Communities number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGroupsArray}
     */
    static deserialize(raw: Object): GroupsGroupsArray {
        return new GroupsGroupsArray (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class GroupsGroupCategory {
    /**
     * @class
     * @property {number} id Category ID
     * @property {string} name Category name
     * @property {BaseObjectWithName|undefined[]|undefined} subcategories
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: BaseObjectWithName|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGroupCategory}
     */
    static deserialize(raw: Object): GroupsGroupCategory {
        return new GroupsGroupCategory (
            raw['id'],
            raw['name'],
            raw['subcategories'] ? raw['subcategories'].map(v => v ? BaseObjectWithName.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGroupCategoryFull {
    /**
     * @class
     * @property {number} id Category ID
     * @property {string} name Category name
     * @property {GroupsGroupCategory|undefined[]|undefined} subcategories
     * @property {number} pageCount Pages number
     * @property {GroupsGroup|undefined[]|undefined} pagePreviews
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly subcategories: GroupsGroupCategory|undefined[]|undefined,
        readonly pageCount: number,
        readonly pagePreviews: GroupsGroup|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGroupCategoryFull}
     */
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
    /**
     * @class
     * @property {number} userId User ID
     * @property {string} desc Contact description
     * @property {string} email Contact email
     * @property {string} phone Contact phone
     */
    constructor (
        readonly userId: number,
        readonly desc: string,
        readonly email: string,
        readonly phone: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsContactsItem}
     */
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
    /**
     * @class
     * @property {number} photos Photos number
     * @property {number} albums Photo albums number
     * @property {number} topics Topics number
     * @property {number} videos Videos number
     * @property {number} audios Audios number
     * @property {number} docs Docs number
     * @property {number} market Market items number
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsCountersGroup}
     */
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
    /**
     * @class
     * @property {boolean} enabled Information whether cover is enabled
     * @property {BaseImage|undefined[]|undefined} images
     */
    constructor (
        readonly enabled: boolean,
        readonly images: BaseImage|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsCover}
     */
    static deserialize(raw: Object): GroupsCover {
        return new GroupsCover (
            !!raw['enabled'],
            raw['images'] ? raw['images'].map(v => v ? BaseImage.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGroup {
    /**
     * @class
     * @property {number} id Community ID
     * @property {string} name Community name
     * @property {string} screenName Domain of the community page
     * @property {number} isClosed Information whether community is closed
     * @property {string} type Community type
     * @property {boolean} isAdmin Information whether current user is administrator
     * @property {number} adminLevel Level of current user's credentials as manager
     * @property {boolean} isMember Information whether current user is member
     * @property {string} photo50 URL of square photo of the community with 50 pixels in width
     * @property {string} photo100 URL of square photo of the community with 100 pixels in width
     * @property {string} photo200 URL of square photo of the community with 200 pixels in width
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsGroup}
     */
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
    /**
     * @class
     * @property {number} id Community ID
     * @property {string} name Community name
     * @property {string} screenName Domain of the community page
     * @property {number} isClosed Information whether community is closed
     * @property {string} type Community type
     * @property {boolean} isAdmin Information whether current user is administrator
     * @property {number} adminLevel Level of current user's credentials as manager
     * @property {boolean} isMember Information whether current user is member
     * @property {string} photo50 URL of square photo of the community with 50 pixels in width
     * @property {string} photo100 URL of square photo of the community with 100 pixels in width
     * @property {string} photo200 URL of square photo of the community with 200 pixels in width
     * @property {GroupsMarketInfo|undefined} market
     * @property {number} memberStatus Current user's member status
     * @property {boolean} isFavorite Information whether community is in faves
     * @property {boolean} isSubscribed Information whether current user is subscribed
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {boolean} verified Information whether community is verified
     * @property {string} description Community description
     * @property {string} wikiPage Community's main wiki page title
     * @property {number} membersCount Community members number
     * @property {GroupsCountersGroup|undefined} counters
     * @property {GroupsCover|undefined} cover
     * @property {boolean} canPost Information whether current user can post on community's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see all posts on community's wall
     * @property {string} activity Type of group, start date of event or category of public page
     * @property {number} fixedPost Fixed post ID
     * @property {boolean} canCreateTopic Information whether current user can create topic
     * @property {boolean} canUploadVideo Information whether current user can upload video
     * @property {string} status Community status
     * @property {number} mainAlbumId Community's main photo album ID
     * @property {GroupsLinksItem|undefined[]|undefined} links
     * @property {GroupsContactsItem|undefined[]|undefined} contacts
     * @property {string} site Community's website
     * @property {number} mainSection Main section of community
     * @property {boolean} canMessage Information whether current user can send a message to community
     * @property {boolean} isMessagesAllowed Information whether current user can send a message to community
     * @property {number} startDate Start date of event in Unixtime
     * @property {number} finishDate Finish date of event in Unixtime
     * @property {string} deactivated Information whether community is banned
     * @property {number} ageLimits Information whether age limit
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsGroupFull}
     */
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
    /**
     * @class
     * @property {string} id Community ID
     * @property {string} name Community name
     * @property {string} screenName Domain of the community page
     * @property {boolean} isClosed Information whether community is closed
     * @property {string} type Community type
     * @property {boolean} isAdmin Information whether current user is manager
     * @property {number} adminLevel Level of current user's credentials as manager
     * @property {boolean} isMember Information whether current user is member
     * @property {string} photo50 URL of square photo of the community with 50 pixels in width
     * @property {string} photo100 URL of square photo of the community with 100 pixels in width
     * @property {string} photo200 URL of square photo of the community with 200 pixels in width
     * @property {number} invitedBy Inviter ID
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsGroupXtrInvitedBy}
     */
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
    /**
     * @class
     * @property {number} id Link ID
     * @property {string} url Link URL
     * @property {boolean} editTitle Information whether the title can be edited
     * @property {string} desc Link description
     * @property {boolean} imageProcessing Information whether the image on processing
     */
    constructor (
        readonly id: number,
        readonly url: string,
        readonly editTitle: boolean,
        readonly desc: string,
        readonly imageProcessing: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGroupLink}
     */
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
    /**
     * @class
     * @property {number} id Link ID
     * @property {string} url Link URL
     * @property {number} editTitle Information whether the link title can be edited
     * @property {number} name Link title
     * @property {string} desc Link description
     * @property {string} photo50 URL of square image of the link with 50 pixels in width
     * @property {string} photo100 URL of square image of the link with 100 pixels in width
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsLinksItem}
     */
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
    /**
     * @class
     * @property {boolean} enabled Information whether the market is enabled
     * @property {number} priceMin Minimum price
     * @property {number} priceMax Maximum price
     * @property {number} mainAlbumId Main market album ID
     * @property {number} contactId Contact person ID
     * @property {MarketCurrency|undefined} currency
     * @property {string} currencyText Currency name
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsMarketInfo}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} role User's credentials as community admin
     */
    constructor (
        readonly id: number,
        readonly role: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsMemberRole}
     */
    static deserialize(raw: Object): GroupsMemberRole {
        return new GroupsMemberRole (
            raw['id'],
            raw['role']
        )
    }
}

export class GroupsMemberStatus {
    /**
     * @class
     * @property {boolean} member Information whether user is a member of the group
     * @property {number} userId User ID
     */
    constructor (
        readonly member: boolean,
        readonly userId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsMemberStatus}
     */
    static deserialize(raw: Object): GroupsMemberStatus {
        return new GroupsMemberStatus (
            !!raw['member'],
            raw['user_id']
        )
    }
}

export class GroupsMemberStatusFull {
    /**
     * @class
     * @property {boolean} member Information whether user is a member of the group
     * @property {number} userId User ID
     * @property {boolean} invitation Information whether user has been invited to the group
     * @property {boolean} request Information whether user has send request to the group
     */
    constructor (
        readonly member: boolean,
        readonly userId: number,
        readonly invitation: boolean,
        readonly request: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsMemberStatusFull}
     */
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
    /**
     * @class
     * @property {string} title Community title
     * @property {string} description Community description
     * @property {string} address Community's page domain
     * @property {PlacesPlaceMin|undefined} place
     * @property {number} wall Wall settings
     * @property {number} photos Photos settings
     * @property {number} video Video settings
     * @property {number} audio Audio settings
     * @property {number} docs Docs settings
     * @property {number} topics Topics settings
     * @property {number} wiki Wiki settings
     * @property {boolean} obsceneFilter Information whether the obscene filter is enabled
     * @property {boolean} obsceneStopwords Information whether the stopwords filter is enabled
     * @property {string} obsceneWords The list of stop words
     * @property {number} access Community access settings
     * @property {number} subject Community subject ID
     * @property {GroupsSubjectItem|undefined[]|undefined} subjectList
     * @property {string} rss URL of the RSS feed
     * @property {string} website Community website
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsGroupSettings}
     */
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
    /**
     * @class
     * @property {number} id Subject ID
     * @property {string} name Subject title
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsSubjectItem}
     */
    static deserialize(raw: Object): GroupsSubjectItem {
        return new GroupsSubjectItem (
            raw['id'],
            raw['name']
        )
    }
}

export class GroupsUserXtrBanInfo {
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseObject|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {boolean} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {GroupsBanInfo|undefined} banInfo
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsUserXtrBanInfo}
     */
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
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsRoleOptions}
     */
    static deserialize(raw: Object): GroupsRoleOptions {
        return new GroupsRoleOptions (
        )
    }
}

export class GroupsUserXtrRole {
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {GroupsRoleOptions|undefined} role
     */
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

    /**
     * @param {Object} raw
     * @returns {GroupsUserXtrRole}
     */
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
    /**
     * @class
     * @property {number} limit Lead limit
     * @property {number} spent Amount of spent votes
     * @property {number} cost Offer cost
     * @property {number} impressions Impressions number
     * @property {number} started Started offers number
     * @property {number} completed Completed offers number
     * @property {LeadsLeadDays|undefined} days
     */
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

    /**
     * @param {Object} raw
     * @returns {LeadsLead}
     */
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
    /**
     * @class
     * @property {number} impressions Impressions number
     * @property {number} started Started offers number
     * @property {number} completed Completed offers number
     * @property {number} spent Amount of spent votes
     */
    constructor (
        readonly impressions: number,
        readonly started: number,
        readonly completed: number,
        readonly spent: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsLeadDays}
     */
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
    /**
     * @class
     * @property {boolean} testMode Information whether test mode is enabled
     * @property {string} vkSid Session data
     */
    constructor (
        readonly testMode: boolean,
        readonly vkSid: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsStart}
     */
    static deserialize(raw: Object): LeadsStart {
        return new LeadsStart (
            !!raw['test_mode'],
            raw['vk_sid']
        )
    }
}

export class LeadsChecked {
    /**
     * @class
     * @property {string} result Information whether user can start the lead
     * @property {string} reason Reason why user can't start the lead
     * @property {string} startLink URL user should open to start the lead
     * @property {string} sid Session ID
     */
    constructor (
        readonly result: string,
        readonly reason: string,
        readonly startLink: string,
        readonly sid: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsChecked}
     */
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
    /**
     * @class
     * @property {number} limit Offer limit
     * @property {number} spent Amount of spent votes
     * @property {number} cost Offer cost
     * @property {boolean} testMode Information whether test mode is enabled
     * @property {BaseOkResponse|undefined} success
     */
    constructor (
        readonly limit: number,
        readonly spent: number,
        readonly cost: number,
        readonly testMode: boolean,
        readonly success: BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsComplete}
     */
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
    /**
     * @class
     * @property {number} uid User ID
     * @property {number} aid Application ID
     * @property {string} sid Session string ID
     * @property {number} date Date when the action has been started in Unixtime
     * @property {number} status Action type
     * @property {boolean} testMode Information whether test mode is enabled
     * @property {number} startDate Start date in Unixtime (for status=2)
     * @property {string} comment Comment text
     */
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

    /**
     * @param {Object} raw
     * @returns {LeadsEntry}
     */
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
    /**
     * @class
     * @property {number} id Market album ID
     * @property {number} ownerId Market album owner's ID
     * @property {string} title Market album title
     * @property {number} count Items number
     * @property {number} updatedTime Date when album has been updated last time in Unixtime
     * @property {PhotosPhoto|undefined} photo
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly count: number,
        readonly updatedTime: number,
        readonly photo: PhotosPhoto|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketMarketAlbum}
     */
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
    /**
     * @class
     * @property {number} id Category ID
     * @property {string} name Category name
     * @property {MarketSection|undefined} section
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly section: MarketSection|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketMarketCategory}
     */
    static deserialize(raw: Object): MarketMarketCategory {
        return new MarketMarketCategory (
            raw['id'],
            raw['name'],
            raw['section'] ? MarketSection.deserialize(raw['section']) : undefined
        )
    }
}

export class MarketCurrency {
    /**
     * @class
     * @property {number} id Currency ID
     * @property {string} name Currency sign
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketCurrency}
     */
    static deserialize(raw: Object): MarketCurrency {
        return new MarketCurrency (
            raw['id'],
            raw['name']
        )
    }
}

export class MarketMarketItem {
    /**
     * @class
     * @property {number} id Item ID
     * @property {number} ownerId Item owner's ID
     * @property {string} title Item title
     * @property {string} description Item description
     * @property {MarketPrice|undefined} price
     * @property {MarketMarketCategory|undefined} category
     * @property {number} date Date when the item has been created in Unixtime
     * @property {string} thumbPhoto URL of the preview image
     * @property {number} availability Information whether the item is available
     */
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

    /**
     * @param {Object} raw
     * @returns {MarketMarketItem}
     */
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
    /**
     * @class
     * @property {number} id Item ID
     * @property {number} ownerId Item owner's ID
     * @property {string} title Item title
     * @property {string} description Item description
     * @property {MarketPrice|undefined} price
     * @property {MarketMarketCategory|undefined} category
     * @property {number} date Date when the item has been created in Unixtime
     * @property {string} thumbPhoto URL of the preview image
     * @property {number} availability Information whether the item is available
     * @property {PhotosPhoto|undefined[]|undefined} photos
     * @property {boolean} canComment Information whether current use can comment the item
     * @property {boolean} canRepost Information whether current use can repost the item
     * @property {BaseLikes|undefined} likes
     * @property {number} viewsCount Views number
     */
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

    /**
     * @param {Object} raw
     * @returns {MarketMarketItemFull}
     */
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
    /**
     * @class
     * @property {string} amount Amount
     * @property {MarketCurrency|undefined} currency
     * @property {string} text Text
     */
    constructor (
        readonly amount: string,
        readonly currency: MarketCurrency|undefined,
        readonly text: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketPrice}
     */
    static deserialize(raw: Object): MarketPrice {
        return new MarketPrice (
            raw['amount'],
            raw['currency'] ? MarketCurrency.deserialize(raw['currency']) : undefined,
            raw['text']
        )
    }
}

export class MarketSection {
    /**
     * @class
     * @property {number} id Section ID
     * @property {string} name Section name
     */
    constructor (
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketSection}
     */
    static deserialize(raw: Object): MarketSection {
        return new MarketSection (
            raw['id'],
            raw['name']
        )
    }
}

export class MessagesAttachmentsHistory {
    /**
     * @class
     * @property {string} type Attachments type
     * @property {PhotosPhoto|undefined} photo
     * @property {VideoVideo|undefined} video
     * @property {AudioAudioFull|undefined} audio
     * @property {DocsDoc|undefined} doc
     * @property {BaseLink|undefined} link
     */
    constructor (
        readonly type: string,
        readonly photo: PhotosPhoto|undefined,
        readonly video: VideoVideo|undefined,
        readonly audio: AudioAudioFull|undefined,
        readonly doc: DocsDoc|undefined,
        readonly link: BaseLink|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesAttachmentsHistory}
     */
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
    /**
     * @class
     * @property {PhotosPhoto|undefined} photo
     * @property {AudioAudioFull|undefined} audio
     * @property {VideoVideo|undefined} video
     * @property {DocsDoc|undefined} doc
     * @property {BaseLink|undefined} link
     * @property {MarketMarketItem|undefined} market
     * @property {MarketMarketAlbum|undefined} marketMarketAlbum
     * @property {GiftsLayout|undefined} gift
     * @property {BaseSticker|undefined} sticker
     * @property {WallWallpostAttached|undefined} wall
     * @property {WallWallComment|undefined} wallReply
     * @property {string} type Attachment type
     */
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

    /**
     * @param {Object} raw
     * @returns {MessagesMessageAttachment}
     */
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
    /**
     * @class
     * @property {number} id Chat ID
     * @property {string} type Chat type
     * @property {string} title Chat title
     * @property {number} adminId Chat creator ID
     * @property {number[]|undefined} users
     * @property {MessagesChatPushSettings|undefined} pushSettings
     * @property {string} photo50 URL of the preview image with 50 px in width
     * @property {string} photo100 URL of the preview image with 100 px in width
     * @property {string} photo200 URL of the preview image with 200 px in width
     * @property {boolean} left Shows that user has been left the chat
     * @property {boolean} kicked Shows that user has been kicked from the chat
     */
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

    /**
     * @param {Object} raw
     * @returns {MessagesChat}
     */
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
    /**
     * @class
     * @property {number} id Chat ID
     * @property {string} type Chat type
     * @property {string} title Chat title
     * @property {number} adminId Chat creator ID
     * @property {MessagesUserXtrInvitedBy|undefined[]|undefined} users
     * @property {MessagesChatPushSettings|undefined} pushSettings
     * @property {string} photo50 URL of the preview image with 50 px in width
     * @property {string} photo100 URL of the preview image with 100 px in width
     * @property {string} photo200 URL of the preview image with 200 px in width
     * @property {boolean} left Shows that user has been left the chat
     * @property {boolean} kicked Shows that user has been kicked from the chat
     */
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

    /**
     * @param {Object} raw
     * @returns {MessagesChatFull}
     */
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
    /**
     * @class
     * @property {boolean} sound Information whether the sound is on
     * @property {number} disabledUntil Time until that notifications are disabled
     */
    constructor (
        readonly sound: boolean,
        readonly disabledUntil: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesChatPushSettings}
     */
    static deserialize(raw: Object): MessagesChatPushSettings {
        return new MessagesChatPushSettings (
            !!raw['sound'],
            raw['disabled_until']
        )
    }
}

export class MessagesDialog {
    /**
     * @class
     * @property {number} unread Information whether unread messages are in the dialog
     * @property {MessagesMessage|undefined} message
     * @property {number} inRead ID of the last message read by current user
     * @property {number} outRead ID of the last message read by the others
     */
    constructor (
        readonly unread: number,
        readonly message: MessagesMessage|undefined,
        readonly inRead: number,
        readonly outRead: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesDialog}
     */
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
    /**
     * @class
     * @property {boolean} online Information whether user is online
     * @property {number} time Time when user was online in Unixtime
     */
    constructor (
        readonly online: boolean,
        readonly time: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesLastActivity}
     */
    static deserialize(raw: Object): MessagesLastActivity {
        return new MessagesLastActivity (
            !!raw['online'],
            raw['time']
        )
    }
}

export class MessagesLongpollParams {
    /**
     * @class
     * @property {string} key Key
     * @property {string} server Server URL
     * @property {number} ts Timestamp
     * @property {number} pts Persistent timestamp
     */
    constructor (
        readonly key: string,
        readonly server: string,
        readonly ts: number,
        readonly pts: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesLongpollParams}
     */
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
    /**
     * @class
     * @property {number} count Total number
     * @property {MessagesMessage|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: MessagesMessage|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesLongpollMessages}
     */
    static deserialize(raw: Object): MessagesLongpollMessages {
        return new MessagesLongpollMessages (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesMessage {
    /**
     * @class
     * @property {number} id Message ID
     * @property {number} date Date when the message has been sent in Unixtime
     * @property {boolean} out Information whether the message is outcoming
     * @property {number} userId Message author's ID
     * @property {number} fromId Message author's ID
     * @property {number} randomId ID used for sending messages. It returned only for outgoing messages
     * @property {boolean} important Is it an important message
     * @property {boolean} deleted Is it an deleted message
     * @property {MessagesMessage|undefined[]|undefined} fwdMessages Forwarded messages
     * @property {boolean} readState Information whether the messages is read
     * @property {string} title Message title or chat title
     * @property {string} body Message text
     * @property {MessagesMessageAttachment|undefined[]|undefined} attachments
     * @property {number} chatId Chat ID
     * @property {number[]|undefined} chatActive
     * @property {number} usersCount Chat users number
     * @property {number} adminId Chat administrator ID
     * @property {string} photo50 URL of the preview image with 50px in width
     * @property {string} photo100 URL of the preview image with 100px in width
     * @property {string} photo200 URL of the preview image with 200px in width
     * @property {BaseGeo|undefined} geo
     */
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

    /**
     * @param {Object} raw
     * @returns {MessagesMessage}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} type Object type
     * @property {number} invitedBy ID of the inviter
     */
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

    /**
     * @param {Object} raw
     * @returns {MessagesUserXtrInvitedBy}
     */
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
    /**
     * @class
     * @property {string} type Item type
     * @property {number} sourceId Item source ID
     * @property {number} date Date when item has been added in Unixtime
     */
    constructor (
        readonly type: string,
        readonly sourceId: number,
        readonly date: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedNewsfeedItem}
     */
    static deserialize(raw: Object): NewsfeedNewsfeedItem {
        return new NewsfeedNewsfeedItem (
            raw['type'],
            raw['source_id'],
            raw['date']
        )
    }
}

export class NewsfeedItemAudio {
    /**
     * @class
     * @property {NewsfeedItemAudioAudio|undefined} audio
     * @property {number} postId Post ID
     */
    constructor (
        readonly audio: NewsfeedItemAudioAudio|undefined,
        readonly postId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemAudio}
     */
    static deserialize(raw: Object): NewsfeedItemAudio {
        return new NewsfeedItemAudio (
            raw['audio'] ? NewsfeedItemAudioAudio.deserialize(raw['audio']) : undefined,
            raw['post_id']
        )
    }
}

export class NewsfeedItemAudioAudio {
    /**
     * @class
     * @property {number} count Audios number
     * @property {AudioAudioFull|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: AudioAudioFull|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemAudioAudio}
     */
    static deserialize(raw: Object): NewsfeedItemAudioAudio {
        return new NewsfeedItemAudioAudio (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemFriend {
    /**
     * @class
     * @property {BaseUserId|undefined[]|undefined} friends
     */
    constructor (
        readonly friends: BaseUserId|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemFriend}
     */
    static deserialize(raw: Object): NewsfeedItemFriend {
        return new NewsfeedItemFriend (
            raw['friends'] ? raw['friends'].map(v => v ? BaseUserId.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemNote {
    /**
     * @class
     * @property {NewsfeedItemNoteNotes|undefined} notes
     */
    constructor (
        readonly notes: NewsfeedItemNoteNotes|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemNote}
     */
    static deserialize(raw: Object): NewsfeedItemNote {
        return new NewsfeedItemNote (
            raw['notes'] ? NewsfeedItemNoteNotes.deserialize(raw['notes']) : undefined
        )
    }
}

export class NewsfeedItemNoteNotes {
    /**
     * @class
     * @property {number} count Notes number
     * @property {NewsfeedNewsfeedNote|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedNote|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemNoteNotes}
     */
    static deserialize(raw: Object): NewsfeedItemNoteNotes {
        return new NewsfeedItemNoteNotes (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedNote.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemPhoto {
    /**
     * @class
     * @property {NewsfeedItemPhotoPhotos|undefined} photos
     * @property {number} postId Post ID
     */
    constructor (
        readonly photos: NewsfeedItemPhotoPhotos|undefined,
        readonly postId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemPhoto}
     */
    static deserialize(raw: Object): NewsfeedItemPhoto {
        return new NewsfeedItemPhoto (
            raw['photos'] ? NewsfeedItemPhotoPhotos.deserialize(raw['photos']) : undefined,
            raw['post_id']
        )
    }
}

export class NewsfeedItemPhotoPhotos {
    /**
     * @class
     * @property {number} count Photos number
     * @property {NewsfeedNewsfeedPhoto|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedPhoto|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemPhotoPhotos}
     */
    static deserialize(raw: Object): NewsfeedItemPhotoPhotos {
        return new NewsfeedItemPhotoPhotos (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemPhotoTag {
    /**
     * @class
     * @property {NewsfeedItemPhotoTagPhotoTags|undefined} photoTags
     * @property {number} postId Post ID
     */
    constructor (
        readonly photoTags: NewsfeedItemPhotoTagPhotoTags|undefined,
        readonly postId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemPhotoTag}
     */
    static deserialize(raw: Object): NewsfeedItemPhotoTag {
        return new NewsfeedItemPhotoTag (
            raw['photo_tags'] ? NewsfeedItemPhotoTagPhotoTags.deserialize(raw['photo_tags']) : undefined,
            raw['post_id']
        )
    }
}

export class NewsfeedItemPhotoTagPhotoTags {
    /**
     * @class
     * @property {number} count Tags number
     * @property {NewsfeedNewsfeedPhoto|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: NewsfeedNewsfeedPhoto|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemPhotoTagPhotoTags}
     */
    static deserialize(raw: Object): NewsfeedItemPhotoTagPhotoTags {
        return new NewsfeedItemPhotoTagPhotoTags (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? NewsfeedNewsfeedPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemTopic {
    /**
     * @class
     * @property {number} postId Topic post ID
     * @property {string} text Post text
     * @property {BaseCommentsInfo|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     */
    constructor (
        readonly postId: number,
        readonly text: string,
        readonly comments: BaseCommentsInfo|undefined,
        readonly likes: BaseLikesInfo|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemTopic}
     */
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
    /**
     * @class
     * @property {NewsfeedItemVideoVideo|undefined} video
     */
    constructor (
        readonly video: NewsfeedItemVideoVideo|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemVideo}
     */
    static deserialize(raw: Object): NewsfeedItemVideo {
        return new NewsfeedItemVideo (
            raw['video'] ? NewsfeedItemVideoVideo.deserialize(raw['video']) : undefined
        )
    }
}

export class NewsfeedItemVideoVideo {
    /**
     * @class
     * @property {number} count Tags number
     * @property {VideoVideo|undefined[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: VideoVideo|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemVideoVideo}
     */
    static deserialize(raw: Object): NewsfeedItemVideoVideo {
        return new NewsfeedItemVideoVideo (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedItemWallpost {
    /**
     * @class
     * @property {number} postId Post ID
     * @property {string} postType Post type
     * @property {string} text Post text
     * @property {WallWallpost|undefined[]|undefined} copyHistory
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     * @property {WallPostSource|undefined} postSource
     * @property {BaseCommentsInfo|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     * @property {BaseRepostsInfo|undefined} reposts
     */
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

    /**
     * @param {Object} raw
     * @returns {NewsfeedItemWallpost}
     */
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
    /**
     * @class
     * @property {number} id List ID
     * @property {string} title List title
     * @property {boolean} noReposts Information whether reposts hiding is enabled
     * @property {number[]|undefined} sourceIds
     */
    constructor (
        readonly id: number,
        readonly title: string,
        readonly noReposts: boolean,
        readonly sourceIds: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedList}
     */
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
    /**
     * @class
     * @property {number} id Note ID
     * @property {number} ownerId integer
     * @property {string} title Note title
     * @property {number} comments Comments Number
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string,
        readonly comments: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedNewsfeedNote}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     * @property {BaseLikes|undefined} likes
     * @property {BaseObjectCount|undefined} comments
     * @property {boolean} canComment Information whether current user can comment the photo
     * @property {boolean} canRepost Information whether current user can repost the photo
     */
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

    /**
     * @param {Object} raw
     * @returns {NewsfeedNewsfeedPhoto}
     */
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
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} uid Comment author's ID
     * @property {number} nid Note ID
     * @property {number} oid Note ID
     * @property {number} date Date when the comment has beed added in Unixtime
     * @property {string} message Comment text
     * @property {number} replyTo ID of replied comment
     */
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

    /**
     * @param {Object} raw
     * @returns {NotesNoteComment}
     */
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
    /**
     * @class
     * @property {number} id Note ID
     * @property {number} ownerId Note owner's ID
     * @property {number} comments Comments number
     * @property {boolean} canComment Information whether current user can comment the note
     * @property {number} date Date when the note has been created in Unixtime
     * @property {string} title Note title
     * @property {string} text Note text
     * @property {string} textWiki Note text in wiki format
     * @property {string} viewUrl URL of the page with note preview
     */
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

    /**
     * @param {Object} raw
     * @returns {NotesNote}
     */
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
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} ownerId Author ID
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {string} text Comment text
     * @property {PhotosPhoto|undefined} photo
     * @property {VideoVideo|undefined} video
     * @property {WallWallpost|undefined} post
     * @property {BoardTopic|undefined} topic
     */
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

    /**
     * @param {Object} raw
     * @returns {NotificationsNotificationsComment}
     */
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
    /**
     * @class
     * @property {string} type Notification type
     * @property {number} date Date when the event has been occured
     * @property {any} parent
     * @property {NotificationsFeedback|undefined} feedback
     * @property {NotificationsReply|undefined} reply
     */
    constructor (
        readonly type: string,
        readonly date: number,
        readonly parent: any,
        readonly feedback: NotificationsFeedback|undefined,
        readonly reply: NotificationsReply|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotificationsNotification}
     */
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
    /**
     * @class
     * @property {number} id Item ID
     * @property {number} toId Wall owner's ID
     * @property {number} fromId Reply author's ID
     * @property {string} text Reply text
     * @property {BaseLikesInfo|undefined} likes
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     */
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

    /**
     * @param {Object} raw
     * @returns {NotificationsFeedback}
     */
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
    /**
     * @class
     * @property {number} id Reply ID
     * @property {number} date Date when the reply has been created in Unixtime
     * @property {number} text Reply text
     */
    constructor (
        readonly id: number,
        readonly date: number,
        readonly text: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotificationsReply}
     */
    static deserialize(raw: Object): NotificationsReply {
        return new NotificationsReply (
            raw['id'],
            raw['date'],
            raw['text']
        )
    }
}

export class OauthError {
    /**
     * @class
     * @property {string} error Error type
     * @property {string} errorDescription Error description
     * @property {string} redirectUri URI for validation
     */
    constructor (
        readonly error: string,
        readonly errorDescription: string,
        readonly redirectUri: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OauthError}
     */
    static deserialize(raw: Object): OauthError {
        return new OauthError (
            raw['error'],
            raw['error_description'],
            raw['redirect_uri']
        )
    }
}

export class OrdersOrder {
    /**
     * @class
     * @property {number} id Order ID
     * @property {number} appOrderId App order ID
     * @property {string} status Order status
     * @property {number} userId User ID
     * @property {number} receiverId Receiver ID
     * @property {string} item Order item
     * @property {number} amount Amount
     * @property {number} date Date of creation in Unixtime
     * @property {number} transactionId Transaction ID
     * @property {number} cancelTransactionId Cancel transaction ID
     */
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

    /**
     * @param {Object} raw
     * @returns {OrdersOrder}
     */
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
    /**
     * @class
     * @property {OrdersAmountItem|undefined[]|undefined} amounts
     * @property {string} currency Currency name
     */
    constructor (
        readonly amounts: OrdersAmountItem|undefined[]|undefined,
        readonly currency: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersAmount}
     */
    static deserialize(raw: Object): OrdersAmount {
        return new OrdersAmount (
            raw['amounts'] ? raw['amounts'].map(v => v ? OrdersAmountItem.deserialize(v) : undefined) : undefined,
            raw['currency']
        )
    }
}

export class OrdersAmountItem {
    /**
     * @class
     * @property {string} votes Votes number
     * @property {number} amount Votes amount in user's currency
     * @property {string} description Amount description
     */
    constructor (
        readonly votes: string,
        readonly amount: number,
        readonly description: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersAmountItem}
     */
    static deserialize(raw: Object): OrdersAmountItem {
        return new OrdersAmountItem (
            raw['votes'],
            raw['amount'],
            raw['description']
        )
    }
}

export class PagesPrivacySettings {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesPrivacySettings}
     */
    static deserialize(raw: Object): PagesPrivacySettings {
        return new PagesPrivacySettings (
        )
    }
}

export class PagesWikipage {
    /**
     * @class
     * @property {number} id Page ID
     * @property {number} groupId Community ID
     * @property {string} title Page title
     * @property {PagesPrivacySettings|undefined} whoCanView View settings of the page
     * @property {PagesPrivacySettings|undefined} whoCanEdit Edit settings of the page
     * @property {number} views Views number
     * @property {number} editorId Last editor ID
     * @property {string} editorName Last editor name
     * @property {number} creatorId Page creator ID
     * @property {number} creatorName Page creator name
     */
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

    /**
     * @param {Object} raw
     * @returns {PagesWikipage}
     */
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
    /**
     * @class
     * @property {number} id Page ID
     * @property {number} groupId Community ID
     * @property {string} title Page title
     * @property {boolean} currentUserCanEdit Information whether current user can edit the page
     * @property {boolean} currentUserCanEditAccess Information whether current user can edit the page access settings
     * @property {PagesPrivacySettings|undefined} whoCanView View settings of the page
     * @property {PagesPrivacySettings|undefined} whoCanEdit Edit settings of the page
     * @property {number} edited Date when the page has been edited in Unixtime
     * @property {number} created Date when the page has been created in Unixtime
     * @property {number} views Views number
     * @property {number} editorId Last editor ID
     * @property {number} creatorId Page creator ID
     * @property {string} source Page content, wiki
     * @property {string} html Page content, HTML
     * @property {string} viewUrl URL of the page preview
     */
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

    /**
     * @param {Object} raw
     * @returns {PagesWikipageFull}
     */
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
    /**
     * @class
     * @property {number} id Version ID
     * @property {number} length Page size in bytes
     * @property {number} edited Date when the page has been edited in Unixtime
     * @property {number} editorId Last editor ID
     * @property {string} editorName Last editor name
     */
    constructor (
        readonly id: number,
        readonly length: number,
        readonly edited: number,
        readonly editorId: number,
        readonly editorName: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesWikipageVersion}
     */
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
    /**
     * @class
     * @property {number} id Photo album ID
     * @property {PhotosPhoto|undefined} thumb
     * @property {number} ownerId Album owner's ID
     * @property {string} title Photo album title
     * @property {string} description Photo album description
     * @property {number} created Date when the album has been created in Unixtime
     * @property {number} updated Date when the album has been updated last time in Unixtime
     * @property {number} size Photos number
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoAlbum}
     */
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
    /**
     * @class
     * @property {number} id Photo album ID
     * @property {number} thumbId Thumb photo ID
     * @property {string} thumbSrc URL of the thumb image
     * @property {number} ownerId Album owner's ID
     * @property {string} title Photo album title
     * @property {string} description Photo album description
     * @property {number} created Date when the album has been created in Unixtime
     * @property {number} updated Date when the album has been updated last time in Unixtime
     * @property {number} size Photos number
     * @property {string[]|undefined} privacyView
     * @property {string[]|undefined} privacyComment
     * @property {boolean} uploadByAdminsOnly Information whether only community administrators can upload photos
     * @property {boolean} commentsDisabled Information whether album comments are disabled
     * @property {boolean} canUpload Information whether current user can upload photo to the album
     * @property {boolean} thumbIsLast Information whether the album thumb is last photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoAlbumFull}
     */
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
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} fromId Author ID
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {string} text Comment text
     * @property {BaseLikesInfo|undefined} likes
     * @property {number} replyToUser Replied user ID
     * @property {number} replyToComment Replied comment ID
     * @property {WallCommentAttachment|undefined[]|undefined} attachments
     * @property {number} pid Photo ID
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosCommentXtrPid}
     */
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
    /**
     * @class
     * @property {number} gid Community ID
     * @property {number} server Upload server number
     * @property {string} photo Uploaded photo data
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly gid: number,
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosMarketAlbumUploadResponse}
     */
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
    /**
     * @class
     * @property {number} groupId Community ID
     * @property {number} server Upload server number
     * @property {string} photo Uploaded photo data
     * @property {string} hash Uploading hash
     * @property {string} cropData Crop data
     * @property {string} cropHash Crop hash
     */
    constructor (
        readonly groupId: number,
        readonly server: number,
        readonly photo: string,
        readonly hash: string,
        readonly cropData: string,
        readonly cropHash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosMarketUploadResponse}
     */
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
    /**
     * @class
     * @property {number} server Upload server number
     * @property {string} photo Uploaded photo data
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosMessageUploadResponse}
     */
    static deserialize(raw: Object): PhotosMessageUploadResponse {
        return new PhotosMessageUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}

export class PhotosOwnerUploadResponse {
    /**
     * @class
     * @property {number} server Upload server number
     * @property {string} photo Uploaded photo data
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosOwnerUploadResponse}
     */
    static deserialize(raw: Object): PhotosOwnerUploadResponse {
        return new PhotosOwnerUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}

export class PhotosPhoto {
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhoto}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     * @property {BaseLikes|undefined} likes
     * @property {BaseObjectCount|undefined} reposts
     * @property {BaseObjectCount|undefined} comments
     * @property {boolean} canComment Information whether current user can comment the photo
     * @property {BaseObjectCount|undefined} tags
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoFull}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     * @property {BaseLikes|undefined} likes
     * @property {BaseObjectCount|undefined} reposts
     * @property {BaseObjectCount|undefined} comments
     * @property {boolean} canComment
     * @property {BaseObjectCount|undefined} tags
     * @property {BasePropertyExists|undefined} hidden Returns if the photo is hidden above the wall
     * @property {number} realOffset Real position of the photo
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoFullXtrRealOffset}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     * @property {BasePropertyExists|undefined} hidden Returns if the photo is hidden above the wall
     * @property {number} realOffset Real position of the photo
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoXtrRealOffset}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} albumId Album ID
     * @property {number} ownerId Photo owner's ID
     * @property {number} userId ID of the user who have uploaded the photo
     * @property {PhotosPhotoSizes|undefined[]|undefined} sizes
     * @property {string} photo75 URL of image with 75 px width
     * @property {string} photo130 URL of image with 130 px width
     * @property {string} photo604 URL of image with 604 px width
     * @property {string} photo807 URL of image with 807 px width
     * @property {string} photo1280 URL of image with 1280 px width
     * @property {string} photo2560 URL of image with 2560 px width
     * @property {number} postId Post ID
     * @property {number} width Original photo width
     * @property {number} height Original photo height
     * @property {string} text Photo caption
     * @property {number} date Date when uploaded
     * @property {number} lat Latitude
     * @property {number} long Longitude
     * @property {string} accessKey Access key for the photo
     * @property {number} placerId ID of the tag creator
     * @property {number} tagCreated Date when tag has been added in Unixtime
     * @property {number} tagId Tag ID
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoXtrTagInfo}
     */
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
    /**
     * @class
     * @property {string} src URL of the image
     * @property {number} width Width in px
     * @property {number} height Height in px
     * @property {string} type Size type
     */
    constructor (
        readonly src: string,
        readonly width: number,
        readonly height: number,
        readonly type: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoSizes}
     */
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
    /**
     * @class
     * @property {number} userId Tagged user ID
     * @property {number} id Tag ID
     * @property {number} placerId ID of the tag creator
     * @property {string} taggedName Tag description
     * @property {number} date Date when tag has been added in Unixtime
     * @property {number} x Coordinate X of the left upper corner
     * @property {number} y Coordinate Y of the left upper corner
     * @property {number} x2 Coordinate X of the right lower corner
     * @property {number} y2 Coordinate Y of the right lower corner
     * @property {boolean} viewed Information whether the tag is reviewed
     */
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

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoTag}
     */
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
    /**
     * @class
     * @property {string} uploadUrl URL to upload photo
     * @property {number} albumId Album ID
     * @property {number} userId User ID
     */
    constructor (
        readonly uploadUrl: string,
        readonly albumId: number,
        readonly userId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoUpload}
     */
    static deserialize(raw: Object): PhotosPhotoUpload {
        return new PhotosPhotoUpload (
            raw['upload_url'],
            raw['album_id'],
            raw['user_id']
        )
    }
}

export class PhotosPhotoUploadResponse {
    /**
     * @class
     * @property {number} server Upload server number
     * @property {string} photosList Uploaded photos data
     * @property {number} aid Album ID
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly server: number,
        readonly photosList: string,
        readonly aid: number,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosPhotoUploadResponse}
     */
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
    /**
     * @class
     * @property {number} server Upload server number
     * @property {string} photo Uploaded photo data
     * @property {string} hash Uploading hash
     */
    constructor (
        readonly server: number,
        readonly photo: string,
        readonly hash: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosWallUploadResponse}
     */
    static deserialize(raw: Object): PhotosWallUploadResponse {
        return new PhotosWallUploadResponse (
            raw['server'],
            raw['photo'],
            raw['hash']
        )
    }
}

export class PlacesCheckin {
    /**
     * @class
     * @property {number} id Checkin ID
     * @property {number} userId User ID
     * @property {number} date Date when the checkin has been added in Unixtime
     * @property {number} latitude Place latitude
     * @property {number} longitude Place longitude
     * @property {number} placeId Place ID
     * @property {string} text Comment text
     * @property {number} distance Distance to the place
     * @property {string} placeTitle Place title
     * @property {number} placeCountry Country ID
     * @property {number} placeCity City ID
     * @property {string} placeType Place type
     * @property {string} placeIcon URL of the place's icon
     */
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

    /**
     * @param {Object} raw
     * @returns {PlacesCheckin}
     */
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
    /**
     * @class
     * @property {number} id Place ID
     * @property {string} title Place title
     * @property {number} latitude Place latitude
     * @property {number} longitude Place longitude
     * @property {number} created Date of the place creation in Unixtime
     * @property {string} icon URL of the place's icon
     * @property {number} checkins Checkins number
     * @property {string} type Place type
     * @property {number} country Country ID
     * @property {number} city City ID
     * @property {string} address Place address
     */
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

    /**
     * @param {Object} raw
     * @returns {PlacesPlaceMin}
     */
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
    /**
     * @class
     * @property {number} id Place ID
     * @property {string} title Place title
     * @property {number} latitude Place latitude
     * @property {number} longitude Place longitude
     * @property {number} created Date of the place creation in Unixtime
     * @property {string} icon URL of the place's icon
     * @property {number} checkins Checkins number
     * @property {string} type Place type
     * @property {number} country Country ID
     * @property {number} city City ID
     * @property {string} address Place address
     * @property {number} distance Distance to the place
     * @property {number} groupId Community ID
     * @property {string} groupPhoto URL of the community's photo
     */
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

    /**
     * @param {Object} raw
     * @returns {PlacesPlaceFull}
     */
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
    /**
     * @class
     * @property {number} id Place type ID
     * @property {number} title Place type title
     * @property {string} icon URL of the place's icon
     */
    constructor (
        readonly id: number,
        readonly title: number,
        readonly icon: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesTypes}
     */
    static deserialize(raw: Object): PlacesTypes {
        return new PlacesTypes (
            raw['id'],
            raw['title'],
            raw['icon']
        )
    }
}

export class PollsAnswer {
    /**
     * @class
     * @property {number} id Answer ID
     * @property {string} text Answer text
     * @property {number} votes Votes number
     * @property {number} rate Answer rate in percents
     */
    constructor (
        readonly id: number,
        readonly text: string,
        readonly votes: number,
        readonly rate: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsAnswer}
     */
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
    /**
     * @class
     * @property {number} id Poll ID
     * @property {number} ownerId Poll owner's ID
     * @property {number} created Date when poll has been created in Unixtime
     * @property {string} question Poll question
     * @property {string} votes Votes number
     * @property {number} answerId Current user's answer ID
     * @property {PollsAnswer|undefined[]|undefined} answers
     * @property {boolean} anonymous Information whether the pole is anonymous
     */
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

    /**
     * @param {Object} raw
     * @returns {PollsPoll}
     */
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
    /**
     * @class
     * @property {number} answerId Answer ID
     * @property {PollsVotersUsers|undefined} users
     */
    constructor (
        readonly answerId: number,
        readonly users: PollsVotersUsers|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsVoters}
     */
    static deserialize(raw: Object): PollsVoters {
        return new PollsVoters (
            raw['answer_id'],
            raw['users'] ? PollsVotersUsers.deserialize(raw['users']) : undefined
        )
    }
}

export class PollsVotersUsers {
    /**
     * @class
     * @property {number} count Votes number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsVotersUsers}
     */
    static deserialize(raw: Object): PollsVotersUsers {
        return new PollsVotersUsers (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class SearchHint {
    /**
     * @class
     * @property {string} type Object type
     * @property {string} section Section title
     * @property {string} description Object description
     * @property {boolean} global Information whether the object has been found globally
     * @property {GroupsGroup|undefined} group
     * @property {UsersUserMin|undefined} profile
     */
    constructor (
        readonly type: string,
        readonly section: string,
        readonly description: string,
        readonly global: boolean,
        readonly group: GroupsGroup|undefined,
        readonly profile: UsersUserMin|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SearchHint}
     */
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
    /**
     * @class
     * @property {number} uid User ID
     * @property {number} level Level
     */
    constructor (
        readonly uid: number,
        readonly level: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureLevel}
     */
    static deserialize(raw: Object): SecureLevel {
        return new SecureLevel (
            raw['uid'],
            raw['level']
        )
    }
}

export class SecureSmsNotification {
    /**
     * @class
     * @property {number} id Notification ID
     * @property {number} appId Application ID
     * @property {number} userId User ID
     * @property {number} date Date when message has been sent in Unixtime
     * @property {string} message Messsage text
     */
    constructor (
        readonly id: number,
        readonly appId: number,
        readonly userId: number,
        readonly date: number,
        readonly message: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureSmsNotification}
     */
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
    /**
     * @class
     * @property {BaseOkResponse|undefined} success Returns if successfully processed
     * @property {number} userId User ID
     * @property {number} date Date when access_token has been generated in Unixtime
     * @property {number} expire Date when access_token will expire in Unixtime
     */
    constructor (
        readonly success: BaseOkResponse|undefined,
        readonly userId: number,
        readonly date: number,
        readonly expire: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureTokenChecked}
     */
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
    /**
     * @class
     * @property {number} id Transaction ID
     * @property {number} uidFrom From ID
     * @property {number} uidTo To ID
     * @property {number} votes Votes number
     * @property {number} date Transaction date in Unixtime
     */
    constructor (
        readonly id: number,
        readonly uidFrom: number,
        readonly uidTo: number,
        readonly votes: number,
        readonly date: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureTransaction}
     */
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
    /**
     * @class
     * @property {string} day Day (YYYY-MM-DD)
     * @property {number} views Views number
     * @property {number} visitors Visitors number
     * @property {number} reach Total reach
     * @property {number} reachSubscribers Subscribers reach
     * @property {number} subscribed Number of users subscribed
     * @property {number} unsubscribed Number of users unsubscribed
     * @property {StatsSex|undefined[]|undefined} sex
     * @property {StatsAge|undefined[]|undefined} age
     * @property {StatsSexAge|undefined[]|undefined} sexAge
     * @property {StatsCity|undefined[]|undefined} cities
     * @property {StatsCountry|undefined[]|undefined} countries
     */
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

    /**
     * @param {Object} raw
     * @returns {StatsPeriod}
     */
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
    /**
     * @class
     * @property {number} visitors Visitors number
     * @property {string} value Age interval
     */
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsAge}
     */
    static deserialize(raw: Object): StatsAge {
        return new StatsAge (
            raw['visitors'],
            raw['value']
        )
    }
}

export class StatsCountry {
    /**
     * @class
     * @property {number} visitors Visitors number
     * @property {number} value Country ID
     * @property {string} code Country code
     * @property {string} name Country name
     */
    constructor (
        readonly visitors: number,
        readonly value: number,
        readonly code: string,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsCountry}
     */
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
    /**
     * @class
     * @property {number} visitors Visitors number
     * @property {number} value City ID
     * @property {string} name City name
     */
    constructor (
        readonly visitors: number,
        readonly value: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsCity}
     */
    static deserialize(raw: Object): StatsCity {
        return new StatsCity (
            raw['visitors'],
            raw['value'],
            raw['name']
        )
    }
}

export class StatsSex {
    /**
     * @class
     * @property {number} visitors Visitors number
     * @property {string} value Sex
     */
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsSex}
     */
    static deserialize(raw: Object): StatsSex {
        return new StatsSex (
            raw['visitors'],
            raw['value']
        )
    }
}

export class StatsSexAge {
    /**
     * @class
     * @property {number} visitors Visitors number
     * @property {string} value Sex and age interval
     */
    constructor (
        readonly visitors: number,
        readonly value: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsSexAge}
     */
    static deserialize(raw: Object): StatsSexAge {
        return new StatsSexAge (
            raw['visitors'],
            raw['value']
        )
    }
}

export class StatsWallpostStat {
    /**
     * @class
     * @property {number} reachSubscribers Subscribers reach
     * @property {number} reachTotal Total reach
     * @property {number} links Link clickthrough
     * @property {number} toGroup Clickthrough to community
     * @property {number} joinGroup People have joined the group
     * @property {number} report Reports number
     * @property {number} hide Hidings number
     * @property {number} unsubscribe Unsubscribed members
     */
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

    /**
     * @param {Object} raw
     * @returns {StatsWallpostStat}
     */
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
    /**
     * @class
     * @property {string} text Status text
     * @property {AudioAudioFull|undefined} audio
     */
    constructor (
        readonly text: string,
        readonly audio: AudioAudioFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatusStatus}
     */
    static deserialize(raw: Object): StatusStatus {
        return new StatusStatus (
            raw['text'],
            raw['audio'] ? AudioAudioFull.deserialize(raw['audio']) : undefined
        )
    }
}

export class UtilsDomainResolved {
    /**
     * @class
     * @property {string} type Object type
     * @property {number} objectId Object ID
     */
    constructor (
        readonly type: string,
        readonly objectId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UtilsDomainResolved}
     */
    static deserialize(raw: Object): UtilsDomainResolved {
        return new UtilsDomainResolved (
            raw['type'],
            raw['object_id']
        )
    }
}

export class UtilsLinkChecked {
    /**
     * @class
     * @property {string} status Link status
     * @property {string} link Link URL
     */
    constructor (
        readonly status: string,
        readonly link: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UtilsLinkChecked}
     */
    static deserialize(raw: Object): UtilsLinkChecked {
        return new UtilsLinkChecked (
            raw['status'],
            raw['link']
        )
    }
}

export class UsersUsersArray {
    /**
     * @class
     * @property {number} count Users number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersUsersArray}
     */
    static deserialize(raw: Object): UsersUsersArray {
        return new UsersUsersArray (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class UsersUserCounters {
    /**
     * @class
     * @property {number} albums Albums number
     * @property {number} videos Videos number
     * @property {number} audios Audios number
     * @property {number} notes Notes number
     * @property {number} photos Photos number
     * @property {number} groups Communities number
     * @property {number} gifts Gifts number
     * @property {number} friends Friends number
     * @property {number} onlineFriends Online friends number
     * @property {number} userPhotos Number of photos with user
     * @property {number} userVideos Number of videos with user
     * @property {number} followers Followers number
     * @property {number} subscriptions Subscriptions number
     * @property {number} pages Public pages number
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUserCounters}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUser}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {string} type Object type
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUserFullXtrType}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} type Object type
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUserXtrType}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     */
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersUserMin}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {AudioAudioFull|undefined} statusAudio
     */
    constructor (
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string,
        readonly deactivated: string,
        readonly hidden: number,
        readonly statusAudio: AudioAudioFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersUserBroadcast}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUserFull}
     */
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
    /**
     * @class
     * @property {number} groupId Community ID
     * @property {string} company Company name
     * @property {number} countryId Country ID
     * @property {number} cityId City ID
     * @property {number} from From year
     * @property {number} until Till year
     * @property {string} position Position
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersCareer}
     */
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
    /**
     * @class
     * @property {number} twitter
     * @property {number} facebook
     * @property {number} livejournal
     */
    constructor (
        readonly twitter: number,
        readonly facebook: number,
        readonly livejournal: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersExports}
     */
    static deserialize(raw: Object): UsersExports {
        return new UsersExports (
            raw['twitter'],
            raw['facebook'],
            raw['livejournal']
        )
    }
}

export class UsersMilitary {
    /**
     * @class
     * @property {string} unit Unit name
     * @property {number} unitId Unit ID
     * @property {number} countryId Country ID
     * @property {number} from From year
     * @property {number} until Till year
     */
    constructor (
        readonly unit: string,
        readonly unitId: number,
        readonly countryId: number,
        readonly from: number,
        readonly until: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersMilitary}
     */
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
    /**
     * @class
     * @property {number} id Relative ID
     * @property {string} type Relative type
     */
    constructor (
        readonly id: number,
        readonly type: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersRelative}
     */
    static deserialize(raw: Object): UsersRelative {
        return new UsersRelative (
            raw['id'],
            raw['type']
        )
    }
}

export class UsersUserLim {
    /**
     * @class
     * @property {number} id User ID
     * @property {string} photo URL of square photo of the user with 50 pixels in width
     * @property {string} name User name and last name
     * @property {string} nameGen User name in genitive declension
     */
    constructor (
        readonly id: number,
        readonly photo: string,
        readonly name: string,
        readonly nameGen: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersUserLim}
     */
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
    /**
     * @class
     * @property {number} time Last visit date (in Unix time)
     * @property {number} platform Type of the platform that used for the last authorization
     */
    constructor (
        readonly time: number,
        readonly platform: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersLastSeen}
     */
    static deserialize(raw: Object): UsersLastSeen {
        return new UsersLastSeen (
            raw['time'],
            raw['platform']
        )
    }
}

export class UsersUniversity {
    /**
     * @class
     * @property {number} id University ID
     * @property {number} country Country ID
     * @property {number} city City ID
     * @property {string} name University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} chair Chair ID
     * @property {string} chairName Chair name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus Education status
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUniversity}
     */
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
    /**
     * @class
     * @property {string} id School ID
     * @property {number} country Country ID
     * @property {number} city City ID
     * @property {string} name School name
     * @property {number} yearFrom Year the user started to study
     * @property {number} yearTo Year the user finished to study
     * @property {number} yearGraduated Graduation year
     * @property {string} schoolClass School class letter
     * @property {number} type School type ID
     * @property {string} typeStr School type name
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersSchool}
     */
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
    /**
     * @class
     * @property {PhotosPhoto|undefined} photo
     * @property {UsersCropPhotoCrop|undefined} crop
     * @property {UsersCropPhotoRect|undefined} rect
     */
    constructor (
        readonly photo: PhotosPhoto|undefined,
        readonly crop: UsersCropPhotoCrop|undefined,
        readonly rect: UsersCropPhotoRect|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersCropPhoto}
     */
    static deserialize(raw: Object): UsersCropPhoto {
        return new UsersCropPhoto (
            raw['photo'] ? PhotosPhoto.deserialize(raw['photo']) : undefined,
            raw['crop'] ? UsersCropPhotoCrop.deserialize(raw['crop']) : undefined,
            raw['rect'] ? UsersCropPhotoRect.deserialize(raw['rect']) : undefined
        )
    }
}

export class UsersCropPhotoCrop {
    /**
     * @class
     * @property {number} x Coordinate X of the left upper corner
     * @property {number} y Coordinate Y of the left upper corner
     * @property {number} x2 Coordinate X of the right lower corner
     * @property {number} y2 Coordinate Y of the right lower corner
     */
    constructor (
        readonly x: number,
        readonly y: number,
        readonly x2: number,
        readonly y2: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersCropPhotoCrop}
     */
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
    /**
     * @class
     * @property {number} x Coordinate X of the left upper corner
     * @property {number} y Coordinate Y of the left upper corner
     * @property {number} x2 Coordinate X of the right lower corner
     * @property {number} y2 Coordinate Y of the right lower corner
     */
    constructor (
        readonly x: number,
        readonly y: number,
        readonly x2: number,
        readonly y2: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersCropPhotoRect}
     */
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
    /**
     * @class
     * @property {string} type Type of occupation
     * @property {number} id ID of school, university, company group
     * @property {string} name Name of occupation
     */
    constructor (
        readonly type: string,
        readonly id: number,
        readonly name: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersOccupation}
     */
    static deserialize(raw: Object): UsersOccupation {
        return new UsersOccupation (
            raw['type'],
            raw['id'],
            raw['name']
        )
    }
}

export class UsersPersonal {
    /**
     * @class
     * @property {number} political User's political views
     * @property {string[]|undefined} langs
     * @property {string} religion User's religion
     * @property {string} inspiredBy User's inspired by
     * @property {number} peopleMain User's personal priority in people
     * @property {number} lifeMain User's personal priority in life
     * @property {number} smoking User's views on smoking
     * @property {number} alcohol User's views on alcohol
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersPersonal}
     */
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
    /**
     * @class
     * @property {number} id User ID
     * @property {string} firstName User first name
     * @property {string} lastName User last name
     * @property {string} deactivated Returns if a profile is deleted or blocked
     * @property {number} hidden Returns if a profile is hidden.
     * @property {BaseSex|undefined} sex User sex
     * @property {string} screenName Domain name of the user's page
     * @property {string} photo50 URL of square photo of the user with 50 pixels in width
     * @property {string} photo100 URL of square photo of the user with 100 pixels in width
     * @property {boolean} online Information whether the user is online
     * @property {boolean} onlineMobile Information whether the user is online in mobile site or application
     * @property {number} onlineApp Application ID
     * @property {string} nickname User nickname
     * @property {string} maidenName User maiden name
     * @property {string} domain Domain name of the user's page
     * @property {string} bdate User's date of birth
     * @property {BaseObject|undefined} city
     * @property {BaseCountry|undefined} country
     * @property {number} timezone User's timezone
     * @property {string} photo200 URL of square photo of the user with 200 pixels in width
     * @property {string} photoMax URL of square photo of the user with maximum width
     * @property {string} photo200Orig URL of user's photo with 200 pixels in width
     * @property {string} photo400Orig URL of user's photo with 400 pixels in width
     * @property {string} photoMaxOrig URL of user's photo of maximum size
     * @property {string} photoId ID of the user's main photo
     * @property {number} hasPhoto Information whether the user has main photo
     * @property {boolean} hasMobile Information whether the user specified his phone number
     * @property {boolean} isFriend Information whether the user is a friend of current user
     * @property {number} friendStatus Friend status for current user
     * @property {boolean} wallComments Information whether current user can comment wall posts
     * @property {boolean} canPost Information whether current user can post on the user's wall
     * @property {boolean} canSeeAllPosts Information whether current user can see other users' audio on the wall
     * @property {boolean} canSeeAudio Information whether current user can see the user's audio
     * @property {boolean} canWritePrivateMessage Information whether current user can write private message
     * @property {boolean} canSendFriendRequest Information whether current user can send a friend request
     * @property {string} mobilePhone Information whether current user can see
     * @property {string} homePhone User's mobile phone number
     * @property {string} skype User's Skype nickname
     * @property {string} facebook User's Facebook account
     * @property {string} facebookName User's Facebook name
     * @property {string} twitter User's Twitter account
     * @property {string} livejournal User's Livejournal account
     * @property {string} instagram User's Instagram account
     * @property {string} site User's website
     * @property {AudioAudioFull|undefined} statusAudio
     * @property {string} status User's status
     * @property {string} activity User's status
     * @property {UsersLastSeen|undefined} lastSeen
     * @property {UsersExports|undefined} exports
     * @property {UsersCropPhoto|undefined} cropPhoto
     * @property {boolean} verified Information whether the user is verified
     * @property {number} followersCount Number of user's followers
     * @property {boolean} blacklisted Information whether current user is in the requested user's blacklist.
     * @property {boolean} blacklistedByMe Information whether the requested user is in current user's blacklist
     * @property {boolean} isFavorite Information whether the requested user is in faves of current user
     * @property {boolean} isHiddenFromFeed Information whether the requested user is hidden from current user's newsfeed
     * @property {number} commonCount Number of common friends with current user
     * @property {UsersOccupation|undefined} occupation
     * @property {UsersCareer|undefined[]|undefined} career
     * @property {UsersMilitary|undefined[]|undefined} military
     * @property {number} university University ID
     * @property {string} universityName University name
     * @property {number} faculty Faculty ID
     * @property {string} facultyName Faculty name
     * @property {number} graduation Graduation year
     * @property {string} educationForm Education form
     * @property {string} educationStatus User's education status
     * @property {string} homeTown User hometown
     * @property {number} relation User relationship status
     * @property {UsersUserMin|undefined} relationPartner
     * @property {UsersPersonal|undefined} personal
     * @property {string} interests User's interests
     * @property {string} music User's favorite music
     * @property {string} activities User's activities
     * @property {string} movies User's favorite movies
     * @property {string} tv User's favorite tv shows
     * @property {string} books User's favorite books
     * @property {string} games User's favorite games
     * @property {UsersUniversity|undefined[]|undefined} universities
     * @property {UsersSchool|undefined[]|undefined} schools
     * @property {string} about About me field
     * @property {UsersRelative|undefined[]|undefined} relatives
     * @property {string} quotes Favorite quotes
     * @property {UsersUserCounters|undefined} counters
     */
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

    /**
     * @param {Object} raw
     * @returns {UsersUserXtrCounters}
     */
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
    /**
     * @class
     * @property {number} id Album ID
     * @property {number} ownerId Album owner's ID
     * @property {string} title Album title
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly title: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoVideoAlbum}
     */
    static deserialize(raw: Object): VideoVideoAlbum {
        return new VideoVideoAlbum (
            raw['id'],
            raw['owner_id'],
            raw['title']
        )
    }
}

export class VideoVideoAlbumFull {
    /**
     * @class
     * @property {number} id Album ID
     * @property {number} ownerId Album owner's ID
     * @property {string} title Album title
     * @property {number} count Total number of videos in album
     * @property {string} photo160 URL of the preview image with 160px in width
     * @property {string} photo320 URL of the preview image with 320px in width
     * @property {number} updatedTime Date when the album has been updated last time in Unixtime
     * @property {number} isSystem Information whether album is system
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoVideoAlbumFull}
     */
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
    /**
     * @class
     * @property {VideoCatElement|undefined[]|undefined} items
     * @property {string} next New value for _from_ parameter
     * @property {string} name Block name
     * @property {number} id Block ID
     * @property {string} view Type of view
     * @property {boolean} canHide Information whether the block can be hidden
     * @property {string} type Block type
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoCatBlock}
     */
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
    /**
     * @class
     * @property {number} id Element ID
     * @property {number} ownerId Element owner's ID
     * @property {string} title Element title
     * @property {string} type Element type
     * @property {string} description Element description
     * @property {number} duration Duration in seconds
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo160 URL of the preview image with 160 px in width
     * @property {string} photo320 URL of the preview image with 320 px in width
     * @property {string} photo640 URL of the preview image with 640 px in width
     * @property {string} photo800 URL of the preview image with 800 px in width
     * @property {number} date Date when the element has been created
     * @property {number} views Views number
     * @property {number} comments Comments number
     * @property {number} canAdd Information whether current user can add the video
     * @property {number} canEdit Information whether current user can edit the video
     * @property {number} isPrivate Information whether the video is private
     * @property {number} count Videos number (for album)
     * @property {number} updatedTime Date of last update (for album) in Unixtime
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoCatElement}
     */
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
    /**
     * @class
     * @property {string} uploadUrl URL for the video uploading
     * @property {number} videoId Video ID
     * @property {number} ownerId Video owner ID
     * @property {string} title Video title
     * @property {string} description Video description
     */
    constructor (
        readonly uploadUrl: string,
        readonly videoId: number,
        readonly ownerId: number,
        readonly title: string,
        readonly description: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoSaveResult}
     */
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
    /**
     * @class
     * @property {number} userId Tagged user ID
     * @property {number} id Tag ID
     * @property {number} placerId ID of the tag creator
     * @property {string} taggedName Tag description
     * @property {number} date Date when tag has been added in Unixtime
     * @property {boolean} viewed Information whether tha tag is reviewed
     */
    constructor (
        readonly userId: number,
        readonly id: number,
        readonly placerId: number,
        readonly taggedName: string,
        readonly date: number,
        readonly viewed: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoVideoTag}
     */
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
    /**
     * @class
     * @property {number} size Video size
     * @property {number} videoId Video ID
     */
    constructor (
        readonly size: number,
        readonly videoId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoUploadResponse}
     */
    static deserialize(raw: Object): VideoUploadResponse {
        return new VideoUploadResponse (
            raw['size'],
            raw['video_id']
        )
    }
}

export class VideoVideo {
    /**
     * @class
     * @property {number} id Video ID
     * @property {number} ownerId Video owner ID
     * @property {string} title Video title
     * @property {number} duration Video duration in seconds
     * @property {string} description Video description
     * @property {number} date Date when video has been uploaded in Unixtime
     * @property {number} views Number of views
     * @property {number} comments Number of comments
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo320 URL of the preview image with 320 px in width
     * @property {string} photo800 URL of the preview image with 800 px in width
     * @property {string} accessKey Video access key
     * @property {number} addingDate Date when the video has been added in Unixtime
     * @property {string} player URL of the page with a player that can be used to play the video in the browser.
     * @property {boolean} canEdit Information whether current user can edit the video
     * @property {boolean} canAdd Information whether current user can add the video
     * @property {BasePropertyExists|undefined} processing Returns if the video is processing
     * @property {BasePropertyExists|undefined} live Returns if the video is live translation
     * @property {VideoVideoFiles|undefined} files
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoVideo}
     */
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
    /**
     * @class
     * @property {string} mp240 URL of the mpeg4 file with 240p quality
     * @property {string} mp360 URL of the mpeg4 file with 360p quality
     * @property {string} mp480 URL of the mpeg4 file with 480p quality
     * @property {string} mp720 URL of the mpeg4 file with 720p quality
     * @property {string} mp1080 URL of the mpeg4 file with 1080p quality
     * @property {string} external URL of the external player
     */
    constructor (
        readonly mp240: string,
        readonly mp360: string,
        readonly mp480: string,
        readonly mp720: string,
        readonly mp1080: string,
        readonly external: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoVideoFiles}
     */
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
    /**
     * @class
     * @property {number} id Video ID
     * @property {number} ownerId Video owner ID
     * @property {string} title Video title
     * @property {number} duration Video duration in seconds
     * @property {string} description Video description
     * @property {number} date Date when video has been uploaded in Unixtime
     * @property {number} views Number of views
     * @property {number} comments Number of comments
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo320 URL of the preview image with 320 px in width
     * @property {string} photo800 URL of the preview image with 800 px in width
     * @property {string} accessKey Video access key
     * @property {number} addingDate Date when the video has been added in Unixtime
     * @property {string} player URL of the page with a player that can be used to play the video in the browser.
     * @property {boolean} canEdit Information whether current user can edit the video
     * @property {boolean} canAdd Information whether current user can add the video
     * @property {BasePropertyExists|undefined} processing Returns if the video is processing
     * @property {BasePropertyExists|undefined} live Returns if the video is live translation
     * @property {VideoVideoFiles|undefined} files
     * @property {number} placerId ID of the tag creator
     * @property {number} tagCreated Date when tag has been added in Unixtime
     * @property {number} tagId Tag ID
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoVideoTagInfo}
     */
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
    /**
     * @class
     * @property {number} id Video ID
     * @property {number} ownerId Video owner ID
     * @property {string} title Video title
     * @property {number} duration Video duration in seconds
     * @property {string} description Video description
     * @property {number} date Date when video has been uploaded in Unixtime
     * @property {number} views Number of views
     * @property {number} comments Number of comments
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo320 URL of the preview image with 320 px in width
     * @property {string} photo800 URL of the preview image with 800 px in width
     * @property {string} accessKey Video access key
     * @property {number} addingDate Date when the video has been added in Unixtime
     * @property {string} player URL of the page with a player that can be used to play the video in the browser.
     * @property {boolean} canEdit Information whether current user can edit the video
     * @property {boolean} canAdd Information whether current user can add the video
     * @property {BasePropertyExists|undefined} processing Returns if the video is processing
     * @property {BasePropertyExists|undefined} live Returns if the video is live translation
     * @property {VideoVideoFiles|undefined} files
     * @property {string[]|undefined} privacyView
     * @property {string[]|undefined} privacyComment
     * @property {boolean} canComment Information whether current user can comment the video
     * @property {boolean} canRepost Information whether current user can comment the video
     * @property {BaseLikes|undefined} likes
     * @property {boolean} repeat Information whether the video is repeated
     */
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

    /**
     * @param {Object} raw
     * @returns {VideoVideoFull}
     */
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
    /**
     * @class
     * @property {number} id Application ID
     * @property {string} name Application name
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo604 URL of the preview image with 604 px in width
     */
    constructor (
        readonly id: number,
        readonly name: string,
        readonly photo130: string,
        readonly photo604: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallAppPost}
     */
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
    /**
     * @class
     * @property {number} id Note ID
     * @property {number} ownerId Note owner's ID
     * @property {number} comments Comments number
     * @property {number} readComments Read comments number
     * @property {number} date Date when the note has been created in Unixtime
     * @property {string} title Note title
     * @property {string} viewUrl URL of the page with note preview
     */
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

    /**
     * @param {Object} raw
     * @returns {WallAttachedNote}
     */
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
    /**
     * @class
     * @property {PhotosPhoto|undefined} photo
     * @property {AudioAudioFull|undefined} audio
     * @property {VideoVideo|undefined} video
     * @property {DocsDoc|undefined} doc
     * @property {BaseLink|undefined} link
     * @property {WallAttachedNote|undefined} note
     * @property {PagesWikipageFull|undefined} page
     * @property {MarketMarketAlbum|undefined} marketMarketAlbum
     * @property {MarketMarketItem|undefined} market
     * @property {BaseSticker|undefined} sticker
     * @property {string} type Attachment type
     */
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

    /**
     * @param {Object} raw
     * @returns {WallCommentAttachment}
     */
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
    /**
     * @class
     * @property {number} id Graffiti ID
     * @property {number} ownerId Graffiti owner's ID
     * @property {string} photo200 URL of the preview image with 200 px in width
     * @property {string} photo586 URL of the preview image with 586 px in width
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly photo200: string,
        readonly photo586: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGraffiti}
     */
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
    /**
     * @class
     * @property {string} type Type of post source
     * @property {string} platform Platform name
     * @property {string} data Additional data
     * @property {string} url URL to an external site used to publish the post
     */
    constructor (
        readonly type: string,
        readonly platform: string,
        readonly data: string,
        readonly url: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallPostSource}
     */
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
    /**
     * @class
     * @property {number} id Photo ID
     * @property {number} ownerId Photo owner's ID
     * @property {string} photo130 URL of the preview image with 130 px in width
     * @property {string} photo604 URL of the preview image with 604 px in width
     */
    constructor (
        readonly id: number,
        readonly ownerId: number,
        readonly photo130: string,
        readonly photo604: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallPostedPhoto}
     */
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
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallPostType}
     */
    static deserialize(raw: Object): WallPostType {
        return new WallPostType (
        )
    }
}

export class WallWallComment {
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} fromId Author ID
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {string} text Comment text
     * @property {BaseLikesInfo|undefined} likes
     * @property {number} replyToUser Replied user ID
     * @property {number} replyToComment Replied comment ID
     * @property {WallCommentAttachment|undefined[]|undefined} attachments
     * @property {number} realOffset Real position of the comment
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallComment}
     */
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
    /**
     * @class
     * @property {number} id Post ID
     * @property {number} fromId Post author ID
     * @property {number} ownerId Wall owner's ID
     * @property {number} date Date of publishing in Unixtime
     * @property {WallPostType|undefined} postType
     * @property {string} text Post text
     * @property {number} signerId Post signer ID
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     * @property {WallPostSource|undefined} postSource
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallpost}
     */
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
    /**
     * @class
     * @property {number} id Post ID
     * @property {number} fromId Post author ID
     * @property {number} toId Post addresse
     * @property {number} date Date of publishing in Unixtime
     * @property {WallPostType|undefined} postType
     * @property {string} text Post text
     * @property {number} canDelete Information whether current user can delete the post
     * @property {number} signerId Post signer ID
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     * @property {WallPostSource|undefined} postSource
     * @property {BaseCommentsInfo|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     * @property {BaseRepostsInfo|undefined} reposts
     * @property {number} copyOwnerId Source post owner's ID
     * @property {number} copyPostId Source post ID
     * @property {string} copyText Repost comment
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallpostAttached}
     */
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
    /**
     * @class
     * @property {PhotosPhoto|undefined} photo
     * @property {WallPostedPhoto|undefined} postedPhoto
     * @property {AudioAudioFull|undefined} audio
     * @property {VideoVideo|undefined} video
     * @property {DocsDoc|undefined} doc
     * @property {BaseLink|undefined} link
     * @property {WallGraffiti|undefined} graffiti
     * @property {WallAttachedNote|undefined} note
     * @property {WallAppPost|undefined} app
     * @property {PollsPoll|undefined} poll
     * @property {PagesWikipageFull|undefined} page
     * @property {PhotosPhotoAlbum|undefined} album
     * @property {string[]|undefined} photosList
     * @property {MarketMarketAlbum|undefined} marketMarketAlbum
     * @property {MarketMarketItem|undefined} market
     * @property {string} type Attachment type
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallpostAttachment}
     */
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
    /**
     * @class
     * @property {number} id Post ID
     * @property {number} fromId Post author ID
     * @property {number} toId Wall owner's ID
     * @property {number} date Date of publishing in Unixtime
     * @property {number} postId wall post ID (if comment)
     * @property {WallPostType|undefined} postType
     * @property {string} text Post text
     * @property {number} signerId Post signer ID
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     * @property {WallPostSource|undefined} postSource
     * @property {BaseCommentsInfo|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     * @property {BaseRepostsInfo|undefined} reposts
     * @property {number} copyOwnerId ID of the source post owner
     * @property {number} copyPostId ID of the source post
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallpostToId}
     */
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
    /**
     * @class
     * @property {number} id Post ID
     * @property {number} fromId Post author ID
     * @property {number} ownerId Wall owner's ID
     * @property {number} date Date of publishing in Unixtime
     * @property {WallPostType|undefined} postType
     * @property {string} text Post text
     * @property {number} signerId Post signer ID
     * @property {WallWallpostAttachment|undefined[]|undefined} attachments
     * @property {BaseGeo|undefined} geo
     * @property {WallPostSource|undefined} postSource
     * @property {WallWallpost|undefined[]|undefined} copyHistory
     * @property {number} canEdit Information whether current user can edit the post
     * @property {number} createdBy Post creator ID (if post still can be edited)
     * @property {number} canDelete Information whether current user can delete the post
     * @property {number} canPin Information whether current user can pin the post
     * @property {number} isPinned Information whether the post is pinned
     * @property {BaseCommentsInfo|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     * @property {BaseRepostsInfo|undefined} reposts
     */
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

    /**
     * @param {Object} raw
     * @returns {WallWallpostFull}
     */
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
    /**
     * @class
     * @property {number} id Comment ID
     * @property {number} fromId Comment author ID
     * @property {number} toId Wall owner
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {UsersUserFull|undefined} user
     * @property {number} postType Post type
     * @property {string} text Comment text
     * @property {number} canDelete Information whether current user can delete the comment
     * @property {WidgetsCommentMedia|undefined} media
     * @property {WallCommentAttachment|undefined[]|undefined} attachments
     * @property {WallPostSource|undefined} postSource
     * @property {WidgetsCommentReplies|undefined} comments
     * @property {BaseLikesInfo|undefined} likes
     * @property {BaseRepostsInfo|undefined} reposts
     */
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

    /**
     * @param {Object} raw
     * @returns {WidgetsWidgetComment}
     */
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
    /**
     * @class
     * @property {string} type Media type
     * @property {number} ownerId Media owner's ID
     * @property {number} itemId Media item ID
     * @property {string} thumbSrc URL of the preview image (type=photo only)
     */
    constructor (
        readonly type: string,
        readonly ownerId: number,
        readonly itemId: number,
        readonly thumbSrc: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsCommentMedia}
     */
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
    /**
     * @class
     * @property {number} count Comments number
     * @property {number} canPost Information whether current user can comment the post
     * @property {WidgetsCommentRepliesItem|undefined[]|undefined} replies
     */
    constructor (
        readonly count: number,
        readonly canPost: number,
        readonly replies: WidgetsCommentRepliesItem|undefined[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsCommentReplies}
     */
    static deserialize(raw: Object): WidgetsCommentReplies {
        return new WidgetsCommentReplies (
            raw['count'],
            raw['can_post'],
            raw['replies'] ? raw['replies'].map(v => v ? WidgetsCommentRepliesItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class WidgetsCommentRepliesItem {
    /**
     * @class
     * @property {number} cid Comment ID
     * @property {number} uid User ID
     * @property {number} date Date when the comment has been added in Unixtime
     * @property {string} text Comment text
     * @property {WidgetsWidgetLikes|undefined} likes
     * @property {UsersUserFull|undefined} user
     */
    constructor (
        readonly cid: number,
        readonly uid: number,
        readonly date: number,
        readonly text: string,
        readonly likes: WidgetsWidgetLikes|undefined,
        readonly user: UsersUserFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsCommentRepliesItem}
     */
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
    /**
     * @class
     * @property {number} count Likes number
     */
    constructor (
        readonly count: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsWidgetLikes}
     */
    static deserialize(raw: Object): WidgetsWidgetLikes {
        return new WidgetsWidgetLikes (
            raw['count']
        )
    }
}

export class WidgetsWidgetPage {
    /**
     * @class
     * @property {number} id Page ID
     * @property {string} title Page title
     * @property {string} description Page description
     * @property {string} photo URL of the preview image
     * @property {string} url Page absolute URL
     * @property {BaseObjectCount|undefined} likes
     * @property {BaseObjectCount|undefined} comments
     * @property {number} date Date when widgets on the page has been initialized firstly in Unixtime
     * @property {string} pageId page_id parameter value
     */
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

    /**
     * @param {Object} raw
     * @returns {WidgetsWidgetPage}
     */
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