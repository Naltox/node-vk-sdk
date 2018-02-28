import * as Models from './Models'

export type OkResponse = Models.BaseOkResponse

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
    items: Models.UsersUserMin[]
}

export type AccountGetCountersResponse = Models.AccountAccountCounters

export type AccountGetInfoResponse = Models.AccountInfo

export type AccountGetProfileInfoResponse = Models.AccountUserSettings

export type AccountGetPushSettingsResponse = Models.AccountPushSettings

export type AccountLookupContactsResponse = Models.AccountLookupResult

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

export type AdsGetAdsResponse = Models.AdsAd[]

export type AdsGetAdsLayoutResponse = Models.AdsAdLayout[]

export type AdsGetAdsPostsReachResponse = Models.AdsPostStats[]

export type AdsGetAdsTargetingResponse = Models.AdsTargSettings[]

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

export type AdsGetOfficeUsersResponse = Models.AdsUsers[]

export type AdsGetRejectionReasonResponse = Models.AdsRejectReason

export type AdsGetStatisticsResponse = Models.AdsStats[]

export type AdsGetSuggestionsResponse = Models.AdsTargSuggestions[]

export type AdsGetSuggestionsRegionsResponse = Models.AdsTargSuggestionsRegions[]

export type AdsGetSuggestionsCitiesResponse = Models.AdsTargSuggestionsCities[]

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

export interface AppsGetCatalogResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.AppsApp[]
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

export interface AppsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.AppsApp[]
}

export type AppsGetScoreResponse = number

export type AppsSendRequestResponse = number

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

export interface AuthSignupResponse {
    /**
     * Parameter to retry
     */
    sid: string
}

export interface AuthConfirmResponse {
    /**
     * 1 if success
     */
    success: number,
    /**
     * User ID
     */
    user_id: number
}

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

export type BoardAddTopicResponse = number

export type BoardCreateCommentResponse = number

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

export type DatabaseGetStreetsByIdResponse = Models.DatabaseStreet[]

export type DatabaseGetCountriesByIdResponse = Models.BaseCountry[]

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

export type DatabaseGetCitiesByIdResponse = Models.BaseObject[]

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

export type DatabaseGetSchoolClassesResponse = any[][]

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

export type DocsGetByIdResponse = Models.DocsDoc[]

export interface DocsGetUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string
}

export interface DocsGetWallUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string
}

export type DocsSaveResponse = Models.DocsDoc[]

export interface DocsAddResponse {
    /**
     * Doc ID
     */
    id: number
}

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

export interface FaveGetUsersResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.UsersUserMin[]
}

export interface FaveGetPhotosResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.PhotosPhoto[]
}

export interface FaveGetPostsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.WallWallpostFull[]
}

export interface FaveGetVideosResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.VideoVideo[]
}

export interface FaveGetLinksResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.FaveFavesLink[]
}

export interface FaveGetMarketItemsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.MarketMarketItem[]
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

export type FriendsGetOnlineResponse = number[]

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

export type FriendsGetMutualResponse = number[]

export type FriendsGetMutualTargetUidsResponse = Models.FriendsMutualFriend[]

export type FriendsGetRecentResponse = number[]

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

export type FriendsAddResponse = number

export interface FriendsDeleteResponse {
    /**
     *
     */
    success: Models.BaseOkResponse,
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

export interface FriendsGetListsResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     *
     */
    items: Models.FriendsFriendsList[]
}

export interface FriendsAddListResponse {
    /**
     * List ID
     */
    list_id: number
}

export type FriendsGetAppUsersResponse = number[]

export type FriendsGetByPhonesResponse = Models.FriendsUserXtrPhone[]

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

export type FriendsAreFriendsResponse = Models.FriendsFriendStatus[]

export interface FriendsGetAvailableForCallResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: number[]
}

export interface FriendsGetAvailableForCallFieldsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.UsersUserFull[]
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

export type GroupsIsMemberResponse = Models.BaseBoolInt

export type GroupsIsMemberUserIdsResponse = Models.GroupsMemberStatus[]

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
     * Information whether user has sent request to the group
     */
    request: Models.BaseBoolInt
}

export type GroupsIsMemberUserIdsExtendedResponse = Models.GroupsMemberStatusFull[]

export type GroupsGetByIdResponse = Models.GroupsGroupFull[]

export interface GroupsGetCallbackConfirmationCodeResponse {
    /**
     * Confirmation code
     */
    code: string
}

export interface GroupsGetCallbackSettingsResponse {
    /**
     * Whether notifications about new message enabled
     */
    message_new: Models.BaseBoolInt,
    /**
     * Whether notifications about edited message enabled
     */
    message_edit: Models.BaseBoolInt,
    /**
     * Whether notifications about new message enabled
     */
    message_reply: Models.BaseBoolInt,
    /**
     * Whether notifications about allowed messages enabled
     */
    message_allow: Models.BaseBoolInt,
    /**
     * Whether notifications about denied messages enabled
     */
    message_deny: Models.BaseBoolInt,
    /**
     * Whether notifications about new photos enabled
     */
    photo_new: Models.BaseBoolInt,
    /**
     * Whether notifications about new audios enabled
     */
    audio_new: Models.BaseBoolInt,
    /**
     * Whether notifications about new videos enabled
     */
    video_new: Models.BaseBoolInt,
    /**
     * Whether notifications about new wall replies enabled
     */
    wall_reply_new: Models.BaseBoolInt,
    /**
     * Comment on wall has been edited
     */
    wall_reply_edit: Models.BaseBoolInt,
    /**
     * Comment on wall has been deleted
     */
    wall_reply_delete: Models.BaseBoolInt,
    /**
     * Comment on wall has been restored
     */
    wall_post_restore: Models.BaseBoolInt,
    /**
     * Whether notifications about new board posts enabled
     */
    board_post_new: Models.BaseBoolInt,
    /**
     * Whether notifications about board posts edits enabled
     */
    board_post_edit: Models.BaseBoolInt,
    /**
     * Whether notifications about board posts restores enabled
     */
    board_post_restore: Models.BaseBoolInt,
    /**
     * Whether notifications about board posts deleted enabled
     */
    board_post_delete: Models.BaseBoolInt,
    /**
     * Whether notifications about new photo comments enabled
     */
    photo_comment_new: Models.BaseBoolInt,
    /**
     * Comment on photo has been edited
     */
    photo_comment_edit: Models.BaseBoolInt,
    /**
     * Comment on photo has been deleted
     */
    photo_comment_delete: Models.BaseBoolInt,
    /**
     * Comment on photo has been restored
     */
    photo_comment_restore: Models.BaseBoolInt,
    /**
     * Whether notifications about new video comments enabled
     */
    video_comment_new: Models.BaseBoolInt,
    /**
     * Comment on video has been edited
     */
    video_comment_edit: Models.BaseBoolInt,
    /**
     * Comment on video has been deleted
     */
    video_comment_delete: Models.BaseBoolInt,
    /**
     * Comment on video has been restored
     */
    video_comment_restore: Models.BaseBoolInt,
    /**
     * Whether notifications about new market comments enabled
     */
    market_comment_new: Models.BaseBoolInt,
    /**
     * Comment on market item has been edited
     */
    market_comment_edit: Models.BaseBoolInt,
    /**
     * Comment on market item has been deleted
     */
    market_comment_delete: Models.BaseBoolInt,
    /**
     * Comment on market item has been restored
     */
    market_comment_restore: Models.BaseBoolInt,
    /**
     * Whether notifications about anyone joined the community enabled
     */
    group_join: Models.BaseBoolInt,
    /**
     * Whether notifications about anyone left the community enabled
     */
    group_leave: Models.BaseBoolInt
}

export type GroupsGetLongPollServerResponse = Models.GroupsLongPollServer

export type GroupsGetLongPollSettingsResponse = Models.GroupsLongPollSettings

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

export interface GroupsGetInvitesResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     *
     */
    items: Models.GroupsGroupXtrInvitedBy[]
}

export interface GroupsGetInvitesExtendedResponse {
    /**
     * Total communities number
     */
    count: number,
    /**
     *
     */
    items: Models.GroupsGroupXtrInvitedBy[],
    /**
     *
     */
    profiles: Models.UsersUserMin[]
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

export interface GroupsGetBannedResponse {
    /**
     * Total users number
     */
    count: number,
    /**
     *
     */
    items: Models.GroupsOwnerXtrBanInfo[]
}

export type GroupsCreateResponse = Models.GroupsGroup

export interface GroupsEditPlaceResponse {
    /**
     *
     */
    success: Models.BaseOkResponse,
    /**
     * Place address
     */
    address: string
}

export type GroupsGetSettingsResponse = Models.GroupsGroupSettings

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

export type GroupsAddLinkResponse = Models.GroupsGroupLink

export type LeadsCompleteResponse = Models.LeadsComplete

export type LeadsStartResponse = Models.LeadsStart

export type LeadsGetStatsResponse = Models.LeadsLead

export type LeadsGetUsersResponse = Models.LeadsEntry[]

export type LeadsCheckUserResponse = Models.LeadsChecked

export interface LeadsMetricHitResponse {
    /**
     * Information whether request has been processed successfully
     */
    result: boolean,
    /**
     * Redirect link
     */
    redirect_link: string
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

export type MarketCreateCommentResponse = number

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

export type MarketDeleteCommentResponse = Models.BaseBoolInt

export type MarketRestoreCommentResponse = Models.BaseBoolInt

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

export interface MarketAddResponse {
    /**
     * Item ID
     */
    market_item_id: number
}

export interface MarketAddAlbumResponse {
    /**
     * Album ID
     */
    market_album_id: number
}

export interface MessagesGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.MessagesMessage[]
}

export interface MessagesDeleteResponse {
}

export interface MessagesGetDialogsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * Unread dialogs number
     */
    unread_dialogs: number,
    /**
     *
     */
    items: Models.MessagesDialog[]
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

export interface MessagesGetHistoryResponse {
    /**
     * Total number
     */
    count: number,
    /**
     * Unread dialogs number
     */
    unread: number,
    /**
     *
     */
    items: Models.MessagesMessage[],
    /**
     * Id of last read inbound message
     */
    in_read: number,
    /**
     * Id of last read outbound message
     */
    out_read: number
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

export type MessagesSendResponse = number

export type MessagesMarkAsImportantResponse = number[]

export type MessagesGetLongPollServerResponse = Models.MessagesLongpollParams

export interface MessagesGetLongPollHistoryResponse {
    /**
     *
     */
    history: number[][],
    /**
     *
     */
    groups: Models.GroupsGroup[],
    /**
     *
     */
    messages: Models.MessagesLongpollMessages,
    /**
     *
     */
    profiles: Models.UsersUserFull[],
    /**
     *
     */
    chats: Models.MessagesChat[],
    /**
     * Persistence timestamp
     */
    new_pts: number,
    /**
     * Has more
     */
    more: Models.BaseBoolInt
}

export type MessagesGetChatResponse = Models.MessagesChat

export type MessagesGetChatFieldsResponse = Models.MessagesChatFull

export type MessagesGetChatChatIdsResponse = Models.MessagesChat[]

export type MessagesGetChatChatIdsFieldsResponse = Models.MessagesChatFull[]

export type MessagesCreateChatResponse = number

export type MessagesEditChatResponse = Models.BaseOkResponse

export type MessagesGetChatUsersResponse = number[]

export type MessagesGetChatUsersFieldsResponse = Models.MessagesUserXtrInvitedBy[]

export interface MessagesGetChatUsersChatIdsResponse {
}

export interface MessagesGetChatUsersChatIdsFieldsResponse {
}

export type MessagesSearchDialogsResponse = any[]

export type MessagesGetLastActivityResponse = Models.MessagesLastActivity

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

export interface MessagesIsMessagesFromGroupAllowedResponse {
    /**
     *
     */
    is_allowed: Models.BaseBoolInt
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
    groups: Models.GroupsGroupFull[]
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
     * New from value
     */
    new_from: string
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

export interface NewsfeedGetBannedExtendedResponse {
    /**
     *
     */
    groups: Models.UsersUserFull[],
    /**
     *
     */
    members: Models.GroupsGroupFull[]
}

export interface NewsfeedSearchResponse {
    /**
     *
     */
    items: Models.WallWallpostFull[],
    /**
     *
     */
    suggested_queries: string[]
}

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
    groups: Models.GroupsGroupFull[]
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

export type NewsfeedSaveListResponse = number

export interface NewsfeedGetSuggestedSourcesResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: any[]
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

export type NotesGetByIdResponse = Models.NotesNote

export type NotesAddResponse = number

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

export type NotesCreateCommentResponse = number

export interface NotificationsGetResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.NotificationsNotification[],
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
    last_viewed: number
}

export type NotificationsMarkAsViewedResponse = Models.BaseBoolInt

export type OrdersGetResponse = Models.OrdersOrder[]

export type OrdersGetByIdResponse = Models.OrdersOrder[]

export type OrdersChangeStateResponse = string

export type OrdersGetAmountResponse = Models.OrdersAmount

export type PagesGetResponse = Models.PagesWikipageFull

export type PagesSaveResponse = number

export type PagesSaveAccessResponse = number

export type PagesGetHistoryResponse = Models.PagesWikipageVersion[]

export type PagesGetTitlesResponse = Models.PagesWikipage[]

export type PagesGetVersionResponse = Models.PagesWikipageFull

export type PagesParseWikiResponse = string

export type PhotosCreateAlbumResponse = Models.PhotosPhotoAlbumFull

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

export type PhotosGetAlbumsCountResponse = number

export type PhotosGetByIdResponse = Models.PhotosPhoto[]

export type PhotosGetByIdExtendedResponse = Models.PhotosPhotoFull[]

export type PhotosGetUploadServerResponse = Models.PhotosPhotoUpload

export interface PhotosGetOwnerCoverPhotoUploadServerResponse {
    /**
     * URL to upload the photo
     */
    upload_url: string
}

export type PhotosSaveOwnerCoverPhotoResponse = Models.BaseImage[]

export interface PhotosGetOwnerPhotoUploadServerResponse {
    /**
     * URL to upload the photo
     */
    upload_url: string
}

export interface PhotosGetChatUploadServerResponse {
    /**
     * URL to upload the photo
     */
    upload_url: string
}

export interface PhotosGetMarketUploadServerResponse {
    /**
     * URL to upload the photo
     */
    upload_url: string
}

export interface PhotosGetMarketAlbumUploadServerResponse {
    /**
     * URL to upload the photo
     */
    upload_url: string
}

export type PhotosSaveMarketPhotoResponse = Models.PhotosPhoto[]

export type PhotosSaveMarketAlbumPhotoResponse = Models.PhotosPhoto[]

export interface PhotosSaveOwnerPhotoResponse {
    /**
     * Parameter for saveProfilePhoto method
     */
    photo_hash: string,
    /**
     * Uploaded image url
     */
    photo_src: string
}

export type PhotosSaveWallPhotoResponse = Models.PhotosPhoto[]

export type PhotosGetWallUploadServerResponse = Models.PhotosPhotoUpload

export type PhotosGetMessagesUploadServerResponse = Models.PhotosPhotoUpload

export type PhotosSaveMessagesPhotoResponse = Models.PhotosPhoto[]

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

export type PhotosSaveResponse = Models.PhotosPhoto[]

export type PhotosCopyResponse = number

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

export interface PhotosGetUserPhotoExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.PhotosPhotoFull[]
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

export type PhotosCreateCommentResponse = number

export type PhotosDeleteCommentResponse = Models.BaseBoolInt

export type PhotosRestoreCommentResponse = Models.BaseBoolInt

export type PhotosGetTagsResponse = Models.PhotosPhotoTag[]

export type PhotosPutTagResponse = number

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

export interface PlacesAddResponse {
    /**
     * Place ID
     */
    id: number
}

export type PlacesGetByIdResponse = Models.PlacesPlaceMin[]

export interface PlacesSearchResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.PlacesPlaceFull[]
}

export interface PlacesCheckinResponse {
    /**
     * Checkin ID
     */
    id: number
}

export interface PlacesGetCheckinsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.PlacesCheckin[]
}

export type PlacesGetTypesResponse = Models.PlacesTypes[]

export type PollsGetByIdResponse = Models.PollsPoll

export type PollsAddVoteResponse = Models.BaseBoolInt

export type PollsDeleteVoteResponse = Models.BaseBoolInt

export type PollsGetVotersResponse = Models.PollsVoters[]

export type PollsCreateResponse = Models.PollsPoll

export interface SearchGetHintsResponse {
    /**
     *
     */
    items: Models.SearchHint[],
    /**
     *
     */
    suggested_queries: string[]
}

export type SecureGetAppBalanceResponse = number

export type SecureGetSMSHistoryResponse = Models.SecureSmsNotification[]

export type SecureGetTransactionsHistoryResponse = Models.SecureTransaction[]

export type SecureGetUserLevelResponse = Models.SecureLevel[]

export type SecureSendNotificationResponse = number[]

export type SecureCheckTokenResponse = Models.SecureTokenChecked

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

export type StatsGetResponse = Models.StatsPeriod[]

export type StatsGetPostReachResponse = Models.StatsWallpostStat[]

export type StatusGetResponse = Models.StatusStatus

export type StorageGetResponse = string

export type StorageGetKeysResponse = string[]

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

export type UsersIsAppUserResponse = Models.BaseBoolInt

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

export interface UsersGetSubscriptionsExtendedResponse {
    /**
     * Total number of available results
     */
    count: number,
    /**
     *
     */
    items: any[]
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

export interface UsersGetNearbyResponse {
    /**
     * Users number
     */
    count: number,
    /**
     *
     */
    items: Models.UsersUserFull[]
}

export type UtilsGetShortLinkResponse = Models.UtilsShortLink

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

export type UtilsGetLinkStatsResponse = Models.UtilsLinkStats

export type UtilsGetLinkStatsExtendedResponse = Models.UtilsLinkStatsExtended

export type UtilsCheckLinkResponse = Models.UtilsLinkChecked

export type UtilsResolveScreenNameResponse = Models.UtilsDomainResolved

export type UtilsGetServerTimeResponse = number

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

export type VideoSaveResponse = Models.VideoSaveResult

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

export interface VideoGetUserVideosResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.VideoVideo[]
}

export interface VideoGetUserVideosExtendedResponse {
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

export type VideoGetAlbumByIdResponse = Models.VideoVideoAlbumFull

export interface VideoAddAlbumResponse {
    /**
     * Created album ID
     */
    album_id: number
}

export type VideoGetAlbumsByVideoResponse = number[]

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

export interface VideoGetCommentsResponse {
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

export interface VideoGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.WallWallComment[]
}

export type VideoCreateCommentResponse = number

export type VideoRestoreCommentResponse = Models.BaseBoolInt

export type VideoGetTagsResponse = Models.VideoVideoTag[]

export type VideoPutTagResponse = number

export interface VideoGetNewTagsResponse {
    /**
     * Total number
     */
    count: number,
    /**
     *
     */
    items: Models.VideoVideoTagInfo[]
}

export interface VideoGetCatalogResponse {
    /**
     *
     */
    items: Models.VideoCatBlock[],
    /**
     * New value for _from_ parameter
     */
    next: string
}

export interface VideoGetCatalogExtendedResponse {
    /**
     *
     */
    items: Models.VideoCatBlock[],
    /**
     *
     */
    profiles: Models.UsersUserFull[],
    /**
     *
     */
    groups: Models.GroupsGroupFull[],
    /**
     * New value for _from_ parameter
     */
    next: string
}

export interface VideoGetCatalogSectionResponse {
    /**
     *
     */
    items: Models.VideoCatElement[],
    /**
     * New value for _from_ parameter
     */
    next: string
}

export interface VideoGetCatalogSectionExtendedResponse {
    /**
     *
     */
    items: Models.VideoCatElement[],
    /**
     *
     */
    profiles: Models.UsersUserFull[],
    /**
     *
     */
    groups: Models.GroupsGroupFull[],
    /**
     * New value for _from_ parameter
     */
    next: string
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

export type WallGetByIdResponse = Models.WallWallpostFull[]

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
    success: Models.BaseOkResponse,
    /**
     * Created post ID
     */
    post_id: number,
    /**
     * Reposts number
     */
    reposts_count: number,
    /**
     * Reposts number
     */
    likes_count: number
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

export interface WallGetCommentsResponse {
    /**
     * Total number
     */
    count: number,
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
    profiles: Models.UsersUser[],
    /**
     *
     */
    groups: Models.GroupsGroup[]
}

export interface WallCreateCommentResponse {
    /**
     * Created comment ID
     */
    comment_id: number
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

export interface StoriesGetResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     *
     */
    items: Models.StoriesStory[][]
}

export interface StoriesGetExtendedResponse {
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
    profiles: Models.UsersUser[],
    /**
     *
     */
    groups: Models.GroupsGroup[]
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

export interface StoriesGetRepliesResponse {
    /**
     * Stories count
     */
    count: number,
    /**
     *
     */
    items: Models.StoriesStory[][]
}

export interface StoriesGetRepliesExtendedResponse {
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
    profiles: Models.UsersUserFull[],
    /**
     *
     */
    groups: Models.GroupsGroupFull[]
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

export interface StoriesGetViewersResponse {
    /**
     * Viewers count
     */
    count: number,
    /**
     *
     */
    items: number[]
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