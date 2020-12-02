import * as Models from "./Models"

export interface AccountChangePasswordResponse {
    /**
     * New token
     */
    token: string,
    /**
     * New secret
     */
    secret: string
}
export interface AccountGetActiveOffersResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.AccountOffer[]
}
export type AccountGetAppPermissionsResponse = number
export interface AccountGetBannedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: number[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export type AccountGetCountersResponse = Models.AccountAccountCounters
export type AccountGetInfoResponse = Models.AccountInfo
export type AccountGetProfileInfoResponse = Models.AccountUserSettings
export type AccountGetPushSettingsResponse = Models.AccountPushSettings
export interface AccountSaveProfileInfoResponse {
    /**
     * 1 if changes has been processed
     */
    changed: Models.BaseBoolInt,
    /**
     * 
     */
    name_request: Models.AccountNameRequest
}
export type AdsAddOfficeUsersResponse = boolean
export type AdsCheckLinkResponse = Models.AdsLinkStatus
export type AdsCreateAdsResponse = number[]
export type AdsCreateCampaignsResponse = number[]
export type AdsCreateClientsResponse = number[]
export interface AdsCreateTargetGroupResponse {
    /**
     * Group ID
     */
    id: number,
    /**
     * Pixel code
     */
    pixel: string
}
export type AdsDeleteAdsResponse = number[]
export type AdsDeleteCampaignsResponse = number
export type AdsDeleteClientsResponse = number
export type AdsGetAccountsResponse = Models.AdsAccount[]
export type AdsGetAdsLayoutResponse = Models.AdsAdLayout[]
export type AdsGetAdsTargetingResponse = Models.AdsTargSettings[]
export type AdsGetAdsResponse = Models.AdsAd[]
export type AdsGetBudgetResponse = number
export type AdsGetCampaignsResponse = Models.AdsCampaign[]
export interface AdsGetCategoriesResponse {
    /**
     * Old categories
     */
    v1: Models.AdsCategory[],
    /**
     * Actual categories
     */
    v2: Models.AdsCategory[]
}
export type AdsGetClientsResponse = Models.AdsClient[]
export type AdsGetDemographicsResponse = Models.AdsDemoStats[]
export type AdsGetFloodStatsResponse = Models.AdsFloodStats
export interface AdsGetLookalikeRequestsResponse {
    /**
     * Total count of found lookalike requests
     */
    count: number,
    /**
     * found lookalike requests
     */
    items: Models.AdsLookalikeRequest[]
}
export interface AdsGetMusiciansResponse {
    /**
     * Musicians
     */
    items: Models.AdsMusician[]
}
export type AdsGetOfficeUsersResponse = Models.AdsUsers[]
export type AdsGetPostsReachResponse = Models.AdsPromotedPostReach[]
export type AdsGetRejectionReasonResponse = Models.AdsRejectReason
export type AdsGetStatisticsResponse = Models.AdsStats[]
export type AdsGetSuggestionsCitiesResponse = Models.AdsTargSuggestionsCities[]
export type AdsGetSuggestionsRegionsResponse = Models.AdsTargSuggestionsRegions[]
export type AdsGetSuggestionsResponse = Models.AdsTargSuggestions[]
export type AdsGetSuggestionsSchoolsResponse = Models.AdsTargSuggestionsSchools[]
export type AdsGetTargetGroupsResponse = Models.AdsTargetGroup[]
export type AdsGetTargetingStatsResponse = Models.AdsTargStats
export type AdsGetUploadURLResponse = string
export type AdsGetVideoUploadURLResponse = string
export type AdsImportTargetContactsResponse = number
export type AdsRemoveOfficeUsersResponse = boolean
export type AdsUpdateAdsResponse = number[]
export type AdsUpdateCampaignsResponse = number
export type AdsUpdateClientsResponse = number
export type AdsUpdateOfficeUsersResponse = Models.AdsUpdateOfficeUsersResult[]
export interface AdswebGetAdCategoriesResponse {
    /**
     * 
     */
    categories: Models.AdswebGetAdCategoriesResponseCategoriesCategory[]
}
export interface AdswebGetAdUnitCodeResponse {
    /**
     * 
     */
    html: string
}
export interface AdswebGetAdUnitsResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    ad_units: Models.AdswebGetAdUnitsResponseAdUnitsAdUnit[]
}
export interface AdswebGetFraudHistoryResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    entries: Models.AdswebGetFraudHistoryResponseEntriesEntry[]
}
export interface AdswebGetSitesResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    sites: Models.AdswebGetSitesResponseSitesSite[]
}
export interface AdswebGetStatisticsResponse {
    /**
     * 
     */
    next_page_id: string,
    /**
     * 
     */
    items: Models.AdswebGetStatisticsResponseItemsItem[]
}
export interface AppWidgetsGetAppImageUploadServerResponse {
    /**
     * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
     */
    upload_url: string
}
export type AppWidgetsGetAppImagesResponse = Models.AppWidgetsPhotos
export interface AppWidgetsGetGroupImageUploadServerResponse {
    /**
     * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
     */
    upload_url: string
}
export type AppWidgetsGetGroupImagesResponse = Models.AppWidgetsPhotos
export type AppWidgetsGetImagesByIdResponse = Models.AppWidgetsPhoto[]
export type AppWidgetsSaveAppImageResponse = Models.AppWidgetsPhoto
export type AppWidgetsSaveGroupImageResponse = Models.AppWidgetsPhoto
export interface AppsGetCatalogResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.AppsApp[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[]
}
export interface AppsGetFriendsListResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface AppsGetLeaderboardExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.AppsLeaderboard[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[]
}
export interface AppsGetLeaderboardResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.AppsLeaderboard[]
}
export interface AppsGetScopesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.AppsScope[]
}
export type AppsGetScoreResponse = number
export interface AppsGetResponse {
    /**
     * Total number of applications
     */
    count: number,
    /**
     * List of applications
     */
    items: Models.AppsApp[]
}
export type AppsSendRequestResponse = number
export interface AuthRestoreResponse {
    /**
     * 1 if success
     */
    success: number,
    /**
     * Parameter needed to grant access by code
     */
    sid: string
}
export type BaseBoolResponse = Models.BaseBoolInt
export type BaseGetUploadServerResponse = Models.BaseUploadServer
export type BaseOkResponse = number
export type BoardAddTopicResponse = number
export type BoardCreateCommentResponse = number
export interface BoardGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BoardTopicComment[],
    /**
     * 
     */
    poll: Models.BoardTopicPoll,
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export interface BoardGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BoardTopicComment[],
    /**
     * 
     */
    poll: Models.BoardTopicPoll
}
export interface BoardGetTopicsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BoardTopic[],
    /**
     * 
     */
    default_order: Models.BoardDefaultOrder,
    /**
     * Information whether current user can add topic
     */
    can_add_topics: Models.BaseBoolInt,
    /**
     * 
     */
    profiles: Models.UsersUserMin[]
}
export interface BoardGetTopicsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BoardTopic[],
    /**
     * 
     */
    default_order: Models.BoardDefaultOrder,
    /**
     * Information whether current user can add topic
     */
    can_add_topics: Models.BaseBoolInt
}
export interface DatabaseGetChairsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BaseObject[]
}
export type DatabaseGetCitiesByIdResponse = Models.BaseObject[]
export interface DatabaseGetCitiesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseCity[]
}
export type DatabaseGetCountriesByIdResponse = Models.BaseCountry[]
export interface DatabaseGetCountriesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.BaseCountry[]
}
export interface DatabaseGetFacultiesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseFaculty[]
}
export type DatabaseGetMetroStationsByIdResponse = Models.DatabaseStation[]
export interface DatabaseGetMetroStationsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseStation[]
}
export interface DatabaseGetRegionsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseRegion[]
}
export type DatabaseGetSchoolClassesResponse = any[][]
export interface DatabaseGetSchoolsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseSchool[]
}
export interface DatabaseGetUniversitiesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DatabaseUniversity[]
}
export type DocsAddResponse = number
export type DocsGetByIdResponse = Models.DocsDoc[]
export interface DocsGetTypesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DocsDocTypes[]
}
export type DocsGetUploadServer = Models.BaseUploadServer
export interface DocsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DocsDoc[]
}
export interface DocsSaveResponse {
    /**
     * 
     */
    type: Models.DocsDocAttachmentType,
    /**
     * 
     */
    audio_message: Models.MessagesAudioMessage,
    /**
     * 
     */
    doc: Models.DocsDoc,
    /**
     * 
     */
    graffiti: Models.MessagesGraffiti
}
export interface DocsSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.DocsDoc[]
}
export type DonutGetSubscriptionResponse = Models.DonutDonatorSubscriptionInfo
export interface DonutGetSubscriptionsResponse {
    /**
     * 
     */
    subscriptions: Models.DonutDonatorSubscriptionInfo[],
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface DownloadedGamesPaidStatusResponse {
    /**
     * Game has been paid
     */
    is_paid: boolean
}
export type FaveAddTagResponse = Models.FaveTag
export interface FaveGetPagesResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.FavePage[]
}
export interface FaveGetTagsResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.FaveTag[]
}
export interface FaveGetExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.FaveBookmark[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export interface FaveGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.FaveBookmark[]
}
export interface FriendsAddListResponse {
    /**
     * List ID
     */
    list_id: number
}
export type FriendsAddResponse = number
export type FriendsAreFriendsExtendedResponse = Models.FriendsFriendExtendedStatus[]
export type FriendsAreFriendsResponse = Models.FriendsFriendStatus[]
export interface FriendsDeleteResponse {
    /**
     * 
     */
    success: number,
    /**
     * Returns 1 if friend has been deleted
     */
    friend_deleted: number,
    /**
     * Returns 1 if out request has been canceled
     */
    out_request_deleted: number,
    /**
     * Returns 1 if incoming request has been declined
     */
    in_request_deleted: number,
    /**
     * Returns 1 if suggestion has been declined
     */
    suggestion_deleted: number
}
export type FriendsGetAppUsersResponse = number[]
export type FriendsGetByPhonesResponse = Models.FriendsUserXtrPhone[]
export interface FriendsGetListsResponse {
    /**
     * Total number of friends lists
     */
    count: number,
    /**
     * 
     */
    items: Models.FriendsFriendsList[]
}
export type FriendsGetMutualResponse = number[]
export type FriendsGetMutualTargetUidsResponse = Models.FriendsMutualFriend[]
export interface FriendsGetOnlineOnlineMobileResponse {
    /**
     * 
     */
    online: number[],
    /**
     * 
     */
    online_mobile: number[]
}
export type FriendsGetOnlineResponse = number[]
export type FriendsGetRecentResponse = number[]
export interface FriendsGetRequestsExtendedResponse {
    /**
     * Total requests number
     */
    count: number,
    /**
     * 
     */
    items: Models.FriendsRequestsXtrMessage[]
}
export interface FriendsGetRequestsNeedMutualResponse {
    /**
     * Total requests number
     */
    count: number,
    /**
     * 
     */
    items: Models.FriendsRequests[]
}
export interface FriendsGetRequestsResponse {
    /**
     * Total requests number
     */
    count: number,
    /**
     * 
     */
    items: number[],
    /**
     * Total unread requests number
     */
    count_unread: number
}
export interface FriendsGetSuggestionsResponse {
    /**
     * Total results number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface FriendsGetFieldsResponse {
    /**
     * Total friends number
     */
    count: number,
    /**
     * 
     */
    items: Models.FriendsUserXtrLists[]
}
export interface FriendsGetResponse {
    /**
     * Total friends number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface FriendsSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface GiftsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.GiftsGift[]
}
export type GroupsAddAddressResponse = Models.GroupsAddress
export interface GroupsAddCallbackServerResponse {
    /**
     * 
     */
    server_id: number
}
export type GroupsAddLinkResponse = Models.GroupsGroupLink
export type GroupsCreateResponse = Models.GroupsGroup
export type GroupsEditAddressResponse = Models.GroupsAddress
export interface GroupsGetAddressesResponse {
    /**
     * Total count of addresses
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsAddress[]
}
export interface GroupsGetBannedResponse {
    /**
     * Total users number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsBannedItem[]
}
export type GroupsGetByIdLegacyResponse = Models.GroupsGroupFull[]
export interface GroupsGetByIdResponse {
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * 
     */
    profiles: Models.GroupsProfileItem[]
}
export interface GroupsGetCallbackConfirmationCodeResponse {
    /**
     * Confirmation code
     */
    code: string
}
export interface GroupsGetCallbackServersResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsCallbackServer[]
}
export type GroupsGetCallbackSettingsResponse = Models.GroupsCallbackSettings
export interface GroupsGetCatalogInfoExtendedResponse {
    /**
     * Information whether catalog is enabled for current user
     */
    enabled: number,
    /**
     * 
     */
    categories: Models.GroupsGroupCategoryFull[]
}
export interface GroupsGetCatalogInfoResponse {
    /**
     * Information whether catalog is enabled for current user
     */
    enabled: number,
    /**
     * 
     */
    categories: Models.GroupsGroupCategory[]
}
export interface GroupsGetCatalogResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsGroup[]
}
export interface GroupsGetInvitedUsersResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface GroupsGetInvitesExtendedResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsGroupFull[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface GroupsGetInvitesResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsGroupFull[]
}
export type GroupsGetLongPollServerResponse = Models.GroupsLongPollServer
export type GroupsGetLongPollSettingsResponse = Models.GroupsLongPollSettings
export interface GroupsGetMembersFieldsResponse {
    /**
     * Total members number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsUserXtrRole[]
}
export interface GroupsGetMembersFilterResponse {
    /**
     * Total members number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsMemberRole[]
}
export interface GroupsGetMembersResponse {
    /**
     * Total members number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface GroupsGetRequestsFieldsResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface GroupsGetRequestsResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export type GroupsGetSettingsResponse = any
export type GroupsGetTagListResponse = Models.GroupsGroupTag[]
export interface GroupsGetTokenPermissionsResponse {
    /**
     * 
     */
    mask: number,
    /**
     * 
     */
    permissions: Models.GroupsTokenPermissionSetting[]
}
export interface GroupsGetExtendedResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsGroupFull[]
}
export interface GroupsGetResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface GroupsIsMemberExtendedResponse {
    /**
     * Information whether user is a member of the group
     */
    member: Models.BaseBoolInt,
    /**
     * Information whether user has been invited to the group
     */
    invitation: Models.BaseBoolInt,
    /**
     * Information whether user can be invited
     */
    can_invite: Models.BaseBoolInt,
    /**
     * Information whether user's invite to the group can be recalled
     */
    can_recall: Models.BaseBoolInt,
    /**
     * Information whether user has sent request to the group
     */
    request: Models.BaseBoolInt
}
export type GroupsIsMemberResponse = Models.BaseBoolInt
export type GroupsIsMemberUserIdsExtendedResponse = Models.GroupsMemberStatusFull[]
export type GroupsIsMemberUserIdsResponse = Models.GroupsMemberStatus[]
export interface GroupsSearchResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     * 
     */
    items: Models.GroupsGroup[]
}
export interface LikesAddResponse {
    /**
     * Total likes number
     */
    likes: number
}
export interface LikesDeleteResponse {
    /**
     * Total likes number
     */
    likes: number
}
export interface LikesGetListExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserMin[]
}
export interface LikesGetListResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface LikesIsLikedResponse {
    /**
     * Information whether user liked the object
     */
    liked: Models.BaseBoolInt,
    /**
     * Information whether user reposted the object
     */
    copied: Models.BaseBoolInt
}
export interface MarketAddAlbumResponse {
    /**
     * Album ID
     */
    market_album_id: number
}
export interface MarketAddResponse {
    /**
     * Item ID
     */
    market_item_id: number
}
export type MarketCreateCommentResponse = number
export type MarketDeleteCommentResponse = Models.BaseBoolInt
export interface MarketGetAlbumByIdResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketAlbum[]
}
export interface MarketGetAlbumsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketAlbum[]
}
export interface MarketGetByIdExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItemFull[]
}
export interface MarketGetByIdResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItem[]
}
export interface MarketGetCategoriesNewResponse {
    /**
     * 
     */
    items: Models.MarketMarketCategoryTree[]
}
export interface MarketGetCategoriesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketCategory[]
}
export interface MarketGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallComment[]
}
export interface MarketGetGroupOrdersResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketOrder[]
}
export interface MarketGetOrderByIdResponse {
    /**
     * 
     */
    order: Models.MarketOrder
}
export interface MarketGetOrderItemsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketOrderItem[]
}
export interface MarketGetOrdersExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketOrder[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface MarketGetOrdersResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketOrder[]
}
export interface MarketGetExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItemFull[]
}
export interface MarketGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItem[]
}
export type MarketRestoreCommentResponse = Models.BaseBoolInt
export interface MarketSearchExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItemFull[]
}
export interface MarketSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MarketMarketItem[]
}
export type MessagesCreateChatResponse = number
export interface MessagesDeleteChatPhotoResponse {
    /**
     * Service message ID
     */
    message_id: number,
    /**
     * 
     */
    chat: Models.MessagesChat
}
export interface MessagesDeleteConversationResponse {
    /**
     * Id of the last message, that was deleted
     */
    last_deleted_id: number
}
export interface MessagesDeleteResponse {
}
export type MessagesEditResponse = Models.BaseBoolInt
export interface MessagesGetByConversationMessageIdResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[]
}
export interface MessagesGetByIdExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface MessagesGetByIdResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[]
}
export interface MessagesGetChatPreviewResponse {
    /**
     * 
     */
    preview: Models.MessagesChatPreview,
    /**
     * 
     */
    profiles: Models.UsersUserFull[]
}
export type MessagesGetChatChatIdsFieldsResponse = Models.MessagesChatFull[]
export type MessagesGetChatChatIdsResponse = Models.MessagesChat[]
export type MessagesGetChatFieldsResponse = Models.MessagesChatFull
export type MessagesGetChatResponse = Models.MessagesChat
export interface MessagesGetConversationMembersResponse {
    /**
     * Chat members count
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesConversationMember[],
    /**
     * 
     */
    chat_restrictions: Models.MessagesChatRestrictions,
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface MessagesGetConversationsByIdExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesConversation[],
    /**
     * 
     */
    profiles: Models.UsersUser[]
}
export interface MessagesGetConversationsByIdResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesConversation[]
}
export interface MessagesGetConversationsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * Unread dialogs number
     */
    unread_count: number,
    /**
     * 
     */
    items: Models.MessagesConversationWithMessage[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface MessagesGetHistoryAttachmentsResponse {
    /**
     * 
     */
    items: Models.MessagesHistoryAttachment[],
    /**
     * Value for pagination
     */
    next_from: string
}
export interface MessagesGetHistoryExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * 
     */
    conversations: Models.MessagesConversation[]
}
export interface MessagesGetHistoryResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[]
}
export interface MessagesGetImportantMessagesExtendedResponse {
    /**
     * 
     */
    messages: Models.MessagesMessagesArray,
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * 
     */
    conversations: Models.MessagesConversation[]
}
export interface MessagesGetImportantMessagesResponse {
    /**
     * 
     */
    messages: Models.MessagesMessagesArray,
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * 
     */
    conversations: Models.MessagesConversation[]
}
export interface MessagesGetIntentUsersResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: number[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[]
}
export interface MessagesGetInviteLinkResponse {
    /**
     * 
     */
    link: string
}
export type MessagesGetLastActivityResponse = Models.MessagesLastActivity
export interface MessagesGetLongPollHistoryResponse {
    /**
     * 
     */
    history: number[][],
    /**
     * 
     */
    messages: Models.MessagesLongpollMessages,
    /**
     * 
     */
    credentials: Models.MessagesLongpollParams,
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * 
     */
    chats: Models.MessagesChat[],
    /**
     * Persistence timestamp
     */
    new_pts: number,
    /**
     * 
     */
    from_pts: number,
    /**
     * Has more
     */
    more: boolean,
    /**
     * 
     */
    conversations: Models.MessagesConversation[]
}
export type MessagesGetLongPollServerResponse = Models.MessagesLongpollParams
export interface MessagesIsMessagesFromGroupAllowedResponse {
    /**
     * 
     */
    is_allowed: Models.BaseBoolInt
}
export interface MessagesJoinChatByInviteLinkResponse {
    /**
     * 
     */
    chat_id: number
}
export type MessagesMarkAsImportantResponse = number[]
export type MessagesPinResponse = Models.MessagesPinnedMessage
export interface MessagesSearchConversationsResponse {
    /**
     * Total results number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesConversation[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface MessagesSearchExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * 
     */
    conversations: Models.MessagesConversation[]
}
export interface MessagesSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.MessagesMessage[]
}
export type MessagesSendResponse = number
export type MessagesSendUserIdsResponse = any
export interface MessagesSetChatPhotoResponse {
    /**
     * Service message ID
     */
    message_id: number,
    /**
     * 
     */
    chat: Models.MessagesChat
}
export interface NewsfeedGetBannedExtendedResponse {
    /**
     * 
     */
    groups: Models.UsersUserFull[],
    /**
     * 
     */
    profiles: Models.GroupsGroupFull[]
}
export interface NewsfeedGetBannedResponse {
    /**
     * 
     */
    groups: number[],
    /**
     * 
     */
    members: number[]
}
export interface NewsfeedGetCommentsResponse {
    /**
     * 
     */
    items: Models.NewsfeedNewsfeedItem[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * New from value
     */
    next_from: string
}
export interface NewsfeedGetListsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.NewsfeedListFull[]
}
export interface NewsfeedGetListsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.NewsfeedList[]
}
export interface NewsfeedGetMentionsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallpostToId[]
}
export interface NewsfeedGetRecommendedResponse {
    /**
     * 
     */
    items: Models.NewsfeedNewsfeedItem[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * New offset value
     */
    new_offset: string,
    /**
     * Next from value
     */
    next_from: string
}
export interface NewsfeedGetSuggestedSourcesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersSubscriptionsItem[]
}
export interface NewsfeedGetResponse {
    /**
     * 
     */
    items: Models.NewsfeedNewsfeedItem[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * New from value
     */
    next_from: string
}
export type NewsfeedSaveListResponse = number
export interface NewsfeedSearchExtendedResponse {
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[],
    /**
     * 
     */
    suggested_queries: string[],
    /**
     * 
     */
    next_from: string,
    /**
     * Filtered number
     */
    count: number,
    /**
     * Total number
     */
    total_count: number
}
export interface NewsfeedSearchResponse {
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    suggested_queries: string[],
    /**
     * 
     */
    next_from: string,
    /**
     * Filtered number
     */
    count: number,
    /**
     * Total number
     */
    total_count: number
}
export type NotesAddResponse = number
export type NotesCreateCommentResponse = number
export type NotesGetByIdResponse = Models.NotesNote
export interface NotesGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.NotesNoteComment[]
}
export interface NotesGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.NotesNote[]
}
export interface NotificationsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.NotificationsNotificationItem[],
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * Time when user has been checked notifications last time
     */
    last_viewed: number,
    /**
     * 
     */
    photos: Models.PhotosPhoto[],
    /**
     * 
     */
    videos: Models.VideoVideo[],
    /**
     * 
     */
    apps: Models.AppsApp[],
    /**
     * 
     */
    next_from: string,
    /**
     * 
     */
    ttl: number
}
export type NotificationsMarkAsViewedResponse = Models.BaseBoolInt
export type NotificationsSendMessageResponse = Models.NotificationsSendMessageItem[]
export type OrdersCancelSubscriptionResponse = Models.BaseBoolInt
export type OrdersChangeStateResponse = string
export type OrdersGetAmountResponse = Models.OrdersAmount
export type OrdersGetByIdResponse = Models.OrdersOrder[]
export type OrdersGetUserSubscriptionByIdResponse = Models.OrdersSubscription
export interface OrdersGetUserSubscriptionsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.OrdersSubscription[]
}
export type OrdersGetResponse = Models.OrdersOrder[]
export type OrdersUpdateSubscriptionResponse = Models.BaseBoolInt
export type PagesGetHistoryResponse = Models.PagesWikipageHistory[]
export type PagesGetTitlesResponse = Models.PagesWikipage[]
export type PagesGetVersionResponse = Models.PagesWikipageFull
export type PagesGetResponse = Models.PagesWikipageFull
export type PagesParseWikiResponse = string
export type PagesSaveAccessResponse = number
export type PagesSaveResponse = number
export type PhotosCopyResponse = number
export type PhotosCreateAlbumResponse = Models.PhotosPhotoAlbumFull
export type PhotosCreateCommentResponse = number
export type PhotosDeleteCommentResponse = Models.BaseBoolInt
export type PhotosGetAlbumsCountResponse = number
export interface PhotosGetAlbumsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoAlbumFull[]
}
export interface PhotosGetAllCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosCommentXtrPid[]
}
export interface PhotosGetAllExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoFullXtrRealOffset[],
    /**
     * Information whether next page is presented
     */
    more: Models.BaseBoolInt
}
export interface PhotosGetAllResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoXtrRealOffset[],
    /**
     * Information whether next page is presented
     */
    more: Models.BaseBoolInt
}
export type PhotosGetByIdExtendedResponse = Models.PhotosPhotoFull[]
export type PhotosGetByIdResponse = Models.PhotosPhoto[]
export interface PhotosGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * Real offset of the comments
     */
    real_offset: number,
    /**
     * 
     */
    items: Models.WallWallComment[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface PhotosGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * Real offset of the comments
     */
    real_offset: number,
    /**
     * 
     */
    items: Models.WallWallComment[]
}
export type PhotosGetMarketUploadServerResponse = Models.BaseUploadServer
export type PhotosGetMessagesUploadServerResponse = Models.PhotosPhotoUpload
export interface PhotosGetNewTagsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoXtrTagInfo[]
}
export type PhotosGetTagsResponse = Models.PhotosPhotoTag[]
export type PhotosGetUploadServerResponse = Models.PhotosPhotoUpload
export interface PhotosGetUserPhotosExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoFull[]
}
export interface PhotosGetUserPhotosResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhoto[]
}
export type PhotosGetWallUploadServerResponse = Models.PhotosPhotoUpload
export interface PhotosGetExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhotoFull[]
}
export interface PhotosGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhoto[]
}
export type PhotosPutTagResponse = number
export type PhotosRestoreCommentResponse = Models.BaseBoolInt
export type PhotosSaveMarketAlbumPhotoResponse = Models.PhotosPhoto[]
export type PhotosSaveMarketPhotoResponse = Models.PhotosPhoto[]
export type PhotosSaveMessagesPhotoResponse = Models.PhotosPhoto[]
export type PhotosSaveOwnerCoverPhotoResponse = Models.BaseImage[]
export interface PhotosSaveOwnerPhotoResponse {
    /**
     * Photo hash
     */
    photo_hash: string,
    /**
     * Uploaded image url
     */
    photo_src: string,
    /**
     * Uploaded image url
     */
    photo_src_big: string,
    /**
     * Uploaded image url
     */
    photo_src_small: string,
    /**
     * Returns 1 if profile photo is saved
     */
    saved: number,
    /**
     * Created post ID
     */
    post_id: number
}
export type PhotosSaveWallPhotoResponse = Models.PhotosPhoto[]
export type PhotosSaveResponse = Models.PhotosPhoto[]
export interface PhotosSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PhotosPhoto[]
}
export type PollsAddVoteResponse = Models.BaseBoolInt
export type PollsCreateResponse = Models.PollsPoll
export type PollsDeleteVoteResponse = Models.BaseBoolInt
export type PollsGetByIdResponse = Models.PollsPoll
export type PollsGetVotersResponse = Models.PollsVoters[]
export interface PrettyCardsCreateResponse {
    /**
     * Owner ID of created pretty card
     */
    owner_id: number,
    /**
     * Card ID of created pretty card
     */
    card_id: string
}
export interface PrettyCardsDeleteResponse {
    /**
     * Owner ID of deleted pretty card
     */
    owner_id: number,
    /**
     * Card ID of deleted pretty card
     */
    card_id: string,
    /**
     * Error reason if error happened
     */
    error: string
}
export interface PrettyCardsEditResponse {
    /**
     * Owner ID of edited pretty card
     */
    owner_id: number,
    /**
     * Card ID of edited pretty card
     */
    card_id: string
}
export type PrettyCardsGetByIdResponse = Models.PrettyCardsPrettyCard[]
export type PrettyCardsGetUploadURLResponse = string
export interface PrettyCardsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.PrettyCardsPrettyCard[]
}
export interface SearchGetHintsResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.SearchHint[],
    /**
     * 
     */
    suggested_queries: string[]
}
export type SecureCheckTokenResponse = Models.SecureTokenChecked
export type SecureGetAppBalanceResponse = number
export type SecureGetSMSHistoryResponse = Models.SecureSmsNotification[]
export type SecureGetTransactionsHistoryResponse = Models.SecureTransaction[]
export type SecureGetUserLevelResponse = Models.SecureLevel[]
export type SecureGiveEventStickerResponse = any
export type SecureSendNotificationResponse = number[]
export type StatsGetPostReachResponse = Models.StatsWallpostStat[]
export type StatsGetResponse = Models.StatsPeriod[]
export type StatusGetResponse = Models.StatusStatus
export type StorageGetKeysResponse = string[]
export type StorageGetResponse = Models.StorageValue[]
export interface StoriesGetBannedExtendedResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     * 
     */
    items: number[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface StoriesGetBannedResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface StoriesGetByIdExtendedResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesStory[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface StoriesGetByIdResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesStory[]
}
export interface StoriesGetPhotoUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string,
    /**
     * Users ID who can to see story.
     */
    user_ids: number[]
}
export type StoriesGetStatsResponse = Models.StoriesStoryStats
export interface StoriesGetVideoUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string,
    /**
     * Users ID who can to see story.
     */
    user_ids: number[]
}
export interface StoriesGetViewersExtendedV5115Response {
    /**
     * Viewers count
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesViewersItem[],
    /**
     * 
     */
    hidden_reason: string
}
export interface StoriesGetViewersExtendedResponse {
    /**
     * Viewers count
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface StoriesGetV5113Response {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesFeedItem[],
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * 
     */
    need_upload_screen: boolean
}
export interface StoriesGetResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesStory[][],
    /**
     * 
     */
    promo_data: Models.StoriesPromoBlock,
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[],
    /**
     * 
     */
    need_upload_screen: boolean
}
export interface StoriesSaveResponse {
    /**
     * 
     */
    count: number,
    /**
     * 
     */
    items: Models.StoriesStory[]
}
export interface StoriesUploadResponse {
    /**
     * A string hash that is used in the stories.save method
     */
    upload_result: string
}
export interface StreamingGetServerUrlResponse {
    /**
     * Server host
     */
    endpoint: string,
    /**
     * Access key
     */
    key: string
}
export interface UsersGetFollowersFieldsResponse {
    /**
     * Total number of available results
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export interface UsersGetFollowersResponse {
    /**
     * Total friends number
     */
    count: number,
    /**
     * 
     */
    items: number[]
}
export interface UsersGetSubscriptionsExtendedResponse {
    /**
     * Total number of available results
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersSubscriptionsItem[]
}
export interface UsersGetSubscriptionsResponse {
    /**
     * 
     */
    users: Models.UsersUsersArray,
    /**
     * 
     */
    groups: Models.GroupsGroupsArray
}
export type UsersGetResponse = Models.UsersUserXtrCounters[]
export interface UsersSearchResponse {
    /**
     * Total number of available results
     */
    count: number,
    /**
     * 
     */
    items: Models.UsersUserFull[]
}
export type UtilsCheckLinkResponse = Models.UtilsLinkChecked
export interface UtilsGetLastShortenedLinksResponse {
    /**
     * Total number of available results
     */
    count: number,
    /**
     * 
     */
    items: Models.UtilsLastShortenedLink[]
}
export type UtilsGetLinkStatsExtendedResponse = Models.UtilsLinkStatsExtended
export type UtilsGetLinkStatsResponse = Models.UtilsLinkStats
export type UtilsGetServerTimeResponse = number
export type UtilsGetShortLinkResponse = Models.UtilsShortLink
export type UtilsResolveScreenNameResponse = Models.UtilsDomainResolved
export interface VideoAddAlbumResponse {
    /**
     * Created album ID
     */
    album_id: number
}
export type VideoCreateCommentResponse = number
export type VideoGetAlbumByIdResponse = Models.VideoVideoAlbumFull
export interface VideoGetAlbumsByVideoExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideoAlbumFull[]
}
export type VideoGetAlbumsByVideoResponse = number[]
export interface VideoGetAlbumsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideoAlbumFull[]
}
export interface VideoGetAlbumsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideoAlbumFull[]
}
export interface VideoGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallComment[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface VideoGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallComment[]
}
export interface VideoGetExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideoFull[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface VideoGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideo[]
}
export type VideoRestoreCommentResponse = Models.BaseBoolInt
export type VideoSaveResponse = Models.VideoSaveResult
export interface VideoSearchExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideo[],
    /**
     * 
     */
    profiles: Models.UsersUserMin[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface VideoSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.VideoVideo[]
}
export interface WallCreateCommentResponse {
    /**
     * Created comment ID
     */
    comment_id: number
}
export interface WallEditResponse {
    /**
     * Edited post ID
     */
    post_id: number
}
export interface WallGetByIdExtendedResponse {
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export type WallGetByIdLegacyResponse = Models.WallWallpostFull[]
export interface WallGetByIdResponse {
    /**
     * 
     */
    items: Models.WallWallpostFull[]
}
export interface WallGetCommentExtendedResponse {
    /**
     * 
     */
    items: Models.WallWallComment[],
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export interface WallGetCommentResponse {
    /**
     * 
     */
    items: Models.WallWallComment[]
}
export interface WallGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallComment[],
    /**
     * 
     */
    show_reply_button: boolean,
    /**
     * Information whether current user can comment the post
     */
    can_post: boolean,
    /**
     * Information whether groups can comment the post
     */
    groups_can_post: boolean,
    /**
     * Count of replies of current level
     */
    current_level_count: number,
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export interface WallGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallComment[],
    /**
     * Information whether current user can comment the post
     */
    can_post: boolean,
    /**
     * Information whether groups can comment the post
     */
    groups_can_post: boolean,
    /**
     * Count of replies of current level
     */
    current_level_count: number
}
export interface WallGetRepostsResponse {
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    profiles: Models.UsersUser[],
    /**
     * 
     */
    groups: Models.GroupsGroup[]
}
export interface WallGetExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface WallGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallpostFull[]
}
export interface WallPostAdsStealthResponse {
    /**
     * Created post ID
     */
    post_id: number
}
export interface WallPostResponse {
    /**
     * Created post ID
     */
    post_id: number
}
export interface WallRepostResponse {
    /**
     * 
     */
    success: number,
    /**
     * Created post ID
     */
    post_id: number,
    /**
     * Reposts number
     */
    reposts_count: number,
    /**
     * Reposts to wall number
     */
    wall_repost_count: number,
    /**
     * Reposts to mail number
     */
    mail_repost_count: number,
    /**
     * Reposts number
     */
    likes_count: number
}
export interface WallSearchExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallpostFull[],
    /**
     * 
     */
    profiles: Models.UsersUserFull[],
    /**
     * 
     */
    groups: Models.GroupsGroupFull[]
}
export interface WallSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    items: Models.WallWallpostFull[]
}
export interface WidgetsGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    posts: Models.WidgetsWidgetComment[]
}
export interface WidgetsGetPagesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * 
     */
    pages: Models.WidgetsWidgetPage[]
}