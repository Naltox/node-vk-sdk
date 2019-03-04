export interface AccountAccountCounters {
    /**
     * New friends requests number
     */
    friends: number,
    /**
     * New messages number
     */
    messages: number,
    /**
     * New photo tags number
     */
    photos: number,
    /**
     * New video tags number
     */
    videos: number,
    /**
     * New gifts number
     */
    gifts: number,
    /**
     * New events number
     */
    events: number,
    /**
     * New groups number
     */
    groups: number,
    /**
     * New notifications number
     */
    notifications: number,
    /**
     * New app requests number
     */
    app_requests: number,
    /**
     * New friends suggestions number
     */
    friends_suggestions: number
}

export interface AccountLookupResult {
    /**
     * 
     */
    found: AccountUserXtrContact[],
    /**
     * 
     */
    other: AccountOtherContact[]
}

export type AccountNameRequestStatus = string

export interface AccountNameRequest {
    /**
     * Request ID needed to cancel the request
     */
    id: number,
    /**
     * 
     */
    status: AccountNameRequestStatus,
    /**
     * First name in request
     */
    first_name: string,
    /**
     * Last name in request
     */
    last_name: string
}

export interface AccountOffer {
    /**
     * Offer ID
     */
    id: number,
    /**
     * Offer title
     */
    title: string,
    /**
     * Instruction how to process the offer
     */
    instruction: string,
    /**
     * Instruction how to process the offer (HTML format)
     */
    instruction_html: string,
    /**
     * Offer short description
     */
    short_description: string,
    /**
     * Offer description
     */
    description: string,
    /**
     * URL of the preview image
     */
    img: string,
    /**
     * Offer tag
     */
    tag: string,
    /**
     * Offer price
     */
    price: number
}

export type AccountOnoffOptions = string

export interface AccountOtherContact {
    /**
     * Contact
     */
    contact: string,
    /**
     * Mutual friends count
     */
    common_count: number
}

export interface AccountPushConversations {
    /**
     * Items count
     */
    count: number,
    /**
     * 
     */
    items: AccountPushConversationsItem[]
}

export interface AccountPushConversationsItem {
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * Information whether the sound are enabled
     */
    sound: BaseBoolInt,
    /**
     * Time until that notifications are disabled in seconds
     */
    disabled_until: number
}

export type AccountPushParamsMode = string

export type AccountPushParamsSettings = string

export interface AccountPushParams {
    /**
     * 
     */
    msg: AccountPushParamsMode[],
    /**
     * 
     */
    chat: AccountPushParamsMode[],
    /**
     * 
     */
    friend: AccountOnoffOptions[],
    /**
     * 
     */
    friend_found: AccountOnoffOptions[],
    /**
     * 
     */
    friend_accepted: AccountOnoffOptions[],
    /**
     * 
     */
    reply: AccountOnoffOptions[],
    /**
     * 
     */
    comment: AccountPushParamsSettings[],
    /**
     * 
     */
    mention: AccountPushParamsSettings[],
    /**
     * 
     */
    like: AccountPushParamsSettings[],
    /**
     * 
     */
    repost: AccountPushParamsSettings[],
    /**
     * 
     */
    wall_post: AccountOnoffOptions[],
    /**
     * 
     */
    wall_publish: AccountOnoffOptions[],
    /**
     * 
     */
    group_invite: AccountOnoffOptions[],
    /**
     * 
     */
    group_accepted: AccountOnoffOptions[],
    /**
     * 
     */
    event_soon: AccountOnoffOptions[],
    /**
     * 
     */
    photos_tag: AccountPushParamsSettings[],
    /**
     * 
     */
    app_request: AccountOnoffOptions[],
    /**
     * 
     */
    sdk_open: AccountOnoffOptions[],
    /**
     * 
     */
    new_post: AccountOnoffOptions[],
    /**
     * 
     */
    birthday: AccountOnoffOptions[]
}

export interface AccountPushSettings {
    /**
     * Information whether notifications are disabled
     */
    disabled: BaseBoolInt,
    /**
     * Time until that notifications are disabled in Unixtime
     */
    disabled_until: number,
    /**
     * 
     */
    conversations: AccountPushConversations,
    /**
     * 
     */
    settings: AccountPushParams
}

export interface AccountUserSettings {
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * Information whether relation status is pending
     */
    relation_pending: number,
    /**
     * 
     */
    relation_requests: UsersUserMin[],
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility: number,
    /**
     * User's hometown
     */
    home_town: string,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * 
     */
    city: BaseObject,
    /**
     * User status
     */
    status: string,
    /**
     * User phone number with some hidden digits
     */
    phone: string,
    /**
     * 
     */
    name_request: AccountNameRequest
}

export interface AccountUserXtrContact {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * 
     */
    contact: string,
    /**
     * 
     */
    request_sent: number,
    /**
     * 
     */
    sort_num: number
}

export interface AccountInfo {
    /**
     * Country code
     */
    country: string,
    /**
     * Information whether HTTPS-only is enabled
     */
    https_required: BaseBoolInt,
    /**
     * Information whether only owners posts should be shown
     */
    own_posts_default: BaseBoolInt,
    /**
     * Information whether wall comments should be hidden
     */
    no_wall_replies: BaseBoolInt,
    /**
     * Information whether user has been processed intro
     */
    intro: BaseBoolInt,
    /**
     * Language ID
     */
    lang: number,
    /**
     * Two factor authentication is enabled
     */
    twoFaRequired: BaseBoolInt
}

export type AdsAccessRole = string

export interface AdsAccesses {
    /**
     * Client ID
     */
    client_id: string,
    /**
     * 
     */
    role: AdsAccessRole
}

export type AdsAccountType = string

export interface AdsAccount {
    /**
     * Account ID
     */
    account_id: number,
    /**
     * 
     */
    account_type: AdsAccountType,
    /**
     * Information whether account is active
     */
    account_status: BaseBoolInt,
    /**
     * 
     */
    access_role: AdsAccessRole
}

export type AdsAdCostType = number

export type AdsAdStatus = number

export type AdsAdApproved = number

export interface AdsAd {
    /**
     * Ad ID
     */
    id: number,
    /**
     * Campaign ID
     */
    campaign_id: number,
    /**
     * Ad format
     */
    ad_format: number,
    /**
     * 
     */
    cost_type: AdsAdCostType,
    /**
     * Cost of a click, kopecks
     */
    cpc: number,
    /**
     * Cost of 1000 impressions, kopecks
     */
    cpm: number,
    /**
     * Impressions limit
     */
    impressions_limit: number,
    /**
     * Information whether impressions are limited
     */
    impressions_limited: BaseBoolInt,
    /**
     * Ad platform
     */
    ad_platform: any,
    /**
     * Total limit
     */
    all_limit: number,
    /**
     * Category ID
     */
    category1_id: number,
    /**
     * Additional category ID
     */
    category2_id: number,
    /**
     * 
     */
    status: AdsAdStatus,
    /**
     * Ad title
     */
    name: string,
    /**
     * 
     */
    approved: AdsAdApproved,
    /**
     * Information whether the ad is a video
     */
    video: BaseBoolInt,
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_medical: BaseBoolInt,
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_specialist: BaseBoolInt,
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_supplements: BaseBoolInt
}

export type AdsAdLayoutCostType = number

export interface AdsAdLayout {
    /**
     * Ad ID
     */
    id: number,
    /**
     * Campaign ID
     */
    campaign_id: number,
    /**
     * Ad format
     */
    ad_format: number,
    /**
     * 
     */
    cost_type: AdsAdLayoutCostType,
    /**
     * Information whether the ad is a video
     */
    video: BaseBoolInt,
    /**
     * Ad title
     */
    title: string,
    /**
     * Ad description
     */
    description: string,
    /**
     * URL of advertised object
     */
    link_url: string,
    /**
     * Domain of advertised object
     */
    link_domain: string,
    /**
     * link to preview an ad as it is shown on the website
     */
    preview_link: any,
    /**
     * Image URL
     */
    image_src: number,
    /**
     * URL of the preview image in double size
     */
    image_src_2x: number
}

export type AdsCampaignType = string

export type AdsCampaignStatus = number

export interface AdsCampaign {
    /**
     * Campaign ID
     */
    id: number,
    /**
     * 
     */
    type: AdsCampaignType,
    /**
     * Campaign title
     */
    name: string,
    /**
     * 
     */
    status: AdsCampaignStatus,
    /**
     * Campaign's day limit, rubles
     */
    day_limit: string,
    /**
     * Campaign's total limit, rubles
     */
    all_limit: string,
    /**
     * Campaign start time, as Unixtime
     */
    start_time: number,
    /**
     * Campaign stop time, as Unixtime
     */
    stop_time: number
}

export interface AdsCategory {
    /**
     * Category ID
     */
    id: number,
    /**
     * Category name
     */
    name: string,
    /**
     * 
     */
    subcategories: BaseObjectWithName[]
}

export interface AdsClient {
    /**
     * Client ID
     */
    id: number,
    /**
     * Client name
     */
    name: string,
    /**
     * Client's day limit, rubles
     */
    day_limit: string,
    /**
     * Client's total limit, rubles
     */
    all_limit: string
}

export type AdsCriteriaSex = number

export interface AdsCriteria {
    /**
     * 
     */
    sex: AdsCriteriaSex,
    /**
     * Age from
     */
    age_from: number,
    /**
     * Age to
     */
    age_to: number,
    /**
     * Days to birthday
     */
    birthday: number,
    /**
     * Country ID
     */
    country: number,
    /**
     * Cities IDs
     */
    cities: string,
    /**
     * Cities IDs to except
     */
    cities_not: string,
    /**
     * Relationship statuses
     */
    statuses: string,
    /**
     * Communities IDs
     */
    groups: string,
    /**
     * Apps IDs
     */
    apps: string,
    /**
     * Apps IDs to except
     */
    apps_not: string,
    /**
     * Districts IDs
     */
    districts: string,
    /**
     * Stations IDs
     */
    stations: string,
    /**
     * Streets IDs
     */
    streets: string,
    /**
     * Schools IDs
     */
    schools: string,
    /**
     * Positions IDs
     */
    positions: string,
    /**
     * Religions IDs
     */
    religions: string,
    /**
     * Interests
     */
    interests: string,
    /**
     * Interests categories IDs
     */
    interest_categories: string,
    /**
     * Devices
     */
    user_devices: string,
    /**
     * Operating systems
     */
    user_os: string,
    /**
     * Browsers
     */
    user_browsers: string,
    /**
     * Retargeting groups IDs
     */
    retargeting_groups: string,
    /**
     * Retargeting groups IDs to except
     */
    retargeting_groups_not: string,
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying: BaseBoolInt,
    /**
     * Travellers only
     */
    travellers: BasePropertyExists,
    /**
     * School graduation year from
     */
    school_from: number,
    /**
     * School graduation year to
     */
    school_to: number,
    /**
     * University graduation year from
     */
    uni_from: number,
    /**
     * University graduation year to
     */
    uni_to: number
}

export interface AdsDemoStats {
    /**
     * Object ID
     */
    id: number,
    /**
     * 
     */
    type: AdsObjectType,
    /**
     * 
     */
    stats: AdsDemostatsFormat
}

export interface AdsDemostatsFormat {
    /**
     * Day as YYYY-MM-DD
     */
    day: string,
    /**
     * Month as YYYY-MM
     */
    month: string,
    /**
     * 1 if period=overall
     */
    overall: number,
    /**
     * 
     */
    sex: AdsStatsSex[],
    /**
     * 
     */
    age: AdsStatsAge[],
    /**
     * 
     */
    sex_age: AdsStatsSexAge[],
    /**
     * 
     */
    cities: AdsStatsCities[]
}

export interface AdsFloodStats {
    /**
     * Requests left
     */
    left: number,
    /**
     * Time to refresh in seconds
     */
    refresh: number
}

export interface AdsLinkStatus {
    /**
     * Link status
     */
    status: string,
    /**
     * Reject reason
     */
    description: string,
    /**
     * URL
     */
    redirect_url: string
}

export type AdsObjectType = string

export interface AdsParagraphs {
    /**
     * Rules paragraph
     */
    paragraph: string
}

export interface AdsRejectReason {
    /**
     * Comment text
     */
    comment: string,
    /**
     * 
     */
    rules: AdsRules[]
}

export interface AdsRules {
    /**
     * Comment
     */
    title: string,
    /**
     * 
     */
    paragraphs: AdsParagraphs[]
}

export interface AdsStats {
    /**
     * Object ID
     */
    id: number,
    /**
     * 
     */
    type: AdsObjectType,
    /**
     * 
     */
    stats: AdsStatsFormat
}

export interface AdsStatsFormat {
    /**
     * Day as YYYY-MM-DD
     */
    day: string,
    /**
     * Month as YYYY-MM
     */
    month: string,
    /**
     * 1 if period=overall
     */
    overall: number,
    /**
     * Spent funds
     */
    spent: number,
    /**
     * Impressions number
     */
    impressions: number,
    /**
     * Clicks number
     */
    clicks: number,
    /**
     * Reach 
     */
    reach: number,
    /**
     * Video views number
     */
    video_views: number,
    /**
     * Video views (half of video)
     */
    video_views_half: number,
    /**
     * Video views (full video)
     */
    video_views_full: number,
    /**
     * Clickthoughs to the advertised site
     */
    video_clicks_site: number,
    /**
     * Events number
     */
    join_rate: number
}

export interface AdsStatsAge {
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Age interval
     */
    value: string
}

export interface AdsStatsCities {
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * City ID
     */
    value: number,
    /**
     * City name
     */
    name: string
}

export type AdsStatsSexValue = string

export interface AdsStatsSex {
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * 
     */
    value: AdsStatsSexValue
}

export interface AdsStatsSexAge {
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Sex and age interval
     */
    value: string
}

export interface AdsTargStats {
    /**
     * Audience
     */
    audience_count: number,
    /**
     * Recommended CPC value
     */
    recommended_cpc: number,
    /**
     * Recommended CPM value
     */
    recommended_cpm: number
}

export interface AdsTargSuggestions {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object name
     */
    name: string
}

export interface AdsTargSuggestionsRegions {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object name
     */
    name: string,
    /**
     * Object type
     */
    type: string
}

export interface AdsTargSuggestionsCities {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object name
     */
    name: string,
    /**
     * Parent object
     */
    parent: string
}

export type AdsTargSuggestionsSchoolsType = string

export interface AdsTargSuggestionsSchools {
    /**
     * School ID
     */
    id: number,
    /**
     * School title
     */
    name: string,
    /**
     * Full school title
     */
    desc: string,
    /**
     * 
     */
    type: AdsTargSuggestionsSchoolsType,
    /**
     * City name
     */
    parent: string
}

export interface AdsTargSettings {
    /**
     * Ad ID
     */
    id: number,
    /**
     * Campaign ID
     */
    campaign_id: number,
    /**
     * 
     */
    sex: AdsCriteriaSex,
    /**
     * Age from
     */
    age_from: number,
    /**
     * Age to
     */
    age_to: number,
    /**
     * Days to birthday
     */
    birthday: number,
    /**
     * Country ID
     */
    country: number,
    /**
     * Cities IDs
     */
    cities: string,
    /**
     * Cities IDs to except
     */
    cities_not: string,
    /**
     * Relationship statuses
     */
    statuses: string,
    /**
     * Communities IDs
     */
    groups: string,
    /**
     * Apps IDs
     */
    apps: string,
    /**
     * Apps IDs to except
     */
    apps_not: string,
    /**
     * Districts IDs
     */
    districts: string,
    /**
     * Stations IDs
     */
    stations: string,
    /**
     * Streets IDs
     */
    streets: string,
    /**
     * Schools IDs
     */
    schools: string,
    /**
     * Positions IDs
     */
    positions: string,
    /**
     * Religions IDs
     */
    religions: string,
    /**
     * Interests
     */
    interests: string,
    /**
     * Interests categories IDs
     */
    interest_categories: string,
    /**
     * Devices
     */
    user_devices: string,
    /**
     * Operating systems
     */
    user_os: string,
    /**
     * Browsers
     */
    user_browsers: string,
    /**
     * Retargeting groups IDs
     */
    retargeting_groups: string,
    /**
     * Retargeting groups IDs to except
     */
    retargeting_groups_not: string,
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying: BaseBoolInt,
    /**
     * Travellers only
     */
    travellers: BasePropertyExists,
    /**
     * School graduation year from
     */
    school_from: number,
    /**
     * School graduation year to
     */
    school_to: number,
    /**
     * University graduation year from
     */
    uni_from: number,
    /**
     * University graduation year to
     */
    uni_to: number
}

export interface AdsTargetGroup {
    /**
     * Group ID
     */
    id: number,
    /**
     * Group name
     */
    name: string,
    /**
     * Site domain
     */
    domain: string,
    /**
     * Audience
     */
    audience_count: number,
    /**
     * Number of days for user to be in group
     */
    lifetime: number,
    /**
     * Pixel code
     */
    pixel: string
}

export interface AdsUsers {
    /**
     * User ID
     */
    user_id: number,
    /**
     * 
     */
    accesses: AdsAccesses[]
}

export interface AdsPostStats {
    /**
     * Object ID
     */
    ad_id: number,
    /**
     * Subscribers reach
     */
    reach_subscribers: number,
    /**
     * Total reach
     */
    reach_total: number,
    /**
     * Link clickthrough
     */
    links: number,
    /**
     * Clickthrough to community
     */
    to_group: number,
    /**
     * People have joined the group
     */
    join_group: number,
    /**
     * Reports number
     */
    report: number,
    /**
     * Hidings number
     */
    hide: number,
    /**
     * Unsubscribed members
     */
    unsubscribe: number
}

export type AppsAppType = string

export type AppsAppLeaderboardType = number

export interface AppsApp {
    /**
     * Application ID
     */
    id: number,
    /**
     * Application title
     */
    title: string,
    /**
     * Screen name
     */
    screen_name: string,
    /**
     * Application description
     */
    description: string,
    /**
     * URL of the app icon with 279 px in width
     */
    icon_278: string,
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150: string,
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139: string,
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75: string,
    /**
     * URL of the app banner with 560 px in width
     */
    banner_560: string,
    /**
     * URL of the app banner with 1120 px in width
     */
    banner_1120: string,
    /**
     * 
     */
    type: AppsAppType,
    /**
     * Application section name
     */
    section: string,
    /**
     * Application author's URL
     */
    author_url: string,
    /**
     * Application author's ID
     */
    author_id: number,
    /**
     * Official community's ID
     */
    author_group: number,
    /**
     * Members number
     */
    members_count: number,
    /**
     * Date when the application has been published in Unixtime
     */
    published_date: number,
    /**
     * Catalog position
     */
    catalog_position: number,
    /**
     * 
     */
    screenshots: PhotosPhoto[],
    /**
     * Information whether the application is multilanguage
     */
    international: number,
    /**
     * 
     */
    leaderboard_type: AppsAppLeaderboardType,
    /**
     * Genre ID
     */
    genre_id: number,
    /**
     * Genre name
     */
    genre: string,
    /**
     * Application ID in store
     */
    platform_id: number,
    /**
     * Information whether application is in mobile catalog
     */
    is_in_catalog: number
}

export interface AppsLeaderboard {
    /**
     * Score number
     */
    score: number,
    /**
     * Level
     */
    level: number,
    /**
     * Points number
     */
    points: number,
    /**
     * User ID
     */
    user_id: number
}

export interface AudioAudio {
    /**
     * Audio ID
     */
    id: number,
    /**
     * Audio owner's ID
     */
    owner_id: number,
    /**
     * Artist name
     */
    artist: string,
    /**
     * Title
     */
    title: string,
    /**
     * URL of mp3 file
     */
    url: string,
    /**
     * Access key for the audio
     */
    access_key: string
}

export interface AudioAudioFull {
    /**
     * Audio ID
     */
    id: number,
    /**
     * Audio owner's ID
     */
    owner_id: number,
    /**
     * Artist name
     */
    artist: string,
    /**
     * Title
     */
    title: string,
    /**
     * URL of mp3 file
     */
    url: string,
    /**
     * Access key for the audio
     */
    access_key: string,
    /**
     * Duration in seconds
     */
    duration: number,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Lyrics ID
     */
    lyrics_id: number,
    /**
     * Genre ID
     */
    genre_id: number,
    /**
     * Information whether the audio is hidden from search
     */
    no_search: BaseBoolInt,
    /**
     * 
     */
    is_hq: BaseBoolInt
}

export interface AudioLyrics {
    /**
     * Lyrics ID
     */
    lyrics_id: number,
    /**
     * Lyrics text
     */
    text: string
}

export interface AudioAudioUploadResponse {
    /**
     * Redirect URL
     */
    redirect: string,
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded aduio data
     */
    audio: string,
    /**
     * Uploading hash
     */
    hash: string
}

export type BaseBoolInt = number

export interface BaseUploadServer {
    /**
     * Upload URL
     */
    upload_url: string
}

export interface BaseCommentsInfo {
    /**
     * Comments number
     */
    count: number,
    /**
     * Information whether current user can comment the post
     */
    can_post: BaseBoolInt,
    /**
     * Information whether groups can comment the post
     */
    groups_can_post: BaseBoolInt
}

export interface BaseCountry {
    /**
     * Country ID
     */
    id: number,
    /**
     * Country title
     */
    title: string
}

export interface BaseCity {
    /**
     * City ID
     */
    id: number,
    /**
     * City title
     */
    title: string
}

export interface BaseError {
    /**
     * Error code
     */
    error_code: number,
    /**
     * Error message
     */
    error_msg: string,
    /**
     * 
     */
    request_params: BaseRequestParam[]
}

export interface BaseRequestParam {
    /**
     * Parameter name
     */
    key: string,
    /**
     * Parameter value
     */
    value: string
}

export interface BaseGeo {
    /**
     * Place type
     */
    type: string,
    /**
     * 
     */
    coordinates: BaseGeoCoordinates,
    /**
     * 
     */
    place: BasePlace,
    /**
     * Information whether a map is showed
     */
    showmap: number
}

export interface BaseGeoCoordinates {
    /**
     * 
     */
    latitude: number,
    /**
     * 
     */
    longitude: number
}

export interface BaseLikesInfo {
    /**
     * Likes number
     */
    count: number,
    /**
     * Information whether current uer has liked the post
     */
    user_likes: number,
    /**
     * Information whether current user can like the post
     */
    can_like: BaseBoolInt,
    /**
     * Information whether current user can repost
     */
    can_publish: BaseBoolInt
}

export interface BaseLikes {
    /**
     * Information whether current user likes the photo
     */
    user_likes: BaseBoolInt,
    /**
     * Likes number
     */
    count: number
}

export interface BaseLink {
    /**
     * Link URL
     */
    url: string,
    /**
     * Link title
     */
    title: string,
    /**
     * Link caption
     */
    caption: string,
    /**
     * Link description
     */
    description: string,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * URL of the page with article preview
     */
    preview_url: string,
    /**
     * String ID of the page with article preview
     */
    preview_page: string,
    /**
     * 
     */
    button: BaseLinkButton,
    /**
     * 
     */
    product: BaseLinkProduct,
    /**
     * 
     */
    rating: BaseLinkRating,
    /**
     * 
     */
    application: BaseLinkApplication
}

export interface BaseLinkButton {
    /**
     * Button title
     */
    title: string,
    /**
     * Button action
     */
    action: BaseLinkButtonAction
}

export interface BaseLinkButtonAction {
    /**
     * 
     */
    type: BaseLinkButtonActionType,
    /**
     * Action URL
     */
    url: string
}

export type BaseLinkButtonActionType = string

export interface BaseLinkProduct {
    /**
     * 
     */
    price: MarketPrice
}

export interface BaseLinkApplication {
    /**
     * Application Id
     */
    app_id: number,
    /**
     * 
     */
    store: BaseLinkApplicationStore
}

export interface BaseLinkApplicationStore {
    /**
     * Store Id
     */
    id: number,
    /**
     * Store name
     */
    name: string
}

export interface BaseLinkRating {
    /**
     * Count of stars
     */
    stars: number,
    /**
     * Count of reviews
     */
    reviews_count: number
}

export interface BaseObject {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object title
     */
    title: string
}

export interface BaseObjectWithName {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object name
     */
    name: string
}

export interface BaseObjectCount {
    /**
     * Items count
     */
    count: number
}

export type BaseOkResponse = number

export interface BasePlace {
    /**
     * Place ID
     */
    id: number,
    /**
     * Place title
     */
    title: string,
    /**
     * Place latitude
     */
    latitude: number,
    /**
     * Place longitude
     */
    longitude: number,
    /**
     * Date of the place creation in Unixtime
     */
    created: number,
    /**
     * URL of the place's icon
     */
    icon: string,
    /**
     * Checkins number
     */
    checkins: number,
    /**
     * Place type
     */
    type: string,
    /**
     * Country name
     */
    country: string,
    /**
     * City name
     */
    city: string,
    /**
     * Place address
     */
    address: string
}

export type BasePropertyExists = number

export interface BaseRepostsInfo {
    /**
     * Reposts number
     */
    count: number,
    /**
     * Information whether current user has reposted the post
     */
    user_reposted: number
}

export interface BaseSticker {
    /**
     * Sticker ID
     */
    sticker_id: number,
    /**
     * Collection ID
     */
    product_id: number,
    /**
     * 
     */
    images: BaseImage[],
    /**
     * 
     */
    images_with_background: BaseImage[]
}

export interface BaseUserId {
    /**
     * User ID
     */
    user_id: number
}

export type BaseSex = number

export interface BaseImage {
    /**
     * Image url
     */
    url: string,
    /**
     * Image width
     */
    width: number,
    /**
     * Image height
     */
    height: number
}

export type BoardDefaultOrder = number

export interface BoardTopicPoll {
    /**
     * Poll ID
     */
    poll_id: number,
    /**
     * Poll owner's ID
     */
    owner_id: number,
    /**
     * Date when poll has been created in Unixtime
     */
    created: number,
    /**
     * Information whether the poll is closed
     */
    is_closed: BaseBoolInt,
    /**
     * Poll question
     */
    question: string,
    /**
     * Votes number
     */
    votes: string,
    /**
     * Current user's answer ID
     */
    answer_id: number,
    /**
     * 
     */
    answers: PollsAnswer[]
}

export interface BoardTopic {
    /**
     * Topic ID
     */
    id: number,
    /**
     * Topic title
     */
    title: string,
    /**
     * Date when the topic has been created in Unixtime
     */
    created: number,
    /**
     * Creator ID
     */
    created_by: number,
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated: number,
    /**
     * ID of user who updated the topic
     */
    updated_by: number,
    /**
     * Information whether the topic is closed
     */
    is_closed: BaseBoolInt,
    /**
     * Information whether the topic is fixed
     */
    is_fixed: BaseBoolInt,
    /**
     * Comments number
     */
    comments: number
}

export interface BoardTopicComment {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Real position of the comment
     */
    real_offset: number
}

export interface DatabaseCity {
    /**
     * Object ID
     */
    id: number,
    /**
     * Object title
     */
    title: string,
    /**
     * Area title
     */
    area: string,
    /**
     * Region title
     */
    region: string,
    /**
     * Information whether the city is included in important cities list
     */
    important: BaseBoolInt
}

export interface DatabaseFaculty {
    /**
     * Faculty ID
     */
    id: number,
    /**
     * Faculty title
     */
    title: string
}

export interface DatabaseRegion {
    /**
     * Region ID
     */
    id: number,
    /**
     * Region title
     */
    title: string
}

export interface DatabaseSchool {
    /**
     * School ID
     */
    id: number,
    /**
     * School title
     */
    title: string
}

export interface DatabaseUniversity {
    /**
     * University ID
     */
    id: number,
    /**
     * University title
     */
    title: string
}

export interface DocsDoc {
    /**
     * Document ID
     */
    id: number,
    /**
     * Document owner ID
     */
    owner_id: number,
    /**
     * Document title
     */
    title: string,
    /**
     * File size in bites
     */
    size: number,
    /**
     * File extension
     */
    ext: string,
    /**
     * File URL
     */
    url: string,
    /**
     * Date when file has been uploaded in Unixtime
     */
    date: number,
    /**
     * Document type
     */
    type: number,
    /**
     * 
     */
    preview: DocsDocPreview,
    /**
     * Access key for the document
     */
    access_key: string
}

export interface DocsDocTypes {
    /**
     * Doc type ID
     */
    id: number,
    /**
     * Doc type title
     */
    title: string,
    /**
     * Number of docs
     */
    count: number
}

export interface DocsDocUploadResponse {
    /**
     * Uploaded file data
     */
    file: string
}

export interface DocsDocPreview {
    /**
     * 
     */
    photo: DocsDocPreviewPhoto,
    /**
     * 
     */
    video: DocsDocPreviewVideo
}

export interface DocsDocPreviewPhoto {
    /**
     * 
     */
    sizes: PhotosPhotoSizes[]
}

export interface DocsDocPreviewVideo {
    /**
     * Video URL
     */
    src: string,
    /**
     * Video's width in pixels
     */
    width: number,
    /**
     * Video's height in pixels
     */
    height: number,
    /**
     * Video file size in bites
     */
    filesize: number
}

export interface FaveFavesLink {
    /**
     * Link ID
     */
    id: number,
    /**
     * Link URL
     */
    url: string,
    /**
     * Link title
     */
    title: string,
    /**
     * Link description
     */
    description: string,
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50: string,
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string
}

export interface FriendsFriendsList {
    /**
     * List title
     */
    name: string,
    /**
     * List ID
     */
    id: number
}

export interface FriendsRequests {
    /**
     * User ID
     */
    user_id: number,
    /**
     * ID of the user by whom friend has been suggested
     */
    from: string,
    /**
     * 
     */
    mutual: FriendsRequestsMutual
}

export interface FriendsRequestsMutual {
    /**
     * Total mutual friends number
     */
    count: number,
    /**
     * 
     */
    users: number[]
}

export interface FriendsRequestsXtrMessage {
    /**
     * User ID
     */
    user_id: number,
    /**
     * ID of the user by whom friend has been suggested
     */
    from: string,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * Message sent with a request
     */
    message: string
}

export interface FriendsMutualFriend {
    /**
     * User ID
     */
    id: number,
    /**
     * Total mutual friends number
     */
    common_count: number,
    /**
     * 
     */
    common_friends: number[]
}

export type FriendsFriendStatusStatus = number

export interface FriendsFriendStatus {
    /**
     * User ID
     */
    user_id: number,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * Message sent with request
     */
    request_message: string,
    /**
     * Information whether request is unviewed
     */
    read_state: BaseBoolInt,
    /**
     * MD5 hash for the result validation
     */
    sign: string
}

export interface FriendsUserXtrLists {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * 
     */
    lists: number[]
}

export interface FriendsUserXtrPhone {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * User phone
     */
    phone: string
}

export interface GiftsLayout {
    /**
     * Gift ID
     */
    id: number,
    /**
     * URL of the preview image with 256 px in width
     */
    thumb_256: string,
    /**
     * URL of the preview image with 96 px in width
     */
    thumb_96: string,
    /**
     * URL of the preview image with 48 px in width
     */
    thumb_48: string
}

export type GiftsGiftPrivacy = number

export interface GiftsGift {
    /**
     * Gift ID
     */
    id: number,
    /**
     * Gift sender ID
     */
    from_id: number,
    /**
     * Comment text
     */
    message: string,
    /**
     * Date when gist has been sent in Unixtime
     */
    date: number,
    /**
     * 
     */
    gift: GiftsLayout,
    /**
     * 
     */
    privacy: GiftsGiftPrivacy,
    /**
     * Hash
     */
    gift_hash: string
}

export type GroupsBanInfoReason = number

export interface GroupsBanInfo {
    /**
     * Administrator ID
     */
    admin_id: number,
    /**
     * Date when user has been added to blacklist in Unixtime
     */
    date: number,
    /**
     * 
     */
    reason: GroupsBanInfoReason,
    /**
     * Comment for a ban
     */
    comment: string,
    /**
     * Date when user will be removed from blacklist in Unixtime
     */
    end_date: number
}

export interface GroupsGroupsArray {
    /**
     * Communities number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}

export interface GroupsGroupCategory {
    /**
     * Category ID
     */
    id: number,
    /**
     * Category name
     */
    name: string,
    /**
     * 
     */
    subcategories: BaseObjectWithName[]
}

export interface GroupsGroupCategoryFull {
    /**
     * Category ID
     */
    id: number,
    /**
     * Category name
     */
    name: string,
    /**
     * 
     */
    subcategories: GroupsGroupCategory[],
    /**
     * Pages number
     */
    page_count: number,
    /**
     * 
     */
    page_previews: GroupsGroup[]
}

export interface GroupsContactsItem {
    /**
     * User ID
     */
    user_id: number,
    /**
     * Contact description
     */
    desc: string,
    /**
     * Contact email
     */
    email: string,
    /**
     * Contact phone
     */
    phone: string
}

export interface GroupsCountersGroup {
    /**
     * Photos number
     */
    photos: number,
    /**
     * Photo albums number
     */
    albums: number,
    /**
     * Topics number
     */
    topics: number,
    /**
     * Videos number
     */
    videos: number,
    /**
     * Audios number
     */
    audios: number,
    /**
     * Docs number
     */
    docs: number,
    /**
     * Market items number
     */
    market: number
}

export interface GroupsCover {
    /**
     * Information whether cover is enabled
     */
    enabled: BaseBoolInt,
    /**
     * 
     */
    images: BaseImage[]
}

export interface GroupsGroupBanInfo {
    /**
     * End date of ban in Unixtime
     */
    end_date: number,
    /**
     * Ban comment
     */
    comment: string
}

export type GroupsGroupIsClosed = number

export type GroupsGroupType = string

export type GroupsGroupAdminLevel = number

export interface GroupsGroup {
    /**
     * Community ID
     */
    id: number,
    /**
     * Community name
     */
    name: string,
    /**
     * Domain of the community page
     */
    screen_name: string,
    /**
     * Information whether community is banned
     */
    deactivated: string,
    /**
     * 
     */
    is_closed: GroupsGroupIsClosed,
    /**
     * 
     */
    type: GroupsGroupType,
    /**
     * Information whether current user is administrator
     */
    is_admin: BaseBoolInt,
    /**
     * 
     */
    admin_level: GroupsGroupAdminLevel,
    /**
     * Information whether current user is member
     */
    is_member: BaseBoolInt,
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100: string,
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200: string
}

export type GroupsGroupFullMemberStatus = number

export type GroupsGroupFullMainSection = number

export type GroupsGroupFullAgeLimits = number

export interface GroupsGroupFull {
    /**
     * Community ID
     */
    id: number,
    /**
     * Community name
     */
    name: string,
    /**
     * Domain of the community page
     */
    screen_name: string,
    /**
     * Information whether community is banned
     */
    deactivated: string,
    /**
     * 
     */
    is_closed: GroupsGroupIsClosed,
    /**
     * 
     */
    type: GroupsGroupType,
    /**
     * Information whether current user is administrator
     */
    is_admin: BaseBoolInt,
    /**
     * 
     */
    admin_level: GroupsGroupAdminLevel,
    /**
     * Information whether current user is member
     */
    is_member: BaseBoolInt,
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100: string,
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200: string,
    /**
     * 
     */
    market: GroupsMarketInfo,
    /**
     * Current user's member status
     */
    member_status: GroupsGroupFullMemberStatus,
    /**
     * Information whether community is in faves
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether current user is subscribed
     */
    is_subscribed: BaseBoolInt,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * Information whether community is verified
     */
    verified: BaseBoolInt,
    /**
     * Community description
     */
    description: string,
    /**
     * Community's main wiki page title
     */
    wiki_page: string,
    /**
     * Community members number
     */
    members_count: number,
    /**
     * 
     */
    counters: GroupsCountersGroup,
    /**
     * 
     */
    cover: GroupsCover,
    /**
     * Information whether current user can post on community's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see all posts on community's wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Type of group, start date of event or category of public page
     */
    activity: string,
    /**
     * Fixed post ID
     */
    fixed_post: number,
    /**
     * Information whether current user can create topic
     */
    can_create_topic: BaseBoolInt,
    /**
     * Information whether current user can upload video
     */
    can_upload_video: BaseBoolInt,
    /**
     * Information whether community has photo
     */
    has_photo: BaseBoolInt,
    /**
     * Community status
     */
    status: string,
    /**
     * Community's main photo album ID
     */
    main_album_id: number,
    /**
     * 
     */
    links: GroupsLinksItem[],
    /**
     * 
     */
    contacts: GroupsContactsItem[],
    /**
     * Community's website
     */
    site: string,
    /**
     * 
     */
    main_section: GroupsGroupFullMainSection,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether current user can send a message to community
     */
    can_message: BaseBoolInt,
    /**
     * Information whether community can send a message to current user
     */
    is_messages_blocked: BaseBoolInt,
    /**
     * Status of replies in community messages
     */
    online_status: GroupsOnlineStatus,
    /**
     * Start date of event in Unixtime
     */
    start_date: number,
    /**
     * Finish date of event in Unixtime
     */
    finish_date: number,
    /**
     * Information whether age limit
     */
    age_limits: GroupsGroupFullAgeLimits,
    /**
     * User ban info
     */
    ban_info: GroupsGroupBanInfo
}

export type GroupsGroupXtrInvitedByType = string

export type GroupsGroupXtrInvitedByAdminLevel = number

export interface GroupsGroupXtrInvitedBy {
    /**
     * Community ID
     */
    id: string,
    /**
     * Community name
     */
    name: string,
    /**
     * Domain of the community page
     */
    screen_name: string,
    /**
     * Information whether community is closed
     */
    is_closed: BaseBoolInt,
    /**
     * 
     */
    type: GroupsGroupXtrInvitedByType,
    /**
     * Information whether current user is manager
     */
    is_admin: BaseBoolInt,
    /**
     * 
     */
    admin_level: GroupsGroupXtrInvitedByAdminLevel,
    /**
     * Information whether current user is member
     */
    is_member: BaseBoolInt,
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100: string,
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200: string,
    /**
     * Inviter ID
     */
    invited_by: number
}

export interface GroupsGroupLink {
    /**
     * Link ID
     */
    id: number,
    /**
     * Link URL
     */
    url: string,
    /**
     * Information whether the title can be edited
     */
    edit_title: BaseBoolInt,
    /**
     * Link description
     */
    desc: string,
    /**
     * Information whether the image on processing
     */
    image_processing: BaseBoolInt
}

export interface GroupsLinksItem {
    /**
     * Link ID
     */
    id: number,
    /**
     * Link URL
     */
    url: string,
    /**
     * Information whether the link title can be edited
     */
    edit_title: BaseBoolInt,
    /**
     * Link title
     */
    name: string,
    /**
     * Link description
     */
    desc: string,
    /**
     * URL of square image of the link with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square image of the link with 100 pixels in width
     */
    photo_100: string
}

export interface GroupsMarketInfo {
    /**
     * Information whether the market is enabled
     */
    enabled: BaseBoolInt,
    /**
     * Minimum price
     */
    price_min: number,
    /**
     * Maximum price
     */
    price_max: number,
    /**
     * Main market album ID
     */
    main_album_id: number,
    /**
     * Contact person ID
     */
    contact_id: number,
    /**
     * 
     */
    currency: MarketCurrency,
    /**
     * Currency name
     */
    currency_text: string
}

export type GroupsMemberRoleStatus = string

export interface GroupsMemberRole {
    /**
     * User ID
     */
    id: number,
    /**
     * 
     */
    role: GroupsMemberRoleStatus
}

export interface GroupsMemberStatus {
    /**
     * Information whether user is a member of the group
     */
    member: BaseBoolInt,
    /**
     * User ID
     */
    user_id: number
}

export interface GroupsMemberStatusFull {
    /**
     * Information whether user is a member of the group
     */
    member: BaseBoolInt,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Information whether user has been invited to the group
     */
    invitation: BaseBoolInt,
    /**
     * Information whether user has send request to the group
     */
    request: BaseBoolInt
}

export interface GroupsGroupCategoryType {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    name: string
}

export interface GroupsGroupPublicCategoryList {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    name: string,
    /**
     * 
     */
    subtypes_list: GroupsGroupCategoryType[]
}

export interface GroupsGroupSettings {
    /**
     * Community title
     */
    title: string,
    /**
     * Community description
     */
    description: string,
    /**
     * Community's page domain
     */
    address: string,
    /**
     * 
     */
    place: PlacesPlaceMin,
    /**
     * Wall settings
     */
    wall: number,
    /**
     * Photos settings
     */
    photos: number,
    /**
     * Video settings
     */
    video: number,
    /**
     * Audio settings
     */
    audio: number,
    /**
     * Docs settings
     */
    docs: number,
    /**
     * Topics settings
     */
    topics: number,
    /**
     * Wiki settings
     */
    wiki: number,
    /**
     * Information whether the obscene filter is enabled
     */
    obscene_filter: BaseBoolInt,
    /**
     * Information about the group category
     */
    public_category: number,
    /**
     * Information about the group subcategory
     */
    public_subcategory: number,
    /**
     * 
     */
    public_category_list: GroupsGroupPublicCategoryList[],
    /**
     * Information whether the stopwords filter is enabled
     */
    obscene_stopwords: BaseBoolInt,
    /**
     * The list of stop words
     */
    obscene_words: string,
    /**
     * Community access settings
     */
    access: number,
    /**
     * Community subject ID
     */
    subject: number,
    /**
     * 
     */
    subject_list: GroupsSubjectItem[],
    /**
     * URL of the RSS feed
     */
    rss: string,
    /**
     * Community website
     */
    website: string
}

export interface GroupsSubjectItem {
    /**
     * Subject ID
     */
    id: number,
    /**
     * Subject title
     */
    name: string
}

export type GroupsOwnerXtrBanInfoType = string

export interface GroupsOwnerXtrBanInfo {
    /**
     * 
     */
    type: GroupsOwnerXtrBanInfoType,
    /**
     * Information about group if type = group
     */
    group: GroupsGroup,
    /**
     * Information about group if type = profile
     */
    profile: UsersUser,
    /**
     * 
     */
    ban_info: GroupsBanInfo
}

export type GroupsRoleOptions = string

export interface GroupsUserXtrRole {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * 
     */
    role: GroupsRoleOptions
}

export interface GroupsTokenPermissionSetting {
    /**
     * 
     */
    setting: number,
    /**
     * 
     */
    name: string
}

export interface GroupsTokenPermissions {
    /**
     * 
     */
    mask: number,
    /**
     * 
     */
    permissions: GroupsTokenPermissionSetting[]
}

export interface GroupsLongPollServer {
    /**
     * Long Poll key
     */
    key: string,
    /**
     * Long Poll server address
     */
    server: string,
    /**
     * Number of the last event
     */
    ts: number
}

export interface GroupsLongPollSettings {
    /**
     * Shows whether Long Poll is enabled
     */
    is_enabled: boolean,
    /**
     * API version used for the events
     */
    api_version: string,
    /**
     * 
     */
    events: GroupsLongPollEvents
}

export interface GroupsCallbackSettings {
    /**
     * API version used for the events
     */
    api_version: string,
    /**
     * 
     */
    events: GroupsLongPollEvents
}

export interface GroupsLongPollEvents {
    /**
     * 
     */
    message_new: BaseBoolInt,
    /**
     * 
     */
    message_reply: BaseBoolInt,
    /**
     * 
     */
    photo_new: BaseBoolInt,
    /**
     * 
     */
    audio_new: BaseBoolInt,
    /**
     * 
     */
    video_new: BaseBoolInt,
    /**
     * 
     */
    wall_reply_new: BaseBoolInt,
    /**
     * 
     */
    wall_reply_edit: BaseBoolInt,
    /**
     * 
     */
    wall_reply_delete: BaseBoolInt,
    /**
     * 
     */
    wall_reply_restore: BaseBoolInt,
    /**
     * 
     */
    wall_post_new: BaseBoolInt,
    /**
     * 
     */
    board_post_new: BaseBoolInt,
    /**
     * 
     */
    board_post_edit: BaseBoolInt,
    /**
     * 
     */
    board_post_restore: BaseBoolInt,
    /**
     * 
     */
    board_post_delete: BaseBoolInt,
    /**
     * 
     */
    photo_comment_new: BaseBoolInt,
    /**
     * 
     */
    photo_comment_edit: BaseBoolInt,
    /**
     * 
     */
    photo_comment_delete: BaseBoolInt,
    /**
     * 
     */
    photo_comment_restore: BaseBoolInt,
    /**
     * 
     */
    video_comment_new: BaseBoolInt,
    /**
     * 
     */
    video_comment_edit: BaseBoolInt,
    /**
     * 
     */
    video_comment_delete: BaseBoolInt,
    /**
     * 
     */
    video_comment_restore: BaseBoolInt,
    /**
     * 
     */
    market_comment_new: BaseBoolInt,
    /**
     * 
     */
    market_comment_edit: BaseBoolInt,
    /**
     * 
     */
    market_comment_delete: BaseBoolInt,
    /**
     * 
     */
    market_comment_restore: BaseBoolInt,
    /**
     * 
     */
    poll_vote_new: BaseBoolInt,
    /**
     * 
     */
    group_join: BaseBoolInt,
    /**
     * 
     */
    group_leave: BaseBoolInt,
    /**
     * 
     */
    group_change_settings: BaseBoolInt,
    /**
     * 
     */
    group_change_photo: BaseBoolInt,
    /**
     * 
     */
    group_officers_edit: BaseBoolInt,
    /**
     * 
     */
    message_allow: BaseBoolInt,
    /**
     * 
     */
    message_deny: BaseBoolInt,
    /**
     * 
     */
    wall_repost: BaseBoolInt,
    /**
     * 
     */
    user_block: BaseBoolInt,
    /**
     * 
     */
    user_unblock: BaseBoolInt,
    /**
     * 
     */
    messages_edit: BaseBoolInt,
    /**
     * 
     */
    message_typing_state: BaseBoolInt,
    /**
     * 
     */
    lead_forms_new: BaseBoolInt
}

export type GroupsOnlineStatusType = string

export interface GroupsOnlineStatus {
    /**
     * 
     */
    status: GroupsOnlineStatusType,
    /**
     * Estimated time of answer (for status = answer_mark)
     */
    minutes: number
}

export interface LeadsLead {
    /**
     * Lead limit
     */
    limit: number,
    /**
     * Amount of spent votes
     */
    spent: number,
    /**
     * Offer cost
     */
    cost: number,
    /**
     * Impressions number
     */
    impressions: number,
    /**
     * Started offers number
     */
    started: number,
    /**
     * Completed offers number
     */
    completed: number,
    /**
     * 
     */
    days: LeadsLeadDays
}

export interface LeadsLeadDays {
    /**
     * Impressions number
     */
    impressions: number,
    /**
     * Started offers number
     */
    started: number,
    /**
     * Completed offers number
     */
    completed: number,
    /**
     * Amount of spent votes
     */
    spent: number
}

export interface LeadsStart {
    /**
     * Information whether test mode is enabled
     */
    test_mode: BaseBoolInt,
    /**
     * Session data
     */
    vk_sid: string
}

export type LeadsCheckedResult = string

export interface LeadsChecked {
    /**
     * 
     */
    result: LeadsCheckedResult,
    /**
     * Reason why user can't start the lead
     */
    reason: string,
    /**
     * URL user should open to start the lead
     */
    start_link: string,
    /**
     * Session ID
     */
    sid: string
}

export interface LeadsComplete {
    /**
     * Offer limit
     */
    limit: number,
    /**
     * Amount of spent votes
     */
    spent: number,
    /**
     * Offer cost
     */
    cost: number,
    /**
     * Information whether test mode is enabled
     */
    test_mode: BaseBoolInt,
    /**
     * 
     */
    success: BaseOkResponse
}

export interface LeadsEntry {
    /**
     * User ID
     */
    uid: number,
    /**
     * Application ID
     */
    aid: number,
    /**
     * Session string ID
     */
    sid: string,
    /**
     * Date when the action has been started in Unixtime
     */
    date: number,
    /**
     * Action type
     */
    status: number,
    /**
     * Information whether test mode is enabled
     */
    test_mode: BaseBoolInt,
    /**
     * Start date in Unixtime (for status=2)
     */
    start_date: number,
    /**
     * Comment text
     */
    comment: string
}

export interface MarketMarketAlbum {
    /**
     * Market album ID
     */
    id: number,
    /**
     * Market album owner's ID
     */
    owner_id: number,
    /**
     * Market album title
     */
    title: string,
    /**
     * Items number
     */
    count: number,
    /**
     * Date when album has been updated last time in Unixtime
     */
    updated_time: number,
    /**
     * 
     */
    photo: PhotosPhoto
}

export interface MarketMarketCategory {
    /**
     * Category ID
     */
    id: number,
    /**
     * Category name
     */
    name: string,
    /**
     * 
     */
    section: MarketSection
}

export interface MarketCurrency {
    /**
     * Currency ID
     */
    id: number,
    /**
     * Currency sign
     */
    name: string
}

export type MarketMarketItemAvailability = number

export interface MarketMarketItem {
    /**
     * Item ID
     */
    id: number,
    /**
     * Item owner's ID
     */
    owner_id: number,
    /**
     * Item title
     */
    title: string,
    /**
     * Item description
     */
    description: string,
    /**
     * 
     */
    price: MarketPrice,
    /**
     * 
     */
    category: MarketMarketCategory,
    /**
     * Date when the item has been created in Unixtime
     */
    date: number,
    /**
     * URL of the preview image
     */
    thumb_photo: string,
    /**
     * 
     */
    availability: MarketMarketItemAvailability
}

export interface MarketMarketItemFull {
    /**
     * Item ID
     */
    id: number,
    /**
     * Item owner's ID
     */
    owner_id: number,
    /**
     * Item title
     */
    title: string,
    /**
     * Item description
     */
    description: string,
    /**
     * 
     */
    price: MarketPrice,
    /**
     * 
     */
    category: MarketMarketCategory,
    /**
     * Date when the item has been created in Unixtime
     */
    date: number,
    /**
     * URL of the preview image
     */
    thumb_photo: string,
    /**
     * 
     */
    availability: MarketMarketItemAvailability,
    /**
     * 
     */
    photos: PhotosPhoto[],
    /**
     * Information whether current use can comment the item
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current use can repost the item
     */
    can_repost: BaseBoolInt,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * Views number
     */
    views_count: number
}

export interface MarketPrice {
    /**
     * Amount
     */
    amount: string,
    /**
     * 
     */
    currency: MarketCurrency,
    /**
     * Text
     */
    text: string
}

export interface MarketSection {
    /**
     * Section ID
     */
    id: number,
    /**
     * Section name
     */
    name: string
}

export interface MessagesHistoryAttachment {
    /**
     * Message ID
     */
    message_id: number,
    /**
     * 
     */
    attachment: MessagesHistoryMessageAttachment
}

export type MessagesHistoryMessageAttachmentType = string

export interface MessagesHistoryMessageAttachment {
    /**
     * 
     */
    type: MessagesHistoryMessageAttachmentType,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    audio: AudioAudioFull,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    link: BaseLink,
    /**
     * 
     */
    market: BaseLink,
    /**
     * 
     */
    wall: BaseLink,
    /**
     * 
     */
    share: BaseLink
}

export type MessagesMessageAttachmentType = string

export interface MessagesMessageAttachment {
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    audio: AudioAudioFull,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    link: BaseLink,
    /**
     * 
     */
    market: MarketMarketItem,
    /**
     * 
     */
    market_market_album: MarketMarketAlbum,
    /**
     * 
     */
    gift: GiftsLayout,
    /**
     * 
     */
    sticker: BaseSticker,
    /**
     * 
     */
    wall: WallWallpostAttached,
    /**
     * 
     */
    wall_reply: WallWallComment,
    /**
     * 
     */
    type: MessagesMessageAttachmentType
}

export interface MessagesChat {
    /**
     * Chat ID
     */
    id: number,
    /**
     * Chat type
     */
    type: string,
    /**
     * Chat title
     */
    title: string,
    /**
     * Chat creator ID
     */
    admin_id: number,
    /**
     * 
     */
    users: number[],
    /**
     * 
     */
    push_settings: MessagesChatPushSettings,
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50: string,
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string,
    /**
     * Shows that user has been left the chat
     */
    left: BaseBoolInt,
    /**
     * Shows that user has been kicked from the chat
     */
    kicked: BaseBoolInt
}

export interface MessagesChatFull {
    /**
     * Chat ID
     */
    id: number,
    /**
     * Chat type
     */
    type: string,
    /**
     * Chat title
     */
    title: string,
    /**
     * Chat creator ID
     */
    admin_id: number,
    /**
     * 
     */
    users: MessagesUserXtrInvitedBy[],
    /**
     * 
     */
    push_settings: MessagesChatPushSettings,
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50: string,
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string,
    /**
     * Shows that user has been left the chat
     */
    left: BaseBoolInt,
    /**
     * Shows that user has been kicked from the chat
     */
    kicked: BaseBoolInt
}

export interface MessagesChatPushSettings {
    /**
     * Information whether the sound is on
     */
    sound: BaseBoolInt,
    /**
     * Time until that notifications are disabled
     */
    disabled_until: number
}

export interface MessagesDialog {
    /**
     * Information whether unread messages are in the dialog
     */
    unread: number,
    /**
     * 
     */
    message: MessagesMessage,
    /**
     * ID of the last message read by current user
     */
    in_read: number,
    /**
     * ID of the last message read by the others
     */
    out_read: number,
    /**
     * Is it an important dialog
     */
    important: BaseBoolInt,
    /**
     * Is it an unanswered dialog
     */
    unanswered: BaseBoolInt
}

export interface MessagesLastActivity {
    /**
     * Information whether user is online
     */
    online: BaseBoolInt,
    /**
     * Time when user was online in Unixtime
     */
    time: number
}

export interface MessagesLongpollParams {
    /**
     * Key
     */
    key: string,
    /**
     * Server URL
     */
    server: string,
    /**
     * Timestamp
     */
    ts: number,
    /**
     * Persistent timestamp
     */
    pts: number
}

export interface MessagesLongpollMessages {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: MessagesMessage[]
}

export interface MessagesKeyboardButtonAction {
    /**
     * Button type
     */
    type: string,
    /**
     * Additional data sent along with message for developer convenience
     */
    payload: string,
    /**
     * Label for button
     */
    label: string
}

export interface MessagesKeyboardButton {
    /**
     * Button color
     */
    color: string,
    /**
     * 
     */
    action: MessagesKeyboardButtonAction
}

export interface MessagesKeyboard {
    /**
     * Should this keyboard disappear on first use
     */
    one_time: boolean,
    /**
     * Community or bot, which set this keyboard
     */
    author_id: number,
    /**
     * 
     */
    buttons: MessagesKeyboardButton[][]
}

export type MessagesMessageActionStatus = string

export interface MessagesMessage {
    /**
     * Message ID
     */
    id: number,
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number,
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time: number,
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id: number,
    /**
     * Is it an important message
     */
    important: boolean,
    /**
     * 
     */
    payload: string,
    /**
     * Forwarded messages
     */
    fwd_messages: MessagesFwdMessage[],
    /**
     * Message text
     */
    text: string,
    /**
     * 
     */
    attachments: MessagesMessageAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    action: MessagesMessageAction,
    /**
     * 
     */
    keyboard: MessagesKeyboard
}

export interface MessagesPinnedMessage {
    /**
     * Message ID
     */
    id: number,
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number,
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * Forwarded messages
     */
    fwd_messages: MessagesFwdMessage[],
    /**
     * Message text
     */
    text: string,
    /**
     * 
     */
    attachments: MessagesMessageAttachment[],
    /**
     * 
     */
    geo: BaseGeo
}

export interface MessagesMessageAction {
    /**
     * 
     */
    type: MessagesMessageActionStatus,
    /**
     * User or email peer ID
     */
    member_id: number,
    /**
     * Message body of related message
     */
    message: string,
    /**
     * New chat title for chat_create and chat_title_update actions
     */
    text: string,
    /**
     * Message ID
     */
    conversation_message_id: number,
    /**
     * Email address for chat_invite_user or chat_kick_user actions
     */
    email: string,
    /**
     * 
     */
    photo: MessagesMessageActionPhoto
}

export interface MessagesConversationWithMessage {
    /**
     * 
     */
    conversation: MessagesConversation,
    /**
     * 
     */
    last_message: MessagesMessage
}

export interface MessagesChatSettingsPhoto {
    /**
     * URL of the preview image with 50px in width
     */
    photo_50: string,
    /**
     * URL of the preview image with 100px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200px in width
     */
    photo_200: string
}

export type MessagesChatSettingsState = string

export interface MessagesUserXtrInvitedBy {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * 
     */
    type: UsersUserType,
    /**
     * ID of the inviter
     */
    invited_by: number
}

export type NewsfeedNewsfeedItemType = string

export interface NewsfeedNewsfeedItem {
    /**
     * 
     */
    type: NewsfeedNewsfeedItemType,
    /**
     * Item source ID
     */
    source_id: number,
    /**
     * Date when item has been added in Unixtime
     */
    date: number
}

export interface NewsfeedItemAudio {
    /**
     * 
     */
    audio: NewsfeedItemAudioAudio,
    /**
     * Post ID
     */
    post_id: number
}

export interface NewsfeedItemAudioAudio {
    /**
     * Audios number
     */
    count: number,
    /**
     * 
     */
    items: AudioAudioFull[]
}

export interface NewsfeedItemFriendFriends {
    /**
     * Number of friends has been added
     */
    count: number,
    /**
     * 
     */
    items: BaseUserId[]
}

export interface NewsfeedItemFriend {
    /**
     * 
     */
    friends: NewsfeedItemFriendFriends
}

export interface NewsfeedItemNote {
    /**
     * 
     */
    notes: NewsfeedItemNoteNotes
}

export interface NewsfeedItemNoteNotes {
    /**
     * Notes number
     */
    count: number,
    /**
     * 
     */
    items: NewsfeedNewsfeedNote[]
}

export interface NewsfeedItemPhoto {
    /**
     * 
     */
    photos: NewsfeedItemPhotoPhotos,
    /**
     * Post ID
     */
    post_id: number
}

export interface NewsfeedItemPhotoPhotos {
    /**
     * Photos number
     */
    count: number,
    /**
     * 
     */
    items: NewsfeedNewsfeedPhoto[]
}

export interface NewsfeedItemPhotoTag {
    /**
     * 
     */
    photo_tags: NewsfeedItemPhotoTagPhotoTags,
    /**
     * Post ID
     */
    post_id: number
}

export interface NewsfeedItemPhotoTagPhotoTags {
    /**
     * Tags number
     */
    count: number,
    /**
     * 
     */
    items: NewsfeedNewsfeedPhoto[]
}

export interface NewsfeedItemTopic {
    /**
     * Topic post ID
     */
    post_id: number,
    /**
     * Post text
     */
    text: string,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo
}

export interface NewsfeedItemVideo {
    /**
     * 
     */
    video: NewsfeedItemVideoVideo
}

export interface NewsfeedItemVideoVideo {
    /**
     * Tags number
     */
    count: number,
    /**
     * 
     */
    items: VideoVideo[]
}

export type NewsfeedItemWallpostType = string

export interface NewsfeedItemWallpost {
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    post_type: NewsfeedItemWallpostType,
    /**
     * Post text
     */
    text: string,
    /**
     * 
     */
    copy_history: WallWallpost[],
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo
}

export interface NewsfeedList {
    /**
     * List ID
     */
    id: number,
    /**
     * List title
     */
    title: string
}

export interface NewsfeedListFull {
    /**
     * List ID
     */
    id: number,
    /**
     * List title
     */
    title: string,
    /**
     * Information whether reposts hiding is enabled
     */
    no_reposts: BaseBoolInt,
    /**
     * 
     */
    source_ids: number[]
}

export interface NewsfeedNewsfeedNote {
    /**
     * Note ID
     */
    id: number,
    /**
     * integer
     */
    owner_id: number,
    /**
     * Note title
     */
    title: string,
    /**
     * Comments Number
     */
    comments: number
}

export interface NewsfeedNewsfeedPhoto {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Information whether current user can comment the photo
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current user can repost the photo
     */
    can_repost: BaseBoolInt
}

export interface NotesNoteComment {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Comment author's ID
     */
    uid: number,
    /**
     * Note ID
     */
    nid: number,
    /**
     * Note ID
     */
    oid: number,
    /**
     * Date when the comment has beed added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    message: string,
    /**
     * ID of replied comment 
     */
    reply_to: number
}

export interface NotesNote {
    /**
     * Note ID
     */
    id: number,
    /**
     * Note owner's ID
     */
    owner_id: number,
    /**
     * Comments number
     */
    comments: number,
    /**
     * Information whether current user can comment the note
     */
    can_comment: BaseBoolInt,
    /**
     * Date when the note has been created in Unixtime
     */
    date: number,
    /**
     * Note title
     */
    title: string,
    /**
     * Note text
     */
    text: string,
    /**
     * Note text in wiki format
     */
    text_wiki: string,
    /**
     * URL of the page with note preview
     */
    view_url: string
}

export interface NotificationsNotificationsComment {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Author ID
     */
    owner_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    post: WallWallpost,
    /**
     * 
     */
    topic: BoardTopic
}

export interface NotificationsNotificationParent {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * Wall owner's ID
     */
    to_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * Comment text
     */
    text: string,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * ID of the source post owner
     */
    copy_owner_id: number,
    /**
     * ID of the source post
     */
    copy_post_id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Author ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Video title
     */
    title: string,
    /**
     * Date when the topic has been created in Unixtime
     */
    created: number,
    /**
     * Creator ID
     */
    created_by: number,
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated: number,
    /**
     * ID of user who updated the topic
     */
    updated_by: number,
    /**
     * Information whether the topic is closed
     */
    is_closed: BaseBoolInt,
    /**
     * Information whether the topic is fixed
     */
    is_fixed: BaseBoolInt,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Number of views
     */
    views: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * URL of the page with a player that can be used to play the video in the browser.
     */
    player: string,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * Returns if the video is live translation
     */
    live: BasePropertyExists,
    /**
     * 
     */
    files: VideoVideoFiles,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    post: WallWallpost,
    /**
     * 
     */
    topic: BoardTopic
}

export interface NotificationsNotification {
    /**
     * Notification type
     */
    type: string,
    /**
     * Date when the event has been occured
     */
    date: number,
    /**
     * 
     */
    parent: NotificationsNotificationParent,
    /**
     * 
     */
    feedback: NotificationsFeedback,
    /**
     * 
     */
    reply: NotificationsReply
}

export interface NotificationsFeedback {
    /**
     * Item ID
     */
    id: number,
    /**
     * Wall owner's ID
     */
    to_id: number,
    /**
     * Reply author's ID
     */
    from_id: number,
    /**
     * Reply text
     */
    text: string,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo
}

export interface NotificationsReply {
    /**
     * Reply ID
     */
    id: number,
    /**
     * Date when the reply has been created in Unixtime
     */
    date: number,
    /**
     * Reply text
     */
    text: number
}

export interface OauthError {
    /**
     * Error type
     */
    error: string,
    /**
     * Error description
     */
    error_description: string,
    /**
     * URI for validation
     */
    redirect_uri: string
}

export interface OrdersOrder {
    /**
     * Order ID
     */
    id: number,
    /**
     * App order ID
     */
    app_order_id: number,
    /**
     * Order status
     */
    status: string,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Receiver ID
     */
    receiver_id: number,
    /**
     * Order item
     */
    item: string,
    /**
     * Amount
     */
    amount: number,
    /**
     * Date of creation in Unixtime
     */
    date: number,
    /**
     * Transaction ID
     */
    transaction_id: number,
    /**
     * Cancel transaction ID
     */
    cancel_transaction_id: number
}

export interface OrdersAmount {
    /**
     * 
     */
    amounts: OrdersAmountItem[],
    /**
     * Currency name
     */
    currency: string
}

export interface OrdersAmountItem {
    /**
     * Votes number
     */
    votes: string,
    /**
     * Votes amount in user's currency
     */
    amount: number,
    /**
     * Amount description
     */
    description: string
}

export type PagesPrivacySettings = number

export interface PagesWikipage {
    /**
     * Page ID
     */
    id: number,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Page title
     */
    title: string,
    /**
     * View settings of the page
     */
    who_can_view: PagesPrivacySettings,
    /**
     * Edit settings of the page
     */
    who_can_edit: PagesPrivacySettings,
    /**
     * Views number
     */
    views: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Last editor name
     */
    editor_name: string,
    /**
     * Page creator ID
     */
    creator_id: number,
    /**
     * Page creator name
     */
    creator_name: number
}

export interface PagesWikipageFull {
    /**
     * Page ID
     */
    id: number,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Page title
     */
    title: string,
    /**
     * Information whether current user can edit the page
     */
    current_user_can_edit: BaseBoolInt,
    /**
     * Information whether current user can edit the page access settings
     */
    current_user_can_edit_access: BaseBoolInt,
    /**
     * View settings of the page
     */
    who_can_view: PagesPrivacySettings,
    /**
     * Edit settings of the page
     */
    who_can_edit: PagesPrivacySettings,
    /**
     * Date when the page has been edited in Unixtime
     */
    edited: number,
    /**
     * Date when the page has been created in Unixtime
     */
    created: number,
    /**
     * Views number
     */
    views: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Page creator ID
     */
    creator_id: number,
    /**
     * Page content, wiki
     */
    source: string,
    /**
     * Page content, HTML
     */
    html: string,
    /**
     * URL of the page preview
     */
    view_url: string
}

export interface PagesWikipageVersion {
    /**
     * Version ID
     */
    id: number,
    /**
     * Page size in bytes
     */
    length: number,
    /**
     * Date when the page has been edited in Unixtime
     */
    edited: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Last editor name
     */
    editor_name: string
}

export interface PhotosPhotoAlbum {
    /**
     * Photo album ID
     */
    id: number,
    /**
     * 
     */
    thumb: PhotosPhoto,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Photo album title
     */
    title: string,
    /**
     * Photo album description
     */
    description: string,
    /**
     * Date when the album has been created in Unixtime
     */
    created: number,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number,
    /**
     * Photos number
     */
    size: number
}

export interface PhotosPhotoAlbumFull {
    /**
     * Photo album ID
     */
    id: number,
    /**
     * Thumb photo ID
     */
    thumb_id: number,
    /**
     * URL of the thumb image
     */
    thumb_src: string,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Photo album title
     */
    title: string,
    /**
     * Photo album description
     */
    description: string,
    /**
     * Date when the album has been created in Unixtime
     */
    created: number,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number,
    /**
     * Photos number
     */
    size: number,
    /**
     * 
     */
    privacy_view: string[],
    /**
     * 
     */
    privacy_comment: string[],
    /**
     * Information whether only community administrators can upload photos
     */
    upload_by_admins_only: BaseBoolInt,
    /**
     * Information whether album comments are disabled
     */
    comments_disabled: BaseBoolInt,
    /**
     * Information whether current user can upload photo to the album
     */
    can_upload: BaseBoolInt,
    /**
     * Information whether the album thumb is last photo
     */
    thumb_is_last: BaseBoolInt,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[]
}

export interface PhotosCommentXtrPid {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Replied user ID
     */
    reply_to_user: number,
    /**
     * Replied comment ID
     */
    reply_to_comment: number,
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Photo ID
     */
    pid: number
}

export interface PhotosMarketAlbumUploadResponse {
    /**
     * Community ID
     */
    gid: number,
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploading hash
     */
    hash: string
}

export interface PhotosMarketUploadResponse {
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Crop data
     */
    crop_data: string,
    /**
     * Crop hash
     */
    crop_hash: string
}

export interface PhotosMessageUploadResponse {
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploading hash
     */
    hash: string
}

export interface PhotosOwnerUploadResponse {
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploading hash
     */
    hash: string
}

export type PhotosImageType = string

export interface PhotosImage {
    /**
     * 
     */
    type: PhotosImageType,
    /**
     * Photo URL.
     */
    url: string,
    /**
     * Width of the photo in px.
     */
    width: number,
    /**
     * Height of the photo in px.
     */
    height: number
}

export interface PhotosPhoto {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string
}

export interface PhotosPhotoFull {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    reposts: BaseObjectCount,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Information whether current user can comment the photo
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    tags: BaseObjectCount
}

export interface PhotosPhotoFullXtrRealOffset {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    reposts: BaseObjectCount,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * 
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    tags: BaseObjectCount,
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden: BasePropertyExists,
    /**
     * Real position of the photo
     */
    real_offset: number
}

export interface PhotosPhotoXtrRealOffset {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden: BasePropertyExists,
    /**
     * Real position of the photo
     */
    real_offset: number
}

export interface PhotosPhotoXtrTagInfo {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * ID of the tag creator
     */
    placer_id: number,
    /**
     * Date when tag has been added in Unixtime
     */
    tag_created: number,
    /**
     * Tag ID
     */
    tag_id: number
}

export type PhotosPhotoSizesType = string

export interface PhotosPhotoSizes {
    /**
     * URL of the image
     */
    src: string,
    /**
     * Width in px
     */
    width: number,
    /**
     * Height in px
     */
    height: number,
    /**
     * 
     */
    type: PhotosPhotoSizesType
}

export interface PhotosPhotoTag {
    /**
     * Tagged user ID
     */
    user_id: number,
    /**
     * Tag ID
     */
    id: number,
    /**
     * ID of the tag creator
     */
    placer_id: number,
    /**
     * Tag description
     */
    tagged_name: string,
    /**
     * Date when tag has been added in Unixtime
     */
    date: number,
    /**
     * Coordinate X of the left upper corner
     */
    x: number,
    /**
     * Coordinate Y of the left upper corner
     */
    y: number,
    /**
     * Coordinate X of the right lower corner
     */
    x2: number,
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number,
    /**
     * Information whether the tag is reviewed
     */
    viewed: BaseBoolInt
}

export interface PhotosPhotoUpload {
    /**
     * URL to upload photo
     */
    upload_url: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * User ID
     */
    user_id: number
}

export interface PhotosPhotoUploadResponse {
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photos data
     */
    photos_list: string,
    /**
     * Album ID
     */
    aid: number,
    /**
     * Uploading hash
     */
    hash: string
}

export interface PhotosWallUploadResponse {
    /**
     * Upload server number
     */
    server: number,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploading hash
     */
    hash: string
}

export interface PlacesCheckin {
    /**
     * Checkin ID
     */
    id: number,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Date when the checkin has been added in Unixtime
     */
    date: number,
    /**
     * Place latitude
     */
    latitude: number,
    /**
     * Place longitude
     */
    longitude: number,
    /**
     * Place ID
     */
    place_id: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * Distance to the place
     */
    distance: number,
    /**
     * Place title
     */
    place_title: string,
    /**
     * Country ID
     */
    place_country: number,
    /**
     * City ID
     */
    place_city: number,
    /**
     * Place type
     */
    place_type: string,
    /**
     * URL of the place's icon
     */
    place_icon: string
}

export interface PlacesPlaceMin {
    /**
     * Place ID
     */
    id: number,
    /**
     * Place title
     */
    title: string,
    /**
     * Place latitude
     */
    latitude: number,
    /**
     * Place longitude
     */
    longitude: number,
    /**
     * Date of the place creation in Unixtime
     */
    created: number,
    /**
     * URL of the place's icon
     */
    icon: string,
    /**
     * Checkins number
     */
    checkins: number,
    /**
     * Place type
     */
    type: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * City ID
     */
    city: number,
    /**
     * Place address
     */
    address: string
}

export interface PlacesPlaceFull {
    /**
     * Place ID
     */
    id: number,
    /**
     * Place title
     */
    title: string,
    /**
     * Place latitude
     */
    latitude: number,
    /**
     * Place longitude
     */
    longitude: number,
    /**
     * Date of the place creation in Unixtime
     */
    created: number,
    /**
     * URL of the place's icon
     */
    icon: string,
    /**
     * Checkins number
     */
    checkins: number,
    /**
     * Place type
     */
    type: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * City ID
     */
    city: number,
    /**
     * Place address
     */
    address: string,
    /**
     * Distance to the place
     */
    distance: number,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * URL of the community's photo
     */
    group_photo: string
}

export interface PlacesTypes {
    /**
     * Place type ID
     */
    id: number,
    /**
     * Place type title
     */
    title: string,
    /**
     * URL of the place's icon
     */
    icon: string
}

export interface PollsAnswer {
    /**
     * Answer ID
     */
    id: number,
    /**
     * Answer text
     */
    text: string,
    /**
     * Votes number
     */
    votes: number,
    /**
     * Answer rate in percents
     */
    rate: number
}

export interface PollsPoll {
    /**
     * Poll ID
     */
    id: number,
    /**
     * Poll owner's ID
     */
    owner_id: number,
    /**
     * Date when poll has been created in Unixtime
     */
    created: number,
    /**
     * Poll question
     */
    question: string,
    /**
     * Votes number
     */
    votes: string,
    /**
     * Current user's answer ID
     */
    answer_id: number,
    /**
     * 
     */
    answers: PollsAnswer[],
    /**
     * Information whether the pole is anonymous
     */
    anonymous: BaseBoolInt
}

export interface PollsVoters {
    /**
     * Answer ID
     */
    answer_id: number,
    /**
     * 
     */
    users: PollsVotersUsers
}

export interface PollsVotersUsers {
    /**
     * Votes number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}

export type SearchHintType = string

export type SearchHintSection = string

export interface SearchHint {
    /**
     * 
     */
    type: SearchHintType,
    /**
     * 
     */
    section: SearchHintSection,
    /**
     * Object description
     */
    description: string,
    /**
     * Information whether the object has been found globally
     */
    global: BaseBoolInt,
    /**
     * 
     */
    group: GroupsGroup,
    /**
     * 
     */
    profile: UsersUserMin
}

export interface SecureLevel {
    /**
     * User ID
     */
    uid: number,
    /**
     * Level
     */
    level: number
}

export interface SecureSmsNotification {
    /**
     * Notification ID
     */
    id: number,
    /**
     * Application ID
     */
    app_id: number,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Date when message has been sent in Unixtime
     */
    date: number,
    /**
     * Messsage text
     */
    message: string
}

export interface SecureTokenChecked {
    /**
     * Returns if successfully processed
     */
    success: BaseOkResponse,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Date when access_token has been generated in Unixtime
     */
    date: number,
    /**
     * Date when access_token will expire in Unixtime
     */
    expire: number
}

export interface SecureTransaction {
    /**
     * Transaction ID
     */
    id: number,
    /**
     * From ID
     */
    uid_from: number,
    /**
     * To ID
     */
    uid_to: number,
    /**
     * Votes number
     */
    votes: number,
    /**
     * Transaction date in Unixtime
     */
    date: number
}

export interface StatsPeriod {
    /**
     * Day (YYYY-MM-DD)
     */
    period_from: string,
    /**
     * Day (YYYY-MM-DD)
     */
    period_to: string,
    /**
     * 
     */
    visitors: StatsViews,
    /**
     * 
     */
    reach: StatsReach,
    /**
     * 
     */
    activity: StatsActivity
}

export interface StatsViews {
    /**
     * Views number
     */
    views: number,
    /**
     * Visitors number
     */
    visitors: number,
    /**
     * Number of views from mobile devices
     */
    mobile_views: number,
    /**
     * 
     */
    sex: StatsSexAge[],
    /**
     * 
     */
    age: StatsSexAge[],
    /**
     * 
     */
    sex_age: StatsSexAge[],
    /**
     * 
     */
    countries: StatsCountry[],
    /**
     * 
     */
    cities: StatsCity[]
}

export interface StatsReach {
    /**
     * Reach count
     */
    reach: number,
    /**
     * Subscribers reach count
     */
    reach_subscribers: number,
    /**
     * Reach count from mobile devices
     */
    mobile_reach: number,
    /**
     * 
     */
    sex: StatsSexAge[],
    /**
     * 
     */
    age: StatsSexAge[],
    /**
     * 
     */
    sex_age: StatsSexAge[],
    /**
     * 
     */
    countries: StatsCountry[],
    /**
     * 
     */
    cities: StatsCity[]
}

export interface StatsActivity {
    /**
     * Likes number
     */
    likes: number,
    /**
     * Comments number
     */
    comments: number,
    /**
     * Reposts number
     */
    copies: number,
    /**
     * New subscribers count
     */
    subscribed: number,
    /**
     * Unsubscribed count
     */
    unsubscribed: number,
    /**
     * Hidden from news count
     */
    hidden: number
}

export interface StatsSexAge {
    /**
     * Visitors number
     */
    count: number,
    /**
     * Sex/age value
     */
    value: string
}

export interface StatsCountry {
    /**
     * Visitors number
     */
    count: number,
    /**
     * Country ID
     */
    value: number,
    /**
     * Country code
     */
    code: string,
    /**
     * Country name
     */
    name: string
}

export interface StatsCity {
    /**
     * Visitors number
     */
    count: number,
    /**
     * City ID
     */
    value: number,
    /**
     * City name
     */
    name: string
}

export interface StatsWallpostStat {
    /**
     * Subscribers reach
     */
    reach_subscribers: number,
    /**
     * Total reach
     */
    reach_total: number,
    /**
     * Link clickthrough
     */
    links: number,
    /**
     * Clickthrough to community
     */
    to_group: number,
    /**
     * People have joined the group
     */
    join_group: number,
    /**
     * Reports number
     */
    report: number,
    /**
     * Hidings number
     */
    hide: number,
    /**
     * Unsubscribed members
     */
    unsubscribe: number
}

export interface StatusStatus {
    /**
     * Status text
     */
    text: string,
    /**
     * 
     */
    audio: AudioAudioFull
}

export type StoriesStoryStatsState = string

export interface StoriesStoryStatsStat {
    /**
     * 
     */
    state: StoriesStoryStatsState,
    /**
     * Stat value
     */
    count: number
}

export interface StoriesStoryStats {
    /**
     * 
     */
    views: StoriesStoryStatsStat,
    /**
     * 
     */
    replies: StoriesStoryStatsStat,
    /**
     * 
     */
    answer: StoriesStoryStatsStat,
    /**
     * 
     */
    shares: StoriesStoryStatsStat,
    /**
     * 
     */
    subscribers: StoriesStoryStatsStat,
    /**
     * 
     */
    bans: StoriesStoryStatsStat,
    /**
     * 
     */
    open_link: StoriesStoryStatsStat
}

export interface StoriesStoryVideo {
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Number of views
     */
    views: number,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * URL of the page with a player that can be used to play the video in the browser.
     */
    player: string,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * Returns if the video is live translation
     */
    live: BasePropertyExists,
    /**
     * 
     */
    files: VideoVideoFiles,
    /**
     * URL of the first frame for the corresponding width.
     */
    first_frame_800: string,
    /**
     * URL of the first frame for the corresponding width.
     */
    first_frame_320: string,
    /**
     * URL of the first frame for the corresponding width.
     */
    first_frame_160: string,
    /**
     * URL of the first frame for the corresponding width.
     */
    first_frame_130: string,
    /**
     * Information whether story is private (0 - no, 1 - yes).
     */
    is_private: BaseBoolInt
}

export type StoriesStoryType = string

export interface StoriesStoryLink {
    /**
     * Link text
     */
    text: string,
    /**
     * Link URL
     */
    url: string
}

export interface StoriesStory {
    /**
     * Story ID.
     */
    id: number,
    /**
     * Story owner's ID.
     */
    owner_id: number,
    /**
     * Date when story has been added in Unixtime.
     */
    date: number,
    /**
     * Information whether current user has seen the story or not (0 - no, 1 - yes).
     */
    seen: BaseBoolInt,
    /**
     * 
     */
    type: StoriesStoryType,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    video: StoriesStoryVideo,
    /**
     * Views number.
     */
    views: number,
    /**
     * Information whether current user can see the story (0 - no, 1 - yes).
     */
    can_see: BaseBoolInt,
    /**
     * Information whether current user can reply to the story (0 - no, 1 - yes).
     */
    can_reply: BaseBoolInt,
    /**
     * Information whether current user can share the story (0 - no, 1 - yes).
     */
    can_share: BaseBoolInt,
    /**
     * Information whether current user can comment the story (0 - no, 1 - yes).
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether the story is deleted (false - no, true - yes).
     */
    is_deleted: boolean,
    /**
     * Information whether the story is expired (false - no, true - yes).
     */
    is_expired: boolean,
    /**
     * Access key for private object.
     */
    access_key: string,
    /**
     * Parent story owner's ID.
     */
    parent_story_owner_id: number,
    /**
     * Parent story ID.
     */
    parent_story_id: number,
    /**
     * Access key for private object.
     */
    parent_story_access_key: string,
    /**
     * 
     */
    parent_story: StoriesStory,
    /**
     * 
     */
    link: StoriesStoryLink,
    /**
     * Replies to current story.
     */
    replies: StoriesReplies[]
}

export interface StoriesReplies {
    /**
     * Replies number.
     */
    count: number,
    /**
     * New replies number.
     */
    new: number
}

export interface UtilsShortLink {
    /**
     * Short link URL
     */
    short_url: string,
    /**
     * Access key for private stats
     */
    access_key: string,
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * Full URL
     */
    url: string
}

export interface UtilsLastShortenedLink {
    /**
     * Creation time in Unixtime
     */
    timestamp: number,
    /**
     * Full URL
     */
    url: string,
    /**
     * Short link URL
     */
    short_url: string,
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * Total views number
     */
    views: number,
    /**
     * Access key for private stats
     */
    access_key: string
}

export interface UtilsLinkStats {
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * 
     */
    stats: UtilsStats[]
}

export interface UtilsLinkStatsExtended {
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * 
     */
    stats: UtilsStatsExtended[]
}

export interface UtilsStats {
    /**
     * Start time
     */
    timestamp: number,
    /**
     * Total views number
     */
    views: number
}

export interface UtilsStatsExtended {
    /**
     * Start time
     */
    timestamp: number,
    /**
     * Total views number
     */
    views: number,
    /**
     * 
     */
    sex_age: UtilsStatsSexAge[],
    /**
     * 
     */
    countries: UtilsStatsCountry[],
    /**
     * 
     */
    cities: UtilsStatsCity[]
}

export interface UtilsStatsSexAge {
    /**
     * Age denotation
     */
    age_range: string,
    /**
     *  Views by female users
     */
    female: number,
    /**
     *  Views by male users
     */
    male: number
}

export interface UtilsStatsCountry {
    /**
     * Country ID
     */
    country_id: number,
    /**
     * Views number
     */
    views: number
}

export interface UtilsStatsCity {
    /**
     * City ID
     */
    city_id: number,
    /**
     * Views number
     */
    views: number
}

export type UtilsDomainResolvedType = string

export interface UtilsDomainResolved {
    /**
     * 
     */
    type: UtilsDomainResolvedType,
    /**
     * Object ID
     */
    object_id: number
}

export type UtilsLinkCheckedStatus = string

export interface UtilsLinkChecked {
    /**
     * 
     */
    status: UtilsLinkCheckedStatus,
    /**
     * Link URL
     */
    link: string
}

export interface UsersUsersArray {
    /**
     * Users number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}

export interface UsersUserCounters {
    /**
     * Albums number
     */
    albums: number,
    /**
     * Videos number
     */
    videos: number,
    /**
     * Audios number
     */
    audios: number,
    /**
     * Notes number
     */
    notes: number,
    /**
     * Photos number
     */
    photos: number,
    /**
     * Communities number
     */
    groups: number,
    /**
     * Gifts number
     */
    gifts: number,
    /**
     * Friends number
     */
    friends: number,
    /**
     * Online friends number
     */
    online_friends: number,
    /**
     * Number of photos with user
     */
    user_photos: number,
    /**
     * Number of videos with user
     */
    user_videos: number,
    /**
     * Followers number
     */
    followers: number,
    /**
     * Subscriptions number
     */
    subscriptions: number,
    /**
     * Public pages number
     */
    pages: number
}

export interface UsersUser {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number
}

export type UsersUserType = string

export interface UsersUserFullXtrType {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * 
     */
    type: UsersUserType
}

export interface UsersUserXtrType {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * 
     */
    type: UsersUserType
}

export interface UsersUserMin {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number
}

export interface UsersUserBroadcast {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * 
     */
    status_audio: AudioAudioFull
}

export interface UsersUserFull {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string
}

export interface UsersCareer {
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Company name
     */
    company: string,
    /**
     * Country ID
     */
    country_id: number,
    /**
     * City ID
     */
    city_id: number,
    /**
     * From year
     */
    from: number,
    /**
     * Till year
     */
    until: number,
    /**
     * Position
     */
    position: string
}

export interface UsersExports {
    /**
     * 
     */
    twitter: number,
    /**
     * 
     */
    facebook: number,
    /**
     * 
     */
    livejournal: number
}

export interface UsersMilitary {
    /**
     * Unit name
     */
    unit: string,
    /**
     * Unit ID
     */
    unit_id: number,
    /**
     * Country ID
     */
    country_id: number,
    /**
     * From year
     */
    from: number,
    /**
     * Till year
     */
    until: number
}

export interface UsersRelative {
    /**
     * Relative ID
     */
    id: number,
    /**
     * Relative type
     */
    type: string
}

export interface UsersUserLim {
    /**
     * User ID
     */
    id: number,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo: string,
    /**
     * User name and last name
     */
    name: string,
    /**
     * User name in genitive declension
     */
    name_gen: string
}

export interface UsersLastSeen {
    /**
     * Last visit date (in Unix time)
     */
    time: number,
    /**
     * Type of the platform that used for the last authorization
     */
    platform: number
}

export interface UsersUniversity {
    /**
     * University ID
     */
    id: number,
    /**
     * Country ID
     */
    country: number,
    /**
     * City ID
     */
    city: number,
    /**
     * University name
     */
    name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Chair ID
     */
    chair: number,
    /**
     * Chair name
     */
    chair_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * Education status
     */
    education_status: string
}

export interface UsersSchool {
    /**
     * School ID
     */
    id: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * City ID
     */
    city: number,
    /**
     * School name
     */
    name: string,
    /**
     * Year the user started to study
     */
    year_from: number,
    /**
     * Year the user finished to study
     */
    year_to: number,
    /**
     * Graduation year
     */
    year_graduated: number,
    /**
     * School class letter
     */
    schoolClass: string,
    /**
     * School type ID
     */
    type: number,
    /**
     * School type name
     */
    type_str: string
}

export interface UsersCropPhoto {
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    crop: UsersCropPhotoCrop,
    /**
     * 
     */
    rect: UsersCropPhotoRect
}

export interface UsersCropPhotoCrop {
    /**
     * Coordinate X of the left upper corner
     */
    x: number,
    /**
     * Coordinate Y of the left upper corner
     */
    y: number,
    /**
     * Coordinate X of the right lower corner
     */
    x2: number,
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

export interface UsersCropPhotoRect {
    /**
     * Coordinate X of the left upper corner
     */
    x: number,
    /**
     * Coordinate Y of the left upper corner
     */
    y: number,
    /**
     * Coordinate X of the right lower corner
     */
    x2: number,
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

export interface UsersOccupation {
    /**
     * Type of occupation
     */
    type: string,
    /**
     * ID of school, university, company group
     */
    id: number,
    /**
     * Name of occupation
     */
    name: string
}

export interface UsersPersonal {
    /**
     * User's political views
     */
    political: number,
    /**
     * 
     */
    langs: string[],
    /**
     * User's religion
     */
    religion: string,
    /**
     * User's inspired by
     */
    inspired_by: string,
    /**
     * User's personal priority in people
     */
    people_main: number,
    /**
     * User's personal priority in life
     */
    life_main: number,
    /**
     * User's views on smoking
     */
    smoking: number,
    /**
     * User's views on alcohol
     */
    alcohol: number
}

export interface UsersUserXtrCounters {
    /**
     * User ID
     */
    id: number,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50: string,
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100: string,
    /**
     * Information whether the user is online
     */
    online: BaseBoolInt,
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile: BaseBoolInt,
    /**
     * Application ID
     */
    online_app: number,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * Domain name of the user's page
     */
    domain: string,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * 
     */
    city: BaseObject,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max: string,
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig: string,
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig: string,
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig: string,
    /**
     * ID of the user's main photo
     */
    photo_id: string,
    /**
     * Information whether the user has main photo
     */
    has_photo: BaseBoolInt,
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
    /**
     * Friend status for current user
     */
    friend_status: number,
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments: BaseBoolInt,
    /**
     * Information whether current user can post on the user's wall
     */
    can_post: BaseBoolInt,
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio: BaseBoolInt,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can see
     */
    mobile_phone: string,
    /**
     * User's mobile phone number
     */
    home_phone: string,
    /**
     * User's Skype nickname
     */
    skype: string,
    /**
     * User's Facebook account
     */
    facebook: string,
    /**
     * User's Facebook name
     */
    facebook_name: string,
    /**
     * User's Twitter account
     */
    twitter: string,
    /**
     * User's Livejournal account
     */
    livejournal: string,
    /**
     * User's Instagram account
     */
    instagram: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudioFull,
    /**
     * User's status
     */
    status: string,
    /**
     * User's status
     */
    activity: string,
    /**
     * 
     */
    last_seen: UsersLastSeen,
    /**
     * 
     */
    exports: UsersExports,
    /**
     * 
     */
    crop_photo: UsersCropPhoto,
    /**
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted: BaseBoolInt,
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me: BaseBoolInt,
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite: BaseBoolInt,
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
    /**
     * Number of common friends with current user
     */
    common_count: number,
    /**
     * 
     */
    occupation: UsersOccupation,
    /**
     * 
     */
    career: UsersCareer[],
    /**
     * 
     */
    military: UsersMilitary[],
    /**
     * University ID
     */
    university: number,
    /**
     * University name
     */
    university_name: string,
    /**
     * Faculty ID
     */
    faculty: number,
    /**
     * Faculty name
     */
    faculty_name: string,
    /**
     * Graduation year
     */
    graduation: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * User's education status
     */
    education_status: string,
    /**
     * User hometown
     */
    home_town: string,
    /**
     * User relationship status
     */
    relation: number,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User's interests
     */
    interests: string,
    /**
     * User's favorite music
     */
    music: string,
    /**
     * User's activities
     */
    activities: string,
    /**
     * User's favorite movies
     */
    movies: string,
    /**
     * User's favorite tv shows
     */
    tv: string,
    /**
     * User's favorite books
     */
    books: string,
    /**
     * User's favorite games
     */
    games: string,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * About me field
     */
    about: string,
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Favorite quotes
     */
    quotes: string,
    /**
     * 
     */
    counters: UsersUserCounters
}

export interface VideoVideoAlbum {
    /**
     * Album ID
     */
    id: number,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Album title
     */
    title: string
}

export interface VideoVideoAlbumFull {
    /**
     * Album ID
     */
    id: number,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Album title
     */
    title: string,
    /**
     * Total number of videos in album
     */
    count: number,
    /**
     * URL of the preview image with 160px in width
     */
    photo_160: string,
    /**
     * URL of the preview image with 320px in width
     */
    photo_320: string,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated_time: number,
    /**
     * Information whether album is system
     */
    is_system: number
}

export type VideoCatBlockView = string

export interface VideoCatBlock {
    /**
     * 
     */
    items: VideoCatElement[],
    /**
     * New value for _from_ parameter
     */
    next: string,
    /**
     * Block name
     */
    name: string,
    /**
     * Block ID
     */
    id: number,
    /**
     * 
     */
    view: VideoCatBlockView,
    /**
     * Information whether the block can be hidden
     */
    can_hide: BaseBoolInt,
    /**
     * 
     */
    type: VideoCatBlockView
}

export type VideoCatElementType = string

export interface VideoCatElement {
    /**
     * Element ID
     */
    id: number,
    /**
     * Element owner's ID
     */
    owner_id: number,
    /**
     * Element title
     */
    title: string,
    /**
     * 
     */
    type: VideoCatElementType,
    /**
     * Element description
     */
    description: string,
    /**
     * Duration in seconds
     */
    duration: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 160 px in width
     */
    photo_160: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 640 px in width
     */
    photo_640: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Date when the element has been created
     */
    date: number,
    /**
     * Views number
     */
    views: number,
    /**
     * Comments number
     */
    comments: number,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether the video is private
     */
    is_private: BaseBoolInt,
    /**
     * Videos number (for album)
     */
    count: number,
    /**
     * Date of last update (for album) in Unixtime
     */
    updated_time: number
}

export interface VideoSaveResult {
    /**
     * URL for the video uploading
     */
    upload_url: string,
    /**
     * Video ID
     */
    video_id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Video description
     */
    description: string
}

export interface VideoVideoTag {
    /**
     * Tagged user ID
     */
    user_id: number,
    /**
     * Tag ID
     */
    id: number,
    /**
     * ID of the tag creator
     */
    placer_id: number,
    /**
     * Tag description
     */
    tagged_name: string,
    /**
     * Date when tag has been added in Unixtime
     */
    date: number,
    /**
     * Information whether tha tag is reviewed
     */
    viewed: BaseBoolInt
}

export interface VideoUploadResponse {
    /**
     * Video size
     */
    size: number,
    /**
     * Video ID
     */
    video_id: number
}

export interface VideoVideo {
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Number of views
     */
    views: number,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * URL of the page with a player that can be used to play the video in the browser.
     */
    player: string,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * Returns if the video is live translation
     */
    live: BasePropertyExists,
    /**
     * 
     */
    files: VideoVideoFiles
}

export interface VideoVideoFiles {
    /**
     * URL of the mpeg4 file with 240p quality
     */
    mp_240: string,
    /**
     * URL of the mpeg4 file with 360p quality
     */
    mp_360: string,
    /**
     * URL of the mpeg4 file with 480p quality
     */
    mp_480: string,
    /**
     * URL of the mpeg4 file with 720p quality
     */
    mp_720: string,
    /**
     * URL of the mpeg4 file with 1080p quality
     */
    mp_1080: string,
    /**
     * URL of the external player
     */
    external: string
}

export interface VideoVideoTagInfo {
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Number of views
     */
    views: number,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * URL of the page with a player that can be used to play the video in the browser.
     */
    player: string,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * Returns if the video is live translation
     */
    live: BasePropertyExists,
    /**
     * 
     */
    files: VideoVideoFiles,
    /**
     * ID of the tag creator
     */
    placer_id: number,
    /**
     * Date when tag has been added in Unixtime
     */
    tag_created: number,
    /**
     * Tag ID
     */
    tag_id: number
}

export interface VideoVideoFull {
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Number of views
     */
    views: number,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 320 px in width
     */
    photo_320: string,
    /**
     * URL of the preview image with 800 px in width
     */
    photo_800: string,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * URL of the page with a player that can be used to play the video in the browser.
     */
    player: string,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * Returns if the video is live translation
     */
    live: BasePropertyExists,
    /**
     * 
     */
    files: VideoVideoFiles,
    /**
     * 
     */
    privacy_view: string[],
    /**
     * 
     */
    privacy_comment: string[],
    /**
     * Information whether current user can comment the video
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current user can comment the video
     */
    can_repost: BaseBoolInt,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * Information whether the video is repeated
     */
    repeat: BaseBoolInt
}

export interface WallAppPost {
    /**
     * Application ID
     */
    id: number,
    /**
     * Application name
     */
    name: string,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604: string
}

export interface WallAttachedNote {
    /**
     * Note ID
     */
    id: number,
    /**
     * Note owner's ID
     */
    owner_id: number,
    /**
     * Comments number
     */
    comments: number,
    /**
     * Read comments number
     */
    read_comments: number,
    /**
     * Date when the note has been created in Unixtime
     */
    date: number,
    /**
     * Note title
     */
    title: string,
    /**
     * URL of the page with note preview
     */
    view_url: string
}

export type WallCommentAttachmentType = string

export interface WallCommentAttachment {
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    audio: AudioAudioFull,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    link: BaseLink,
    /**
     * 
     */
    note: WallAttachedNote,
    /**
     * 
     */
    page: PagesWikipageFull,
    /**
     * 
     */
    market_market_album: MarketMarketAlbum,
    /**
     * 
     */
    market: MarketMarketItem,
    /**
     * 
     */
    sticker: BaseSticker,
    /**
     * 
     */
    type: WallCommentAttachmentType
}

export interface WallGraffiti {
    /**
     * Graffiti ID
     */
    id: number,
    /**
     * Graffiti owner's ID
     */
    owner_id: number,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string,
    /**
     * URL of the preview image with 586 px in width
     */
    photo_586: string
}

export type WallPostSourceType = string

export interface WallPostSource {
    /**
     * 
     */
    type: WallPostSourceType,
    /**
     * Platform name
     */
    platform: string,
    /**
     * Additional data
     */
    data: string,
    /**
     * URL to an external site used to publish the post
     */
    url: string
}

export interface WallPostedPhoto {
    /**
     * Photo ID
     */
    id: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130: string,
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604: string
}

export type WallPostType = string

export interface WallWallComment {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Replied user ID
     */
    reply_to_user: number,
    /**
     * Replied comment ID
     */
    reply_to_comment: number,
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Real position of the comment
     */
    real_offset: number
}

export interface WallViews {
    /**
     * Count
     */
    count: number
}

export interface WallWallpost {
    /**
     * Post ID
     */
    id: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * Wall owner's ID
     */
    owner_id: number,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * Count of views
     */
    views: WallViews,
    /**
     * Access key to private object
     */
    access_key: string,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * Post text
     */
    text: string,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource
}

export interface WallWallpostAttached {
    /**
     * Post ID
     */
    id: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * Post addresse
     */
    to_id: number,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * Post text
     */
    text: string,
    /**
     * Information whether current user can delete the post
     */
    can_delete: BaseBoolInt,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Source post owner's ID
     */
    copy_owner_id: number,
    /**
     * Source post ID
     */
    copy_post_id: number,
    /**
     * Repost comment
     */
    copy_text: string
}

export type WallWallpostAttachmentType = string

export interface WallWallpostAttachment {
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    posted_photo: WallPostedPhoto,
    /**
     * 
     */
    audio: AudioAudioFull,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    link: BaseLink,
    /**
     * 
     */
    graffiti: WallGraffiti,
    /**
     * 
     */
    note: WallAttachedNote,
    /**
     * 
     */
    app: WallAppPost,
    /**
     * 
     */
    poll: PollsPoll,
    /**
     * 
     */
    page: PagesWikipageFull,
    /**
     * 
     */
    album: PhotosPhotoAlbum,
    /**
     * 
     */
    photos_list: string[],
    /**
     * 
     */
    market_market_album: MarketMarketAlbum,
    /**
     * 
     */
    market: MarketMarketItem,
    /**
     * 
     */
    type: WallWallpostAttachmentType
}

export interface WallWallpostToId {
    /**
     * Post ID
     */
    id: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * Wall owner's ID
     */
    to_id: number,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * wall post ID (if comment)
     */
    post_id: number,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * Post text
     */
    text: string,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * ID of the source post owner
     */
    copy_owner_id: number,
    /**
     * ID of the source post
     */
    copy_post_id: number
}

export interface WallWallpostFull {
    /**
     * Post ID
     */
    id: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * Wall owner's ID
     */
    owner_id: number,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * Count of views
     */
    views: WallViews,
    /**
     * Access key to private object
     */
    access_key: string,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * Post text
     */
    text: string,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    copy_history: WallWallpost[],
    /**
     * Information whether current user can edit the post
     */
    can_edit: BaseBoolInt,
    /**
     * Post creator ID (if post still can be edited)
     */
    created_by: number,
    /**
     * Information whether current user can delete the post
     */
    can_delete: BaseBoolInt,
    /**
     * Information whether current user can pin the post
     */
    can_pin: BaseBoolInt,
    /**
     * Information whether the post is pinned
     */
    is_pinned: number,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads: BaseBoolInt
}

export interface WidgetsWidgetComment {
    /**
     * Comment ID
     */
    id: number,
    /**
     * Comment author ID
     */
    from_id: number,
    /**
     * Wall owner
     */
    to_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * 
     */
    user: UsersUserFull,
    /**
     * Post type
     */
    post_type: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * Information whether current user can delete the comment
     */
    can_delete: BaseBoolInt,
    /**
     * 
     */
    media: WidgetsCommentMedia,
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    comments: WidgetsCommentReplies,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    reposts: BaseRepostsInfo
}

export type WidgetsCommentMediaType = string

export interface WidgetsCommentMedia {
    /**
     * 
     */
    type: WidgetsCommentMediaType,
    /**
     * Media owner's ID
     */
    owner_id: number,
    /**
     * Media item ID
     */
    item_id: number,
    /**
     * URL of the preview image (type=photo only)
     */
    thumb_src: string
}

export interface WidgetsCommentReplies {
    /**
     * Comments number
     */
    count: number,
    /**
     * Information whether current user can comment the post
     */
    can_post: BaseBoolInt,
    /**
     * 
     */
    replies: WidgetsCommentRepliesItem[]
}

export interface WidgetsCommentRepliesItem {
    /**
     * Comment ID
     */
    cid: number,
    /**
     * User ID
     */
    uid: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    likes: WidgetsWidgetLikes,
    /**
     * 
     */
    user: UsersUserFull
}

export interface WidgetsWidgetLikes {
    /**
     * Likes number
     */
    count: number
}

export interface WidgetsWidgetPage {
    /**
     * Page ID
     */
    id: number,
    /**
     * Page title
     */
    title: string,
    /**
     * Page description
     */
    description: string,
    /**
     * URL of the preview image
     */
    photo: string,
    /**
     * Page absolute URL
     */
    url: string,
    /**
     * 
     */
    likes: BaseObjectCount,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Date when widgets on the page has been initialized firstly in Unixtime
     */
    date: number,
    /**
     * page_id parameter value
     */
    page_id: string
}

export type MessagesFwdMessage = any

export type MessagesMessageActionPhoto = any

export type DatabaseStreet = any

export type MessagesEmail = any

export interface MessagesConversation {
    /**
     * 
     */
    conversation: MessagesConversation,
    /**
     * 
     */
    last_message: MessagesMessage
}