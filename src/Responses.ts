import * as Models from './Models'

export class AccountBanUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountBanUserResponse {
        return new AccountBanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountChangePasswordResponse {
    constructor (
        readonly token: string,
        readonly secret: string
    ) {

    }

    static deserialize(raw: Object): AccountChangePasswordResponse {
        return new AccountChangePasswordResponse (
            raw['token'],
            raw['secret']
        )
    }
}
export class AccountGetActiveOffersResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AccountOffer|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetActiveOffersResponse {
        return new AccountGetActiveOffersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AccountOffer.deserialize(v) : undefined) : undefined
        )
    }
}
export class AccountGetAppPermissionsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AccountGetAppPermissionsResponse {
        return new AccountGetAppPermissionsResponse (
            raw['response']
        )
    }
}
export class AccountGetBannedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetBannedResponse {
        return new AccountGetBannedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class AccountGetCountersResponse {
    constructor (
        readonly response: Models.AccountAccountCounters|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetCountersResponse {
        return new AccountGetCountersResponse (
            raw['response'] ? Models.AccountAccountCounters.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountGetInfoResponse {
    constructor (
        readonly response: Models.AccountInfo|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetInfoResponse {
        return new AccountGetInfoResponse (
            raw['response'] ? Models.AccountInfo.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountGetProfileInfoResponse {
    constructor (
        readonly response: Models.AccountUserSettings|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetProfileInfoResponse {
        return new AccountGetProfileInfoResponse (
            raw['response'] ? Models.AccountUserSettings.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountGetPushSettingsResponse {
    constructor (
        readonly response: Models.AccountPushSettings|undefined
    ) {

    }

    static deserialize(raw: Object): AccountGetPushSettingsResponse {
        return new AccountGetPushSettingsResponse (
            raw['response'] ? Models.AccountPushSettings.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountLookupContactsResponse {
    constructor (
        readonly response: Models.AccountLookupResult|undefined
    ) {

    }

    static deserialize(raw: Object): AccountLookupContactsResponse {
        return new AccountLookupContactsResponse (
            raw['response'] ? Models.AccountLookupResult.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountRegisterDeviceResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountRegisterDeviceResponse {
        return new AccountRegisterDeviceResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSaveProfileInfoResponse {
    constructor (
        readonly changed: boolean,
        readonly nameRequest: Models.AccountNameRequest|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSaveProfileInfoResponse {
        return new AccountSaveProfileInfoResponse (
            !!raw['changed'],
            raw['name_request'] ? Models.AccountNameRequest.deserialize(raw['name_request']) : undefined
        )
    }
}
export class AccountSetInfoResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetInfoResponse {
        return new AccountSetInfoResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSetNameInMenuResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetNameInMenuResponse {
        return new AccountSetNameInMenuResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSetOnlineResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetOnlineResponse {
        return new AccountSetOnlineResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSetOfflineResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetOfflineResponse {
        return new AccountSetOfflineResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSetPushSettingsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetPushSettingsResponse {
        return new AccountSetPushSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountSetSilenceModeResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountSetSilenceModeResponse {
        return new AccountSetSilenceModeResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountUnbanUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountUnbanUserResponse {
        return new AccountUnbanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AccountUnregisterDeviceResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AccountUnregisterDeviceResponse {
        return new AccountUnregisterDeviceResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsAddOfficeUsersResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): AdsAddOfficeUsersResponse {
        return new AdsAddOfficeUsersResponse (
            raw['response']
        )
    }
}
export class AdsCheckLinkResponse {
    constructor (
        readonly response: Models.AdsLinkStatus|undefined
    ) {

    }

    static deserialize(raw: Object): AdsCheckLinkResponse {
        return new AdsCheckLinkResponse (
            raw['response'] ? Models.AdsLinkStatus.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsCreateAdsResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsCreateAdsResponse {
        return new AdsCreateAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AdsCreateCampaignsResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsCreateCampaignsResponse {
        return new AdsCreateCampaignsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AdsCreateClientsResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsCreateClientsResponse {
        return new AdsCreateClientsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AdsCreateTargetGroupResponse {
    constructor (
        readonly id: number,
        readonly pixel: string
    ) {

    }

    static deserialize(raw: Object): AdsCreateTargetGroupResponse {
        return new AdsCreateTargetGroupResponse (
            raw['id'],
            raw['pixel']
        )
    }
}
export class AdsDeleteAdsResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsDeleteAdsResponse {
        return new AdsDeleteAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AdsDeleteCampaignsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsDeleteCampaignsResponse {
        return new AdsDeleteCampaignsResponse (
            raw['response']
        )
    }
}
export class AdsDeleteClientsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsDeleteClientsResponse {
        return new AdsDeleteClientsResponse (
            raw['response']
        )
    }
}
export class AdsDeleteTargetGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AdsDeleteTargetGroupResponse {
        return new AdsDeleteTargetGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsGetAccountsResponse {
    constructor (
        readonly response: Models.AdsAccount|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetAccountsResponse {
        return new AdsGetAccountsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAccount.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetAdsResponse {
    constructor (
        readonly response: Models.AdsAd|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetAdsResponse {
        return new AdsGetAdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAd.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetAdsLayoutResponse {
    constructor (
        readonly response: Models.AdsAdLayout|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetAdsLayoutResponse {
        return new AdsGetAdsLayoutResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsAdLayout.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetAdsPostsReachResponse {
    constructor (
        readonly response: Models.AdsPostStats|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetAdsPostsReachResponse {
        return new AdsGetAdsPostsReachResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsPostStats.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetAdsTargetingResponse {
    constructor (
        readonly response: Models.AdsTargSettings|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetAdsTargetingResponse {
        return new AdsGetAdsTargetingResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSettings.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetBudgetResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsGetBudgetResponse {
        return new AdsGetBudgetResponse (
            raw['response']
        )
    }
}
export class AdsGetCampaignsResponse {
    constructor (
        readonly response: Models.AdsCampaign|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetCampaignsResponse {
        return new AdsGetCampaignsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsCampaign.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetCategoriesResponse {
    constructor (
        readonly response: Models.AdsCategory|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetCategoriesResponse {
        return new AdsGetCategoriesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsCategory.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetClientsResponse {
    constructor (
        readonly response: Models.AdsClient|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetClientsResponse {
        return new AdsGetClientsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsClient.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetDemographicsResponse {
    constructor (
        readonly response: Models.AdsDemoStats|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetDemographicsResponse {
        return new AdsGetDemographicsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsDemoStats.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetFloodStatsResponse {
    constructor (
        readonly response: Models.AdsFloodStats|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetFloodStatsResponse {
        return new AdsGetFloodStatsResponse (
            raw['response'] ? Models.AdsFloodStats.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsGetOfficeUsersResponse {
    constructor (
        readonly response: Models.AdsUsers|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetOfficeUsersResponse {
        return new AdsGetOfficeUsersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsUsers.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetRejectionReasonResponse {
    constructor (
        readonly response: Models.AdsRejectReason|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetRejectionReasonResponse {
        return new AdsGetRejectionReasonResponse (
            raw['response'] ? Models.AdsRejectReason.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsGetStatisticsResponse {
    constructor (
        readonly response: Models.AdsStats|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetStatisticsResponse {
        return new AdsGetStatisticsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsStats.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetSuggestionsResponse {
    constructor (
        readonly response: Models.AdsTargSuggestions|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetSuggestionsResponse {
        return new AdsGetSuggestionsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestions.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetSuggestionsRegionsResponse {
    constructor (
        readonly response: Models.AdsTargSuggestionsRegions|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetSuggestionsRegionsResponse {
        return new AdsGetSuggestionsRegionsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsRegions.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetSuggestionsCitiesResponse {
    constructor (
        readonly response: Models.AdsTargSuggestionsCities|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetSuggestionsCitiesResponse {
        return new AdsGetSuggestionsCitiesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsCities.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetSuggestionsSchoolsResponse {
    constructor (
        readonly response: Models.AdsTargSuggestionsSchools|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetSuggestionsSchoolsResponse {
        return new AdsGetSuggestionsSchoolsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargSuggestionsSchools.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetTargetGroupsResponse {
    constructor (
        readonly response: Models.AdsTargetGroup|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetTargetGroupsResponse {
        return new AdsGetTargetGroupsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AdsTargetGroup.deserialize(v) : undefined) : undefined
        )
    }
}
export class AdsGetTargetingStatsResponse {
    constructor (
        readonly response: Models.AdsTargStats|undefined
    ) {

    }

    static deserialize(raw: Object): AdsGetTargetingStatsResponse {
        return new AdsGetTargetingStatsResponse (
            raw['response'] ? Models.AdsTargStats.deserialize(raw['response']) : undefined
        )
    }
}
export class AdsGetUploadURLResponse {
    constructor (
        readonly response: string
    ) {

    }

    static deserialize(raw: Object): AdsGetUploadURLResponse {
        return new AdsGetUploadURLResponse (
            raw['response']
        )
    }
}
export class AdsGetVideoUploadURLResponse {
    constructor (
        readonly response: string
    ) {

    }

    static deserialize(raw: Object): AdsGetVideoUploadURLResponse {
        return new AdsGetVideoUploadURLResponse (
            raw['response']
        )
    }
}
export class AdsImportTargetContactsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsImportTargetContactsResponse {
        return new AdsImportTargetContactsResponse (
            raw['response']
        )
    }
}
export class AdsRemoveOfficeUsersResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): AdsRemoveOfficeUsersResponse {
        return new AdsRemoveOfficeUsersResponse (
            raw['response']
        )
    }
}
export class AdsUpdateAdsResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AdsUpdateAdsResponse {
        return new AdsUpdateAdsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AdsUpdateCampaignsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsUpdateCampaignsResponse {
        return new AdsUpdateCampaignsResponse (
            raw['response']
        )
    }
}
export class AdsUpdateClientsResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AdsUpdateClientsResponse {
        return new AdsUpdateClientsResponse (
            raw['response']
        )
    }
}
export class AdsUpdateTargetGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AdsUpdateTargetGroupResponse {
        return new AdsUpdateTargetGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AppsGetCatalogResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AppsApp|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AppsGetCatalogResponse {
        return new AppsGetCatalogResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsApp.deserialize(v) : undefined) : undefined
        )
    }
}
export class AppsGetLeaderboardResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AppsLeaderboard|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AppsGetLeaderboardResponse {
        return new AppsGetLeaderboardResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsLeaderboard.deserialize(v) : undefined) : undefined
        )
    }
}
export class AppsGetLeaderboardExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AppsLeaderboard|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AppsGetLeaderboardExtendedResponse {
        return new AppsGetLeaderboardExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsLeaderboard.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class AppsGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AppsApp|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AppsGetResponse {
        return new AppsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AppsApp.deserialize(v) : undefined) : undefined
        )
    }
}
export class AppsGetScoreResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AppsGetScoreResponse {
        return new AppsGetScoreResponse (
            raw['response']
        )
    }
}
export class AppsSendRequestResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AppsSendRequestResponse {
        return new AppsSendRequestResponse (
            raw['response']
        )
    }
}
export class AppsDeleteAppRequestsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AppsDeleteAppRequestsResponse {
        return new AppsDeleteAppRequestsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AppsGetFriendsListResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AppsGetFriendsListResponse {
        return new AppsGetFriendsListResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetResponse {
        return new AudioGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetByIdResponse {
    constructor (
        readonly response: Models.AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetByIdResponse {
        return new AudioGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetLyricsResponse {
    constructor (
        readonly response: Models.AudioLyrics|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetLyricsResponse {
        return new AudioGetLyricsResponse (
            raw['response'] ? Models.AudioLyrics.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioSearchResponse {
        return new AudioSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): AudioGetUploadServerResponse {
        return new AudioGetUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class AudioSaveResponse {
    constructor (
        readonly response: Models.AudioAudio|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioSaveResponse {
        return new AudioSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudio.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioAddResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AudioAddResponse {
        return new AudioAddResponse (
            raw['response']
        )
    }
}
export class AudioDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioDeleteResponse {
        return new AudioDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioEditResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AudioEditResponse {
        return new AudioEditResponse (
            raw['response']
        )
    }
}
export class AudioReorderResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioReorderResponse {
        return new AudioReorderResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioRestoreResponse {
        return new AudioRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioGetAlbumsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.AudioAudioAlbum|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetAlbumsResponse {
        return new AudioGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.AudioAudioAlbum.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioAddAlbumResponse {
    constructor (
        readonly albumId: number
    ) {

    }

    static deserialize(raw: Object): AudioAddAlbumResponse {
        return new AudioAddAlbumResponse (
            raw['album_id']
        )
    }
}
export class AudioEditAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioEditAlbumResponse {
        return new AudioEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioDeleteAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioDeleteAlbumResponse {
        return new AudioDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioMoveToAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AudioMoveToAlbumResponse {
        return new AudioMoveToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AudioSetBroadcastResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioSetBroadcastResponse {
        return new AudioSetBroadcastResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class AudioGetBroadcastListResponse {
    constructor (
        readonly response: Models.UsersUserBroadcast|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetBroadcastListResponse {
        return new AudioGetBroadcastListResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.UsersUserBroadcast.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetRecommendationsResponse {
    constructor (
        readonly response: Models.AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetRecommendationsResponse {
        return new AudioGetRecommendationsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetPopularResponse {
    constructor (
        readonly response: Models.AudioAudioFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): AudioGetPopularResponse {
        return new AudioGetPopularResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.AudioAudioFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class AudioGetCountResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): AudioGetCountResponse {
        return new AudioGetCountResponse (
            raw['response']
        )
    }
}
export class AuthCheckPhoneResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): AuthCheckPhoneResponse {
        return new AuthCheckPhoneResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class AuthSignupResponse {
    constructor (
        readonly sid: string
    ) {

    }

    static deserialize(raw: Object): AuthSignupResponse {
        return new AuthSignupResponse (
            raw['sid']
        )
    }
}
export class AuthConfirmResponse {
    constructor (
        readonly success: number,
        readonly userId: number
    ) {

    }

    static deserialize(raw: Object): AuthConfirmResponse {
        return new AuthConfirmResponse (
            raw['success'],
            raw['user_id']
        )
    }
}
export class AuthRestoreResponse {
    constructor (
        readonly success: number,
        readonly sid: string
    ) {

    }

    static deserialize(raw: Object): AuthRestoreResponse {
        return new AuthRestoreResponse (
            raw['success'],
            raw['sid']
        )
    }
}
export class BoardGetTopicsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopic|undefined[]|undefined,
        readonly defaultOrder: Models.BoardDefaultOrder|undefined,
        readonly canAddTopics: boolean
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopic|undefined[]|undefined,
        readonly defaultOrder: Models.BoardDefaultOrder|undefined,
        readonly canAddTopics: boolean,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopicComment|undefined[]|undefined,
        readonly poll: Models.BoardTopicPoll|undefined
    ) {

    }

    static deserialize(raw: Object): BoardGetCommentsResponse {
        return new BoardGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BoardTopicComment.deserialize(v) : undefined) : undefined,
            raw['poll'] ? Models.BoardTopicPoll.deserialize(raw['poll']) : undefined
        )
    }
}
export class BoardGetCommentsExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.BoardTopicComment|undefined[]|undefined,
        readonly poll: Models.BoardTopicPoll|undefined,
        readonly profiles: Models.UsersUser|undefined[]|undefined,
        readonly groups: Models.GroupsGroup|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): BoardAddTopicResponse {
        return new BoardAddTopicResponse (
            raw['response']
        )
    }
}
export class BoardCreateCommentResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): BoardCreateCommentResponse {
        return new BoardCreateCommentResponse (
            raw['response']
        )
    }
}
export class BoardDeleteTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardDeleteTopicResponse {
        return new BoardDeleteTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardEditTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardEditTopicResponse {
        return new BoardEditTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardEditCommentResponse {
        return new BoardEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardRestoreCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardRestoreCommentResponse {
        return new BoardRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardDeleteCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardDeleteCommentResponse {
        return new BoardDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardOpenTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardOpenTopicResponse {
        return new BoardOpenTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardCloseTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardCloseTopicResponse {
        return new BoardCloseTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardFixTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardFixTopicResponse {
        return new BoardFixTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class BoardUnfixTopicResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): BoardUnfixTopicResponse {
        return new BoardUnfixTopicResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class DatabaseGetCountriesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.BaseCountry|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetCountriesResponse {
        return new DatabaseGetCountriesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BaseCountry.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetRegionsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseRegion|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetRegionsResponse {
        return new DatabaseGetRegionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseRegion.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetStreetsByIdResponse {
    constructor (
        readonly response: Models.DatabaseStreet|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetStreetsByIdResponse {
        return new DatabaseGetStreetsByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DatabaseStreet.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetCountriesByIdResponse {
    constructor (
        readonly response: Models.BaseCountry|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetCountriesByIdResponse {
        return new DatabaseGetCountriesByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.BaseCountry.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetChairsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.BaseObject|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetChairsResponse {
        return new DatabaseGetChairsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.BaseObject.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetCitiesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseCity|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetCitiesResponse {
        return new DatabaseGetCitiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseCity.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetCitiesByIdResponse {
    constructor (
        readonly response: Models.BaseObject|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetCitiesByIdResponse {
        return new DatabaseGetCitiesByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.BaseObject.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetUniversitiesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseUniversity|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetUniversitiesResponse {
        return new DatabaseGetUniversitiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseUniversity.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetSchoolsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseSchool|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetSchoolsResponse {
        return new DatabaseGetSchoolsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseSchool.deserialize(v) : undefined) : undefined
        )
    }
}
export class DatabaseGetSchoolClassesResponse {
    constructor (
        readonly response: any[]|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetSchoolClassesResponse {
        return new DatabaseGetSchoolClassesResponse (
            raw['response'] ? raw['response'].map(v => v ? v.map(v => v) : undefined) : undefined
        )
    }
}
export class DatabaseGetFacultiesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DatabaseFaculty|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DatabaseGetFacultiesResponse {
        return new DatabaseGetFacultiesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DatabaseFaculty.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DocsDoc|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsGetResponse {
        return new DocsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsGetByIdResponse {
    constructor (
        readonly response: Models.DocsDoc|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsGetByIdResponse {
        return new DocsGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsGetUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): DocsGetUploadServerResponse {
        return new DocsGetUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class DocsGetWallUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): DocsGetWallUploadServerResponse {
        return new DocsGetWallUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class DocsSaveResponse {
    constructor (
        readonly response: Models.DocsDoc|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsSaveResponse {
        return new DocsSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): DocsDeleteResponse {
        return new DocsDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class DocsAddResponse {
    constructor (
        readonly id: number
    ) {

    }

    static deserialize(raw: Object): DocsAddResponse {
        return new DocsAddResponse (
            raw['id']
        )
    }
}
export class DocsGetTypesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DocsDocTypes|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsGetTypesResponse {
        return new DocsGetTypesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDocTypes.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.DocsDoc|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): DocsSearchResponse {
        return new DocsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.DocsDoc.deserialize(v) : undefined) : undefined
        )
    }
}
export class DocsEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): DocsEditResponse {
        return new DocsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveGetUsersResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetUsersResponse {
        return new FaveGetUsersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveGetPhotosResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetPhotosResponse {
        return new FaveGetPhotosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveGetPostsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetPostsResponse {
        return new FaveGetPostsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveGetVideosResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetVideosResponse {
        return new FaveGetVideosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveGetLinksResponse {
    constructor (
        readonly count: number,
        readonly items: Models.FaveFavesLink|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetLinksResponse {
        return new FaveGetLinksResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FaveFavesLink.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveGetMarketItemsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FaveGetMarketItemsResponse {
        return new FaveGetMarketItemsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class FaveAddUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveAddUserResponse {
        return new FaveAddUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveRemoveUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveRemoveUserResponse {
        return new FaveRemoveUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveAddGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveAddGroupResponse {
        return new FaveAddGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveRemoveGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveRemoveGroupResponse {
        return new FaveRemoveGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveAddLinkResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveAddLinkResponse {
        return new FaveAddLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FaveRemoveLinkResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FaveRemoveLinkResponse {
        return new FaveRemoveLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FriendsGetResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetResponse {
        return new FriendsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class FriendsGetFieldsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.FriendsUserXtrLists|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetFieldsResponse {
        return new FriendsGetFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsUserXtrLists.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsGetOnlineResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetOnlineResponse {
        return new FriendsGetOnlineResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class FriendsGetOnlineOnlineMobileResponse {
    constructor (
        readonly online: number[]|undefined,
        readonly onlineMobile: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetOnlineOnlineMobileResponse {
        return new FriendsGetOnlineOnlineMobileResponse (
            raw['online'] ? raw['online'].map(v => v) : undefined,
            raw['online_mobile'] ? raw['online_mobile'].map(v => v) : undefined
        )
    }
}
export class FriendsGetMutualResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetMutualResponse {
        return new FriendsGetMutualResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class FriendsGetRecentResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetRecentResponse {
        return new FriendsGetRecentResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class FriendsGetRequestsResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetRequestsResponse {
        return new FriendsGetRequestsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class FriendsGetRequestsNeedMutualResponse {
    constructor (
        readonly count: number,
        readonly items: Models.FriendsRequests|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetRequestsNeedMutualResponse {
        return new FriendsGetRequestsNeedMutualResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsRequests.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsGetRequestsExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.FriendsRequestsXtrMessage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetRequestsExtendedResponse {
        return new FriendsGetRequestsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsRequestsXtrMessage.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsAddResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): FriendsAddResponse {
        return new FriendsAddResponse (
            raw['response']
        )
    }
}
export class FriendsEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsEditResponse {
        return new FriendsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FriendsDeleteResponse {
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly friendDeleted: number,
        readonly outRequestDeleted: number,
        readonly inRequestDeleted: number,
        readonly suggestionDeleted: number
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.FriendsFriendsList|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetListsResponse {
        return new FriendsGetListsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.FriendsFriendsList.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsAddListResponse {
    constructor (
        readonly listId: number
    ) {

    }

    static deserialize(raw: Object): FriendsAddListResponse {
        return new FriendsAddListResponse (
            raw['list_id']
        )
    }
}
export class FriendsEditListResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsEditListResponse {
        return new FriendsEditListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FriendsDeleteListResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsDeleteListResponse {
        return new FriendsDeleteListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FriendsGetAppUsersResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetAppUsersResponse {
        return new FriendsGetAppUsersResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class FriendsGetByPhonesResponse {
    constructor (
        readonly response: Models.FriendsUserXtrPhone|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetByPhonesResponse {
        return new FriendsGetByPhonesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.FriendsUserXtrPhone.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsDeleteAllRequestsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsDeleteAllRequestsResponse {
        return new FriendsDeleteAllRequestsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class FriendsGetSuggestionsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetSuggestionsResponse {
        return new FriendsGetSuggestionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsAreFriendsResponse {
    constructor (
        readonly response: Models.FriendsFriendStatus|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsAreFriendsResponse {
        return new FriendsAreFriendsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.FriendsFriendStatus.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsGetAvailableForCallResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetAvailableForCallResponse {
        return new FriendsGetAvailableForCallResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class FriendsGetAvailableForCallFieldsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsGetAvailableForCallFieldsResponse {
        return new FriendsGetAvailableForCallFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class FriendsSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): FriendsSearchResponse {
        return new FriendsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GiftsGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GiftsGift|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GiftsGetResponse {
        return new GiftsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GiftsGift.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsIsMemberResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): GroupsIsMemberResponse {
        return new GroupsIsMemberResponse (
            !!raw['response']
        )
    }
}
export class GroupsIsMemberUserIdsResponse {
    constructor (
        readonly response: Models.GroupsMemberStatus|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsIsMemberUserIdsResponse {
        return new GroupsIsMemberUserIdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsMemberStatus.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsIsMemberExtendedResponse {
    constructor (
        readonly member: boolean,
        readonly invitation: boolean,
        readonly request: boolean
    ) {

    }

    static deserialize(raw: Object): GroupsIsMemberExtendedResponse {
        return new GroupsIsMemberExtendedResponse (
            !!raw['member'],
            !!raw['invitation'],
            !!raw['request']
        )
    }
}
export class GroupsIsMemberUserIdsExtendedResponse {
    constructor (
        readonly response: Models.GroupsMemberStatusFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsIsMemberUserIdsExtendedResponse {
        return new GroupsIsMemberUserIdsExtendedResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsMemberStatusFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetByIdResponse {
    constructor (
        readonly response: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetByIdResponse {
        return new GroupsGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetCallbackConfirmationCodeResponse {
    constructor (
        readonly code: string
    ) {

    }

    static deserialize(raw: Object): GroupsGetCallbackConfirmationCodeResponse {
        return new GroupsGetCallbackConfirmationCodeResponse (
            raw['code']
        )
    }
}
export class GroupsGetCallbackServerSettingsResponse {
    constructor (
        readonly serverUrl: string,
        readonly secretKey: string
    ) {

    }

    static deserialize(raw: Object): GroupsGetCallbackServerSettingsResponse {
        return new GroupsGetCallbackServerSettingsResponse (
            raw['server_url'],
            raw['secret_key']
        )
    }
}
export class GroupsGetCallbackSettingsResponse {
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
    constructor (
        readonly stateCode: number,
        readonly state: string
    ) {

    }

    static deserialize(raw: Object): GroupsSetCallbackServerResponse {
        return new GroupsSetCallbackServerResponse (
            raw['state_code'],
            raw['state']
        )
    }
}
export class GroupsSetCallbackServerSettingsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsSetCallbackServerSettingsResponse {
        return new GroupsSetCallbackServerSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsSetCallbackSettingsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsSetCallbackSettingsResponse {
        return new GroupsSetCallbackSettingsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsGetResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetResponse {
        return new GroupsGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class GroupsGetExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetExtendedResponse {
        return new GroupsGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetMembersResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetMembersResponse {
        return new GroupsGetMembersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class GroupsGetMembersFieldsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsUserXtrRole|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetMembersFieldsResponse {
        return new GroupsGetMembersFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsUserXtrRole.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetMembersFilterResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsMemberRole|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetMembersFilterResponse {
        return new GroupsGetMembersFilterResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsMemberRole.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsJoinResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsJoinResponse {
        return new GroupsJoinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsLeaveResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsLeaveResponse {
        return new GroupsLeaveResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroup|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsSearchResponse {
        return new GroupsSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetCatalogResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroup|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetCatalogResponse {
        return new GroupsGetCatalogResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetCatalogInfoResponse {
    constructor (
        readonly enabled: number,
        readonly categories: Models.GroupsGroupCategory|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetCatalogInfoResponse {
        return new GroupsGetCatalogInfoResponse (
            raw['enabled'],
            raw['categories'] ? raw['categories'].map(v => v ? Models.GroupsGroupCategory.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetCatalogInfoExtendedResponse {
    constructor (
        readonly enabled: number,
        readonly categories: Models.GroupsGroupCategoryFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetCatalogInfoExtendedResponse {
        return new GroupsGetCatalogInfoExtendedResponse (
            raw['enabled'],
            raw['categories'] ? raw['categories'].map(v => v ? Models.GroupsGroupCategoryFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetInvitesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupXtrInvitedBy|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetInvitesResponse {
        return new GroupsGetInvitesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupXtrInvitedBy.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetInvitesExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsGroupXtrInvitedBy|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetInvitesExtendedResponse {
        return new GroupsGetInvitesExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsGroupXtrInvitedBy.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsGetInvitedUsersResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetInvitedUsersResponse {
        return new GroupsGetInvitedUsersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsBanUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsBanUserResponse {
        return new GroupsBanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsUnbanUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsUnbanUserResponse {
        return new GroupsUnbanUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsGetBannedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.GroupsUserXtrBanInfo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetBannedResponse {
        return new GroupsGetBannedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.GroupsUserXtrBanInfo.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsCreateResponse {
    constructor (
        readonly response: Models.GroupsGroup|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsCreateResponse {
        return new GroupsCreateResponse (
            raw['response'] ? Models.GroupsGroup.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsEditResponse {
        return new GroupsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsEditPlaceResponse {
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly address: string
    ) {

    }

    static deserialize(raw: Object): GroupsEditPlaceResponse {
        return new GroupsEditPlaceResponse (
            raw['success'] ? Models.BaseOkResponse.deserialize(raw['success']) : undefined,
            raw['address']
        )
    }
}
export class GroupsGetSettingsResponse {
    constructor (
        readonly response: Models.GroupsGroupSettings|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetSettingsResponse {
        return new GroupsGetSettingsResponse (
            raw['response'] ? Models.GroupsGroupSettings.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsGetRequestsResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetRequestsResponse {
        return new GroupsGetRequestsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class GroupsGetRequestsFieldsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsGetRequestsFieldsResponse {
        return new GroupsGetRequestsFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class GroupsEditManagerResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsEditManagerResponse {
        return new GroupsEditManagerResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsInviteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsInviteResponse {
        return new GroupsInviteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsAddLinkResponse {
    constructor (
        readonly response: Models.GroupsGroupLink|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsAddLinkResponse {
        return new GroupsAddLinkResponse (
            raw['response'] ? Models.GroupsGroupLink.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsDeleteLinkResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsDeleteLinkResponse {
        return new GroupsDeleteLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsEditLinkResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsEditLinkResponse {
        return new GroupsEditLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsReorderLinkResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsReorderLinkResponse {
        return new GroupsReorderLinkResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsRemoveUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsRemoveUserResponse {
        return new GroupsRemoveUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class GroupsApproveRequestResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): GroupsApproveRequestResponse {
        return new GroupsApproveRequestResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class LeadsCompleteResponse {
    constructor (
        readonly response: Models.LeadsComplete|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsCompleteResponse {
        return new LeadsCompleteResponse (
            raw['response'] ? Models.LeadsComplete.deserialize(raw['response']) : undefined
        )
    }
}
export class LeadsStartResponse {
    constructor (
        readonly response: Models.LeadsStart|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsStartResponse {
        return new LeadsStartResponse (
            raw['response'] ? Models.LeadsStart.deserialize(raw['response']) : undefined
        )
    }
}
export class LeadsGetStatsResponse {
    constructor (
        readonly response: Models.LeadsLead|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsGetStatsResponse {
        return new LeadsGetStatsResponse (
            raw['response'] ? Models.LeadsLead.deserialize(raw['response']) : undefined
        )
    }
}
export class LeadsGetUsersResponse {
    constructor (
        readonly response: Models.LeadsEntry|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsGetUsersResponse {
        return new LeadsGetUsersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.LeadsEntry.deserialize(v) : undefined) : undefined
        )
    }
}
export class LeadsCheckUserResponse {
    constructor (
        readonly response: Models.LeadsChecked|undefined
    ) {

    }

    static deserialize(raw: Object): LeadsCheckUserResponse {
        return new LeadsCheckUserResponse (
            raw['response'] ? Models.LeadsChecked.deserialize(raw['response']) : undefined
        )
    }
}
export class LeadsMetricHitResponse {
    constructor (
        readonly result: boolean,
        readonly redirectLink: string
    ) {

    }

    static deserialize(raw: Object): LeadsMetricHitResponse {
        return new LeadsMetricHitResponse (
            raw['result'],
            raw['redirect_link']
        )
    }
}
export class LikesGetListResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): LikesGetListResponse {
        return new LikesGetListResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class LikesGetListExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): LikesGetListExtendedResponse {
        return new LikesGetListExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class LikesAddResponse {
    constructor (
        readonly likes: number
    ) {

    }

    static deserialize(raw: Object): LikesAddResponse {
        return new LikesAddResponse (
            raw['likes']
        )
    }
}
export class LikesDeleteResponse {
    constructor (
        readonly likes: number
    ) {

    }

    static deserialize(raw: Object): LikesDeleteResponse {
        return new LikesDeleteResponse (
            raw['likes']
        )
    }
}
export class LikesIsLikedResponse {
    constructor (
        readonly liked: boolean,
        readonly copied: boolean
    ) {

    }

    static deserialize(raw: Object): LikesIsLikedResponse {
        return new LikesIsLikedResponse (
            !!raw['liked'],
            !!raw['copied']
        )
    }
}
export class MarketGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetResponse {
        return new MarketGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketGetExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetExtendedResponse {
        return new MarketGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketGetByIdResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetByIdResponse {
        return new MarketGetByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketGetByIdExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetByIdExtendedResponse {
        return new MarketGetByIdExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItem|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketSearchResponse {
        return new MarketSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItem.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketSearchExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketItemFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketSearchExtendedResponse {
        return new MarketSearchExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketItemFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketGetAlbumsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketAlbum|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetAlbumsResponse {
        return new MarketGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketAlbum.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketGetAlbumByIdResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketAlbum|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetAlbumByIdResponse {
        return new MarketGetAlbumByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketAlbum.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketCreateCommentResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): MarketCreateCommentResponse {
        return new MarketCreateCommentResponse (
            raw['response']
        )
    }
}
export class MarketGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetCommentsResponse {
        return new MarketGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketDeleteCommentResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): MarketDeleteCommentResponse {
        return new MarketDeleteCommentResponse (
            !!raw['response']
        )
    }
}
export class MarketRestoreCommentResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): MarketRestoreCommentResponse {
        return new MarketRestoreCommentResponse (
            !!raw['response']
        )
    }
}
export class MarketEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketEditCommentResponse {
        return new MarketEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketReportCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketReportCommentResponse {
        return new MarketReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketGetCategoriesResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MarketMarketCategory|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MarketGetCategoriesResponse {
        return new MarketGetCategoriesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MarketMarketCategory.deserialize(v) : undefined) : undefined
        )
    }
}
export class MarketReportResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketReportResponse {
        return new MarketReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketAddResponse {
    constructor (
        readonly marketItemId: number
    ) {

    }

    static deserialize(raw: Object): MarketAddResponse {
        return new MarketAddResponse (
            raw['market_item_id']
        )
    }
}
export class MarketEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketEditResponse {
        return new MarketEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketDeleteResponse {
        return new MarketDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketRestoreResponse {
        return new MarketRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketReorderItemsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketReorderItemsResponse {
        return new MarketReorderItemsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketReorderAlbumsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketReorderAlbumsResponse {
        return new MarketReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketAddAlbumResponse {
    constructor (
        readonly marketAlbumId: number
    ) {

    }

    static deserialize(raw: Object): MarketAddAlbumResponse {
        return new MarketAddAlbumResponse (
            raw['market_album_id']
        )
    }
}
export class MarketEditAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketEditAlbumResponse {
        return new MarketEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketDeleteAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketDeleteAlbumResponse {
        return new MarketDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketRemoveFromAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketRemoveFromAlbumResponse {
        return new MarketRemoveFromAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MarketAddToAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MarketAddToAlbumResponse {
        return new MarketAddToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetResponse {
        return new MessagesGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesGetDialogsResponse {
    constructor (
        readonly count: number,
        readonly unreadDialogs: number,
        readonly items: Models.MessagesDialog|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetDialogsResponse {
        return new MessagesGetDialogsResponse (
            raw['count'],
            raw['unread_dialogs'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesDialog.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesGetByIdResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetByIdResponse {
        return new MessagesGetByIdResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.MessagesMessage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesSearchResponse {
        return new MessagesSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesMessage.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesGetHistoryResponse {
    constructor (
        readonly count: number,
        readonly unread: number,
        readonly items: Models.MessagesMessage|undefined[]|undefined,
        readonly inRead: number,
        readonly outRead: number
    ) {

    }

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
    constructor (
        readonly items: Models.MessagesAttachmentsHistory|undefined[]|undefined,
        readonly nextFrom: string
    ) {

    }

    static deserialize(raw: Object): MessagesGetHistoryAttachmentsResponse {
        return new MessagesGetHistoryAttachmentsResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.MessagesAttachmentsHistory.deserialize(v) : undefined) : undefined,
            raw['next_from']
        )
    }
}
export class MessagesSendResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): MessagesSendResponse {
        return new MessagesSendResponse (
            raw['response']
        )
    }
}
export class MessagesDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesDeleteResponse {
        return new MessagesDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesDeleteDialogResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesDeleteDialogResponse {
        return new MessagesDeleteDialogResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesRestoreResponse {
        return new MessagesRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesMarkAsReadResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesMarkAsReadResponse {
        return new MessagesMarkAsReadResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesMarkAsImportantResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesMarkAsImportantResponse {
        return new MessagesMarkAsImportantResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class MessagesGetLongPollServerResponse {
    constructor (
        readonly response: Models.MessagesLongpollParams|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetLongPollServerResponse {
        return new MessagesGetLongPollServerResponse (
            raw['response'] ? Models.MessagesLongpollParams.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetLongPollHistoryResponse {
    constructor (
        readonly history: number[]|undefined[]|undefined,
        readonly messages: Models.MessagesLongpollMessages|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly chats: Models.MessagesChat|undefined[]|undefined,
        readonly newPts: number,
        readonly more: boolean
    ) {

    }

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
    constructor (
        readonly response: Models.MessagesChat|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatResponse {
        return new MessagesGetChatResponse (
            raw['response'] ? Models.MessagesChat.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetChatFieldsResponse {
    constructor (
        readonly response: Models.MessagesChatFull|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatFieldsResponse {
        return new MessagesGetChatFieldsResponse (
            raw['response'] ? Models.MessagesChatFull.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetChatChatIdsResponse {
    constructor (
        readonly response: Models.MessagesChat|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatChatIdsResponse {
        return new MessagesGetChatChatIdsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesChat.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesGetChatChatIdsFieldsResponse {
    constructor (
        readonly response: Models.MessagesChatFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatChatIdsFieldsResponse {
        return new MessagesGetChatChatIdsFieldsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesChatFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesCreateChatResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): MessagesCreateChatResponse {
        return new MessagesCreateChatResponse (
            raw['response']
        )
    }
}
export class MessagesEditChatResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesEditChatResponse {
        return new MessagesEditChatResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetChatUsersResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatUsersResponse {
        return new MessagesGetChatUsersResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class MessagesGetChatUsersFieldsResponse {
    constructor (
        readonly response: Models.MessagesUserXtrInvitedBy|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatUsersFieldsResponse {
        return new MessagesGetChatUsersFieldsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.MessagesUserXtrInvitedBy.deserialize(v) : undefined) : undefined
        )
    }
}
export class MessagesGetChatUsersChatIdsResponse {
    constructor (
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatUsersChatIdsResponse {
        return new MessagesGetChatUsersChatIdsResponse (
        )
    }
}
export class MessagesGetChatUsersChatIdsFieldsResponse {
    constructor (
    ) {

    }

    static deserialize(raw: Object): MessagesGetChatUsersChatIdsFieldsResponse {
        return new MessagesGetChatUsersChatIdsFieldsResponse (
        )
    }
}
export class MessagesSetActivityResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesSetActivityResponse {
        return new MessagesSetActivityResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesSearchDialogsResponse {
    constructor (
        readonly response: any[]|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesSearchDialogsResponse {
        return new MessagesSearchDialogsResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class MessagesAddChatUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesAddChatUserResponse {
        return new MessagesAddChatUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesRemoveChatUserResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesRemoveChatUserResponse {
        return new MessagesRemoveChatUserResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesGetLastActivityResponse {
    constructor (
        readonly response: Models.MessagesLastActivity|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesGetLastActivityResponse {
        return new MessagesGetLastActivityResponse (
            raw['response'] ? Models.MessagesLastActivity.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesSetChatPhotoResponse {
    constructor (
        readonly messageId: number,
        readonly chat: Models.MessagesChat|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesSetChatPhotoResponse {
        return new MessagesSetChatPhotoResponse (
            raw['message_id'],
            raw['chat'] ? Models.MessagesChat.deserialize(raw['chat']) : undefined
        )
    }
}
export class MessagesDeleteChatPhotoResponse {
    constructor (
        readonly messageId: number,
        readonly chat: Models.MessagesChat|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesDeleteChatPhotoResponse {
        return new MessagesDeleteChatPhotoResponse (
            raw['message_id'],
            raw['chat'] ? Models.MessagesChat.deserialize(raw['chat']) : undefined
        )
    }
}
export class MessagesDenyMessagesFromGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesDenyMessagesFromGroupResponse {
        return new MessagesDenyMessagesFromGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesAllowMessagesFromGroupResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): MessagesAllowMessagesFromGroupResponse {
        return new MessagesAllowMessagesFromGroupResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class MessagesIsMessagesFromGroupAllowedResponse {
    constructor (
        readonly isAllowed: boolean
    ) {

    }

    static deserialize(raw: Object): MessagesIsMessagesFromGroupAllowedResponse {
        return new MessagesIsMessagesFromGroupAllowedResponse (
            !!raw['is_allowed']
        )
    }
}
export class NewsfeedGetResponse {
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetResponse {
        return new NewsfeedGetResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedNewsfeedItem.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedGetRecommendedResponse {
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined,
        readonly newOffset: string,
        readonly newFrom: string
    ) {

    }

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
    constructor (
        readonly items: Models.NewsfeedNewsfeedItem|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined,
        readonly nextFrom: string
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostToId|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetMentionsResponse {
        return new NewsfeedGetMentionsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostToId.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedGetBannedResponse {
    constructor (
        readonly groups: number[]|undefined,
        readonly members: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetBannedResponse {
        return new NewsfeedGetBannedResponse (
            raw['groups'] ? raw['groups'].map(v => v) : undefined,
            raw['members'] ? raw['members'].map(v => v) : undefined
        )
    }
}
export class NewsfeedGetBannedExtendedResponse {
    constructor (
        readonly groups: Models.UsersUserFull|undefined[]|undefined,
        readonly members: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetBannedExtendedResponse {
        return new NewsfeedGetBannedExtendedResponse (
            raw['groups'] ? raw['groups'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['members'] ? raw['members'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedAddBanResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedAddBanResponse {
        return new NewsfeedAddBanResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedDeleteBanResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedDeleteBanResponse {
        return new NewsfeedDeleteBanResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedIgnoreItemResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedIgnoreItemResponse {
        return new NewsfeedIgnoreItemResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedUnignoreItemResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedUnignoreItemResponse {
        return new NewsfeedUnignoreItemResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedSearchResponse {
    constructor (
        readonly items: Models.WallWallpostFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedSearchResponse {
        return new NewsfeedSearchResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedSearchExtendedResponse {
    constructor (
        readonly items: Models.WallWallpostFull|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedSearchExtendedResponse {
        return new NewsfeedSearchExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedGetListsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.NewsfeedList|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetListsResponse {
        return new NewsfeedGetListsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NewsfeedList.deserialize(v) : undefined) : undefined
        )
    }
}
export class NewsfeedSaveListResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): NewsfeedSaveListResponse {
        return new NewsfeedSaveListResponse (
            raw['response']
        )
    }
}
export class NewsfeedDeleteListResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedDeleteListResponse {
        return new NewsfeedDeleteListResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedUnsubscribeResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedUnsubscribeResponse {
        return new NewsfeedUnsubscribeResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NewsfeedGetSuggestedSourcesResponse {
    constructor (
        readonly count: number,
        readonly items: any[]|undefined
    ) {

    }

    static deserialize(raw: Object): NewsfeedGetSuggestedSourcesResponse {
        return new NewsfeedGetSuggestedSourcesResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class NotesGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.NotesNote|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NotesGetResponse {
        return new NotesGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NotesNote.deserialize(v) : undefined) : undefined
        )
    }
}
export class NotesGetByIdResponse {
    constructor (
        readonly response: Models.NotesNote|undefined
    ) {

    }

    static deserialize(raw: Object): NotesGetByIdResponse {
        return new NotesGetByIdResponse (
            raw['response'] ? Models.NotesNote.deserialize(raw['response']) : undefined
        )
    }
}
export class NotesAddResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): NotesAddResponse {
        return new NotesAddResponse (
            raw['response']
        )
    }
}
export class NotesEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NotesEditResponse {
        return new NotesEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NotesDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NotesDeleteResponse {
        return new NotesDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NotesGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.NotesNoteComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): NotesGetCommentsResponse {
        return new NotesGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.NotesNoteComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class NotesCreateCommentResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): NotesCreateCommentResponse {
        return new NotesCreateCommentResponse (
            raw['response']
        )
    }
}
export class NotesEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NotesEditCommentResponse {
        return new NotesEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NotesDeleteCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NotesDeleteCommentResponse {
        return new NotesDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NotesRestoreCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): NotesRestoreCommentResponse {
        return new NotesRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class NotificationsGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.NotificationsNotification|undefined[]|undefined,
        readonly profiles: Models.UsersUser|undefined[]|undefined,
        readonly groups: Models.GroupsGroup|undefined[]|undefined,
        readonly lastViewed: number
    ) {

    }

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
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): NotificationsMarkAsViewedResponse {
        return new NotificationsMarkAsViewedResponse (
            !!raw['response']
        )
    }
}
export class OrdersGetResponse {
    constructor (
        readonly response: Models.OrdersOrder|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): OrdersGetResponse {
        return new OrdersGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.OrdersOrder.deserialize(v) : undefined) : undefined
        )
    }
}
export class OrdersGetByIdResponse {
    constructor (
        readonly response: Models.OrdersOrder|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): OrdersGetByIdResponse {
        return new OrdersGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.OrdersOrder.deserialize(v) : undefined) : undefined
        )
    }
}
export class OrdersChangeStateResponse {
    constructor (
        readonly response: string
    ) {

    }

    static deserialize(raw: Object): OrdersChangeStateResponse {
        return new OrdersChangeStateResponse (
            raw['response']
        )
    }
}
export class OrdersGetAmountResponse {
    constructor (
        readonly response: Models.OrdersAmount|undefined
    ) {

    }

    static deserialize(raw: Object): OrdersGetAmountResponse {
        return new OrdersGetAmountResponse (
            raw['response'] ? Models.OrdersAmount.deserialize(raw['response']) : undefined
        )
    }
}
export class PagesGetResponse {
    constructor (
        readonly response: Models.PagesWikipageFull|undefined
    ) {

    }

    static deserialize(raw: Object): PagesGetResponse {
        return new PagesGetResponse (
            raw['response'] ? Models.PagesWikipageFull.deserialize(raw['response']) : undefined
        )
    }
}
export class PagesSaveResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PagesSaveResponse {
        return new PagesSaveResponse (
            raw['response']
        )
    }
}
export class PagesSaveAccessResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PagesSaveAccessResponse {
        return new PagesSaveAccessResponse (
            raw['response']
        )
    }
}
export class PagesGetHistoryResponse {
    constructor (
        readonly response: Models.PagesWikipageVersion|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PagesGetHistoryResponse {
        return new PagesGetHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PagesWikipageVersion.deserialize(v) : undefined) : undefined
        )
    }
}
export class PagesGetTitlesResponse {
    constructor (
        readonly response: Models.PagesWikipage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PagesGetTitlesResponse {
        return new PagesGetTitlesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PagesWikipage.deserialize(v) : undefined) : undefined
        )
    }
}
export class PagesGetVersionResponse {
    constructor (
        readonly response: Models.PagesWikipageFull|undefined
    ) {

    }

    static deserialize(raw: Object): PagesGetVersionResponse {
        return new PagesGetVersionResponse (
            raw['response'] ? Models.PagesWikipageFull.deserialize(raw['response']) : undefined
        )
    }
}
export class PagesParseWikiResponse {
    constructor (
        readonly response: string
    ) {

    }

    static deserialize(raw: Object): PagesParseWikiResponse {
        return new PagesParseWikiResponse (
            raw['response']
        )
    }
}
export class PagesClearCacheResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PagesClearCacheResponse {
        return new PagesClearCacheResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosCreateAlbumResponse {
    constructor (
        readonly response: Models.PhotosPhotoAlbumFull|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosCreateAlbumResponse {
        return new PhotosCreateAlbumResponse (
            raw['response'] ? Models.PhotosPhotoAlbumFull.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosEditAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosEditAlbumResponse {
        return new PhotosEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetAlbumsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoAlbumFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetAlbumsResponse {
        return new PhotosGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetResponse {
        return new PhotosGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetExtendedResponse {
        return new PhotosGetExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetAlbumsCountResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PhotosGetAlbumsCountResponse {
        return new PhotosGetAlbumsCountResponse (
            raw['response']
        )
    }
}
export class PhotosGetByIdResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetByIdResponse {
        return new PhotosGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetByIdExtendedResponse {
    constructor (
        readonly response: Models.PhotosPhotoFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetByIdExtendedResponse {
        return new PhotosGetByIdExtendedResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetUploadServerResponse {
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetUploadServerResponse {
        return new PhotosGetUploadServerResponse (
            raw['response'] ? Models.PhotosPhotoUpload.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetOwnerPhotoUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): PhotosGetOwnerPhotoUploadServerResponse {
        return new PhotosGetOwnerPhotoUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class PhotosGetChatUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): PhotosGetChatUploadServerResponse {
        return new PhotosGetChatUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class PhotosGetMarketUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): PhotosGetMarketUploadServerResponse {
        return new PhotosGetMarketUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class PhotosGetMarketAlbumUploadServerResponse {
    constructor (
        readonly uploadUrl: string
    ) {

    }

    static deserialize(raw: Object): PhotosGetMarketAlbumUploadServerResponse {
        return new PhotosGetMarketAlbumUploadServerResponse (
            raw['upload_url']
        )
    }
}
export class PhotosSaveMarketPhotoResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSaveMarketPhotoResponse {
        return new PhotosSaveMarketPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosSaveMarketAlbumPhotoResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSaveMarketAlbumPhotoResponse {
        return new PhotosSaveMarketAlbumPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosSaveOwnerPhotoResponse {
    constructor (
        readonly photoHash: string,
        readonly photoSrc: string
    ) {

    }

    static deserialize(raw: Object): PhotosSaveOwnerPhotoResponse {
        return new PhotosSaveOwnerPhotoResponse (
            raw['photo_hash'],
            raw['photo_src']
        )
    }
}
export class PhotosSaveWallPhotoResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSaveWallPhotoResponse {
        return new PhotosSaveWallPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetWallUploadServerResponse {
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetWallUploadServerResponse {
        return new PhotosGetWallUploadServerResponse (
            raw['response'] ? Models.PhotosPhotoUpload.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetMessagesUploadServerResponse {
    constructor (
        readonly response: Models.PhotosPhotoUpload|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetMessagesUploadServerResponse {
        return new PhotosGetMessagesUploadServerResponse (
            raw['response'] ? Models.PhotosPhotoUpload.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosSaveMessagesPhotoResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSaveMessagesPhotoResponse {
        return new PhotosSaveMessagesPhotoResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosReportResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosReportResponse {
        return new PhotosReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosReportCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosReportCommentResponse {
        return new PhotosReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSearchResponse {
        return new PhotosSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosSaveResponse {
    constructor (
        readonly response: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosSaveResponse {
        return new PhotosSaveResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosCopyResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PhotosCopyResponse {
        return new PhotosCopyResponse (
            raw['response']
        )
    }
}
export class PhotosEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosEditResponse {
        return new PhotosEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosMoveResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosMoveResponse {
        return new PhotosMoveResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosMakeCoverResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosMakeCoverResponse {
        return new PhotosMakeCoverResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosReorderAlbumsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosReorderAlbumsResponse {
        return new PhotosReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosReorderPhotosResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosReorderPhotosResponse {
        return new PhotosReorderPhotosResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetAllResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoXtrRealOffset|undefined[]|undefined,
        readonly more: boolean
    ) {

    }

    static deserialize(raw: Object): PhotosGetAllResponse {
        return new PhotosGetAllResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoXtrRealOffset.deserialize(v) : undefined) : undefined,
            !!raw['more']
        )
    }
}
export class PhotosGetAllExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFullXtrRealOffset|undefined[]|undefined,
        readonly more: boolean
    ) {

    }

    static deserialize(raw: Object): PhotosGetAllExtendedResponse {
        return new PhotosGetAllExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFullXtrRealOffset.deserialize(v) : undefined) : undefined,
            !!raw['more']
        )
    }
}
export class PhotosGetUserPhotosResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhoto|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetUserPhotosResponse {
        return new PhotosGetUserPhotosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhoto.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetUserPhotoExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetUserPhotoExtendedResponse {
        return new PhotosGetUserPhotoExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosDeleteAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosDeleteAlbumResponse {
        return new PhotosDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosDeleteResponse {
        return new PhotosDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosRestoreResponse {
        return new PhotosRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosConfirmTagResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosConfirmTagResponse {
        return new PhotosConfirmTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly realOffset: number,
        readonly items: Models.WallWallComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetCommentsResponse {
        return new PhotosGetCommentsResponse (
            raw['count'],
            raw['real_offset'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosGetCommentsExtendedResponse {
    constructor (
        readonly count: number,
        readonly realOffset: number,
        readonly items: Models.WallWallComment|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.PhotosCommentXtrPid|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetAllCommentsResponse {
        return new PhotosGetAllCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosCommentXtrPid.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosCreateCommentResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PhotosCreateCommentResponse {
        return new PhotosCreateCommentResponse (
            raw['response']
        )
    }
}
export class PhotosDeleteCommentResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): PhotosDeleteCommentResponse {
        return new PhotosDeleteCommentResponse (
            !!raw['response']
        )
    }
}
export class PhotosRestoreCommentResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): PhotosRestoreCommentResponse {
        return new PhotosRestoreCommentResponse (
            !!raw['response']
        )
    }
}
export class PhotosEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosEditCommentResponse {
        return new PhotosEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetTagsResponse {
    constructor (
        readonly response: Models.PhotosPhotoTag|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetTagsResponse {
        return new PhotosGetTagsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PhotosPhotoTag.deserialize(v) : undefined) : undefined
        )
    }
}
export class PhotosPutTagResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): PhotosPutTagResponse {
        return new PhotosPutTagResponse (
            raw['response']
        )
    }
}
export class PhotosRemoveTagResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosRemoveTagResponse {
        return new PhotosRemoveTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class PhotosGetNewTagsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PhotosPhotoXtrTagInfo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PhotosGetNewTagsResponse {
        return new PhotosGetNewTagsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PhotosPhotoXtrTagInfo.deserialize(v) : undefined) : undefined
        )
    }
}
export class PlacesAddResponse {
    constructor (
        readonly id: number
    ) {

    }

    static deserialize(raw: Object): PlacesAddResponse {
        return new PlacesAddResponse (
            raw['id']
        )
    }
}
export class PlacesGetByIdResponse {
    constructor (
        readonly response: Models.PlacesPlaceMin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PlacesGetByIdResponse {
        return new PlacesGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PlacesPlaceMin.deserialize(v) : undefined) : undefined
        )
    }
}
export class PlacesSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PlacesPlaceFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PlacesSearchResponse {
        return new PlacesSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PlacesPlaceFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class PlacesCheckinResponse {
    constructor (
        readonly id: number
    ) {

    }

    static deserialize(raw: Object): PlacesCheckinResponse {
        return new PlacesCheckinResponse (
            raw['id']
        )
    }
}
export class PlacesGetCheckinsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.PlacesCheckin|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PlacesGetCheckinsResponse {
        return new PlacesGetCheckinsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.PlacesCheckin.deserialize(v) : undefined) : undefined
        )
    }
}
export class PlacesGetTypesResponse {
    constructor (
        readonly response: Models.PlacesTypes|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PlacesGetTypesResponse {
        return new PlacesGetTypesResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PlacesTypes.deserialize(v) : undefined) : undefined
        )
    }
}
export class PollsGetByIdResponse {
    constructor (
        readonly response: Models.PollsPoll|undefined
    ) {

    }

    static deserialize(raw: Object): PollsGetByIdResponse {
        return new PollsGetByIdResponse (
            raw['response'] ? Models.PollsPoll.deserialize(raw['response']) : undefined
        )
    }
}
export class PollsAddVoteResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): PollsAddVoteResponse {
        return new PollsAddVoteResponse (
            !!raw['response']
        )
    }
}
export class PollsDeleteVoteResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): PollsDeleteVoteResponse {
        return new PollsDeleteVoteResponse (
            !!raw['response']
        )
    }
}
export class PollsGetVotersResponse {
    constructor (
        readonly response: Models.PollsVoters|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): PollsGetVotersResponse {
        return new PollsGetVotersResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.PollsVoters.deserialize(v) : undefined) : undefined
        )
    }
}
export class PollsCreateResponse {
    constructor (
        readonly response: Models.PollsPoll|undefined
    ) {

    }

    static deserialize(raw: Object): PollsCreateResponse {
        return new PollsCreateResponse (
            raw['response'] ? Models.PollsPoll.deserialize(raw['response']) : undefined
        )
    }
}
export class PollsEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): PollsEditResponse {
        return new PollsEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class SearchGetHintsResponse {
    constructor (
        readonly response: Models.SearchHint|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): SearchGetHintsResponse {
        return new SearchGetHintsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SearchHint.deserialize(v) : undefined) : undefined
        )
    }
}
export class SecureGetAppBalanceResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): SecureGetAppBalanceResponse {
        return new SecureGetAppBalanceResponse (
            raw['response']
        )
    }
}
export class SecureGetSMSHistoryResponse {
    constructor (
        readonly response: Models.SecureSmsNotification|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): SecureGetSMSHistoryResponse {
        return new SecureGetSMSHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureSmsNotification.deserialize(v) : undefined) : undefined
        )
    }
}
export class SecureGetTransactionsHistoryResponse {
    constructor (
        readonly response: Models.SecureTransaction|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): SecureGetTransactionsHistoryResponse {
        return new SecureGetTransactionsHistoryResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureTransaction.deserialize(v) : undefined) : undefined
        )
    }
}
export class SecureGetUserLevelResponse {
    constructor (
        readonly response: Models.SecureLevel|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): SecureGetUserLevelResponse {
        return new SecureGetUserLevelResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.SecureLevel.deserialize(v) : undefined) : undefined
        )
    }
}
export class SecureSendSMSNotificationResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): SecureSendSMSNotificationResponse {
        return new SecureSendSMSNotificationResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class SecureAddAppEventResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): SecureAddAppEventResponse {
        return new SecureAddAppEventResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class SecureSendNotificationResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): SecureSendNotificationResponse {
        return new SecureSendNotificationResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class SecureSetCounterResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): SecureSetCounterResponse {
        return new SecureSetCounterResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class SecureSetUserLevelResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): SecureSetUserLevelResponse {
        return new SecureSetUserLevelResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class SecureCheckTokenResponse {
    constructor (
        readonly response: Models.SecureTokenChecked|undefined
    ) {

    }

    static deserialize(raw: Object): SecureCheckTokenResponse {
        return new SecureCheckTokenResponse (
            raw['response'] ? Models.SecureTokenChecked.deserialize(raw['response']) : undefined
        )
    }
}
export class StatsGetResponse {
    constructor (
        readonly response: Models.StatsPeriod|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): StatsGetResponse {
        return new StatsGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.StatsPeriod.deserialize(v) : undefined) : undefined
        )
    }
}
export class StatsTrackVisitorResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): StatsTrackVisitorResponse {
        return new StatsTrackVisitorResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class StatsGetPostReachResponse {
    constructor (
        readonly response: Models.StatsWallpostStat|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): StatsGetPostReachResponse {
        return new StatsGetPostReachResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.StatsWallpostStat.deserialize(v) : undefined) : undefined
        )
    }
}
export class StatusGetResponse {
    constructor (
        readonly response: Models.StatusStatus|undefined
    ) {

    }

    static deserialize(raw: Object): StatusGetResponse {
        return new StatusGetResponse (
            raw['response'] ? Models.StatusStatus.deserialize(raw['response']) : undefined
        )
    }
}
export class StatusSetResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): StatusSetResponse {
        return new StatusSetResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class StorageGetResponse {
    constructor (
        readonly response: string
    ) {

    }

    static deserialize(raw: Object): StorageGetResponse {
        return new StorageGetResponse (
            raw['response']
        )
    }
}
export class StorageSetResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): StorageSetResponse {
        return new StorageSetResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class StorageGetKeysResponse {
    constructor (
        readonly response: string[]|undefined
    ) {

    }

    static deserialize(raw: Object): StorageGetKeysResponse {
        return new StorageGetKeysResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class UsersGetResponse {
    constructor (
        readonly response: Models.UsersUserXtrCounters|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetResponse {
        return new UsersGetResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.UsersUserXtrCounters.deserialize(v) : undefined) : undefined
        )
    }
}
export class UsersSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersSearchResponse {
        return new UsersSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class UsersIsAppUserResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): UsersIsAppUserResponse {
        return new UsersIsAppUserResponse (
            !!raw['response']
        )
    }
}
export class UsersGetSubscriptionsResponse {
    constructor (
        readonly users: Models.UsersUsersArray|undefined,
        readonly groups: Models.GroupsGroupsArray|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetSubscriptionsResponse {
        return new UsersGetSubscriptionsResponse (
            raw['users'] ? Models.UsersUsersArray.deserialize(raw['users']) : undefined,
            raw['groups'] ? Models.GroupsGroupsArray.deserialize(raw['groups']) : undefined
        )
    }
}
export class UsersGetSubscriptionsExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: any[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetSubscriptionsExtendedResponse {
        return new UsersGetSubscriptionsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class UsersGetFollowersResponse {
    constructor (
        readonly count: number,
        readonly items: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetFollowersResponse {
        return new UsersGetFollowersResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v) : undefined
        )
    }
}
export class UsersGetFollowersFieldsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetFollowersFieldsResponse {
        return new UsersGetFollowersFieldsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class UsersReportResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): UsersReportResponse {
        return new UsersReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class UsersGetNearbyResponse {
    constructor (
        readonly count: number,
        readonly items: Models.UsersUserFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): UsersGetNearbyResponse {
        return new UsersGetNearbyResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class UtilsCheckLinkResponse {
    constructor (
        readonly response: Models.UtilsLinkChecked|undefined
    ) {

    }

    static deserialize(raw: Object): UtilsCheckLinkResponse {
        return new UtilsCheckLinkResponse (
            raw['response'] ? Models.UtilsLinkChecked.deserialize(raw['response']) : undefined
        )
    }
}
export class UtilsResolveScreenNameResponse {
    constructor (
        readonly response: Models.UtilsDomainResolved|undefined
    ) {

    }

    static deserialize(raw: Object): UtilsResolveScreenNameResponse {
        return new UtilsResolveScreenNameResponse (
            raw['response'] ? Models.UtilsDomainResolved.deserialize(raw['response']) : undefined
        )
    }
}
export class UtilsGetServerTimeResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): UtilsGetServerTimeResponse {
        return new UtilsGetServerTimeResponse (
            raw['response']
        )
    }
}
export class VideoGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetResponse {
        return new VideoGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoGetExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoFull|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoEditResponse {
        return new VideoEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoAddResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoAddResponse {
        return new VideoAddResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoSaveResponse {
    constructor (
        readonly response: Models.VideoSaveResult|undefined
    ) {

    }

    static deserialize(raw: Object): VideoSaveResponse {
        return new VideoSaveResponse (
            raw['response'] ? Models.VideoSaveResult.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoDeleteResponse {
        return new VideoDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoRestoreResponse {
        return new VideoRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoSearchResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoSearchResponse {
        return new VideoSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoSearchExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetUserVideosResponse {
        return new VideoGetUserVideosResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideo.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoGetUserVideosExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideo|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetAlbumsResponse {
        return new VideoGetAlbumsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoGetAlbumsExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetAlbumsExtendedResponse {
        return new VideoGetAlbumsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoGetAlbumByIdResponse {
    constructor (
        readonly response: Models.VideoVideoAlbumFull|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetAlbumByIdResponse {
        return new VideoGetAlbumByIdResponse (
            raw['response'] ? Models.VideoVideoAlbumFull.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoAddAlbumResponse {
    constructor (
        readonly albumId: number
    ) {

    }

    static deserialize(raw: Object): VideoAddAlbumResponse {
        return new VideoAddAlbumResponse (
            raw['album_id']
        )
    }
}
export class VideoEditAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoEditAlbumResponse {
        return new VideoEditAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoDeleteAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoDeleteAlbumResponse {
        return new VideoDeleteAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoReorderAlbumsResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoReorderAlbumsResponse {
        return new VideoReorderAlbumsResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoReorderVideosResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoReorderVideosResponse {
        return new VideoReorderVideosResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoAddToAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoAddToAlbumResponse {
        return new VideoAddToAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoRemoveFromAlbumResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoRemoveFromAlbumResponse {
        return new VideoRemoveFromAlbumResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoGetAlbumsByVideoResponse {
    constructor (
        readonly response: number[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetAlbumsByVideoResponse {
        return new VideoGetAlbumsByVideoResponse (
            raw['response'] ? raw['response'].map(v => v) : undefined
        )
    }
}
export class VideoGetAlbumsByVideoExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoAlbumFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetAlbumsByVideoExtendedResponse {
        return new VideoGetAlbumsByVideoExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoAlbumFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment|undefined[]|undefined,
        readonly profiles: Models.UsersUserMin|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetCommentsExtendedResponse {
        return new VideoGetCommentsExtendedResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoCreateCommentResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): VideoCreateCommentResponse {
        return new VideoCreateCommentResponse (
            raw['response']
        )
    }
}
export class VideoDeleteCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoDeleteCommentResponse {
        return new VideoDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoRestoreCommentResponse {
    constructor (
        readonly response: boolean
    ) {

    }

    static deserialize(raw: Object): VideoRestoreCommentResponse {
        return new VideoRestoreCommentResponse (
            !!raw['response']
        )
    }
}
export class VideoEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoEditCommentResponse {
        return new VideoEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoGetTagsResponse {
    constructor (
        readonly response: Models.VideoVideoTag|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetTagsResponse {
        return new VideoGetTagsResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.VideoVideoTag.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoPutTagResponse {
    constructor (
        readonly response: number
    ) {

    }

    static deserialize(raw: Object): VideoPutTagResponse {
        return new VideoPutTagResponse (
            raw['response']
        )
    }
}
export class VideoRemoveTagResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoRemoveTagResponse {
        return new VideoRemoveTagResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoGetNewTagsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.VideoVideoTagInfo|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): VideoGetNewTagsResponse {
        return new VideoGetNewTagsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.VideoVideoTagInfo.deserialize(v) : undefined) : undefined
        )
    }
}
export class VideoReportResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoReportResponse {
        return new VideoReportResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoReportCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoReportCommentResponse {
        return new VideoReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class VideoGetCatalogResponse {
    constructor (
        readonly items: Models.VideoCatBlock|undefined[]|undefined,
        readonly next: string
    ) {

    }

    static deserialize(raw: Object): VideoGetCatalogResponse {
        return new VideoGetCatalogResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatBlock.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}
export class VideoGetCatalogExtendedResponse {
    constructor (
        readonly items: Models.VideoCatBlock|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined,
        readonly next: string
    ) {

    }

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
    constructor (
        readonly items: Models.VideoCatElement|undefined[]|undefined,
        readonly next: string
    ) {

    }

    static deserialize(raw: Object): VideoGetCatalogSectionResponse {
        return new VideoGetCatalogSectionResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.VideoCatElement.deserialize(v) : undefined) : undefined,
            raw['next']
        )
    }
}
export class VideoGetCatalogSectionExtendedResponse {
    constructor (
        readonly items: Models.VideoCatElement|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined,
        readonly next: string
    ) {

    }

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
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): VideoHideCatalogSectionResponse {
        return new VideoHideCatalogSectionResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallGetResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallGetResponse {
        return new WallGetResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallGetExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallSearchResponse {
        return new WallSearchResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallSearchExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallpostFull|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly response: Models.WallWallpostFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallGetByIdResponse {
        return new WallGetByIdResponse (
            raw['response'] ? raw['response'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallGetByIdExtendedResponse {
    constructor (
        readonly items: Models.WallWallpostFull|undefined[]|undefined,
        readonly profiles: Models.UsersUserFull|undefined[]|undefined,
        readonly groups: Models.GroupsGroupFull|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallGetByIdExtendedResponse {
        return new WallGetByIdExtendedResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUserFull.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroupFull.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallPostResponse {
    constructor (
        readonly postId: number
    ) {

    }

    static deserialize(raw: Object): WallPostResponse {
        return new WallPostResponse (
            raw['post_id']
        )
    }
}
export class WallRepostResponse {
    constructor (
        readonly success: Models.BaseOkResponse|undefined,
        readonly postId: number,
        readonly repostsCount: number,
        readonly likesCount: number
    ) {

    }

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
    constructor (
        readonly items: Models.WallWallpostFull|undefined[]|undefined,
        readonly profiles: Models.UsersUser|undefined[]|undefined,
        readonly groups: Models.GroupsGroup|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallGetRepostsResponse {
        return new WallGetRepostsResponse (
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallpostFull.deserialize(v) : undefined) : undefined,
            raw['profiles'] ? raw['profiles'].map(v => v ? Models.UsersUser.deserialize(v) : undefined) : undefined,
            raw['groups'] ? raw['groups'].map(v => v ? Models.GroupsGroup.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallEditResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallEditResponse {
        return new WallEditResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallDeleteResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallDeleteResponse {
        return new WallDeleteResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallRestoreResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallRestoreResponse {
        return new WallRestoreResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallPinResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallPinResponse {
        return new WallPinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallUnpinResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallUnpinResponse {
        return new WallUnpinResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WallGetCommentsResponse {
        return new WallGetCommentsResponse (
            raw['count'],
            raw['items'] ? raw['items'].map(v => v ? Models.WallWallComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class WallGetCommentsExtendedResponse {
    constructor (
        readonly count: number,
        readonly items: Models.WallWallComment|undefined[]|undefined,
        readonly profiles: Models.UsersUser|undefined[]|undefined,
        readonly groups: Models.GroupsGroup|undefined[]|undefined
    ) {

    }

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
    constructor (
        readonly commentId: number
    ) {

    }

    static deserialize(raw: Object): WallCreateCommentResponse {
        return new WallCreateCommentResponse (
            raw['comment_id']
        )
    }
}
export class WallEditCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallEditCommentResponse {
        return new WallEditCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallDeleteCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallDeleteCommentResponse {
        return new WallDeleteCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallRestoreCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallRestoreCommentResponse {
        return new WallRestoreCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallReportPostResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallReportPostResponse {
        return new WallReportPostResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WallReportCommentResponse {
    constructor (
        readonly response: Models.BaseOkResponse|undefined
    ) {

    }

    static deserialize(raw: Object): WallReportCommentResponse {
        return new WallReportCommentResponse (
            raw['response'] ? Models.BaseOkResponse.deserialize(raw['response']) : undefined
        )
    }
}
export class WidgetsGetCommentsResponse {
    constructor (
        readonly count: number,
        readonly posts: Models.WidgetsWidgetComment|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WidgetsGetCommentsResponse {
        return new WidgetsGetCommentsResponse (
            raw['count'],
            raw['posts'] ? raw['posts'].map(v => v ? Models.WidgetsWidgetComment.deserialize(v) : undefined) : undefined
        )
    }
}
export class WidgetsGetPagesResponse {
    constructor (
        readonly count: number,
        readonly pages: Models.WidgetsWidgetPage|undefined[]|undefined
    ) {

    }

    static deserialize(raw: Object): WidgetsGetPagesResponse {
        return new WidgetsGetPagesResponse (
            raw['count'],
            raw['pages'] ? raw['pages'].map(v => v ? Models.WidgetsWidgetPage.deserialize(v) : undefined) : undefined
        )
    }
}

