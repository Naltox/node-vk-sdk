export interface AccountAccountCounters {
    /**
     * New app requests number
     */
    app_requests: number,
    /**
     * New events number
     */
    events: number,
    /**
     * New faves number
     */
    faves: number,
    /**
     * New friends requests number
     */
    friends: number,
    /**
     * New friends suggestions number
     */
    friends_suggestions: number,
    /**
     * New friends recommendations number
     */
    friends_recommendations: number,
    /**
     * New gifts number
     */
    gifts: number,
    /**
     * New groups number
     */
    groups: number,
    /**
     * 
     */
    menu_discover_badge: number,
    /**
     * 
     */
    menu_clips_badge: number,
    /**
     * New messages number
     */
    messages: number,
    /**
     * New memories number
     */
    memories: number,
    /**
     * New notes number
     */
    notes: number,
    /**
     * New notifications number
     */
    notifications: number,
    /**
     * New photo tags number
     */
    photos: number,
    /**
     * New sdk number
     */
    sdk: number
}

export interface AccountInfo {
    /**
     * 
     */
    wishlists_ae_promo_banner_show: BaseBoolInt,
    /**
     * Two factor authentication is enabled
     */
    twoFaRequired: BaseBoolInt,
    /**
     * Country code
     */
    country: string,
    /**
     * Information whether HTTPS-only is enabled
     */
    https_required: BaseBoolInt,
    /**
     * Information whether user has been processed intro
     */
    intro: BaseBoolInt,
    /**
     * 
     */
    show_vk_apps_intro: boolean,
    /**
     * Ads slot id for MyTarget
     */
    mini_apps_ads_slot_id: number,
    /**
     * 
     */
    qr_promotion: number,
    /**
     * 
     */
    link_redirects: any,
    /**
     * Language ID
     */
    lang: number,
    /**
     * Information whether wall comments should be hidden
     */
    no_wall_replies: BaseBoolInt,
    /**
     * Information whether only owners posts should be shown
     */
    own_posts_default: BaseBoolInt,
    /**
     * 
     */
    subscriptions: number[]
}

export interface AccountNameRequest {
    /**
     * First name in request
     */
    first_name: string,
    /**
     * Request ID needed to cancel the request
     */
    id: number,
    /**
     * Last name in request
     */
    last_name: string,
    /**
     * 
     */
    status: AccountNameRequestStatus,
    /**
     * Text to display to user
     */
    lang: string,
    /**
     * href for link in lang field
     */
    link_href: string,
    /**
     * label to display for link in lang field
     */
    link_label: string
}

export type AccountNameRequestStatus = string

export interface AccountOffer {
    /**
     * Offer description
     */
    description: string,
    /**
     * Offer ID
     */
    id: number,
    /**
     * URL of the preview image
     */
    img: string,
    /**
     * Instruction how to process the offer
     */
    instruction: string,
    /**
     * Instruction how to process the offer (HTML format)
     */
    instruction_html: string,
    /**
     * Offer price
     */
    price: number,
    /**
     * Offer short description
     */
    short_description: string,
    /**
     * Offer tag
     */
    tag: string,
    /**
     * Offer title
     */
    title: string,
    /**
     * Currency amount
     */
    currency_amount: number,
    /**
     * Link id
     */
    link_id: number,
    /**
     * Link type
     */
    link_type: string
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
     * Time until that notifications are disabled in seconds
     */
    disabled_until: number,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * Information whether the sound are enabled
     */
    sound: BaseBoolInt
}

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
    like: AccountPushParamsSettings[],
    /**
     * 
     */
    repost: AccountPushParamsSettings[],
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
    reply: AccountPushParamsOnoff[],
    /**
     * 
     */
    new_post: AccountPushParamsOnoff[],
    /**
     * 
     */
    wall_post: AccountPushParamsOnoff[],
    /**
     * 
     */
    wall_publish: AccountPushParamsOnoff[],
    /**
     * 
     */
    friend: AccountPushParamsOnoff[],
    /**
     * 
     */
    friend_found: AccountPushParamsOnoff[],
    /**
     * 
     */
    friend_accepted: AccountPushParamsOnoff[],
    /**
     * 
     */
    group_invite: AccountPushParamsOnoff[],
    /**
     * 
     */
    group_accepted: AccountPushParamsOnoff[],
    /**
     * 
     */
    birthday: AccountPushParamsOnoff[],
    /**
     * 
     */
    event_soon: AccountPushParamsOnoff[],
    /**
     * 
     */
    app_request: AccountPushParamsOnoff[],
    /**
     * 
     */
    sdk_open: AccountPushParamsOnoff[]
}

export type AccountPushParamsMode = string

export type AccountPushParamsOnoff = string

export type AccountPushParamsSettings = string

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
    settings: AccountPushParams,
    /**
     * 
     */
    conversations: AccountPushConversations
}

export interface AccountUserSettings {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
    /**
     * 
     */
    connections: UsersUserConnections,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility: number,
    /**
     * 
     */
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's hometown
     */
    home_town: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * 
     */
    name_request: AccountNameRequest,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User phone number with some hidden digits
     */
    phone: string,
    /**
     * User relationship status
     */
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * Information whether relation status is pending
     */
    relation_pending: BaseBoolInt,
    /**
     * 
     */
    relation_requests: UsersUserMin[],
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * User status
     */
    status: string,
    /**
     * 
     */
    status_audio: AudioAudio,
    /**
     * 
     */
    interests: AccountUserSettingsInterests,
    /**
     * 
     */
    languages: string[],
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200: string,
    /**
     * flag about service account
     */
    is_service_account: boolean
}

export interface AccountUserSettingsInterest {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    value: string
}

export interface AccountUserSettingsInterests {
    /**
     * 
     */
    activities: AccountUserSettingsInterest,
    /**
     * 
     */
    interests: AccountUserSettingsInterest,
    /**
     * 
     */
    music: AccountUserSettingsInterest,
    /**
     * 
     */
    tv: AccountUserSettingsInterest,
    /**
     * 
     */
    movies: AccountUserSettingsInterest,
    /**
     * 
     */
    books: AccountUserSettingsInterest,
    /**
     * 
     */
    games: AccountUserSettingsInterest,
    /**
     * 
     */
    quotes: AccountUserSettingsInterest,
    /**
     * 
     */
    about: AccountUserSettingsInterest
}

export type AddressesFields = string

export type AdsAccessRole = string

export type AdsAccessRolePublic = string

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

export interface AdsAccount {
    /**
     * 
     */
    access_role: AdsAccessRole,
    /**
     * Account ID
     */
    account_id: number,
    /**
     * Information whether account is active
     */
    account_status: BaseBoolInt,
    /**
     * 
     */
    account_type: AdsAccountType,
    /**
     * Account name
     */
    account_name: string,
    /**
     * Can user view account budget
     */
    can_view_budget: boolean
}

export type AdsAccountType = string

export interface AdsAd {
    /**
     * Ad format
     */
    ad_format: number,
    /**
     * Ad platform
     */
    ad_platform: any,
    /**
     * Total limit
     */
    all_limit: number,
    /**
     * 
     */
    approved: AdsAdApproved,
    /**
     * Campaign ID
     */
    campaign_id: number,
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
     * Cost of an action, kopecks
     */
    cpa: number,
    /**
     * Cost of 1000 impressions optimized, kopecks
     */
    ocpm: number,
    /**
     * Max cost of target actions for autobidding, kopecks
     */
    autobidding_max_cost: number,
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
    disclaimer_supplements: BaseBoolInt,
    /**
     * Ad ID
     */
    id: number,
    /**
     * Impressions limit
     */
    impressions_limit: number,
    /**
     * Information whether impressions are limited
     */
    impressions_limited: BaseBoolInt,
    /**
     * Ad title
     */
    name: string,
    /**
     * 
     */
    status: AdsAdStatus,
    /**
     * Information whether the ad is a video
     */
    video: BaseBoolInt
}

export type AdsAdApproved = number

export type AdsAdCostType = number

export interface AdsAdLayout {
    /**
     * Ad format
     */
    ad_format: number,
    /**
     * Campaign ID
     */
    campaign_id: number,
    /**
     * 
     */
    cost_type: AdsAdCostType,
    /**
     * Ad description
     */
    description: string,
    /**
     * Ad ID
     */
    id: number,
    /**
     * Image URL
     */
    image_src: string,
    /**
     * URL of the preview image in double size
     */
    image_src_2x: string,
    /**
     * Domain of advertised object
     */
    link_domain: string,
    /**
     * URL of advertised object
     */
    link_url: string,
    /**
     * link to preview an ad as it is shown on the website
     */
    preview_link: any,
    /**
     * Ad title
     */
    title: string,
    /**
     * Information whether the ad is a video
     */
    video: BaseBoolInt
}

export type AdsAdStatus = number

export interface AdsCampaign {
    /**
     * Campaign's total limit, rubles
     */
    all_limit: string,
    /**
     * Campaign's day limit, rubles
     */
    day_limit: string,
    /**
     * Campaign ID
     */
    id: number,
    /**
     * Campaign title
     */
    name: string,
    /**
     * Campaign start time, as Unixtime
     */
    start_time: number,
    /**
     * 
     */
    status: AdsCampaignStatus,
    /**
     * Campaign stop time, as Unixtime
     */
    stop_time: number,
    /**
     * 
     */
    type: AdsCampaignType
}

export type AdsCampaignStatus = number

export type AdsCampaignType = string

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
     * Client's total limit, rubles
     */
    all_limit: string,
    /**
     * Client's day limit, rubles
     */
    day_limit: string,
    /**
     * Client ID
     */
    id: number,
    /**
     * Client name
     */
    name: string
}

export interface AdsCriteria {
    /**
     * Age from
     */
    age_from: number,
    /**
     * Age to
     */
    age_to: number,
    /**
     * Apps IDs
     */
    apps: string,
    /**
     * Apps IDs to except
     */
    apps_not: string,
    /**
     * Days to birthday
     */
    birthday: number,
    /**
     * Cities IDs
     */
    cities: string,
    /**
     * Cities IDs to except
     */
    cities_not: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * Districts IDs
     */
    districts: string,
    /**
     * Communities IDs
     */
    groups: string,
    /**
     * Interests categories IDs
     */
    interest_categories: string,
    /**
     * Interests
     */
    interests: string,
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying: BaseBoolInt,
    /**
     * Positions IDs
     */
    positions: string,
    /**
     * Religions IDs
     */
    religions: string,
    /**
     * Retargeting groups IDs
     */
    retargeting_groups: string,
    /**
     * Retargeting groups IDs to except
     */
    retargeting_groups_not: string,
    /**
     * School graduation year from
     */
    school_from: number,
    /**
     * School graduation year to
     */
    school_to: number,
    /**
     * Schools IDs
     */
    schools: string,
    /**
     * 
     */
    sex: AdsCriteriaSex,
    /**
     * Stations IDs
     */
    stations: string,
    /**
     * Relationship statuses
     */
    statuses: string,
    /**
     * Streets IDs
     */
    streets: string,
    /**
     * Travellers only
     */
    travellers: BasePropertyExists,
    /**
     * University graduation year from
     */
    uni_from: number,
    /**
     * University graduation year to
     */
    uni_to: number,
    /**
     * Browsers
     */
    user_browsers: string,
    /**
     * Devices
     */
    user_devices: string,
    /**
     * Operating systems
     */
    user_os: string
}

export type AdsCriteriaSex = number

export interface AdsDemoStats {
    /**
     * Object ID
     */
    id: number,
    /**
     * 
     */
    stats: AdsDemostatsFormat,
    /**
     * 
     */
    type: AdsObjectType
}

export interface AdsDemostatsFormat {
    /**
     * 
     */
    age: AdsStatsAge[],
    /**
     * 
     */
    cities: AdsStatsCities[],
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
    sex_age: AdsStatsSexAge[]
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
     * Reject reason
     */
    description: string,
    /**
     * URL
     */
    redirect_url: string,
    /**
     * Link status
     */
    status: string
}

export interface AdsLookalikeRequest {
    /**
     * Lookalike request ID
     */
    id: number,
    /**
     * Lookalike request create time, as Unixtime
     */
    create_time: number,
    /**
     * Lookalike request update time, as Unixtime
     */
    update_time: number,
    /**
     * Time by which lookalike request would be deleted, as Unixtime
     */
    scheduled_delete_time: number,
    /**
     * Lookalike request status
     */
    status: string,
    /**
     * Lookalike request source type
     */
    source_type: string,
    /**
     * Retargeting group id, which was used as lookalike seed
     */
    source_retargeting_group_id: number,
    /**
     * Lookalike request seed name (retargeting group name)
     */
    source_name: string,
    /**
     * Lookalike request seed audience size
     */
    audience_count: number,
    /**
     * 
     */
    save_audience_levels: AdsLookalikeRequestSaveAudienceLevel[]
}

export interface AdsLookalikeRequestSaveAudienceLevel {
    /**
     * Save audience level id, which is used in save audience queries
     */
    level: number,
    /**
     * Saved audience audience size for according level
     */
    audience_count: number
}

export interface AdsMusician {
    /**
     * Targeting music artist ID
     */
    id: number,
    /**
     * Music artist name
     */
    name: string
}

export type AdsObjectType = string

export interface AdsParagraphs {
    /**
     * Rules paragraph
     */
    paragraph: string
}

export interface AdsPromotedPostReach {
    /**
     * Hides amount
     */
    hide: number,
    /**
     * Object ID from 'ids' parameter
     */
    id: number,
    /**
     * Community joins
     */
    join_group: number,
    /**
     * Link clicks
     */
    links: number,
    /**
     * Subscribers reach
     */
    reach_subscribers: number,
    /**
     * Total reach
     */
    reach_total: number,
    /**
     * Reports amount
     */
    report: number,
    /**
     * Community clicks
     */
    to_group: number,
    /**
     * 'Unsubscribe' events amount
     */
    unsubscribe: number,
    /**
     * Video views for 100 percent
     */
    video_views_100p: number,
    /**
     * Video views for 25 percent
     */
    video_views_25p: number,
    /**
     * Video views for 3 seconds
     */
    video_views_3s: number,
    /**
     * Video views for 50 percent
     */
    video_views_50p: number,
    /**
     * Video views for 75 percent
     */
    video_views_75p: number,
    /**
     * Video starts
     */
    video_views_start: number
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
     * 
     */
    paragraphs: AdsParagraphs[],
    /**
     * Comment
     */
    title: string
}

export interface AdsStats {
    /**
     * Object ID
     */
    id: number,
    /**
     * 
     */
    stats: AdsStatsFormat,
    /**
     * 
     */
    type: AdsObjectType,
    /**
     * 
     */
    views_times: AdsStatsViewsTimes
}

export interface AdsStatsAge {
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Age interval
     */
    value: string
}

export interface AdsStatsCities {
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * City name
     */
    name: string,
    /**
     * City ID
     */
    value: number
}

export interface AdsStatsFormat {
    /**
     * Clicks number
     */
    clicks: number,
    /**
     * Day as YYYY-MM-DD
     */
    day: string,
    /**
     * Impressions number
     */
    impressions: number,
    /**
     * Events number
     */
    join_rate: number,
    /**
     * Month as YYYY-MM
     */
    month: string,
    /**
     * 1 if period=overall
     */
    overall: number,
    /**
     * Reach 
     */
    reach: number,
    /**
     * Spent funds
     */
    spent: number,
    /**
     * Clickthoughs to the advertised site
     */
    video_clicks_site: number,
    /**
     * Video views number
     */
    video_views: number,
    /**
     * Video views (full video)
     */
    video_views_full: number,
    /**
     * Video views (half of video)
     */
    video_views_half: number
}

export interface AdsStatsSex {
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * 
     */
    value: AdsStatsSexValue
}

export interface AdsStatsSexAge {
    /**
     * Clicks rate
     */
    clicks_rate: number,
    /**
     * Impressions rate
     */
    impressions_rate: number,
    /**
     * Sex and age interval
     */
    value: string
}

export type AdsStatsSexValue = string

export interface AdsStatsViewsTimes {
    /**
     * 
     */
    views_ads_times_1: number,
    /**
     * 
     */
    views_ads_times_2: number,
    /**
     * 
     */
    views_ads_times_3: number,
    /**
     * 
     */
    views_ads_times_4: number,
    /**
     * 
     */
    views_ads_times_5: string,
    /**
     * 
     */
    views_ads_times_6: number,
    /**
     * 
     */
    views_ads_times_7: number,
    /**
     * 
     */
    views_ads_times_8: number,
    /**
     * 
     */
    views_ads_times_9: number,
    /**
     * 
     */
    views_ads_times_10: number,
    /**
     * 
     */
    views_ads_times_11_plus: number
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
     * Age from
     */
    age_from: number,
    /**
     * Age to
     */
    age_to: number,
    /**
     * Apps IDs
     */
    apps: string,
    /**
     * Apps IDs to except
     */
    apps_not: string,
    /**
     * Days to birthday
     */
    birthday: number,
    /**
     * Cities IDs
     */
    cities: string,
    /**
     * Cities IDs to except
     */
    cities_not: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * Districts IDs
     */
    districts: string,
    /**
     * Communities IDs
     */
    groups: string,
    /**
     * Interests categories IDs
     */
    interest_categories: string,
    /**
     * Interests
     */
    interests: string,
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying: BaseBoolInt,
    /**
     * Positions IDs
     */
    positions: string,
    /**
     * Religions IDs
     */
    religions: string,
    /**
     * Retargeting groups IDs
     */
    retargeting_groups: string,
    /**
     * Retargeting groups IDs to except
     */
    retargeting_groups_not: string,
    /**
     * School graduation year from
     */
    school_from: number,
    /**
     * School graduation year to
     */
    school_to: number,
    /**
     * Schools IDs
     */
    schools: string,
    /**
     * 
     */
    sex: AdsCriteriaSex,
    /**
     * Stations IDs
     */
    stations: string,
    /**
     * Relationship statuses
     */
    statuses: string,
    /**
     * Streets IDs
     */
    streets: string,
    /**
     * Travellers only
     */
    travellers: BasePropertyExists,
    /**
     * University graduation year from
     */
    uni_from: number,
    /**
     * University graduation year to
     */
    uni_to: number,
    /**
     * Browsers
     */
    user_browsers: string,
    /**
     * Devices
     */
    user_devices: string,
    /**
     * Operating systems
     */
    user_os: string
}

export interface AdsTargStats {
    /**
     * Audience
     */
    audience_count: number,
    /**
     * Recommended CPC value for 50% reach (old format)
     */
    recommended_cpc: number,
    /**
     * Recommended CPM value for 50% reach (old format)
     */
    recommended_cpm: number,
    /**
     * Recommended CPC value for 50% reach
     */
    recommended_cpc_50: number,
    /**
     * Recommended CPM value for 50% reach
     */
    recommended_cpm_50: number,
    /**
     * Recommended CPC value for 70% reach
     */
    recommended_cpc_70: number,
    /**
     * Recommended CPM value for 70% reach
     */
    recommended_cpm_70: number,
    /**
     * Recommended CPC value for 90% reach
     */
    recommended_cpc_90: number,
    /**
     * Recommended CPM value for 90% reach
     */
    recommended_cpm_90: number
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

export interface AdsTargSuggestionsSchools {
    /**
     * Full school title
     */
    desc: string,
    /**
     * School ID
     */
    id: number,
    /**
     * School title
     */
    name: string,
    /**
     * City name
     */
    parent: string,
    /**
     * 
     */
    type: AdsTargSuggestionsSchoolsType
}

export type AdsTargSuggestionsSchoolsType = string

export interface AdsTargetGroup {
    /**
     * Audience
     */
    audience_count: number,
    /**
     * Site domain
     */
    domain: string,
    /**
     * Group ID
     */
    id: number,
    /**
     * Number of days for user to be in group
     */
    lifetime: number,
    /**
     * Group name
     */
    name: string,
    /**
     * Pixel code
     */
    pixel: string
}

export interface AdsUpdateOfficeUsersResult {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    is_success: boolean,
    /**
     * 
     */
    error: BaseError
}

export interface AdsUserSpecification {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    role: AdsAccessRolePublic,
    /**
     * 
     */
    grant_access_to_all_clients: boolean,
    /**
     * 
     */
    client_ids: number[],
    /**
     * 
     */
    view_budget: boolean
}

export interface AdsUserSpecificationCutted {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    role: AdsAccessRolePublic,
    /**
     * 
     */
    client_id: number,
    /**
     * 
     */
    view_budget: boolean
}

export interface AdsUsers {
    /**
     * 
     */
    accesses: AdsAccesses[],
    /**
     * User ID
     */
    user_id: number
}

export interface AdswebGetAdCategoriesResponseCategoriesCategory {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    name: string
}

export interface AdswebGetAdUnitsResponseAdUnitsAdUnit {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    site_id: number,
    /**
     * 
     */
    name: string
}

export interface AdswebGetFraudHistoryResponseEntriesEntry {
    /**
     * 
     */
    site_id: number,
    /**
     * 
     */
    day: string
}

export interface AdswebGetSitesResponseSitesSite {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    status_user: string,
    /**
     * 
     */
    status_moder: string,
    /**
     * 
     */
    domains: string
}

export interface AdswebGetStatisticsResponseItemsItem {
    /**
     * 
     */
    site_id: number,
    /**
     * 
     */
    ad_unit_id: number,
    /**
     * 
     */
    overall_count: number,
    /**
     * 
     */
    months_count: number,
    /**
     * 
     */
    month_min: string,
    /**
     * 
     */
    month_max: string,
    /**
     * 
     */
    days_count: number,
    /**
     * 
     */
    day_min: string,
    /**
     * 
     */
    day_max: string,
    /**
     * 
     */
    hours_count: number,
    /**
     * 
     */
    hour_min: string,
    /**
     * 
     */
    hour_max: string
}

export interface AppWidgetsPhoto {
    /**
     * Image ID
     */
    id: string,
    /**
     * 
     */
    images: BaseImage[]
}

export interface AppWidgetsPhotos {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: AppWidgetsPhoto[]
}

export interface AppsApp {
    /**
     * 
     */
    type: AppsAppType,
    /**
     * Application ID
     */
    id: number,
    /**
     * Application title
     */
    title: string,
    /**
     * Application author's ID
     */
    author_owner_id: number,
    /**
     * Is application installed
     */
    is_installed: boolean,
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139: string,
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150: string,
    /**
     * URL of the app icon with 278 px in width
     */
    icon_278: string,
    /**
     * URL of the app icon with 576 px in width
     */
    icon_576: string,
    /**
     * Hex color code without hash sign
     */
    background_loader_color: string,
    /**
     * SVG data
     */
    loader_icon: string,
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75: string,
    /**
     * Application author's URL
     */
    author_url: string,
    /**
     * URL of the app banner with 1120 px in width
     */
    banner_1120: string,
    /**
     * URL of the app banner with 560 px in width
     */
    banner_560: string,
    /**
     * URL of the app icon with 16 px in width
     */
    icon_16: string,
    /**
     * Is new flag
     */
    is_new: BaseBoolInt,
    /**
     * Is push enabled
     */
    push_enabled: BaseBoolInt,
    /**
     * Screen orientation
     */
    screen_orientation: number,
    /**
     * 
     */
    friends: number[],
    /**
     * Catalog position
     */
    catalog_position: number,
    /**
     * Application description
     */
    description: string,
    /**
     * Genre name
     */
    genre: string,
    /**
     * Genre ID
     */
    genre_id: number,
    /**
     * Information whether the application is multilanguage
     */
    international: boolean,
    /**
     * Information whether application is in mobile catalog
     */
    is_in_catalog: number,
    /**
     * 
     */
    leaderboard_type: AppsAppLeaderboardType,
    /**
     * Members number
     */
    members_count: number,
    /**
     * Application ID in store
     */
    platform_id: string,
    /**
     * Date when the application has been published in Unixtime
     */
    published_date: number,
    /**
     * Screen name
     */
    screen_name: string,
    /**
     * Application section name
     */
    section: string
}

export type AppsAppLeaderboardType = number

export interface AppsAppMin {
    /**
     * 
     */
    type: AppsAppType,
    /**
     * Application ID
     */
    id: number,
    /**
     * Application title
     */
    title: string,
    /**
     * Application author's ID
     */
    author_owner_id: number,
    /**
     * Is application installed
     */
    is_installed: boolean,
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139: string,
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150: string,
    /**
     * URL of the app icon with 278 px in width
     */
    icon_278: string,
    /**
     * URL of the app icon with 576 px in width
     */
    icon_576: string,
    /**
     * Hex color code without hash sign
     */
    background_loader_color: string,
    /**
     * SVG data
     */
    loader_icon: string,
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75: string
}

export type AppsAppType = string

export interface AppsLeaderboard {
    /**
     * Level
     */
    level: number,
    /**
     * Points number
     */
    points: number,
    /**
     * Score number
     */
    score: number,
    /**
     * User ID
     */
    user_id: number
}

export interface AppsScope {
    /**
     * Scope name
     */
    name: string,
    /**
     * Scope title
     */
    title: string
}

export interface AudioAudio {
    /**
     * Artist name
     */
    artist: string,
    /**
     * Audio ID
     */
    id: number,
    /**
     * Title
     */
    title: string,
    /**
     * URL of mp3 file
     */
    url: string,
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
     * Genre ID
     */
    genre_id: number,
    /**
     * Performer name
     */
    performer: string
}

export type BaseBoolInt = number

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

export interface BaseCommentsInfo {
    /**
     * Information whether current user can comment the post
     */
    can_post: BaseBoolInt,
    /**
     * Comments number
     */
    count: number,
    /**
     * Information whether groups can comment the post
     */
    groups_can_post: boolean,
    /**
     * 
     */
    donut: WallWallpostCommentsDonut
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

export interface BaseCropPhoto {
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    crop: BaseCropPhotoCrop,
    /**
     * 
     */
    rect: BaseCropPhotoRect
}

export interface BaseCropPhotoCrop {
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

export interface BaseCropPhotoRect {
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

export interface BaseError {
    /**
     * Error code
     */
    error_code: number,
    /**
     * Error subcode
     */
    error_subcode: number,
    /**
     * Error message
     */
    error_msg: string,
    /**
     * Localized error message
     */
    error_text: string,
    /**
     * 
     */
    request_params: BaseRequestParam[]
}

export interface BaseGeo {
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
    showmap: number,
    /**
     * Place type
     */
    type: string
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

export interface BaseGradientPoint {
    /**
     * Hex color code without #
     */
    color: string,
    /**
     * Point position
     */
    position: number
}

export interface BaseImage {
    /**
     * 
     */
    id: string,
    /**
     * Image height
     */
    height: number,
    /**
     * Image url
     */
    url: string,
    /**
     * Image width
     */
    width: number
}

export interface BaseLikes {
    /**
     * Likes number
     */
    count: number,
    /**
     * Information whether current user likes the photo
     */
    user_likes: BaseBoolInt
}

export interface BaseLikesInfo {
    /**
     * Information whether current user can like the post
     */
    can_like: BaseBoolInt,
    /**
     * Information whether current user can repost
     */
    can_publish: BaseBoolInt,
    /**
     * Likes number
     */
    count: number,
    /**
     * Information whether current uer has liked the post
     */
    user_likes: number
}

export interface BaseLink {
    /**
     * 
     */
    application: BaseLinkApplication,
    /**
     * 
     */
    button: BaseLinkButton,
    /**
     * Link caption
     */
    caption: string,
    /**
     * Link description
     */
    description: string,
    /**
     * Link ID
     */
    id: string,
    /**
     * 
     */
    is_favorite: boolean,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * String ID of the page with article preview
     */
    preview_page: string,
    /**
     * URL of the page with article preview
     */
    preview_url: string,
    /**
     * 
     */
    product: BaseLinkProduct,
    /**
     * 
     */
    rating: BaseLinkRating,
    /**
     * Link title
     */
    title: string,
    /**
     * Link URL
     */
    url: string,
    /**
     * 
     */
    target_object: LinkTargetObject,
    /**
     * Information whether the current link is external
     */
    is_external: boolean,
    /**
     * Video from link
     */
    video: VideoVideo
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

export interface BaseLinkButton {
    /**
     * Button action
     */
    action: BaseLinkButtonAction,
    /**
     * Button title
     */
    title: string,
    /**
     * Target block id
     */
    block_id: string,
    /**
     * Target section id
     */
    section_id: string,
    /**
     * curator id
     */
    curator_id: number,
    /**
     * Owner id
     */
    owner_id: number,
    /**
     * Button icon name, e.g. 'phone' or 'gift'
     */
    icon: string,
    /**
     * 
     */
    style: BaseLinkButtonStyle
}

export interface BaseLinkButtonAction {
    /**
     * 
     */
    type: BaseLinkButtonActionType,
    /**
     * Action URL
     */
    url: string,
    /**
     * 
     */
    consume_reason: string
}

export type BaseLinkButtonActionType = string

export type BaseLinkButtonStyle = string

export interface BaseLinkProduct {
    /**
     * 
     */
    price: MarketPrice,
    /**
     * 
     */
    merchant: string,
    /**
     * 
     */
    orders_count: number
}

export type BaseLinkProductStatus = string

export interface BaseLinkRating {
    /**
     * Count of reviews
     */
    reviews_count: number,
    /**
     * Count of stars
     */
    stars: number
}

export interface BaseMessageError {
    /**
     * Error code
     */
    code: number,
    /**
     * Error message
     */
    description: string
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

export interface BaseObjectCount {
    /**
     * Items count
     */
    count: number
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

export interface BasePlace {
    /**
     * Place address
     */
    address: string,
    /**
     * Checkins number
     */
    checkins: number,
    /**
     * City name
     */
    city: string,
    /**
     * Country name
     */
    country: string,
    /**
     * Date of the place creation in Unixtime
     */
    created: number,
    /**
     * URL of the place's icon
     */
    icon: string,
    /**
     * Place ID
     */
    id: number,
    /**
     * Place latitude
     */
    latitude: number,
    /**
     * Place longitude
     */
    longitude: number,
    /**
     * Place title
     */
    title: string,
    /**
     * Place type
     */
    type: string
}

export type BasePropertyExists = number

export interface BaseRepostsInfo {
    /**
     * Total reposts counter. Sum of wall and mail reposts counters
     */
    count: number,
    /**
     * Wall reposts counter
     */
    wall_count: number,
    /**
     * Mail reposts counter
     */
    mail_count: number,
    /**
     * Information whether current user has reposted the post
     */
    user_reposted: number
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

export type BaseSex = number

export interface BaseSticker {
    /**
     * Sticker ID
     */
    sticker_id: number,
    /**
     * Pack ID
     */
    product_id: number,
    /**
     * 
     */
    images: BaseImage[],
    /**
     * 
     */
    images_with_background: BaseImage[],
    /**
     * URL of sticker animation script
     */
    animation_url: string,
    /**
     * Array of sticker animation script objects
     */
    animations: BaseStickerAnimation[],
    /**
     * Information whether the sticker is allowed
     */
    is_allowed: boolean
}

export interface BaseStickerAnimation {
    /**
     * Type of animation script
     */
    type: string,
    /**
     * URL of animation script
     */
    url: string
}

export interface BaseUploadServer {
    /**
     * Upload URL
     */
    upload_url: string
}

export type BaseUserGroupFields = string

export interface BaseUserId {
    /**
     * User ID
     */
    user_id: number
}

export type BoardDefaultOrder = number

export interface BoardTopic {
    /**
     * Comments number
     */
    comments: number,
    /**
     * Date when the topic has been created in Unixtime
     */
    created: number,
    /**
     * Creator ID
     */
    created_by: number,
    /**
     * Topic ID
     */
    id: number,
    /**
     * Information whether the topic is closed
     */
    is_closed: BaseBoolInt,
    /**
     * Information whether the topic is fixed
     */
    is_fixed: BaseBoolInt,
    /**
     * Topic title
     */
    title: string,
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated: number,
    /**
     * ID of user who updated the topic
     */
    updated_by: number
}

export interface BoardTopicComment {
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * Real position of the comment
     */
    real_offset: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * Information whether current user can edit the comment
     */
    can_edit: BaseBoolInt,
    /**
     * 
     */
    likes: BaseLikesInfo
}

export interface BoardTopicPoll {
    /**
     * Poll owner's ID
     */
    owner_id: number,
    /**
     * Poll ID
     */
    poll_id: number,
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
    votes: number,
    /**
     * Current user's answer ID
     */
    answer_id: number,
    /**
     * 
     */
    answers: PollsAnswer[]
}

export interface CallbackBoardPostDelete {
    /**
     * 
     */
    topic_owner_id: number,
    /**
     * 
     */
    topic_id: number,
    /**
     * 
     */
    id: number
}

export interface CallbackConfirmationMessage {
    /**
     * 
     */
    type: CallbackMessageType,
    /**
     * 
     */
    group_id: number,
    /**
     * 
     */
    secret: string
}

export interface CallbackDonutMoneyWithdraw {
    /**
     * 
     */
    amount: number,
    /**
     * 
     */
    amount_without_fee: number
}

export interface CallbackDonutMoneyWithdrawError {
    /**
     * 
     */
    reason: string
}

export interface CallbackDonutSubscriptionCancelled {
    /**
     * 
     */
    user_id: number
}

export interface CallbackDonutSubscriptionCreate {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    amount: number,
    /**
     * 
     */
    amount_without_fee: number
}

export interface CallbackDonutSubscriptionExpired {
    /**
     * 
     */
    user_id: number
}

export interface CallbackDonutSubscriptionPriceChanged {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    amount_old: number,
    /**
     * 
     */
    amount_new: number,
    /**
     * 
     */
    amount_diff: number,
    /**
     * 
     */
    amount_diff_without_fee: number
}

export interface CallbackDonutSubscriptionProlonged {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    amount: number,
    /**
     * 
     */
    amount_without_fee: number
}

export interface CallbackGroupChangePhoto {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    photo: PhotosPhoto
}

export interface CallbackGroupChangeSettings {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    self: BaseBoolInt
}

export interface CallbackGroupJoin {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    join_type: CallbackGroupJoinType
}

export type CallbackGroupJoinType = string

export interface CallbackGroupLeave {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    self: BaseBoolInt
}

export type CallbackGroupMarket = number

export type CallbackGroupOfficerRole = number

export interface CallbackGroupOfficersEdit {
    /**
     * 
     */
    admin_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    level_old: CallbackGroupOfficerRole,
    /**
     * 
     */
    level_new: CallbackGroupOfficerRole
}

export interface CallbackGroupSettingsChanges {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    description: string,
    /**
     * 
     */
    access: GroupsGroupIsClosed,
    /**
     * 
     */
    screen_name: string,
    /**
     * 
     */
    public_category: number,
    /**
     * 
     */
    public_subcategory: number,
    /**
     * 
     */
    age_limits: GroupsGroupFullAgeLimits,
    /**
     * 
     */
    website: string,
    /**
     * 
     */
    enable_status_default: GroupsGroupWall,
    /**
     * 
     */
    enable_audio: GroupsGroupAudio,
    /**
     * 
     */
    enable_video: GroupsGroupVideo,
    /**
     * 
     */
    enable_photo: GroupsGroupPhotos,
    /**
     * 
     */
    enable_market: CallbackGroupMarket
}

export interface CallbackLikeAddRemove {
    /**
     * 
     */
    liker_id: number,
    /**
     * 
     */
    object_type: string,
    /**
     * 
     */
    object_owner_id: number,
    /**
     * 
     */
    object_id: number,
    /**
     * 
     */
    post_id: number,
    /**
     * 
     */
    thread_reply_id: number
}

export interface CallbackMarketComment {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    from_id: number,
    /**
     * 
     */
    date: number,
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    market_owner_od: number,
    /**
     * 
     */
    photo_id: number
}

export interface CallbackMarketCommentDelete {
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    item_id: number
}

export interface CallbackMessageAllow {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    key: string
}

export type CallbackMessageBase = any

export interface CallbackMessageDeny {
    /**
     * 
     */
    user_id: number
}

export type CallbackMessageType = string

export interface CallbackPhotoComment {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    from_id: number,
    /**
     * 
     */
    date: number,
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    photo_owner_od: number
}

export interface CallbackPhotoCommentDelete {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    photo_id: number
}

export interface CallbackPollVoteNew {
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    poll_id: number,
    /**
     * 
     */
    option_id: number,
    /**
     * 
     */
    user_id: number
}

export interface CallbackQrScan {
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    data: string,
    /**
     * 
     */
    type: string,
    /**
     * 
     */
    subtype: string,
    /**
     * 
     */
    reread: boolean
}

export interface CallbackUserBlock {
    /**
     * 
     */
    admin_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    unblock_date: number,
    /**
     * 
     */
    reason: number,
    /**
     * 
     */
    comment: string
}

export interface CallbackUserUnblock {
    /**
     * 
     */
    admin_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    by_end_date: number
}

export interface CallbackVideoComment {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    from_id: number,
    /**
     * 
     */
    date: number,
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    video_owner_od: number
}

export interface CallbackVideoCommentDelete {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    video_id: number
}

export interface CallbackWallCommentDelete {
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    post_id: number
}

export interface CallsCall {
    /**
     * Call duration
     */
    duration: number,
    /**
     * Caller initiator
     */
    initiator_id: number,
    /**
     * Caller receiver
     */
    receiver_id: number,
    /**
     * 
     */
    state: CallsEndState,
    /**
     * Timestamp for call
     */
    time: number,
    /**
     * Was this call initiated as video call
     */
    video: boolean
}

export type CallsEndState = string

export interface CallsParticipants {
    /**
     * 
     */
    list: number[],
    /**
     * Participants count
     */
    count: number
}

export interface CommentThread {
    /**
     * Information whether current user can comment the post
     */
    can_post: boolean,
    /**
     * Comments number
     */
    count: number,
    /**
     * Information whether groups can comment the post
     */
    groups_can_post: boolean,
    /**
     * 
     */
    items: WallWallComment[],
    /**
     * Information whether recommended to display reply button
     */
    show_reply_button: boolean
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

export interface DatabaseStation {
    /**
     * City ID
     */
    city_id: number,
    /**
     * Hex color code without #
     */
    color: string,
    /**
     * Station ID
     */
    id: number,
    /**
     * Station name
     */
    name: string
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
     * 
     */
    is_licensed: BaseBoolInt,
    /**
     * Access key for the document
     */
    access_key: string,
    /**
     * Document tags
     */
    tags: string[]
}

export type DocsDocAttachmentType = string

export interface DocsDocPreview {
    /**
     * 
     */
    audio_msg: DocsDocPreviewAudioMsg,
    /**
     * 
     */
    graffiti: DocsDocPreviewGraffiti,
    /**
     * 
     */
    photo: DocsDocPreviewPhoto,
    /**
     * 
     */
    video: DocsDocPreviewVideo
}

export interface DocsDocPreviewAudioMsg {
    /**
     * Audio message duration in seconds
     */
    duration: number,
    /**
     * MP3 file URL
     */
    link_mp3: string,
    /**
     * OGG file URL
     */
    link_ogg: string,
    /**
     * 
     */
    waveform: number[]
}

export interface DocsDocPreviewGraffiti {
    /**
     * Graffiti file URL
     */
    src: string,
    /**
     * Graffiti width
     */
    width: number,
    /**
     * Graffiti height
     */
    height: number
}

export interface DocsDocPreviewPhoto {
    /**
     * 
     */
    sizes: DocsDocPreviewPhotoSizes[]
}

export interface DocsDocPreviewPhotoSizes {
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
    file_size: number
}

export interface DocsDocTypes {
    /**
     * Doc type ID
     */
    id: number,
    /**
     * Doc type title
     */
    name: string,
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

export interface DonutDonatorSubscriptionInfo {
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    next_payment_date: number,
    /**
     * 
     */
    amount: number,
    /**
     * 
     */
    status: string
}

export interface EventsEventAttach {
    /**
     * address of event
     */
    address: string,
    /**
     * text of attach
     */
    button_text: string,
    /**
     * array of friends ids
     */
    friends: number[],
    /**
     * event ID
     */
    id: number,
    /**
     * is favorite
     */
    is_favorite: boolean,
    /**
     * Current user's member status
     */
    member_status: GroupsGroupFullMemberStatus,
    /**
     * text of attach
     */
    text: string,
    /**
     * event start time
     */
    time: number
}

export interface FaveBookmark {
    /**
     * Timestamp, when this item was bookmarked
     */
    added_date: number,
    /**
     * 
     */
    link: BaseLink,
    /**
     * 
     */
    post: WallWallpostFull,
    /**
     * 
     */
    product: MarketMarketItem,
    /**
     * Has user seen this item
     */
    seen: boolean,
    /**
     * 
     */
    tags: FaveTag[],
    /**
     * Item type
     */
    type: FaveBookmarkType,
    /**
     * 
     */
    video: VideoVideo
}

export type FaveBookmarkType = string

export interface FavePage {
    /**
     * Some info about user or group
     */
    description: string,
    /**
     * 
     */
    group: GroupsGroupFull,
    /**
     * 
     */
    tags: FaveTag[],
    /**
     * Item type
     */
    type: FavePageType,
    /**
     * Timestamp, when this page was bookmarked
     */
    updated_date: number,
    /**
     * 
     */
    user: UsersUserFull
}

export type FavePageType = string

export interface FaveTag {
    /**
     * Tag id
     */
    id: number,
    /**
     * Tag name
     */
    name: string
}

export interface FriendsFriendExtendedStatus {
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * MD5 hash for the result validation
     */
    sign: string,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Is friend request from other user unread
     */
    is_request_unread: boolean
}

export interface FriendsFriendStatus {
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * MD5 hash for the result validation
     */
    sign: string,
    /**
     * User ID
     */
    user_id: number
}

export type FriendsFriendStatusStatus = number

export interface FriendsFriendsList {
    /**
     * List ID
     */
    id: number,
    /**
     * List title
     */
    name: string
}

export interface FriendsMutualFriend {
    /**
     * Total mutual friends number
     */
    common_count: number,
    /**
     * 
     */
    common_friends: number[],
    /**
     * User ID
     */
    id: number
}

export interface FriendsRequests {
    /**
     * ID of the user by whom friend has been suggested
     */
    from: string,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User ID
     */
    user_id: number
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
     * ID of the user by whom friend has been suggested
     */
    from: string,
    /**
     * Message sent with a request
     */
    message: string,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User ID
     */
    user_id: number
}

export interface FriendsUserXtrLists {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User's first name in nominative case
     */
    first_name_nom: string,
    /**
     * User's first name in genitive case
     */
    first_name_gen: string,
    /**
     * User's first name in dative case
     */
    first_name_dat: string,
    /**
     * User's first name in accusative case
     */
    first_name_acc: string,
    /**
     * User's first name in instrumental case
     */
    first_name_ins: string,
    /**
     * User's first name in prepositional case
     */
    first_name_abl: string,
    /**
     * User's last name in nominative case
     */
    last_name_nom: string,
    /**
     * User's last name in genitive case
     */
    last_name_gen: string,
    /**
     * User's last name in dative case
     */
    last_name_dat: string,
    /**
     * User's last name in accusative case
     */
    last_name_acc: string,
    /**
     * User's last name in instrumental case
     */
    last_name_ins: string,
    /**
     * User's last name in prepositional case
     */
    last_name_abl: string,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * User contact name
     */
    contact_name: string,
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
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * 
     */
    owner_state: OwnerState,
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
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
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
     * 
     */
    type: UsersUserType,
    /**
     * 
     */
    email: string,
    /**
     * 
     */
    skype: string,
    /**
     * 
     */
    facebook: string,
    /**
     * 
     */
    facebook_name: string,
    /**
     * 
     */
    twitter: string,
    /**
     * 
     */
    livejournal: string,
    /**
     * 
     */
    instagram: string,
    /**
     * 
     */
    test: BaseBoolInt,
    /**
     * 
     */
    video_live: VideoLiveInfo,
    /**
     * 
     */
    is_video_live_notifications_blocked: BaseBoolInt,
    /**
     * 
     */
    is_service: boolean,
    /**
     * 
     */
    service_description: string,
    /**
     * 
     */
    photo_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo: string,
    /**
     * 
     */
    photo_big: string,
    /**
     * 
     */
    photo_400: string,
    /**
     * 
     */
    photo_max_size: PhotosPhoto,
    /**
     * 
     */
    language: string,
    /**
     * 
     */
    stories_archive_count: number,
    /**
     * 
     */
    wall_default: string,
    /**
     * Information whether current user can call
     */
    can_call: boolean,
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes: boolean,
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts: BaseBoolInt,
    /**
     * 
     */
    interests: string,
    /**
     * 
     */
    books: string,
    /**
     * 
     */
    tv: string,
    /**
     * 
     */
    quotes: string,
    /**
     * 
     */
    about: string,
    /**
     * 
     */
    games: string,
    /**
     * 
     */
    movies: string,
    /**
     * 
     */
    activities: string,
    /**
     * 
     */
    music: string,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group: boolean,
    /**
     * User's mobile phone number
     */
    mobile_phone: string,
    /**
     * User's additional phone number
     */
    home_phone: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
    crop_photo: BaseCropPhoto,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * User level in live streams achievements
     */
    video_live_level: number,
    /**
     * Number of user's live streams
     */
    video_live_count: number,
    /**
     * Number of user's clips
     */
    clips_count: number,
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
     * 
     */
    university_group_id: number,
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
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * 
     */
    counters: UsersUserCounters,
    /**
     * 
     */
    access_key: string,
    /**
     * 
     */
    can_upload_doc: BaseBoolInt,
    /**
     * 
     */
    hash: string,
    /**
     * 
     */
    has_email: boolean,
    /**
     * 
     */
    lists: number[]
}

export interface FriendsUserXtrPhone {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User's first name in nominative case
     */
    first_name_nom: string,
    /**
     * User's first name in genitive case
     */
    first_name_gen: string,
    /**
     * User's first name in dative case
     */
    first_name_dat: string,
    /**
     * User's first name in accusative case
     */
    first_name_acc: string,
    /**
     * User's first name in instrumental case
     */
    first_name_ins: string,
    /**
     * User's first name in prepositional case
     */
    first_name_abl: string,
    /**
     * User's last name in nominative case
     */
    last_name_nom: string,
    /**
     * User's last name in genitive case
     */
    last_name_gen: string,
    /**
     * User's last name in dative case
     */
    last_name_dat: string,
    /**
     * User's last name in accusative case
     */
    last_name_acc: string,
    /**
     * User's last name in instrumental case
     */
    last_name_ins: string,
    /**
     * User's last name in prepositional case
     */
    last_name_abl: string,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * User contact name
     */
    contact_name: string,
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
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * 
     */
    owner_state: OwnerState,
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
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
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
     * 
     */
    type: UsersUserType,
    /**
     * 
     */
    email: string,
    /**
     * 
     */
    skype: string,
    /**
     * 
     */
    facebook: string,
    /**
     * 
     */
    facebook_name: string,
    /**
     * 
     */
    twitter: string,
    /**
     * 
     */
    livejournal: string,
    /**
     * 
     */
    instagram: string,
    /**
     * 
     */
    test: BaseBoolInt,
    /**
     * 
     */
    video_live: VideoLiveInfo,
    /**
     * 
     */
    is_video_live_notifications_blocked: BaseBoolInt,
    /**
     * 
     */
    is_service: boolean,
    /**
     * 
     */
    service_description: string,
    /**
     * 
     */
    photo_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo: string,
    /**
     * 
     */
    photo_big: string,
    /**
     * 
     */
    photo_400: string,
    /**
     * 
     */
    photo_max_size: PhotosPhoto,
    /**
     * 
     */
    language: string,
    /**
     * 
     */
    stories_archive_count: number,
    /**
     * 
     */
    wall_default: string,
    /**
     * Information whether current user can call
     */
    can_call: boolean,
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes: boolean,
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts: BaseBoolInt,
    /**
     * 
     */
    interests: string,
    /**
     * 
     */
    books: string,
    /**
     * 
     */
    tv: string,
    /**
     * 
     */
    quotes: string,
    /**
     * 
     */
    about: string,
    /**
     * 
     */
    games: string,
    /**
     * 
     */
    movies: string,
    /**
     * 
     */
    activities: string,
    /**
     * 
     */
    music: string,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group: boolean,
    /**
     * User's mobile phone number
     */
    mobile_phone: string,
    /**
     * User's additional phone number
     */
    home_phone: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
    crop_photo: BaseCropPhoto,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * User level in live streams achievements
     */
    video_live_level: number,
    /**
     * Number of user's live streams
     */
    video_live_count: number,
    /**
     * Number of user's clips
     */
    clips_count: number,
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
     * 
     */
    university_group_id: number,
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
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * 
     */
    counters: UsersUserCounters,
    /**
     * 
     */
    access_key: string,
    /**
     * 
     */
    can_upload_doc: BaseBoolInt,
    /**
     * 
     */
    hash: string,
    /**
     * 
     */
    has_email: boolean,
    /**
     * User phone
     */
    phone: string
}

export interface GiftsGift {
    /**
     * Date when gist has been sent in Unixtime
     */
    date: number,
    /**
     * Gift sender ID
     */
    from_id: number,
    /**
     * 
     */
    gift: GiftsLayout,
    /**
     * Hash
     */
    gift_hash: string,
    /**
     * Gift ID
     */
    id: number,
    /**
     * Comment text
     */
    message: string,
    /**
     * 
     */
    privacy: GiftsGiftPrivacy
}

export type GiftsGiftPrivacy = number

export interface GiftsLayout {
    /**
     * Gift ID
     */
    id: number,
    /**
     * URL of the preview image with 512 px in width
     */
    thumb_512: string,
    /**
     * URL of the preview image with 256 px in width
     */
    thumb_256: string,
    /**
     * URL of the preview image with 48 px in width
     */
    thumb_48: string,
    /**
     * URL of the preview image with 96 px in width
     */
    thumb_96: string,
    /**
     * ID of the sticker pack, if the gift is representing one
     */
    stickers_product_id: number,
    /**
     * Information whether gift represents a stickers style
     */
    is_stickers_style: boolean,
    /**
     * ID of the build of constructor gift
     */
    build_id: string,
    /**
     * Keywords used for search
     */
    keywords: string
}

export interface GroupsAddress {
    /**
     * Additional address to the place (6 floor, left door)
     */
    additional_address: string,
    /**
     * String address to the place (Nevsky, 28)
     */
    address: string,
    /**
     * City id of address
     */
    city_id: number,
    /**
     * Country id of address
     */
    country_id: number,
    /**
     * Distance from the point
     */
    distance: number,
    /**
     * Address id
     */
    id: number,
    /**
     * Address latitude
     */
    latitude: number,
    /**
     * Address longitude
     */
    longitude: number,
    /**
     * Metro id of address
     */
    metro_station_id: number,
    /**
     * Address phone
     */
    phone: string,
    /**
     * Time offset int minutes from utc time
     */
    time_offset: number,
    /**
     * Week timetable for the address
     */
    timetable: GroupsAddressTimetable,
    /**
     * Title of the place (Zinger, etc)
     */
    title: string,
    /**
     * Status of information about timetable
     */
    work_info_status: GroupsAddressWorkInfoStatus
}

export interface GroupsAddressTimetable {
    /**
     * Timetable for friday
     */
    fri: GroupsAddressTimetableDay,
    /**
     * Timetable for monday
     */
    mon: GroupsAddressTimetableDay,
    /**
     * Timetable for saturday
     */
    sat: GroupsAddressTimetableDay,
    /**
     * Timetable for sunday
     */
    sun: GroupsAddressTimetableDay,
    /**
     * Timetable for thursday
     */
    thu: GroupsAddressTimetableDay,
    /**
     * Timetable for tuesday
     */
    tue: GroupsAddressTimetableDay,
    /**
     * Timetable for wednesday
     */
    wed: GroupsAddressTimetableDay
}

export interface GroupsAddressTimetableDay {
    /**
     * Close time of the break in minutes
     */
    break_close_time: number,
    /**
     * Start time of the break in minutes
     */
    break_open_time: number,
    /**
     * Close time in minutes
     */
    close_time: number,
    /**
     * Open time in minutes
     */
    open_time: number
}

export type GroupsAddressWorkInfoStatus = string

export interface GroupsAddressesInfo {
    /**
     * Information whether addresses is enabled
     */
    is_enabled: boolean,
    /**
     * Main address id for group
     */
    main_address_id: number
}

export interface GroupsBanInfo {
    /**
     * Administrator ID
     */
    admin_id: number,
    /**
     * Comment for a ban
     */
    comment: string,
    /**
     * Show comment for user
     */
    comment_visible: boolean,
    /**
     * 
     */
    is_closed: boolean,
    /**
     * Date when user has been added to blacklist in Unixtime
     */
    date: number,
    /**
     * Date when user will be removed from blacklist in Unixtime
     */
    end_date: number,
    /**
     * 
     */
    reason: GroupsBanInfoReason
}

export type GroupsBanInfoReason = number

export type GroupsBannedItem = GroupsOwnerXtrBanInfo

export interface GroupsCallbackServer {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    creator_id: number,
    /**
     * 
     */
    url: string,
    /**
     * 
     */
    secret_key: string,
    /**
     * 
     */
    status: string
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
     * Contact phone
     */
    phone: string,
    /**
     * Contact email
     */
    email: string
}

export interface GroupsCountersGroup {
    /**
     * Addresses number
     */
    addresses: number,
    /**
     * Photo albums number
     */
    albums: number,
    /**
     * Audios number
     */
    audios: number,
    /**
     * Audio playlists number
     */
    audio_playlists: number,
    /**
     * Docs number
     */
    docs: number,
    /**
     * Market items number
     */
    market: number,
    /**
     * Photos number
     */
    photos: number,
    /**
     * Topics number
     */
    topics: number,
    /**
     * Videos number
     */
    videos: number
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

export type GroupsFields = string

export type GroupsFilter = string

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
     * Information whether current user is advertiser
     */
    is_advertiser: BaseBoolInt,
    /**
     * Start date in Unixtime format
     */
    start_date: number,
    /**
     * Finish date in Unixtime format
     */
    finish_date: number,
    /**
     * Information whether community is banned
     */
    deactivated: string,
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

export type GroupsGroupAccess = number

export type GroupsGroupAdminLevel = number

export type GroupsGroupAgeLimits = number

export interface GroupsGroupAttach {
    /**
     * group ID
     */
    id: number,
    /**
     * text of attach
     */
    text: string,
    /**
     * activity or category of group
     */
    status: string,
    /**
     * size of group
     */
    size: number,
    /**
     * is favorite
     */
    is_favorite: boolean
}

export type GroupsGroupAudio = number

export interface GroupsGroupBanInfo {
    /**
     * Ban comment
     */
    comment: string,
    /**
     * End date of ban in Unixtime
     */
    end_date: number,
    /**
     * 
     */
    reason: GroupsBanInfoReason
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
     * Pages number
     */
    page_count: number,
    /**
     * 
     */
    page_previews: GroupsGroup[],
    /**
     * 
     */
    subcategories: GroupsGroupCategory[]
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

export type GroupsGroupDocs = number

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
     * Information whether current user is advertiser
     */
    is_advertiser: BaseBoolInt,
    /**
     * Start date in Unixtime format
     */
    start_date: number,
    /**
     * Finish date in Unixtime format
     */
    finish_date: number,
    /**
     * Information whether community is banned
     */
    deactivated: string,
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
     * Information whether community is adult
     */
    is_adult: BaseBoolInt,
    /**
     * Information whether community is hidden from current user's newsfeed
     */
    is_hidden_from_feed: BaseBoolInt,
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
     * The number of incoming requests to the community
     */
    requests_count: number,
    /**
     * Community level live streams achievements
     */
    video_live_level: number,
    /**
     * Number of community's live streams
     */
    video_live_count: number,
    /**
     * Number of community's clips
     */
    clips_count: number,
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
     * 
     */
    can_suggest: BaseBoolInt,
    /**
     * Information whether current user can upload story
     */
    can_upload_story: BaseBoolInt,
    /**
     * Information whether current user can upload doc
     */
    can_upload_doc: BaseBoolInt,
    /**
     * Information whether current user can upload video
     */
    can_upload_video: BaseBoolInt,
    /**
     * Information whether current user can see all posts on community's wall
     */
    can_see_all_posts: BaseBoolInt,
    /**
     * Information whether current user can create topic
     */
    can_create_topic: BaseBoolInt,
    /**
     * Type of group, start date of event or category of public page
     */
    activity: string,
    /**
     * Fixed post ID
     */
    fixed_post: number,
    /**
     * Information whether community has photo
     */
    has_photo: BaseBoolInt,
    /**
     * Данные о точках, по которым вырезаны профильная и миниатюрная фотографии сообщества
     */
    crop_photo: BaseCropPhoto,
    /**
     * Community status
     */
    status: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
     * Information about wall status in community
     */
    wall: number,
    /**
     * Community's website
     */
    site: string,
    /**
     * 
     */
    main_section: GroupsGroupFullMainSection,
    /**
     * 
     */
    secondary_section: number,
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
     * Information whether community can send notifications by phone number to current user
     */
    can_send_notify: BaseBoolInt,
    /**
     * Status of replies in community messages
     */
    online_status: GroupsOnlineStatus,
    /**
     * Inviter ID
     */
    invited_by: number,
    /**
     * Information whether age limit
     */
    age_limits: GroupsGroupFullAgeLimits,
    /**
     * User ban info
     */
    ban_info: GroupsGroupBanInfo,
    /**
     * Information whether community has installed market app
     */
    has_market_app: boolean,
    /**
     * 
     */
    using_vkpay_market_app: boolean,
    /**
     * 
     */
    has_group_channel: boolean,
    /**
     * Info about addresses in groups
     */
    addresses: GroupsAddressesInfo,
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * Live covers state
     */
    live_covers: GroupsLiveCovers,
    /**
     * 
     */
    stories_archive_count: number
}

export type GroupsGroupFullAgeLimits = number

export type GroupsGroupFullMainSection = number

export type GroupsGroupFullMemberStatus = number

export type GroupsGroupIsClosed = number

export interface GroupsGroupLink {
    /**
     * Link label
     */
    name: string,
    /**
     * Link description
     */
    desc: string,
    /**
     * Information whether the title can be edited
     */
    edit_title: BaseBoolInt,
    /**
     * Link ID
     */
    id: number,
    /**
     * Information whether the image on processing
     */
    image_processing: BaseBoolInt,
    /**
     * Link URL
     */
    url: string
}

export type GroupsGroupMarketCurrency = number

export type GroupsGroupPhotos = number

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
    subcategories: GroupsGroupCategoryType[]
}

export type GroupsGroupRole = string

export type GroupsGroupSubject = string

export type GroupsGroupSuggestedPrivacy = number

export interface GroupsGroupTag {
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
    color: string,
    /**
     * 
     */
    uses: number
}

export type GroupsGroupTopics = number

export type GroupsGroupType = string

export type GroupsGroupVideo = number

export type GroupsGroupWall = number

export type GroupsGroupWiki = number

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

export interface GroupsLinksItem {
    /**
     * Link description
     */
    desc: string,
    /**
     * Information whether the link title can be edited
     */
    edit_title: BaseBoolInt,
    /**
     * Link ID
     */
    id: number,
    /**
     * Link title
     */
    name: string,
    /**
     * URL of square image of the link with 100 pixels in width
     */
    photo_100: string,
    /**
     * URL of square image of the link with 50 pixels in width
     */
    photo_50: string,
    /**
     * Link URL
     */
    url: string
}

export interface GroupsLiveCovers {
    /**
     * Information whether live covers is enabled
     */
    is_enabled: boolean,
    /**
     * Information whether live covers photo scaling is enabled
     */
    is_scalable: boolean,
    /**
     * 
     */
    story_ids: string[]
}

export interface GroupsLongPollEvents {
    /**
     * 
     */
    audio_new: BaseBoolInt,
    /**
     * 
     */
    board_post_delete: BaseBoolInt,
    /**
     * 
     */
    board_post_edit: BaseBoolInt,
    /**
     * 
     */
    board_post_new: BaseBoolInt,
    /**
     * 
     */
    board_post_restore: BaseBoolInt,
    /**
     * 
     */
    group_change_photo: BaseBoolInt,
    /**
     * 
     */
    group_change_settings: BaseBoolInt,
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
    group_officers_edit: BaseBoolInt,
    /**
     * 
     */
    lead_forms_new: BaseBoolInt,
    /**
     * 
     */
    market_comment_delete: BaseBoolInt,
    /**
     * 
     */
    market_comment_edit: BaseBoolInt,
    /**
     * 
     */
    market_comment_new: BaseBoolInt,
    /**
     * 
     */
    market_comment_restore: BaseBoolInt,
    /**
     * 
     */
    market_order_new: BaseBoolInt,
    /**
     * 
     */
    market_order_edit: BaseBoolInt,
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
    message_new: BaseBoolInt,
    /**
     * 
     */
    message_read: BaseBoolInt,
    /**
     * 
     */
    message_reply: BaseBoolInt,
    /**
     * 
     */
    message_typing_state: BaseBoolInt,
    /**
     * 
     */
    message_edit: BaseBoolInt,
    /**
     * 
     */
    photo_comment_delete: BaseBoolInt,
    /**
     * 
     */
    photo_comment_edit: BaseBoolInt,
    /**
     * 
     */
    photo_comment_new: BaseBoolInt,
    /**
     * 
     */
    photo_comment_restore: BaseBoolInt,
    /**
     * 
     */
    photo_new: BaseBoolInt,
    /**
     * 
     */
    poll_vote_new: BaseBoolInt,
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
    video_comment_delete: BaseBoolInt,
    /**
     * 
     */
    video_comment_edit: BaseBoolInt,
    /**
     * 
     */
    video_comment_new: BaseBoolInt,
    /**
     * 
     */
    video_comment_restore: BaseBoolInt,
    /**
     * 
     */
    video_new: BaseBoolInt,
    /**
     * 
     */
    wall_post_new: BaseBoolInt,
    /**
     * 
     */
    wall_reply_delete: BaseBoolInt,
    /**
     * 
     */
    wall_reply_edit: BaseBoolInt,
    /**
     * 
     */
    wall_reply_new: BaseBoolInt,
    /**
     * 
     */
    wall_reply_restore: BaseBoolInt,
    /**
     * 
     */
    wall_repost: BaseBoolInt,
    /**
     * 
     */
    donut_subscription_create: BaseBoolInt,
    /**
     * 
     */
    donut_subscription_prolonged: BaseBoolInt,
    /**
     * 
     */
    donut_subscription_cancelled: BaseBoolInt,
    /**
     * 
     */
    donut_subscription_expired: BaseBoolInt,
    /**
     * 
     */
    donut_subscription_price_changed: BaseBoolInt,
    /**
     * 
     */
    donut_money_withdraw: BaseBoolInt,
    /**
     * 
     */
    donut_money_withdraw_error: BaseBoolInt
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
    ts: string
}

export interface GroupsLongPollSettings {
    /**
     * API version used for the events
     */
    api_version: string,
    /**
     * 
     */
    events: GroupsLongPollEvents,
    /**
     * Shows whether Long Poll is enabled
     */
    is_enabled: boolean
}

export interface GroupsMarketInfo {
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
    currency_text: string,
    /**
     * Information whether the market is enabled
     */
    enabled: BaseBoolInt,
    /**
     * Main market album ID
     */
    main_album_id: number,
    /**
     * Maximum price
     */
    price_max: string,
    /**
     * Minimum price
     */
    price_min: string
}

export type GroupsMarketState = string

export interface GroupsMemberRole {
    /**
     * User ID
     */
    id: number,
    /**
     * 
     */
    permissions: GroupsMemberRolePermission[],
    /**
     * 
     */
    role: GroupsMemberRoleStatus
}

export type GroupsMemberRolePermission = string

export type GroupsMemberRoleStatus = string

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
     * Information whether user can be invited
     */
    can_invite: BaseBoolInt,
    /**
     * Information whether user's invite to the group can be recalled
     */
    can_recall: BaseBoolInt,
    /**
     * Information whether user has been invited to the group
     */
    invitation: BaseBoolInt,
    /**
     * Information whether user is a member of the group
     */
    member: BaseBoolInt,
    /**
     * Information whether user has send request to the group
     */
    request: BaseBoolInt,
    /**
     * User ID
     */
    user_id: number
}

export interface GroupsOnlineStatus {
    /**
     * Estimated time of answer (for status = answer_mark)
     */
    minutes: number,
    /**
     * 
     */
    status: GroupsOnlineStatusType
}

export type GroupsOnlineStatusType = string

export interface GroupsOwnerXtrBanInfo {
    /**
     * 
     */
    ban_info: GroupsBanInfo,
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
    type: GroupsOwnerXtrBanInfoType
}

export type GroupsOwnerXtrBanInfoType = string

export interface GroupsProfileItem {
    /**
     * User id
     */
    id: number,
    /**
     * Url for user photo
     */
    photo_50: string,
    /**
     * Url for user photo
     */
    photo_100: string
}

export type GroupsRoleOptions = string

export interface GroupsSettingsTwitter {
    /**
     * 
     */
    status: string,
    /**
     * 
     */
    name: string
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

export interface GroupsTokenPermissionSetting {
    /**
     * 
     */
    name: string,
    /**
     * 
     */
    setting: number
}

export interface GroupsUserXtrRole {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User's first name in nominative case
     */
    first_name_nom: string,
    /**
     * User's first name in genitive case
     */
    first_name_gen: string,
    /**
     * User's first name in dative case
     */
    first_name_dat: string,
    /**
     * User's first name in accusative case
     */
    first_name_acc: string,
    /**
     * User's first name in instrumental case
     */
    first_name_ins: string,
    /**
     * User's first name in prepositional case
     */
    first_name_abl: string,
    /**
     * User's last name in nominative case
     */
    last_name_nom: string,
    /**
     * User's last name in genitive case
     */
    last_name_gen: string,
    /**
     * User's last name in dative case
     */
    last_name_dat: string,
    /**
     * User's last name in accusative case
     */
    last_name_acc: string,
    /**
     * User's last name in instrumental case
     */
    last_name_ins: string,
    /**
     * User's last name in prepositional case
     */
    last_name_abl: string,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * User contact name
     */
    contact_name: string,
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
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * 
     */
    owner_state: OwnerState,
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
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
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
     * 
     */
    type: UsersUserType,
    /**
     * 
     */
    email: string,
    /**
     * 
     */
    skype: string,
    /**
     * 
     */
    facebook: string,
    /**
     * 
     */
    facebook_name: string,
    /**
     * 
     */
    twitter: string,
    /**
     * 
     */
    livejournal: string,
    /**
     * 
     */
    instagram: string,
    /**
     * 
     */
    test: BaseBoolInt,
    /**
     * 
     */
    video_live: VideoLiveInfo,
    /**
     * 
     */
    is_video_live_notifications_blocked: BaseBoolInt,
    /**
     * 
     */
    is_service: boolean,
    /**
     * 
     */
    service_description: string,
    /**
     * 
     */
    photo_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo: string,
    /**
     * 
     */
    photo_big: string,
    /**
     * 
     */
    photo_400: string,
    /**
     * 
     */
    photo_max_size: PhotosPhoto,
    /**
     * 
     */
    language: string,
    /**
     * 
     */
    stories_archive_count: number,
    /**
     * 
     */
    wall_default: string,
    /**
     * Information whether current user can call
     */
    can_call: boolean,
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes: boolean,
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts: BaseBoolInt,
    /**
     * 
     */
    interests: string,
    /**
     * 
     */
    books: string,
    /**
     * 
     */
    tv: string,
    /**
     * 
     */
    quotes: string,
    /**
     * 
     */
    about: string,
    /**
     * 
     */
    games: string,
    /**
     * 
     */
    movies: string,
    /**
     * 
     */
    activities: string,
    /**
     * 
     */
    music: string,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group: boolean,
    /**
     * User's mobile phone number
     */
    mobile_phone: string,
    /**
     * User's additional phone number
     */
    home_phone: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
    crop_photo: BaseCropPhoto,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * User level in live streams achievements
     */
    video_live_level: number,
    /**
     * Number of user's live streams
     */
    video_live_count: number,
    /**
     * Number of user's clips
     */
    clips_count: number,
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
     * 
     */
    university_group_id: number,
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
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * 
     */
    counters: UsersUserCounters,
    /**
     * 
     */
    access_key: string,
    /**
     * 
     */
    can_upload_doc: BaseBoolInt,
    /**
     * 
     */
    hash: string,
    /**
     * 
     */
    has_email: boolean,
    /**
     * 
     */
    role: GroupsRoleOptions
}

export type LikesType = string

export interface LinkTargetObject {
    /**
     * Object type
     */
    type: string,
    /**
     * Owner ID
     */
    owner_id: number,
    /**
     * Item ID
     */
    item_id: number
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

export interface MarketMarketAlbum {
    /**
     * Items number
     */
    count: number,
    /**
     * Market album ID
     */
    id: number,
    /**
     * Market album owner's ID
     */
    owner_id: number,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * Market album title
     */
    title: string,
    /**
     * Date when album has been updated last time in Unixtime
     */
    updated_time: number
}

export type MarketMarketCategory = MarketMarketCategoryOld

export interface MarketMarketCategoryNested {
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
    parent: MarketMarketCategoryNested
}

export interface MarketMarketCategoryOld {
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

export interface MarketMarketCategoryTree {
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
    children: MarketMarketCategoryTree[]
}

export interface MarketMarketItem {
    /**
     * Access key for the market item
     */
    access_key: string,
    /**
     * 
     */
    availability: MarketMarketItemAvailability,
    /**
     * Title for button for url
     */
    button_title: string,
    /**
     * 
     */
    category: MarketMarketCategory,
    /**
     * Date when the item has been created in Unixtime
     */
    date: number,
    /**
     * Item description
     */
    description: string,
    /**
     * 
     */
    external_id: string,
    /**
     * Item ID
     */
    id: number,
    /**
     * 
     */
    is_favorite: boolean,
    /**
     * Item owner's ID
     */
    owner_id: number,
    /**
     * 
     */
    price: MarketPrice,
    /**
     * URL of the preview image
     */
    thumb_photo: string,
    /**
     * Item title
     */
    title: string,
    /**
     * URL to item
     */
    url: string,
    /**
     * 
     */
    variants_grouping_id: number,
    /**
     * 
     */
    is_main_variant: boolean
}

export type MarketMarketItemAvailability = number

export interface MarketMarketItemFull {
    /**
     * Access key for the market item
     */
    access_key: string,
    /**
     * 
     */
    availability: MarketMarketItemAvailability,
    /**
     * Title for button for url
     */
    button_title: string,
    /**
     * 
     */
    category: MarketMarketCategory,
    /**
     * Date when the item has been created in Unixtime
     */
    date: number,
    /**
     * Item description
     */
    description: string,
    /**
     * 
     */
    external_id: string,
    /**
     * Item ID
     */
    id: number,
    /**
     * 
     */
    is_favorite: boolean,
    /**
     * Item owner's ID
     */
    owner_id: number,
    /**
     * 
     */
    price: MarketPrice,
    /**
     * URL of the preview image
     */
    thumb_photo: string,
    /**
     * Item title
     */
    title: string,
    /**
     * URL to item
     */
    url: string,
    /**
     * 
     */
    variants_grouping_id: number,
    /**
     * 
     */
    is_main_variant: boolean,
    /**
     * 
     */
    albums_ids: number[],
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
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Views number
     */
    views_count: number,
    /**
     * Object identifier in wishlist of viewer
     */
    wishlist_item_id: number,
    /**
     * Information for cancel and revert order
     */
    cancel_info: BaseLink,
    /**
     * User agreement info
     */
    user_agreement_info: string
}

export interface MarketOrder {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    group_id: number,
    /**
     * 
     */
    user_id: number,
    /**
     * 
     */
    display_order_id: string,
    /**
     * 
     */
    date: number,
    /**
     * 
     */
    status: number,
    /**
     * 
     */
    items_count: number,
    /**
     * 
     */
    track_number: string,
    /**
     * 
     */
    track_link: string,
    /**
     * 
     */
    comment: string,
    /**
     * 
     */
    address: string,
    /**
     * 
     */
    merchant_comment: string,
    /**
     * 
     */
    weight: number,
    /**
     * 
     */
    total_price: MarketPrice,
    /**
     * Several order items for preview
     */
    preview_order_items: MarketOrderItem[],
    /**
     * Information for cancel and revert order
     */
    cancel_info: BaseLink
}

export interface MarketOrderItem {
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    item_id: number,
    /**
     * 
     */
    price: MarketPrice,
    /**
     * 
     */
    quantity: number,
    /**
     * 
     */
    item: MarketMarketItem,
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    variants: string[]
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
     * 
     */
    discount_rate: number,
    /**
     * 
     */
    old_amount: string,
    /**
     * Text
     */
    text: string,
    /**
     * Textual representation of old price
     */
    old_amount_text: string
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

export interface MediaRestriction {
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    button: VideoRestrictionButton,
    /**
     * Need show restriction always or not
     */
    always_shown: BaseBoolInt,
    /**
     * Need blur current video or not
     */
    blur: BaseBoolInt,
    /**
     * Can play video or not
     */
    can_play: BaseBoolInt,
    /**
     * Can preview video or not
     */
    can_preview: BaseBoolInt,
    /**
     * 
     */
    card_icon: BaseImage[],
    /**
     * 
     */
    list_icon: BaseImage[]
}

export interface MessagesAudioMessage {
    /**
     * Access key for audio message
     */
    access_key: string,
    /**
     * 
     */
    transcript_error: number,
    /**
     * Audio message duration in seconds
     */
    duration: number,
    /**
     * Audio message ID
     */
    id: number,
    /**
     * MP3 file URL
     */
    link_mp3: string,
    /**
     * OGG file URL
     */
    link_ogg: string,
    /**
     * Audio message owner ID
     */
    owner_id: number,
    /**
     * 
     */
    waveform: number[]
}

export interface MessagesChat {
    /**
     * Chat creator ID
     */
    admin_id: number,
    /**
     * Chat ID
     */
    id: number,
    /**
     * Shows that user has been kicked from the chat
     */
    kicked: BaseBoolInt,
    /**
     * Shows that user has been left the chat
     */
    left: BaseBoolInt,
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string,
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50: string,
    /**
     * 
     */
    push_settings: MessagesChatPushSettings,
    /**
     * Chat title
     */
    title: string,
    /**
     * Chat type
     */
    type: string,
    /**
     * 
     */
    users: number[],
    /**
     * If provided photo is default
     */
    is_default_photo: boolean
}

export interface MessagesChatFull {
    /**
     * Chat creator ID
     */
    admin_id: number,
    /**
     * Chat ID
     */
    id: number,
    /**
     * Shows that user has been kicked from the chat
     */
    kicked: BaseBoolInt,
    /**
     * Shows that user has been left the chat
     */
    left: BaseBoolInt,
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200: string,
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50: string,
    /**
     * 
     */
    push_settings: MessagesChatPushSettings,
    /**
     * Chat title
     */
    title: string,
    /**
     * Chat type
     */
    type: string,
    /**
     * 
     */
    users: MessagesUserXtrInvitedBy[]
}

export interface MessagesChatPreview {
    /**
     * 
     */
    admin_id: number,
    /**
     * 
     */
    joined: boolean,
    /**
     * 
     */
    local_id: number,
    /**
     * 
     */
    members: number[],
    /**
     * 
     */
    members_count: number,
    /**
     * 
     */
    title: string
}

export interface MessagesChatPushSettings {
    /**
     * Time until that notifications are disabled
     */
    disabled_until: number,
    /**
     * Information whether the sound is on
     */
    sound: BaseBoolInt
}

export interface MessagesChatRestrictions {
    /**
     * Only admins can promote users to admins
     */
    admins_promote_users: boolean,
    /**
     * Only admins can change chat info
     */
    only_admins_edit_info: boolean,
    /**
     * Only admins can edit pinned message
     */
    only_admins_edit_pin: boolean,
    /**
     * Only admins can invite users to this chat
     */
    only_admins_invite: boolean,
    /**
     * Only admins can kick users from this chat
     */
    only_admins_kick: boolean
}

export interface MessagesChatSettings {
    /**
     * 
     */
    members_count: number,
    /**
     * 
     */
    owner_id: number,
    /**
     * Chat title
     */
    title: string,
    /**
     * 
     */
    pinned_message: MessagesPinnedMessage,
    /**
     * 
     */
    state: MessagesChatSettingsState,
    /**
     * 
     */
    photo: MessagesChatSettingsPhoto,
    /**
     * Ids of chat admins
     */
    admin_ids: number[],
    /**
     * 
     */
    active_ids: number[],
    /**
     * 
     */
    is_group_channel: boolean,
    /**
     * 
     */
    acl: MessagesChatSettingsAcl,
    /**
     * 
     */
    permissions: MessagesChatSettingsPermissions,
    /**
     * 
     */
    is_disappearing: boolean,
    /**
     * 
     */
    theme: string,
    /**
     * 
     */
    disappearing_chat_link: string,
    /**
     * 
     */
    is_service: boolean
}

export interface MessagesChatSettingsAcl {
    /**
     * Can you change photo, description and name
     */
    can_change_info: boolean,
    /**
     * Can you change invite link for this chat
     */
    can_change_invite_link: boolean,
    /**
     * Can you pin/unpin message for this chat
     */
    can_change_pin: boolean,
    /**
     * Can you invite other peers in chat
     */
    can_invite: boolean,
    /**
     * Can you promote simple users to chat admins
     */
    can_promote_users: boolean,
    /**
     * Can you see invite link for this chat
     */
    can_see_invite_link: boolean,
    /**
     * Can you moderate (delete) other users' messages
     */
    can_moderate: boolean,
    /**
     * Can you copy chat
     */
    can_copy_chat: boolean,
    /**
     * Can you init group call in the chat
     */
    can_call: boolean,
    /**
     * Can you use mass mentions
     */
    can_use_mass_mentions: boolean,
    /**
     * Can you change chat service type
     */
    can_change_service_type: boolean
}

export interface MessagesChatSettingsPermissions {
    /**
     * Who can invite users to chat
     */
    invite: string,
    /**
     * Who can change chat info
     */
    change_info: string,
    /**
     * Who can change pinned message
     */
    change_pin: string,
    /**
     * Who can use mass mentions
     */
    use_mass_mentions: string,
    /**
     * Who can see invite link
     */
    see_invite_link: string,
    /**
     * Who can make calls
     */
    call: string,
    /**
     * Who can change admins
     */
    change_admins: string
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
    photo_200: string,
    /**
     * If provided photo is default
     */
    is_default_photo: boolean
}

export type MessagesChatSettingsState = string

export interface MessagesConversation {
    /**
     * 
     */
    peer: MessagesConversationPeer,
    /**
     * 
     */
    sort_id: MessagesConversationSortId,
    /**
     * ID of the last message in conversation
     */
    last_message_id: number,
    /**
     * Last message user have read
     */
    in_read: number,
    /**
     * Last outcoming message have been read by the opponent
     */
    out_read: number,
    /**
     * Unread messages number
     */
    unread_count: number,
    /**
     * Is this conversation uread
     */
    is_marked_unread: boolean,
    /**
     * 
     */
    out_read_by: MessagesOutReadBy,
    /**
     * 
     */
    important: boolean,
    /**
     * 
     */
    unanswered: boolean,
    /**
     * 
     */
    special_service_type: string,
    /**
     * 
     */
    message_request_data: MessagesMessageRequestData,
    /**
     * Ids of messages with mentions
     */
    mentions: number[],
    /**
     * 
     */
    current_keyboard: MessagesKeyboard,
    /**
     * 
     */
    push_settings: MessagesPushSettings,
    /**
     * 
     */
    can_write: MessagesConversationCanWrite,
    /**
     * 
     */
    chat_settings: MessagesChatSettings
}

export interface MessagesConversationCanWrite {
    /**
     * 
     */
    allowed: boolean,
    /**
     * 
     */
    reason: number
}

export interface MessagesConversationMember {
    /**
     * Is it possible for user to kick this member
     */
    can_kick: boolean,
    /**
     * 
     */
    invited_by: number,
    /**
     * 
     */
    is_admin: boolean,
    /**
     * 
     */
    is_owner: boolean,
    /**
     * 
     */
    is_message_request: boolean,
    /**
     * 
     */
    join_date: number,
    /**
     * Message request date
     */
    request_date: number,
    /**
     * 
     */
    member_id: number
}

export interface MessagesConversationPeer {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    local_id: number,
    /**
     * 
     */
    type: MessagesConversationPeerType
}

export type MessagesConversationPeerType = string

export interface MessagesConversationSortId {
    /**
     * Major id for sorting conversations
     */
    major_id: number,
    /**
     * Minor id for sorting conversations
     */
    minor_id: number
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

export interface MessagesForeignMessage {
    /**
     * 
     */
    attachments: MessagesMessageAttachment[],
    /**
     * Conversation message ID
     */
    conversation_message_id: number,
    /**
     * Date when the message was created
     */
    date: number,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * 
     */
    fwd_messages: MessagesForeignMessage[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * Message ID
     */
    id: number,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * 
     */
    reply_message: MessagesForeignMessage,
    /**
     * Message text
     */
    text: string,
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time: number,
    /**
     * Was the audio message inside already listened by you
     */
    was_listened: boolean,
    /**
     * Additional data sent along with message for developer convenience
     */
    payload: string
}

export interface MessagesForward {
    /**
     * Messages owner_id
     */
    owner_id: number,
    /**
     * Messages peer_id
     */
    peer_id: number,
    /**
     * 
     */
    conversation_message_ids: number[],
    /**
     * 
     */
    message_ids: number[],
    /**
     * If you need to reply to a message
     */
    is_reply: boolean
}

export interface MessagesGraffiti {
    /**
     * Access key for graffiti
     */
    access_key: string,
    /**
     * Graffiti height
     */
    height: number,
    /**
     * Graffiti ID
     */
    id: number,
    /**
     * Graffiti owner ID
     */
    owner_id: number,
    /**
     * Graffiti URL
     */
    url: string,
    /**
     * Graffiti width
     */
    width: number
}

export interface MessagesHistoryAttachment {
    /**
     * 
     */
    attachment: MessagesHistoryMessageAttachment,
    /**
     * Message ID
     */
    message_id: number,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * Forward level (optional)
     */
    forward_level: number
}

export interface MessagesHistoryMessageAttachment {
    /**
     * 
     */
    audio: AudioAudio,
    /**
     * 
     */
    audio_message: MessagesAudioMessage,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    graffiti: MessagesGraffiti,
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
    photo: PhotosPhoto,
    /**
     * 
     */
    share: BaseLink,
    /**
     * 
     */
    type: MessagesHistoryMessageAttachmentType,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    wall: BaseLink
}

export type MessagesHistoryMessageAttachmentType = string

export interface MessagesKeyboard {
    /**
     * Community or bot, which set this keyboard
     */
    author_id: number,
    /**
     * 
     */
    buttons: MessagesKeyboardButton[][],
    /**
     * Should this keyboard disappear on first use
     */
    one_time: boolean,
    /**
     * 
     */
    inline: boolean
}

export interface MessagesKeyboardButton {
    /**
     * 
     */
    action: MessagesKeyboardButtonAction,
    /**
     * Button color
     */
    color: string
}

export interface MessagesKeyboardButtonAction {
    /**
     * Fragment value in app link like vk.com/app{app_id}_-654321#hash
     */
    app_id: number,
    /**
     * Fragment value in app link like vk.com/app123456_-654321#{hash}
     */
    hash: string,
    /**
     * Label for button
     */
    label: string,
    /**
     * link for button
     */
    link: string,
    /**
     * Fragment value in app link like vk.com/app123456_{owner_id}#hash
     */
    owner_id: number,
    /**
     * Additional data sent along with message for developer convenience
     */
    payload: string,
    /**
     * Button type
     */
    type: MessagesTemplateActionTypeNames
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

export interface MessagesLongpollParams {
    /**
     * Server URL
     */
    server: string,
    /**
     * Key
     */
    key: string,
    /**
     * Timestamp
     */
    ts: number,
    /**
     * Persistent timestamp
     */
    pts: number
}

export interface MessagesMessage {
    /**
     * 
     */
    action: MessagesMessageAction,
    /**
     * Only for messages from community. Contains user ID of community admin, who sent this message.
     */
    admin_author_id: number,
    /**
     * 
     */
    attachments: MessagesMessageAttachment[],
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number,
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number,
    /**
     * Is it an deleted message
     */
    deleted: BaseBoolInt,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * Forwarded messages
     */
    fwd_messages: MessagesForeignMessage[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * Message ID
     */
    id: number,
    /**
     * Is it an important message
     */
    important: boolean,
    /**
     * 
     */
    is_hidden: boolean,
    /**
     * this message is cropped for bot
     */
    is_cropped: boolean,
    /**
     * 
     */
    keyboard: MessagesKeyboard,
    /**
     * Members number
     */
    members_count: number,
    /**
     * Information whether the message is outcoming
     */
    out: BaseBoolInt,
    /**
     * 
     */
    payload: string,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id: number,
    /**
     * 
     */
    ref: string,
    /**
     * 
     */
    ref_source: string,
    /**
     * 
     */
    reply_message: MessagesForeignMessage,
    /**
     * Message text
     */
    text: string,
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time: number,
    /**
     * Was the audio message inside already listened by you
     */
    was_listened: boolean,
    /**
     * Date when the message has been pinned in Unixtime
     */
    pinned_at: number
}

export interface MessagesMessageAction {
    /**
     * Message ID
     */
    conversation_message_id: number,
    /**
     * Email address for chat_invite_user or chat_kick_user actions
     */
    email: string,
    /**
     * User or email peer ID
     */
    member_id: number,
    /**
     * Message body of related message
     */
    message: string,
    /**
     * 
     */
    photo: MessagesMessageActionPhoto,
    /**
     * New chat title for chat_create and chat_title_update actions
     */
    text: string,
    /**
     * 
     */
    type: MessagesMessageActionStatus
}

export interface MessagesMessageActionPhoto {
    /**
     * URL of the preview image with 100px in width
     */
    photo_100: string,
    /**
     * URL of the preview image with 200px in width
     */
    photo_200: string,
    /**
     * URL of the preview image with 50px in width
     */
    photo_50: string
}

export type MessagesMessageActionStatus = string

export interface MessagesMessageAttachment {
    /**
     * 
     */
    audio: AudioAudio,
    /**
     * 
     */
    audio_message: MessagesAudioMessage,
    /**
     * 
     */
    call: CallsCall,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    gift: GiftsLayout,
    /**
     * 
     */
    graffiti: MessagesGraffiti,
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
    photo: PhotosPhoto,
    /**
     * 
     */
    sticker: BaseSticker,
    /**
     * 
     */
    story: StoriesStory,
    /**
     * 
     */
    type: MessagesMessageAttachmentType,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * 
     */
    wall: WallWallpostFull,
    /**
     * 
     */
    wall_reply: WallWallComment,
    /**
     * 
     */
    poll: PollsPoll
}

export type MessagesMessageAttachmentType = string

export interface MessagesMessageRequestData {
    /**
     * Status of message request
     */
    status: string,
    /**
     * Message request sender id
     */
    inviter_id: number,
    /**
     * Message request date
     */
    request_date: number
}

export interface MessagesMessagesArray {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: MessagesMessage[]
}

export interface MessagesOutReadBy {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    member_ids: number[]
}

export interface MessagesPinnedMessage {
    /**
     * 
     */
    attachments: MessagesMessageAttachment[],
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number,
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number,
    /**
     * Message author's ID
     */
    from_id: number,
    /**
     * Forwarded messages
     */
    fwd_messages: MessagesForeignMessage[],
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * Message ID
     */
    id: number,
    /**
     * Peer ID
     */
    peer_id: number,
    /**
     * 
     */
    reply_message: MessagesForeignMessage,
    /**
     * Message text
     */
    text: string,
    /**
     * 
     */
    keyboard: MessagesKeyboard
}

export interface MessagesPushSettings {
    /**
     * Information whether push notifications are disabled forever
     */
    disabled_forever: boolean,
    /**
     * Time until what notifications are disabled
     */
    disabled_until: number,
    /**
     * Information whether the sound is on
     */
    no_sound: boolean
}

export type MessagesTemplateActionTypeNames = string

export interface MessagesUserXtrInvitedBy {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * 
     */
    type: UsersUserType,
    /**
     * ID of the inviter
     */
    invited_by: number
}

export type NewsfeedCommentsFilters = string

export interface NewsfeedEventActivity {
    /**
     * address of event
     */
    address: string,
    /**
     * text of attach
     */
    button_text: string,
    /**
     * array of friends ids
     */
    friends: number[],
    /**
     * Current user's member status
     */
    member_status: GroupsGroupFullMemberStatus,
    /**
     * text of attach
     */
    text: string,
    /**
     * event start time
     */
    time: number
}

export type NewsfeedFilters = string

export type NewsfeedIgnoreItemType = string

export interface NewsfeedItemAudio {
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
    date: number,
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
    items: AudioAudio[]
}

export interface NewsfeedItemBase {
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

export interface NewsfeedItemDigest {
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
    date: number,
    /**
     * id of feed in digest
     */
    feed_id: string,
    /**
     * 
     */
    items: NewsfeedItemDigestItem[],
    /**
     * 
     */
    main_post_ids: string[],
    /**
     * type of digest
     */
    template: string,
    /**
     * 
     */
    header: NewsfeedItemDigestHeader,
    /**
     * 
     */
    footer: NewsfeedItemDigestFooter,
    /**
     * 
     */
    track_code: string
}

export interface NewsfeedItemDigestButton {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    style: string
}

export interface NewsfeedItemDigestFooter {
    /**
     * 
     */
    style: string,
    /**
     * text for invite to enable smart feed
     */
    text: string,
    /**
     * 
     */
    button: NewsfeedItemDigestButton
}

export interface NewsfeedItemDigestFullItem {
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    source_name: string,
    /**
     * 
     */
    attachment_index: number,
    /**
     * 
     */
    attachment: WallWallpostAttachment,
    /**
     * 
     */
    style: string,
    /**
     * 
     */
    post: WallWallpost
}

export interface NewsfeedItemDigestHeader {
    /**
     * Title of the header
     */
    title: string,
    /**
     * Subtitle of the header, when title have two strings
     */
    subtitle: string,
    /**
     * 
     */
    style: string,
    /**
     * 
     */
    button: NewsfeedItemDigestButton
}

export type NewsfeedItemDigestItem = WallWallpost

export interface NewsfeedItemFriend {
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
    date: number,
    /**
     * 
     */
    friends: NewsfeedItemFriendFriends
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

export interface NewsfeedItemHolidayRecommendationsBlockHeader {
    /**
     * Title of the header
     */
    title: string,
    /**
     * Subtitle of the header
     */
    subtitle: string,
    /**
     * 
     */
    image: BaseImage[],
    /**
     * 
     */
    action: BaseLinkButtonAction
}

export interface NewsfeedItemPhoto {
    /**
     * Index of current carousel element
     */
    carousel_offset: number,
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
    date: number,
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
     * Index of current carousel element
     */
    carousel_offset: number,
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
    date: number,
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

export interface NewsfeedItemPromoButton {
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
    date: number,
    /**
     * 
     */
    text: string,
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    action: NewsfeedItemPromoButtonAction,
    /**
     * 
     */
    images: NewsfeedItemPromoButtonImage[],
    /**
     * 
     */
    track_code: string
}

export interface NewsfeedItemPromoButtonAction {
    /**
     * 
     */
    url: string,
    /**
     * 
     */
    type: string,
    /**
     * 
     */
    target: string
}

export interface NewsfeedItemPromoButtonImage {
    /**
     * 
     */
    width: number,
    /**
     * 
     */
    height: number,
    /**
     * 
     */
    url: string
}

export interface NewsfeedItemTopic {
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
    date: number,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Topic post ID
     */
    post_id: number,
    /**
     * Post text
     */
    text: string
}

export interface NewsfeedItemVideo {
    /**
     * Index of current carousel element
     */
    carousel_offset: number,
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
    date: number,
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

export interface NewsfeedItemWallpost {
    /**
     * Index of current carousel element
     */
    carousel_offset: number,
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
    date: number,
    /**
     * 
     */
    activity: NewsfeedEventActivity,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * 
     */
    copy_history: WallWallpost[],
    /**
     * 
     */
    feedback: NewsfeedItemWallpostFeedback,
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * Information whether the post in favorites list
     */
    is_favorite: boolean,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads: BaseBoolInt,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    post_type: NewsfeedItemWallpostType,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * Post text
     */
    text: string,
    /**
     * Count of views
     */
    views: WallViews,
    /**
     * Preview length control parameter
     */
    short_text_rate: number
}

export interface NewsfeedItemWallpostFeedback {
    /**
     * 
     */
    type: NewsfeedItemWallpostFeedbackType,
    /**
     * 
     */
    question: string,
    /**
     * 
     */
    answers: NewsfeedItemWallpostFeedbackAnswer[],
    /**
     * 
     */
    stars_count: number,
    /**
     * 
     */
    gratitude: string
}

export interface NewsfeedItemWallpostFeedbackAnswer {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    id: string
}

export type NewsfeedItemWallpostFeedbackType = string

export type NewsfeedItemWallpostType = string

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

export interface NewsfeedNewsfeedItem {
}

export type NewsfeedNewsfeedItemType = string

export interface NewsfeedNewsfeedPhoto {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo ID
     */
    id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of image with 2560 px width
     */
    photo_256: string,
    /**
     * Information whether current user can comment the photo
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    place: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean,
    /**
     * 
     */
    restrictions: MediaRestriction,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Information whether current user can repost the photo
     */
    can_repost: BaseBoolInt
}

export interface NotesNote {
    /**
     * 
     */
    read_comments: number,
    /**
     * Information whether current user can comment the note
     */
    can_comment: BaseBoolInt,
    /**
     * Comments number
     */
    comments: number,
    /**
     * Date when the note has been created in Unixtime
     */
    date: number,
    /**
     * Note ID
     */
    id: number,
    /**
     * Note owner's ID
     */
    owner_id: number,
    /**
     * Note text
     */
    text: string,
    /**
     * Note text in wiki format
     */
    text_wiki: string,
    /**
     * Note title
     */
    title: string,
    /**
     * URL of the page with note preview
     */
    view_url: string
}

export interface NotesNoteComment {
    /**
     * Date when the comment has beed added in Unixtime
     */
    date: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * Comment text
     */
    message: string,
    /**
     * Note ID
     */
    nid: number,
    /**
     * Note ID
     */
    oid: number,
    /**
     * ID of replied comment 
     */
    reply_to: number,
    /**
     * Comment author's ID
     */
    uid: number
}

export interface NotificationsFeedback {
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * Reply author's ID
     */
    from_id: number,
    /**
     * 
     */
    geo: BaseGeo,
    /**
     * Item ID
     */
    id: number,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Reply text
     */
    text: string,
    /**
     * Wall owner's ID
     */
    to_id: number
}

export interface NotificationsNotification {
    /**
     * Date when the event has been occurred
     */
    date: number,
    /**
     * 
     */
    feedback: NotificationsFeedback,
    /**
     * 
     */
    parent: NotificationsNotificationParent,
    /**
     * 
     */
    reply: NotificationsReply,
    /**
     * Notification type
     */
    type: string
}

export type NotificationsNotificationItem = any

export interface NotificationsNotificationParent {
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * Number of comments
     */
    comments: number,
    /**
     * ID of the source post owner
     */
    copy_owner_id: number,
    /**
     * ID of the source post
     */
    copy_post_id: number,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * 
     */
    geo: WallGeo,
    /**
     * Comment ID
     */
    id: number,
    /**
     * Whether video is added to bookmarks
     */
    is_favorite: boolean,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * Wall owner's ID
     */
    to_id: number,
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Video height
     */
    height: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Author ID
     */
    owner_id: number,
    /**
     * URL of image with 2560 px width
     */
    photo_256: string,
    /**
     * Information whether current user can comment the video
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    place: string,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id: number,
    /**
     * Video width
     */
    width: number,
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean,
    /**
     * 
     */
    restrictions: MediaRestriction,
    /**
     * Date when the topic has been created in Unixtime
     */
    created: number,
    /**
     * Creator ID
     */
    created_by: number,
    /**
     * Information whether the topic is closed
     */
    is_closed: BaseBoolInt,
    /**
     * Information whether the topic is fixed
     */
    is_fixed: BaseBoolInt,
    /**
     * Video title
     */
    title: string,
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated: number,
    /**
     * ID of user who updated the topic
     */
    updated_by: number,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can like the video
     */
    can_like: BaseBoolInt,
    /**
     * Information whether current user can repost the video
     */
    can_repost: BaseBoolInt,
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe: BaseBoolInt,
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link: BaseBoolInt,
    /**
     * 1 if video is private
     */
    is_private: BaseBoolInt,
    /**
     * Video description
     */
    description: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * 
     */
    image: VideoVideoImage[],
    /**
     * 
     */
    first_frame: VideoVideoImage[],
    /**
     * Video embed URL
     */
    player: string,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * 1 if  video is being converted
     */
    converting: BaseBoolInt,
    /**
     * 
     */
    restriction: MediaRestriction,
    /**
     * 1 if video is added to user's albums
     */
    added: BaseBoolInt,
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed: BaseBoolInt,
    /**
     * 
     */
    track_code: string,
    /**
     * Information whether the video is repeated
     */
    repeat: BasePropertyExists,
    /**
     * 
     */
    type: string,
    /**
     * Number of views
     */
    views: number,
    /**
     * If video is external, number of views on vk
     */
    local_views: number,
    /**
     * Restriction code
     */
    content_restricted: number,
    /**
     * Restriction text
     */
    content_restricted_message: string,
    /**
     * Live donations balance
     */
    balance: number,
    /**
     * Live stream status
     */
    live_status: string,
    /**
     * 1 if the video is a live stream
     */
    live: BasePropertyExists,
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming: BasePropertyExists,
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time: number,
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify: BaseBoolInt,
    /**
     * Number of spectators of the stream
     */
    spectators: number,
    /**
     * External platform
     */
    platform: string,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    post: WallWallpost,
    /**
     * 
     */
    topic: BoardTopic,
    /**
     * 
     */
    video: VideoVideo
}

export interface NotificationsNotificationsComment {
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * Author ID
     */
    owner_id: number,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    post: WallWallpost,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    topic: BoardTopic,
    /**
     * 
     */
    video: VideoVideo
}

export interface NotificationsReply {
    /**
     * Date when the reply has been created in Unixtime
     */
    date: number,
    /**
     * Reply ID
     */
    id: number,
    /**
     * Reply text
     */
    text: number
}

export interface NotificationsSendMessageError {
    /**
     * Error code
     */
    code: number,
    /**
     * Error description
     */
    description: string
}

export interface NotificationsSendMessageItem {
    /**
     * User ID
     */
    user_id: number,
    /**
     * Notification status
     */
    status: boolean,
    /**
     * 
     */
    error: NotificationsSendMessageError
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
     * Votes amount in user's currency
     */
    amount: number,
    /**
     * Amount description
     */
    description: string,
    /**
     * Votes number
     */
    votes: string
}

export interface OrdersOrder {
    /**
     * Amount
     */
    amount: number,
    /**
     * App order ID
     */
    app_order_id: number,
    /**
     * Cancel transaction ID
     */
    cancel_transaction_id: number,
    /**
     * Date of creation in Unixtime
     */
    date: number,
    /**
     * Order ID
     */
    id: number,
    /**
     * Order item
     */
    item: string,
    /**
     * Receiver ID
     */
    receiver_id: number,
    /**
     * Order status
     */
    status: string,
    /**
     * Transaction ID
     */
    transaction_id: number,
    /**
     * User ID
     */
    user_id: number
}

export interface OrdersSubscription {
    /**
     * Cancel reason
     */
    cancel_reason: string,
    /**
     * Date of creation in Unixtime
     */
    create_time: number,
    /**
     * Subscription ID
     */
    id: number,
    /**
     * Subscription order item
     */
    item_id: string,
    /**
     * Date of next bill in Unixtime
     */
    next_bill_time: number,
    /**
     * Pending cancel state
     */
    pending_cancel: boolean,
    /**
     * Subscription period
     */
    period: number,
    /**
     * Date of last period start in Unixtime
     */
    period_start_time: number,
    /**
     * Subscription price
     */
    price: number,
    /**
     * Subscription status
     */
    status: string,
    /**
     * Is test subscription
     */
    test_mode: boolean,
    /**
     * Date of trial expire in Unixtime
     */
    trial_expire_time: number,
    /**
     * Date of last change in Unixtime
     */
    update_time: number
}

export interface OwnerState {
    /**
     * 
     */
    state: number,
    /**
     * wiki text to describe user state
     */
    description: string
}

export type PagesPrivacySettings = number

export interface PagesWikipage {
    /**
     * Page creator ID
     */
    creator_id: number,
    /**
     * Page creator name
     */
    creator_name: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Last editor name
     */
    editor_name: string,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Page ID
     */
    id: number,
    /**
     * Page title
     */
    title: string,
    /**
     * Views number
     */
    views: number,
    /**
     * Edit settings of the page
     */
    who_can_edit: PagesPrivacySettings,
    /**
     * View settings of the page
     */
    who_can_view: PagesPrivacySettings
}

export interface PagesWikipageFull {
    /**
     * Date when the page has been created in Unixtime
     */
    created: number,
    /**
     * Page creator ID
     */
    creator_id: number,
    /**
     * Information whether current user can edit the page
     */
    current_user_can_edit: BaseBoolInt,
    /**
     * Information whether current user can edit the page access settings
     */
    current_user_can_edit_access: BaseBoolInt,
    /**
     * Date when the page has been edited in Unixtime
     */
    edited: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Page content, HTML
     */
    html: string,
    /**
     * Page ID
     */
    id: number,
    /**
     * Page content, wiki
     */
    source: string,
    /**
     * Page title
     */
    title: string,
    /**
     * URL of the page preview
     */
    view_url: string,
    /**
     * Views number
     */
    views: number,
    /**
     * Edit settings of the page
     */
    who_can_edit: PagesPrivacySettings,
    /**
     * View settings of the page
     */
    who_can_view: PagesPrivacySettings
}

export interface PagesWikipageHistory {
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
    date: number,
    /**
     * Last editor ID
     */
    editor_id: number,
    /**
     * Last editor name
     */
    editor_name: string
}

export interface PhotosCommentXtrPid {
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Photo ID
     */
    pid: number,
    /**
     * Replied comment ID
     */
    reply_to_comment: number,
    /**
     * Replied user ID
     */
    reply_to_user: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    parents_stack: number[],
    /**
     * 
     */
    thread: CommentThread
}

export interface PhotosImage {
    /**
     * Height of the photo in px.
     */
    height: number,
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
    width: number
}

export type PhotosImageType = string

export interface PhotosMarketAlbumUploadResponse {
    /**
     * Community ID
     */
    gid: number,
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PhotosMarketUploadResponse {
    /**
     * Crop data
     */
    crop_data: string,
    /**
     * Crop hash
     */
    crop_hash: string,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PhotosMessageUploadResponse {
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PhotosOwnerUploadResponse {
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PhotosPhoto {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo ID
     */
    id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of image with 2560 px width
     */
    photo_256: string,
    /**
     * Information whether current user can comment the photo
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    place: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number,
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean,
    /**
     * 
     */
    restrictions: MediaRestriction
}

export interface PhotosPhotoAlbum {
    /**
     * Date when the album has been created in Unixtime
     */
    created: number,
    /**
     * Photo album description
     */
    description: string,
    /**
     * Photo album ID
     */
    id: number,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Photos number
     */
    size: number,
    /**
     * 
     */
    thumb: PhotosPhoto,
    /**
     * Photo album title
     */
    title: string,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number
}

export interface PhotosPhotoAlbumFull {
    /**
     * Information whether current user can upload photo to the album
     */
    can_upload: BaseBoolInt,
    /**
     * Information whether album comments are disabled
     */
    comments_disabled: BaseBoolInt,
    /**
     * Date when the album has been created in Unixtime
     */
    created: number,
    /**
     * Photo album description
     */
    description: string,
    /**
     * Photo album ID
     */
    id: number,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Photos number
     */
    size: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Thumb photo ID
     */
    thumb_id: number,
    /**
     * Information whether the album thumb is last photo
     */
    thumb_is_last: BaseBoolInt,
    /**
     * URL of the thumb image
     */
    thumb_src: string,
    /**
     * Photo album title
     */
    title: string,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number,
    /**
     * Information whether only community administrators can upload photos
     */
    upload_by_admins_only: BaseBoolInt
}

export type PhotosPhotoFalseable = any

export interface PhotosPhotoFull {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Information whether current user can comment the photo
     */
    can_comment: BaseBoolInt,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo ID
     */
    id: number,
    /**
     * 
     */
    images: PhotosImage[],
    /**
     * Latitude
     */
    lat: number,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    tags: BaseObjectCount,
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number
}

export interface PhotosPhotoFullXtrRealOffset {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * 
     */
    can_comment: BaseBoolInt,
    /**
     * 
     */
    comments: BaseObjectCount,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden: BasePropertyExists,
    /**
     * Photo ID
     */
    id: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Real position of the photo
     */
    real_offset: number,
    /**
     * 
     */
    reposts: BaseObjectCount,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * 
     */
    tags: BaseObjectCount,
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number
}

export interface PhotosPhotoSizes {
    /**
     * Height in px
     */
    height: number,
    /**
     * URL of the image
     */
    url: string,
    /**
     * URL of the image
     */
    src: string,
    /**
     * 
     */
    type: PhotosPhotoSizesType,
    /**
     * Width in px
     */
    width: number
}

export type PhotosPhotoSizesType = string

export interface PhotosPhotoTag {
    /**
     * Date when tag has been added in Unixtime
     */
    date: number,
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
     * Tagged description.
     */
    description: string,
    /**
     * Tagged user ID
     */
    user_id: number,
    /**
     * Information whether the tag is reviewed
     */
    viewed: BaseBoolInt,
    /**
     * Coordinate X of the left upper corner
     */
    x: number,
    /**
     * Coordinate X of the right lower corner
     */
    x2: number,
    /**
     * Coordinate Y of the left upper corner
     */
    y: number,
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

export interface PhotosPhotoUpload {
    /**
     * Album ID
     */
    album_id: number,
    /**
     * URL to upload photo
     */
    upload_url: string,
    /**
     * Fallback URL if upload_url returned error
     */
    fallback_upload_url: string,
    /**
     * User ID
     */
    user_id: number,
    /**
     * Group ID
     */
    group_id: number
}

export interface PhotosPhotoUploadResponse {
    /**
     * Album ID
     */
    aid: number,
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Uploaded photos data
     */
    photos_list: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PhotosPhotoXtrRealOffset {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden: BasePropertyExists,
    /**
     * Photo ID
     */
    id: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * Real position of the photo
     */
    real_offset: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number
}

export interface PhotosPhotoXtrTagInfo {
    /**
     * Access key for the photo
     */
    access_key: string,
    /**
     * Album ID
     */
    album_id: number,
    /**
     * Date when uploaded
     */
    date: number,
    /**
     * Original photo height
     */
    height: number,
    /**
     * Photo ID
     */
    id: number,
    /**
     * Latitude
     */
    lat: number,
    /**
     * Longitude
     */
    long: number,
    /**
     * Photo owner's ID
     */
    owner_id: number,
    /**
     * URL of image with 1280 px width
     */
    photo_1280: string,
    /**
     * URL of image with 130 px width
     */
    photo_130: string,
    /**
     * URL of image with 2560 px width
     */
    photo_2560: string,
    /**
     * URL of image with 604 px width
     */
    photo_604: string,
    /**
     * URL of image with 75 px width
     */
    photo_75: string,
    /**
     * URL of image with 807 px width
     */
    photo_807: string,
    /**
     * ID of the tag creator
     */
    placer_id: number,
    /**
     * Post ID
     */
    post_id: number,
    /**
     * 
     */
    sizes: PhotosPhotoSizes[],
    /**
     * Date when tag has been added in Unixtime
     */
    tag_created: number,
    /**
     * Tag ID
     */
    tag_id: number,
    /**
     * Photo caption
     */
    text: string,
    /**
     * ID of the user who have uploaded the photo
     */
    user_id: number,
    /**
     * Original photo width
     */
    width: number
}

export interface PhotosTagsSuggestionItem {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    caption: string,
    /**
     * 
     */
    type: string,
    /**
     * 
     */
    buttons: PhotosTagsSuggestionItemButton[],
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    tags: PhotosPhotoTag[],
    /**
     * 
     */
    track_code: string
}

export interface PhotosTagsSuggestionItemButton {
    /**
     * 
     */
    title: string,
    /**
     * 
     */
    action: string,
    /**
     * 
     */
    style: string
}

export interface PhotosWallUploadResponse {
    /**
     * Uploading hash
     */
    hash: string,
    /**
     * Uploaded photo data
     */
    photo: string,
    /**
     * Upload server number
     */
    server: number
}

export interface PollsAnswer {
    /**
     * Answer ID
     */
    id: number,
    /**
     * Answer rate in percents
     */
    rate: number,
    /**
     * Answer text
     */
    text: string,
    /**
     * Votes number
     */
    votes: number
}

export interface PollsBackground {
    /**
     * Gradient angle with 0 on positive X axis
     */
    angle: number,
    /**
     * Hex color code without #
     */
    color: string,
    /**
     * Original height of pattern tile
     */
    height: number,
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    name: string,
    /**
     * Pattern tiles
     */
    images: BaseImage[],
    /**
     * Gradient points
     */
    points: BaseGradientPoint[],
    /**
     * 
     */
    type: string,
    /**
     * Original with of pattern tile
     */
    width: number
}

export interface PollsFriend {
    /**
     * 
     */
    id: number
}

export interface PollsPoll {
    /**
     * 
     */
    anonymous: PollsPollAnonymous,
    /**
     * 
     */
    friends: PollsFriend[],
    /**
     * Information whether the poll with multiple choices
     */
    multiple: boolean,
    /**
     * Current user's answer ID
     */
    answer_id: number,
    /**
     * 
     */
    end_date: number,
    /**
     * Current user's answer IDs
     */
    answer_ids: number[],
    /**
     * 
     */
    closed: boolean,
    /**
     * 
     */
    is_board: boolean,
    /**
     * 
     */
    can_edit: boolean,
    /**
     * 
     */
    can_vote: boolean,
    /**
     * 
     */
    can_report: boolean,
    /**
     * 
     */
    can_share: boolean,
    /**
     * 
     */
    photo: PollsBackground,
    /**
     * 
     */
    answers: PollsAnswer[],
    /**
     * Date when poll has been created in Unixtime
     */
    created: number,
    /**
     * Poll ID
     */
    id: number,
    /**
     * Poll owner's ID
     */
    owner_id: number,
    /**
     * Poll author's ID
     */
    author_id: number,
    /**
     * Poll question
     */
    question: string,
    /**
     * 
     */
    background: PollsBackground,
    /**
     * Votes number
     */
    votes: number,
    /**
     * 
     */
    disable_unvote: boolean
}

export type PollsPollAnonymous = boolean

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

export interface PrettyCardsPrettyCard {
    /**
     * Button key
     */
    button: string,
    /**
     * Button text in current language
     */
    button_text: string,
    /**
     * Card ID (long int returned as string)
     */
    card_id: string,
    /**
     * 
     */
    images: BaseImage[],
    /**
     * Link URL
     */
    link_url: string,
    /**
     * Photo ID (format "<owner_id>_<media_id>")
     */
    photo: string,
    /**
     * Price if set (decimal number returned as string)
     */
    price: string,
    /**
     * Old price if set (decimal number returned as string)
     */
    price_old: string,
    /**
     * Title
     */
    title: string
}

export interface SearchHint {
    /**
     * 
     */
    app: AppsApp,
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
    profile: UsersUserMin,
    /**
     * 
     */
    section: SearchHintSection,
    /**
     * 
     */
    type: SearchHintType
}

export type SearchHintSection = string

export type SearchHintType = string

export interface SecureLevel {
    /**
     * Level
     */
    level: number,
    /**
     * User ID
     */
    uid: number
}

export interface SecureSmsNotification {
    /**
     * Application ID
     */
    app_id: string,
    /**
     * Date when message has been sent in Unixtime
     */
    date: string,
    /**
     * Notification ID
     */
    id: string,
    /**
     * Messsage text
     */
    message: string,
    /**
     * User ID
     */
    user_id: string
}

export interface SecureTokenChecked {
    /**
     * Date when access_token has been generated in Unixtime
     */
    date: number,
    /**
     * Date when access_token will expire in Unixtime
     */
    expire: number,
    /**
     * Returns if successfully processed
     */
    success: number,
    /**
     * User ID
     */
    user_id: number
}

export interface SecureTransaction {
    /**
     * Transaction date in Unixtime
     */
    date: number,
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
    votes: number
}

export interface StatsActivity {
    /**
     * Comments number
     */
    comments: number,
    /**
     * Reposts number
     */
    copies: number,
    /**
     * Hidden from news count
     */
    hidden: number,
    /**
     * Likes number
     */
    likes: number,
    /**
     * New subscribers count
     */
    subscribed: number,
    /**
     * Unsubscribed count
     */
    unsubscribed: number
}

export interface StatsCity {
    /**
     * Visitors number
     */
    count: number,
    /**
     * City name
     */
    name: string,
    /**
     * City ID
     */
    value: number
}

export interface StatsCountry {
    /**
     * Country code
     */
    code: string,
    /**
     * Visitors number
     */
    count: number,
    /**
     * Country name
     */
    name: string,
    /**
     * Country ID
     */
    value: number
}

export interface StatsPeriod {
    /**
     * 
     */
    activity: StatsActivity,
    /**
     * Unix timestamp
     */
    period_from: number,
    /**
     * Unix timestamp
     */
    period_to: number,
    /**
     * 
     */
    reach: StatsReach,
    /**
     * 
     */
    visitors: StatsViews
}

export interface StatsReach {
    /**
     * 
     */
    age: StatsSexAge[],
    /**
     * 
     */
    cities: StatsCity[],
    /**
     * 
     */
    countries: StatsCountry[],
    /**
     * Reach count from mobile devices
     */
    mobile_reach: number,
    /**
     * Reach count
     */
    reach: number,
    /**
     * Subscribers reach count
     */
    reach_subscribers: number,
    /**
     * 
     */
    sex: StatsSexAge[],
    /**
     * 
     */
    sex_age: StatsSexAge[]
}

export interface StatsSexAge {
    /**
     * Visitors number
     */
    count: number,
    /**
     * Sex/age value
     */
    value: string,
    /**
     * 
     */
    reach: number,
    /**
     * 
     */
    reach_subscribers: number,
    /**
     * 
     */
    count_subscribers: number
}

export interface StatsViews {
    /**
     * 
     */
    age: StatsSexAge[],
    /**
     * 
     */
    cities: StatsCity[],
    /**
     * 
     */
    countries: StatsCountry[],
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
    sex_age: StatsSexAge[],
    /**
     * Views number
     */
    views: number,
    /**
     * Visitors number
     */
    visitors: number
}

export interface StatsWallpostStat {
    /**
     * 
     */
    post_id: number,
    /**
     * Hidings number
     */
    hide: number,
    /**
     * People have joined the group
     */
    join_group: number,
    /**
     * Link clickthrough
     */
    links: number,
    /**
     * Subscribers reach
     */
    reach_subscribers: number,
    /**
     * 
     */
    reach_subscribers_count: number,
    /**
     * Total reach
     */
    reach_total: number,
    /**
     * 
     */
    reach_total_count: number,
    /**
     * 
     */
    reach_viral: number,
    /**
     * 
     */
    reach_ads: number,
    /**
     * Reports number
     */
    report: number,
    /**
     * Clickthrough to community
     */
    to_group: number,
    /**
     * Unsubscribed members
     */
    unsubscribe: number,
    /**
     * 
     */
    sex_age: StatsSexAge[]
}

export interface StatusStatus {
    /**
     * Status text
     */
    text: string,
    /**
     * 
     */
    audio: AudioAudio
}

export interface StorageValue {
    /**
     * 
     */
    key: string,
    /**
     * 
     */
    value: string
}

export interface StoriesClickableArea {
    /**
     * 
     */
    x: number,
    /**
     * 
     */
    y: number
}

export interface StoriesClickableSticker {
    /**
     * 
     */
    clickable_area: StoriesClickableArea[],
    /**
     * Clickable sticker ID
     */
    id: number,
    /**
     * 
     */
    hashtag: string,
    /**
     * 
     */
    link_object: BaseLink,
    /**
     * 
     */
    mention: string,
    /**
     * 
     */
    tooltip_text: string,
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    story_id: number,
    /**
     * 
     */
    question: string,
    /**
     * 
     */
    question_button: string,
    /**
     * 
     */
    place_id: number,
    /**
     * 
     */
    market_item: MarketMarketItem,
    /**
     * 
     */
    audio: AudioAudio,
    /**
     * 
     */
    audio_start_time: number,
    /**
     * 
     */
    style: string,
    /**
     * 
     */
    type: string,
    /**
     * 
     */
    subtype: string,
    /**
     * 
     */
    post_owner_id: number,
    /**
     * 
     */
    post_id: number,
    /**
     * 
     */
    poll: PollsPoll,
    /**
     * Color, hex format
     */
    color: string,
    /**
     * Sticker ID
     */
    sticker_id: number,
    /**
     * Sticker pack ID
     */
    sticker_pack_id: number,
    /**
     * 
     */
    app: AppsAppMin,
    /**
     * Additional context for app sticker
     */
    app_context: string,
    /**
     * Whether current user has unread interaction with this app
     */
    has_new_interactions: boolean,
    /**
     * Whether current user allowed broadcast notify from this app
     */
    is_broadcast_notify_allowed: boolean,
    /**
     * 
     */
    situational_theme_id: number,
    /**
     * 
     */
    situational_app_url: string
}

export interface StoriesClickableStickers {
    /**
     * 
     */
    clickable_stickers: StoriesClickableSticker[],
    /**
     * 
     */
    original_height: number,
    /**
     * 
     */
    original_width: number
}

export interface StoriesFeedItem {
    /**
     * Type of Feed Item
     */
    type: string,
    /**
     * 
     */
    id: string,
    /**
     * Author stories
     */
    stories: StoriesStory[],
    /**
     * Grouped stories of various authors (for types community_grouped_stories/app_grouped_stories type)
     */
    grouped: StoriesFeedItem[],
    /**
     * App, which stories has been grouped (for type app_grouped_stories)
     */
    app: AppsAppMin,
    /**
     * Additional data for promo stories (for type promo_stories)
     */
    promo_data: StoriesPromoBlock,
    /**
     * 
     */
    birthday_user_id: number
}

export interface StoriesPromoBlock {
    /**
     * Promo story title
     */
    name: string,
    /**
     * RL of square photo of the story with 50 pixels in width
     */
    photo_50: string,
    /**
     * RL of square photo of the story with 100 pixels in width
     */
    photo_100: string,
    /**
     * Hide animation for promo story
     */
    not_animated: boolean
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

export interface StoriesStatLine {
    /**
     * 
     */
    name: string,
    /**
     * 
     */
    counter: number,
    /**
     * 
     */
    is_unavailable: boolean
}

export interface StoriesStory {
    /**
     * Access key for private object.
     */
    access_key: string,
    /**
     * Information whether current user can comment the story (0 - no, 1 - yes).
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current user can reply to the story (0 - no, 1 - yes).
     */
    can_reply: BaseBoolInt,
    /**
     * Information whether current user can see the story (0 - no, 1 - yes).
     */
    can_see: BaseBoolInt,
    /**
     * Information whether current user can like the story.
     */
    can_like: boolean,
    /**
     * Information whether current user can share the story (0 - no, 1 - yes).
     */
    can_share: BaseBoolInt,
    /**
     * Information whether current user can hide the story (0 - no, 1 - yes).
     */
    can_hide: BaseBoolInt,
    /**
     * Date when story has been added in Unixtime.
     */
    date: number,
    /**
     * Story expiration time. Unixtime.
     */
    expires_at: number,
    /**
     * Story ID.
     */
    id: number,
    /**
     * Information whether the story is deleted (false - no, true - yes).
     */
    is_deleted: boolean,
    /**
     * Information whether the story is expired (false - no, true - yes).
     */
    is_expired: boolean,
    /**
     * 
     */
    link: StoriesStoryLink,
    /**
     * Story owner's ID.
     */
    owner_id: number,
    /**
     * 
     */
    parent_story: StoriesStory,
    /**
     * Access key for private object.
     */
    parent_story_access_key: string,
    /**
     * Parent story ID.
     */
    parent_story_id: number,
    /**
     * Parent story owner's ID.
     */
    parent_story_owner_id: number,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * Replies counters to current story.
     */
    replies: StoriesReplies,
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
    clickable_stickers: StoriesClickableStickers,
    /**
     * 
     */
    video: VideoVideo,
    /**
     * Views number.
     */
    views: number,
    /**
     * Information whether story has question sticker and current user can send question to the author
     */
    can_ask: BaseBoolInt,
    /**
     * Information whether story has question sticker and current user can send anonymous question to the author
     */
    can_ask_anonymous: BaseBoolInt,
    /**
     * 
     */
    narratives_count: number,
    /**
     * 
     */
    first_narrative_title: string,
    /**
     * 
     */
    birthday_wish_user_id: number,
    /**
     * 
     */
    can_use_in_narrative: boolean
}

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

export interface StoriesStoryStats {
    /**
     * 
     */
    answer: StoriesStoryStatsStat,
    /**
     * 
     */
    bans: StoriesStoryStatsStat,
    /**
     * 
     */
    open_link: StoriesStoryStatsStat,
    /**
     * 
     */
    replies: StoriesStoryStatsStat,
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
    views: StoriesStoryStatsStat,
    /**
     * 
     */
    likes: StoriesStoryStatsStat
}

export interface StoriesStoryStatsStat {
    /**
     * Stat value
     */
    count: number,
    /**
     * 
     */
    state: StoriesStoryStatsState
}

export type StoriesStoryStatsState = string

export type StoriesStoryType = string

export type StoriesUploadLinkText = string

export interface StoriesViewersItem {
    /**
     * user has like for this object
     */
    is_liked: boolean,
    /**
     * user id
     */
    user_id: number,
    /**
     * 
     */
    user: UsersUserFull
}

export interface UsersCareer {
    /**
     * City ID
     */
    city_id: number,
    /**
     * City name
     */
    city_name: string,
    /**
     * Company name
     */
    company: string,
    /**
     * Country ID
     */
    country_id: number,
    /**
     * From year
     */
    from: number,
    /**
     * Community ID
     */
    group_id: number,
    /**
     * Career ID
     */
    id: number,
    /**
     * Position
     */
    position: string,
    /**
     * Till year
     */
    until: number
}

export interface UsersExports {
    /**
     * 
     */
    facebook: number,
    /**
     * 
     */
    livejournal: number,
    /**
     * 
     */
    twitter: number
}

export type UsersFields = string

export interface UsersLastSeen {
    /**
     * Type of the platform that used for the last authorization
     */
    platform: number,
    /**
     * Last visit date (in Unix time)
     */
    time: number
}

export interface UsersMilitary {
    /**
     * Country ID
     */
    country_id: number,
    /**
     * From year
     */
    from: number,
    /**
     * Military ID
     */
    id: number,
    /**
     * Unit name
     */
    unit: string,
    /**
     * Unit ID
     */
    unit_id: number,
    /**
     * Till year
     */
    until: number
}

export interface UsersOccupation {
    /**
     * ID of school, university, company group
     */
    id: number,
    /**
     * Name of occupation
     */
    name: string,
    /**
     * Type of occupation
     */
    type: string
}

export interface UsersOnlineInfo {
    /**
     * Whether you can see real online status of user or not
     */
    visible: boolean,
    /**
     * Last time we saw user being active
     */
    last_seen: number,
    /**
     * Whether user is currently online or not
     */
    is_online: boolean,
    /**
     * Application id from which user is currently online or was last seen online
     */
    app_id: number,
    /**
     * Is user online from desktop app or mobile app
     */
    is_mobile: boolean,
    /**
     * In case user online is not visible, it indicates approximate timeframe of user online
     */
    status: string
}

export interface UsersPersonal {
    /**
     * User's views on alcohol
     */
    alcohol: number,
    /**
     * User's inspired by
     */
    inspired_by: string,
    /**
     * 
     */
    langs: string[],
    /**
     * User's personal priority in life
     */
    life_main: number,
    /**
     * User's personal priority in people
     */
    people_main: number,
    /**
     * User's political views
     */
    political: number,
    /**
     * User's religion
     */
    religion: string,
    /**
     * User's religion id
     */
    religion_id: number,
    /**
     * User's views on smoking
     */
    smoking: number
}

export interface UsersRelative {
    /**
     * Date of child birthday (format dd.mm.yyyy)
     */
    birth_date: string,
    /**
     * Relative ID
     */
    id: number,
    /**
     * Name of relative
     */
    name: string,
    /**
     * Relative type
     */
    type: string
}

export interface UsersSchool {
    /**
     * City ID
     */
    city: number,
    /**
     * School class letter
     */
    schoolClass: string,
    /**
     * Country ID
     */
    country: number,
    /**
     * School ID
     */
    id: string,
    /**
     * School name
     */
    name: string,
    /**
     * School type ID
     */
    type: number,
    /**
     * School type name
     */
    type_str: string,
    /**
     * Year the user started to study
     */
    year_from: number,
    /**
     * Graduation year
     */
    year_graduated: number,
    /**
     * Year the user finished to study
     */
    year_to: number,
    /**
     * 
     */
    speciality: string
}

export interface UsersSubscriptionsItem {
}

export interface UsersUniversity {
    /**
     * Chair ID
     */
    chair: number,
    /**
     * Chair name
     */
    chair_name: string,
    /**
     * City ID
     */
    city: number,
    /**
     * Country ID
     */
    country: number,
    /**
     * Education form
     */
    education_form: string,
    /**
     * Education status
     */
    education_status: string,
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
     * University ID
     */
    id: number,
    /**
     * University name
     */
    name: string,
    /**
     * 
     */
    university_group_id: number
}

export interface UsersUser {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual
}

export interface UsersUserConnections {
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
    instagram: string
}

export interface UsersUserCounters {
    /**
     * Albums number
     */
    albums: number,
    /**
     * Audios number
     */
    audios: number,
    /**
     * Followers number
     */
    followers: number,
    /**
     * Friends number
     */
    friends: number,
    /**
     * Gifts number
     */
    gifts: number,
    /**
     * Communities number
     */
    groups: number,
    /**
     * Notes number
     */
    notes: number,
    /**
     * Online friends number
     */
    online_friends: number,
    /**
     * Public pages number
     */
    pages: number,
    /**
     * Photos number
     */
    photos: number,
    /**
     * Subscriptions number
     */
    subscriptions: number,
    /**
     * Number of photos with user
     */
    user_photos: number,
    /**
     * Number of videos with user
     */
    user_videos: number,
    /**
     * Videos number
     */
    videos: number,
    /**
     * 
     */
    new_photo_tags: number,
    /**
     * 
     */
    new_recognition_tags: number,
    /**
     * 
     */
    mutual_friends: number,
    /**
     * 
     */
    posts: number,
    /**
     * 
     */
    articles: number,
    /**
     * 
     */
    wishes: number,
    /**
     * 
     */
    podcasts: number,
    /**
     * 
     */
    clips: number,
    /**
     * 
     */
    clips_followers: number
}

export interface UsersUserFull {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User's first name in nominative case
     */
    first_name_nom: string,
    /**
     * User's first name in genitive case
     */
    first_name_gen: string,
    /**
     * User's first name in dative case
     */
    first_name_dat: string,
    /**
     * User's first name in accusative case
     */
    first_name_acc: string,
    /**
     * User's first name in instrumental case
     */
    first_name_ins: string,
    /**
     * User's first name in prepositional case
     */
    first_name_abl: string,
    /**
     * User's last name in nominative case
     */
    last_name_nom: string,
    /**
     * User's last name in genitive case
     */
    last_name_gen: string,
    /**
     * User's last name in dative case
     */
    last_name_dat: string,
    /**
     * User's last name in accusative case
     */
    last_name_acc: string,
    /**
     * User's last name in instrumental case
     */
    last_name_ins: string,
    /**
     * User's last name in prepositional case
     */
    last_name_abl: string,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * User contact name
     */
    contact_name: string,
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
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * 
     */
    owner_state: OwnerState,
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
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
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
     * 
     */
    type: UsersUserType,
    /**
     * 
     */
    email: string,
    /**
     * 
     */
    skype: string,
    /**
     * 
     */
    facebook: string,
    /**
     * 
     */
    facebook_name: string,
    /**
     * 
     */
    twitter: string,
    /**
     * 
     */
    livejournal: string,
    /**
     * 
     */
    instagram: string,
    /**
     * 
     */
    test: BaseBoolInt,
    /**
     * 
     */
    video_live: VideoLiveInfo,
    /**
     * 
     */
    is_video_live_notifications_blocked: BaseBoolInt,
    /**
     * 
     */
    is_service: boolean,
    /**
     * 
     */
    service_description: string,
    /**
     * 
     */
    photo_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo: string,
    /**
     * 
     */
    photo_big: string,
    /**
     * 
     */
    photo_400: string,
    /**
     * 
     */
    photo_max_size: PhotosPhoto,
    /**
     * 
     */
    language: string,
    /**
     * 
     */
    stories_archive_count: number,
    /**
     * 
     */
    wall_default: string,
    /**
     * Information whether current user can call
     */
    can_call: boolean,
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes: boolean,
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts: BaseBoolInt,
    /**
     * 
     */
    interests: string,
    /**
     * 
     */
    books: string,
    /**
     * 
     */
    tv: string,
    /**
     * 
     */
    quotes: string,
    /**
     * 
     */
    about: string,
    /**
     * 
     */
    games: string,
    /**
     * 
     */
    movies: string,
    /**
     * 
     */
    activities: string,
    /**
     * 
     */
    music: string,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group: boolean,
    /**
     * User's mobile phone number
     */
    mobile_phone: string,
    /**
     * User's additional phone number
     */
    home_phone: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
    crop_photo: BaseCropPhoto,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * User level in live streams achievements
     */
    video_live_level: number,
    /**
     * Number of user's live streams
     */
    video_live_count: number,
    /**
     * Number of user's clips
     */
    clips_count: number,
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
     * 
     */
    university_group_id: number,
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
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * 
     */
    counters: UsersUserCounters,
    /**
     * 
     */
    access_key: string,
    /**
     * 
     */
    can_upload_doc: BaseBoolInt,
    /**
     * 
     */
    hash: string,
    /**
     * 
     */
    has_email: boolean
}

export interface UsersUserMin {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean
}

export type UsersUserRelation = number

export interface UsersUserSettingsXtr {
    /**
     * 
     */
    connections: UsersUserConnections,
    /**
     * User's date of birth
     */
    bdate: string,
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility: number,
    /**
     * 
     */
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User first name
     */
    first_name: string,
    /**
     * User's hometown
     */
    home_town: string,
    /**
     * User last name
     */
    last_name: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * 
     */
    name_request: AccountNameRequest,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * User phone number with some hidden digits
     */
    phone: string,
    /**
     * User relationship status
     */
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * Information whether relation status is pending
     */
    relation_pending: BaseBoolInt,
    /**
     * 
     */
    relation_requests: UsersUserMin[],
    /**
     * Domain name of the user's page
     */
    screen_name: string,
    /**
     * User sex
     */
    sex: BaseSex,
    /**
     * User status
     */
    status: string,
    /**
     * 
     */
    status_audio: AudioAudio,
    /**
     * 
     */
    interests: AccountUserSettingsInterests,
    /**
     * 
     */
    languages: string[]
}

export type UsersUserType = string

export interface UsersUserXtrCounters {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * User's first name in nominative case
     */
    first_name_nom: string,
    /**
     * User's first name in genitive case
     */
    first_name_gen: string,
    /**
     * User's first name in dative case
     */
    first_name_dat: string,
    /**
     * User's first name in accusative case
     */
    first_name_acc: string,
    /**
     * User's first name in instrumental case
     */
    first_name_ins: string,
    /**
     * User's first name in prepositional case
     */
    first_name_abl: string,
    /**
     * User's last name in nominative case
     */
    last_name_nom: string,
    /**
     * User's last name in genitive case
     */
    last_name_gen: string,
    /**
     * User's last name in dative case
     */
    last_name_dat: string,
    /**
     * User's last name in accusative case
     */
    last_name_acc: string,
    /**
     * User's last name in instrumental case
     */
    last_name_ins: string,
    /**
     * User's last name in prepositional case
     */
    last_name_abl: string,
    /**
     * User nickname
     */
    nickname: string,
    /**
     * User maiden name
     */
    maiden_name: string,
    /**
     * User contact name
     */
    contact_name: string,
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
    city: BaseCity,
    /**
     * 
     */
    country: BaseCountry,
    /**
     * User's timezone
     */
    timezone: number,
    /**
     * 
     */
    owner_state: OwnerState,
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
     * Information whether the user specified his phone number
     */
    has_mobile: BaseBoolInt,
    /**
     * Information whether the user is a friend of current user
     */
    is_friend: BaseBoolInt,
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
     * 
     */
    type: UsersUserType,
    /**
     * 
     */
    email: string,
    /**
     * 
     */
    skype: string,
    /**
     * 
     */
    facebook: string,
    /**
     * 
     */
    facebook_name: string,
    /**
     * 
     */
    twitter: string,
    /**
     * 
     */
    livejournal: string,
    /**
     * 
     */
    instagram: string,
    /**
     * 
     */
    test: BaseBoolInt,
    /**
     * 
     */
    video_live: VideoLiveInfo,
    /**
     * 
     */
    is_video_live_notifications_blocked: BaseBoolInt,
    /**
     * 
     */
    is_service: boolean,
    /**
     * 
     */
    service_description: string,
    /**
     * 
     */
    photo_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium: PhotosPhotoFalseable,
    /**
     * 
     */
    photo_medium_rec: PhotosPhotoFalseable,
    /**
     * 
     */
    photo: string,
    /**
     * 
     */
    photo_big: string,
    /**
     * 
     */
    photo_400: string,
    /**
     * 
     */
    photo_max_size: PhotosPhoto,
    /**
     * 
     */
    language: string,
    /**
     * 
     */
    stories_archive_count: number,
    /**
     * 
     */
    wall_default: string,
    /**
     * Information whether current user can call
     */
    can_call: boolean,
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes: boolean,
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts: BaseBoolInt,
    /**
     * 
     */
    interests: string,
    /**
     * 
     */
    books: string,
    /**
     * 
     */
    tv: string,
    /**
     * 
     */
    quotes: string,
    /**
     * 
     */
    about: string,
    /**
     * 
     */
    games: string,
    /**
     * 
     */
    movies: string,
    /**
     * 
     */
    activities: string,
    /**
     * 
     */
    music: string,
    /**
     * Information whether current user can write private message
     */
    can_write_private_message: BaseBoolInt,
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request: BaseBoolInt,
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group: boolean,
    /**
     * User's mobile phone number
     */
    mobile_phone: string,
    /**
     * User's additional phone number
     */
    home_phone: string,
    /**
     * User's website
     */
    site: string,
    /**
     * 
     */
    status_audio: AudioAudio,
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
    crop_photo: BaseCropPhoto,
    /**
     * Number of user's followers
     */
    followers_count: number,
    /**
     * User level in live streams achievements
     */
    video_live_level: number,
    /**
     * Number of user's live streams
     */
    video_live_count: number,
    /**
     * Number of user's clips
     */
    clips_count: number,
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
     * 
     */
    university_group_id: number,
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
    relation: UsersUserRelation,
    /**
     * 
     */
    relation_partner: UsersUserMin,
    /**
     * 
     */
    personal: UsersPersonal,
    /**
     * 
     */
    universities: UsersUniversity[],
    /**
     * 
     */
    schools: UsersSchool[],
    /**
     * 
     */
    relatives: UsersRelative[],
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts: boolean,
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts: boolean,
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts: boolean,
    /**
     * 
     */
    counters: UsersUserCounters,
    /**
     * 
     */
    access_key: string,
    /**
     * 
     */
    can_upload_doc: BaseBoolInt,
    /**
     * 
     */
    hash: string,
    /**
     * 
     */
    has_email: boolean
}

export interface UsersUserXtrType {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated: string,
    /**
     * User first name
     */
    first_name: string,
    /**
     * Returns if a profile is hidden.
     */
    hidden: number,
    /**
     * User ID
     */
    id: number,
    /**
     * User last name
     */
    last_name: string,
    /**
     * 
     */
    can_access_closed: boolean,
    /**
     * 
     */
    is_closed: boolean,
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
     * 
     */
    online_info: UsersOnlineInfo,
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
     * Information whether the user is verified
     */
    verified: BaseBoolInt,
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending: BaseBoolInt,
    /**
     * 
     */
    friend_status: FriendsFriendStatusStatus,
    /**
     * 
     */
    mutual: FriendsRequestsMutual,
    /**
     * 
     */
    type: UsersUserType
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

export interface UtilsDomainResolved {
    /**
     * Object ID
     */
    object_id: number,
    /**
     * Group ID
     */
    group_id: number,
    /**
     * 
     */
    type: UtilsDomainResolvedType
}

export type UtilsDomainResolvedType = string

export interface UtilsLastShortenedLink {
    /**
     * Access key for private stats
     */
    access_key: string,
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * Short link URL
     */
    short_url: string,
    /**
     * Creation time in Unixtime
     */
    timestamp: number,
    /**
     * Full URL
     */
    url: string,
    /**
     * Total views number
     */
    views: number
}

export interface UtilsLinkChecked {
    /**
     * Link URL
     */
    link: string,
    /**
     * 
     */
    status: UtilsLinkCheckedStatus
}

export type UtilsLinkCheckedStatus = string

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

export interface UtilsShortLink {
    /**
     * Access key for private stats
     */
    access_key: string,
    /**
     * Link key (characters after vk.cc/)
     */
    key: string,
    /**
     * Short link URL
     */
    short_url: string,
    /**
     * Full URL
     */
    url: string
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

export interface UtilsStatsExtended {
    /**
     * 
     */
    cities: UtilsStatsCity[],
    /**
     * 
     */
    countries: UtilsStatsCountry[],
    /**
     * 
     */
    sex_age: UtilsStatsSexAge[],
    /**
     * Start time
     */
    timestamp: number,
    /**
     * Total views number
     */
    views: number
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

export interface VideoLiveInfo {
    /**
     * 
     */
    enabled: BaseBoolInt,
    /**
     * 
     */
    is_notifications_blocked: BaseBoolInt
}

export interface VideoLiveSettings {
    /**
     * If user car rewind live or not
     */
    can_rewind: BaseBoolInt,
    /**
     * If live is endless or not
     */
    is_endless: BaseBoolInt,
    /**
     * Max possible time for rewind
     */
    max_duration: number
}

export interface VideoRestrictionButton {
    /**
     * 
     */
    action: string,
    /**
     * 
     */
    title: string
}

export interface VideoSaveResult {
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Video description
     */
    description: string,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * URL for the video uploading
     */
    upload_url: string,
    /**
     * Video ID
     */
    video_id: number
}

export interface VideoVideo {
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * Information whether current user can comment the video
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can like the video
     */
    can_like: BaseBoolInt,
    /**
     * Information whether current user can repost the video
     */
    can_repost: BaseBoolInt,
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe: BaseBoolInt,
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link: BaseBoolInt,
    /**
     * 1 if video is private
     */
    is_private: BaseBoolInt,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * 
     */
    image: VideoVideoImage[],
    /**
     * 
     */
    first_frame: VideoVideoImage[],
    /**
     * Video width
     */
    width: number,
    /**
     * Video height
     */
    height: number,
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Whether video is added to bookmarks
     */
    is_favorite: boolean,
    /**
     * Video embed URL
     */
    player: string,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * 1 if  video is being converted
     */
    converting: BaseBoolInt,
    /**
     * 
     */
    restriction: MediaRestriction,
    /**
     * 1 if video is added to user's albums
     */
    added: BaseBoolInt,
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed: BaseBoolInt,
    /**
     * 
     */
    track_code: string,
    /**
     * Information whether the video is repeated
     */
    repeat: BasePropertyExists,
    /**
     * 
     */
    type: string,
    /**
     * Number of views
     */
    views: number,
    /**
     * If video is external, number of views on vk
     */
    local_views: number,
    /**
     * Restriction code
     */
    content_restricted: number,
    /**
     * Restriction text
     */
    content_restricted_message: string,
    /**
     * Live donations balance
     */
    balance: number,
    /**
     * Live stream status
     */
    live_status: string,
    /**
     * 1 if the video is a live stream
     */
    live: BasePropertyExists,
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming: BasePropertyExists,
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time: number,
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify: BaseBoolInt,
    /**
     * Number of spectators of the stream
     */
    spectators: number,
    /**
     * External platform
     */
    platform: string,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    reposts: BaseRepostsInfo
}

export interface VideoVideoAlbumFull {
    /**
     * Total number of videos in album
     */
    count: number,
    /**
     * Album ID
     */
    id: number,
    /**
     * Album cover image in different sizes
     */
    image: VideoVideoImage[],
    /**
     * Need blur album thumb or not
     */
    image_blur: BasePropertyExists,
    /**
     * Information whether album is system
     */
    is_system: BasePropertyExists,
    /**
     * Album owner's ID
     */
    owner_id: number,
    /**
     * Album title
     */
    title: string,
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated_time: number
}

export interface VideoVideoFiles {
    /**
     * URL of the external player
     */
    external: string,
    /**
     * URL of the mpeg4 file with 240p quality
     */
    mp4_240: string,
    /**
     * URL of the mpeg4 file with 360p quality
     */
    mp4_360: string,
    /**
     * URL of the mpeg4 file with 480p quality
     */
    mp4_480: string,
    /**
     * URL of the mpeg4 file with 720p quality
     */
    mp4_720: string,
    /**
     * URL of the mpeg4 file with 1080p quality
     */
    mp4_1080: string,
    /**
     * URL of the flv file with 320p quality
     */
    flv_320: string
}

export interface VideoVideoFull {
    /**
     * Video access key
     */
    access_key: string,
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date: number,
    /**
     * Information whether current user can comment the video
     */
    can_comment: BaseBoolInt,
    /**
     * Information whether current user can edit the video
     */
    can_edit: BaseBoolInt,
    /**
     * Information whether current user can like the video
     */
    can_like: BaseBoolInt,
    /**
     * Information whether current user can repost the video
     */
    can_repost: BaseBoolInt,
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe: BaseBoolInt,
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves: BaseBoolInt,
    /**
     * Information whether current user can add the video
     */
    can_add: BaseBoolInt,
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link: BaseBoolInt,
    /**
     * 1 if video is private
     */
    is_private: BaseBoolInt,
    /**
     * Number of comments
     */
    comments: number,
    /**
     * Date when video has been uploaded in Unixtime
     */
    date: number,
    /**
     * Video description
     */
    description: string,
    /**
     * Video duration in seconds
     */
    duration: number,
    /**
     * 
     */
    image: VideoVideoImage[],
    /**
     * 
     */
    first_frame: VideoVideoImage[],
    /**
     * Video width
     */
    width: number,
    /**
     * Video height
     */
    height: number,
    /**
     * Video ID
     */
    id: number,
    /**
     * Video owner ID
     */
    owner_id: number,
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id: number,
    /**
     * Video title
     */
    title: string,
    /**
     * Whether video is added to bookmarks
     */
    is_favorite: boolean,
    /**
     * Video embed URL
     */
    player: string,
    /**
     * Returns if the video is processing
     */
    processing: BasePropertyExists,
    /**
     * 1 if  video is being converted
     */
    converting: BaseBoolInt,
    /**
     * 
     */
    restriction: MediaRestriction,
    /**
     * 1 if video is added to user's albums
     */
    added: BaseBoolInt,
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed: BaseBoolInt,
    /**
     * 
     */
    track_code: string,
    /**
     * Information whether the video is repeated
     */
    repeat: BasePropertyExists,
    /**
     * 
     */
    type: string,
    /**
     * Number of views
     */
    views: number,
    /**
     * If video is external, number of views on vk
     */
    local_views: number,
    /**
     * Restriction code
     */
    content_restricted: number,
    /**
     * Restriction text
     */
    content_restricted_message: string,
    /**
     * Live donations balance
     */
    balance: number,
    /**
     * Live stream status
     */
    live_status: string,
    /**
     * 1 if the video is a live stream
     */
    live: BasePropertyExists,
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming: BasePropertyExists,
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time: number,
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify: BaseBoolInt,
    /**
     * Number of spectators of the stream
     */
    spectators: number,
    /**
     * External platform
     */
    platform: string,
    /**
     * 
     */
    likes: BaseLikes,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * 
     */
    files: VideoVideoFiles,
    /**
     * Settings for live stream
     */
    live_settings: VideoLiveSettings
}

export interface VideoVideoImage {
    /**
     * 
     */
    id: string,
    /**
     * Image height
     */
    height: number,
    /**
     * Image url
     */
    url: string,
    /**
     * Image width
     */
    width: number,
    /**
     * 
     */
    with_padding: BasePropertyExists
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
     * Comments number
     */
    comments: number,
    /**
     * Date when the note has been created in Unixtime
     */
    date: number,
    /**
     * Note ID
     */
    id: number,
    /**
     * Note owner's ID
     */
    owner_id: number,
    /**
     * Read comments number
     */
    read_comments: number,
    /**
     * Note title
     */
    title: string,
    /**
     * URL of the page with note preview
     */
    view_url: string
}

export interface WallCarouselBase {
    /**
     * Index of current carousel element
     */
    carousel_offset: number
}

export interface WallCommentAttachment {
    /**
     * 
     */
    audio: AudioAudio,
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
    note: WallAttachedNote,
    /**
     * 
     */
    page: PagesWikipageFull,
    /**
     * 
     */
    photo: PhotosPhoto,
    /**
     * 
     */
    sticker: BaseSticker,
    /**
     * 
     */
    type: WallCommentAttachmentType,
    /**
     * 
     */
    video: VideoVideo
}

export type WallCommentAttachmentType = string

export interface WallGeo {
    /**
     * Coordinates as string. <latitude> <longtitude>
     */
    coordinates: string,
    /**
     * 
     */
    place: BasePlace,
    /**
     * Information whether a map is showed
     */
    showmap: number,
    /**
     * Place type
     */
    type: string
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

export interface WallPostCopyright {
    /**
     * 
     */
    id: number,
    /**
     * 
     */
    link: string,
    /**
     * 
     */
    name: string,
    /**
     * 
     */
    type: string
}

export interface WallPostSource {
    /**
     * Additional data
     */
    data: string,
    /**
     * Platform name
     */
    platform: string,
    /**
     * 
     */
    type: WallPostSourceType,
    /**
     * URL to an external site used to publish the post
     */
    url: string
}

export type WallPostSourceType = string

export type WallPostType = string

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

export interface WallViews {
    /**
     * Count
     */
    count: number
}

export interface WallWallComment {
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * 
     */
    donut: WallWallCommentDonut,
    /**
     * Author ID
     */
    from_id: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * Real position of the comment
     */
    real_offset: number,
    /**
     * Replied comment ID
     */
    reply_to_comment: number,
    /**
     * Replied user ID
     */
    reply_to_user: number,
    /**
     * Comment text
     */
    text: string,
    /**
     * 
     */
    thread: CommentThread,
    /**
     * 
     */
    post_id: number,
    /**
     * 
     */
    owner_id: number,
    /**
     * 
     */
    parents_stack: number[],
    /**
     * 
     */
    deleted: boolean
}

export interface WallWallCommentDonut {
    /**
     * Means commentator is donator
     */
    is_don: boolean,
    /**
     * 
     */
    placeholder: WallWallCommentDonutPlaceholder
}

export interface WallWallCommentDonutPlaceholder {
    /**
     * 
     */
    text: string
}

export interface WallWallpost {
    /**
     * Access key to private object
     */
    access_key: string,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * Information about the source of the post
     */
    copyright: WallPostCopyright,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * Date of editing in Unixtime
     */
    edited: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * 
     */
    geo: WallGeo,
    /**
     * Post ID
     */
    id: number,
    /**
     * Is post archived, only for post owners
     */
    is_archived: boolean,
    /**
     * Information whether the post in favorites list
     */
    is_favorite: boolean,
    /**
     * Count of likes
     */
    likes: BaseLikesInfo,
    /**
     * Wall owner's ID
     */
    owner_id: number,
    /**
     * 
     */
    poster: any,
    /**
     * If post type 'reply', contains original post ID
     */
    post_id: number,
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack: number[],
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * Post text
     */
    text: string,
    /**
     * Count of views
     */
    views: WallViews
}

export interface WallWallpostAttachment {
    /**
     * Access key for the audio
     */
    access_key: string,
    /**
     * 
     */
    album: PhotosPhotoAlbum,
    /**
     * 
     */
    app: WallAppPost,
    /**
     * 
     */
    audio: AudioAudio,
    /**
     * 
     */
    doc: DocsDoc,
    /**
     * 
     */
    event: EventsEventAttach,
    /**
     * 
     */
    group: GroupsGroupAttach,
    /**
     * 
     */
    graffiti: WallGraffiti,
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
    market_album: MarketMarketAlbum,
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
    photo: PhotosPhoto,
    /**
     * 
     */
    photos_list: string[],
    /**
     * 
     */
    poll: PollsPoll,
    /**
     * 
     */
    posted_photo: WallPostedPhoto,
    /**
     * 
     */
    type: WallWallpostAttachmentType,
    /**
     * 
     */
    video: VideoVideo
}

export type WallWallpostAttachmentType = string

export interface WallWallpostCommentsDonut {
    /**
     * 
     */
    placeholder: WallWallpostCommentsDonutPlaceholder
}

export interface WallWallpostCommentsDonutPlaceholder {
    /**
     * 
     */
    text: string
}

export interface WallWallpostDonut {
    /**
     * Post only for dons
     */
    is_donut: boolean,
    /**
     * Value of this field need to pass in wall.post/edit in donut_paid_duration
     */
    paid_duration: number,
    /**
     * If placeholder was respond, text and all attachments will be hidden
     */
    placeholder: WallWallpostDonutPlaceholder,
    /**
     * Says whether group admin can post free copy of this donut post
     */
    can_publish_free_copy: boolean,
    /**
     * Says what user can edit in post about donut properties
     */
    edit_mode: string
}

export interface WallWallpostDonutPlaceholder {
    /**
     * 
     */
    text: string
}

export interface WallWallpostFull {
    /**
     * Index of current carousel element
     */
    carousel_offset: number,
    /**
     * Access key to private object
     */
    access_key: string,
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * Information about the source of the post
     */
    copyright: WallPostCopyright,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * Date of editing in Unixtime
     */
    edited: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * 
     */
    geo: WallGeo,
    /**
     * Post ID
     */
    id: number,
    /**
     * Is post archived, only for post owners
     */
    is_archived: boolean,
    /**
     * Information whether the post in favorites list
     */
    is_favorite: boolean,
    /**
     * Count of likes
     */
    likes: BaseLikesInfo,
    /**
     * Wall owner's ID
     */
    owner_id: number,
    /**
     * 
     */
    poster: any,
    /**
     * If post type 'reply', contains original post ID
     */
    post_id: number,
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack: number[],
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * Post text
     */
    text: string,
    /**
     * Count of views
     */
    views: WallViews,
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
     * 
     */
    donut: WallWallpostDonut,
    /**
     * Information whether the post is pinned
     */
    is_pinned: number,
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads: BaseBoolInt,
    /**
     * Preview length control parameter
     */
    short_text_rate: number
}

export interface WallWallpostToId {
    /**
     * 
     */
    attachments: WallWallpostAttachment[],
    /**
     * 
     */
    comments: BaseCommentsInfo,
    /**
     * ID of the source post owner
     */
    copy_owner_id: number,
    /**
     * ID of the source post
     */
    copy_post_id: number,
    /**
     * Date of publishing in Unixtime
     */
    date: number,
    /**
     * Post author ID
     */
    from_id: number,
    /**
     * 
     */
    geo: WallGeo,
    /**
     * Post ID
     */
    id: number,
    /**
     * Information whether the post in favorites list
     */
    is_favorite: boolean,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * wall post ID (if comment)
     */
    post_id: number,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * 
     */
    post_type: WallPostType,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Post signer ID
     */
    signer_id: number,
    /**
     * Post text
     */
    text: string,
    /**
     * Wall owner's ID
     */
    to_id: number
}

export interface WidgetsCommentMedia {
    /**
     * Media item ID
     */
    item_id: number,
    /**
     * Media owner's ID
     */
    owner_id: number,
    /**
     * URL of the preview image (type=photo only)
     */
    thumb_src: string,
    /**
     * 
     */
    type: WidgetsCommentMediaType
}

export type WidgetsCommentMediaType = string

export interface WidgetsCommentReplies {
    /**
     * Information whether current user can comment the post
     */
    can_post: BaseBoolInt,
    /**
     * Comments number
     */
    count: number,
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
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * 
     */
    likes: WidgetsWidgetLikes,
    /**
     * Comment text
     */
    text: string,
    /**
     * User ID
     */
    uid: number,
    /**
     * 
     */
    user: UsersUserFull
}

export interface WidgetsWidgetComment {
    /**
     * 
     */
    attachments: WallCommentAttachment[],
    /**
     * Information whether current user can delete the comment
     */
    can_delete: BaseBoolInt,
    /**
     * 
     */
    comments: WidgetsCommentReplies,
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number,
    /**
     * Comment author ID
     */
    from_id: number,
    /**
     * Comment ID
     */
    id: number,
    /**
     * 
     */
    likes: BaseLikesInfo,
    /**
     * 
     */
    media: WidgetsCommentMedia,
    /**
     * 
     */
    post_source: WallPostSource,
    /**
     * Post type
     */
    post_type: number,
    /**
     * 
     */
    reposts: BaseRepostsInfo,
    /**
     * Comment text
     */
    text: string,
    /**
     * Wall owner
     */
    to_id: number,
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
     * 
     */
    comments: BaseObjectCount,
    /**
     * Date when widgets on the page has been initialized firstly in Unixtime
     */
    date: number,
    /**
     * Page description
     */
    description: string,
    /**
     * Page ID
     */
    id: number,
    /**
     * 
     */
    likes: BaseObjectCount,
    /**
     * page_id parameter value
     */
    page_id: string,
    /**
     * URL of the preview image
     */
    photo: string,
    /**
     * Page title
     */
    title: string,
    /**
     * Page absolute URL
     */
    url: string
}

export type Poster = any