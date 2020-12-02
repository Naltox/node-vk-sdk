import * as Models from "./Models"

export interface AccountBanParams {
    /**
     * undefined
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountChangePasswordParams {
    /**
     * Session id received after the [vk.com/dev/auth.restore|auth.restore] method is executed. (If the password is changed right after the access was restored)
     */
    restore_sid?: string,
    /**
     * Hash received after a successful OAuth authorization with a code got by SMS. (If the password is changed right after the access was restored)
     */
    change_password_hash?: string,
    /**
     * Current user password.
     */
    old_password?: string,
    /**
     * New password that will be set as a current
     */
    new_password: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetActiveOffersParams {
    /**
     * undefined
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetAppPermissionsParams {
    /**
     * User ID whose settings information shall be got. By default: current user.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetBannedParams {
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetCountersParams {
    /**
     * Counters to be returned.
     */
    filter?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetInfoParams {
    /**
     * Fields to return. Possible values: *'country' — user country,, *'https_required' — is "HTTPS only" option enabled,, *'own_posts_default' — is "Show my posts only" option is enabled,, *'no_wall_replies' — are wall replies disabled or not,, *'intro' — is intro passed by user or not,, *'lang' — user language. By default: all.
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetProfileInfoParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AccountGetPushSettingsParams {
    /**
     * Unique device ID.
     */
    device_id?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountRegisterDeviceParams {
    /**
     * Device token used to send notifications. (for mpns, the token shall be URL for sending of notifications)
     */
    token: string,
    /**
     * String name of device model.
     */
    device_model?: string,
    /**
     * Device year.
     */
    device_year?: number,
    /**
     * Unique device ID.
     */
    device_id: string,
    /**
     * String version of device operating system.
     */
    system_version?: string,
    /**
     * Push settings in a [vk.com/dev/push_settings|special format].
     */
    settings?: string,
    /**
     * undefined
     */
    sandbox?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSaveProfileInfoParams {
    /**
     * User first name.
     */
    first_name?: string,
    /**
     * User last name.
     */
    last_name?: string,
    /**
     * User maiden name (female only)
     */
    maiden_name?: string,
    /**
     * User screen name.
     */
    screen_name?: string,
    /**
     * ID of the name change request to be canceled. If this parameter is sent, all the others are ignored.
     */
    cancel_request_id?: number,
    /**
     * User sex. Possible values: , * '1' – female,, * '2' – male.
     */
    sex?: number,
    /**
     * User relationship status. Possible values: , * '1' – single,, * '2' – in a relationship,, * '3' – engaged,, * '4' – married,, * '5' – it's complicated,, * '6' – actively searching,, * '7' – in love,, * '0' – not specified.
     */
    relation?: number,
    /**
     * ID of the relationship partner.
     */
    relation_partner_id?: number,
    /**
     * User birth date, format: DD.MM.YYYY.
     */
    bdate?: string,
    /**
     * Birth date visibility. Returned values: , * '1' – show birth date,, * '2' – show only month and day,, * '0' – hide birth date.
     */
    bdate_visibility?: number,
    /**
     * User home town.
     */
    home_town?: string,
    /**
     * User country.
     */
    country_id?: number,
    /**
     * User city.
     */
    city_id?: number,
    /**
     * Status text.
     */
    status?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetInfoParams {
    /**
     * Setting name.
     */
    name?: string,
    /**
     * Setting value.
     */
    value?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetNameInMenuParams {
    /**
     * User ID.
     */
    user_id: number,
    /**
     * Application screen name.
     */
    name?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetOfflineParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetOnlineParams {
    /**
     * '1' if videocalls are available for current device.
     */
    voip?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetPushSettingsParams {
    /**
     * Unique device ID.
     */
    device_id: string,
    /**
     * Push settings in a [vk.com/dev/push_settings|special format].
     */
    settings?: string,
    /**
     * Notification key.
     */
    key?: string,
    /**
     * New value for the key in a [vk.com/dev/push_settings|special format].
     */
    value?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AccountSetSilenceModeParams {
    /**
     * Unique device ID.
     */
    device_id?: string,
    /**
     * Time in seconds for what notifications should be disabled. '-1' to disable forever.
     */
    time?: number,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * '1' — to enable sound in this dialog, '0' — to disable sound. Only if 'peer_id' contains user or community ID.
     */
    sound?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountUnbanParams {
    /**
     * undefined
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AccountUnregisterDeviceParams {
    /**
     * Unique device ID.
     */
    device_id?: string,
    /**
     * undefined
     */
    sandbox?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsAddOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
     */
    data: Models.AdsUserSpecificationCutted[],
    /**
     * access token
     */
    access_token?: string
}

export interface AdsCheckLinkParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Object type: *'community' — community,, *'post' — community post,, *'application' — VK application,, *'video' — video,, *'site' — external site.
     */
    link_type: string,
    /**
     * Object URL.
     */
    link_url: string,
    /**
     * Campaign ID
     */
    campaign_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsCreateAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe created ads. Description of 'ad_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsCreateCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'campaign_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsCreateClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'client_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsCreateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
     */
    client_id?: number,
    /**
     * Name of the target group — a string up to 64 characters long.
     */
    name: string,
    /**
     * 'For groups with auditory created with pixel code only.', , Number of days after that users will be automatically removed from the group.
     */
    lifetime: number,
    /**
     * undefined
     */
    target_pixel_id?: number,
    /**
     * undefined
     */
    target_pixel_rules?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsDeleteAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array with ad IDs.
     */
    ids: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsDeleteCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array with IDs of deleted campaigns.
     */
    ids: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsDeleteClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array with IDs of deleted clients.
     */
    ids: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsDeleteTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number,
    /**
     * Group ID.
     */
    target_group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetAccountsParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string,
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string,
    /**
     * 'Available and required for advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number,
    /**
     * Flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
     */
    include_deleted?: boolean,
    /**
     * Flag that specifies whether to show only archived ads: *0 — show all ads,, *1 — show only archived ads. Available when include_deleted flag is *1
     */
    only_deleted?: boolean,
    /**
     * Limit of number of returned ads. Used only if ad_ids parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number,
    /**
     * Offset. Used in the same cases as 'limit' parameter.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetAdsLayoutParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string,
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string,
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number,
    /**
     * Flag that specifies whether archived ads shall be shown. *0 — show only active ads,, *1 — show all ads.
     */
    include_deleted?: boolean,
    /**
     * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number,
    /**
     * Offset. Used in the same cases as 'limit' parameter.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetAdsTargetingParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string,
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string,
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number,
    /**
     * flag that specifies whether archived ads shall be shown: *0 — show only active ads,, *1 — show all ads.
     */
    include_deleted?: boolean,
    /**
     * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetBudgetParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'For advertising agencies'. ID of the client advertising campaigns are retrieved from.
     */
    client_id?: number,
    /**
     * Flag that specifies whether archived ads shall be shown. *0 — show only active campaigns,, *1 — show all campaigns.
     */
    include_deleted?: boolean,
    /**
     * Filter of advertising campaigns to show. Serialized JSON array with campaign IDs. Only campaigns that exist in 'campaign_ids' and belong to the specified advertising account will be shown. If the parameter is null, all campaigns will be shown.
     */
    campaign_ids?: string,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetCategoriesParams {
    /**
     * Language. The full list of supported languages is [vk.com/dev/api_requests|here].
     */
    lang?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetDemographicsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
     */
    ids_type: string,
    /**
     * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string,
    /**
     * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: string,
    /**
     * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
     */
    date_from: string,
    /**
     * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
     */
    date_to: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetFloodStatsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetLookalikeRequestsParams {
    /**
     * undefined
     */
    account_id: number,
    /**
     * undefined
     */
    client_id?: number,
    /**
     * undefined
     */
    requests_ids?: string,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    limit?: number,
    /**
     * undefined
     */
    sort_by?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetMusiciansParams {
    /**
     * undefined
     */
    artist_name: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetPostsReachParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns.
     */
    ids_type: string,
    /**
     * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 100 objects.
     */
    ids: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetRejectionReasonParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Ad ID.
     */
    ad_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetStatisticsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Type of requested objects listed in 'ids' parameter: *ad — ads,, *campaign — campaigns,, *client — clients,, *office — account.
     */
    ids_type: string,
    /**
     * IDs requested ads, campaigns, clients or account, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string,
    /**
     * Data grouping by dates: *day — statistics by days,, *month — statistics by months,, *overall — overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: string,
    /**
     * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — day it was created on,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — month it was created in,, *overall: 0.
     */
    date_from: string,
    /**
     * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011, **0 — current day,, *month: YYYY-MM, example: 2011-09 — September 2011, **0 — current month,, *overall: 0.
     */
    date_to: string,
    /**
     * Additional fields to add to statistics
     */
    stats_fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetSuggestionsParams {
    /**
     * Section, suggestions are retrieved in. Available values: *countries — request of a list of countries. If q is not set or blank, a short list of countries is shown. Otherwise, a full list of countries is shown. *regions — requested list of regions. 'country' parameter is required. *cities — requested list of cities. 'country' parameter is required. *districts — requested list of districts. 'cities' parameter is required. *stations — requested list of subway stations. 'cities' parameter is required. *streets — requested list of streets. 'cities' parameter is required. *schools — requested list of educational organizations. 'cities' parameter is required. *interests — requested list of interests. *positions — requested list of positions (professions). *group_types — requested list of group types. *religions — requested list of religious commitments. *browsers — requested list of browsers and mobile devices.
     */
    section: string,
    /**
     * Objects IDs separated by commas. If the parameter is passed, 'q, country, cities' should not be passed.
     */
    ids?: string,
    /**
     * Filter-line of the request (for countries, regions, cities, streets, schools, interests, positions).
     */
    q?: string,
    /**
     * ID of the country objects are searched in.
     */
    country?: number,
    /**
     * IDs of cities where objects are searched in, separated with a comma.
     */
    cities?: string,
    /**
     * Language of the returned string values. Supported languages: *ru — Russian,, *ua — Ukrainian,, *en — English.
     */
    lang?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetTargetGroupsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
     */
    client_id?: number,
    /**
     * '1' — to return pixel code.
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetTargetingStatsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * undefined
     */
    client_id?: number,
    /**
     * Serialized JSON object that describes targeting parameters. Description of 'criteria' object see below.
     */
    criteria?: string,
    /**
     * ID of an ad which targeting parameters shall be analyzed.
     */
    ad_id?: number,
    /**
     * Ad format. Possible values: *'1' — image and text,, *'2' — big image,, *'3' — exclusive format,, *'4' — community, square image,, *'7' — special app format,, *'8' — special community format,, *'9' — post in community,, *'10' — app board.
     */
    ad_format?: number,
    /**
     * Platforms to use for ad showing. Possible values: (for 'ad_format' = '1'), *'0' — VK and partner sites,, *'1' — VK only. (for 'ad_format' = '9'), *'all' — all platforms,, *'desktop' — desktop version,, *'mobile' — mobile version and apps.
     */
    ad_platform?: string,
    /**
     * undefined
     */
    ad_platform_no_wall?: string,
    /**
     * undefined
     */
    ad_platform_no_ad_network?: string,
    /**
     * URL for the advertised object.
     */
    link_url: string,
    /**
     * Domain of the advertised object.
     */
    link_domain?: string,
    /**
     * Additionally return recommended cpc and cpm to reach 5,10..95 percents of audience.
     */
    need_precise?: boolean,
    /**
     * Impressions limit period in seconds, must be a multiple of 86400(day)
     */
    impressions_limit_period?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetUploadURLParams {
    /**
     * Ad format: *1 — image and text,, *2 — big image,, *3 — exclusive format,, *4 — community, square image,, *7 — special app format.
     */
    ad_format: number,
    /**
     * undefined
     */
    icon?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsGetVideoUploadURLParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AdsImportTargetContactsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number,
    /**
     * Target group ID.
     */
    target_group_id: number,
    /**
     * List of phone numbers, emails or user IDs separated with a comma.
     */
    contacts: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsRemoveOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array with IDs of deleted managers.
     */
    ids: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsUpdateAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe changes in ads. Description of 'ad_edit_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsUpdateCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe changes in campaigns. Description of 'campaign_mod' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsUpdateClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe changes in clients. Description of 'client_mod' objects see below.
     */
    data: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdsUpdateOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
     */
    data: Models.AdsUserSpecification[],
    /**
     * access token
     */
    access_token?: string
}

export interface AdsUpdateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number,
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number,
    /**
     * Group ID.
     */
    target_group_id: number,
    /**
     * New name of the target group — a string up to 64 characters long.
     */
    name: string,
    /**
     * Domain of the site where user accounting code will be placed.
     */
    domain?: string,
    /**
     * 'Only for the groups that get audience from sites with user accounting code.', Time in days when users added to a retarget group will be automatically excluded from it. '0' - automatic exclusion is off.
     */
    lifetime: number,
    /**
     * undefined
     */
    target_pixel_id?: number,
    /**
     * undefined
     */
    target_pixel_rules?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetAdCategoriesParams {
    /**
     * undefined
     */
    office_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetAdUnitCodeParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetAdUnitsParams {
    /**
     * undefined
     */
    office_id: number,
    /**
     * undefined
     */
    sites_ids?: string,
    /**
     * undefined
     */
    ad_units_ids?: string,
    /**
     * undefined
     */
    fields?: string,
    /**
     * undefined
     */
    limit?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetFraudHistoryParams {
    /**
     * undefined
     */
    office_id: number,
    /**
     * undefined
     */
    sites_ids?: string,
    /**
     * undefined
     */
    limit?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetSitesParams {
    /**
     * undefined
     */
    office_id: number,
    /**
     * undefined
     */
    sites_ids?: string,
    /**
     * undefined
     */
    fields?: string,
    /**
     * undefined
     */
    limit?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AdswebGetStatisticsParams {
    /**
     * undefined
     */
    office_id: number,
    /**
     * undefined
     */
    ids_type: string,
    /**
     * undefined
     */
    ids: string,
    /**
     * undefined
     */
    period: string,
    /**
     * undefined
     */
    date_from: string,
    /**
     * undefined
     */
    date_to: string,
    /**
     * undefined
     */
    fields?: string,
    /**
     * undefined
     */
    limit?: number,
    /**
     * undefined
     */
    page_id?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsGetAppImageUploadServerParams {
    /**
     * undefined
     */
    image_type: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsGetAppImagesParams {
    /**
     * Offset needed to return a specific subset of images.
     */
    offset?: number,
    /**
     * Maximum count of results.
     */
    count?: number,
    /**
     * undefined
     */
    image_type?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsGetGroupImageUploadServerParams {
    /**
     * undefined
     */
    image_type: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsGetGroupImagesParams {
    /**
     * Offset needed to return a specific subset of images.
     */
    offset?: number,
    /**
     * Maximum count of results.
     */
    count?: number,
    /**
     * undefined
     */
    image_type?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsGetImagesByIdParams {
    /**
     * List of images IDs
     */
    images: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsSaveAppImageParams {
    /**
     * Parameter returned when photo is uploaded to server
     */
    hash: string,
    /**
     * Parameter returned when photo is uploaded to server
     */
    image: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsSaveGroupImageParams {
    /**
     * Parameter returned when photo is uploaded to server
     */
    hash: string,
    /**
     * Parameter returned when photo is uploaded to server
     */
    image: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppWidgetsUpdateParams {
    /**
     * undefined
     */
    code: string,
    /**
     * undefined
     */
    type: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsDeleteAppRequestsParams {
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetParams {
    /**
     * Application ID
     */
    app_id?: number,
    /**
     * List of application ID
     */
    app_ids?: string[],
    /**
     * platform. Possible values: *'ios' — iOS,, *'android' — Android,, *'winphone' — Windows Phone,, *'web' — приложения на vk.com. By default: 'web'.
     */
    platform?: string,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    return_friends?: boolean,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', (only if return_friends - 1)
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: 'nom' — nominative (default),, 'gen' — genitive,, 'dat' — dative,, 'acc' — accusative,, 'ins' — instrumental,, 'abl' — prepositional. (only if 'return_friends' = '1')
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetCatalogParams {
    /**
     * Sort order: 'popular_today' — popular for one day (default), 'visitors' — by visitors number , 'create_date' — by creation date, 'growth_rate' — by growth rate, 'popular_week' — popular for one week
     */
    sort?: string,
    /**
     * Offset required to return a specific subset of apps.
     */
    offset?: number,
    /**
     * Number of apps to return.
     */
    count: number,
    /**
     * undefined
     */
    platform?: string,
    /**
     * '1' — to return additional fields 'screenshots', 'MAU', 'catalog_position', and 'international'. If set, 'count' must be less than or equal to '100'. '0' — not to return additional fields (default).
     */
    extended?: boolean,
    /**
     * undefined
     */
    return_friends?: boolean,
    /**
     * undefined
     */
    fields?: Models.UsersFields[],
    /**
     * undefined
     */
    name_case?: string,
    /**
     * Search query string.
     */
    q?: string,
    /**
     * undefined
     */
    genre_id?: number,
    /**
     * 'installed' — to return list of installed apps (only for mobile platform).
     */
    filter?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetFriendsListParams {
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * List size.
     */
    count?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * List type. Possible values: * 'invite' — available for invites (don't play the game),, * 'request' — available for request (play the game). By default: 'invite'.
     */
    type?: string,
    /**
     * Additional profile fields, see [vk.com/dev/fields|description].
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetLeaderboardParams {
    /**
     * Leaderboard type. Possible values: *'level' — by level,, *'points' — by mission points,, *'score' — by score ().
     */
    type: string,
    /**
     * Rating type. Possible values: *'1' — global rating among all players,, *'0' — rating among user friends.
     */
    global?: boolean,
    /**
     * 1 — to return additional info about users
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetScopesParams {
    /**
     * undefined
     */
    type?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsGetScoreParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsPromoHasActiveGiftParams {
    /**
     * Id of game promo action
     */
    promo_id: number,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsPromoUseGiftParams {
    /**
     * Id of game promo action
     */
    promo_id: number,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface AppsSendRequestParams {
    /**
     * id of the user to send a request
     */
    user_id: number,
    /**
     * request text
     */
    text?: string,
    /**
     * request type. Values: 'invite' – if the request is sent to a user who does not have the app installed,, 'request' – if a user has already installed the app
     */
    type?: string,
    /**
     * undefined
     */
    name?: string,
    /**
     * special string key to be sent with the request
     */
    key?: string,
    /**
     * undefined
     */
    separate?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface AuthRestoreParams {
    /**
     * User phone number.
     */
    phone: string,
    /**
     * User last name.
     */
    last_name: string,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardAddTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic title.
     */
    title: string,
    /**
     * Text of the topic.
     */
    text?: string,
    /**
     * For a community: '1' — to post the topic as by the community, '0' — to post the topic as by the user (default)
     */
    from_group?: boolean,
    /**
     * List of media objects attached to the topic, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614", , "NOTE: If you try to attach more than one reference, an error will be thrown.",
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface BoardCloseTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardCreateCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * ID of the topic to be commented on.
     */
    topic_id: number,
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string,
    /**
     * (Required if 'text' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID.
     */
    attachments?: string[],
    /**
     * '1' — to post the comment as by the community, '0' — to post the comment as by the user (default)
     */
    from_group?: boolean,
    /**
     * Sticker ID.
     */
    sticker_id?: number,
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardDeleteCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardDeleteTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardEditCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * ID of the comment on the topic.
     */
    comment_id: number,
    /**
     * (Required if 'attachments' is not set). New comment text.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media object: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface BoardEditTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * New title of the topic.
     */
    title: string,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardFixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardGetCommentsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
     */
    need_likes?: boolean,
    /**
     * undefined
     */
    start_comment_id?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * '1' — to return information about users who posted comments, '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * Sort order: 'asc' — by creation date in chronological order, 'desc' — by creation date in reverse chronological order,
     */
    sort?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardGetTopicsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * IDs of topics to be returned (100 maximum). By default, all topics are returned. If this parameter is set, the 'order', 'offset', and 'count' parameters are ignored.
     */
    topic_ids?: number[],
    /**
     * Sort order: '1' — by date updated in reverse chronological order. '2' — by date created in reverse chronological order. '-1' — by date updated in chronological order. '-2' — by date created in chronological order. If no sort order is specified, topics are returned in the order specified by the group administrator. Pinned topics are returned first, regardless of the sorting.
     */
    order?: number,
    /**
     * Offset needed to return a specific subset of topics.
     */
    offset?: number,
    /**
     * Number of topics to return.
     */
    count?: number,
    /**
     * '1' — to return information about users who created topics or who posted there last, '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * '1' — to return the first comment in each topic,, '2' — to return the last comment in each topic,, '0' — to return no comments. By default: '0'.
     */
    preview?: number,
    /**
     * Number of characters after which to truncate the previewed comment. To preview the full comment, specify '0'.
     */
    preview_length?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardOpenTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardRestoreCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface BoardUnfixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number,
    /**
     * Topic ID.
     */
    topic_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetChairsParams {
    /**
     * id of the faculty to get chairs from
     */
    faculty_id: number,
    /**
     * offset required to get a certain subset of chairs
     */
    offset?: number,
    /**
     * amount of chairs to get
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetCitiesParams {
    /**
     * Country ID.
     */
    country_id: number,
    /**
     * Region ID.
     */
    region_id?: number,
    /**
     * Search query.
     */
    q?: string,
    /**
     * '1' — to return all cities in the country, '0' — to return major cities in the country (default),
     */
    need_all?: boolean,
    /**
     * Offset needed to return a specific subset of cities.
     */
    offset?: number,
    /**
     * Number of cities to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetCitiesByIdParams {
    /**
     * City IDs.
     */
    city_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetCountriesParams {
    /**
     * '1' — to return a full list of all countries, '0' — to return a list of countries near the current user's country (default).
     */
    need_all?: boolean,
    /**
     * Country codes in [vk.com/dev/country_codes|ISO 3166-1 alpha-2] standard.
     */
    code?: string,
    /**
     * Offset needed to return a specific subset of countries.
     */
    offset?: number,
    /**
     * Number of countries to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetCountriesByIdParams {
    /**
     * Country IDs.
     */
    country_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetFacultiesParams {
    /**
     * University ID.
     */
    university_id: number,
    /**
     * Offset needed to return a specific subset of faculties.
     */
    offset?: number,
    /**
     * Number of faculties to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetMetroStationsParams {
    /**
     * undefined
     */
    city_id: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetMetroStationsByIdParams {
    /**
     * undefined
     */
    station_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetRegionsParams {
    /**
     * Country ID, received in [vk.com/dev/database.getCountries|database.getCountries] method.
     */
    country_id: number,
    /**
     * Search query.
     */
    q?: string,
    /**
     * Offset needed to return specific subset of regions.
     */
    offset?: number,
    /**
     * Number of regions to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetSchoolClassesParams {
    /**
     * Country ID.
     */
    country_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetSchoolsParams {
    /**
     * Search query.
     */
    q?: string,
    /**
     * City ID.
     */
    city_id: number,
    /**
     * Offset needed to return a specific subset of schools.
     */
    offset?: number,
    /**
     * Number of schools to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DatabaseGetUniversitiesParams {
    /**
     * Search query.
     */
    q?: string,
    /**
     * Country ID.
     */
    country_id?: number,
    /**
     * City ID.
     */
    city_id?: number,
    /**
     * Offset needed to return a specific subset of universities.
     */
    offset?: number,
    /**
     * Number of universities to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsAddParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * Document ID.
     */
    doc_id: number,
    /**
     * Access key. This parameter is required if 'access_key' was returned with the document's data.
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsDeleteParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * Document ID.
     */
    doc_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * Document ID.
     */
    doc_id: number,
    /**
     * Document title.
     */
    title?: string,
    /**
     * Document tags.
     */
    tags?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetParams {
    /**
     * Number of documents to return. By default, all documents.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of documents.
     */
    offset?: number,
    /**
     * undefined
     */
    type?: number,
    /**
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * undefined
     */
    return_tags?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetByIdParams {
    /**
     * Document IDs. Example: , "66748_91488,66748_91455",
     */
    docs: string[],
    /**
     * undefined
     */
    return_tags?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetMessagesUploadServerParams {
    /**
     * Document type.
     */
    type?: string,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetTypesParams {
    /**
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsGetWallUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsSaveParams {
    /**
     * This parameter is returned when the file is [vk.com/dev/upload_files_2|uploaded to the server].
     */
    file: string,
    /**
     * Document title.
     */
    title?: string,
    /**
     * Document tags.
     */
    tags?: string,
    /**
     * undefined
     */
    return_tags?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface DocsSearchParams {
    /**
     * Search query string.
     */
    q: string,
    /**
     * undefined
     */
    search_own?: boolean,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * undefined
     */
    return_tags?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface DonutGetFriendsParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface DonutGetSubscriptionParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DonutGetSubscriptionsParams {
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DonutIsDonParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface DownloadedGamesGetPaidStatusParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddArticleParams {
    /**
     * undefined
     */
    url: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddLinkParams {
    /**
     * Link URL.
     */
    link: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddPageParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddPostParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddProductParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddTagParams {
    /**
     * undefined
     */
    name?: string,
    /**
     * undefined
     */
    position?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveAddVideoParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveEditTagParams {
    /**
     * undefined
     */
    id: number,
    /**
     * undefined
     */
    name: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveGetParams {
    /**
     * '1' — to return additional 'wall', 'profiles', and 'groups' fields. By default: '0'.
     */
    extended?: boolean,
    /**
     * undefined
     */
    item_type?: string,
    /**
     * Tag ID.
     */
    tag_id?: number,
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number,
    /**
     * Number of users to return.
     */
    count?: number,
    /**
     * undefined
     */
    fields?: string,
    /**
     * undefined
     */
    is_from_snackbar?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveGetPagesParams {
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    type?: string,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * undefined
     */
    tag_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveGetTagsParams {
    /**
     * access token
     */
    access_token?: string
}

export interface FaveMarkSeenParams {
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemoveArticleParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    article_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemoveLinkParams {
    /**
     * Link ID (can be obtained by [vk.com/dev/faves.getLinks|faves.getLinks] method).
     */
    link_id?: string,
    /**
     * Link URL
     */
    link?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemovePageParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemovePostParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemoveProductParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemoveTagParams {
    /**
     * undefined
     */
    id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveRemoveVideoParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveReorderTagsParams {
    /**
     * undefined
     */
    ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface FaveSetPageTagsParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * undefined
     */
    tag_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface FaveSetTagsParams {
    /**
     * undefined
     */
    item_type?: string,
    /**
     * undefined
     */
    item_owner_id?: number,
    /**
     * undefined
     */
    item_id?: number,
    /**
     * undefined
     */
    tag_ids?: number[],
    /**
     * undefined
     */
    link_id?: string,
    /**
     * undefined
     */
    link_url?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FaveTrackPageInteractionParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsAddParams {
    /**
     * ID of the user whose friend request will be approved or to whom a friend request will be sent.
     */
    user_id?: number,
    /**
     * Text of the message (up to 500 characters) for the friend request, if any.
     */
    text?: string,
    /**
     * '1' to pass an incoming request to followers list.
     */
    follow?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsAddListParams {
    /**
     * Name of the friend list.
     */
    name: string,
    /**
     * IDs of users to be added to the friend list.
     */
    user_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsAreFriendsParams {
    /**
     * IDs of the users whose friendship status to check.
     */
    user_ids: number[],
    /**
     * '1' — to return 'sign' field. 'sign' is md5("{id}_{user_id}_{friends_status}_{application_secret}"), where id is current user ID. This field allows to check that data has not been modified by the client. By default: '0'.
     */
    need_sign?: boolean,
    /**
     * Return friend request read_state field
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsDeleteParams {
    /**
     * ID of the user whose friend request is to be declined or who is to be deleted from the current user's friend list.
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsDeleteAllRequestsParams {
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsDeleteListParams {
    /**
     * ID of the friend list to delete.
     */
    list_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsEditParams {
    /**
     * ID of the user whose friend list is to be edited.
     */
    user_id: number,
    /**
     * IDs of the friend lists to which to add the user.
     */
    list_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsEditListParams {
    /**
     * Name of the friend list.
     */
    name?: string,
    /**
     * Friend list ID.
     */
    list_id: number,
    /**
     * IDs of users in the friend list.
     */
    user_ids?: number[],
    /**
     * (Applies if 'user_ids' parameter is not set.), User IDs to add to the friend list.
     */
    add_user_ids?: number[],
    /**
     * (Applies if 'user_ids' parameter is not set.), User IDs to delete from the friend list.
     */
    delete_user_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetParams {
    /**
     * User ID. By default, the current user ID.
     */
    user_id?: number,
    /**
     * Sort order: , 'name' — by name (enabled only if the 'fields' parameter is used), 'hints' — by rating, similar to how friends are sorted in My friends section, , This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    order?: string,
    /**
     * ID of the friend list returned by the [vk.com/dev/friends.getLists|friends.getLists] method to be used as the source. This parameter is taken into account only when the uid parameter is set to the current user ID. This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    list_id?: number,
    /**
     * Number of friends to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number,
    /**
     * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * undefined
     */
    ref?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetAppUsersParams {
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetByPhonesParams {
    /**
     * List of phone numbers in MSISDN format (maximum 1000). Example: "+79219876543,+79111234567"
     */
    phones?: string[],
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online, counters'.
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetListsParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * '1' — to return system friend lists. By default: '0'.
     */
    return_system?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetMutualParams {
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'target_uid'.
     */
    source_uid?: number,
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    target_uid?: number,
    /**
     * IDs of the users whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    target_uids?: number[],
    /**
     * Sort order: 'random' — random order
     */
    order?: string,
    /**
     * Number of mutual friends to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of mutual friends.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetOnlineParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Friend list ID. If this parameter is not set, information about all online friends is returned.
     */
    list_id?: number,
    /**
     * '1' — to return an additional 'online_mobile' field, '0' — (default),
     */
    online_mobile?: boolean,
    /**
     * Sort order: 'random' — random order
     */
    order?: string,
    /**
     * Number of friends to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetRecentParams {
    /**
     * Number of recently added friends to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetRequestsParams {
    /**
     * Offset needed to return a specific subset of friend requests.
     */
    offset?: number,
    /**
     * Number of friend requests to return (default 100, maximum 1000).
     */
    count?: number,
    /**
     * '1' — to return response messages from users who have sent a friend request or, if 'suggested' is set to '1', to return a list of suggested friends
     */
    extended?: boolean,
    /**
     * '1' — to return a list of mutual friends (up to 20), if any
     */
    need_mutual?: boolean,
    /**
     * '1' — to return outgoing requests, '0' — to return incoming requests (default)
     */
    out?: boolean,
    /**
     * Sort order: '1' — by number of mutual friends, '0' — by date
     */
    sort?: number,
    /**
     * undefined
     */
    need_viewed?: boolean,
    /**
     * '1' — to return a list of suggested friends, '0' — to return friend requests (default)
     */
    suggested?: boolean,
    /**
     * undefined
     */
    ref?: string,
    /**
     * undefined
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsGetSuggestionsParams {
    /**
     * Types of potential friends to return: 'mutual' — users with many mutual friends , 'contacts' — users found with the [vk.com/dev/account.importContacts|account.importContacts] method , 'mutual_contacts' — users who imported the same contacts as the current user with the [vk.com/dev/account.importContacts|account.importContacts] method
     */
    filter?: string[],
    /**
     * Number of suggestions to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of suggestions.
     */
    offset?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface FriendsSearchParams {
    /**
     * User ID.
     */
    user_id: number,
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number,
    /**
     * Number of friends to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GiftsGetParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Number of gifts to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsAddAddressParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    title: string,
    /**
     * undefined
     */
    address: string,
    /**
     * undefined
     */
    additional_address?: string,
    /**
     * undefined
     */
    country_id: number,
    /**
     * undefined
     */
    city_id: number,
    /**
     * undefined
     */
    metro_id?: number,
    /**
     * undefined
     */
    latitude: number,
    /**
     * undefined
     */
    longitude: number,
    /**
     * undefined
     */
    phone?: string,
    /**
     * undefined
     */
    work_info_status?: string,
    /**
     * undefined
     */
    timetable?: string,
    /**
     * undefined
     */
    is_main_address?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsAddCallbackServerParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    url: string,
    /**
     * undefined
     */
    title: string,
    /**
     * undefined
     */
    secret_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsAddLinkParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Link URL.
     */
    link: string,
    /**
     * Description text for the link.
     */
    text?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsApproveRequestParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * User ID.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsBanParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    owner_id?: number,
    /**
     * undefined
     */
    end_date?: number,
    /**
     * undefined
     */
    reason?: number,
    /**
     * undefined
     */
    comment?: string,
    /**
     * undefined
     */
    comment_visible?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsCreateParams {
    /**
     * Community title.
     */
    title: string,
    /**
     * Community description (ignored for 'type' = 'public').
     */
    description?: string,
    /**
     * Community type. Possible values: *'group' – group,, *'event' – event,, *'public' – public page
     */
    type?: string,
    /**
     * Category ID (for 'type' = 'public' only).
     */
    public_category?: number,
    /**
     * Public page subtype. Possible values: *'1' – place or small business,, *'2' – company, organization or website,, *'3' – famous person or group of people,, *'4' – product or work of art.
     */
    subtype?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsDeleteAddressParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    address_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsDeleteCallbackServerParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    server_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsDeleteLinkParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Link ID.
     */
    link_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsDisableOnlineParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEditParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Community title.
     */
    title?: string,
    /**
     * Community description.
     */
    description?: string,
    /**
     * Community screen name.
     */
    screen_name?: string,
    /**
     * Community type. Possible values: *'0' – open,, *'1' – closed,, *'2' – private.
     */
    access?: number,
    /**
     * Website that will be displayed in the community information field.
     */
    website?: string,
    /**
     * Community subject. Possible values: , *'1' – auto/moto,, *'2' – activity holidays,, *'3' – business,, *'4' – pets,, *'5' – health,, *'6' – dating and communication, , *'7' – games,, *'8' – IT (computers and software),, *'9' – cinema,, *'10' – beauty and fashion,, *'11' – cooking,, *'12' – art and culture,, *'13' – literature,, *'14' – mobile services and internet,, *'15' – music,, *'16' – science and technology,, *'17' – real estate,, *'18' – news and media,, *'19' – security,, *'20' – education,, *'21' – home and renovations,, *'22' – politics,, *'23' – food,, *'24' – industry,, *'25' – travel,, *'26' – work,, *'27' – entertainment,, *'28' – religion,, *'29' – family,, *'30' – sports,, *'31' – insurance,, *'32' – television,, *'33' – goods and services,, *'34' – hobbies,, *'35' – finance,, *'36' – photo,, *'37' – esoterics,, *'38' – electronics and appliances,, *'39' – erotic,, *'40' – humor,, *'41' – society, humanities,, *'42' – design and graphics.
     */
    subject?: string,
    /**
     * Organizer email (for events).
     */
    email?: string,
    /**
     * Organizer phone number (for events).
     */
    phone?: string,
    /**
     * RSS feed address for import (available only to communities with special permission. Contact vk.com/support to get it.
     */
    rss?: string,
    /**
     * Event start date in Unixtime format.
     */
    event_start_date?: number,
    /**
     * Event finish date in Unixtime format.
     */
    event_finish_date?: number,
    /**
     * Organizer community ID (for events only).
     */
    event_group_id?: number,
    /**
     * Public page category ID.
     */
    public_category?: number,
    /**
     * Public page subcategory ID.
     */
    public_subcategory?: number,
    /**
     * Founding date of a company or organization owning the community in "dd.mm.YYYY" format.
     */
    public_date?: string,
    /**
     * Wall settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (groups and events only),, *'3' – closed (groups and events only).
     */
    wall?: number,
    /**
     * Board topics settings. Possbile values: , *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    topics?: number,
    /**
     * Photos settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    photos?: number,
    /**
     * Video settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    video?: number,
    /**
     * Audio settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    audio?: number,
    /**
     * Links settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
     */
    links?: boolean,
    /**
     * Events settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
     */
    events?: boolean,
    /**
     * Places settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
     */
    places?: boolean,
    /**
     * Contacts settings (for public pages only). Possible values: *'0' – disabled,, *'1' – enabled.
     */
    contacts?: boolean,
    /**
     * Documents settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    docs?: number,
    /**
     * Wiki pages settings. Possible values: *'0' – disabled,, *'1' – open,, *'2' – limited (for groups and events only).
     */
    wiki?: number,
    /**
     * Community messages. Possible values: *'0' — disabled,, *'1' — enabled.
     */
    messages?: boolean,
    /**
     * undefined
     */
    articles?: boolean,
    /**
     * undefined
     */
    addresses?: boolean,
    /**
     * Community age limits. Possible values: *'1' — no limits,, *'2' — 16+,, *'3' — 18+.
     */
    age_limits?: number,
    /**
     * Market settings. Possible values: *'0' – disabled,, *'1' – enabled.
     */
    market?: boolean,
    /**
     * market comments settings. Possible values: *'0' – disabled,, *'1' – enabled.
     */
    market_comments?: boolean,
    /**
     * Market delivery countries.
     */
    market_country?: number[],
    /**
     * Market delivery cities (if only one country is specified).
     */
    market_city?: number[],
    /**
     * Market currency settings. Possbile values: , *'643' – Russian rubles,, *'980' – Ukrainian hryvnia,, *'398' – Kazakh tenge,, *'978' – Euro,, *'840' – US dollars
     */
    market_currency?: number,
    /**
     * Seller contact for market. Set '0' for community messages.
     */
    market_contact?: number,
    /**
     * ID of a wiki page with market description.
     */
    market_wiki?: number,
    /**
     * Obscene expressions filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
     */
    obscene_filter?: boolean,
    /**
     * Stopwords filter in comments. Possible values: , *'0' – disabled,, *'1' – enabled.
     */
    obscene_stopwords?: boolean,
    /**
     * Keywords for stopwords filter.
     */
    obscene_words?: string[],
    /**
     * undefined
     */
    main_section?: number,
    /**
     * undefined
     */
    secondary_section?: number,
    /**
     * Country of the community.
     */
    country?: number,
    /**
     * City of the community.
     */
    city?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEditAddressParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    address_id: number,
    /**
     * undefined
     */
    title?: string,
    /**
     * undefined
     */
    address?: string,
    /**
     * undefined
     */
    additional_address?: string,
    /**
     * undefined
     */
    country_id?: number,
    /**
     * undefined
     */
    city_id?: number,
    /**
     * undefined
     */
    metro_id?: number,
    /**
     * undefined
     */
    latitude?: number,
    /**
     * undefined
     */
    longitude?: number,
    /**
     * undefined
     */
    phone?: string,
    /**
     * undefined
     */
    work_info_status?: string,
    /**
     * undefined
     */
    timetable?: string,
    /**
     * undefined
     */
    is_main_address?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEditCallbackServerParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    server_id: number,
    /**
     * undefined
     */
    url: string,
    /**
     * undefined
     */
    title: string,
    /**
     * undefined
     */
    secret_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEditLinkParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Link ID.
     */
    link_id: number,
    /**
     * New description text for the link.
     */
    text?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEditManagerParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * User ID.
     */
    user_id: number,
    /**
     * Manager role. Possible values: *'moderator',, *'editor',, *'administrator',, *'advertiser'.
     */
    role?: string,
    /**
     * '1' — to show the manager in Contacts block of the community.
     */
    is_contact?: boolean,
    /**
     * Position to show in Contacts block.
     */
    contact_position?: string,
    /**
     * Contact phone.
     */
    contact_phone?: string,
    /**
     * Contact e-mail.
     */
    contact_email?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsEnableOnlineParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * '1' — to return complete information about a user's communities, '0' — to return a list of community IDs without any additional fields (default),
     */
    extended?: boolean,
    /**
     * Types of communities to return: 'admin' — to return communities administered by the user , 'editor' — to return communities where the user is an administrator or editor, 'moder' — to return communities where the user is an administrator, editor, or moderator, 'groups' — to return only groups, 'publics' — to return only public pages, 'events' — to return only events
     */
    filter?: Models.GroupsFilter[],
    /**
     * Profile fields to return.
     */
    fields?: Models.GroupsFields[],
    /**
     * Offset needed to return a specific subset of communities.
     */
    offset?: number,
    /**
     * Number of communities to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetAddressesParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number,
    /**
     * undefined
     */
    address_ids?: number[],
    /**
     * Latitude of  the user geo position.
     */
    latitude?: number,
    /**
     * Longitude of the user geo position.
     */
    longitude?: number,
    /**
     * Offset needed to return a specific subset of community addresses.
     */
    offset?: number,
    /**
     * Number of community addresses to return.
     */
    count?: number,
    /**
     * Address fields
     */
    fields?: Models.AddressesFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetBannedParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number,
    /**
     * Number of users to return.
     */
    count?: number,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * undefined
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetByIdParams {
    /**
     * IDs or screen names of communities.
     */
    group_ids?: string[],
    /**
     * ID or screen name of the community.
     */
    group_id?: string,
    /**
     * Group fields to return.
     */
    fields?: Models.GroupsFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetCallbackConfirmationCodeParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetCallbackServersParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    server_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetCallbackSettingsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Server ID.
     */
    server_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetCatalogParams {
    /**
     * Category id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
     */
    category_id?: number,
    /**
     * Subcategory id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
     */
    subcategory_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetCatalogInfoParams {
    /**
     * 1 – to return communities count and three communities for preview. By default: 0.
     */
    extended?: boolean,
    /**
     * 1 – to return subcategories info. By default: 0.
     */
    subcategories?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetInvitedUsersParams {
    /**
     * Group ID to return invited users for.
     */
    group_id: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname. Possible values: *'nom' — nominative (default),, *'gen' — genitive,, *'dat' — dative,, *'acc' — accusative, , *'ins' — instrumental,, *'abl' — prepositional.
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetInvitesParams {
    /**
     * Offset needed to return a specific subset of invitations.
     */
    offset?: number,
    /**
     * Number of invitations to return.
     */
    count?: number,
    /**
     * '1' — to return additional [vk.com/dev/fields_groups|fields] for communities..
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetLongPollServerParams {
    /**
     * Community ID
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetLongPollSettingsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetMembersParams {
    /**
     * ID or screen name of the community.
     */
    group_id?: string,
    /**
     * Sort order. Available values: 'id_asc', 'id_desc', 'time_asc', 'time_desc'. 'time_asc' and 'time_desc' are availavle only if the method is called by the group's 'moderator'.
     */
    sort?: string,
    /**
     * Offset needed to return a specific subset of community members.
     */
    offset?: number,
    /**
     * Number of community members to return.
     */
    count?: number,
    /**
     * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: Models.UsersFields[],
    /**
     * *'friends' – only friends in this community will be returned,, *'unsure' – only those who pressed 'I may attend' will be returned (if it's an event).
     */
    filter?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetRequestsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetSettingsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetTagListParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsGetTokenPermissionsParams {
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsInviteParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * User ID.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsIsMemberParams {
    /**
     * ID or screen name of the community.
     */
    group_id: string,
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * User IDs.
     */
    user_ids?: number[],
    /**
     * '1' — to return an extended response with additional fields. By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsJoinParams {
    /**
     * ID or screen name of the community.
     */
    group_id?: number,
    /**
     * Optional parameter which is taken into account when 'gid' belongs to the event: '1' — Perhaps I will attend, '0' — I will be there for sure (default), ,
     */
    not_sure?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsLeaveParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsRemoveUserParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * User ID.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsReorderLinkParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Link ID.
     */
    link_id: number,
    /**
     * ID of the link after which to place the link with 'link_id'.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsSearchParams {
    /**
     * Search query string.
     */
    q: string,
    /**
     * Community type. Possible values: 'group, page, event.'
     */
    type?: string,
    /**
     * Country ID.
     */
    country_id?: number,
    /**
     * City ID. If this parameter is transmitted, country_id is ignored.
     */
    city_id?: number,
    /**
     * '1' — to return only upcoming events. Works with the 'type' = 'event' only.
     */
    future?: boolean,
    /**
     * '1' — to return communities with enabled market only.
     */
    market?: boolean,
    /**
     * Sort order. Possible values: *'0' — default sorting (similar the full version of the site),, *'1' — by growth speed,, *'2'— by the "day attendance/members number" ratio,, *'3' — by the "Likes number/members number" ratio,, *'4' — by the "comments number/members number" ratio,, *'5' — by the "boards entries number/members number" ratio.
     */
    sort?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of communities to return. "Note that you can not receive more than first thousand of results, regardless of 'count' and 'offset' values."
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsSetCallbackSettingsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Server ID.
     */
    server_id?: number,
    /**
     * undefined
     */
    api_version?: string,
    /**
     * A new incoming message has been received ('0' — disabled, '1' — enabled).
     */
    message_new?: boolean,
    /**
     * A new outcoming message has been received ('0' — disabled, '1' — enabled).
     */
    message_reply?: boolean,
    /**
     * Allowed messages notifications ('0' — disabled, '1' — enabled).
     */
    message_allow?: boolean,
    /**
     * undefined
     */
    message_edit?: boolean,
    /**
     * Denied messages notifications ('0' — disabled, '1' — enabled).
     */
    message_deny?: boolean,
    /**
     * undefined
     */
    message_typing_state?: boolean,
    /**
     * New photos notifications ('0' — disabled, '1' — enabled).
     */
    photo_new?: boolean,
    /**
     * New audios notifications ('0' — disabled, '1' — enabled).
     */
    audio_new?: boolean,
    /**
     * New videos notifications ('0' — disabled, '1' — enabled).
     */
    video_new?: boolean,
    /**
     * New wall replies notifications ('0' — disabled, '1' — enabled).
     */
    wall_reply_new?: boolean,
    /**
     * Wall replies edited notifications ('0' — disabled, '1' — enabled).
     */
    wall_reply_edit?: boolean,
    /**
     * A wall comment has been deleted ('0' — disabled, '1' — enabled).
     */
    wall_reply_delete?: boolean,
    /**
     * A wall comment has been restored ('0' — disabled, '1' — enabled).
     */
    wall_reply_restore?: boolean,
    /**
     * New wall posts notifications ('0' — disabled, '1' — enabled).
     */
    wall_post_new?: boolean,
    /**
     * New wall posts notifications ('0' — disabled, '1' — enabled).
     */
    wall_repost?: boolean,
    /**
     * New board posts notifications ('0' — disabled, '1' — enabled).
     */
    board_post_new?: boolean,
    /**
     * Board posts edited notifications ('0' — disabled, '1' — enabled).
     */
    board_post_edit?: boolean,
    /**
     * Board posts restored notifications ('0' — disabled, '1' — enabled).
     */
    board_post_restore?: boolean,
    /**
     * Board posts deleted notifications ('0' — disabled, '1' — enabled).
     */
    board_post_delete?: boolean,
    /**
     * New comment to photo notifications ('0' — disabled, '1' — enabled).
     */
    photo_comment_new?: boolean,
    /**
     * A photo comment has been edited ('0' — disabled, '1' — enabled).
     */
    photo_comment_edit?: boolean,
    /**
     * A photo comment has been deleted ('0' — disabled, '1' — enabled).
     */
    photo_comment_delete?: boolean,
    /**
     * A photo comment has been restored ('0' — disabled, '1' — enabled).
     */
    photo_comment_restore?: boolean,
    /**
     * New comment to video notifications ('0' — disabled, '1' — enabled).
     */
    video_comment_new?: boolean,
    /**
     * A video comment has been edited ('0' — disabled, '1' — enabled).
     */
    video_comment_edit?: boolean,
    /**
     * A video comment has been deleted ('0' — disabled, '1' — enabled).
     */
    video_comment_delete?: boolean,
    /**
     * A video comment has been restored ('0' — disabled, '1' — enabled).
     */
    video_comment_restore?: boolean,
    /**
     * New comment to market item notifications ('0' — disabled, '1' — enabled).
     */
    market_comment_new?: boolean,
    /**
     * A market comment has been edited ('0' — disabled, '1' — enabled).
     */
    market_comment_edit?: boolean,
    /**
     * A market comment has been deleted ('0' — disabled, '1' — enabled).
     */
    market_comment_delete?: boolean,
    /**
     * A market comment has been restored ('0' — disabled, '1' — enabled).
     */
    market_comment_restore?: boolean,
    /**
     * undefined
     */
    market_order_new?: boolean,
    /**
     * undefined
     */
    market_order_edit?: boolean,
    /**
     * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
     */
    poll_vote_new?: boolean,
    /**
     * Joined community notifications ('0' — disabled, '1' — enabled).
     */
    group_join?: boolean,
    /**
     * Left community notifications ('0' — disabled, '1' — enabled).
     */
    group_leave?: boolean,
    /**
     * undefined
     */
    group_change_settings?: boolean,
    /**
     * undefined
     */
    group_change_photo?: boolean,
    /**
     * undefined
     */
    group_officers_edit?: boolean,
    /**
     * User added to community blacklist
     */
    user_block?: boolean,
    /**
     * User removed from community blacklist
     */
    user_unblock?: boolean,
    /**
     * New form in lead forms
     */
    lead_forms_new?: boolean,
    /**
     * undefined
     */
    like_add?: boolean,
    /**
     * undefined
     */
    like_remove?: boolean,
    /**
     * undefined
     */
    message_event?: boolean,
    /**
     * undefined
     */
    donut_subscription_create?: boolean,
    /**
     * undefined
     */
    donut_subscription_prolonged?: boolean,
    /**
     * undefined
     */
    donut_subscription_cancelled?: boolean,
    /**
     * undefined
     */
    donut_subscription_price_changed?: boolean,
    /**
     * undefined
     */
    donut_subscription_expired?: boolean,
    /**
     * undefined
     */
    donut_money_withdraw?: boolean,
    /**
     * undefined
     */
    donut_money_withdraw_error?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsSetLongPollSettingsParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Sets whether Long Poll is enabled ('0' — disabled, '1' — enabled).
     */
    enabled?: boolean,
    /**
     * undefined
     */
    api_version?: string,
    /**
     * A new incoming message has been received ('0' — disabled, '1' — enabled).
     */
    message_new?: boolean,
    /**
     * A new outcoming message has been received ('0' — disabled, '1' — enabled).
     */
    message_reply?: boolean,
    /**
     * Allowed messages notifications ('0' — disabled, '1' — enabled).
     */
    message_allow?: boolean,
    /**
     * Denied messages notifications ('0' — disabled, '1' — enabled).
     */
    message_deny?: boolean,
    /**
     * A message has been edited ('0' — disabled, '1' — enabled).
     */
    message_edit?: boolean,
    /**
     * undefined
     */
    message_typing_state?: boolean,
    /**
     * New photos notifications ('0' — disabled, '1' — enabled).
     */
    photo_new?: boolean,
    /**
     * New audios notifications ('0' — disabled, '1' — enabled).
     */
    audio_new?: boolean,
    /**
     * New videos notifications ('0' — disabled, '1' — enabled).
     */
    video_new?: boolean,
    /**
     * New wall replies notifications ('0' — disabled, '1' — enabled).
     */
    wall_reply_new?: boolean,
    /**
     * Wall replies edited notifications ('0' — disabled, '1' — enabled).
     */
    wall_reply_edit?: boolean,
    /**
     * A wall comment has been deleted ('0' — disabled, '1' — enabled).
     */
    wall_reply_delete?: boolean,
    /**
     * A wall comment has been restored ('0' — disabled, '1' — enabled).
     */
    wall_reply_restore?: boolean,
    /**
     * New wall posts notifications ('0' — disabled, '1' — enabled).
     */
    wall_post_new?: boolean,
    /**
     * New wall posts notifications ('0' — disabled, '1' — enabled).
     */
    wall_repost?: boolean,
    /**
     * New board posts notifications ('0' — disabled, '1' — enabled).
     */
    board_post_new?: boolean,
    /**
     * Board posts edited notifications ('0' — disabled, '1' — enabled).
     */
    board_post_edit?: boolean,
    /**
     * Board posts restored notifications ('0' — disabled, '1' — enabled).
     */
    board_post_restore?: boolean,
    /**
     * Board posts deleted notifications ('0' — disabled, '1' — enabled).
     */
    board_post_delete?: boolean,
    /**
     * New comment to photo notifications ('0' — disabled, '1' — enabled).
     */
    photo_comment_new?: boolean,
    /**
     * A photo comment has been edited ('0' — disabled, '1' — enabled).
     */
    photo_comment_edit?: boolean,
    /**
     * A photo comment has been deleted ('0' — disabled, '1' — enabled).
     */
    photo_comment_delete?: boolean,
    /**
     * A photo comment has been restored ('0' — disabled, '1' — enabled).
     */
    photo_comment_restore?: boolean,
    /**
     * New comment to video notifications ('0' — disabled, '1' — enabled).
     */
    video_comment_new?: boolean,
    /**
     * A video comment has been edited ('0' — disabled, '1' — enabled).
     */
    video_comment_edit?: boolean,
    /**
     * A video comment has been deleted ('0' — disabled, '1' — enabled).
     */
    video_comment_delete?: boolean,
    /**
     * A video comment has been restored ('0' — disabled, '1' — enabled).
     */
    video_comment_restore?: boolean,
    /**
     * New comment to market item notifications ('0' — disabled, '1' — enabled).
     */
    market_comment_new?: boolean,
    /**
     * A market comment has been edited ('0' — disabled, '1' — enabled).
     */
    market_comment_edit?: boolean,
    /**
     * A market comment has been deleted ('0' — disabled, '1' — enabled).
     */
    market_comment_delete?: boolean,
    /**
     * A market comment has been restored ('0' — disabled, '1' — enabled).
     */
    market_comment_restore?: boolean,
    /**
     * A vote in a public poll has been added ('0' — disabled, '1' — enabled).
     */
    poll_vote_new?: boolean,
    /**
     * Joined community notifications ('0' — disabled, '1' — enabled).
     */
    group_join?: boolean,
    /**
     * Left community notifications ('0' — disabled, '1' — enabled).
     */
    group_leave?: boolean,
    /**
     * undefined
     */
    group_change_settings?: boolean,
    /**
     * undefined
     */
    group_change_photo?: boolean,
    /**
     * undefined
     */
    group_officers_edit?: boolean,
    /**
     * User added to community blacklist
     */
    user_block?: boolean,
    /**
     * User removed from community blacklist
     */
    user_unblock?: boolean,
    /**
     * undefined
     */
    like_add?: boolean,
    /**
     * undefined
     */
    like_remove?: boolean,
    /**
     * undefined
     */
    message_event?: boolean,
    /**
     * undefined
     */
    donut_subscription_create?: boolean,
    /**
     * undefined
     */
    donut_subscription_prolonged?: boolean,
    /**
     * undefined
     */
    donut_subscription_cancelled?: boolean,
    /**
     * undefined
     */
    donut_subscription_price_changed?: boolean,
    /**
     * undefined
     */
    donut_subscription_expired?: boolean,
    /**
     * undefined
     */
    donut_money_withdraw?: boolean,
    /**
     * undefined
     */
    donut_money_withdraw_error?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsSetSettingsParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    messages?: boolean,
    /**
     * undefined
     */
    bots_capabilities?: boolean,
    /**
     * undefined
     */
    bots_start_button?: boolean,
    /**
     * undefined
     */
    bots_add_to_chat?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsSetUserNoteParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    user_id: number,
    /**
     * Note body
     */
    note?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsTagAddParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    tag_name: string,
    /**
     * undefined
     */
    tag_color?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsTagBindParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    tag_id: number,
    /**
     * undefined
     */
    user_id: number,
    /**
     * Describe the action
     */
    act: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsTagDeleteParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    tag_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsTagUpdateParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    tag_id: number,
    /**
     * undefined
     */
    tag_name: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsToggleMarketParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    state: string,
    /**
     * access token
     */
    access_token?: string
}

export interface GroupsUnbanParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface LikesAddParams {
    /**
     * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number,
    /**
     * Object ID.
     */
    item_id: number,
    /**
     * Access key required for an object owned by a private entity.
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface LikesDeleteParams {
    /**
     * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number,
    /**
     * Object ID.
     */
    item_id: number,
    /**
     * Access key required for an object owned by a private entity.
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface LikesGetListParams {
    /**
     * , Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion, 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user, community, or application that owns the object. If the 'type' parameter is set as 'sitepage', the application ID is passed as 'owner_id'. Use negative value for a community id. If the 'type' parameter is not set, the 'owner_id' is assumed to be either the current user or the same application ID as if the 'type' parameter was set to 'sitepage'.
     */
    owner_id?: number,
    /**
     * Object ID. If 'type' is set as 'sitepage', 'item_id' can include the 'page_id' parameter value used during initialization of the [vk.com/dev/Like|Like widget].
     */
    item_id?: number,
    /**
     * URL of the page where the [vk.com/dev/Like|Like widget] is installed. Used instead of the 'item_id' parameter.
     */
    page_url?: string,
    /**
     * Filters to apply: 'likes' — returns information about all users who liked the object (default), 'copies' — returns information only about users who told their friends about the object
     */
    filter?: string,
    /**
     * Specifies which users are returned: '1' — to return only the current user's friends, '0' — to return all users (default)
     */
    friends_only?: number,
    /**
     * Specifies whether extended information will be returned. '1' — to return extended information about users and communities from the 'Likes' list, '0' — to return no additional information (default)
     */
    extended?: boolean,
    /**
     * Offset needed to select a specific subset of users.
     */
    offset?: number,
    /**
     * Number of user IDs to return (maximum '1000'). Default is '100' if 'friends_only' is set to '0', otherwise, the default is '10' if 'friends_only' is set to '1'.
     */
    count?: number,
    /**
     * undefined
     */
    skip_own?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface LikesIsLikedParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Object type: 'post' — post on user or community wall, 'comment' — comment on a wall post, 'photo' — photo, 'audio' — audio, 'video' — video, 'note' — note, 'photo_comment' — comment on the photo, 'video_comment' — comment on the video, 'topic_comment' — comment in the discussion
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number,
    /**
     * Object ID.
     */
    item_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketAddParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item name.
     */
    name: string,
    /**
     * Item description.
     */
    description: string,
    /**
     * Item category ID.
     */
    category_id: number,
    /**
     * Item price.
     */
    price?: number,
    /**
     * undefined
     */
    old_price?: number,
    /**
     * Item status ('1' — deleted, '0' — not deleted).
     */
    deleted?: boolean,
    /**
     * Cover photo ID.
     */
    main_photo_id?: number,
    /**
     * IDs of additional photos.
     */
    photo_ids?: number[],
    /**
     * Url for button in market item.
     */
    url?: string,
    /**
     * undefined
     */
    dimension_width?: number,
    /**
     * undefined
     */
    dimension_height?: number,
    /**
     * undefined
     */
    dimension_length?: number,
    /**
     * undefined
     */
    weight?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketAddAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Collection title.
     */
    title: string,
    /**
     * Cover photo ID.
     */
    photo_id?: number,
    /**
     * Set as main ('1' – set, '0' – no).
     */
    main_album?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketAddToAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * Collections IDs to add item to.
     */
    album_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface MarketCreateCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * Comment text (required if 'attachments' parameter is not specified)
     */
    message?: string,
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
     */
    attachments?: string[],
    /**
     * '1' - comment will be published on behalf of a community, '0' - on behalf of a user (by default).
     */
    from_group?: boolean,
    /**
     * ID of a comment to reply with current comment to.
     */
    reply_to_comment?: number,
    /**
     * Sticker ID.
     */
    sticker_id?: number,
    /**
     * Random value to avoid resending one comment.
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketDeleteParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketDeleteAlbumParams {
    /**
     * ID of an collection owner community.
     */
    owner_id: number,
    /**
     * Collection ID.
     */
    album_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketDeleteCommentParams {
    /**
     * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number,
    /**
     * comment id
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketEditParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * Item name.
     */
    name: string,
    /**
     * Item description.
     */
    description: string,
    /**
     * Item category ID.
     */
    category_id: number,
    /**
     * Item price.
     */
    price: number,
    /**
     * Item status ('1' — deleted, '0' — not deleted).
     */
    deleted?: boolean,
    /**
     * Cover photo ID.
     */
    main_photo_id: number,
    /**
     * IDs of additional photos.
     */
    photo_ids?: number[],
    /**
     * Url for button in market item.
     */
    url?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketEditAlbumParams {
    /**
     * ID of an collection owner community.
     */
    owner_id: number,
    /**
     * Collection ID.
     */
    album_id: number,
    /**
     * Collection title.
     */
    title: string,
    /**
     * Cover photo id
     */
    photo_id?: number,
    /**
     * Set as main ('1' – set, '0' – no).
     */
    main_album?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketEditCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * New comment text (required if 'attachments' are not specified), , 2048 symbols maximum.
     */
    message?: string,
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface MarketEditOrderParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    order_id: number,
    /**
     * undefined
     */
    merchant_comment?: string,
    /**
     * undefined
     */
    status?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetParams {
    /**
     * ID of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number,
    /**
     * undefined
     */
    album_id?: number,
    /**
     * Number of items to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * '1' – method will return additional fields: 'likes, can_comment, car_repost, photos'. These parameters are not returned by default.
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetAlbumByIdParams {
    /**
     * identifier of an album owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number,
    /**
     * collections identifiers to obtain data from
     */
    album_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetAlbumsParams {
    /**
     * ID of an items owner community.
     */
    owner_id: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of items to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetByIdParams {
    /**
     * Comma-separated ids list: {user id}_{item id}. If an item belongs to a community -{community id} is used. " 'Videos' value example: , '-4363_136089719,13245770_137352259'"
     */
    item_ids: string[],
    /**
     * '1' – to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetCategoriesParams {
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetCommentsParams {
    /**
     * ID of an item owner community
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * '1' — to return likes info.
     */
    need_likes?: boolean,
    /**
     * ID of a comment to start a list from (details below).
     */
    start_comment_id?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Sort order ('asc' — from old to new, 'desc' — from new to old)
     */
    sort?: string,
    /**
     * '1' — comments will be returned as numbered objects, in addition lists of 'profiles' and 'groups' objects will be returned.
     */
    extended?: boolean,
    /**
     * List of additional profile fields to return. See the [vk.com/dev/fields|details]
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetGroupOrdersParams {
    /**
     * undefined
     */
    group_id: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetOrderByIdParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * undefined
     */
    order_id: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetOrderItemsParams {
    /**
     * undefined
     */
    order_id: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketGetOrdersParams {
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketRemoveFromAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * Collections IDs to remove item from.
     */
    album_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface MarketReorderAlbumsParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Collection ID.
     */
    album_id: number,
    /**
     * ID of a collection to place current collection before it.
     */
    before?: number,
    /**
     * ID of a collection to place current collection after it.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketReorderItemsParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * ID of a collection to reorder items in. Set 0 to reorder full items list.
     */
    album_id?: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * ID of an item to place current item before it.
     */
    before?: number,
    /**
     * ID of an item to place current item after it.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketReportParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Item ID.
     */
    item_id: number,
    /**
     * Complaint reason. Possible values: *'0' — spam,, *'1' — child porn,, *'2' — extremism,, *'3' — violence,, *'4' — drugs propaganda,, *'5' — adult materials,, *'6' — insult.
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketReportCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * Complaint reason. Possible values: *'0' — spam,, *'1' — child porn,, *'2' — extremism,, *'3' — violence,, *'4' — drugs propaganda,, *'5' — adult materials,, *'6' — insult.
     */
    reason: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketRestoreParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number,
    /**
     * Deleted item ID.
     */
    item_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketRestoreCommentParams {
    /**
     * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number,
    /**
     * deleted comment id
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MarketSearchParams {
    /**
     * ID of an items owner community.
     */
    owner_id: number,
    /**
     * undefined
     */
    album_id?: number,
    /**
     * Search query, for example "pink slippers".
     */
    q?: string,
    /**
     * Minimum item price value.
     */
    price_from?: number,
    /**
     * Maximum item price value.
     */
    price_to?: number,
    /**
     * undefined
     */
    sort?: number,
    /**
     * '0' — do not use reverse order, '1' — use reverse order
     */
    rev?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of items to return.
     */
    count?: number,
    /**
     * '1' – to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
     */
    extended?: boolean,
    /**
     * undefined
     */
    status?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesAddChatUserParams {
    /**
     * Chat ID.
     */
    chat_id: number,
    /**
     * ID of the user to be added to the chat.
     */
    user_id?: number,
    /**
     * undefined
     */
    visible_messages_count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesAllowMessagesFromGroupParams {
    /**
     * Group ID.
     */
    group_id: number,
    /**
     * undefined
     */
    key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesCreateChatParams {
    /**
     * IDs of the users to be added to the chat.
     */
    user_ids?: number[],
    /**
     * Chat title.
     */
    title?: string,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesDeleteParams {
    /**
     * Message IDs.
     */
    message_ids?: number[],
    /**
     * '1' — to mark message as spam.
     */
    spam?: boolean,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * '1' — delete message for for all.
     */
    delete_for_all?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesDeleteChatPhotoParams {
    /**
     * Chat ID.
     */
    chat_id: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesDeleteConversationParams {
    /**
     * User ID. To clear a chat history use 'chat_id'
     */
    user_id?: number,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesDenyMessagesFromGroupParams {
    /**
     * Group ID.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesEditParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id: number,
    /**
     * (Required if 'attachments' is not set.) Text of the message.
     */
    message?: string,
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
     */
    attachment?: string,
    /**
     * '1' — to keep forwarded, messages.
     */
    keep_forward_messages?: boolean,
    /**
     * '1' — to keep attached snippets.
     */
    keep_snippets?: boolean,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * undefined
     */
    dont_parse_links?: boolean,
    /**
     * undefined
     */
    message_id?: number,
    /**
     * undefined
     */
    conversation_message_id?: number,
    /**
     * undefined
     */
    template?: string,
    /**
     * undefined
     */
    keyboard?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesEditChatParams {
    /**
     * Chat ID.
     */
    chat_id: number,
    /**
     * New title of the chat.
     */
    title?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetByConversationMessageIdParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id: number,
    /**
     * Conversation message IDs.
     */
    conversation_message_ids: number[],
    /**
     * Information whether the response should be extended
     */
    extended?: boolean,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetByIdParams {
    /**
     * Message IDs.
     */
    message_ids: number[],
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number,
    /**
     * Information whether the response should be extended
     */
    extended?: boolean,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetChatPreviewParams {
    /**
     * undefined
     */
    peer_id?: number,
    /**
     * Invitation link.
     */
    link?: string,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetConversationMembersParams {
    /**
     * Peer ID.
     */
    peer_id: number,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetConversationsParams {
    /**
     * Offset needed to return a specific subset of conversations.
     */
    offset?: number,
    /**
     * Number of conversations to return.
     */
    count?: number,
    /**
     * Filter to apply: 'all' — all conversations, 'unread' — conversations with unread messages, 'important' — conversations, marked as important (only for community messages), 'unanswered' — conversations, marked as unanswered (only for community messages)
     */
    filter?: string,
    /**
     * '1' — return extra information about users and communities
     */
    extended?: boolean,
    /**
     * ID of the message from what to return dialogs.
     */
    start_message_id?: number,
    /**
     * Profile and communities fields to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetConversationsByIdParams {
    /**
     * Destination IDs. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_ids: number[],
    /**
     * Return extended properties
     */
    extended?: boolean,
    /**
     * Profile and communities fields to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetHistoryParams {
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number,
    /**
     * Number of messages to return.
     */
    count?: number,
    /**
     * ID of the user whose message history you want to return.
     */
    user_id?: number,
    /**
     * undefined
     */
    peer_id?: number,
    /**
     * Starting message ID from which to return history.
     */
    start_message_id?: number,
    /**
     * Sort order: '1' — return messages in chronological order. '0' — return messages in reverse chronological order.
     */
    rev?: number,
    /**
     * Information whether the response should be extended
     */
    extended?: boolean,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetHistoryAttachmentsParams {
    /**
     * Peer ID. ", For group chat: '2000000000 + chat ID' , , For community: '-community ID'"
     */
    peer_id: number,
    /**
     * Type of media files to return: *'photo',, *'video',, *'audio',, *'doc',, *'link'.,*'market'.,*'wall'.,*'share'
     */
    media_type?: string,
    /**
     * Message ID to start return results from.
     */
    start_from?: string,
    /**
     * Number of objects to return.
     */
    count?: number,
    /**
     * '1' — to return photo sizes in a
     */
    photo_sizes?: boolean,
    /**
     * Additional profile [vk.com/dev/fields|fields] to return. 
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * undefined
     */
    preserve_order?: boolean,
    /**
     * undefined
     */
    max_forwards_level?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetImportantMessagesParams {
    /**
     * Amount of needed important messages.
     */
    count?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    start_message_id?: number,
    /**
     * Maximum length of messages body.
     */
    preview_length?: number,
    /**
     * Actors fields to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * Return extended properties
     */
    extended?: boolean,
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetIntentUsersParams {
    /**
     * undefined
     */
    intent: string,
    /**
     * undefined
     */
    subscribe_id?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    name_case?: string[],
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetInviteLinkParams {
    /**
     * Destination ID.
     */
    peer_id: number,
    /**
     * 1 — to generate new link (revoke previous), 0 — to return previous link.
     */
    reset?: boolean,
    /**
     * Group ID
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetLastActivityParams {
    /**
     * User ID.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetLongPollHistoryParams {
    /**
     * Last value of the 'ts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    ts?: number,
    /**
     * Lsat value of 'pts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    pts?: number,
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number,
    /**
     * '1' — to return history with online users only.
     */
    onlines?: boolean,
    /**
     * Additional profile [vk.com/dev/fields|fields] to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Maximum number of events to return.
     */
    events_limit?: number,
    /**
     * Maximum number of messages to return.
     */
    msgs_limit?: number,
    /**
     * Maximum ID of the message among existing ones in the local copy. Both messages received with API methods (for example, , ), and data received from a Long Poll server (events with code 4) are taken into account.
     */
    max_msg_id?: number,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * undefined
     */
    lp_version?: number,
    /**
     * undefined
     */
    last_n?: number,
    /**
     * undefined
     */
    credentials?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesGetLongPollServerParams {
    /**
     * '1' — to return the 'pts' field, needed for the [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    need_pts?: boolean,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * Long poll version
     */
    lp_version?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesIsMessagesFromGroupAllowedParams {
    /**
     * Group ID.
     */
    group_id: number,
    /**
     * User ID.
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesJoinChatByInviteLinkParams {
    /**
     * Invitation link.
     */
    link: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesMarkAsAnsweredConversationParams {
    /**
     * ID of conversation to mark as important.
     */
    peer_id: number,
    /**
     * '1' — to mark as answered, '0' — to remove the mark
     */
    answered?: boolean,
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesMarkAsImportantParams {
    /**
     * IDs of messages to mark as important.
     */
    message_ids?: number[],
    /**
     * '1' — to add a star (mark as important), '0' — to remove the star
     */
    important?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesMarkAsImportantConversationParams {
    /**
     * ID of conversation to mark as important.
     */
    peer_id: number,
    /**
     * '1' — to add a star (mark as important), '0' — to remove the star
     */
    important?: boolean,
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesMarkAsReadParams {
    /**
     * IDs of messages to mark as read.
     */
    message_ids?: number[],
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * Message ID to start from.
     */
    start_message_id?: number,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * undefined
     */
    mark_conversation_as_read?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesPinParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id: number,
    /**
     * Message ID
     */
    message_id?: number,
    /**
     * Conversation message ID
     */
    conversation_message_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesRemoveChatUserParams {
    /**
     * Chat ID.
     */
    chat_id: number,
    /**
     * ID of the user to be removed from the chat.
     */
    user_id?: number,
    /**
     * undefined
     */
    member_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesRestoreParams {
    /**
     * ID of a previously-deleted message to restore.
     */
    message_id: number,
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSearchParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * Date to search message before in Unixtime.
     */
    date?: number,
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number,
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number,
    /**
     * Number of messages to return.
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSearchConversationsParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Maximum number of results.
     */
    count?: number,
    /**
     * '1' — return extra information about users and communities
     */
    extended?: boolean,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSendParams {
    /**
     * User ID (by default — current user).
     */
    user_id?: number,
    /**
     * Unique identifier to avoid resending the message.
     */
    random_id?: number,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * IDs of message recipients. (See peer_id)
     */
    peer_ids?: number[],
    /**
     * User's short address (for example, 'illarionov').
     */
    domain?: string,
    /**
     * ID of conversation the message will relate to.
     */
    chat_id?: number,
    /**
     * IDs of message recipients (if new conversation shall be started).
     */
    user_ids?: number[],
    /**
     * (Required if 'attachments' is not set.) Text of the message.
     */
    message?: string,
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'wall' — wall post, '<owner_id>' — ID of the media attachment owner. '<media_id>' — media attachment ID. Example: "photo100172_166443618"
     */
    attachment?: string,
    /**
     * undefined
     */
    reply_to?: number,
    /**
     * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's. Example: "123,431,544"
     */
    forward_messages?: number[],
    /**
     * JSON describing the forwarded message or reply
     */
    forward?: string,
    /**
     * Sticker id.
     */
    sticker_id?: number,
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * undefined
     */
    keyboard?: string,
    /**
     * undefined
     */
    template?: string,
    /**
     * undefined
     */
    payload?: string,
    /**
     * JSON describing the content source in the message
     */
    content_source?: string,
    /**
     * undefined
     */
    dont_parse_links?: boolean,
    /**
     * undefined
     */
    disable_mentions?: boolean,
    /**
     * undefined
     */
    intent?: string,
    /**
     * undefined
     */
    subscribe_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSendMessageEventAnswerParams {
    /**
     * undefined
     */
    event_id: string,
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    peer_id: number,
    /**
     * undefined
     */
    event_data?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSetActivityParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * 'typing' — user has started to type.
     */
    type?: string,
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesSetChatPhotoParams {
    /**
     * Upload URL from the 'response' field returned by the [vk.com/dev/photos.getChatUploadServer|photos.getChatUploadServer] method upon successfully uploading an image.
     */
    file: string,
    /**
     * access token
     */
    access_token?: string
}

export interface MessagesUnpinParams {
    /**
     * undefined
     */
    peer_id: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedAddBanParams {
    /**
     * undefined
     */
    user_ids?: number[],
    /**
     * undefined
     */
    group_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedDeleteBanParams {
    /**
     * undefined
     */
    user_ids?: number[],
    /**
     * undefined
     */
    group_ids?: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedDeleteListParams {
    /**
     * undefined
     */
    list_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetParams {
    /**
     * Filters to apply: 'post' — new wall posts, 'photo' — new photos, 'photo_tag' — new photo tags, 'wall_photo' — new wall photos, 'friend' — new friends
     */
    filters?: Models.NewsfeedFilters[],
    /**
     * '1' — to return news items from banned sources
     */
    return_banned?: boolean,
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number,
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    max_photos?: number,
    /**
     * Sources to obtain news from, separated by commas. User IDs can be specified in formats '' or 'u' , where '' is the user's friend ID. Community IDs can be specified in formats '-' or 'g' , where '' is the community ID. If the parameter is not set, all of the user's friends and communities are returned, except for banned sources, which can be obtained with the [vk.com/dev/newsfeed.getBanned|newsfeed.getBanned] method.
     */
    source_ids?: string,
    /**
     * identifier required to get the next page of results. Value for this parameter is returned in 'next_from' field in a reply.
     */
    start_from?: string,
    /**
     * Number of news items to return (default 50, maximum 100). For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * undefined
     */
    section?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetBannedParams {
    /**
     * '1' — return extra information about users and communities
     */
    extended?: boolean,
    /**
     * Profile fields to return.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetCommentsParams {
    /**
     * Number of comments to return. For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number,
    /**
     * Filters to apply: 'post' — new comments on wall posts, 'photo' — new comments on photos, 'video' — new comments on videos, 'topic' — new comments on discussions, 'note' — new comments on notes,
     */
    filters?: Models.NewsfeedCommentsFilters[],
    /**
     * Object ID, comments on repost of which shall be returned, e.g. 'wall1_45486'. (If the parameter is set, the 'filters' parameter is optional.),
     */
    reposts?: string,
    /**
     * Earliest timestamp (in Unix time) of a comment to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a comment to return. By default, the current time.
     */
    end_time?: number,
    /**
     * undefined
     */
    last_comments_count?: number,
    /**
     * Identificator needed to return the next page with results. Value for this parameter returns in 'next_from' field.
     */
    start_from?: string,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetListsParams {
    /**
     * numeric list identifiers.
     */
    list_ids?: number[],
    /**
     * Return additional list info
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetMentionsParams {
    /**
     * Owner ID.
     */
    owner_id?: number,
    /**
     * Earliest timestamp (in Unix time) of a post to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a post to return. By default, the current time.
     */
    end_time?: number,
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number,
    /**
     * Number of posts to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetRecommendedParams {
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number,
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    max_photos?: number,
    /**
     * 'new_from' value obtained in previous call.
     */
    start_from?: string,
    /**
     * Number of news items to return.
     */
    count?: number,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedGetSuggestedSourcesParams {
    /**
     * offset required to choose a particular subset of communities or users.
     */
    offset?: number,
    /**
     * amount of communities or users to return.
     */
    count?: number,
    /**
     * shuffle the returned list or not.
     */
    shuffle?: boolean,
    /**
     * list of extra fields to be returned. See available fields for [vk.com/dev/fields|users] and [vk.com/dev/fields_groups|communities].
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedIgnoreItemParams {
    /**
     * Item type. Possible values: *'wall' – post on the wall,, *'tag' – tag on a photo,, *'profilephoto' – profile photo,, *'video' – video,, *'audio' – audio.
     */
    type: string,
    /**
     * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' – user , 'owner_id=-1' – community "
     */
    owner_id?: number,
    /**
     * Item identifier
     */
    item_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedSaveListParams {
    /**
     * numeric list identifier (if not sent, will be set automatically).
     */
    list_id?: number,
    /**
     * list name.
     */
    title: string,
    /**
     * users and communities identifiers to be added to the list. Community identifiers must be negative numbers.
     */
    source_ids?: number[],
    /**
     * reposts display on and off ('1' is for off).
     */
    no_reposts?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedSearchParams {
    /**
     * Search query string (e.g., 'New Year').
     */
    q?: string,
    /**
     * '1' — to return additional information about the user or community that placed the post.
     */
    extended?: boolean,
    /**
     * Number of posts to return.
     */
    count?: number,
    /**
     * Geographical latitude point (in degrees, -90 to 90) within which to search.
     */
    latitude?: number,
    /**
     * Geographical longitude point (in degrees, -180 to 180) within which to search.
     */
    longitude?: number,
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number,
    /**
     * undefined
     */
    start_from?: string,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedUnignoreItemParams {
    /**
     * Item type. Possible values: *'wall' – post on the wall,, *'tag' – tag on a photo,, *'profilephoto' – profile photo,, *'video' – video,, *'audio' – audio.
     */
    type: string,
    /**
     * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' – user , 'owner_id=-1' – community "
     */
    owner_id: number,
    /**
     * Item identifier
     */
    item_id: number,
    /**
     * Track code of unignored item
     */
    track_code?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface NewsfeedUnsubscribeParams {
    /**
     * Type of object from which to unsubscribe: 'note' — note, 'photo' — photo, 'post' — post on user wall or community wall, 'topic' — topic, 'video' — video
     */
    type: string,
    /**
     * Object owner ID.
     */
    owner_id?: number,
    /**
     * Object ID.
     */
    item_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesAddParams {
    /**
     * Note title.
     */
    title: string,
    /**
     * Note text.
     */
    text: string,
    /**
     * undefined
     */
    privacy_view?: string[],
    /**
     * undefined
     */
    privacy_comment?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface NotesCreateCommentParams {
    /**
     * Note ID.
     */
    note_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * ID of the user to whom the reply is addressed (if the comment is a reply to another comment).
     */
    reply_to?: number,
    /**
     * Comment text.
     */
    message: string,
    /**
     * undefined
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesDeleteParams {
    /**
     * Note ID.
     */
    note_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesDeleteCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesEditParams {
    /**
     * Note ID.
     */
    note_id: number,
    /**
     * Note title.
     */
    title: string,
    /**
     * Note text.
     */
    text: string,
    /**
     * undefined
     */
    privacy_view?: string[],
    /**
     * undefined
     */
    privacy_comment?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface NotesEditCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * New comment text.
     */
    message: string,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesGetParams {
    /**
     * Note IDs.
     */
    note_ids?: number[],
    /**
     * Note owner ID.
     */
    user_id?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * Number of notes to return.
     */
    count?: number,
    /**
     * undefined
     */
    sort?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesGetByIdParams {
    /**
     * Note ID.
     */
    note_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * undefined
     */
    need_wiki?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesGetCommentsParams {
    /**
     * Note ID.
     */
    note_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * undefined
     */
    sort?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotesRestoreCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * Note owner ID.
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotificationsGetParams {
    /**
     * Number of notifications to return.
     */
    count?: number,
    /**
     * undefined
     */
    start_from?: string,
    /**
     * Type of notifications to return: 'wall' — wall posts, 'mentions' — mentions in wall posts, comments, or topics, 'comments' — comments to wall posts, photos, and videos, 'likes' — likes, 'reposted' — wall posts that are copied from the current user's wall, 'followers' — new followers, 'friends' — accepted friend requests
     */
    filters?: string[],
    /**
     * Earliest timestamp (in Unix time) of a notification to return. By default, 24 hours ago.
     */
    start_time?: number,
    /**
     * Latest timestamp (in Unix time) of a notification to return. By default, the current time.
     */
    end_time?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface NotificationsMarkAsViewedParams {
    /**
     * access token
     */
    access_token?: string
}

export interface NotificationsSendMessageParams {
    /**
     * undefined
     */
    user_ids: number[],
    /**
     * undefined
     */
    message: string,
    /**
     * undefined
     */
    fragment?: string,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * undefined
     */
    random_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersCancelSubscriptionParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    subscription_id: number,
    /**
     * undefined
     */
    pending_cancel?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersChangeStateParams {
    /**
     * order ID.
     */
    order_id: number,
    /**
     * action to be done with the order. Available actions: *cancel — to cancel unconfirmed order. *charge — to confirm unconfirmed order. Applies only if processing of [vk.com/dev/payments_status|order_change_state] notification failed. *refund — to cancel confirmed order.
     */
    action: string,
    /**
     * internal ID of the order in the application.
     */
    app_order_id?: number,
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    test_mode?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersGetParams {
    /**
     * undefined
     */
    offset?: number,
    /**
     * number of returned orders.
     */
    count?: number,
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    test_mode?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersGetAmountParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    votes: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersGetByIdParams {
    /**
     * order ID.
     */
    order_id?: number,
    /**
     * order IDs (when information about several orders is requested).
     */
    order_ids?: number[],
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    test_mode?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersGetUserSubscriptionByIdParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    subscription_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersGetUserSubscriptionsParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface OrdersUpdateSubscriptionParams {
    /**
     * undefined
     */
    user_id: number,
    /**
     * undefined
     */
    subscription_id: number,
    /**
     * undefined
     */
    price: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesClearCacheParams {
    /**
     * Address of the page where you need to refesh the cached version
     */
    url: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesGetParams {
    /**
     * Page owner ID.
     */
    owner_id?: number,
    /**
     * Wiki page ID.
     */
    page_id?: number,
    /**
     * '1' — to return information about a global wiki page
     */
    global?: boolean,
    /**
     * '1' — resulting wiki page is a preview for the attached link
     */
    site_preview?: boolean,
    /**
     * Wiki page title.
     */
    title?: string,
    /**
     * undefined
     */
    need_source?: boolean,
    /**
     * '1' — to return the page as HTML,
     */
    need_html?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesGetHistoryParams {
    /**
     * Wiki page ID.
     */
    page_id: number,
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesGetTitlesParams {
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesGetVersionParams {
    /**
     * undefined
     */
    version_id: number,
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * '1' — to return the page as HTML
     */
    need_html?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesParseWikiParams {
    /**
     * Text of the wiki page.
     */
    text: string,
    /**
     * ID of the group in the context of which this markup is interpreted.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesSaveParams {
    /**
     * Text of the wiki page in wiki-format.
     */
    text?: string,
    /**
     * Wiki page ID. The 'title' parameter can be passed instead of 'pid'.
     */
    page_id?: number,
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number,
    /**
     * User ID
     */
    user_id?: number,
    /**
     * Wiki page title.
     */
    title?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PagesSaveAccessParams {
    /**
     * Wiki page ID.
     */
    page_id: number,
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * Who can view the wiki page: '1' — only community members, '2' — all users can view the page, '0' — only community managers
     */
    view?: number,
    /**
     * Who can edit the wiki page: '1' — only community members, '2' — all users can edit the page, '0' — only community managers
     */
    edit?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosConfirmTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: string,
    /**
     * Tag ID.
     */
    tag_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosCopyParams {
    /**
     * photo's owner ID
     */
    owner_id: number,
    /**
     * photo ID
     */
    photo_id: number,
    /**
     * for private photos
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosCreateAlbumParams {
    /**
     * Album title.
     */
    title: string,
    /**
     * ID of the community in which the album will be created.
     */
    group_id?: number,
    /**
     * Album description.
     */
    description?: string,
    /**
     * undefined
     */
    privacy_view?: string[],
    /**
     * undefined
     */
    privacy_comment?: string[],
    /**
     * undefined
     */
    upload_by_admins_only?: boolean,
    /**
     * undefined
     */
    comments_disabled?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosCreateCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * Comment text.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * '1' — to post a comment from the community
     */
    from_group?: boolean,
    /**
     * undefined
     */
    reply_to_comment?: number,
    /**
     * undefined
     */
    sticker_id?: number,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * undefined
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosDeleteParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosDeleteAlbumParams {
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * ID of the community that owns the album.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosDeleteCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosEditParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * New caption for the photo. If this parameter is not set, it is considered to be equal to an empty string.
     */
    caption?: string,
    /**
     * undefined
     */
    latitude?: number,
    /**
     * undefined
     */
    longitude?: number,
    /**
     * undefined
     */
    place_str?: string,
    /**
     * undefined
     */
    foursquare_id?: string,
    /**
     * undefined
     */
    delete_place?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosEditAlbumParams {
    /**
     * ID of the photo album to be edited.
     */
    album_id: number,
    /**
     * New album title.
     */
    title?: string,
    /**
     * New album description.
     */
    description?: string,
    /**
     * ID of the user or community that owns the album.
     */
    owner_id?: number,
    /**
     * undefined
     */
    privacy_view?: string[],
    /**
     * undefined
     */
    privacy_comment?: string[],
    /**
     * undefined
     */
    upload_by_admins_only?: boolean,
    /**
     * undefined
     */
    comments_disabled?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosEditCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * New text of the comment.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — Media attachment owner ID. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetParams {
    /**
     * ID of the user or community that owns the photos. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Photo album ID. To return information about photos from service albums, use the following string values: 'profile, wall, saved'.
     */
    album_id?: string,
    /**
     * Photo IDs.
     */
    photo_ids?: string[],
    /**
     * Sort order: '1' — reverse chronological, '0' — chronological
     */
    rev?: boolean,
    /**
     * '1' — to return additional 'likes', 'comments', and 'tags' fields, '0' — (default)
     */
    extended?: boolean,
    /**
     * Type of feed obtained in 'feed' field of the method.
     */
    feed_type?: string,
    /**
     * unixtime, that can be obtained with [vk.com/dev/newsfeed.get|newsfeed.get] method in date field to get all photos uploaded by the user on a specific day, or photos the user has been tagged on. Also, 'uid' parameter of the user the event happened with shall be specified.
     */
    feed?: number,
    /**
     * '1' — to return photo sizes in a [vk.com/dev/photo_sizes|special format]
     */
    photo_sizes?: boolean,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetAlbumsParams {
    /**
     * ID of the user or community that owns the albums.
     */
    owner_id?: number,
    /**
     * Album IDs.
     */
    album_ids?: number[],
    /**
     * Offset needed to return a specific subset of albums.
     */
    offset?: number,
    /**
     * Number of albums to return.
     */
    count?: number,
    /**
     * '1' — to return system albums with negative IDs
     */
    need_system?: boolean,
    /**
     * '1' — to return an additional 'thumb_src' field, '0' — (default)
     */
    need_covers?: boolean,
    /**
     * '1' — to return photo sizes in a
     */
    photo_sizes?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetAlbumsCountParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Community ID.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetAllParams {
    /**
     * ID of a user or community that owns the photos. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * '1' — to return detailed information about photos
     */
    extended?: boolean,
    /**
     * Offset needed to return a specific subset of photos. By default, '0'.
     */
    offset?: number,
    /**
     * Number of photos to return.
     */
    count?: number,
    /**
     * '1' – to return image sizes in [vk.com/dev/photo_sizes|special format].
     */
    photo_sizes?: boolean,
    /**
     * '1' – to return photos only from standard albums, '0' – to return all photos including those in service albums, e.g., 'My wall photos' (default)
     */
    no_service_albums?: boolean,
    /**
     * '1' – to show information about photos being hidden from the block above the wall.
     */
    need_hidden?: boolean,
    /**
     * '1' – not to return photos being hidden from the block above the wall. Works only with owner_id>0, no_service_albums is ignored.
     */
    skip_hidden?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetAllCommentsParams {
    /**
     * ID of the user or community that owns the album(s).
     */
    owner_id?: number,
    /**
     * Album ID. If the parameter is not set, comments on all of the user's albums will be returned.
     */
    album_id?: number,
    /**
     * '1' — to return an additional 'likes' field, '0' — (default)
     */
    need_likes?: boolean,
    /**
     * Offset needed to return a specific subset of comments. By default, '0'.
     */
    offset?: number,
    /**
     * Number of comments to return. By default, '20'. Maximum value, '100'.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetByIdParams {
    /**
     * IDs separated with a comma, that are IDs of users who posted photos and IDs of photos themselves with an underscore character between such IDs. To get information about a photo in the group album, you shall specify group ID instead of user ID. Example: "1_129207899,6492_135055734, , -20629724_271945303"
     */
    photos: string[],
    /**
     * '1' — to return additional fields, '0' — (default)
     */
    extended?: boolean,
    /**
     * '1' — to return photo sizes in a
     */
    photo_sizes?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetChatUploadServerParams {
    /**
     * ID of the chat for which you want to upload a cover photo.
     */
    chat_id: number,
    /**
     * undefined
     */
    crop_x?: number,
    /**
     * undefined
     */
    crop_y?: number,
    /**
     * Width (in pixels) of the photo after cropping.
     */
    crop_width?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetCommentsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * '1' — to return an additional 'likes' field, '0' — (default)
     */
    need_likes?: boolean,
    /**
     * undefined
     */
    start_comment_id?: number,
    /**
     * Offset needed to return a specific subset of comments. By default, '0'.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * Sort order: 'asc' — old first, 'desc' — new first
     */
    sort?: string,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetMarketAlbumUploadServerParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetMarketUploadServerParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * '1' if you want to upload the main item photo.
     */
    main_photo?: boolean,
    /**
     * X coordinate of the crop left upper corner.
     */
    crop_x?: number,
    /**
     * Y coordinate of the crop left upper corner.
     */
    crop_y?: number,
    /**
     * Width of the cropped photo in px.
     */
    crop_width?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetMessagesUploadServerParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetNewTagsParams {
    /**
     * Offset needed to return a specific subset of photos.
     */
    offset?: number,
    /**
     * Number of photos to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetOwnerCoverPhotoUploadServerParams {
    /**
     * ID of community that owns the album (if the photo will be uploaded to a community album).
     */
    group_id: number,
    /**
     * X coordinate of the left-upper corner
     */
    crop_x?: number,
    /**
     * Y coordinate of the left-upper corner
     */
    crop_y?: number,
    /**
     * X coordinate of the right-bottom corner
     */
    crop_x2?: number,
    /**
     * Y coordinate of the right-bottom corner
     */
    crop_y2?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetOwnerPhotoUploadServerParams {
    /**
     * identifier of a community or current user. "Note that community id must be negative. 'owner_id=1' – user, 'owner_id=-1' – community, "
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetTagsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * undefined
     */
    access_key?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetUploadServerParams {
    /**
     * ID of community that owns the album (if the photo will be uploaded to a community album).
     */
    group_id?: number,
    /**
     * undefined
     */
    album_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetUserPhotosParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Offset needed to return a specific subset of photos. By default, '0'.
     */
    offset?: number,
    /**
     * Number of photos to return. Maximum value is 1000.
     */
    count?: number,
    /**
     * '1' — to return an additional 'likes' field, '0' — (default)
     */
    extended?: boolean,
    /**
     * Sort order: '1' — by date the tag was added in ascending order, '0' — by date the tag was added in descending order
     */
    sort?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosGetWallUploadServerParams {
    /**
     * ID of community to whose wall the photo will be uploaded.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosMakeCoverParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * Album ID.
     */
    album_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosMoveParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * ID of the album to which the photo will be moved.
     */
    target_album_id: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosPutTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * ID of the user to be tagged.
     */
    user_id: number,
    /**
     * Upper left-corner coordinate of the tagged area (as a percentage of the photo's width).
     */
    x?: number,
    /**
     * Upper left-corner coordinate of the tagged area (as a percentage of the photo's height).
     */
    y?: number,
    /**
     * Lower right-corner coordinate of the tagged area (as a percentage of the photo's width).
     */
    x2?: number,
    /**
     * Lower right-corner coordinate of the tagged area (as a percentage of the photo's height).
     */
    y2?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosRemoveTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * Tag ID.
     */
    tag_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosReorderAlbumsParams {
    /**
     * ID of the user or community that owns the album.
     */
    owner_id?: number,
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * ID of the album before which the album in question shall be placed.
     */
    before?: number,
    /**
     * ID of the album after which the album in question shall be placed.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosReorderPhotosParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * ID of the photo before which the photo in question shall be placed.
     */
    before?: number,
    /**
     * ID of the photo after which the photo in question shall be placed.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosReportParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosReportCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id: number,
    /**
     * ID of the comment being reported.
     */
    comment_id: number,
    /**
     * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosRestoreParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * Photo ID.
     */
    photo_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosRestoreCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number,
    /**
     * ID of the deleted comment.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveParams {
    /**
     * ID of the album to save photos to.
     */
    album_id?: number,
    /**
     * ID of the community to save photos to.
     */
    group_id?: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server?: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photos_list?: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash?: string,
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    latitude?: number,
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    longitude?: number,
    /**
     * Text describing the photo. 2048 digits max.
     */
    caption?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveMarketAlbumPhotoParams {
    /**
     * Community ID.
     */
    group_id: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photo: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveMarketPhotoParams {
    /**
     * Community ID.
     */
    group_id?: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photo: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    crop_data?: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    crop_hash?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveMessagesPhotoParams {
    /**
     * Parameter returned when the photo is [vk.com/dev/upload_files|uploaded to the server].
     */
    photo: string,
    /**
     * undefined
     */
    server?: number,
    /**
     * undefined
     */
    hash?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveOwnerCoverPhotoParams {
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photo: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveOwnerPhotoParams {
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    server?: string,
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    hash?: string,
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    photo?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSaveWallPhotoParams {
    /**
     * ID of the user on whose wall the photo will be saved.
     */
    user_id?: number,
    /**
     * ID of community on whose wall the photo will be saved.
     */
    group_id?: number,
    /**
     * Parameter returned when the the photo is [vk.com/dev/upload_files|uploaded to the server].
     */
    photo: string,
    /**
     * undefined
     */
    server?: number,
    /**
     * undefined
     */
    hash?: string,
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    latitude?: number,
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    longitude?: number,
    /**
     * Text describing the photo. 2048 digits max.
     */
    caption?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PhotosSearchParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    lat?: number,
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    long?: number,
    /**
     * undefined
     */
    start_time?: number,
    /**
     * undefined
     */
    end_time?: number,
    /**
     * Sort order:
     */
    sort?: number,
    /**
     * Offset needed to return a specific subset of photos.
     */
    offset?: number,
    /**
     * Number of photos to return.
     */
    count?: number,
    /**
     * Radius of search in meters (works very approximately). Available values: '10', '100', '800', '6000', '50000'.
     */
    radius?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsAddVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Poll ID.
     */
    poll_id: number,
    /**
     * undefined
     */
    answer_ids: number[],
    /**
     * undefined
     */
    is_board?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsCreateParams {
    /**
     * question text
     */
    question?: string,
    /**
     * '1' – anonymous poll, participants list is hidden,, '0' – public poll, participants list is available,, Default value is '0'.
     */
    is_anonymous?: boolean,
    /**
     * undefined
     */
    is_multiple?: boolean,
    /**
     * undefined
     */
    end_date?: number,
    /**
     * If a poll will be added to a communty it is required to send a negative group identifier. Current user by default.
     */
    owner_id?: number,
    /**
     * available answers list, for example: " ["yes","no","maybe"]", There can be from 1 to 10 answers.
     */
    add_answers?: string,
    /**
     * undefined
     */
    photo_id?: number,
    /**
     * undefined
     */
    background_id?: string,
    /**
     * undefined
     */
    disable_unvote?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsDeleteVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Poll ID.
     */
    poll_id: number,
    /**
     * Answer ID.
     */
    answer_id: number,
    /**
     * undefined
     */
    is_board?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsEditParams {
    /**
     * poll owner id
     */
    owner_id?: number,
    /**
     * edited poll's id
     */
    poll_id: number,
    /**
     * new question text
     */
    question?: string,
    /**
     * answers list, for example: , "["yes","no","maybe"]"
     */
    add_answers?: string,
    /**
     * object containing answers that need to be edited,, key – answer id, value – new answer text. Example: {"382967099":"option1", "382967103":"option2"}"
     */
    edit_answers?: string,
    /**
     * list of answer ids to be deleted. For example: "[382967099, 382967103]"
     */
    delete_answers?: string,
    /**
     * undefined
     */
    end_date?: number,
    /**
     * undefined
     */
    photo_id?: number,
    /**
     * undefined
     */
    background_id?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsGetByIdParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * '1' – poll is in a board, '0' – poll is on a wall. '0' by default.
     */
    is_board?: boolean,
    /**
     * Poll ID.
     */
    poll_id: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    friends_count?: number,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * undefined
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PollsGetVotersParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Poll ID.
     */
    poll_id: number,
    /**
     * Answer IDs.
     */
    answer_ids: number[],
    /**
     * undefined
     */
    is_board?: boolean,
    /**
     * '1' — to return only current user's friends, '0' — to return all users (default),
     */
    friends_only?: boolean,
    /**
     * Offset needed to return a specific subset of voters. '0' — (default)
     */
    offset?: number,
    /**
     * Number of user IDs to return (if the 'friends_only' parameter is not set, maximum '1000', otherwise '10'). '100' — (default)
     */
    count?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate (birthdate)', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: , 'nom' — nominative (default) , 'gen' — genitive , 'dat' — dative , 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsCreateParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    photo: string,
    /**
     * undefined
     */
    title: string,
    /**
     * undefined
     */
    link: string,
    /**
     * undefined
     */
    price?: string,
    /**
     * undefined
     */
    price_old?: string,
    /**
     * undefined
     */
    button?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsDeleteParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    card_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsEditParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    card_id: number,
    /**
     * undefined
     */
    photo?: string,
    /**
     * undefined
     */
    title?: string,
    /**
     * undefined
     */
    link?: string,
    /**
     * undefined
     */
    price?: string,
    /**
     * undefined
     */
    price_old?: string,
    /**
     * undefined
     */
    button?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsGetParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsGetByIdParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    card_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface PrettyCardsGetUploadURLParams {
    /**
     * access token
     */
    access_token?: string
}

export interface SearchGetHintsParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Offset for querying specific result subset
     */
    offset?: number,
    /**
     * Maximum number of results to return.
     */
    limit?: number,
    /**
     * undefined
     */
    filters?: string[],
    /**
     * undefined
     */
    fields?: string[],
    /**
     * undefined
     */
    search_global?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureAddAppEventParams {
    /**
     * ID of a user to save the data
     */
    user_id: number,
    /**
     * there are 2 default activities: , * 1 – level. Works similar to ,, * 2 – points, saves points amount, Any other value is for saving completed missions
     */
    activity_id: number,
    /**
     * depends on activity_id: * 1 – number, current level number,, * 2 – number, current user's points amount, , Any other value is ignored
     */
    value?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureCheckTokenParams {
    /**
     * client 'access_token'
     */
    token?: string,
    /**
     * user 'ip address'. Note that user may access using the 'ipv6' address, in this case it is required to transmit the 'ipv6' address. If not transmitted, the address will not be checked.
     */
    ip?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureGetAppBalanceParams {
    /**
     * access token
     */
    access_token?: string
}

export interface SecureGetSMSHistoryParams {
    /**
     * undefined
     */
    user_id?: number,
    /**
     * filter by start date. It is set as UNIX-time.
     */
    date_from?: number,
    /**
     * filter by end date. It is set as UNIX-time.
     */
    date_to?: number,
    /**
     * number of returned posts. By default — 1000.
     */
    limit?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureGetTransactionsHistoryParams {
    /**
     * undefined
     */
    type?: number,
    /**
     * undefined
     */
    uid_from?: number,
    /**
     * undefined
     */
    uid_to?: number,
    /**
     * undefined
     */
    date_from?: number,
    /**
     * undefined
     */
    date_to?: number,
    /**
     * undefined
     */
    limit?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureGetUserLevelParams {
    /**
     * undefined
     */
    user_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface SecureGiveEventStickerParams {
    /**
     * undefined
     */
    user_ids: number[],
    /**
     * undefined
     */
    achievement_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureSendNotificationParams {
    /**
     * undefined
     */
    user_ids?: number[],
    /**
     * undefined
     */
    user_id?: number,
    /**
     * notification text which should be sent in 'UTF-8' encoding ('254' characters maximum).
     */
    message: string,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureSendSMSNotificationParams {
    /**
     * ID of the user to whom SMS notification is sent. The user shall allow the application to send him/her notifications (, +1).
     */
    user_id: number,
    /**
     * 'SMS' text to be sent in 'UTF-8' encoding. Only Latin letters and numbers are allowed. Maximum size is '160' characters.
     */
    message: string,
    /**
     * access token
     */
    access_token?: string
}

export interface SecureSetCounterParams {
    /**
     * undefined
     */
    counters?: string[],
    /**
     * undefined
     */
    user_id?: number,
    /**
     * counter value.
     */
    counter?: number,
    /**
     * undefined
     */
    increment?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface StatsGetParams {
    /**
     * Community ID.
     */
    group_id?: number,
    /**
     * Application ID.
     */
    app_id?: number,
    /**
     * undefined
     */
    timestamp_from?: number,
    /**
     * undefined
     */
    timestamp_to?: number,
    /**
     * undefined
     */
    interval?: string,
    /**
     * undefined
     */
    intervals_count?: number,
    /**
     * undefined
     */
    filters?: string[],
    /**
     * undefined
     */
    stats_groups?: string[],
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface StatsGetPostReachParams {
    /**
     * post owner community id. Specify with "-" sign.
     */
    owner_id: string,
    /**
     * wall posts id
     */
    post_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface StatsTrackVisitorParams {
    /**
     * undefined
     */
    id: string,
    /**
     * access token
     */
    access_token?: string
}

export interface StatusGetParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    user_id?: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StatusSetParams {
    /**
     * Text of the new status.
     */
    text?: string,
    /**
     * Identifier of a community to set a status in. If left blank the status is set to current user.
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StorageGetParams {
    /**
     * undefined
     */
    key?: string,
    /**
     * undefined
     */
    keys?: string[],
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StorageGetKeysParams {
    /**
     * user id, whose variables names are returned if they were requested with a server method.
     */
    user_id?: number,
    /**
     * undefined
     */
    offset?: number,
    /**
     * amount of variable names the info needs to be collected from.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StorageSetParams {
    /**
     * undefined
     */
    key: string,
    /**
     * undefined
     */
    value?: string,
    /**
     * undefined
     */
    user_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesBanOwnerParams {
    /**
     * List of sources IDs
     */
    owners_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesDeleteParams {
    /**
     * Story owner's ID. Current user id is used by default.
     */
    owner_id?: number,
    /**
     * Story ID.
     */
    story_id?: number,
    /**
     * undefined
     */
    stories?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetParams {
    /**
     * Owner ID.
     */
    owner_id?: number,
    /**
     * '1' — to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetBannedParams {
    /**
     * '1' — to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean,
    /**
     * Additional fields to return
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetByIdParams {
    /**
     * Stories IDs separated by commas. Use format {owner_id}+'_'+{story_id}, for example, 12345_54331.
     */
    stories: string[],
    /**
     * '1' — to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean,
    /**
     * Additional fields to return
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetPhotoUploadServerParams {
    /**
     * 1 — to add the story to friend's feed.
     */
    add_to_news?: boolean,
    /**
     * List of users IDs who can see the story.
     */
    user_ids?: number[],
    /**
     * ID of the story to reply with the current.
     */
    reply_to_story?: string,
    /**
     * Link text (for community's stories only).
     */
    link_text?: string,
    /**
     * Link URL. Internal links on https://vk.com only.
     */
    link_url?: string,
    /**
     * ID of the community to upload the story (should be verified or with the "fire" icon).
     */
    group_id?: number,
    /**
     * undefined
     */
    clickable_stickers?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetRepliesParams {
    /**
     * Story owner ID.
     */
    owner_id: number,
    /**
     * Story ID.
     */
    story_id: number,
    /**
     * Access key for the private object.
     */
    access_key?: string,
    /**
     * '1' — to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean,
    /**
     * Additional fields to return
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetStatsParams {
    /**
     * Story owner ID. 
     */
    owner_id: number,
    /**
     * Story ID.
     */
    story_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetVideoUploadServerParams {
    /**
     * 1 — to add the story to friend's feed.
     */
    add_to_news?: boolean,
    /**
     * List of users IDs who can see the story.
     */
    user_ids?: number[],
    /**
     * ID of the story to reply with the current.
     */
    reply_to_story?: string,
    /**
     * Link text (for community's stories only).
     */
    link_text?: string,
    /**
     * Link URL. Internal links on https://vk.com only.
     */
    link_url?: string,
    /**
     * ID of the community to upload the story (should be verified or with the "fire" icon).
     */
    group_id?: number,
    /**
     * undefined
     */
    clickable_stickers?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesGetViewersParams {
    /**
     * Story owner ID.
     */
    owner_id: number,
    /**
     * Story ID.
     */
    story_id: number,
    /**
     * Maximum number of results.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * '1' — to return detailed information about photos
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesHideAllRepliesParams {
    /**
     * ID of the user whose replies should be hidden.
     */
    owner_id: number,
    /**
     * undefined
     */
    group_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesHideReplyParams {
    /**
     * ID of the user whose replies should be hidden.
     */
    owner_id: number,
    /**
     * Story ID.
     */
    story_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesSaveParams {
    /**
     * undefined
     */
    upload_results: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesSearchParams {
    /**
     * undefined
     */
    q?: string,
    /**
     * undefined
     */
    place_id?: number,
    /**
     * undefined
     */
    latitude?: number,
    /**
     * undefined
     */
    longitude?: number,
    /**
     * undefined
     */
    radius?: number,
    /**
     * undefined
     */
    mentioned_id?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesSendInteractionParams {
    /**
     * undefined
     */
    access_key: string,
    /**
     * undefined
     */
    message?: string,
    /**
     * undefined
     */
    is_broadcast?: boolean,
    /**
     * undefined
     */
    is_anonymous?: boolean,
    /**
     * undefined
     */
    unseen_marker?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface StoriesUnbanOwnerParams {
    /**
     * List of hidden sources to show stories from.
     */
    owners_ids: number[],
    /**
     * access token
     */
    access_token?: string
}

export interface StreamingGetServerUrlParams {
    /**
     * access token
     */
    access_token?: string
}

export interface StreamingSetSettingsParams {
    /**
     * undefined
     */
    monthly_tier?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UsersGetParams {
    /**
     * User IDs or screen names ('screen_name'). By default, current user ID.
     */
    user_ids?: string[],
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', 'can_invite_to_chats'
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UsersGetFollowersParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * Offset needed to return a specific subset of followers.
     */
    offset?: number,
    /**
     * Number of followers to return.
     */
    count?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online'.
     */
    fields?: Models.UsersFields[],
    /**
     * Case for declension of user name and surname: 'nom' — nominative (default), 'gen' — genitive , 'dat' — dative, 'acc' — accusative , 'ins' — instrumental , 'abl' — prepositional
     */
    name_case?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UsersGetSubscriptionsParams {
    /**
     * User ID.
     */
    user_id?: number,
    /**
     * '1' — to return a combined list of users and communities, '0' — to return separate lists of users and communities (default)
     */
    extended?: boolean,
    /**
     * Offset needed to return a specific subset of subscriptions.
     */
    offset?: number,
    /**
     * Number of users and communities to return.
     */
    count?: number,
    /**
     * undefined
     */
    fields?: Models.UsersFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface UsersReportParams {
    /**
     * ID of the user about whom a complaint is being made.
     */
    user_id: number,
    /**
     * Type of complaint: 'porn' – pornography, 'spam' – spamming, 'insult' – abusive behavior, 'advertisement' – disruptive advertisements
     */
    type: string,
    /**
     * Comment describing the complaint.
     */
    comment?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UsersSearchParams {
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string,
    /**
     * Sort order: '1' — by date registered, '0' — by rating
     */
    sort?: number,
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number,
    /**
     * Number of users to return.
     */
    count?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
     */
    fields?: Models.UsersFields[],
    /**
     * City ID.
     */
    city?: number,
    /**
     * Country ID.
     */
    country?: number,
    /**
     * City name in a string.
     */
    hometown?: string,
    /**
     * ID of the country where the user graduated.
     */
    university_country?: number,
    /**
     * ID of the institution of higher education.
     */
    university?: number,
    /**
     * Year of graduation from an institution of higher education.
     */
    university_year?: number,
    /**
     * Faculty ID.
     */
    university_faculty?: number,
    /**
     * Chair ID.
     */
    university_chair?: number,
    /**
     * '1' — female, '2' — male, '0' — any (default)
     */
    sex?: number,
    /**
     * Relationship status: '1' — Not married, '2' — In a relationship, '3' — Engaged, '4' — Married, '5' — It's complicated, '6' — Actively searching, '7' — In love
     */
    status?: number,
    /**
     * Minimum age.
     */
    age_from?: number,
    /**
     * Maximum age.
     */
    age_to?: number,
    /**
     * Day of birth.
     */
    birth_day?: number,
    /**
     * Month of birth.
     */
    birth_month?: number,
    /**
     * Year of birth.
     */
    birth_year?: number,
    /**
     * '1' — online only, '0' — all users
     */
    online?: boolean,
    /**
     * '1' — with photo only, '0' — all users
     */
    has_photo?: boolean,
    /**
     * ID of the country where users finished school.
     */
    school_country?: number,
    /**
     * ID of the city where users finished school.
     */
    school_city?: number,
    /**
     * undefined
     */
    school_class?: number,
    /**
     * ID of the school.
     */
    school?: number,
    /**
     * School graduation year.
     */
    school_year?: number,
    /**
     * Users' religious affiliation.
     */
    religion?: string,
    /**
     * Name of the company where users work.
     */
    company?: string,
    /**
     * Job position.
     */
    position?: string,
    /**
     * ID of a community to search in communities.
     */
    group_id?: number,
    /**
     * undefined
     */
    from_list?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsCheckLinkParams {
    /**
     * Link to check (e.g., 'http://google.com').
     */
    url: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsDeleteFromLastShortenedParams {
    /**
     * Link key (characters after vk.cc/).
     */
    key: string,
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsGetLastShortenedLinksParams {
    /**
     * Number of links to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of links.
     */
    offset?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsGetLinkStatsParams {
    /**
     * Link key (characters after vk.cc/).
     */
    key: string,
    /**
     * Source of scope
     */
    source?: string,
    /**
     * Access key for private link stats.
     */
    access_key?: string,
    /**
     * Interval.
     */
    interval?: string,
    /**
     * Number of intervals to return.
     */
    intervals_count?: number,
    /**
     * 1 — to return extended stats data (sex, age, geo). 0 — to return views number only.
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsGetServerTimeParams {
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsGetShortLinkParams {
    /**
     * URL to be shortened.
     */
    url: string,
    /**
     * 1 — private stats, 0 — public stats.
     */
    private?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface UtilsResolveScreenNameParams {
    /**
     * Screen name of the user, community (e.g., 'apiclub,' 'andrew', or 'rules_of_war'), or application.
     */
    screen_name: string,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoAddParams {
    /**
     * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
     */
    target_id?: number,
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * ID of the user or community that owns the video. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoAddAlbumParams {
    /**
     * Community ID (if the album will be created in a community).
     */
    group_id?: number,
    /**
     * Album title.
     */
    title?: string,
    /**
     * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
     */
    privacy?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface VideoAddToAlbumParams {
    /**
     * undefined
     */
    target_id?: number,
    /**
     * undefined
     */
    album_id?: number,
    /**
     * undefined
     */
    album_ids?: number[],
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    video_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoCreateCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * '1' — to post the comment from a community name (only if 'owner_id'<0)
     */
    from_group?: boolean,
    /**
     * undefined
     */
    reply_to_comment?: number,
    /**
     * undefined
     */
    sticker_id?: number,
    /**
     * undefined
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoDeleteParams {
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * undefined
     */
    target_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoDeleteAlbumParams {
    /**
     * Community ID (if the album is owned by a community).
     */
    group_id?: number,
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoDeleteCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * ID of the comment to be deleted.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoEditParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * New video title.
     */
    name?: string,
    /**
     * New video description.
     */
    desc?: string,
    /**
     * Privacy settings in a [vk.com/dev/privacy_setting|special format]. Privacy setting is available for videos uploaded to own profile by user.
     */
    privacy_view?: string[],
    /**
     * Privacy settings for comments in a [vk.com/dev/privacy_setting|special format].
     */
    privacy_comment?: string[],
    /**
     * Disable comments for the group video.
     */
    no_comments?: boolean,
    /**
     * '1' — to repeat the playback of the video, '0' — to play the video once,
     */
    repeat?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoEditAlbumParams {
    /**
     * Community ID (if the album edited is owned by a community).
     */
    group_id?: number,
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * New album title.
     */
    title: string,
    /**
     * new access permissions for the album. Possible values: , *'0' – all users,, *'1' – friends only,, *'2' – friends and friends of friends,, *'3' – "only me".
     */
    privacy?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface VideoEditCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface VideoGetParams {
    /**
     * ID of the user or community that owns the video(s).
     */
    owner_id?: number,
    /**
     * Video IDs, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", Use a negative value to designate a community ID. Example: "-4363_136089719,13245770_137352259"
     */
    videos?: string[],
    /**
     * ID of the album containing the video(s).
     */
    album_id?: number,
    /**
     * Number of videos to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number,
    /**
     * '1' — to return an extended response with additional fields
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoGetAlbumByIdParams {
    /**
     * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoGetAlbumsParams {
    /**
     * ID of the user or community that owns the video album(s).
     */
    owner_id?: number,
    /**
     * Offset needed to return a specific subset of video albums.
     */
    offset?: number,
    /**
     * Number of video albums to return.
     */
    count?: number,
    /**
     * '1' — to return additional information about album privacy settings for the current user
     */
    extended?: boolean,
    /**
     * undefined
     */
    need_system?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoGetAlbumsByVideoParams {
    /**
     * undefined
     */
    target_id?: number,
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    video_id: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoGetCommentsParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * '1' — to return an additional 'likes' field
     */
    need_likes?: boolean,
    /**
     * undefined
     */
    start_comment_id?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * Sort order: 'asc' — oldest comment first, 'desc' — newest comment first
     */
    sort?: string,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface VideoRemoveFromAlbumParams {
    /**
     * undefined
     */
    target_id?: number,
    /**
     * undefined
     */
    album_id?: number,
    /**
     * undefined
     */
    album_ids?: number[],
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    video_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoReorderAlbumsParams {
    /**
     * ID of the user or community that owns the albums..
     */
    owner_id?: number,
    /**
     * Album ID.
     */
    album_id: number,
    /**
     * ID of the album before which the album in question shall be placed.
     */
    before?: number,
    /**
     * ID of the album after which the album in question shall be placed.
     */
    after?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoReorderVideosParams {
    /**
     * ID of the user or community that owns the album with videos.
     */
    target_id?: number,
    /**
     * ID of the video album.
     */
    album_id?: number,
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number,
    /**
     * ID of the video.
     */
    video_id: number,
    /**
     * ID of the user or community that owns the video before which the video in question shall be placed.
     */
    before_owner_id?: number,
    /**
     * ID of the video before which the video in question shall be placed.
     */
    before_video_id?: number,
    /**
     * ID of the user or community that owns the video after which the photo in question shall be placed.
     */
    after_owner_id?: number,
    /**
     * ID of the video after which the photo in question shall be placed.
     */
    after_video_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoReportParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number,
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
     */
    reason?: number,
    /**
     * Comment describing the complaint.
     */
    comment?: string,
    /**
     * (If the video was found in search results.) Search query string.
     */
    search_query?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoReportCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number,
    /**
     * ID of the comment being reported.
     */
    comment_id: number,
    /**
     * Reason for the complaint: , 0 – spam , 1 – child pornography , 2 – extremism , 3 – violence , 4 – drug propaganda , 5 – adult material , 6 – insult, abuse
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoRestoreParams {
    /**
     * Video ID.
     */
    video_id: number,
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoRestoreCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number,
    /**
     * ID of the deleted comment.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoSaveParams {
    /**
     * Name of the video.
     */
    name?: string,
    /**
     * Description of the video.
     */
    description?: string,
    /**
     * '1' — to designate the video as private (send it via a private message), the video will not appear on the user's video list and will not be available by ID for other users, '0' — not to designate the video as private
     */
    is_private?: boolean,
    /**
     * '1' — to post the saved video on a user's wall, '0' — not to post the saved video on a user's wall
     */
    wallpost?: boolean,
    /**
     * URL for embedding the video from an external website.
     */
    link?: string,
    /**
     * ID of the community in which the video will be saved. By default, the current user's page.
     */
    group_id?: number,
    /**
     * ID of the album to which the saved video will be added.
     */
    album_id?: number,
    /**
     * undefined
     */
    privacy_view?: string[],
    /**
     * undefined
     */
    privacy_comment?: string[],
    /**
     * undefined
     */
    no_comments?: boolean,
    /**
     * '1' — to repeat the playback of the video, '0' — to play the video once,
     */
    repeat?: boolean,
    /**
     * undefined
     */
    compression?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface VideoSearchParams {
    /**
     * Search query string (e.g., 'The Beatles').
     */
    q: string,
    /**
     * Sort order: '1' — by duration, '2' — by relevance, '0' — by date added
     */
    sort?: number,
    /**
     * If not null, only searches for high-definition videos.
     */
    hd?: number,
    /**
     * '1' — to disable the Safe Search filter, '0' — to enable the Safe Search filter
     */
    adult?: boolean,
    /**
     * Filters to apply: 'youtube' — return YouTube videos only, 'vimeo' — return Vimeo videos only, 'short' — return short videos only, 'long' — return long videos only
     */
    filters?: string[],
    /**
     * undefined
     */
    search_own?: boolean,
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number,
    /**
     * undefined
     */
    longer?: number,
    /**
     * undefined
     */
    shorter?: number,
    /**
     * Number of videos to return.
     */
    count?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface WallCheckCopyrightLinkParams {
    /**
     * undefined
     */
    link: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallCloseCommentsParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    post_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallCreateCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID.
     */
    post_id: number,
    /**
     * Group ID.
     */
    from_group?: number,
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string,
    /**
     * ID of comment to reply.
     */
    reply_to_comment?: number,
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media ojbect: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media owner. '<media_id>' — Media ID. For example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * Sticker ID.
     */
    sticker_id?: number,
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallDeleteParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * ID of the post to be deleted.
     */
    post_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallDeleteCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * undefined
     */
    post_id: number,
    /**
     * undefined
     */
    friends_only?: boolean,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error is thrown."
     */
    attachments?: string[],
    /**
     * undefined
     */
    services?: string,
    /**
     * undefined
     */
    signed?: boolean,
    /**
     * undefined
     */
    publish_date?: number,
    /**
     * undefined
     */
    lat?: number,
    /**
     * undefined
     */
    long?: number,
    /**
     * undefined
     */
    place_id?: number,
    /**
     * undefined
     */
    mark_as_ads?: boolean,
    /**
     * undefined
     */
    close_comments?: boolean,
    /**
     * undefined
     */
    donut_paid_duration?: number,
    /**
     * undefined
     */
    poster_bkg_id?: number,
    /**
     * undefined
     */
    poster_bkg_owner_id?: number,
    /**
     * undefined
     */
    poster_bkg_access_hash?: string,
    /**
     * undefined
     */
    copyright?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallEditAdsStealthParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID. Used for publishing of scheduled and suggested posts.
     */
    post_id: number,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[],
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
     */
    signed?: boolean,
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number,
    /**
     * Link button ID
     */
    link_button?: string,
    /**
     * Link title
     */
    link_title?: string,
    /**
     * Link image url
     */
    link_image?: string,
    /**
     * Link video ID in format "<owner_id>_<media_id>"
     */
    link_video?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallEditCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format: , "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, '<owner_id>' — ID of the media attachment owner. '<media_id>' — Media attachment ID. For example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    access_token?: string
}

export interface WallGetParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * User or community short address.
     */
    domain?: string,
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number,
    /**
     * Number of posts to return (maximum 100).
     */
    count?: number,
    /**
     * Filter to apply: 'owner' — posts by the wall owner, 'others' — posts by someone else, 'all' — posts by the wall owner and others (default), 'postponed' — timed posts (only available for calls with an 'access_token'), 'suggests' — suggested posts on a community wall
     */
    filter?: string,
    /**
     * '1' — to return 'wall', 'profiles', and 'groups' fields, '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface WallGetByIdParams {
    /**
     * User or community IDs and post IDs, separated by underscores. Use a negative value to designate a community ID. Example: "93388_21539,93388_20904,2943_4276,-1_1"
     */
    posts: string[],
    /**
     * '1' — to return user and community objects needed to display posts, '0' — no additional fields are returned (default)
     */
    extended?: boolean,
    /**
     * Sets the number of parent elements to include in the array 'copy_history' that is returned if the post is a repost from another wall.
     */
    copy_history_depth?: number,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface WallGetCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface WallGetCommentsParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID.
     */
    post_id?: number,
    /**
     * '1' — to return the 'likes' field, '0' — not to return the 'likes' field (default)
     */
    need_likes?: boolean,
    /**
     * undefined
     */
    start_comment_id?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return (maximum 100).
     */
    count?: number,
    /**
     * Sort order: 'asc' — chronological, 'desc' — reverse chronological
     */
    sort?: string,
    /**
     * Number of characters at which to truncate comments when previewed. By default, '90'. Specify '0' if you do not want to truncate comments.
     */
    preview_length?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * Comment ID.
     */
    comment_id?: number,
    /**
     * Count items in threads.
     */
    thread_items_count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallGetRepostsParams {
    /**
     * User ID or community ID. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID.
     */
    post_id?: number,
    /**
     * Offset needed to return a specific subset of reposts.
     */
    offset?: number,
    /**
     * Number of reposts to return.
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallOpenCommentsParams {
    /**
     * undefined
     */
    owner_id: number,
    /**
     * undefined
     */
    post_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallPinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID.
     */
    post_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallPostParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * '1' — post will be available to friends only, '0' — post will be available to all users (default)
     */
    friends_only?: boolean,
    /**
     * For a community: '1' — post will be published by the community, '0' — post will be published by the user (default)
     */
    from_group?: boolean,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[],
    /**
     * List of services or websites the update will be exported to, if the user has so requested. Sample values: 'twitter', 'facebook'.
     */
    services?: string,
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
     */
    signed?: boolean,
    /**
     * Publication date (in Unix time). If used, posting will be delayed until the set time.
     */
    publish_date?: number,
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number,
    /**
     * Post ID. Used for publishing of scheduled and suggested posts.
     */
    post_id?: number,
    /**
     * undefined
     */
    guid?: string,
    /**
     * undefined
     */
    mark_as_ads?: boolean,
    /**
     * undefined
     */
    close_comments?: boolean,
    /**
     * undefined
     */
    donut_paid_duration?: number,
    /**
     * undefined
     */
    mute_notifications?: boolean,
    /**
     * undefined
     */
    copyright?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallPostAdsStealthParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id: number,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' — Type of media attachment: 'photo' — photo, 'video' — video, 'audio' — audio, 'doc' — document, 'page' — wiki-page, 'note' — note, 'poll' — poll, 'album' — photo album, '<owner_id>' — ID of the media application owner. '<media_id>' — Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[],
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' — post will be signed with the name of the posting user, '0' — post will not be signed (default)
     */
    signed?: boolean,
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number,
    /**
     * Unique identifier to avoid duplication the same post.
     */
    guid?: string,
    /**
     * Link button ID
     */
    link_button?: string,
    /**
     * Link title
     */
    link_title?: string,
    /**
     * Link image url
     */
    link_image?: string,
    /**
     * Link video ID in format "<owner_id>_<media_id>"
     */
    link_video?: string,
    /**
     * access token
     */
    access_token?: string
}

export interface WallReportCommentParams {
    /**
     * ID of the user or community that owns the wall.
     */
    owner_id: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallReportPostParams {
    /**
     * ID of the user or community that owns the wall.
     */
    owner_id: number,
    /**
     * Post ID.
     */
    post_id: number,
    /**
     * Reason for the complaint: '0' – spam, '1' – child pornography, '2' – extremism, '3' – violence, '4' – drug propaganda, '5' – adult material, '6' – insult, abuse
     */
    reason?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallRepostParams {
    /**
     * ID of the object to be reposted on the wall. Example: "wall66748_3675"
     */
    object: string,
    /**
     * Comment to be added along with the reposted object.
     */
    message?: string,
    /**
     * Target community ID when reposting to a community.
     */
    group_id?: number,
    /**
     * undefined
     */
    mark_as_ads?: boolean,
    /**
     * undefined
     */
    mute_notifications?: boolean,
    /**
     * access token
     */
    access_token?: string
}

export interface WallRestoreParams {
    /**
     * User ID or community ID from whose wall the post was deleted. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * ID of the post to be restored.
     */
    post_id?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallRestoreCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Comment ID.
     */
    comment_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WallSearchParams {
    /**
     * user or community id. "Remember that for a community 'owner_id' must be negative."
     */
    owner_id?: number,
    /**
     * user or community screen name.
     */
    domain?: string,
    /**
     * search query string.
     */
    query?: string,
    /**
     * '1' – returns only page owner's posts.
     */
    owners_only?: boolean,
    /**
     * count of posts to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number,
    /**
     * show extended post info.
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: Models.BaseUserGroupFields[],
    /**
     * access token
     */
    access_token?: string
}

export interface WallUnpinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number,
    /**
     * Post ID.
     */
    post_id: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WidgetsGetCommentsParams {
    /**
     * undefined
     */
    widget_api_id?: number,
    /**
     * undefined
     */
    url?: string,
    /**
     * undefined
     */
    page_id?: string,
    /**
     * undefined
     */
    order?: string,
    /**
     * undefined
     */
    fields?: Models.UsersFields[],
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}

export interface WidgetsGetPagesParams {
    /**
     * undefined
     */
    widget_api_id?: number,
    /**
     * undefined
     */
    order?: string,
    /**
     * undefined
     */
    period?: string,
    /**
     * undefined
     */
    offset?: number,
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    access_token?: string
}