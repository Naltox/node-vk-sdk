import * as Models from './Models'

export class AccountBanUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountBanUserResponse}
     */
    static deserialize(raw: Object): AccountBanUserResponse {
        return new AccountBanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountChangePasswordResponse {
    /**
     * @class
     * @property {string} token New token
     * @property {string} secret New secret
     */
    constructor (
        readonly token: string,
        readonly secret: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountChangePasswordResponse}
     */
    static deserialize(raw: Object): AccountChangePasswordResponse {
        return new AccountChangePasswordResponse (
            raw['token'],
            raw['secret']
        )
    }
}

export class AccountGetActiveOffersResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AccountOffer[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AccountOffer[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetActiveOffersResponse}
     */
    static deserialize(raw: Object): AccountGetActiveOffersResponse {
        return new AccountGetActiveOffersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AccountOffer.deserialize(v) : undefined) : undefined
        )
    }
}

export class AccountGetAppPermissionsResponse {
    /**
     * @class
     * @property {number} response Permissions mask
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetAppPermissionsResponse}
     */
    static deserialize(raw: Object): AccountGetAppPermissionsResponse {
        return new AccountGetAppPermissionsResponse (
            raw['response']
        )
    }
}

export class AccountGetBannedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserMin[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetBannedResponse}
     */
    static deserialize(raw: Object): AccountGetBannedResponse {
        return new AccountGetBannedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class AccountGetCountersResponse {
    /**
     * @class
     * @property {Models.AccountAccountCounters|undefined} response
     */
    constructor (
        readonly response: Models.AccountAccountCounters|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetCountersResponse}
     */
    static deserialize(raw: Object): AccountGetCountersResponse {
        return new AccountGetCountersResponse (
            raw['response'] ? Models.AccountAccountCounters.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountGetInfoResponse {
    /**
     * @class
     * @property {Models.AccountInfo|undefined} response
     */
    constructor (
        readonly response: Models.AccountInfo|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetInfoResponse}
     */
    static deserialize(raw: Object): AccountGetInfoResponse {
        return new AccountGetInfoResponse (
            raw['response'] ? Models.AccountInfo.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountGetProfileInfoResponse {
    /**
     * @class
     * @property {Models.AccountUserSettings|undefined} response
     */
    constructor (
        readonly response: Models.AccountUserSettings|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetProfileInfoResponse}
     */
    static deserialize(raw: Object): AccountGetProfileInfoResponse {
        return new AccountGetProfileInfoResponse (
            raw['response'] ? Models.AccountUserSettings.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountGetPushSettingsResponse {
    /**
     * @class
     * @property {Models.AccountPushSettings|undefined} response
     */
    constructor (
        readonly response: Models.AccountPushSettings|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountGetPushSettingsResponse}
     */
    static deserialize(raw: Object): AccountGetPushSettingsResponse {
        return new AccountGetPushSettingsResponse (
            raw['response'] ? Models.AccountPushSettings.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountLookupContactsResponse {
    /**
     * @class
     * @property {Models.AccountLookupResult|undefined} response
     */
    constructor (
        readonly response: Models.AccountLookupResult|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountLookupContactsResponse}
     */
    static deserialize(raw: Object): AccountLookupContactsResponse {
        return new AccountLookupContactsResponse (
            raw['response'] ? Models.AccountLookupResult.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountRegisterDeviceResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountRegisterDeviceResponse}
     */
    static deserialize(raw: Object): AccountRegisterDeviceResponse {
        return new AccountRegisterDeviceResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSaveProfileInfoResponse {
    /**
     * @class
     * @property {boolean} changed 1 if changes has been processed
     * @property {Models.AccountNameRequest|undefined} nameRequest
     */
    constructor (
        readonly changed: boolean,
        readonly nameRequest: Models.AccountNameRequest|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSaveProfileInfoResponse}
     */
    static deserialize(raw: Object): AccountSaveProfileInfoResponse {
        return new AccountSaveProfileInfoResponse (
            !!raw['changed'],
            raw['name_request'] ? Models.AccountNameRequest.deserialize(raw['name_request']) : undefined
        )
    }
}

export class AccountSetInfoResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetInfoResponse}
     */
    static deserialize(raw: Object): AccountSetInfoResponse {
        return new AccountSetInfoResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSetNameInMenuResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetNameInMenuResponse}
     */
    static deserialize(raw: Object): AccountSetNameInMenuResponse {
        return new AccountSetNameInMenuResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSetOnlineResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetOnlineResponse}
     */
    static deserialize(raw: Object): AccountSetOnlineResponse {
        return new AccountSetOnlineResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSetOfflineResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetOfflineResponse}
     */
    static deserialize(raw: Object): AccountSetOfflineResponse {
        return new AccountSetOfflineResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSetPushSettingsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetPushSettingsResponse}
     */
    static deserialize(raw: Object): AccountSetPushSettingsResponse {
        return new AccountSetPushSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountSetSilenceModeResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountSetSilenceModeResponse}
     */
    static deserialize(raw: Object): AccountSetSilenceModeResponse {
        return new AccountSetSilenceModeResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountUnbanUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountUnbanUserResponse}
     */
    static deserialize(raw: Object): AccountUnbanUserResponse {
        return new AccountUnbanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AccountUnregisterDeviceResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AccountUnregisterDeviceResponse}
     */
    static deserialize(raw: Object): AccountUnregisterDeviceResponse {
        return new AccountUnregisterDeviceResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsAddOfficeUsersResponse {
    /**
     * @class
     * @property {boolean} response true if success
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsAddOfficeUsersResponse}
     */
    static deserialize(raw: Object): AdsAddOfficeUsersResponse {
        return new AdsAddOfficeUsersResponse (
            raw['response']
        )
    }
}

export class AdsCheckLinkResponse {
    /**
     * @class
     * @property {Models.AdsLinkStatus|undefined} response
     */
    constructor (
        readonly response: Models.AdsLinkStatus|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCheckLinkResponse}
     */
    static deserialize(raw: Object): AdsCheckLinkResponse {
        return new AdsCheckLinkResponse (
            raw['response'] ? Models.AdsLinkStatus.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsCreateAdsResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCreateAdsResponse}
     */
    static deserialize(raw: Object): AdsCreateAdsResponse {
        return new AdsCreateAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AdsCreateCampaignsResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCreateCampaignsResponse}
     */
    static deserialize(raw: Object): AdsCreateCampaignsResponse {
        return new AdsCreateCampaignsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AdsCreateClientsResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCreateClientsResponse}
     */
    static deserialize(raw: Object): AdsCreateClientsResponse {
        return new AdsCreateClientsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AdsCreateTargetGroupResponse {
    /**
     * @class
     * @property {number} id Group ID
     * @property {string} pixel Pixel code
     */
    constructor (
        readonly id: number,
        readonly pixel: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsCreateTargetGroupResponse}
     */
    static deserialize(raw: Object): AdsCreateTargetGroupResponse {
        return new AdsCreateTargetGroupResponse (
            raw['id'],
            raw['pixel']
        )
    }
}

export class AdsDeleteAdsResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsDeleteAdsResponse}
     */
    static deserialize(raw: Object): AdsDeleteAdsResponse {
        return new AdsDeleteAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AdsDeleteCampaignsResponse {
    /**
     * @class
     * @property {number} response 0 if success
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsDeleteCampaignsResponse}
     */
    static deserialize(raw: Object): AdsDeleteCampaignsResponse {
        return new AdsDeleteCampaignsResponse (
            raw['response']
        )
    }
}

export class AdsDeleteClientsResponse {
    /**
     * @class
     * @property {number} response 0 if sucess
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsDeleteClientsResponse}
     */
    static deserialize(raw: Object): AdsDeleteClientsResponse {
        return new AdsDeleteClientsResponse (
            raw['response']
        )
    }
}

export class AdsDeleteTargetGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsDeleteTargetGroupResponse}
     */
    static deserialize(raw: Object): AdsDeleteTargetGroupResponse {
        return new AdsDeleteTargetGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsGetAccountsResponse {
    /**
     * @class
     * @property {Models.AdsAccount[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsAccount[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetAccountsResponse}
     */
    static deserialize(raw: Object): AdsGetAccountsResponse {
        return new AdsGetAccountsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAccount.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetAdsResponse {
    /**
     * @class
     * @property {Models.AdsAd[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsAd[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetAdsResponse}
     */
    static deserialize(raw: Object): AdsGetAdsResponse {
        return new AdsGetAdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAd.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetAdsLayoutResponse {
    /**
     * @class
     * @property {Models.AdsAdLayout[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsAdLayout[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetAdsLayoutResponse}
     */
    static deserialize(raw: Object): AdsGetAdsLayoutResponse {
        return new AdsGetAdsLayoutResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAdLayout.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetAdsPostsReachResponse {
    /**
     * @class
     * @property {Models.AdsPostStats[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsPostStats[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetAdsPostsReachResponse}
     */
    static deserialize(raw: Object): AdsGetAdsPostsReachResponse {
        return new AdsGetAdsPostsReachResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsPostStats.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetAdsTargetingResponse {
    /**
     * @class
     * @property {Models.AdsTargSettings[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargSettings[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetAdsTargetingResponse}
     */
    static deserialize(raw: Object): AdsGetAdsTargetingResponse {
        return new AdsGetAdsTargetingResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSettings.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetBudgetResponse {
    /**
     * @class
     * @property {number} response Budget
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetBudgetResponse}
     */
    static deserialize(raw: Object): AdsGetBudgetResponse {
        return new AdsGetBudgetResponse (
            raw['response']
        )
    }
}

export class AdsGetCampaignsResponse {
    /**
     * @class
     * @property {Models.AdsCampaign[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsCampaign[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetCampaignsResponse}
     */
    static deserialize(raw: Object): AdsGetCampaignsResponse {
        return new AdsGetCampaignsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsCampaign.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetCategoriesResponse {
    /**
     * @class
     * @property {Models.AdsCategory[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsCategory[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetCategoriesResponse}
     */
    static deserialize(raw: Object): AdsGetCategoriesResponse {
        return new AdsGetCategoriesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsCategory.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetClientsResponse {
    /**
     * @class
     * @property {Models.AdsClient[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsClient[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetClientsResponse}
     */
    static deserialize(raw: Object): AdsGetClientsResponse {
        return new AdsGetClientsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsClient.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetDemographicsResponse {
    /**
     * @class
     * @property {Models.AdsDemoStats[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsDemoStats[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetDemographicsResponse}
     */
    static deserialize(raw: Object): AdsGetDemographicsResponse {
        return new AdsGetDemographicsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsDemoStats.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetFloodStatsResponse {
    /**
     * @class
     * @property {Models.AdsFloodStats|undefined} response
     */
    constructor (
        readonly response: Models.AdsFloodStats|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetFloodStatsResponse}
     */
    static deserialize(raw: Object): AdsGetFloodStatsResponse {
        return new AdsGetFloodStatsResponse (
            raw['response'] ? Models.AdsFloodStats.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsGetOfficeUsersResponse {
    /**
     * @class
     * @property {Models.AdsUsers[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsUsers[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetOfficeUsersResponse}
     */
    static deserialize(raw: Object): AdsGetOfficeUsersResponse {
        return new AdsGetOfficeUsersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsUsers.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetRejectionReasonResponse {
    /**
     * @class
     * @property {Models.AdsRejectReason|undefined} response
     */
    constructor (
        readonly response: Models.AdsRejectReason|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetRejectionReasonResponse}
     */
    static deserialize(raw: Object): AdsGetRejectionReasonResponse {
        return new AdsGetRejectionReasonResponse (
            raw['response'] ? Models.AdsRejectReason.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsGetStatisticsResponse {
    /**
     * @class
     * @property {Models.AdsStats[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsStats[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetStatisticsResponse}
     */
    static deserialize(raw: Object): AdsGetStatisticsResponse {
        return new AdsGetStatisticsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsStats.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetSuggestionsResponse {
    /**
     * @class
     * @property {Models.AdsTargSuggestions[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargSuggestions[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetSuggestionsResponse}
     */
    static deserialize(raw: Object): AdsGetSuggestionsResponse {
        return new AdsGetSuggestionsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestions.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetSuggestionsRegionsResponse {
    /**
     * @class
     * @property {Models.AdsTargSuggestionsRegions[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargSuggestionsRegions[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetSuggestionsRegionsResponse}
     */
    static deserialize(raw: Object): AdsGetSuggestionsRegionsResponse {
        return new AdsGetSuggestionsRegionsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsRegions.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetSuggestionsCitiesResponse {
    /**
     * @class
     * @property {Models.AdsTargSuggestionsCities[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargSuggestionsCities[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetSuggestionsCitiesResponse}
     */
    static deserialize(raw: Object): AdsGetSuggestionsCitiesResponse {
        return new AdsGetSuggestionsCitiesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsCities.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetSuggestionsSchoolsResponse {
    /**
     * @class
     * @property {Models.AdsTargSuggestionsSchools[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargSuggestionsSchools[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetSuggestionsSchoolsResponse}
     */
    static deserialize(raw: Object): AdsGetSuggestionsSchoolsResponse {
        return new AdsGetSuggestionsSchoolsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsSchools.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetTargetGroupsResponse {
    /**
     * @class
     * @property {Models.AdsTargetGroup[]|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargetGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetTargetGroupsResponse}
     */
    static deserialize(raw: Object): AdsGetTargetGroupsResponse {
        return new AdsGetTargetGroupsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargetGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class AdsGetTargetingStatsResponse {
    /**
     * @class
     * @property {Models.AdsTargStats|undefined} response
     */
    constructor (
        readonly response: Models.AdsTargStats|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetTargetingStatsResponse}
     */
    static deserialize(raw: Object): AdsGetTargetingStatsResponse {
        return new AdsGetTargetingStatsResponse (
            raw['response'] ? Models.AdsTargStats.deserialize(raw['response']) : undefined
        )
    }
}

export class AdsGetUploadURLResponse {
    /**
     * @class
     * @property {string} response Photo upload URL
     */
    constructor (
        readonly response: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetUploadURLResponse}
     */
    static deserialize(raw: Object): AdsGetUploadURLResponse {
        return new AdsGetUploadURLResponse (
            raw['response']
        )
    }
}

export class AdsGetVideoUploadURLResponse {
    /**
     * @class
     * @property {string} response Video upload URL
     */
    constructor (
        readonly response: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsGetVideoUploadURLResponse}
     */
    static deserialize(raw: Object): AdsGetVideoUploadURLResponse {
        return new AdsGetVideoUploadURLResponse (
            raw['response']
        )
    }
}

export class AdsImportTargetContactsResponse {
    /**
     * @class
     * @property {number} response Imported contacts number
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsImportTargetContactsResponse}
     */
    static deserialize(raw: Object): AdsImportTargetContactsResponse {
        return new AdsImportTargetContactsResponse (
            raw['response']
        )
    }
}

export class AdsRemoveOfficeUsersResponse {
    /**
     * @class
     * @property {boolean} response true if success
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsRemoveOfficeUsersResponse}
     */
    static deserialize(raw: Object): AdsRemoveOfficeUsersResponse {
        return new AdsRemoveOfficeUsersResponse (
            raw['response']
        )
    }
}

export class AdsUpdateAdsResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsUpdateAdsResponse}
     */
    static deserialize(raw: Object): AdsUpdateAdsResponse {
        return new AdsUpdateAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AdsUpdateCampaignsResponse {
    /**
     * @class
     * @property {number} response Campaign ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsUpdateCampaignsResponse}
     */
    static deserialize(raw: Object): AdsUpdateCampaignsResponse {
        return new AdsUpdateCampaignsResponse (
            raw['response']
        )
    }
}

export class AdsUpdateClientsResponse {
    /**
     * @class
     * @property {number} response Client ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsUpdateClientsResponse}
     */
    static deserialize(raw: Object): AdsUpdateClientsResponse {
        return new AdsUpdateClientsResponse (
            raw['response']
        )
    }
}

export class AdsUpdateTargetGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AdsUpdateTargetGroupResponse}
     */
    static deserialize(raw: Object): AdsUpdateTargetGroupResponse {
        return new AdsUpdateTargetGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AppsGetCatalogResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AppsApp[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AppsApp[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetCatalogResponse}
     */
    static deserialize(raw: Object): AppsGetCatalogResponse {
        return new AppsGetCatalogResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsApp.deserialize(v) : undefined) : undefined
        )
    }
}

export class AppsGetLeaderboardResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AppsLeaderboard[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AppsLeaderboard[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetLeaderboardResponse}
     */
    static deserialize(raw: Object): AppsGetLeaderboardResponse {
        return new AppsGetLeaderboardResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsLeaderboard.deserialize(v) : undefined) : undefined
        )
    }
}

export class AppsGetLeaderboardExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AppsLeaderboard[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     */
    constructor (
        readonly count: number,
        readonly items: Models.AppsLeaderboard[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetLeaderboardExtendedResponse}
     */
    static deserialize(raw: Object): AppsGetLeaderboardExtendedResponse {
        return new AppsGetLeaderboardExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsLeaderboard.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class AppsGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AppsApp[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AppsApp[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetResponse}
     */
    static deserialize(raw: Object): AppsGetResponse {
        return new AppsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsApp.deserialize(v) : undefined) : undefined
        )
    }
}

export class AppsGetScoreResponse {
    /**
     * @class
     * @property {number} response Score number
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetScoreResponse}
     */
    static deserialize(raw: Object): AppsGetScoreResponse {
        return new AppsGetScoreResponse (
            raw['response']
        )
    }
}

export class AppsSendRequestResponse {
    /**
     * @class
     * @property {number} response Request ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsSendRequestResponse}
     */
    static deserialize(raw: Object): AppsSendRequestResponse {
        return new AppsSendRequestResponse (
            raw['response']
        )
    }
}

export class AppsDeleteAppRequestsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsDeleteAppRequestsResponse}
     */
    static deserialize(raw: Object): AppsDeleteAppRequestsResponse {
        return new AppsDeleteAppRequestsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AppsGetFriendsListResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AppsGetFriendsListResponse}
     */
    static deserialize(raw: Object): AppsGetFriendsListResponse {
        return new AppsGetFriendsListResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AudioAudioFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetResponse}
     */
    static deserialize(raw: Object): AudioGetResponse {
        return new AudioGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetByIdResponse {
    /**
     * @class
     * @property {Models.AudioAudioFull[]|undefined} response
     */
    constructor (
        readonly response: Models.AudioAudioFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetByIdResponse}
     */
    static deserialize(raw: Object): AudioGetByIdResponse {
        return new AudioGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetLyricsResponse {
    /**
     * @class
     * @property {Models.AudioLyrics|undefined} response
     */
    constructor (
        readonly response: Models.AudioLyrics|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetLyricsResponse}
     */
    static deserialize(raw: Object): AudioGetLyricsResponse {
        return new AudioGetLyricsResponse (
            raw['response'] ? Models.AudioLyrics.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AudioAudioFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioSearchResponse}
     */
    static deserialize(raw: Object): AudioSearchResponse {
        return new AudioSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl URL to upload the audio
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetUploadServerResponse}
     */
    static deserialize(raw: Object): AudioGetUploadServerResponse {
        return new AudioGetUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class AudioSaveResponse {
    /**
     * @class
     * @property {Models.AudioAudio[]|undefined} response
     */
    constructor (
        readonly response: Models.AudioAudio[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioSaveResponse}
     */
    static deserialize(raw: Object): AudioSaveResponse {
        return new AudioSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudio.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioAddResponse {
    /**
     * @class
     * @property {number} response Audio ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioAddResponse}
     */
    static deserialize(raw: Object): AudioAddResponse {
        return new AudioAddResponse (
            raw['response']
        )
    }
}

export class AudioDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioDeleteResponse}
     */
    static deserialize(raw: Object): AudioDeleteResponse {
        return new AudioDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioEditResponse {
    /**
     * @class
     * @property {number} response Lyrics ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioEditResponse}
     */
    static deserialize(raw: Object): AudioEditResponse {
        return new AudioEditResponse (
            raw['response']
        )
    }
}

export class AudioReorderResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioReorderResponse}
     */
    static deserialize(raw: Object): AudioReorderResponse {
        return new AudioReorderResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioRestoreResponse}
     */
    static deserialize(raw: Object): AudioRestoreResponse {
        return new AudioRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioGetAlbumsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.AudioAudioAlbum[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioAlbum[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetAlbumsResponse}
     */
    static deserialize(raw: Object): AudioGetAlbumsResponse {
        return new AudioGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioAlbum.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioAddAlbumResponse {
    /**
     * @class
     * @property {number} albumId Created album ID
     */
    constructor (
        readonly albumId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioAddAlbumResponse}
     */
    static deserialize(raw: Object): AudioAddAlbumResponse {
        return new AudioAddAlbumResponse (
            raw['album_id']
        )
    }
}

export class AudioEditAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioEditAlbumResponse}
     */
    static deserialize(raw: Object): AudioEditAlbumResponse {
        return new AudioEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioDeleteAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioDeleteAlbumResponse}
     */
    static deserialize(raw: Object): AudioDeleteAlbumResponse {
        return new AudioDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioMoveToAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioMoveToAlbumResponse}
     */
    static deserialize(raw: Object): AudioMoveToAlbumResponse {
        return new AudioMoveToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AudioSetBroadcastResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioSetBroadcastResponse}
     */
    static deserialize(raw: Object): AudioSetBroadcastResponse {
        return new AudioSetBroadcastResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class AudioGetBroadcastListResponse {
    /**
     * @class
     * @property {Models.UsersUserBroadcast[]|undefined} response
     */
    constructor (
        readonly response: Models.UsersUserBroadcast[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetBroadcastListResponse}
     */
    static deserialize(raw: Object): AudioGetBroadcastListResponse {
        return new AudioGetBroadcastListResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.UsersUserBroadcast.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetRecommendationsResponse {
    /**
     * @class
     * @property {Models.AudioAudioFull[]|undefined} response
     */
    constructor (
        readonly response: Models.AudioAudioFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetRecommendationsResponse}
     */
    static deserialize(raw: Object): AudioGetRecommendationsResponse {
        return new AudioGetRecommendationsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetPopularResponse {
    /**
     * @class
     * @property {Models.AudioAudioFull[]|undefined} response
     */
    constructor (
        readonly response: Models.AudioAudioFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetPopularResponse}
     */
    static deserialize(raw: Object): AudioGetPopularResponse {
        return new AudioGetPopularResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class AudioGetCountResponse {
    /**
     * @class
     * @property {number} response Audios number
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AudioGetCountResponse}
     */
    static deserialize(raw: Object): AudioGetCountResponse {
        return new AudioGetCountResponse (
            raw['response']
        )
    }
}

export class AuthCheckPhoneResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AuthCheckPhoneResponse}
     */
    static deserialize(raw: Object): AuthCheckPhoneResponse {
        return new AuthCheckPhoneResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class AuthSignupResponse {
    /**
     * @class
     * @property {string} sid Parameter to retry
     */
    constructor (
        readonly sid: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AuthSignupResponse}
     */
    static deserialize(raw: Object): AuthSignupResponse {
        return new AuthSignupResponse (
            raw['sid']
        )
    }
}

export class AuthConfirmResponse {
    /**
     * @class
     * @property {number} success 1 if success
     * @property {number} userId User ID
     */
    constructor (
        readonly success: number,
        readonly userId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AuthConfirmResponse}
     */
    static deserialize(raw: Object): AuthConfirmResponse {
        return new AuthConfirmResponse (
            raw['success'],
            raw['user_id']
        )
    }
}

export class AuthRestoreResponse {
    /**
     * @class
     * @property {number} success 1 if success
     * @property {string} sid Parameter needed to grant access by code
     */
    constructor (
        readonly success: number,
        readonly sid: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {AuthRestoreResponse}
     */
    static deserialize(raw: Object): AuthRestoreResponse {
        return new AuthRestoreResponse (
            raw['success'],
            raw['sid']
        )
    }
}

export class BoardGetTopicsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BoardTopic[]|undefined} items
     * @property {Models.BoardDefaultOrder|undefined} defaultOrder
     * @property {boolean} canAddTopics Information whether current user can add topic
     */
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopic[]|undefined,
        readonly defaultOrder: Models.BoardDefaultOrder|undefined,
        readonly canAddTopics: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardGetTopicsResponse}
     */
    static deserialize(raw: Object): BoardGetTopicsResponse {
        return new BoardGetTopicsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BoardTopic.deserialize(v) : undefined) : undefined,
            raw['default_order'] ? Models.BoardDefaultOrder.deserialize(raw['default_order']) : undefined,
            !!raw['can_add_topics']
        )
    }
}

export class BoardGetTopicsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BoardTopic[]|undefined} items
     * @property {Models.BoardDefaultOrder|undefined} defaultOrder
     * @property {boolean} canAddTopics Information whether current user can add topic
     * @property {Models.UsersUserMin[]|undefined} profiles
     */
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopic[]|undefined,
        readonly defaultOrder: Models.BoardDefaultOrder|undefined,
        readonly canAddTopics: boolean,
        readonly profiles: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardGetTopicsExtendedResponse}
     */
    static deserialize(raw: Object): BoardGetTopicsExtendedResponse {
        return new BoardGetTopicsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BoardTopic.deserialize(v) : undefined) : undefined,
            raw['default_order'] ? Models.BoardDefaultOrder.deserialize(raw['default_order']) : undefined,
            !!raw['can_add_topics'],
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class BoardGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BoardTopicComment[]|undefined} items
     * @property {Models.BoardTopicPoll|undefined} poll
     */
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopicComment[]|undefined,
        readonly poll: Models.BoardTopicPoll|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardGetCommentsResponse}
     */
    static deserialize(raw: Object): BoardGetCommentsResponse {
        return new BoardGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BoardTopicComment.deserialize(v) : undefined) : undefined,
            raw['poll'] ? Models.BoardTopicPoll.deserialize(raw['poll']) : undefined
        )
    }
}

export class BoardGetCommentsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BoardTopicComment[]|undefined} items
     * @property {Models.BoardTopicPoll|undefined} poll
     * @property {Models.UsersUser[]|undefined} profiles
     * @property {Models.GroupsGroup[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopicComment[]|undefined,
        readonly poll: Models.BoardTopicPoll|undefined,
        readonly profiles: Models.UsersUser[]|undefined,
        readonly groups: Models.GroupsGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardGetCommentsExtendedResponse}
     */
    static deserialize(raw: Object): BoardGetCommentsExtendedResponse {
        return new BoardGetCommentsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BoardTopicComment.deserialize(v) : undefined) : undefined,
            raw['poll'] ? Models.BoardTopicPoll.deserialize(raw['poll']) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUser.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class BoardAddTopicResponse {
    /**
     * @class
     * @property {number} response Topic ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardAddTopicResponse}
     */
    static deserialize(raw: Object): BoardAddTopicResponse {
        return new BoardAddTopicResponse (
            raw['response']
        )
    }
}

export class BoardCreateCommentResponse {
    /**
     * @class
     * @property {number} response Comment ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardCreateCommentResponse}
     */
    static deserialize(raw: Object): BoardCreateCommentResponse {
        return new BoardCreateCommentResponse (
            raw['response']
        )
    }
}

export class BoardDeleteTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardDeleteTopicResponse}
     */
    static deserialize(raw: Object): BoardDeleteTopicResponse {
        return new BoardDeleteTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardEditTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardEditTopicResponse}
     */
    static deserialize(raw: Object): BoardEditTopicResponse {
        return new BoardEditTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardEditCommentResponse}
     */
    static deserialize(raw: Object): BoardEditCommentResponse {
        return new BoardEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardRestoreCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardRestoreCommentResponse}
     */
    static deserialize(raw: Object): BoardRestoreCommentResponse {
        return new BoardRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardDeleteCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardDeleteCommentResponse}
     */
    static deserialize(raw: Object): BoardDeleteCommentResponse {
        return new BoardDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardOpenTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardOpenTopicResponse}
     */
    static deserialize(raw: Object): BoardOpenTopicResponse {
        return new BoardOpenTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardCloseTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardCloseTopicResponse}
     */
    static deserialize(raw: Object): BoardCloseTopicResponse {
        return new BoardCloseTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardFixTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardFixTopicResponse}
     */
    static deserialize(raw: Object): BoardFixTopicResponse {
        return new BoardFixTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class BoardUnfixTopicResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {BoardUnfixTopicResponse}
     */
    static deserialize(raw: Object): BoardUnfixTopicResponse {
        return new BoardUnfixTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class DatabaseGetCountriesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BaseCountry[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.BaseCountry[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetCountriesResponse}
     */
    static deserialize(raw: Object): DatabaseGetCountriesResponse {
        return new DatabaseGetCountriesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BaseCountry.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetRegionsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DatabaseRegion[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseRegion[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetRegionsResponse}
     */
    static deserialize(raw: Object): DatabaseGetRegionsResponse {
        return new DatabaseGetRegionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseRegion.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetStreetsByIdResponse {
    /**
     * @class
     * @property {Models.DatabaseStreet[]|undefined} response
     */
    constructor (
        readonly response: Models.DatabaseStreet[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetStreetsByIdResponse}
     */
    static deserialize(raw: Object): DatabaseGetStreetsByIdResponse {
        return new DatabaseGetStreetsByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DatabaseStreet.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetCountriesByIdResponse {
    /**
     * @class
     * @property {Models.BaseCountry[]|undefined} response
     */
    constructor (
        readonly response: Models.BaseCountry[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetCountriesByIdResponse}
     */
    static deserialize(raw: Object): DatabaseGetCountriesByIdResponse {
        return new DatabaseGetCountriesByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.BaseCountry.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetChairsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.BaseObject[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.BaseObject[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetChairsResponse}
     */
    static deserialize(raw: Object): DatabaseGetChairsResponse {
        return new DatabaseGetChairsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BaseObject.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetCitiesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DatabaseCity[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseCity[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetCitiesResponse}
     */
    static deserialize(raw: Object): DatabaseGetCitiesResponse {
        return new DatabaseGetCitiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseCity.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetCitiesByIdResponse {
    /**
     * @class
     * @property {Models.BaseObject[]|undefined} response
     */
    constructor (
        readonly response: Models.BaseObject[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetCitiesByIdResponse}
     */
    static deserialize(raw: Object): DatabaseGetCitiesByIdResponse {
        return new DatabaseGetCitiesByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.BaseObject.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetUniversitiesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DatabaseUniversity[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseUniversity[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetUniversitiesResponse}
     */
    static deserialize(raw: Object): DatabaseGetUniversitiesResponse {
        return new DatabaseGetUniversitiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseUniversity.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetSchoolsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DatabaseSchool[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseSchool[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetSchoolsResponse}
     */
    static deserialize(raw: Object): DatabaseGetSchoolsResponse {
        return new DatabaseGetSchoolsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseSchool.deserialize(v) : undefined) : undefined
        )
    }
}

export class DatabaseGetSchoolClassesResponse {
    /**
     * @class
     * @property {any[][]|undefined} response
     */
    constructor (
        readonly response: any[][]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetSchoolClassesResponse}
     */
    static deserialize(raw: Object): DatabaseGetSchoolClassesResponse {
        return new DatabaseGetSchoolClassesResponse (
            raw['response'] ? raw['response'].map(v => v ? v.map(v => v) : undefined) : undefined
        )
    }
}

export class DatabaseGetFacultiesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DatabaseFaculty[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseFaculty[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DatabaseGetFacultiesResponse}
     */
    static deserialize(raw: Object): DatabaseGetFacultiesResponse {
        return new DatabaseGetFacultiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseFaculty.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DocsDoc[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DocsDoc[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsGetResponse}
     */
    static deserialize(raw: Object): DocsGetResponse {
        return new DocsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsGetByIdResponse {
    /**
     * @class
     * @property {Models.DocsDoc[]|undefined} response
     */
    constructor (
        readonly response: Models.DocsDoc[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsGetByIdResponse}
     */
    static deserialize(raw: Object): DocsGetByIdResponse {
        return new DocsGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsGetUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl Upload URL
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsGetUploadServerResponse}
     */
    static deserialize(raw: Object): DocsGetUploadServerResponse {
        return new DocsGetUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class DocsGetWallUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl Upload URL
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsGetWallUploadServerResponse}
     */
    static deserialize(raw: Object): DocsGetWallUploadServerResponse {
        return new DocsGetWallUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class DocsSaveResponse {
    /**
     * @class
     * @property {Models.DocsDoc[]|undefined} response
     */
    constructor (
        readonly response: Models.DocsDoc[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsSaveResponse}
     */
    static deserialize(raw: Object): DocsSaveResponse {
        return new DocsSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsDeleteResponse}
     */
    static deserialize(raw: Object): DocsDeleteResponse {
        return new DocsDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class DocsAddResponse {
    /**
     * @class
     * @property {number} id Doc ID
     */
    constructor (
        readonly id: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsAddResponse}
     */
    static deserialize(raw: Object): DocsAddResponse {
        return new DocsAddResponse (
            raw['id']
        )
    }
}

export class DocsGetTypesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DocsDocTypes[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DocsDocTypes[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsGetTypesResponse}
     */
    static deserialize(raw: Object): DocsGetTypesResponse {
        return new DocsGetTypesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDocTypes.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.DocsDoc[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.DocsDoc[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsSearchResponse}
     */
    static deserialize(raw: Object): DocsSearchResponse {
        return new DocsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}

export class DocsEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {DocsEditResponse}
     */
    static deserialize(raw: Object): DocsEditResponse {
        return new DocsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveGetUsersResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserMin[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetUsersResponse}
     */
    static deserialize(raw: Object): FaveGetUsersResponse {
        return new FaveGetUsersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveGetPhotosResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhoto[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetPhotosResponse}
     */
    static deserialize(raw: Object): FaveGetPhotosResponse {
        return new FaveGetPhotosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveGetPostsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetPostsResponse}
     */
    static deserialize(raw: Object): FaveGetPostsResponse {
        return new FaveGetPostsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveGetVideosResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetVideosResponse}
     */
    static deserialize(raw: Object): FaveGetVideosResponse {
        return new FaveGetVideosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveGetLinksResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.FaveFavesLink[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.FaveFavesLink[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetLinksResponse}
     */
    static deserialize(raw: Object): FaveGetLinksResponse {
        return new FaveGetLinksResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FaveFavesLink.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveGetMarketItemsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItem[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveGetMarketItemsResponse}
     */
    static deserialize(raw: Object): FaveGetMarketItemsResponse {
        return new FaveGetMarketItemsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class FaveAddUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveAddUserResponse}
     */
    static deserialize(raw: Object): FaveAddUserResponse {
        return new FaveAddUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveRemoveUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveRemoveUserResponse}
     */
    static deserialize(raw: Object): FaveRemoveUserResponse {
        return new FaveRemoveUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveAddGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveAddGroupResponse}
     */
    static deserialize(raw: Object): FaveAddGroupResponse {
        return new FaveAddGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveRemoveGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveRemoveGroupResponse}
     */
    static deserialize(raw: Object): FaveRemoveGroupResponse {
        return new FaveRemoveGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveAddLinkResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveAddLinkResponse}
     */
    static deserialize(raw: Object): FaveAddLinkResponse {
        return new FaveAddLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FaveRemoveLinkResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FaveRemoveLinkResponse}
     */
    static deserialize(raw: Object): FaveRemoveLinkResponse {
        return new FaveRemoveLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FriendsGetResponse {
    /**
     * @class
     * @property {number} count Total friends number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetResponse}
     */
    static deserialize(raw: Object): FriendsGetResponse {
        return new FriendsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class FriendsGetFieldsResponse {
    /**
     * @class
     * @property {number} count Total friends number
     * @property {Models.FriendsUserXtrLists[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.FriendsUserXtrLists[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetFieldsResponse}
     */
    static deserialize(raw: Object): FriendsGetFieldsResponse {
        return new FriendsGetFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsUserXtrLists.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsGetOnlineResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetOnlineResponse}
     */
    static deserialize(raw: Object): FriendsGetOnlineResponse {
        return new FriendsGetOnlineResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class FriendsGetOnlineOnlineMobileResponse {
    /**
     * @class
     * @property {number[]|undefined} online
     * @property {number[]|undefined} onlineMobile
     */
    constructor (
        readonly online: number[]|undefined,
        readonly onlineMobile: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetOnlineOnlineMobileResponse}
     */
    static deserialize(raw: Object): FriendsGetOnlineOnlineMobileResponse {
        return new FriendsGetOnlineOnlineMobileResponse (
            raw['online'] ? raw['online'].map(v => v) : undefined,
            raw['online_mobile'] ? raw['online_mobile'].map(v => v) : undefined
        )
    }
}

export class FriendsGetMutualResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetMutualResponse}
     */
    static deserialize(raw: Object): FriendsGetMutualResponse {
        return new FriendsGetMutualResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class FriendsGetRecentResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetRecentResponse}
     */
    static deserialize(raw: Object): FriendsGetRecentResponse {
        return new FriendsGetRecentResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class FriendsGetRequestsResponse {
    /**
     * @class
     * @property {number} count Total requests number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetRequestsResponse}
     */
    static deserialize(raw: Object): FriendsGetRequestsResponse {
        return new FriendsGetRequestsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class FriendsGetRequestsNeedMutualResponse {
    /**
     * @class
     * @property {number} count Total requests number
     * @property {Models.FriendsRequests[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.FriendsRequests[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetRequestsNeedMutualResponse}
     */
    static deserialize(raw: Object): FriendsGetRequestsNeedMutualResponse {
        return new FriendsGetRequestsNeedMutualResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsRequests.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsGetRequestsExtendedResponse {
    /**
     * @class
     * @property {number} count Total requests number
     * @property {Models.FriendsRequestsXtrMessage[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.FriendsRequestsXtrMessage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetRequestsExtendedResponse}
     */
    static deserialize(raw: Object): FriendsGetRequestsExtendedResponse {
        return new FriendsGetRequestsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsRequestsXtrMessage.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsAddResponse {
    /**
     * @class
     * @property {number} response Friend request status
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsAddResponse}
     */
    static deserialize(raw: Object): FriendsAddResponse {
        return new FriendsAddResponse (
            raw['response']
        )
    }
}

export class FriendsEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsEditResponse}
     */
    static deserialize(raw: Object): FriendsEditResponse {
        return new FriendsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FriendsDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} success
     * @property {number} friendDeleted Returns 1 if friend has been deleted
     * @property {number} outRequestDeleted Returns 1 if out request has been canceled
     * @property {number} inRequestDeleted Returns 1 if incoming request has been declined
     * @property {number} suggestionDeleted Returns 1 if suggestion has been declined
     */
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly friendDeleted: number,
        readonly outRequestDeleted: number,
        readonly inRequestDeleted: number,
        readonly suggestionDeleted: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsDeleteResponse}
     */
    static deserialize(raw: Object): FriendsDeleteResponse {
        return new FriendsDeleteResponse (
            raw['success'] ? Models.BaseOkResponse.deserialize(raw['success']) : undefined,
            raw['friend_deleted'],
            raw['out_request_deleted'],
            raw['in_request_deleted'],
            raw['suggestion_deleted']
        )
    }
}

export class FriendsGetListsResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.FriendsFriendsList[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.FriendsFriendsList[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetListsResponse}
     */
    static deserialize(raw: Object): FriendsGetListsResponse {
        return new FriendsGetListsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsFriendsList.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsAddListResponse {
    /**
     * @class
     * @property {number} listId List ID
     */
    constructor (
        readonly listId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsAddListResponse}
     */
    static deserialize(raw: Object): FriendsAddListResponse {
        return new FriendsAddListResponse (
            raw['list_id']
        )
    }
}

export class FriendsEditListResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsEditListResponse}
     */
    static deserialize(raw: Object): FriendsEditListResponse {
        return new FriendsEditListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FriendsDeleteListResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsDeleteListResponse}
     */
    static deserialize(raw: Object): FriendsDeleteListResponse {
        return new FriendsDeleteListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FriendsGetAppUsersResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetAppUsersResponse}
     */
    static deserialize(raw: Object): FriendsGetAppUsersResponse {
        return new FriendsGetAppUsersResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class FriendsGetByPhonesResponse {
    /**
     * @class
     * @property {Models.FriendsUserXtrPhone[]|undefined} response
     */
    constructor (
        readonly response: Models.FriendsUserXtrPhone[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetByPhonesResponse}
     */
    static deserialize(raw: Object): FriendsGetByPhonesResponse {
        return new FriendsGetByPhonesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.FriendsUserXtrPhone.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsDeleteAllRequestsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsDeleteAllRequestsResponse}
     */
    static deserialize(raw: Object): FriendsDeleteAllRequestsResponse {
        return new FriendsDeleteAllRequestsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class FriendsGetSuggestionsResponse {
    /**
     * @class
     * @property {number} count Total results number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetSuggestionsResponse}
     */
    static deserialize(raw: Object): FriendsGetSuggestionsResponse {
        return new FriendsGetSuggestionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsAreFriendsResponse {
    /**
     * @class
     * @property {Models.FriendsFriendStatus[]|undefined} response
     */
    constructor (
        readonly response: Models.FriendsFriendStatus[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsAreFriendsResponse}
     */
    static deserialize(raw: Object): FriendsAreFriendsResponse {
        return new FriendsAreFriendsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.FriendsFriendStatus.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsGetAvailableForCallResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetAvailableForCallResponse}
     */
    static deserialize(raw: Object): FriendsGetAvailableForCallResponse {
        return new FriendsGetAvailableForCallResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class FriendsGetAvailableForCallFieldsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsGetAvailableForCallFieldsResponse}
     */
    static deserialize(raw: Object): FriendsGetAvailableForCallFieldsResponse {
        return new FriendsGetAvailableForCallFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class FriendsSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {FriendsSearchResponse}
     */
    static deserialize(raw: Object): FriendsSearchResponse {
        return new FriendsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GiftsGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.GiftsGift[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GiftsGift[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GiftsGetResponse}
     */
    static deserialize(raw: Object): GiftsGetResponse {
        return new GiftsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GiftsGift.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsIsMemberResponse {
    /**
     * @class
     * @property {boolean} response Information whether user is a member of the group
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsIsMemberResponse}
     */
    static deserialize(raw: Object): GroupsIsMemberResponse {
        return new GroupsIsMemberResponse (
            !!raw['response']
        )
    }
}

export class GroupsIsMemberUserIdsResponse {
    /**
     * @class
     * @property {Models.GroupsMemberStatus[]|undefined} response
     */
    constructor (
        readonly response: Models.GroupsMemberStatus[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsIsMemberUserIdsResponse}
     */
    static deserialize(raw: Object): GroupsIsMemberUserIdsResponse {
        return new GroupsIsMemberUserIdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsMemberStatus.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsIsMemberExtendedResponse {
    /**
     * @class
     * @property {boolean} member Information whether user is a member of the group
     * @property {boolean} invitation Information whether user has been invited to the group
     * @property {boolean} request Information whether user has sent request to the group
     */
    constructor (
        readonly member: boolean,
        readonly invitation: boolean,
        readonly request: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsIsMemberExtendedResponse}
     */
    static deserialize(raw: Object): GroupsIsMemberExtendedResponse {
        return new GroupsIsMemberExtendedResponse (
            !!raw['member'],
            !!raw['invitation'],
            !!raw['request']
        )
    }
}

export class GroupsIsMemberUserIdsExtendedResponse {
    /**
     * @class
     * @property {Models.GroupsMemberStatusFull[]|undefined} response
     */
    constructor (
        readonly response: Models.GroupsMemberStatusFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsIsMemberUserIdsExtendedResponse}
     */
    static deserialize(raw: Object): GroupsIsMemberUserIdsExtendedResponse {
        return new GroupsIsMemberUserIdsExtendedResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsMemberStatusFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetByIdResponse {
    /**
     * @class
     * @property {Models.GroupsGroupFull[]|undefined} response
     */
    constructor (
        readonly response: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetByIdResponse}
     */
    static deserialize(raw: Object): GroupsGetByIdResponse {
        return new GroupsGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetCallbackConfirmationCodeResponse {
    /**
     * @class
     * @property {string} code Confirmation code
     */
    constructor (
        readonly code: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCallbackConfirmationCodeResponse}
     */
    static deserialize(raw: Object): GroupsGetCallbackConfirmationCodeResponse {
        return new GroupsGetCallbackConfirmationCodeResponse (
            raw['code']
        )
    }
}

export class GroupsGetCallbackServerSettingsResponse {
    /**
     * @class
     * @property {string} serverUrl Server URL
     * @property {string} secretKey Callback API secret key
     */
    constructor (
        readonly serverUrl: string,
        readonly secretKey: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCallbackServerSettingsResponse}
     */
    static deserialize(raw: Object): GroupsGetCallbackServerSettingsResponse {
        return new GroupsGetCallbackServerSettingsResponse (
            raw['server_url'],
            raw['secret_key']
        )
    }
}

export class GroupsGetCallbackSettingsResponse {
    /**
     * @class
     * @property {boolean} messageNew Whether notifications about new message enabled
     * @property {boolean} messageAllow Whether notifications about allowed messages enabled
     * @property {boolean} messageDeny Whether notifications about denied messages enabled
     * @property {boolean} photoNew Whether notifications about new photos enabled
     * @property {boolean} audioNew Whether notifications about new audios enabled
     * @property {boolean} videoNew Whether notifications about new videos enabled
     * @property {boolean} wallReplyNew Whether notifications about new wall replies enabled
     * @property {boolean} wallReplyEdit Whether notifications about wall replies edits enabled
     * @property {boolean} wallPostNew Whether notifications about new wall posts enabled
     * @property {boolean} boardPostNew Whether notifications about new board posts enabled
     * @property {boolean} boardPostEdit Whether notifications about board posts edits enabled
     * @property {boolean} boardPostRestore Whether notifications about board posts restores enabled
     * @property {boolean} boardPostDelete Whether notifications about board posts deleted enabled
     * @property {boolean} photoCommentNew Whether notifications about new photo comments enabled
     * @property {boolean} videoCommentNew Whether notifications about new video comments enabled
     * @property {boolean} marketCommentNew Whether notifications about new market comments enabled
     * @property {boolean} groupJoin Whether notifications about anyone joined the community enabled
     * @property {boolean} groupLeave Whether notifications about anyone left the community enabled
     */
    constructor (
        readonly messageNew: boolean,
        readonly messageAllow: boolean,
        readonly messageDeny: boolean,
        readonly photoNew: boolean,
        readonly audioNew: boolean,
        readonly videoNew: boolean,
        readonly wallReplyNew: boolean,
        readonly wallReplyEdit: boolean,
        readonly wallPostNew: boolean,
        readonly boardPostNew: boolean,
        readonly boardPostEdit: boolean,
        readonly boardPostRestore: boolean,
        readonly boardPostDelete: boolean,
        readonly photoCommentNew: boolean,
        readonly videoCommentNew: boolean,
        readonly marketCommentNew: boolean,
        readonly groupJoin: boolean,
        readonly groupLeave: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCallbackSettingsResponse}
     */
    static deserialize(raw: Object): GroupsGetCallbackSettingsResponse {
        return new GroupsGetCallbackSettingsResponse (
            !!raw['message_new'],
            !!raw['message_allow'],
            !!raw['message_deny'],
            !!raw['photo_new'],
            !!raw['audio_new'],
            !!raw['video_new'],
            !!raw['wall_reply_new'],
            !!raw['wall_reply_edit'],
            !!raw['wall_post_new'],
            !!raw['board_post_new'],
            !!raw['board_post_edit'],
            !!raw['board_post_restore'],
            !!raw['board_post_delete'],
            !!raw['photo_comment_new'],
            !!raw['video_comment_new'],
            !!raw['market_comment_new'],
            !!raw['group_join'],
            !!raw['group_leave']
        )
    }
}

export class GroupsSetCallbackServerResponse {
    /**
     * @class
     * @property {number} stateCode State code
     * @property {string} state State
     */
    constructor (
        readonly stateCode: number,
        readonly state: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsSetCallbackServerResponse}
     */
    static deserialize(raw: Object): GroupsSetCallbackServerResponse {
        return new GroupsSetCallbackServerResponse (
            raw['state_code'],
            raw['state']
        )
    }
}

export class GroupsSetCallbackServerSettingsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsSetCallbackServerSettingsResponse}
     */
    static deserialize(raw: Object): GroupsSetCallbackServerSettingsResponse {
        return new GroupsSetCallbackServerSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsSetCallbackSettingsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsSetCallbackSettingsResponse}
     */
    static deserialize(raw: Object): GroupsSetCallbackSettingsResponse {
        return new GroupsSetCallbackSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsGetResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetResponse}
     */
    static deserialize(raw: Object): GroupsGetResponse {
        return new GroupsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class GroupsGetExtendedResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.GroupsGroupFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetExtendedResponse}
     */
    static deserialize(raw: Object): GroupsGetExtendedResponse {
        return new GroupsGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetMembersResponse {
    /**
     * @class
     * @property {number} count Total members number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetMembersResponse}
     */
    static deserialize(raw: Object): GroupsGetMembersResponse {
        return new GroupsGetMembersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class GroupsGetMembersFieldsResponse {
    /**
     * @class
     * @property {number} count Total members number
     * @property {Models.GroupsUserXtrRole[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsUserXtrRole[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetMembersFieldsResponse}
     */
    static deserialize(raw: Object): GroupsGetMembersFieldsResponse {
        return new GroupsGetMembersFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsUserXtrRole.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetMembersFilterResponse {
    /**
     * @class
     * @property {number} count Total members number
     * @property {Models.GroupsMemberRole[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsMemberRole[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetMembersFilterResponse}
     */
    static deserialize(raw: Object): GroupsGetMembersFilterResponse {
        return new GroupsGetMembersFilterResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsMemberRole.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsJoinResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsJoinResponse}
     */
    static deserialize(raw: Object): GroupsJoinResponse {
        return new GroupsJoinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsLeaveResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsLeaveResponse}
     */
    static deserialize(raw: Object): GroupsLeaveResponse {
        return new GroupsLeaveResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsSearchResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.GroupsGroup[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsSearchResponse}
     */
    static deserialize(raw: Object): GroupsSearchResponse {
        return new GroupsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetCatalogResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.GroupsGroup[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCatalogResponse}
     */
    static deserialize(raw: Object): GroupsGetCatalogResponse {
        return new GroupsGetCatalogResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetCatalogInfoResponse {
    /**
     * @class
     * @property {number} enabled Information whether catalog is enabled for current user
     * @property {Models.GroupsGroupCategory[]|undefined} categories
     */
    constructor (
        readonly enabled: number,
        readonly categories: Models.GroupsGroupCategory[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCatalogInfoResponse}
     */
    static deserialize(raw: Object): GroupsGetCatalogInfoResponse {
        return new GroupsGetCatalogInfoResponse (
            raw['enabled'],
            raw['categories'] ? raw['categories'].map(v => v ? Models.GroupsGroupCategory.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetCatalogInfoExtendedResponse {
    /**
     * @class
     * @property {number} enabled Information whether catalog is enabled for current user
     * @property {Models.GroupsGroupCategoryFull[]|undefined} categories
     */
    constructor (
        readonly enabled: number,
        readonly categories: Models.GroupsGroupCategoryFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetCatalogInfoExtendedResponse}
     */
    static deserialize(raw: Object): GroupsGetCatalogInfoExtendedResponse {
        return new GroupsGetCatalogInfoExtendedResponse (
            raw['enabled'],
            raw['categories'] ? raw['categories'].map(v => v ? Models.GroupsGroupCategoryFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetInvitesResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.GroupsGroupXtrInvitedBy[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupXtrInvitedBy[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetInvitesResponse}
     */
    static deserialize(raw: Object): GroupsGetInvitesResponse {
        return new GroupsGetInvitesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupXtrInvitedBy.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetInvitesExtendedResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.GroupsGroupXtrInvitedBy[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupXtrInvitedBy[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetInvitesExtendedResponse}
     */
    static deserialize(raw: Object): GroupsGetInvitesExtendedResponse {
        return new GroupsGetInvitesExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupXtrInvitedBy.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsGetInvitedUsersResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetInvitedUsersResponse}
     */
    static deserialize(raw: Object): GroupsGetInvitedUsersResponse {
        return new GroupsGetInvitedUsersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsBanUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsBanUserResponse}
     */
    static deserialize(raw: Object): GroupsBanUserResponse {
        return new GroupsBanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsUnbanUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsUnbanUserResponse}
     */
    static deserialize(raw: Object): GroupsUnbanUserResponse {
        return new GroupsUnbanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsGetBannedResponse {
    /**
     * @class
     * @property {number} count Total users number
     * @property {Models.GroupsUserXtrBanInfo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.GroupsUserXtrBanInfo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetBannedResponse}
     */
    static deserialize(raw: Object): GroupsGetBannedResponse {
        return new GroupsGetBannedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsUserXtrBanInfo.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsCreateResponse {
    /**
     * @class
     * @property {Models.GroupsGroup|undefined} response
     */
    constructor (
        readonly response: Models.GroupsGroup|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsCreateResponse}
     */
    static deserialize(raw: Object): GroupsCreateResponse {
        return new GroupsCreateResponse (
            raw['response'] ? Models.GroupsGroup.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsEditResponse}
     */
    static deserialize(raw: Object): GroupsEditResponse {
        return new GroupsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsEditPlaceResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} success
     * @property {string} address Place address
     */
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly address: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsEditPlaceResponse}
     */
    static deserialize(raw: Object): GroupsEditPlaceResponse {
        return new GroupsEditPlaceResponse (
            raw['success'] ? Models.BaseOkResponse.deserialize(raw['success']) : undefined,
            raw['address']
        )
    }
}

export class GroupsGetSettingsResponse {
    /**
     * @class
     * @property {Models.GroupsGroupSettings|undefined} response
     */
    constructor (
        readonly response: Models.GroupsGroupSettings|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetSettingsResponse}
     */
    static deserialize(raw: Object): GroupsGetSettingsResponse {
        return new GroupsGetSettingsResponse (
            raw['response'] ? Models.GroupsGroupSettings.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsGetRequestsResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetRequestsResponse}
     */
    static deserialize(raw: Object): GroupsGetRequestsResponse {
        return new GroupsGetRequestsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class GroupsGetRequestsFieldsResponse {
    /**
     * @class
     * @property {number} count Total communities number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsGetRequestsFieldsResponse}
     */
    static deserialize(raw: Object): GroupsGetRequestsFieldsResponse {
        return new GroupsGetRequestsFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class GroupsEditManagerResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsEditManagerResponse}
     */
    static deserialize(raw: Object): GroupsEditManagerResponse {
        return new GroupsEditManagerResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsInviteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsInviteResponse}
     */
    static deserialize(raw: Object): GroupsInviteResponse {
        return new GroupsInviteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsAddLinkResponse {
    /**
     * @class
     * @property {Models.GroupsGroupLink|undefined} response
     */
    constructor (
        readonly response: Models.GroupsGroupLink|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsAddLinkResponse}
     */
    static deserialize(raw: Object): GroupsAddLinkResponse {
        return new GroupsAddLinkResponse (
            raw['response'] ? Models.GroupsGroupLink.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsDeleteLinkResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsDeleteLinkResponse}
     */
    static deserialize(raw: Object): GroupsDeleteLinkResponse {
        return new GroupsDeleteLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsEditLinkResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsEditLinkResponse}
     */
    static deserialize(raw: Object): GroupsEditLinkResponse {
        return new GroupsEditLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsReorderLinkResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsReorderLinkResponse}
     */
    static deserialize(raw: Object): GroupsReorderLinkResponse {
        return new GroupsReorderLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsRemoveUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsRemoveUserResponse}
     */
    static deserialize(raw: Object): GroupsRemoveUserResponse {
        return new GroupsRemoveUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class GroupsApproveRequestResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {GroupsApproveRequestResponse}
     */
    static deserialize(raw: Object): GroupsApproveRequestResponse {
        return new GroupsApproveRequestResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class LeadsCompleteResponse {
    /**
     * @class
     * @property {Models.LeadsComplete|undefined} response
     */
    constructor (
        readonly response: Models.LeadsComplete|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsCompleteResponse}
     */
    static deserialize(raw: Object): LeadsCompleteResponse {
        return new LeadsCompleteResponse (
            raw['response'] ? Models.LeadsComplete.deserialize(raw['response']) : undefined
        )
    }
}

export class LeadsStartResponse {
    /**
     * @class
     * @property {Models.LeadsStart|undefined} response
     */
    constructor (
        readonly response: Models.LeadsStart|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsStartResponse}
     */
    static deserialize(raw: Object): LeadsStartResponse {
        return new LeadsStartResponse (
            raw['response'] ? Models.LeadsStart.deserialize(raw['response']) : undefined
        )
    }
}

export class LeadsGetStatsResponse {
    /**
     * @class
     * @property {Models.LeadsLead|undefined} response
     */
    constructor (
        readonly response: Models.LeadsLead|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsGetStatsResponse}
     */
    static deserialize(raw: Object): LeadsGetStatsResponse {
        return new LeadsGetStatsResponse (
            raw['response'] ? Models.LeadsLead.deserialize(raw['response']) : undefined
        )
    }
}

export class LeadsGetUsersResponse {
    /**
     * @class
     * @property {Models.LeadsEntry[]|undefined} response
     */
    constructor (
        readonly response: Models.LeadsEntry[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsGetUsersResponse}
     */
    static deserialize(raw: Object): LeadsGetUsersResponse {
        return new LeadsGetUsersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.LeadsEntry.deserialize(v) : undefined) : undefined
        )
    }
}

export class LeadsCheckUserResponse {
    /**
     * @class
     * @property {Models.LeadsChecked|undefined} response
     */
    constructor (
        readonly response: Models.LeadsChecked|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsCheckUserResponse}
     */
    static deserialize(raw: Object): LeadsCheckUserResponse {
        return new LeadsCheckUserResponse (
            raw['response'] ? Models.LeadsChecked.deserialize(raw['response']) : undefined
        )
    }
}

export class LeadsMetricHitResponse {
    /**
     * @class
     * @property {boolean} result Information whether request has been processed successfully
     * @property {string} redirectLink Redirect link
     */
    constructor (
        readonly result: boolean,
        readonly redirectLink: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LeadsMetricHitResponse}
     */
    static deserialize(raw: Object): LeadsMetricHitResponse {
        return new LeadsMetricHitResponse (
            raw['result'],
            raw['redirect_link']
        )
    }
}

export class LikesGetListResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LikesGetListResponse}
     */
    static deserialize(raw: Object): LikesGetListResponse {
        return new LikesGetListResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class LikesGetListExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.UsersUserMin[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LikesGetListExtendedResponse}
     */
    static deserialize(raw: Object): LikesGetListExtendedResponse {
        return new LikesGetListExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class LikesAddResponse {
    /**
     * @class
     * @property {number} likes Total likes number
     */
    constructor (
        readonly likes: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LikesAddResponse}
     */
    static deserialize(raw: Object): LikesAddResponse {
        return new LikesAddResponse (
            raw['likes']
        )
    }
}

export class LikesDeleteResponse {
    /**
     * @class
     * @property {number} likes Total likes number
     */
    constructor (
        readonly likes: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LikesDeleteResponse}
     */
    static deserialize(raw: Object): LikesDeleteResponse {
        return new LikesDeleteResponse (
            raw['likes']
        )
    }
}

export class LikesIsLikedResponse {
    /**
     * @class
     * @property {boolean} liked Information whether user liked the object
     * @property {boolean} copied Information whether user reposted the object
     */
    constructor (
        readonly liked: boolean,
        readonly copied: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {LikesIsLikedResponse}
     */
    static deserialize(raw: Object): LikesIsLikedResponse {
        return new LikesIsLikedResponse (
            !!raw['liked'],
            !!raw['copied']
        )
    }
}

export class MarketGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItem[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetResponse}
     */
    static deserialize(raw: Object): MarketGetResponse {
        return new MarketGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketGetExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItemFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetExtendedResponse}
     */
    static deserialize(raw: Object): MarketGetExtendedResponse {
        return new MarketGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketGetByIdResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItem[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetByIdResponse}
     */
    static deserialize(raw: Object): MarketGetByIdResponse {
        return new MarketGetByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketGetByIdExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItemFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetByIdExtendedResponse}
     */
    static deserialize(raw: Object): MarketGetByIdExtendedResponse {
        return new MarketGetByIdExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItem[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketSearchResponse}
     */
    static deserialize(raw: Object): MarketSearchResponse {
        return new MarketSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketSearchExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketItemFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketSearchExtendedResponse}
     */
    static deserialize(raw: Object): MarketSearchExtendedResponse {
        return new MarketSearchExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketGetAlbumsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketAlbum[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketAlbum[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetAlbumsResponse}
     */
    static deserialize(raw: Object): MarketGetAlbumsResponse {
        return new MarketGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketAlbum.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketGetAlbumByIdResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketAlbum[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketAlbum[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetAlbumByIdResponse}
     */
    static deserialize(raw: Object): MarketGetAlbumByIdResponse {
        return new MarketGetAlbumByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketAlbum.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketCreateCommentResponse {
    /**
     * @class
     * @property {number} response Comment ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketCreateCommentResponse}
     */
    static deserialize(raw: Object): MarketCreateCommentResponse {
        return new MarketCreateCommentResponse (
            raw['response']
        )
    }
}

export class MarketGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallComment[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetCommentsResponse}
     */
    static deserialize(raw: Object): MarketGetCommentsResponse {
        return new MarketGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketDeleteCommentResponse {
    /**
     * @class
     * @property {boolean} response Returns 1 if request has been processed successfully (0 if the comment is not found)
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketDeleteCommentResponse}
     */
    static deserialize(raw: Object): MarketDeleteCommentResponse {
        return new MarketDeleteCommentResponse (
            !!raw['response']
        )
    }
}

export class MarketRestoreCommentResponse {
    /**
     * @class
     * @property {boolean} response Returns 1 if request has been processed successfully (0 if the comment is not found)
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketRestoreCommentResponse}
     */
    static deserialize(raw: Object): MarketRestoreCommentResponse {
        return new MarketRestoreCommentResponse (
            !!raw['response']
        )
    }
}

export class MarketEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketEditCommentResponse}
     */
    static deserialize(raw: Object): MarketEditCommentResponse {
        return new MarketEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketReportCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketReportCommentResponse}
     */
    static deserialize(raw: Object): MarketReportCommentResponse {
        return new MarketReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketGetCategoriesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MarketMarketCategory[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketCategory[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketGetCategoriesResponse}
     */
    static deserialize(raw: Object): MarketGetCategoriesResponse {
        return new MarketGetCategoriesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketCategory.deserialize(v) : undefined) : undefined
        )
    }
}

export class MarketReportResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketReportResponse}
     */
    static deserialize(raw: Object): MarketReportResponse {
        return new MarketReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketAddResponse {
    /**
     * @class
     * @property {number} marketItemId Item ID
     */
    constructor (
        readonly marketItemId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketAddResponse}
     */
    static deserialize(raw: Object): MarketAddResponse {
        return new MarketAddResponse (
            raw['market_item_id']
        )
    }
}

export class MarketEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketEditResponse}
     */
    static deserialize(raw: Object): MarketEditResponse {
        return new MarketEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketDeleteResponse}
     */
    static deserialize(raw: Object): MarketDeleteResponse {
        return new MarketDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketRestoreResponse}
     */
    static deserialize(raw: Object): MarketRestoreResponse {
        return new MarketRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketReorderItemsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketReorderItemsResponse}
     */
    static deserialize(raw: Object): MarketReorderItemsResponse {
        return new MarketReorderItemsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketReorderAlbumsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketReorderAlbumsResponse}
     */
    static deserialize(raw: Object): MarketReorderAlbumsResponse {
        return new MarketReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketAddAlbumResponse {
    /**
     * @class
     * @property {number} marketAlbumId Album ID
     */
    constructor (
        readonly marketAlbumId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketAddAlbumResponse}
     */
    static deserialize(raw: Object): MarketAddAlbumResponse {
        return new MarketAddAlbumResponse (
            raw['market_album_id']
        )
    }
}

export class MarketEditAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketEditAlbumResponse}
     */
    static deserialize(raw: Object): MarketEditAlbumResponse {
        return new MarketEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketDeleteAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketDeleteAlbumResponse}
     */
    static deserialize(raw: Object): MarketDeleteAlbumResponse {
        return new MarketDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketRemoveFromAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketRemoveFromAlbumResponse}
     */
    static deserialize(raw: Object): MarketRemoveFromAlbumResponse {
        return new MarketRemoveFromAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MarketAddToAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MarketAddToAlbumResponse}
     */
    static deserialize(raw: Object): MarketAddToAlbumResponse {
        return new MarketAddToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MessagesMessage[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetResponse}
     */
    static deserialize(raw: Object): MessagesGetResponse {
        return new MessagesGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesGetDialogsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number} unreadDialogs Unread dialogs number
     * @property {Models.MessagesDialog[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly unreadDialogs: number,
        readonly items: Models.MessagesDialog[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetDialogsResponse}
     */
    static deserialize(raw: Object): MessagesGetDialogsResponse {
        return new MessagesGetDialogsResponse (
            raw['count'],
            raw['unread_dialogs'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesDialog.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesGetByIdResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MessagesMessage[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetByIdResponse}
     */
    static deserialize(raw: Object): MessagesGetByIdResponse {
        return new MessagesGetByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.MessagesMessage[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesSearchResponse}
     */
    static deserialize(raw: Object): MessagesSearchResponse {
        return new MessagesSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesGetHistoryResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number} unread Unread dialogs number
     * @property {Models.MessagesMessage[]|undefined} items
     * @property {number} inRead Id of last read inbound message
     * @property {number} outRead Id of last read outbound message
     */
    constructor (
        readonly count: number,
        readonly unread: number,
        readonly items: Models.MessagesMessage[]|undefined,
        readonly inRead: number,
        readonly outRead: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetHistoryResponse}
     */
    static deserialize(raw: Object): MessagesGetHistoryResponse {
        return new MessagesGetHistoryResponse (
            raw['count'],
            raw['unread'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined,
            raw['in_read'],
            raw['out_read']
        )
    }
}

export class MessagesGetHistoryAttachmentsResponse {
    /**
     * @class
     * @property {Models.MessagesAttachmentsHistory[]|undefined} items
     * @property {string} nextFrom Value for pagination
     */
    constructor (
        readonly items: Models.MessagesAttachmentsHistory[]|undefined,
        readonly nextFrom: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetHistoryAttachmentsResponse}
     */
    static deserialize(raw: Object): MessagesGetHistoryAttachmentsResponse {
        return new MessagesGetHistoryAttachmentsResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesAttachmentsHistory.deserialize(v) : undefined) : undefined,
            raw['next_from']
        )
    }
}

export class MessagesSendResponse {
    /**
     * @class
     * @property {number} response Message ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesSendResponse}
     */
    static deserialize(raw: Object): MessagesSendResponse {
        return new MessagesSendResponse (
            raw['response']
        )
    }
}

export class MessagesDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesDeleteResponse}
     */
    static deserialize(raw: Object): MessagesDeleteResponse {
        return new MessagesDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesDeleteDialogResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesDeleteDialogResponse}
     */
    static deserialize(raw: Object): MessagesDeleteDialogResponse {
        return new MessagesDeleteDialogResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesRestoreResponse}
     */
    static deserialize(raw: Object): MessagesRestoreResponse {
        return new MessagesRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesMarkAsReadResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesMarkAsReadResponse}
     */
    static deserialize(raw: Object): MessagesMarkAsReadResponse {
        return new MessagesMarkAsReadResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesMarkAsImportantResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesMarkAsImportantResponse}
     */
    static deserialize(raw: Object): MessagesMarkAsImportantResponse {
        return new MessagesMarkAsImportantResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class MessagesGetLongPollServerResponse {
    /**
     * @class
     * @property {Models.MessagesLongpollParams|undefined} response
     */
    constructor (
        readonly response: Models.MessagesLongpollParams|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetLongPollServerResponse}
     */
    static deserialize(raw: Object): MessagesGetLongPollServerResponse {
        return new MessagesGetLongPollServerResponse (
            raw['response'] ? Models.MessagesLongpollParams.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetLongPollHistoryResponse {
    /**
     * @class
     * @property {number[][]|undefined} history
     * @property {Models.MessagesLongpollMessages|undefined} messages
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.MessagesChat[]|undefined} chats
     * @property {number} newPts Persistence timestamp
     * @property {boolean} more Has more
     */
    constructor (
        readonly history: number[][]|undefined,
        readonly messages: Models.MessagesLongpollMessages|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly chats: Models.MessagesChat[]|undefined,
        readonly newPts: number,
        readonly more: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetLongPollHistoryResponse}
     */
    static deserialize(raw: Object): MessagesGetLongPollHistoryResponse {
        return new MessagesGetLongPollHistoryResponse (
            raw['history'] ? raw['history'].map(v => v ? v.map(v => v) : undefined) : undefined,
            raw['messages'] ? Models.MessagesLongpollMessages.deserialize(raw['messages']) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['chats'] ? raw['chats'].map(v => v ? Models.MessagesChat.deserialize(v) : undefined) : undefined,
            raw['new_pts'],
            !!raw['more']
        )
    }
}

export class MessagesGetChatResponse {
    /**
     * @class
     * @property {Models.MessagesChat|undefined} response
     */
    constructor (
        readonly response: Models.MessagesChat|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatResponse}
     */
    static deserialize(raw: Object): MessagesGetChatResponse {
        return new MessagesGetChatResponse (
            raw['response'] ? Models.MessagesChat.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetChatFieldsResponse {
    /**
     * @class
     * @property {Models.MessagesChatFull|undefined} response
     */
    constructor (
        readonly response: Models.MessagesChatFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatFieldsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatFieldsResponse {
        return new MessagesGetChatFieldsResponse (
            raw['response'] ? Models.MessagesChatFull.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetChatChatIdsResponse {
    /**
     * @class
     * @property {Models.MessagesChat[]|undefined} response
     */
    constructor (
        readonly response: Models.MessagesChat[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatChatIdsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatChatIdsResponse {
        return new MessagesGetChatChatIdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesChat.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesGetChatChatIdsFieldsResponse {
    /**
     * @class
     * @property {Models.MessagesChatFull[]|undefined} response
     */
    constructor (
        readonly response: Models.MessagesChatFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatChatIdsFieldsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatChatIdsFieldsResponse {
        return new MessagesGetChatChatIdsFieldsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesChatFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesCreateChatResponse {
    /**
     * @class
     * @property {number} response Chat ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesCreateChatResponse}
     */
    static deserialize(raw: Object): MessagesCreateChatResponse {
        return new MessagesCreateChatResponse (
            raw['response']
        )
    }
}

export class MessagesEditChatResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesEditChatResponse}
     */
    static deserialize(raw: Object): MessagesEditChatResponse {
        return new MessagesEditChatResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetChatUsersResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatUsersResponse}
     */
    static deserialize(raw: Object): MessagesGetChatUsersResponse {
        return new MessagesGetChatUsersResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class MessagesGetChatUsersFieldsResponse {
    /**
     * @class
     * @property {Models.MessagesUserXtrInvitedBy[]|undefined} response
     */
    constructor (
        readonly response: Models.MessagesUserXtrInvitedBy[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatUsersFieldsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatUsersFieldsResponse {
        return new MessagesGetChatUsersFieldsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesUserXtrInvitedBy.deserialize(v) : undefined) : undefined
        )
    }
}

export class MessagesGetChatUsersChatIdsResponse {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatUsersChatIdsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatUsersChatIdsResponse {
        return new MessagesGetChatUsersChatIdsResponse (
        )
    }
}

export class MessagesGetChatUsersChatIdsFieldsResponse {
    /**
     * @class
     */
    constructor (
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetChatUsersChatIdsFieldsResponse}
     */
    static deserialize(raw: Object): MessagesGetChatUsersChatIdsFieldsResponse {
        return new MessagesGetChatUsersChatIdsFieldsResponse (
        )
    }
}

export class MessagesSetActivityResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesSetActivityResponse}
     */
    static deserialize(raw: Object): MessagesSetActivityResponse {
        return new MessagesSetActivityResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesSearchDialogsResponse {
    /**
     * @class
     * @property {any[]|undefined} response
     */
    constructor (
        readonly response: any[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesSearchDialogsResponse}
     */
    static deserialize(raw: Object): MessagesSearchDialogsResponse {
        return new MessagesSearchDialogsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class MessagesAddChatUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesAddChatUserResponse}
     */
    static deserialize(raw: Object): MessagesAddChatUserResponse {
        return new MessagesAddChatUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesRemoveChatUserResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesRemoveChatUserResponse}
     */
    static deserialize(raw: Object): MessagesRemoveChatUserResponse {
        return new MessagesRemoveChatUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesGetLastActivityResponse {
    /**
     * @class
     * @property {Models.MessagesLastActivity|undefined} response
     */
    constructor (
        readonly response: Models.MessagesLastActivity|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesGetLastActivityResponse}
     */
    static deserialize(raw: Object): MessagesGetLastActivityResponse {
        return new MessagesGetLastActivityResponse (
            raw['response'] ? Models.MessagesLastActivity.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesSetChatPhotoResponse {
    /**
     * @class
     * @property {number} messageId Service message ID
     * @property {Models.MessagesChat|undefined} chat
     */
    constructor (
        readonly messageId: number,
        readonly chat: Models.MessagesChat|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesSetChatPhotoResponse}
     */
    static deserialize(raw: Object): MessagesSetChatPhotoResponse {
        return new MessagesSetChatPhotoResponse (
            raw['message_id'],
            raw['chat'] ? Models.MessagesChat.deserialize(raw['chat']) : undefined
        )
    }
}

export class MessagesDeleteChatPhotoResponse {
    /**
     * @class
     * @property {number} messageId Service message ID
     * @property {Models.MessagesChat|undefined} chat
     */
    constructor (
        readonly messageId: number,
        readonly chat: Models.MessagesChat|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesDeleteChatPhotoResponse}
     */
    static deserialize(raw: Object): MessagesDeleteChatPhotoResponse {
        return new MessagesDeleteChatPhotoResponse (
            raw['message_id'],
            raw['chat'] ? Models.MessagesChat.deserialize(raw['chat']) : undefined
        )
    }
}

export class MessagesDenyMessagesFromGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesDenyMessagesFromGroupResponse}
     */
    static deserialize(raw: Object): MessagesDenyMessagesFromGroupResponse {
        return new MessagesDenyMessagesFromGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesAllowMessagesFromGroupResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesAllowMessagesFromGroupResponse}
     */
    static deserialize(raw: Object): MessagesAllowMessagesFromGroupResponse {
        return new MessagesAllowMessagesFromGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class MessagesIsMessagesFromGroupAllowedResponse {
    /**
     * @class
     * @property {boolean} isAllowed
     */
    constructor (
        readonly isAllowed: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {MessagesIsMessagesFromGroupAllowedResponse}
     */
    static deserialize(raw: Object): MessagesIsMessagesFromGroupAllowedResponse {
        return new MessagesIsMessagesFromGroupAllowedResponse (
            !!raw['is_allowed']
        )
    }
}

export class NewsfeedGetResponse {
    /**
     * @class
     * @property {Models.NewsfeedNewsfeedItem[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetResponse}
     */
    static deserialize(raw: Object): NewsfeedGetResponse {
        return new NewsfeedGetResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedNewsfeedItem.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedGetRecommendedResponse {
    /**
     * @class
     * @property {Models.NewsfeedNewsfeedItem[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     * @property {string} newOffset New offset value
     * @property {string} newFrom New from value
     */
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined,
        readonly newOffset: string,
        readonly newFrom: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetRecommendedResponse}
     */
    static deserialize(raw: Object): NewsfeedGetRecommendedResponse {
        return new NewsfeedGetRecommendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedNewsfeedItem.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined,
            raw['new_offset'],
            raw['new_from']
        )
    }
}

export class NewsfeedGetCommentsResponse {
    /**
     * @class
     * @property {Models.NewsfeedNewsfeedItem[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     * @property {string} nextFrom New from value
     */
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined,
        readonly nextFrom: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetCommentsResponse}
     */
    static deserialize(raw: Object): NewsfeedGetCommentsResponse {
        return new NewsfeedGetCommentsResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedNewsfeedItem.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined,
            raw['next_from']
        )
    }
}

export class NewsfeedGetMentionsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostToId[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostToId[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetMentionsResponse}
     */
    static deserialize(raw: Object): NewsfeedGetMentionsResponse {
        return new NewsfeedGetMentionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostToId.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedGetBannedResponse {
    /**
     * @class
     * @property {number[]|undefined} groups
     * @property {number[]|undefined} members
     */
    constructor (
        readonly groups: number[]|undefined,
        readonly members: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetBannedResponse}
     */
    static deserialize(raw: Object): NewsfeedGetBannedResponse {
        return new NewsfeedGetBannedResponse (
            raw['groups'] ? raw['groups'].map(v => v) : undefined,
            raw['members'] ? raw['members'].map(v => v) : undefined
        )
    }
}

export class NewsfeedGetBannedExtendedResponse {
    /**
     * @class
     * @property {Models.UsersUserFull[]|undefined} groups
     * @property {Models.GroupsGroupFull[]|undefined} members
     */
    constructor (
        readonly groups: Models.UsersUserFull[]|undefined,
        readonly members: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetBannedExtendedResponse}
     */
    static deserialize(raw: Object): NewsfeedGetBannedExtendedResponse {
        return new NewsfeedGetBannedExtendedResponse (
            raw['groups'] ? raw['groups'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['members'] ? raw['members'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedAddBanResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedAddBanResponse}
     */
    static deserialize(raw: Object): NewsfeedAddBanResponse {
        return new NewsfeedAddBanResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedDeleteBanResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedDeleteBanResponse}
     */
    static deserialize(raw: Object): NewsfeedDeleteBanResponse {
        return new NewsfeedDeleteBanResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedIgnoreItemResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedIgnoreItemResponse}
     */
    static deserialize(raw: Object): NewsfeedIgnoreItemResponse {
        return new NewsfeedIgnoreItemResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedUnignoreItemResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedUnignoreItemResponse}
     */
    static deserialize(raw: Object): NewsfeedUnignoreItemResponse {
        return new NewsfeedUnignoreItemResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedSearchResponse {
    /**
     * @class
     * @property {Models.WallWallpostFull[]|undefined} items
     */
    constructor (
        readonly items: Models.WallWallpostFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedSearchResponse}
     */
    static deserialize(raw: Object): NewsfeedSearchResponse {
        return new NewsfeedSearchResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedSearchExtendedResponse {
    /**
     * @class
     * @property {Models.WallWallpostFull[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly items: Models.WallWallpostFull[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedSearchExtendedResponse}
     */
    static deserialize(raw: Object): NewsfeedSearchExtendedResponse {
        return new NewsfeedSearchExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedGetListsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.NewsfeedList[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.NewsfeedList[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetListsResponse}
     */
    static deserialize(raw: Object): NewsfeedGetListsResponse {
        return new NewsfeedGetListsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedList.deserialize(v) : undefined) : undefined
        )
    }
}

export class NewsfeedSaveListResponse {
    /**
     * @class
     * @property {number} response List ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedSaveListResponse}
     */
    static deserialize(raw: Object): NewsfeedSaveListResponse {
        return new NewsfeedSaveListResponse (
            raw['response']
        )
    }
}

export class NewsfeedDeleteListResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedDeleteListResponse}
     */
    static deserialize(raw: Object): NewsfeedDeleteListResponse {
        return new NewsfeedDeleteListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedUnsubscribeResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedUnsubscribeResponse}
     */
    static deserialize(raw: Object): NewsfeedUnsubscribeResponse {
        return new NewsfeedUnsubscribeResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NewsfeedGetSuggestedSourcesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {any[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: any[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NewsfeedGetSuggestedSourcesResponse}
     */
    static deserialize(raw: Object): NewsfeedGetSuggestedSourcesResponse {
        return new NewsfeedGetSuggestedSourcesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class NotesGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.NotesNote[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.NotesNote[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesGetResponse}
     */
    static deserialize(raw: Object): NotesGetResponse {
        return new NotesGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NotesNote.deserialize(v) : undefined) : undefined
        )
    }
}

export class NotesGetByIdResponse {
    /**
     * @class
     * @property {Models.NotesNote|undefined} response
     */
    constructor (
        readonly response: Models.NotesNote|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesGetByIdResponse}
     */
    static deserialize(raw: Object): NotesGetByIdResponse {
        return new NotesGetByIdResponse (
            raw['response'] ? Models.NotesNote.deserialize(raw['response']) : undefined
        )
    }
}

export class NotesAddResponse {
    /**
     * @class
     * @property {number} response Note ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesAddResponse}
     */
    static deserialize(raw: Object): NotesAddResponse {
        return new NotesAddResponse (
            raw['response']
        )
    }
}

export class NotesEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesEditResponse}
     */
    static deserialize(raw: Object): NotesEditResponse {
        return new NotesEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NotesDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesDeleteResponse}
     */
    static deserialize(raw: Object): NotesDeleteResponse {
        return new NotesDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NotesGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.NotesNoteComment[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.NotesNoteComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesGetCommentsResponse}
     */
    static deserialize(raw: Object): NotesGetCommentsResponse {
        return new NotesGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NotesNoteComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class NotesCreateCommentResponse {
    /**
     * @class
     * @property {number} response Comment ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesCreateCommentResponse}
     */
    static deserialize(raw: Object): NotesCreateCommentResponse {
        return new NotesCreateCommentResponse (
            raw['response']
        )
    }
}

export class NotesEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesEditCommentResponse}
     */
    static deserialize(raw: Object): NotesEditCommentResponse {
        return new NotesEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NotesDeleteCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesDeleteCommentResponse}
     */
    static deserialize(raw: Object): NotesDeleteCommentResponse {
        return new NotesDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NotesRestoreCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotesRestoreCommentResponse}
     */
    static deserialize(raw: Object): NotesRestoreCommentResponse {
        return new NotesRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class NotificationsGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.NotificationsNotification[]|undefined} items
     * @property {Models.UsersUser[]|undefined} profiles
     * @property {Models.GroupsGroup[]|undefined} groups
     * @property {number} lastViewed Time when user has been checked notifications last time
     */
    constructor (
        readonly count: number,
        readonly items: Models.NotificationsNotification[]|undefined,
        readonly profiles: Models.UsersUser[]|undefined,
        readonly groups: Models.GroupsGroup[]|undefined,
        readonly lastViewed: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotificationsGetResponse}
     */
    static deserialize(raw: Object): NotificationsGetResponse {
        return new NotificationsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NotificationsNotification.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUser.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined,
            raw['last_viewed']
        )
    }
}

export class NotificationsMarkAsViewedResponse {
    /**
     * @class
     * @property {boolean} response Result
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {NotificationsMarkAsViewedResponse}
     */
    static deserialize(raw: Object): NotificationsMarkAsViewedResponse {
        return new NotificationsMarkAsViewedResponse (
            !!raw['response']
        )
    }
}

export class OrdersGetResponse {
    /**
     * @class
     * @property {Models.OrdersOrder[]|undefined} response
     */
    constructor (
        readonly response: Models.OrdersOrder[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersGetResponse}
     */
    static deserialize(raw: Object): OrdersGetResponse {
        return new OrdersGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.OrdersOrder.deserialize(v) : undefined) : undefined
        )
    }
}

export class OrdersGetByIdResponse {
    /**
     * @class
     * @property {Models.OrdersOrder[]|undefined} response
     */
    constructor (
        readonly response: Models.OrdersOrder[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersGetByIdResponse}
     */
    static deserialize(raw: Object): OrdersGetByIdResponse {
        return new OrdersGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.OrdersOrder.deserialize(v) : undefined) : undefined
        )
    }
}

export class OrdersChangeStateResponse {
    /**
     * @class
     * @property {string} response New state
     */
    constructor (
        readonly response: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersChangeStateResponse}
     */
    static deserialize(raw: Object): OrdersChangeStateResponse {
        return new OrdersChangeStateResponse (
            raw['response']
        )
    }
}

export class OrdersGetAmountResponse {
    /**
     * @class
     * @property {Models.OrdersAmount|undefined} response
     */
    constructor (
        readonly response: Models.OrdersAmount|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {OrdersGetAmountResponse}
     */
    static deserialize(raw: Object): OrdersGetAmountResponse {
        return new OrdersGetAmountResponse (
            raw['response'] ? Models.OrdersAmount.deserialize(raw['response']) : undefined
        )
    }
}

export class PagesGetResponse {
    /**
     * @class
     * @property {Models.PagesWikipageFull|undefined} response
     */
    constructor (
        readonly response: Models.PagesWikipageFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesGetResponse}
     */
    static deserialize(raw: Object): PagesGetResponse {
        return new PagesGetResponse (
            raw['response'] ? Models.PagesWikipageFull.deserialize(raw['response']) : undefined
        )
    }
}

export class PagesSaveResponse {
    /**
     * @class
     * @property {number} response Page ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesSaveResponse}
     */
    static deserialize(raw: Object): PagesSaveResponse {
        return new PagesSaveResponse (
            raw['response']
        )
    }
}

export class PagesSaveAccessResponse {
    /**
     * @class
     * @property {number} response Page ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesSaveAccessResponse}
     */
    static deserialize(raw: Object): PagesSaveAccessResponse {
        return new PagesSaveAccessResponse (
            raw['response']
        )
    }
}

export class PagesGetHistoryResponse {
    /**
     * @class
     * @property {Models.PagesWikipageVersion[]|undefined} response
     */
    constructor (
        readonly response: Models.PagesWikipageVersion[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesGetHistoryResponse}
     */
    static deserialize(raw: Object): PagesGetHistoryResponse {
        return new PagesGetHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PagesWikipageVersion.deserialize(v) : undefined) : undefined
        )
    }
}

export class PagesGetTitlesResponse {
    /**
     * @class
     * @property {Models.PagesWikipage[]|undefined} response
     */
    constructor (
        readonly response: Models.PagesWikipage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesGetTitlesResponse}
     */
    static deserialize(raw: Object): PagesGetTitlesResponse {
        return new PagesGetTitlesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PagesWikipage.deserialize(v) : undefined) : undefined
        )
    }
}

export class PagesGetVersionResponse {
    /**
     * @class
     * @property {Models.PagesWikipageFull|undefined} response
     */
    constructor (
        readonly response: Models.PagesWikipageFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesGetVersionResponse}
     */
    static deserialize(raw: Object): PagesGetVersionResponse {
        return new PagesGetVersionResponse (
            raw['response'] ? Models.PagesWikipageFull.deserialize(raw['response']) : undefined
        )
    }
}

export class PagesParseWikiResponse {
    /**
     * @class
     * @property {string} response HTML source
     */
    constructor (
        readonly response: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesParseWikiResponse}
     */
    static deserialize(raw: Object): PagesParseWikiResponse {
        return new PagesParseWikiResponse (
            raw['response']
        )
    }
}

export class PagesClearCacheResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PagesClearCacheResponse}
     */
    static deserialize(raw: Object): PagesClearCacheResponse {
        return new PagesClearCacheResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosCreateAlbumResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoAlbumFull|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoAlbumFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosCreateAlbumResponse}
     */
    static deserialize(raw: Object): PhotosCreateAlbumResponse {
        return new PhotosCreateAlbumResponse (
            raw['response'] ? Models.PhotosPhotoAlbumFull.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosEditAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosEditAlbumResponse}
     */
    static deserialize(raw: Object): PhotosEditAlbumResponse {
        return new PhotosEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetAlbumsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoAlbumFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoAlbumFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetAlbumsResponse}
     */
    static deserialize(raw: Object): PhotosGetAlbumsResponse {
        return new PhotosGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhoto[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetResponse}
     */
    static deserialize(raw: Object): PhotosGetResponse {
        return new PhotosGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetExtendedResponse}
     */
    static deserialize(raw: Object): PhotosGetExtendedResponse {
        return new PhotosGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetAlbumsCountResponse {
    /**
     * @class
     * @property {number} response Albums number
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetAlbumsCountResponse}
     */
    static deserialize(raw: Object): PhotosGetAlbumsCountResponse {
        return new PhotosGetAlbumsCountResponse (
            raw['response']
        )
    }
}

export class PhotosGetByIdResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetByIdResponse}
     */
    static deserialize(raw: Object): PhotosGetByIdResponse {
        return new PhotosGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetByIdExtendedResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoFull[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetByIdExtendedResponse}
     */
    static deserialize(raw: Object): PhotosGetByIdExtendedResponse {
        return new PhotosGetByIdExtendedResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetUploadServerResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoUpload|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetUploadServerResponse {
        return new PhotosGetUploadServerResponse (
            raw['response'] ? Models.PhotosPhotoUpload.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetOwnerPhotoUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl URL to upload the photo
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetOwnerPhotoUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetOwnerPhotoUploadServerResponse {
        return new PhotosGetOwnerPhotoUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class PhotosGetChatUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl URL to upload the photo
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetChatUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetChatUploadServerResponse {
        return new PhotosGetChatUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class PhotosGetMarketUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl URL to upload the photo
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetMarketUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetMarketUploadServerResponse {
        return new PhotosGetMarketUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class PhotosGetMarketAlbumUploadServerResponse {
    /**
     * @class
     * @property {string} uploadUrl URL to upload the photo
     */
    constructor (
        readonly uploadUrl: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetMarketAlbumUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetMarketAlbumUploadServerResponse {
        return new PhotosGetMarketAlbumUploadServerResponse (
            raw['upload_url']
        )
    }
}

export class PhotosSaveMarketPhotoResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveMarketPhotoResponse}
     */
    static deserialize(raw: Object): PhotosSaveMarketPhotoResponse {
        return new PhotosSaveMarketPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosSaveMarketAlbumPhotoResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveMarketAlbumPhotoResponse}
     */
    static deserialize(raw: Object): PhotosSaveMarketAlbumPhotoResponse {
        return new PhotosSaveMarketAlbumPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosSaveOwnerPhotoResponse {
    /**
     * @class
     * @property {string} photoHash Parameter for saveProfilePhoto method
     * @property {string} photoSrc Uploaded image url
     */
    constructor (
        readonly photoHash: string,
        readonly photoSrc: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveOwnerPhotoResponse}
     */
    static deserialize(raw: Object): PhotosSaveOwnerPhotoResponse {
        return new PhotosSaveOwnerPhotoResponse (
            raw['photo_hash'],
            raw['photo_src']
        )
    }
}

export class PhotosSaveWallPhotoResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveWallPhotoResponse}
     */
    static deserialize(raw: Object): PhotosSaveWallPhotoResponse {
        return new PhotosSaveWallPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetWallUploadServerResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoUpload|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetWallUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetWallUploadServerResponse {
        return new PhotosGetWallUploadServerResponse (
            raw ? Models.PhotosPhotoUpload.deserialize(raw) : undefined
        )
    }
}

export class PhotosGetMessagesUploadServerResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoUpload|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetMessagesUploadServerResponse}
     */
    static deserialize(raw: Object): PhotosGetMessagesUploadServerResponse {
        return new PhotosGetMessagesUploadServerResponse (
            raw['response'] ? Models.PhotosPhotoUpload.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosSaveMessagesPhotoResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveMessagesPhotoResponse}
     */
    static deserialize(raw: Object): PhotosSaveMessagesPhotoResponse {
        return new PhotosSaveMessagesPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosReportResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosReportResponse}
     */
    static deserialize(raw: Object): PhotosReportResponse {
        return new PhotosReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosReportCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosReportCommentResponse}
     */
    static deserialize(raw: Object): PhotosReportCommentResponse {
        return new PhotosReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhoto[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSearchResponse}
     */
    static deserialize(raw: Object): PhotosSearchResponse {
        return new PhotosSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosSaveResponse {
    /**
     * @class
     * @property {Models.PhotosPhoto[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosSaveResponse}
     */
    static deserialize(raw: Object): PhotosSaveResponse {
        return new PhotosSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosCopyResponse {
    /**
     * @class
     * @property {number} response Photo ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosCopyResponse}
     */
    static deserialize(raw: Object): PhotosCopyResponse {
        return new PhotosCopyResponse (
            raw['response']
        )
    }
}

export class PhotosEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosEditResponse}
     */
    static deserialize(raw: Object): PhotosEditResponse {
        return new PhotosEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosMoveResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosMoveResponse}
     */
    static deserialize(raw: Object): PhotosMoveResponse {
        return new PhotosMoveResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosMakeCoverResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosMakeCoverResponse}
     */
    static deserialize(raw: Object): PhotosMakeCoverResponse {
        return new PhotosMakeCoverResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosReorderAlbumsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosReorderAlbumsResponse}
     */
    static deserialize(raw: Object): PhotosReorderAlbumsResponse {
        return new PhotosReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosReorderPhotosResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosReorderPhotosResponse}
     */
    static deserialize(raw: Object): PhotosReorderPhotosResponse {
        return new PhotosReorderPhotosResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetAllResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoXtrRealOffset[]|undefined} items
     * @property {boolean} more Information whether next page is presented
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoXtrRealOffset[]|undefined,
        readonly more: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetAllResponse}
     */
    static deserialize(raw: Object): PhotosGetAllResponse {
        return new PhotosGetAllResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoXtrRealOffset.deserialize(v) : undefined) : undefined,
            !!raw['more']
        )
    }
}

export class PhotosGetAllExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoFullXtrRealOffset[]|undefined} items
     * @property {boolean} more Information whether next page is presented
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFullXtrRealOffset[]|undefined,
        readonly more: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetAllExtendedResponse}
     */
    static deserialize(raw: Object): PhotosGetAllExtendedResponse {
        return new PhotosGetAllExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFullXtrRealOffset.deserialize(v) : undefined) : undefined,
            !!raw['more']
        )
    }
}

export class PhotosGetUserPhotosResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhoto[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetUserPhotosResponse}
     */
    static deserialize(raw: Object): PhotosGetUserPhotosResponse {
        return new PhotosGetUserPhotosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetUserPhotoExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetUserPhotoExtendedResponse}
     */
    static deserialize(raw: Object): PhotosGetUserPhotoExtendedResponse {
        return new PhotosGetUserPhotoExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosDeleteAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosDeleteAlbumResponse}
     */
    static deserialize(raw: Object): PhotosDeleteAlbumResponse {
        return new PhotosDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosDeleteResponse}
     */
    static deserialize(raw: Object): PhotosDeleteResponse {
        return new PhotosDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosRestoreResponse}
     */
    static deserialize(raw: Object): PhotosRestoreResponse {
        return new PhotosRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosConfirmTagResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosConfirmTagResponse}
     */
    static deserialize(raw: Object): PhotosConfirmTagResponse {
        return new PhotosConfirmTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number} realOffset Real offset of the comments
     * @property {Models.WallWallComment[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly realOffset: number,
        readonly items: Models.WallWallComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetCommentsResponse}
     */
    static deserialize(raw: Object): PhotosGetCommentsResponse {
        return new PhotosGetCommentsResponse (
            raw['count'],
            raw['real_offset'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetCommentsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {number} realOffset Real offset of the comments
     * @property {Models.WallWallComment[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly realOffset: number,
        readonly items: Models.WallWallComment[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetCommentsExtendedResponse}
     */
    static deserialize(raw: Object): PhotosGetCommentsExtendedResponse {
        return new PhotosGetCommentsExtendedResponse (
            raw['count'],
            raw['real_offset'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosGetAllCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosCommentXtrPid[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosCommentXtrPid[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetAllCommentsResponse}
     */
    static deserialize(raw: Object): PhotosGetAllCommentsResponse {
        return new PhotosGetAllCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosCommentXtrPid.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosCreateCommentResponse {
    /**
     * @class
     * @property {number} response Created comment ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosCreateCommentResponse}
     */
    static deserialize(raw: Object): PhotosCreateCommentResponse {
        return new PhotosCreateCommentResponse (
            raw['response']
        )
    }
}

export class PhotosDeleteCommentResponse {
    /**
     * @class
     * @property {boolean} response Returns 1 if request has been processed successfully, 0 if the comment is not found
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosDeleteCommentResponse}
     */
    static deserialize(raw: Object): PhotosDeleteCommentResponse {
        return new PhotosDeleteCommentResponse (
            !!raw['response']
        )
    }
}

export class PhotosRestoreCommentResponse {
    /**
     * @class
     * @property {boolean} response Returns 1 if request has been processed successfully, 0 if the comment is not found
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosRestoreCommentResponse}
     */
    static deserialize(raw: Object): PhotosRestoreCommentResponse {
        return new PhotosRestoreCommentResponse (
            !!raw['response']
        )
    }
}

export class PhotosEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosEditCommentResponse}
     */
    static deserialize(raw: Object): PhotosEditCommentResponse {
        return new PhotosEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetTagsResponse {
    /**
     * @class
     * @property {Models.PhotosPhotoTag[]|undefined} response
     */
    constructor (
        readonly response: Models.PhotosPhotoTag[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetTagsResponse}
     */
    static deserialize(raw: Object): PhotosGetTagsResponse {
        return new PhotosGetTagsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhotoTag.deserialize(v) : undefined) : undefined
        )
    }
}

export class PhotosPutTagResponse {
    /**
     * @class
     * @property {number} response Created tag ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosPutTagResponse}
     */
    static deserialize(raw: Object): PhotosPutTagResponse {
        return new PhotosPutTagResponse (
            raw['response']
        )
    }
}

export class PhotosRemoveTagResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosRemoveTagResponse}
     */
    static deserialize(raw: Object): PhotosRemoveTagResponse {
        return new PhotosRemoveTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class PhotosGetNewTagsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PhotosPhotoXtrTagInfo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoXtrTagInfo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PhotosGetNewTagsResponse}
     */
    static deserialize(raw: Object): PhotosGetNewTagsResponse {
        return new PhotosGetNewTagsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoXtrTagInfo.deserialize(v) : undefined) : undefined
        )
    }
}

export class PlacesAddResponse {
    /**
     * @class
     * @property {number} id Place ID
     */
    constructor (
        readonly id: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesAddResponse}
     */
    static deserialize(raw: Object): PlacesAddResponse {
        return new PlacesAddResponse (
            raw['id']
        )
    }
}

export class PlacesGetByIdResponse {
    /**
     * @class
     * @property {Models.PlacesPlaceMin[]|undefined} response
     */
    constructor (
        readonly response: Models.PlacesPlaceMin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesGetByIdResponse}
     */
    static deserialize(raw: Object): PlacesGetByIdResponse {
        return new PlacesGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PlacesPlaceMin.deserialize(v) : undefined) : undefined
        )
    }
}

export class PlacesSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PlacesPlaceFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PlacesPlaceFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesSearchResponse}
     */
    static deserialize(raw: Object): PlacesSearchResponse {
        return new PlacesSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PlacesPlaceFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class PlacesCheckinResponse {
    /**
     * @class
     * @property {number} id Checkin ID
     */
    constructor (
        readonly id: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesCheckinResponse}
     */
    static deserialize(raw: Object): PlacesCheckinResponse {
        return new PlacesCheckinResponse (
            raw['id']
        )
    }
}

export class PlacesGetCheckinsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.PlacesCheckin[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.PlacesCheckin[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesGetCheckinsResponse}
     */
    static deserialize(raw: Object): PlacesGetCheckinsResponse {
        return new PlacesGetCheckinsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PlacesCheckin.deserialize(v) : undefined) : undefined
        )
    }
}

export class PlacesGetTypesResponse {
    /**
     * @class
     * @property {Models.PlacesTypes[]|undefined} response
     */
    constructor (
        readonly response: Models.PlacesTypes[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PlacesGetTypesResponse}
     */
    static deserialize(raw: Object): PlacesGetTypesResponse {
        return new PlacesGetTypesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PlacesTypes.deserialize(v) : undefined) : undefined
        )
    }
}

export class PollsGetByIdResponse {
    /**
     * @class
     * @property {Models.PollsPoll|undefined} response
     */
    constructor (
        readonly response: Models.PollsPoll|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsGetByIdResponse}
     */
    static deserialize(raw: Object): PollsGetByIdResponse {
        return new PollsGetByIdResponse (
            raw['response'] ? Models.PollsPoll.deserialize(raw['response']) : undefined
        )
    }
}

export class PollsAddVoteResponse {
    /**
     * @class
     * @property {boolean} response Result
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsAddVoteResponse}
     */
    static deserialize(raw: Object): PollsAddVoteResponse {
        return new PollsAddVoteResponse (
            !!raw['response']
        )
    }
}

export class PollsDeleteVoteResponse {
    /**
     * @class
     * @property {boolean} response Result
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsDeleteVoteResponse}
     */
    static deserialize(raw: Object): PollsDeleteVoteResponse {
        return new PollsDeleteVoteResponse (
            !!raw['response']
        )
    }
}

export class PollsGetVotersResponse {
    /**
     * @class
     * @property {Models.PollsVoters[]|undefined} response
     */
    constructor (
        readonly response: Models.PollsVoters[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsGetVotersResponse}
     */
    static deserialize(raw: Object): PollsGetVotersResponse {
        return new PollsGetVotersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PollsVoters.deserialize(v) : undefined) : undefined
        )
    }
}

export class PollsCreateResponse {
    /**
     * @class
     * @property {Models.PollsPoll|undefined} response
     */
    constructor (
        readonly response: Models.PollsPoll|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsCreateResponse}
     */
    static deserialize(raw: Object): PollsCreateResponse {
        return new PollsCreateResponse (
            raw['response'] ? Models.PollsPoll.deserialize(raw['response']) : undefined
        )
    }
}

export class PollsEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {PollsEditResponse}
     */
    static deserialize(raw: Object): PollsEditResponse {
        return new PollsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class SearchGetHintsResponse {
    /**
     * @class
     * @property {Models.SearchHint[]|undefined} response
     */
    constructor (
        readonly response: Models.SearchHint[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SearchGetHintsResponse}
     */
    static deserialize(raw: Object): SearchGetHintsResponse {
        return new SearchGetHintsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SearchHint.deserialize(v) : undefined) : undefined
        )
    }
}

export class SecureGetAppBalanceResponse {
    /**
     * @class
     * @property {number} response App balance
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureGetAppBalanceResponse}
     */
    static deserialize(raw: Object): SecureGetAppBalanceResponse {
        return new SecureGetAppBalanceResponse (
            raw['response']
        )
    }
}

export class SecureGetSMSHistoryResponse {
    /**
     * @class
     * @property {Models.SecureSmsNotification[]|undefined} response
     */
    constructor (
        readonly response: Models.SecureSmsNotification[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureGetSMSHistoryResponse}
     */
    static deserialize(raw: Object): SecureGetSMSHistoryResponse {
        return new SecureGetSMSHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureSmsNotification.deserialize(v) : undefined) : undefined
        )
    }
}

export class SecureGetTransactionsHistoryResponse {
    /**
     * @class
     * @property {Models.SecureTransaction[]|undefined} response
     */
    constructor (
        readonly response: Models.SecureTransaction[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureGetTransactionsHistoryResponse}
     */
    static deserialize(raw: Object): SecureGetTransactionsHistoryResponse {
        return new SecureGetTransactionsHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureTransaction.deserialize(v) : undefined) : undefined
        )
    }
}

export class SecureGetUserLevelResponse {
    /**
     * @class
     * @property {Models.SecureLevel[]|undefined} response
     */
    constructor (
        readonly response: Models.SecureLevel[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureGetUserLevelResponse}
     */
    static deserialize(raw: Object): SecureGetUserLevelResponse {
        return new SecureGetUserLevelResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureLevel.deserialize(v) : undefined) : undefined
        )
    }
}

export class SecureSendSMSNotificationResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureSendSMSNotificationResponse}
     */
    static deserialize(raw: Object): SecureSendSMSNotificationResponse {
        return new SecureSendSMSNotificationResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class SecureAddAppEventResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureAddAppEventResponse}
     */
    static deserialize(raw: Object): SecureAddAppEventResponse {
        return new SecureAddAppEventResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class SecureSendNotificationResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureSendNotificationResponse}
     */
    static deserialize(raw: Object): SecureSendNotificationResponse {
        return new SecureSendNotificationResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class SecureSetCounterResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureSetCounterResponse}
     */
    static deserialize(raw: Object): SecureSetCounterResponse {
        return new SecureSetCounterResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class SecureSetUserLevelResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureSetUserLevelResponse}
     */
    static deserialize(raw: Object): SecureSetUserLevelResponse {
        return new SecureSetUserLevelResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class SecureCheckTokenResponse {
    /**
     * @class
     * @property {Models.SecureTokenChecked|undefined} response
     */
    constructor (
        readonly response: Models.SecureTokenChecked|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {SecureCheckTokenResponse}
     */
    static deserialize(raw: Object): SecureCheckTokenResponse {
        return new SecureCheckTokenResponse (
            raw['response'] ? Models.SecureTokenChecked.deserialize(raw['response']) : undefined
        )
    }
}

export class StatsGetResponse {
    /**
     * @class
     * @property {Models.StatsPeriod[]|undefined} response
     */
    constructor (
        readonly response: Models.StatsPeriod[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsGetResponse}
     */
    static deserialize(raw: Object): StatsGetResponse {
        return new StatsGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.StatsPeriod.deserialize(v) : undefined) : undefined
        )
    }
}

export class StatsTrackVisitorResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsTrackVisitorResponse}
     */
    static deserialize(raw: Object): StatsTrackVisitorResponse {
        return new StatsTrackVisitorResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class StatsGetPostReachResponse {
    /**
     * @class
     * @property {Models.StatsWallpostStat[]|undefined} response
     */
    constructor (
        readonly response: Models.StatsWallpostStat[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatsGetPostReachResponse}
     */
    static deserialize(raw: Object): StatsGetPostReachResponse {
        return new StatsGetPostReachResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.StatsWallpostStat.deserialize(v) : undefined) : undefined
        )
    }
}

export class StatusGetResponse {
    /**
     * @class
     * @property {Models.StatusStatus|undefined} response
     */
    constructor (
        readonly response: Models.StatusStatus|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatusGetResponse}
     */
    static deserialize(raw: Object): StatusGetResponse {
        return new StatusGetResponse (
            raw['response'] ? Models.StatusStatus.deserialize(raw['response']) : undefined
        )
    }
}

export class StatusSetResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StatusSetResponse}
     */
    static deserialize(raw: Object): StatusSetResponse {
        return new StatusSetResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class StorageGetResponse {
    /**
     * @class
     * @property {string} response Key value
     */
    constructor (
        readonly response: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StorageGetResponse}
     */
    static deserialize(raw: Object): StorageGetResponse {
        return new StorageGetResponse (
            raw['response']
        )
    }
}

export class StorageSetResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StorageSetResponse}
     */
    static deserialize(raw: Object): StorageSetResponse {
        return new StorageSetResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class StorageGetKeysResponse {
    /**
     * @class
     * @property {string[]|undefined} response
     */
    constructor (
        readonly response: string[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {StorageGetKeysResponse}
     */
    static deserialize(raw: Object): StorageGetKeysResponse {
        return new StorageGetKeysResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class UsersGetResponse {
    /**
     * @class
     * @property {Models.UsersUserXtrCounters[]|undefined} response
     */
    constructor (
        readonly response: Models.UsersUserXtrCounters[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetResponse}
     */
    static deserialize(raw: Object): UsersGetResponse {
        return new UsersGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.UsersUserXtrCounters.deserialize(v) : undefined) : undefined
        )
    }
}

export class UsersSearchResponse {
    /**
     * @class
     * @property {number} count Total number of available results
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersSearchResponse}
     */
    static deserialize(raw: Object): UsersSearchResponse {
        return new UsersSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class UsersIsAppUserResponse {
    /**
     * @class
     * @property {boolean} response Information whether the user have installed an app
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersIsAppUserResponse}
     */
    static deserialize(raw: Object): UsersIsAppUserResponse {
        return new UsersIsAppUserResponse (
            !!raw['response']
        )
    }
}

export class UsersGetSubscriptionsResponse {
    /**
     * @class
     * @property {Models.UsersUsersArray|undefined} users
     * @property {Models.GroupsGroupsArray|undefined} groups
     */
    constructor (
        readonly users: Models.UsersUsersArray|undefined,
        readonly groups: Models.GroupsGroupsArray|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetSubscriptionsResponse}
     */
    static deserialize(raw: Object): UsersGetSubscriptionsResponse {
        return new UsersGetSubscriptionsResponse (
            raw['users'] ? Models.UsersUsersArray.deserialize(raw['users']) : undefined,
            raw['groups'] ? Models.GroupsGroupsArray.deserialize(raw['groups']) : undefined
        )
    }
}

export class UsersGetSubscriptionsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number of available results
     * @property {any[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: any[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetSubscriptionsExtendedResponse}
     */
    static deserialize(raw: Object): UsersGetSubscriptionsExtendedResponse {
        return new UsersGetSubscriptionsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class UsersGetFollowersResponse {
    /**
     * @class
     * @property {number} count Total friends number
     * @property {number[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetFollowersResponse}
     */
    static deserialize(raw: Object): UsersGetFollowersResponse {
        return new UsersGetFollowersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}

export class UsersGetFollowersFieldsResponse {
    /**
     * @class
     * @property {number} count Total number of available results
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetFollowersFieldsResponse}
     */
    static deserialize(raw: Object): UsersGetFollowersFieldsResponse {
        return new UsersGetFollowersFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class UsersReportResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersReportResponse}
     */
    static deserialize(raw: Object): UsersReportResponse {
        return new UsersReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class UsersGetNearbyResponse {
    /**
     * @class
     * @property {number} count Users number
     * @property {Models.UsersUserFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UsersGetNearbyResponse}
     */
    static deserialize(raw: Object): UsersGetNearbyResponse {
        return new UsersGetNearbyResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class UtilsCheckLinkResponse {
    /**
     * @class
     * @property {Models.UtilsLinkChecked|undefined} response
     */
    constructor (
        readonly response: Models.UtilsLinkChecked|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UtilsCheckLinkResponse}
     */
    static deserialize(raw: Object): UtilsCheckLinkResponse {
        return new UtilsCheckLinkResponse (
            raw['response'] ? Models.UtilsLinkChecked.deserialize(raw['response']) : undefined
        )
    }
}

export class UtilsResolveScreenNameResponse {
    /**
     * @class
     * @property {Models.UtilsDomainResolved|undefined} response
     */
    constructor (
        readonly response: Models.UtilsDomainResolved|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UtilsResolveScreenNameResponse}
     */
    static deserialize(raw: Object): UtilsResolveScreenNameResponse {
        return new UtilsResolveScreenNameResponse (
            raw['response'] ? Models.UtilsDomainResolved.deserialize(raw['response']) : undefined
        )
    }
}

export class UtilsGetServerTimeResponse {
    /**
     * @class
     * @property {number} response Time as Unixtime
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {UtilsGetServerTimeResponse}
     */
    static deserialize(raw: Object): UtilsGetServerTimeResponse {
        return new UtilsGetServerTimeResponse (
            raw['response']
        )
    }
}

export class VideoGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetResponse}
     */
    static deserialize(raw: Object): VideoGetResponse {
        return new VideoGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideoFull[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoFull[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetExtendedResponse {
        return new VideoGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoEditResponse}
     */
    static deserialize(raw: Object): VideoEditResponse {
        return new VideoEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoAddResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoAddResponse}
     */
    static deserialize(raw: Object): VideoAddResponse {
        return new VideoAddResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoSaveResponse {
    /**
     * @class
     * @property {Models.VideoSaveResult|undefined} response
     */
    constructor (
        readonly response: Models.VideoSaveResult|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoSaveResponse}
     */
    static deserialize(raw: Object): VideoSaveResponse {
        return new VideoSaveResponse (
            raw['response'] ? Models.VideoSaveResult.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoDeleteResponse}
     */
    static deserialize(raw: Object): VideoDeleteResponse {
        return new VideoDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoRestoreResponse}
     */
    static deserialize(raw: Object): VideoRestoreResponse {
        return new VideoRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoSearchResponse}
     */
    static deserialize(raw: Object): VideoSearchResponse {
        return new VideoSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoSearchExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoSearchExtendedResponse}
     */
    static deserialize(raw: Object): VideoSearchExtendedResponse {
        return new VideoSearchExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetUserVideosResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetUserVideosResponse}
     */
    static deserialize(raw: Object): VideoGetUserVideosResponse {
        return new VideoGetUserVideosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetUserVideosExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideo[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetUserVideosExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetUserVideosExtendedResponse {
        return new VideoGetUserVideosExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetAlbumsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideoAlbumFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetAlbumsResponse}
     */
    static deserialize(raw: Object): VideoGetAlbumsResponse {
        return new VideoGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetAlbumsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideoAlbumFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetAlbumsExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetAlbumsExtendedResponse {
        return new VideoGetAlbumsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetAlbumByIdResponse {
    /**
     * @class
     * @property {Models.VideoVideoAlbumFull|undefined} response
     */
    constructor (
        readonly response: Models.VideoVideoAlbumFull|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetAlbumByIdResponse}
     */
    static deserialize(raw: Object): VideoGetAlbumByIdResponse {
        return new VideoGetAlbumByIdResponse (
            raw['response'] ? Models.VideoVideoAlbumFull.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoAddAlbumResponse {
    /**
     * @class
     * @property {number} albumId Created album ID
     */
    constructor (
        readonly albumId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoAddAlbumResponse}
     */
    static deserialize(raw: Object): VideoAddAlbumResponse {
        return new VideoAddAlbumResponse (
            raw['album_id']
        )
    }
}

export class VideoEditAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoEditAlbumResponse}
     */
    static deserialize(raw: Object): VideoEditAlbumResponse {
        return new VideoEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoDeleteAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoDeleteAlbumResponse}
     */
    static deserialize(raw: Object): VideoDeleteAlbumResponse {
        return new VideoDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoReorderAlbumsResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoReorderAlbumsResponse}
     */
    static deserialize(raw: Object): VideoReorderAlbumsResponse {
        return new VideoReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoReorderVideosResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoReorderVideosResponse}
     */
    static deserialize(raw: Object): VideoReorderVideosResponse {
        return new VideoReorderVideosResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoAddToAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoAddToAlbumResponse}
     */
    static deserialize(raw: Object): VideoAddToAlbumResponse {
        return new VideoAddToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoRemoveFromAlbumResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoRemoveFromAlbumResponse}
     */
    static deserialize(raw: Object): VideoRemoveFromAlbumResponse {
        return new VideoRemoveFromAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoGetAlbumsByVideoResponse {
    /**
     * @class
     * @property {number[]|undefined} response
     */
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetAlbumsByVideoResponse}
     */
    static deserialize(raw: Object): VideoGetAlbumsByVideoResponse {
        return new VideoGetAlbumsByVideoResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}

export class VideoGetAlbumsByVideoExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideoAlbumFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetAlbumsByVideoExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetAlbumsByVideoExtendedResponse {
        return new VideoGetAlbumsByVideoExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallComment[]|undefined} items
     * @property {Models.UsersUserMin[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment[]|undefined,
        readonly profiles: Models.UsersUserMin[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCommentsResponse}
     */
    static deserialize(raw: Object): VideoGetCommentsResponse {
        return new VideoGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoGetCommentsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallComment[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCommentsExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetCommentsExtendedResponse {
        return new VideoGetCommentsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoCreateCommentResponse {
    /**
     * @class
     * @property {number} response Created comment ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoCreateCommentResponse}
     */
    static deserialize(raw: Object): VideoCreateCommentResponse {
        return new VideoCreateCommentResponse (
            raw['response']
        )
    }
}

export class VideoDeleteCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoDeleteCommentResponse}
     */
    static deserialize(raw: Object): VideoDeleteCommentResponse {
        return new VideoDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoRestoreCommentResponse {
    /**
     * @class
     * @property {boolean} response Returns 1 if request has been processed successfully, 0 if the comment is not found
     */
    constructor (
        readonly response: boolean
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoRestoreCommentResponse}
     */
    static deserialize(raw: Object): VideoRestoreCommentResponse {
        return new VideoRestoreCommentResponse (
            !!raw['response']
        )
    }
}

export class VideoEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoEditCommentResponse}
     */
    static deserialize(raw: Object): VideoEditCommentResponse {
        return new VideoEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoGetTagsResponse {
    /**
     * @class
     * @property {Models.VideoVideoTag[]|undefined} response
     */
    constructor (
        readonly response: Models.VideoVideoTag[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetTagsResponse}
     */
    static deserialize(raw: Object): VideoGetTagsResponse {
        return new VideoGetTagsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.VideoVideoTag.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoPutTagResponse {
    /**
     * @class
     * @property {number} response Created tag ID
     */
    constructor (
        readonly response: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoPutTagResponse}
     */
    static deserialize(raw: Object): VideoPutTagResponse {
        return new VideoPutTagResponse (
            raw['response']
        )
    }
}

export class VideoRemoveTagResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoRemoveTagResponse}
     */
    static deserialize(raw: Object): VideoRemoveTagResponse {
        return new VideoRemoveTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoGetNewTagsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.VideoVideoTagInfo[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoTagInfo[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetNewTagsResponse}
     */
    static deserialize(raw: Object): VideoGetNewTagsResponse {
        return new VideoGetNewTagsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoTagInfo.deserialize(v) : undefined) : undefined
        )
    }
}

export class VideoReportResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoReportResponse}
     */
    static deserialize(raw: Object): VideoReportResponse {
        return new VideoReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoReportCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoReportCommentResponse}
     */
    static deserialize(raw: Object): VideoReportCommentResponse {
        return new VideoReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class VideoGetCatalogResponse {
    /**
     * @class
     * @property {Models.VideoCatBlock[]|undefined} items
     * @property {string} next New value for _from_ parameter
     */
    constructor (
        readonly items: Models.VideoCatBlock[]|undefined,
        readonly next: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCatalogResponse}
     */
    static deserialize(raw: Object): VideoGetCatalogResponse {
        return new VideoGetCatalogResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatBlock.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}

export class VideoGetCatalogExtendedResponse {
    /**
     * @class
     * @property {Models.VideoCatBlock[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     * @property {string} next New value for _from_ parameter
     */
    constructor (
        readonly items: Models.VideoCatBlock[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined,
        readonly next: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCatalogExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetCatalogExtendedResponse {
        return new VideoGetCatalogExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatBlock.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}

export class VideoGetCatalogSectionResponse {
    /**
     * @class
     * @property {Models.VideoCatElement[]|undefined} items
     * @property {string} next New value for _from_ parameter
     */
    constructor (
        readonly items: Models.VideoCatElement[]|undefined,
        readonly next: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCatalogSectionResponse}
     */
    static deserialize(raw: Object): VideoGetCatalogSectionResponse {
        return new VideoGetCatalogSectionResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatElement.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}

export class VideoGetCatalogSectionExtendedResponse {
    /**
     * @class
     * @property {Models.VideoCatElement[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     * @property {string} next New value for _from_ parameter
     */
    constructor (
        readonly items: Models.VideoCatElement[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined,
        readonly next: string
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoGetCatalogSectionExtendedResponse}
     */
    static deserialize(raw: Object): VideoGetCatalogSectionExtendedResponse {
        return new VideoGetCatalogSectionExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatElement.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}

export class VideoHideCatalogSectionResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {VideoHideCatalogSectionResponse}
     */
    static deserialize(raw: Object): VideoHideCatalogSectionResponse {
        return new VideoHideCatalogSectionResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallGetResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetResponse}
     */
    static deserialize(raw: Object): WallGetResponse {
        return new WallGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallGetExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostFull[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetExtendedResponse}
     */
    static deserialize(raw: Object): WallGetExtendedResponse {
        return new WallGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallSearchResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostFull[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallSearchResponse}
     */
    static deserialize(raw: Object): WallSearchResponse {
        return new WallSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallSearchExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallpostFull[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallSearchExtendedResponse}
     */
    static deserialize(raw: Object): WallSearchExtendedResponse {
        return new WallSearchExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallGetByIdResponse {
    /**
     * @class
     * @property {Models.WallWallpostFull[]|undefined} response
     */
    constructor (
        readonly response: Models.WallWallpostFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetByIdResponse}
     */
    static deserialize(raw: Object): WallGetByIdResponse {
        return new WallGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallGetByIdExtendedResponse {
    /**
     * @class
     * @property {Models.WallWallpostFull[]|undefined} items
     * @property {Models.UsersUserFull[]|undefined} profiles
     * @property {Models.GroupsGroupFull[]|undefined} groups
     */
    constructor (
        readonly items: Models.WallWallpostFull[]|undefined,
        readonly profiles: Models.UsersUserFull[]|undefined,
        readonly groups: Models.GroupsGroupFull[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetByIdExtendedResponse}
     */
    static deserialize(raw: Object): WallGetByIdExtendedResponse {
        return new WallGetByIdExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallPostResponse {
    /**
     * @class
     * @property {number} postId Created post ID
     */
    constructor (
        readonly postId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallPostResponse}
     */
    static deserialize(raw: Object): WallPostResponse {
        return new WallPostResponse (
            raw['post_id']
        )
    }
}

export class WallRepostResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} success
     * @property {number} postId Created post ID
     * @property {number} repostsCount Reposts number
     * @property {number} likesCount Reposts number
     */
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly postId: number,
        readonly repostsCount: number,
        readonly likesCount: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallRepostResponse}
     */
    static deserialize(raw: Object): WallRepostResponse {
        return new WallRepostResponse (
            raw['success'] ? Models.BaseOkResponse.deserialize(raw['success']) : undefined,
            raw['post_id'],
            raw['reposts_count'],
            raw['likes_count']
        )
    }
}

export class WallGetRepostsResponse {
    /**
     * @class
     * @property {Models.WallWallpostFull[]|undefined} items
     * @property {Models.UsersUser[]|undefined} profiles
     * @property {Models.GroupsGroup[]|undefined} groups
     */
    constructor (
        readonly items: Models.WallWallpostFull[]|undefined,
        readonly profiles: Models.UsersUser[]|undefined,
        readonly groups: Models.GroupsGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetRepostsResponse}
     */
    static deserialize(raw: Object): WallGetRepostsResponse {
        return new WallGetRepostsResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUser.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallEditResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallEditResponse}
     */
    static deserialize(raw: Object): WallEditResponse {
        return new WallEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallDeleteResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallDeleteResponse}
     */
    static deserialize(raw: Object): WallDeleteResponse {
        return new WallDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallRestoreResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallRestoreResponse}
     */
    static deserialize(raw: Object): WallRestoreResponse {
        return new WallRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallPinResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallPinResponse}
     */
    static deserialize(raw: Object): WallPinResponse {
        return new WallPinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallUnpinResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallUnpinResponse}
     */
    static deserialize(raw: Object): WallUnpinResponse {
        return new WallUnpinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallComment[]|undefined} items
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetCommentsResponse}
     */
    static deserialize(raw: Object): WallGetCommentsResponse {
        return new WallGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallGetCommentsExtendedResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WallWallComment[]|undefined} items
     * @property {Models.UsersUser[]|undefined} profiles
     * @property {Models.GroupsGroup[]|undefined} groups
     */
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment[]|undefined,
        readonly profiles: Models.UsersUser[]|undefined,
        readonly groups: Models.GroupsGroup[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallGetCommentsExtendedResponse}
     */
    static deserialize(raw: Object): WallGetCommentsExtendedResponse {
        return new WallGetCommentsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUser.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}

export class WallCreateCommentResponse {
    /**
     * @class
     * @property {number} commentId Created comment ID
     */
    constructor (
        readonly commentId: number
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallCreateCommentResponse}
     */
    static deserialize(raw: Object): WallCreateCommentResponse {
        return new WallCreateCommentResponse (
            raw['comment_id']
        )
    }
}

export class WallEditCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallEditCommentResponse}
     */
    static deserialize(raw: Object): WallEditCommentResponse {
        return new WallEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallDeleteCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallDeleteCommentResponse}
     */
    static deserialize(raw: Object): WallDeleteCommentResponse {
        return new WallDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallRestoreCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallRestoreCommentResponse}
     */
    static deserialize(raw: Object): WallRestoreCommentResponse {
        return new WallRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallReportPostResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallReportPostResponse}
     */
    static deserialize(raw: Object): WallReportPostResponse {
        return new WallReportPostResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WallReportCommentResponse {
    /**
     * @class
     * @property {Models.BaseOkResponse|undefined} response
     */
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WallReportCommentResponse}
     */
    static deserialize(raw: Object): WallReportCommentResponse {
        return new WallReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}

export class WidgetsGetCommentsResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WidgetsWidgetComment[]|undefined} posts
     */
    constructor (
        readonly count: number,
        readonly posts: Models.WidgetsWidgetComment[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsGetCommentsResponse}
     */
    static deserialize(raw: Object): WidgetsGetCommentsResponse {
        return new WidgetsGetCommentsResponse (
            raw['count'],
            raw['posts'] ? raw['posts'].map(v => v ? Models.WidgetsWidgetComment.deserialize(v) : undefined) : undefined
        )
    }
}

export class WidgetsGetPagesResponse {
    /**
     * @class
     * @property {number} count Total number
     * @property {Models.WidgetsWidgetPage[]|undefined} pages
     */
    constructor (
        readonly count: number,
        readonly pages: Models.WidgetsWidgetPage[]|undefined
    ) {

    }

    /**
     * @param {Object} raw
     * @returns {WidgetsGetPagesResponse}
     */
    static deserialize(raw: Object): WidgetsGetPagesResponse {
        return new WidgetsGetPagesResponse (
            raw['count'],
            raw['pages'] ? raw['pages'].map(v => v ? Models.WidgetsWidgetPage.deserialize(v) : undefined) : undefined
        )
    }
}
