import {BaseVKApi} from "../api/BaseVKApi"
import * as MethodsProps from "./MethodsProps"
import * as Responses from "./Responses"

export class VKApi extends BaseVKApi {
    /**
     * Returns detailed information on users.
     *
     * @param {{
     *   user_ids: (string[]|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersGetResponse>}
     */
    public async usersGet(params: MethodsProps.UsersGetParams): Promise<Responses.UsersGetResponse> {
        return super.call("users.get", params)
    }
    /**
     * Returns a list of users matching the search criteria.
     *
     * @param {{
     *   q: (string|undefined),
     *   sort: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   city: (number|undefined),
     *   country: (number|undefined),
     *   hometown: (string|undefined),
     *   university_country: (number|undefined),
     *   university: (number|undefined),
     *   university_year: (number|undefined),
     *   university_faculty: (number|undefined),
     *   university_chair: (number|undefined),
     *   sex: (number|undefined),
     *   status: (number|undefined),
     *   age_from: (number|undefined),
     *   age_to: (number|undefined),
     *   birth_day: (number|undefined),
     *   birth_month: (number|undefined),
     *   birth_year: (number|undefined),
     *   online: (boolean|undefined),
     *   has_photo: (boolean|undefined),
     *   school_country: (number|undefined),
     *   school_city: (number|undefined),
     *   school_class: (number|undefined),
     *   school: (number|undefined),
     *   school_year: (number|undefined),
     *   religion: (string|undefined),
     *   interests: (string|undefined),
     *   company: (string|undefined),
     *   position: (string|undefined),
     *   group_id: (number|undefined),
     *   from_list: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersSearchResponse>}
     */
    public async usersSearch(params: MethodsProps.UsersSearchParams): Promise<Responses.UsersSearchResponse> {
        return super.call("users.search", params)
    }
    /**
     * Returns information whether a user installed the application.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersIsAppUserResponse>}
     */
    public async usersIsAppUser(params: MethodsProps.UsersIsAppUserParams): Promise<Responses.UsersIsAppUserResponse> {
        return super.call("users.isAppUser", params)
    }
    /**
     * Returns a list of IDs of users and communities followed by the user.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersGetSubscriptionsResponse>}
     */
    public async usersGetSubscriptions(params: MethodsProps.UsersGetSubscriptionsParams): Promise<Responses.UsersGetSubscriptionsResponse> {
        return super.call("users.getSubscriptions", params)
    }
    /**
     * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersGetFollowersResponse>}
     */
    public async usersGetFollowers(params: MethodsProps.UsersGetFollowersParams): Promise<Responses.UsersGetFollowersResponse> {
        return super.call("users.getFollowers", params)
    }
    /**
     * Reports (submits a complain about) a user.
     *
     * @param {{
     *   user_id: (number),
     *   type: (string),
     *   comment: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async usersReport(params: MethodsProps.UsersReportParams): Promise<Responses.OkResponse> {
        return super.call("users.report", params)
    }
    /**
     * Indexes current user location and returns nearby users.
     *
     * @param {{
     *   latitude: (number),
     *   longitude: (number),
     *   accuracy: (number|undefined),
     *   timeout: (number|undefined),
     *   radius: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UsersGetNearbyResponse>}
     */
    public async usersGetNearby(params: MethodsProps.UsersGetNearbyParams): Promise<Responses.UsersGetNearbyResponse> {
        return super.call("users.getNearby", params)
    }
    /**
     * Checks a user's phone number for correctness.
     *
     * @param {{
     *   phone: (string),
     *   client_id: (number|undefined),
     *   client_secret: (string),
     *   auth_by_phone: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async authCheckPhone(params: MethodsProps.AuthCheckPhoneParams): Promise<Responses.OkResponse> {
        return super.call("auth.checkPhone", params)
    }
    /**
     * Registers a new user by phone number.
     *
     * @param {{
     *   first_name: (string),
     *   last_name: (string),
     *   birthday: (string),
     *   client_id: (number),
     *   client_secret: (string),
     *   phone: (string),
     *   password: (string|undefined),
     *   test_mode: (boolean|undefined),
     *   voice: (boolean|undefined),
     *   sex: (number|undefined),
     *   sid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AuthSignupResponse>}
     */
    public async authSignup(params: MethodsProps.AuthSignupParams): Promise<Responses.AuthSignupResponse> {
        return super.call("auth.signup", params)
    }
    /**
     * Completes a user's registration (begun with the [vk.com/dev/auth.signup|auth.signup] method) using an authorization code.
     *
     * @param {{
     *   client_id: (number),
     *   client_secret: (string),
     *   phone: (string),
     *   code: (string),
     *   password: (string|undefined),
     *   test_mode: (boolean|undefined),
     *   intro: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AuthConfirmResponse>}
     */
    public async authConfirm(params: MethodsProps.AuthConfirmParams): Promise<Responses.AuthConfirmResponse> {
        return super.call("auth.confirm", params)
    }
    /**
     * Allows to restore account access using a code received via SMS. " This method is only available for apps with [vk.com/dev/auth_direct|Direct authorization] access. "
     *
     * @param {{
     *   phone: (string),
     *   last_name: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AuthRestoreResponse>}
     */
    public async authRestore(params: MethodsProps.AuthRestoreParams): Promise<Responses.AuthRestoreResponse> {
        return super.call("auth.restore", params)
    }
    /**
     * Returns a list of posts on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   domain: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   filter: (string|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallGetResponse>}
     */
    public async wallGet(params: MethodsProps.WallGetParams): Promise<Responses.WallGetResponse> {
        return super.call("wall.get", params)
    }
    /**
     * Allows to search posts on user or community walls.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   domain: (string|undefined),
     *   query: (string|undefined),
     *   owners_only: (boolean|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallSearchResponse>}
     */
    public async wallSearch(params: MethodsProps.WallSearchParams): Promise<Responses.WallSearchResponse> {
        return super.call("wall.search", params)
    }
    /**
     * Creates an empty photo album.
     *
     * @param {{
     *   title: (string),
     *   group_id: (number|undefined),
     *   description: (string|undefined),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   upload_by_admins_only: (boolean|undefined),
     *   comments_disabled: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosCreateAlbumResponse>}
     */
    public async photosCreateAlbum(params: MethodsProps.PhotosCreateAlbumParams): Promise<Responses.PhotosCreateAlbumResponse> {
        return super.call("photos.createAlbum", params)
    }
    /**
     * Edits information about a photo album.
     *
     * @param {{
     *   album_id: (number),
     *   title: (string|undefined),
     *   description: (string|undefined),
     *   owner_id: (number|undefined),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   upload_by_admins_only: (boolean|undefined),
     *   comments_disabled: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosEditAlbum(params: MethodsProps.PhotosEditAlbumParams): Promise<Responses.OkResponse> {
        return super.call("photos.editAlbum", params)
    }
    /**
     * Returns a list of a user's or community's photo albums.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_ids: (number[]|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   need_system: (boolean|undefined),
     *   need_covers: (boolean|undefined),
     *   photo_sizes: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetAlbumsResponse>}
     */
    public async photosGetAlbums(params: MethodsProps.PhotosGetAlbumsParams): Promise<Responses.PhotosGetAlbumsResponse> {
        return super.call("photos.getAlbums", params)
    }
    /**
     * Returns a list of a user's or community's photos.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_id: (string|undefined),
     *   photo_ids: (string[]|undefined),
     *   rev: (boolean|undefined),
     *   extended: (boolean|undefined),
     *   feed_type: (string|undefined),
     *   feed: (number|undefined),
     *   photo_sizes: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetResponse>}
     */
    public async photosGet(params: MethodsProps.PhotosGetParams): Promise<Responses.PhotosGetResponse> {
        return super.call("photos.get", params)
    }
    /**
     * Returns the number of photo albums belonging to a user or community.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetAlbumsCountResponse>}
     */
    public async photosGetAlbumsCount(params: MethodsProps.PhotosGetAlbumsCountParams): Promise<Responses.PhotosGetAlbumsCountResponse> {
        return super.call("photos.getAlbumsCount", params)
    }
    /**
     * Returns information about photos by their IDs.
     *
     * @param {{
     *   photos: (string[]),
     *   extended: (boolean|undefined),
     *   photo_sizes: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetByIdResponse>}
     */
    public async photosGetById(params: MethodsProps.PhotosGetByIdParams): Promise<Responses.PhotosGetByIdResponse> {
        return super.call("photos.getById", params)
    }
    /**
     * Returns the server address for photo upload.
     *
     * @param {{
     *   album_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetUploadServerResponse>}
     */
    public async photosGetUploadServer(params: MethodsProps.PhotosGetUploadServerParams): Promise<Responses.PhotosGetUploadServerResponse> {
        return super.call("photos.getUploadServer", params)
    }
    /**
     * Returns the server address for owner cover upload.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   crop_x: (number|undefined),
     *   crop_y: (number|undefined),
     *   crop_x2: (number|undefined),
     *   crop_y2: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async photosGetOwnerCoverPhotoUploadServer(params: MethodsProps.PhotosGetOwnerCoverPhotoUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("photos.getOwnerCoverPhotoUploadServer", params)
    }
    /**
     * Returns an upload server address for a profile or community photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async photosGetOwnerPhotoUploadServer(params: MethodsProps.PhotosGetOwnerPhotoUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("photos.getOwnerPhotoUploadServer", params)
    }
    /**
     * Returns an upload link for chat cover pictures.
     *
     * @param {{
     *   chat_id: (number),
     *   crop_x: (number|undefined),
     *   crop_y: (number|undefined),
     *   crop_width: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async photosGetChatUploadServer(params: MethodsProps.PhotosGetChatUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("photos.getChatUploadServer", params)
    }
    /**
     * Returns the server address for market photo upload.
     *
     * @param {{
     *   group_id: (number),
     *   main_photo: (boolean|undefined),
     *   crop_x: (number|undefined),
     *   crop_y: (number|undefined),
     *   crop_width: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async photosGetMarketUploadServer(params: MethodsProps.PhotosGetMarketUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("photos.getMarketUploadServer", params)
    }
    /**
     * Returns the server address for market album photo upload.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async photosGetMarketAlbumUploadServer(params: MethodsProps.PhotosGetMarketAlbumUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("photos.getMarketAlbumUploadServer", params)
    }
    /**
     * Saves market photos after successful uploading.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   photo: (string),
     *   server: (number),
     *   hash: (string),
     *   crop_data: (string|undefined),
     *   crop_hash: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveMarketPhotoResponse>}
     */
    public async photosSaveMarketPhoto(params: MethodsProps.PhotosSaveMarketPhotoParams): Promise<Responses.PhotosSaveMarketPhotoResponse> {
        return super.call("photos.saveMarketPhoto", params)
    }
    /**
     * Saves cover photo after successful uploading.
     *
     * @param {{
     *   photo: (string),
     *   hash: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveOwnerCoverPhotoResponse>}
     */
    public async photosSaveOwnerCoverPhoto(params: MethodsProps.PhotosSaveOwnerCoverPhotoParams): Promise<Responses.PhotosSaveOwnerCoverPhotoResponse> {
        return super.call("photos.saveOwnerCoverPhoto", params)
    }
    /**
     * Saves market album photos after successful uploading.
     *
     * @param {{
     *   group_id: (number),
     *   photo: (string),
     *   server: (number),
     *   hash: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveMarketAlbumPhotoResponse>}
     */
    public async photosSaveMarketAlbumPhoto(params: MethodsProps.PhotosSaveMarketAlbumPhotoParams): Promise<Responses.PhotosSaveMarketAlbumPhotoResponse> {
        return super.call("photos.saveMarketAlbumPhoto", params)
    }
    /**
     * Saves a profile or community photo. Upload URL can be got with the [vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer] method.
     *
     * @param {{
     *   server: (string|undefined),
     *   hash: (string|undefined),
     *   photo: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveOwnerPhotoResponse>}
     */
    public async photosSaveOwnerPhoto(params: MethodsProps.PhotosSaveOwnerPhotoParams): Promise<Responses.PhotosSaveOwnerPhotoResponse> {
        return super.call("photos.saveOwnerPhoto", params)
    }
    /**
     * Saves a photo to a user's or community's wall after being uploaded.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   group_id: (number|undefined),
     *   photo: (string),
     *   server: (number|undefined),
     *   hash: (string|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   caption: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveWallPhotoResponse>}
     */
    public async photosSaveWallPhoto(params: MethodsProps.PhotosSaveWallPhotoParams): Promise<Responses.PhotosSaveWallPhotoResponse> {
        return super.call("photos.saveWallPhoto", params)
    }
    /**
     * Returns the server address for photo upload onto a user's wall.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetWallUploadServerResponse>}
     */
    public async photosGetWallUploadServer(params: MethodsProps.PhotosGetWallUploadServerParams): Promise<Responses.PhotosGetWallUploadServerResponse> {
        return super.call("photos.getWallUploadServer", params)
    }
    /**
     * Returns the server address for photo upload in a private message for a user.
     *
     * @param {{
     *   peer_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetMessagesUploadServerResponse>}
     */
    public async photosGetMessagesUploadServer(params: MethodsProps.PhotosGetMessagesUploadServerParams): Promise<Responses.PhotosGetMessagesUploadServerResponse> {
        return super.call("photos.getMessagesUploadServer", params)
    }
    /**
     * Saves a photo after being successfully uploaded. URL obtained with [vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer] method.
     *
     * @param {{
     *   photo: (string),
     *   server: (number|undefined),
     *   hash: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveMessagesPhotoResponse>}
     */
    public async photosSaveMessagesPhoto(params: MethodsProps.PhotosSaveMessagesPhotoParams): Promise<Responses.PhotosSaveMessagesPhotoResponse> {
        return super.call("photos.saveMessagesPhoto", params)
    }
    /**
     * Reports (submits a complaint about) a photo.
     *
     * @param {{
     *   owner_id: (number),
     *   photo_id: (number),
     *   reason: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosReport(params: MethodsProps.PhotosReportParams): Promise<Responses.OkResponse> {
        return super.call("photos.report", params)
    }
    /**
     * Reports (submits a complaint about) a comment on a photo.
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   reason: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosReportComment(params: MethodsProps.PhotosReportCommentParams): Promise<Responses.OkResponse> {
        return super.call("photos.reportComment", params)
    }
    /**
     * Returns a list of photos.
     *
     * @param {{
     *   q: (string|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   sort: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   radius: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSearchResponse>}
     */
    public async photosSearch(params: MethodsProps.PhotosSearchParams): Promise<Responses.PhotosSearchResponse> {
        return super.call("photos.search", params)
    }
    /**
     * Returns a list of user IDs or detailed information about a user's friends.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   order: (string|undefined),
     *   list_id: (number|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetResponse>}
     */
    public async friendsGet(params: MethodsProps.FriendsGetParams): Promise<Responses.FriendsGetResponse> {
        return super.call("friends.get", params)
    }
    /**
     * Returns a list of user IDs of a user's friends who are online.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   list_id: (number|undefined),
     *   online_mobile: (boolean|undefined),
     *   order: (string|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetOnlineResponse>}
     */
    public async friendsGetOnline(params: MethodsProps.FriendsGetOnlineParams): Promise<Responses.FriendsGetOnlineResponse> {
        return super.call("friends.getOnline", params)
    }
    /**
     * Returns a list of user IDs of the mutual friends of two users.
     *
     * @param {{
     *   source_uid: (number|undefined),
     *   target_uid: (number|undefined),
     *   target_uids: (number[]|undefined),
     *   order: (string|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetMutualResponse>}
     */
    public async friendsGetMutual(params: MethodsProps.FriendsGetMutualParams): Promise<Responses.FriendsGetMutualResponse> {
        return super.call("friends.getMutual", params)
    }
    /**
     * Returns a list of user IDs of the current user's recently added friends.
     *
     * @param {{
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetRecentResponse>}
     */
    public async friendsGetRecent(params: MethodsProps.FriendsGetRecentParams): Promise<Responses.FriendsGetRecentResponse> {
        return super.call("friends.getRecent", params)
    }
    /**
     * Returns information about the current user's incoming and outgoing friend requests.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   need_mutual: (boolean|undefined),
     *   out: (boolean|undefined),
     *   sort: (number|undefined),
     *   suggested: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetRequestsResponse>}
     */
    public async friendsGetRequests(params: MethodsProps.FriendsGetRequestsParams): Promise<Responses.FriendsGetRequestsResponse> {
        return super.call("friends.getRequests", params)
    }
    /**
     * Approves or creates a friend request.
     *
     * @param {{
     *   user_id: (number),
     *   text: (string|undefined),
     *   follow: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsAddResponse>}
     */
    public async friendsAdd(params: MethodsProps.FriendsAddParams): Promise<Responses.FriendsAddResponse> {
        return super.call("friends.add", params)
    }
    /**
     * Edits the friend lists of the selected user.
     *
     * @param {{
     *   user_id: (number),
     *   list_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async friendsEdit(params: MethodsProps.FriendsEditParams): Promise<Responses.OkResponse> {
        return super.call("friends.edit", params)
    }
    /**
     * Declines a friend request or deletes a user from the current user's friend list.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsDeleteResponse>}
     */
    public async friendsDelete(params: MethodsProps.FriendsDeleteParams): Promise<Responses.FriendsDeleteResponse> {
        return super.call("friends.delete", params)
    }
    /**
     * Returns a list of the user's friend lists.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   return_system: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetListsResponse>}
     */
    public async friendsGetLists(params: MethodsProps.FriendsGetListsParams): Promise<Responses.FriendsGetListsResponse> {
        return super.call("friends.getLists", params)
    }
    /**
     * Creates a new friend list for the current user.
     *
     * @param {{
     *   name: (string),
     *   user_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsAddListResponse>}
     */
    public async friendsAddList(params: MethodsProps.FriendsAddListParams): Promise<Responses.FriendsAddListResponse> {
        return super.call("friends.addList", params)
    }
    /**
     * Edits a friend list of the current user.
     *
     * @param {{
     *   name: (string|undefined),
     *   list_id: (number),
     *   user_ids: (number[]|undefined),
     *   add_user_ids: (number[]|undefined),
     *   delete_user_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async friendsEditList(params: MethodsProps.FriendsEditListParams): Promise<Responses.OkResponse> {
        return super.call("friends.editList", params)
    }
    /**
     * Deletes a friend list of the current user.
     *
     * @param {{
     *   list_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async friendsDeleteList(params: MethodsProps.FriendsDeleteListParams): Promise<Responses.OkResponse> {
        return super.call("friends.deleteList", params)
    }
    /**
     * Returns a list of IDs of the current user's friends who installed the application.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetAppUsersResponse>}
     */
    public async friendsGetAppUsers(params: MethodsProps.FriendsGetAppUsersParams): Promise<Responses.FriendsGetAppUsersResponse> {
        return super.call("friends.getAppUsers", params)
    }
    /**
     * Returns a list of the current user's friends whose phone numbers, validated or specified in a profile, are in a given list.
     *
     * @param {{
     *   phones: (string[]|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetByPhonesResponse>}
     */
    public async friendsGetByPhones(params: MethodsProps.FriendsGetByPhonesParams): Promise<Responses.FriendsGetByPhonesResponse> {
        return super.call("friends.getByPhones", params)
    }
    /**
     * Marks all incoming friend requests as viewed.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async friendsDeleteAllRequests(params: MethodsProps.FriendsDeleteAllRequestsParams): Promise<Responses.OkResponse> {
        return super.call("friends.deleteAllRequests", params)
    }
    /**
     * Returns a list of profiles of users whom the current user may know.
     *
     * @param {{
     *   filter: (string[]|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetSuggestionsResponse>}
     */
    public async friendsGetSuggestions(params: MethodsProps.FriendsGetSuggestionsParams): Promise<Responses.FriendsGetSuggestionsResponse> {
        return super.call("friends.getSuggestions", params)
    }
    /**
     * Checks the current user's friendship status with other specified users.
     *
     * @param {{
     *   user_ids: (number[]),
     *   need_sign: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsAreFriendsResponse>}
     */
    public async friendsAreFriends(params: MethodsProps.FriendsAreFriendsParams): Promise<Responses.FriendsAreFriendsResponse> {
        return super.call("friends.areFriends", params)
    }
    /**
     * Returns a list of friends who can be called by the current user.
     *
     * @param {{
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsGetAvailableForCallResponse>}
     */
    public async friendsGetAvailableForCall(params: MethodsProps.FriendsGetAvailableForCallParams): Promise<Responses.FriendsGetAvailableForCallResponse> {
        return super.call("friends.getAvailableForCall", params)
    }
    /**
     * Returns a list of friends matching the search criteria.
     *
     * @param {{
     *   user_id: (number),
     *   q: (string|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FriendsSearchResponse>}
     */
    public async friendsSearch(params: MethodsProps.FriendsSearchParams): Promise<Responses.FriendsSearchResponse> {
        return super.call("friends.search", params)
    }
    /**
     * Gets a list of comments for the page added through the [vk.com/dev/Comments|Comments widget].
     *
     * @param {{
     *   widget_api_id: (number|undefined),
     *   url: (string|undefined),
     *   page_id: (string|undefined),
     *   order: (string|undefined),
     *   fields: (string[]|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WidgetsGetCommentsResponse>}
     */
    public async widgetsGetComments(params: MethodsProps.WidgetsGetCommentsParams): Promise<Responses.WidgetsGetCommentsResponse> {
        return super.call("widgets.getComments", params)
    }
    /**
     * Gets a list of application/site pages where the [vk.com/dev/Comments|Comments widget] or [vk.com/dev/Like|Like widget] is installed.
     *
     * @param {{
     *   widget_api_id: (number|undefined),
     *   order: (string|undefined),
     *   period: (string|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WidgetsGetPagesResponse>}
     */
    public async widgetsGetPages(params: MethodsProps.WidgetsGetPagesParams): Promise<Responses.WidgetsGetPagesResponse> {
        return super.call("widgets.getPages", params)
    }
    /**
     * Allows to hide stories from chosen sources from current user's feed.
     *
     * @param {{
     *   owners_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storiesBanOwner(params: MethodsProps.StoriesBanOwnerParams): Promise<Responses.OkResponse> {
        return super.call("stories.banOwner", params)
    }
    /**
     * Allows to delete story.
     *
     * @param {{
     *   owner_id: (number),
     *   story_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storiesDelete(params: MethodsProps.StoriesDeleteParams): Promise<Responses.OkResponse> {
        return super.call("stories.delete", params)
    }
    /**
     * Returns stories available for current user.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetResponse>}
     */
    public async storiesGet(params: MethodsProps.StoriesGetParams): Promise<Responses.StoriesGetResponse> {
        return super.call("stories.get", params)
    }
    /**
     * Returns list of sources hidden from current user's feed.
     *
     * @param {{
     *   fields: (string[]|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetBannedResponse>}
     */
    public async storiesGetBanned(params: MethodsProps.StoriesGetBannedParams): Promise<Responses.StoriesGetBannedResponse> {
        return super.call("stories.getBanned", params)
    }
    /**
     * Returns story by its ID.
     *
     * @param {{
     *   stories: (string[]|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetByIdResponse>}
     */
    public async storiesGetById(params: MethodsProps.StoriesGetByIdParams): Promise<Responses.StoriesGetByIdResponse> {
        return super.call("stories.getById", params)
    }
    /**
     * Returns URL for uploading a story with photo.
     *
     * @param {{
     *   add_to_news: (boolean|undefined),
     *   user_ids: (number[]|undefined),
     *   reply_to_story: (string|undefined),
     *   link_text: (string|undefined),
     *   link_url: (string|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetPhotoUploadServerResponse>}
     */
    public async storiesGetPhotoUploadServer(params: MethodsProps.StoriesGetPhotoUploadServerParams): Promise<Responses.StoriesGetPhotoUploadServerResponse> {
        return super.call("stories.getPhotoUploadServer", params)
    }
    /**
     * Returns replies to the story.
     *
     * @param {{
     *   owner_id: (number),
     *   story_id: (number),
     *   access_key: (string|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetRepliesResponse>}
     */
    public async storiesGetReplies(params: MethodsProps.StoriesGetRepliesParams): Promise<Responses.StoriesGetRepliesResponse> {
        return super.call("stories.getReplies", params)
    }
    /**
     * Returns stories available for current user.
     *
     * @param {{
     *   owner_id: (number),
     *   story_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetStatsResponse>}
     */
    public async storiesGetStats(params: MethodsProps.StoriesGetStatsParams): Promise<Responses.StoriesGetStatsResponse> {
        return super.call("stories.getStats", params)
    }
    /**
     * Allows to receive URL for uploading story with video.
     *
     * @param {{
     *   add_to_news: (boolean|undefined),
     *   user_ids: (number[]|undefined),
     *   reply_to_story: (string|undefined),
     *   link_text: (string|undefined),
     *   link_url: (string|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetVideoUploadServerResponse>}
     */
    public async storiesGetVideoUploadServer(params: MethodsProps.StoriesGetVideoUploadServerParams): Promise<Responses.StoriesGetVideoUploadServerResponse> {
        return super.call("stories.getVideoUploadServer", params)
    }
    /**
     * Returns a list of story viewers.
     *
     * @param {{
     *   owner_id: (number),
     *   story_id: (number),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StoriesGetViewersResponse>}
     */
    public async storiesGetViewers(params: MethodsProps.StoriesGetViewersParams): Promise<Responses.StoriesGetViewersResponse> {
        return super.call("stories.getViewers", params)
    }
    /**
     * Hides all replies in the last 24 hours from the user to current user's stories.
     *
     * @param {{
     *   owner_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storiesHideAllReplies(params: MethodsProps.StoriesHideAllRepliesParams): Promise<Responses.OkResponse> {
        return super.call("stories.hideAllReplies", params)
    }
    /**
     * Hides the reply to the current user's story.
     *
     * @param {{
     *   owner_id: (number),
     *   story_id: (number),
     *   access_key: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storiesHideReply(params: MethodsProps.StoriesHideReplyParams): Promise<Responses.OkResponse> {
        return super.call("stories.hideReply", params)
    }
    /**
     * Allows to show stories from hidden sources in current user's feed.
     *
     * @param {{
     *   owners_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storiesUnbanOwner(params: MethodsProps.StoriesUnbanOwnerParams): Promise<Responses.OkResponse> {
        return super.call("stories.unbanOwner", params)
    }
    /**
     * Returns payment balance of the application in hundredth of a vote.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureGetAppBalanceResponse>}
     */
    public async secureGetAppBalance(params: MethodsProps.SecureGetAppBalanceParams): Promise<Responses.SecureGetAppBalanceResponse> {
        return super.call("secure.getAppBalance", params)
    }
    /**
     * Shows history of votes transaction between users and the application.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureGetTransactionsHistoryResponse>}
     */
    public async secureGetTransactionsHistory(params: MethodsProps.SecureGetTransactionsHistoryParams): Promise<Responses.SecureGetTransactionsHistoryResponse> {
        return super.call("secure.getTransactionsHistory", params)
    }
    /**
     * Shows a list of SMS notifications sent by the application using [vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification] method.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   date_from: (number|undefined),
     *   date_to: (number|undefined),
     *   limit: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureGetSMSHistoryResponse>}
     */
    public async secureGetSMSHistory(params: MethodsProps.SecureGetSMSHistoryParams): Promise<Responses.SecureGetSMSHistoryResponse> {
        return super.call("secure.getSMSHistory", params)
    }
    /**
     * Sends 'SMS' notification to a user's mobile device.
     *
     * @param {{
     *   user_id: (number),
     *   message: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async secureSendSMSNotification(params: MethodsProps.SecureSendSMSNotificationParams): Promise<Responses.OkResponse> {
        return super.call("secure.sendSMSNotification", params)
    }
    /**
     * Sends notification to the user.
     *
     * @param {{
     *   user_ids: (number[]|undefined),
     *   user_id: (number|undefined),
     *   message: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureSendNotificationResponse>}
     */
    public async secureSendNotification(params: MethodsProps.SecureSendNotificationParams): Promise<Responses.SecureSendNotificationResponse> {
        return super.call("secure.sendNotification", params)
    }
    /**
     * Sets a counter which is shown to the user in bold in the left menu.
     *
     * @param {{
     *   counters: (string[]|undefined),
     *   user_id: (number|undefined),
     *   counter: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async secureSetCounter(params: MethodsProps.SecureSetCounterParams): Promise<Responses.OkResponse> {
        return super.call("secure.setCounter", params)
    }
    /**
     * Sets user game level in the application which can be seen by his/her friends.
     *
     * @param {{
     *   levels: (string[]|undefined),
     *   user_id: (number|undefined),
     *   level: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async secureSetUserLevel(params: MethodsProps.SecureSetUserLevelParams): Promise<Responses.OkResponse> {
        return super.call("secure.setUserLevel", params)
    }
    /**
     * Returns one of the previously set game levels of one or more users in the application.
     *
     * @param {{
     *   user_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureGetUserLevelResponse>}
     */
    public async secureGetUserLevel(params: MethodsProps.SecureGetUserLevelParams): Promise<Responses.SecureGetUserLevelResponse> {
        return super.call("secure.getUserLevel", params)
    }
    /**
     * Allows to receive data for the connection to Streaming API.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StreamingGetServerUrlResponse>}
     */
    public async streamingGetServerUrl(params: MethodsProps.StreamingGetServerUrlParams): Promise<Responses.StreamingGetServerUrlResponse> {
        return super.call("streaming.getServerUrl", params)
    }
    /**
     * Returns a value of variable with the name set by key parameter.
     *
     * @param {{
     *   key: (string|undefined),
     *   keys: (string[]|undefined),
     *   user_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StorageGetResponse>}
     */
    public async storageGet(params: MethodsProps.StorageGetParams): Promise<Responses.StorageGetResponse> {
        return super.call("storage.get", params)
    }
    /**
     * Saves a value of variable with the name set by 'key' parameter.
     *
     * @param {{
     *   key: (string),
     *   value: (string|undefined),
     *   user_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async storageSet(params: MethodsProps.StorageSetParams): Promise<Responses.OkResponse> {
        return super.call("storage.set", params)
    }
    /**
     * Returns the names of all variables.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StorageGetKeysResponse>}
     */
    public async storageGetKeys(params: MethodsProps.StorageGetKeysParams): Promise<Responses.StorageGetKeysResponse> {
        return super.call("storage.getKeys", params)
    }
    /**
     * Returns a list of orders.
     *
     * @param {{
     *   count: (number|undefined),
     *   test_mode: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OrdersGetResponse>}
     */
    public async ordersGet(params: MethodsProps.OrdersGetParams): Promise<Responses.OrdersGetResponse> {
        return super.call("orders.get", params)
    }
    /**
     * Returns information about orders by their IDs.
     *
     * @param {{
     *   order_id: (number|undefined),
     *   order_ids: (number[]|undefined),
     *   test_mode: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OrdersGetByIdResponse>}
     */
    public async ordersGetById(params: MethodsProps.OrdersGetByIdParams): Promise<Responses.OrdersGetByIdResponse> {
        return super.call("orders.getById", params)
    }
    /**
     * Changes order status.
     *
     * @param {{
     *   order_id: (number),
     *   action: (string),
     *   app_order_id: (number|undefined),
     *   test_mode: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OrdersChangeStateResponse>}
     */
    public async ordersChangeState(params: MethodsProps.OrdersChangeStateParams): Promise<Responses.OrdersChangeStateResponse> {
        return super.call("orders.changeState", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   user_id: (number),
     *   votes: (string[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OrdersGetAmountResponse>}
     */
    public async ordersGetAmount(params: MethodsProps.OrdersGetAmountParams): Promise<Responses.OrdersGetAmountResponse> {
        return super.call("orders.getAmount", params)
    }
    /**
     * Saves photos after successful uploading.
     *
     * @param {{
     *   album_id: (number|undefined),
     *   group_id: (number|undefined),
     *   server: (number|undefined),
     *   photos_list: (string|undefined),
     *   hash: (string|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   caption: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosSaveResponse>}
     */
    public async photosSave(params: MethodsProps.PhotosSaveParams): Promise<Responses.PhotosSaveResponse> {
        return super.call("photos.save", params)
    }
    /**
     * Allows to copy a photo to the "Saved photos" album
     *
     * @param {{
     *   owner_id: (number),
     *   photo_id: (number),
     *   access_key: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosCopyResponse>}
     */
    public async photosCopy(params: MethodsProps.PhotosCopyParams): Promise<Responses.PhotosCopyResponse> {
        return super.call("photos.copy", params)
    }
    /**
     * Edits the caption of a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   caption: (string|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   place_str: (string|undefined),
     *   foursquare_id: (string|undefined),
     *   delete_place: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosEdit(params: MethodsProps.PhotosEditParams): Promise<Responses.OkResponse> {
        return super.call("photos.edit", params)
    }
    /**
     * Moves a photo from one album to another.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   target_album_id: (number),
     *   photo_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosMove(params: MethodsProps.PhotosMoveParams): Promise<Responses.OkResponse> {
        return super.call("photos.move", params)
    }
    /**
     * Makes a photo into an album cover.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   album_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosMakeCover(params: MethodsProps.PhotosMakeCoverParams): Promise<Responses.OkResponse> {
        return super.call("photos.makeCover", params)
    }
    /**
     * Reorders the album in the list of user albums.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_id: (number),
     *   before: (number|undefined),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosReorderAlbums(params: MethodsProps.PhotosReorderAlbumsParams): Promise<Responses.OkResponse> {
        return super.call("photos.reorderAlbums", params)
    }
    /**
     * Reorders the photo in the list of photos of the user album.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   before: (number|undefined),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosReorderPhotos(params: MethodsProps.PhotosReorderPhotosParams): Promise<Responses.OkResponse> {
        return super.call("photos.reorderPhotos", params)
    }
    /**
     * Returns a list of photos belonging to a user or community, in reverse chronological order.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   photo_sizes: (boolean|undefined),
     *   no_service_albums: (boolean|undefined),
     *   need_hidden: (boolean|undefined),
     *   skip_hidden: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetAllResponse>}
     */
    public async photosGetAll(params: MethodsProps.PhotosGetAllParams): Promise<Responses.PhotosGetAllResponse> {
        return super.call("photos.getAll", params)
    }
    /**
     * Returns a list of photos in which a user is tagged.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   sort: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetUserPhotosResponse>}
     */
    public async photosGetUserPhotos(params: MethodsProps.PhotosGetUserPhotosParams): Promise<Responses.PhotosGetUserPhotosResponse> {
        return super.call("photos.getUserPhotos", params)
    }
    /**
     * Deletes a photo album belonging to the current user.
     *
     * @param {{
     *   album_id: (number),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosDeleteAlbum(params: MethodsProps.PhotosDeleteAlbumParams): Promise<Responses.OkResponse> {
        return super.call("photos.deleteAlbum", params)
    }
    /**
     * Deletes a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosDelete(params: MethodsProps.PhotosDeleteParams): Promise<Responses.OkResponse> {
        return super.call("photos.delete", params)
    }
    /**
     * Restores a deleted photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosRestore(params: MethodsProps.PhotosRestoreParams): Promise<Responses.OkResponse> {
        return super.call("photos.restore", params)
    }
    /**
     * Confirms a tag on a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (string),
     *   tag_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosConfirmTag(params: MethodsProps.PhotosConfirmTagParams): Promise<Responses.OkResponse> {
        return super.call("photos.confirmTag", params)
    }
    /**
     * Returns a list of comments on a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   need_likes: (boolean|undefined),
     *   start_comment_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   sort: (string|undefined),
     *   access_key: (string|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetCommentsResponse>}
     */
    public async photosGetComments(params: MethodsProps.PhotosGetCommentsParams): Promise<Responses.PhotosGetCommentsResponse> {
        return super.call("photos.getComments", params)
    }
    /**
     * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_id: (number|undefined),
     *   need_likes: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetAllCommentsResponse>}
     */
    public async photosGetAllComments(params: MethodsProps.PhotosGetAllCommentsParams): Promise<Responses.PhotosGetAllCommentsResponse> {
        return super.call("photos.getAllComments", params)
    }
    /**
     * Adds a new comment on the photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   from_group: (boolean|undefined),
     *   reply_to_comment: (number|undefined),
     *   sticker_id: (number|undefined),
     *   access_key: (string|undefined),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosCreateCommentResponse>}
     */
    public async photosCreateComment(params: MethodsProps.PhotosCreateCommentParams): Promise<Responses.PhotosCreateCommentResponse> {
        return super.call("photos.createComment", params)
    }
    /**
     * Deletes a comment on the photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosDeleteCommentResponse>}
     */
    public async photosDeleteComment(params: MethodsProps.PhotosDeleteCommentParams): Promise<Responses.PhotosDeleteCommentResponse> {
        return super.call("photos.deleteComment", params)
    }
    /**
     * Restores a deleted comment on a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosRestoreCommentResponse>}
     */
    public async photosRestoreComment(params: MethodsProps.PhotosRestoreCommentParams): Promise<Responses.PhotosRestoreCommentResponse> {
        return super.call("photos.restoreComment", params)
    }
    /**
     * Edits a comment on a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosEditComment(params: MethodsProps.PhotosEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("photos.editComment", params)
    }
    /**
     * Returns a list of tags on a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   access_key: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetTagsResponse>}
     */
    public async photosGetTags(params: MethodsProps.PhotosGetTagsParams): Promise<Responses.PhotosGetTagsResponse> {
        return super.call("photos.getTags", params)
    }
    /**
     * Adds a tag on the photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   user_id: (number),
     *   x: (number|undefined),
     *   y: (number|undefined),
     *   x2: (number|undefined),
     *   y2: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosPutTagResponse>}
     */
    public async photosPutTag(params: MethodsProps.PhotosPutTagParams): Promise<Responses.PhotosPutTagResponse> {
        return super.call("photos.putTag", params)
    }
    /**
     * Removes a tag from a photo.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   photo_id: (number),
     *   tag_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async photosRemoveTag(params: MethodsProps.PhotosRemoveTagParams): Promise<Responses.OkResponse> {
        return super.call("photos.removeTag", params)
    }
    /**
     * Returns a list of photos with tags that have not been viewed.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PhotosGetNewTagsResponse>}
     */
    public async photosGetNewTags(params: MethodsProps.PhotosGetNewTagsParams): Promise<Responses.PhotosGetNewTagsResponse> {
        return super.call("photos.getNewTags", params)
    }
    /**
     * Returns a list of posts from user or community walls by their IDs.
     *
     * @param {{
     *   posts: (string[]),
     *   extended: (boolean|undefined),
     *   copy_history_depth: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallGetByIdResponse>}
     */
    public async wallGetById(params: MethodsProps.WallGetByIdParams): Promise<Responses.WallGetByIdResponse> {
        return super.call("wall.getById", params)
    }
    /**
     * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   friends_only: (boolean|undefined),
     *   from_group: (boolean|undefined),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   services: (string|undefined),
     *   signed: (boolean|undefined),
     *   publish_date: (number|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   place_id: (number|undefined),
     *   post_id: (number|undefined),
     *   guid: (string|undefined),
     *   mark_as_ads: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallPostResponse>}
     */
    public async wallPost(params: MethodsProps.WallPostParams): Promise<Responses.WallPostResponse> {
        return super.call("wall.post", params)
    }
    /**
     * Allows to create hidden post which will not be shown on the community's wall and can be used for creating an ad with type "Community post".
     *
     * @param {{
     *   owner_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   signed: (boolean|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   place_id: (number|undefined),
     *   post_id: (number|undefined),
     *   guid: (string|undefined),
     *   link_button: (string|undefined),
     *   link_title: (string|undefined),
     *   link_image: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallPostAdsStealthResponse>}
     */
    public async wallPostAdsStealth(params: MethodsProps.WallPostAdsStealthParams): Promise<Responses.WallPostAdsStealthResponse> {
        return super.call("wall.postAdsStealth", params)
    }
    /**
     * Reposts (copies) an object to a user wall or community wall.
     *
     * @param {{
     *   object: (string),
     *   message: (string|undefined),
     *   group_id: (number|undefined),
     *   mark_as_ads: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallRepostResponse>}
     */
    public async wallRepost(params: MethodsProps.WallRepostParams): Promise<Responses.WallRepostResponse> {
        return super.call("wall.repost", params)
    }
    /**
     * Returns information about reposts of a post on user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallGetRepostsResponse>}
     */
    public async wallGetReposts(params: MethodsProps.WallGetRepostsParams): Promise<Responses.WallGetRepostsResponse> {
        return super.call("wall.getReposts", params)
    }
    /**
     * Edits a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   friends_only: (boolean|undefined),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   services: (string|undefined),
     *   signed: (boolean|undefined),
     *   publish_date: (number|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   place_id: (number|undefined),
     *   mark_as_ads: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallEdit(params: MethodsProps.WallEditParams): Promise<Responses.OkResponse> {
        return super.call("wall.edit", params)
    }
    /**
     * Allows to edit hidden post.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   signed: (boolean|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   place_id: (number|undefined),
     *   link_button: (string|undefined),
     *   link_title: (string|undefined),
     *   link_image: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallEditAdsStealth(params: MethodsProps.WallEditAdsStealthParams): Promise<Responses.OkResponse> {
        return super.call("wall.editAdsStealth", params)
    }
    /**
     * Deletes a post from a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallDelete(params: MethodsProps.WallDeleteParams): Promise<Responses.OkResponse> {
        return super.call("wall.delete", params)
    }
    /**
     * Restores a post deleted from a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallRestore(params: MethodsProps.WallRestoreParams): Promise<Responses.OkResponse> {
        return super.call("wall.restore", params)
    }
    /**
     * Pins the post on wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallPin(params: MethodsProps.WallPinParams): Promise<Responses.OkResponse> {
        return super.call("wall.pin", params)
    }
    /**
     * Unpins the post on wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallUnpin(params: MethodsProps.WallUnpinParams): Promise<Responses.OkResponse> {
        return super.call("wall.unpin", params)
    }
    /**
     * Returns a list of comments on a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   need_likes: (boolean|undefined),
     *   start_comment_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   sort: (string|undefined),
     *   preview_length: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallGetCommentsResponse>}
     */
    public async wallGetComments(params: MethodsProps.WallGetCommentsParams): Promise<Responses.WallGetCommentsResponse> {
        return super.call("wall.getComments", params)
    }
    /**
     * Adds a comment to a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   post_id: (number),
     *   from_group: (number|undefined),
     *   message: (string|undefined),
     *   reply_to_comment: (number|undefined),
     *   attachments: (string[]|undefined),
     *   sticker_id: (number|undefined),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.WallCreateCommentResponse>}
     */
    public async wallCreateComment(params: MethodsProps.WallCreateCommentParams): Promise<Responses.WallCreateCommentResponse> {
        return super.call("wall.createComment", params)
    }
    /**
     * Edits a comment on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallEditComment(params: MethodsProps.WallEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("wall.editComment", params)
    }
    /**
     * Deletes a comment on a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallDeleteComment(params: MethodsProps.WallDeleteCommentParams): Promise<Responses.OkResponse> {
        return super.call("wall.deleteComment", params)
    }
    /**
     * Restores a comment deleted from a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallRestoreComment(params: MethodsProps.WallRestoreCommentParams): Promise<Responses.OkResponse> {
        return super.call("wall.restoreComment", params)
    }
    /**
     * Reports (submits a complaint about) a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number),
     *   post_id: (number),
     *   reason: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallReportPost(params: MethodsProps.WallReportPostParams): Promise<Responses.OkResponse> {
        return super.call("wall.reportPost", params)
    }
    /**
     * Reports (submits a complaint about) a comment on a post on a user wall or community wall.
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   reason: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async wallReportComment(params: MethodsProps.WallReportCommentParams): Promise<Responses.OkResponse> {
        return super.call("wall.reportComment", params)
    }
    /**
     * Returns data required to show the status of a user or community.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StatusGetResponse>}
     */
    public async statusGet(params: MethodsProps.StatusGetParams): Promise<Responses.StatusGetResponse> {
        return super.call("status.get", params)
    }
    /**
     * Sets a new status for the current user.
     *
     * @param {{
     *   text: (string|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async statusSet(params: MethodsProps.StatusSetParams): Promise<Responses.OkResponse> {
        return super.call("status.set", params)
    }
    /**
     * Completes the lead started by user.
     *
     * @param {{
     *   vk_sid: (string),
     *   secret: (string),
     *   comment: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsCompleteResponse>}
     */
    public async leadsComplete(params: MethodsProps.LeadsCompleteParams): Promise<Responses.LeadsCompleteResponse> {
        return super.call("leads.complete", params)
    }
    /**
     * Creates new session for the user passing the offer.
     *
     * @param {{
     *   lead_id: (number),
     *   secret: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsStartResponse>}
     */
    public async leadsStart(params: MethodsProps.LeadsStartParams): Promise<Responses.LeadsStartResponse> {
        return super.call("leads.start", params)
    }
    /**
     * Returns lead stats data.
     *
     * @param {{
     *   lead_id: (number),
     *   secret: (string|undefined),
     *   date_start: (string|undefined),
     *   date_end: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsGetStatsResponse>}
     */
    public async leadsGetStats(params: MethodsProps.LeadsGetStatsParams): Promise<Responses.LeadsGetStatsResponse> {
        return super.call("leads.getStats", params)
    }
    /**
     * Returns a list of last user actions for the offer.
     *
     * @param {{
     *   offer_id: (number),
     *   secret: (string),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   status: (number|undefined),
     *   reverse: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsGetUsersResponse>}
     */
    public async leadsGetUsers(params: MethodsProps.LeadsGetUsersParams): Promise<Responses.LeadsGetUsersResponse> {
        return super.call("leads.getUsers", params)
    }
    /**
     * Checks if the user can start the lead.
     *
     * @param {{
     *   lead_id: (number),
     *   test_result: (number|undefined),
     *   age: (number|undefined),
     *   country: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsCheckUserResponse>}
     */
    public async leadsCheckUser(params: MethodsProps.LeadsCheckUserParams): Promise<Responses.LeadsCheckUserResponse> {
        return super.call("leads.checkUser", params)
    }
    /**
     * Counts the metric event.
     *
     * @param {{
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LeadsMetricHitResponse>}
     */
    public async leadsMetricHit(params: MethodsProps.LeadsMetricHitParams): Promise<Responses.LeadsMetricHitResponse> {
        return super.call("leads.metricHit", params)
    }
    /**
     * Returns information about a wiki page.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   page_id: (number|undefined),
     *   global: (boolean|undefined),
     *   site_preview: (boolean|undefined),
     *   title: (string|undefined),
     *   need_source: (boolean|undefined),
     *   need_html: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesGetResponse>}
     */
    public async pagesGet(params: MethodsProps.PagesGetParams): Promise<Responses.PagesGetResponse> {
        return super.call("pages.get", params)
    }
    /**
     * Saves the text of a wiki page.
     *
     * @param {{
     *   text: (string|undefined),
     *   page_id: (number|undefined),
     *   group_id: (number|undefined),
     *   user_id: (number|undefined),
     *   title: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesSaveResponse>}
     */
    public async pagesSave(params: MethodsProps.PagesSaveParams): Promise<Responses.PagesSaveResponse> {
        return super.call("pages.save", params)
    }
    /**
     * Saves modified read and edit access settings for a wiki page.
     *
     * @param {{
     *   page_id: (number),
     *   group_id: (number|undefined),
     *   user_id: (number|undefined),
     *   view: (number|undefined),
     *   edit: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesSaveAccessResponse>}
     */
    public async pagesSaveAccess(params: MethodsProps.PagesSaveAccessParams): Promise<Responses.PagesSaveAccessResponse> {
        return super.call("pages.saveAccess", params)
    }
    /**
     * Returns a list of all previous versions of a wiki page.
     *
     * @param {{
     *   page_id: (number),
     *   group_id: (number|undefined),
     *   user_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesGetHistoryResponse>}
     */
    public async pagesGetHistory(params: MethodsProps.PagesGetHistoryParams): Promise<Responses.PagesGetHistoryResponse> {
        return super.call("pages.getHistory", params)
    }
    /**
     * Returns a list of wiki pages in a group.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesGetTitlesResponse>}
     */
    public async pagesGetTitles(params: MethodsProps.PagesGetTitlesParams): Promise<Responses.PagesGetTitlesResponse> {
        return super.call("pages.getTitles", params)
    }
    /**
     * Returns the text of one of the previous versions of a wiki page.
     *
     * @param {{
     *   version_id: (number),
     *   group_id: (number|undefined),
     *   user_id: (number|undefined),
     *   need_html: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesGetVersionResponse>}
     */
    public async pagesGetVersion(params: MethodsProps.PagesGetVersionParams): Promise<Responses.PagesGetVersionResponse> {
        return super.call("pages.getVersion", params)
    }
    /**
     * Returns HTML representation of the wiki markup.
     *
     * @param {{
     *   text: (string),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PagesParseWikiResponse>}
     */
    public async pagesParseWiki(params: MethodsProps.PagesParseWikiParams): Promise<Responses.PagesParseWikiResponse> {
        return super.call("pages.parseWiki", params)
    }
    /**
     * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
     *
     * @param {{
     *   url: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async pagesClearCache(params: MethodsProps.PagesClearCacheParams): Promise<Responses.OkResponse> {
        return super.call("pages.clearCache", params)
    }
    /**
     * Returns information specifying whether a user is a member of a community.
     *
     * @param {{
     *   group_id: (string),
     *   user_id: (number|undefined),
     *   user_ids: (number[]|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsIsMemberResponse>}
     */
    public async groupsIsMember(params: MethodsProps.GroupsIsMemberParams): Promise<Responses.GroupsIsMemberResponse> {
        return super.call("groups.isMember", params)
    }
    /**
     * Returns information about communities by their IDs.
     *
     * @param {{
     *   group_ids: (string[]|undefined),
     *   group_id: (string|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetByIdResponse>}
     */
    public async groupsGetById(params: MethodsProps.GroupsGetByIdParams): Promise<Responses.GroupsGetByIdResponse> {
        return super.call("groups.getById", params)
    }
    /**
     * Returns a list of the communities to which a user belongs.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   filter: (string[]|undefined),
     *   fields: (string[]|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetResponse>}
     */
    public async groupsGet(params: MethodsProps.GroupsGetParams): Promise<Responses.GroupsGetResponse> {
        return super.call("groups.get", params)
    }
    /**
     * Returns a list of community members.
     *
     * @param {{
     *   group_id: (string|undefined),
     *   sort: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   filter: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetMembersResponse>}
     */
    public async groupsGetMembers(params: MethodsProps.GroupsGetMembersParams): Promise<Responses.GroupsGetMembersResponse> {
        return super.call("groups.getMembers", params)
    }
    /**
     * With this method you can join the group or public page, and also confirm your participation in an event.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   not_sure: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsJoin(params: MethodsProps.GroupsJoinParams): Promise<Responses.OkResponse> {
        return super.call("groups.join", params)
    }
    /**
     * With this method you can leave a group, public page, or event.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsLeave(params: MethodsProps.GroupsLeaveParams): Promise<Responses.OkResponse> {
        return super.call("groups.leave", params)
    }
    /**
     * Returns a list of communities matching the search criteria.
     *
     * @param {{
     *   q: (string),
     *   type: (string|undefined),
     *   country_id: (number|undefined),
     *   city_id: (number|undefined),
     *   future: (boolean|undefined),
     *   market: (boolean|undefined),
     *   sort: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsSearchResponse>}
     */
    public async groupsSearch(params: MethodsProps.GroupsSearchParams): Promise<Responses.GroupsSearchResponse> {
        return super.call("groups.search", params)
    }
    /**
     * Returns communities list for a catalog category.
     *
     * @param {{
     *   category_id: (number|undefined),
     *   subcategory_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetCatalogResponse>}
     */
    public async groupsGetCatalog(params: MethodsProps.GroupsGetCatalogParams): Promise<Responses.GroupsGetCatalogResponse> {
        return super.call("groups.getCatalog", params)
    }
    /**
     * Returns categories list for communities catalog
     *
     * @param {{
     *   extended: (boolean|undefined),
     *   subcategories: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetCatalogInfoResponse>}
     */
    public async groupsGetCatalogInfo(params: MethodsProps.GroupsGetCatalogInfoParams): Promise<Responses.GroupsGetCatalogInfoResponse> {
        return super.call("groups.getCatalogInfo", params)
    }
    /**
     * Returns a list of invitations to join communities and events.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetInvitesResponse>}
     */
    public async groupsGetInvites(params: MethodsProps.GroupsGetInvitesParams): Promise<Responses.GroupsGetInvitesResponse> {
        return super.call("groups.getInvites", params)
    }
    /**
     * Returns invited users list of a community
     *
     * @param {{
     *   group_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetInvitedUsersResponse>}
     */
    public async groupsGetInvitedUsers(params: MethodsProps.GroupsGetInvitedUsersParams): Promise<Responses.GroupsGetInvitedUsersResponse> {
        return super.call("groups.getInvitedUsers", params)
    }
    /**
     * Adds a user to a community blacklist.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   end_date: (number|undefined),
     *   reason: (number|undefined),
     *   comment: (string|undefined),
     *   comment_visible: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsBanUser(params: MethodsProps.GroupsBanUserParams): Promise<Responses.OkResponse> {
        return super.call("groups.banUser", params)
    }
    /**
     * Removes a user from a community blacklist.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsUnbanUser(params: MethodsProps.GroupsUnbanUserParams): Promise<Responses.OkResponse> {
        return super.call("groups.unbanUser", params)
    }
    /**
     * Returns a list of users on a community blacklist.
     *
     * @param {{
     *   group_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   user_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetBannedResponse>}
     */
    public async groupsGetBanned(params: MethodsProps.GroupsGetBannedParams): Promise<Responses.GroupsGetBannedResponse> {
        return super.call("groups.getBanned", params)
    }
    /**
     * Creates a new community.
     *
     * @param {{
     *   title: (string),
     *   description: (string|undefined),
     *   type: (string|undefined),
     *   public_category: (number|undefined),
     *   subtype: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsCreateResponse>}
     */
    public async groupsCreate(params: MethodsProps.GroupsCreateParams): Promise<Responses.GroupsCreateResponse> {
        return super.call("groups.create", params)
    }
    /**
     * Edits a community.
     *
     * @param {{
     *   group_id: (number),
     *   title: (string|undefined),
     *   description: (string|undefined),
     *   screen_name: (string|undefined),
     *   access: (number|undefined),
     *   website: (string|undefined),
     *   subject: (string|undefined),
     *   email: (string|undefined),
     *   phone: (string|undefined),
     *   rss: (string|undefined),
     *   event_start_date: (number|undefined),
     *   event_finish_date: (number|undefined),
     *   event_group_id: (number|undefined),
     *   public_category: (number|undefined),
     *   public_subcategory: (number|undefined),
     *   public_date: (string|undefined),
     *   wall: (number|undefined),
     *   topics: (number|undefined),
     *   photos: (number|undefined),
     *   video: (number|undefined),
     *   audio: (number|undefined),
     *   links: (boolean|undefined),
     *   events: (boolean|undefined),
     *   places: (boolean|undefined),
     *   contacts: (boolean|undefined),
     *   docs: (number|undefined),
     *   wiki: (number|undefined),
     *   messages: (boolean|undefined),
     *   age_limits: (number|undefined),
     *   market: (boolean|undefined),
     *   market_comments: (boolean|undefined),
     *   market_country: (number[]|undefined),
     *   market_city: (number[]|undefined),
     *   market_currency: (number|undefined),
     *   market_contact: (number|undefined),
     *   market_wiki: (number|undefined),
     *   obscene_filter: (boolean|undefined),
     *   obscene_stopwords: (boolean|undefined),
     *   obscene_words: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsEdit(params: MethodsProps.GroupsEditParams): Promise<Responses.OkResponse> {
        return super.call("groups.edit", params)
    }
    /**
     * Edits the place in community.
     *
     * @param {{
     *   group_id: (number),
     *   title: (string|undefined),
     *   address: (string|undefined),
     *   country_id: (number|undefined),
     *   city_id: (number|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsEditPlaceResponse>}
     */
    public async groupsEditPlace(params: MethodsProps.GroupsEditPlaceParams): Promise<Responses.GroupsEditPlaceResponse> {
        return super.call("groups.editPlace", params)
    }
    /**
     * Returns community settings.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetSettingsResponse>}
     */
    public async groupsGetSettings(params: MethodsProps.GroupsGetSettingsParams): Promise<Responses.GroupsGetSettingsResponse> {
        return super.call("groups.getSettings", params)
    }
    /**
     * Returns a list of requests to the community.
     *
     * @param {{
     *   group_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetRequestsResponse>}
     */
    public async groupsGetRequests(params: MethodsProps.GroupsGetRequestsParams): Promise<Responses.GroupsGetRequestsResponse> {
        return super.call("groups.getRequests", params)
    }
    /**
     * Allows to add, remove or edit the community manager.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   role: (string|undefined),
     *   is_contact: (boolean|undefined),
     *   contact_position: (string|undefined),
     *   contact_phone: (string|undefined),
     *   contact_email: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsEditManager(params: MethodsProps.GroupsEditManagerParams): Promise<Responses.OkResponse> {
        return super.call("groups.editManager", params)
    }
    /**
     * Allows to invite friends to the community.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsInvite(params: MethodsProps.GroupsInviteParams): Promise<Responses.OkResponse> {
        return super.call("groups.invite", params)
    }
    /**
     * Allows to add a link to the community.
     *
     * @param {{
     *   group_id: (number),
     *   link: (string),
     *   text: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsAddLink(params: MethodsProps.GroupsAddLinkParams): Promise<Responses.OkResponse> {
        return super.call("groups.addLink", params)
    }
    /**
     * Allows to delete a link from the community.
     *
     * @param {{
     *   group_id: (number),
     *   link_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsDeleteLink(params: MethodsProps.GroupsDeleteLinkParams): Promise<Responses.OkResponse> {
        return super.call("groups.deleteLink", params)
    }
    /**
     * Allows to edit a link in the community.
     *
     * @param {{
     *   group_id: (number),
     *   link_id: (number),
     *   text: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsEditLink(params: MethodsProps.GroupsEditLinkParams): Promise<Responses.OkResponse> {
        return super.call("groups.editLink", params)
    }
    /**
     * Allows to reorder links in the community.
     *
     * @param {{
     *   group_id: (number),
     *   link_id: (number),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsReorderLink(params: MethodsProps.GroupsReorderLinkParams): Promise<Responses.OkResponse> {
        return super.call("groups.reorderLink", params)
    }
    /**
     * Removes a user from the community.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsRemoveUser(params: MethodsProps.GroupsRemoveUserParams): Promise<Responses.OkResponse> {
        return super.call("groups.removeUser", params)
    }
    /**
     * Allows to approve join request to the community.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsApproveRequest(params: MethodsProps.GroupsApproveRequestParams): Promise<Responses.OkResponse> {
        return super.call("groups.approveRequest", params)
    }
    /**
     * Returns Callback API confirmation code for the community.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetCallbackConfirmationCodeResponse>}
     */
    public async groupsGetCallbackConfirmationCode(params: MethodsProps.GroupsGetCallbackConfirmationCodeParams): Promise<Responses.GroupsGetCallbackConfirmationCodeResponse> {
        return super.call("groups.getCallbackConfirmationCode", params)
    }
    /**
     * Returns [vk.com/dev/callback_api|Callback API] notifications settings.
     *
     * @param {{
     *   group_id: (number),
     *   server_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetCallbackSettingsResponse>}
     */
    public async groupsGetCallbackSettings(params: MethodsProps.GroupsGetCallbackSettingsParams): Promise<Responses.GroupsGetCallbackSettingsResponse> {
        return super.call("groups.getCallbackSettings", params)
    }
    /**
     * Allow to set notifications settings for group.
     *
     * @param {{
     *   group_id: (number),
     *   server_id: (number|undefined),
     *   message_new: (boolean|undefined),
     *   message_reply: (boolean|undefined),
     *   message_allow: (boolean|undefined),
     *   message_deny: (boolean|undefined),
     *   photo_new: (boolean|undefined),
     *   audio_new: (boolean|undefined),
     *   video_new: (boolean|undefined),
     *   wall_reply_new: (boolean|undefined),
     *   wall_reply_edit: (boolean|undefined),
     *   wall_reply_delete: (boolean|undefined),
     *   wall_reply_restore: (boolean|undefined),
     *   wall_post_new: (boolean|undefined),
     *   wall_repost: (boolean|undefined),
     *   board_post_new: (boolean|undefined),
     *   board_post_edit: (boolean|undefined),
     *   board_post_restore: (boolean|undefined),
     *   board_post_delete: (boolean|undefined),
     *   photo_comment_new: (boolean|undefined),
     *   photo_comment_edit: (boolean|undefined),
     *   photo_comment_delete: (boolean|undefined),
     *   photo_comment_restore: (boolean|undefined),
     *   video_comment_new: (boolean|undefined),
     *   video_comment_edit: (boolean|undefined),
     *   video_comment_delete: (boolean|undefined),
     *   video_comment_restore: (boolean|undefined),
     *   market_comment_new: (boolean|undefined),
     *   market_comment_edit: (boolean|undefined),
     *   market_comment_delete: (boolean|undefined),
     *   market_comment_restore: (boolean|undefined),
     *   poll_vote_new: (boolean|undefined),
     *   group_join: (boolean|undefined),
     *   group_leave: (boolean|undefined),
     *   user_block: (boolean|undefined),
     *   user_unblock: (boolean|undefined),
     *   lead_forms_new: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsSetCallbackSettings(params: MethodsProps.GroupsSetCallbackSettingsParams): Promise<Responses.OkResponse> {
        return super.call("groups.setCallbackSettings", params)
    }
    /**
     * Returns the data needed to query a Long Poll server for events
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetLongPollServerResponse>}
     */
    public async groupsGetLongPollServer(params: MethodsProps.GroupsGetLongPollServerParams): Promise<Responses.GroupsGetLongPollServerResponse> {
        return super.call("groups.getLongPollServer", params)
    }
    /**
     * Returns Long Poll notification settings
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GroupsGetLongPollSettingsResponse>}
     */
    public async groupsGetLongPollSettings(params: MethodsProps.GroupsGetLongPollSettingsParams): Promise<Responses.GroupsGetLongPollSettingsResponse> {
        return super.call("groups.getLongPollSettings", params)
    }
    /**
     * Sets Long Poll notification settings
     *
     * @param {{
     *   group_id: (number),
     *   enabled: (boolean|undefined),
     *   message_new: (boolean|undefined),
     *   message_reply: (boolean|undefined),
     *   message_edit: (boolean|undefined),
     *   message_allow: (boolean|undefined),
     *   message_deny: (boolean|undefined),
     *   photo_new: (boolean|undefined),
     *   audio_new: (boolean|undefined),
     *   video_new: (boolean|undefined),
     *   wall_reply_new: (boolean|undefined),
     *   wall_reply_edit: (boolean|undefined),
     *   wall_reply_delete: (boolean|undefined),
     *   wall_reply_restore: (boolean|undefined),
     *   wall_post_new: (boolean|undefined),
     *   wall_repost: (boolean|undefined),
     *   board_post_new: (boolean|undefined),
     *   board_post_edit: (boolean|undefined),
     *   board_post_restore: (boolean|undefined),
     *   board_post_delete: (boolean|undefined),
     *   photo_comment_new: (boolean|undefined),
     *   photo_comment_edit: (boolean|undefined),
     *   photo_comment_delete: (boolean|undefined),
     *   photo_comment_restore: (boolean|undefined),
     *   video_comment_new: (boolean|undefined),
     *   video_comment_edit: (boolean|undefined),
     *   video_comment_delete: (boolean|undefined),
     *   video_comment_restore: (boolean|undefined),
     *   market_comment_new: (boolean|undefined),
     *   market_comment_edit: (boolean|undefined),
     *   market_comment_delete: (boolean|undefined),
     *   market_comment_restore: (boolean|undefined),
     *   poll_vote_new: (boolean|undefined),
     *   group_join: (boolean|undefined),
     *   group_leave: (boolean|undefined),
     *   user_block: (boolean|undefined),
     *   user_unblock: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async groupsSetLongPollSettings(params: MethodsProps.GroupsSetLongPollSettingsParams): Promise<Responses.OkResponse> {
        return super.call("groups.setLongPollSettings", params)
    }
    /**
     * Returns a list of topics on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_ids: (number[]|undefined),
     *   order: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   preview: (number|undefined),
     *   preview_length: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BoardGetTopicsResponse>}
     */
    public async boardGetTopics(params: MethodsProps.BoardGetTopicsParams): Promise<Responses.BoardGetTopicsResponse> {
        return super.call("board.getTopics", params)
    }
    /**
     * Returns a list of comments on a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   need_likes: (boolean|undefined),
     *   start_comment_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   sort: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BoardGetCommentsResponse>}
     */
    public async boardGetComments(params: MethodsProps.BoardGetCommentsParams): Promise<Responses.BoardGetCommentsResponse> {
        return super.call("board.getComments", params)
    }
    /**
     * Creates a new topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   title: (string),
     *   text: (string|undefined),
     *   from_group: (boolean|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BoardAddTopicResponse>}
     */
    public async boardAddTopic(params: MethodsProps.BoardAddTopicParams): Promise<Responses.BoardAddTopicResponse> {
        return super.call("board.addTopic", params)
    }
    /**
     * Adds a comment on a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   from_group: (boolean|undefined),
     *   sticker_id: (number|undefined),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BoardCreateCommentResponse>}
     */
    public async boardCreateComment(params: MethodsProps.BoardCreateCommentParams): Promise<Responses.BoardCreateCommentResponse> {
        return super.call("board.createComment", params)
    }
    /**
     * Deletes a topic from a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardDeleteTopic(params: MethodsProps.BoardDeleteTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.deleteTopic", params)
    }
    /**
     * Edits the title of a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   title: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardEditTopic(params: MethodsProps.BoardEditTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.editTopic", params)
    }
    /**
     * Edits a comment on a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   comment_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardEditComment(params: MethodsProps.BoardEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("board.editComment", params)
    }
    /**
     * Restores a comment deleted from a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardRestoreComment(params: MethodsProps.BoardRestoreCommentParams): Promise<Responses.OkResponse> {
        return super.call("board.restoreComment", params)
    }
    /**
     * Deletes a comment on a topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardDeleteComment(params: MethodsProps.BoardDeleteCommentParams): Promise<Responses.OkResponse> {
        return super.call("board.deleteComment", params)
    }
    /**
     * Re-opens a previously closed topic on a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardOpenTopic(params: MethodsProps.BoardOpenTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.openTopic", params)
    }
    /**
     * Closes a topic on a community's discussion board so that comments cannot be posted.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardCloseTopic(params: MethodsProps.BoardCloseTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.closeTopic", params)
    }
    /**
     * Pins a topic (fixes its place) to the top of a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardFixTopic(params: MethodsProps.BoardFixTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.fixTopic", params)
    }
    /**
     * Unpins a pinned topic from the top of a community's discussion board.
     *
     * @param {{
     *   group_id: (number),
     *   topic_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async boardUnfixTopic(params: MethodsProps.BoardUnfixTopicParams): Promise<Responses.OkResponse> {
        return super.call("board.unfixTopic", params)
    }
    /**
     * Returns detailed information about videos.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   videos: (string[]|undefined),
     *   album_id: (number|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetResponse>}
     */
    public async videoGet(params: MethodsProps.VideoGetParams): Promise<Responses.VideoGetResponse> {
        return super.call("video.get", params)
    }
    /**
     * Edits information about a video on a user or community page.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   name: (string|undefined),
     *   desc: (string|undefined),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   no_comments: (boolean|undefined),
     *   repeat: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoEdit(params: MethodsProps.VideoEditParams): Promise<Responses.OkResponse> {
        return super.call("video.edit", params)
    }
    /**
     * Adds a video to a user or community page.
     *
     * @param {{
     *   target_id: (number|undefined),
     *   video_id: (number),
     *   owner_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoAdd(params: MethodsProps.VideoAddParams): Promise<Responses.OkResponse> {
        return super.call("video.add", params)
    }
    /**
     * Returns a server address (required for upload) and video data.
     *
     * @param {{
     *   name: (string|undefined),
     *   description: (string|undefined),
     *   is_private: (boolean|undefined),
     *   wallpost: (boolean|undefined),
     *   link: (string|undefined),
     *   group_id: (number|undefined),
     *   album_id: (number|undefined),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   no_comments: (boolean|undefined),
     *   repeat: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoSaveResponse>}
     */
    public async videoSave(params: MethodsProps.VideoSaveParams): Promise<Responses.VideoSaveResponse> {
        return super.call("video.save", params)
    }
    /**
     * Deletes a video from a user or community page.
     *
     * @param {{
     *   video_id: (number),
     *   owner_id: (number|undefined),
     *   target_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoDelete(params: MethodsProps.VideoDeleteParams): Promise<Responses.OkResponse> {
        return super.call("video.delete", params)
    }
    /**
     * Restores a previously deleted video.
     *
     * @param {{
     *   video_id: (number),
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoRestore(params: MethodsProps.VideoRestoreParams): Promise<Responses.OkResponse> {
        return super.call("video.restore", params)
    }
    /**
     * Returns a list of videos under the set search criterion.
     *
     * @param {{
     *   q: (string),
     *   sort: (number|undefined),
     *   hd: (number|undefined),
     *   adult: (boolean|undefined),
     *   filters: (string[]|undefined),
     *   search_own: (boolean|undefined),
     *   offset: (number|undefined),
     *   longer: (number|undefined),
     *   shorter: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoSearchResponse>}
     */
    public async videoSearch(params: MethodsProps.VideoSearchParams): Promise<Responses.VideoSearchResponse> {
        return super.call("video.search", params)
    }
    /**
     * Returns list of videos in which the user is tagged.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetUserVideosResponse>}
     */
    public async videoGetUserVideos(params: MethodsProps.VideoGetUserVideosParams): Promise<Responses.VideoGetUserVideosResponse> {
        return super.call("video.getUserVideos", params)
    }
    /**
     * Returns a list of video albums owned by a user or community.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetAlbumsResponse>}
     */
    public async videoGetAlbums(params: MethodsProps.VideoGetAlbumsParams): Promise<Responses.VideoGetAlbumsResponse> {
        return super.call("video.getAlbums", params)
    }
    /**
     * Returns video album info
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetAlbumByIdResponse>}
     */
    public async videoGetAlbumById(params: MethodsProps.VideoGetAlbumByIdParams): Promise<Responses.VideoGetAlbumByIdResponse> {
        return super.call("video.getAlbumById", params)
    }
    /**
     * Creates an empty album for videos.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   title: (string|undefined),
     *   privacy: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoAddAlbumResponse>}
     */
    public async videoAddAlbum(params: MethodsProps.VideoAddAlbumParams): Promise<Responses.VideoAddAlbumResponse> {
        return super.call("video.addAlbum", params)
    }
    /**
     * Edits the title of a video album.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   album_id: (number),
     *   title: (string),
     *   privacy: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoEditAlbum(params: MethodsProps.VideoEditAlbumParams): Promise<Responses.OkResponse> {
        return super.call("video.editAlbum", params)
    }
    /**
     * Deletes a video album.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   album_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoDeleteAlbum(params: MethodsProps.VideoDeleteAlbumParams): Promise<Responses.OkResponse> {
        return super.call("video.deleteAlbum", params)
    }
    /**
     * Reorders the album in the list of user video albums.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   album_id: (number),
     *   before: (number|undefined),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoReorderAlbums(params: MethodsProps.VideoReorderAlbumsParams): Promise<Responses.OkResponse> {
        return super.call("video.reorderAlbums", params)
    }
    /**
     * Reorders the video in the video album.
     *
     * @param {{
     *   target_id: (number|undefined),
     *   album_id: (number|undefined),
     *   owner_id: (number),
     *   video_id: (number),
     *   before_owner_id: (number|undefined),
     *   before_video_id: (number|undefined),
     *   after_owner_id: (number|undefined),
     *   after_video_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoReorderVideos(params: MethodsProps.VideoReorderVideosParams): Promise<Responses.OkResponse> {
        return super.call("video.reorderVideos", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   target_id: (number|undefined),
     *   album_id: (number|undefined),
     *   album_ids: (number[]|undefined),
     *   owner_id: (number),
     *   video_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoAddToAlbum(params: MethodsProps.VideoAddToAlbumParams): Promise<Responses.OkResponse> {
        return super.call("video.addToAlbum", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   target_id: (number|undefined),
     *   album_id: (number|undefined),
     *   album_ids: (number[]|undefined),
     *   owner_id: (number),
     *   video_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoRemoveFromAlbum(params: MethodsProps.VideoRemoveFromAlbumParams): Promise<Responses.OkResponse> {
        return super.call("video.removeFromAlbum", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   target_id: (number|undefined),
     *   owner_id: (number),
     *   video_id: (number),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetAlbumsByVideoResponse>}
     */
    public async videoGetAlbumsByVideo(params: MethodsProps.VideoGetAlbumsByVideoParams): Promise<Responses.VideoGetAlbumsByVideoResponse> {
        return super.call("video.getAlbumsByVideo", params)
    }
    /**
     * Returns a list of comments on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   need_likes: (boolean|undefined),
     *   start_comment_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   sort: (string|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetCommentsResponse>}
     */
    public async videoGetComments(params: MethodsProps.VideoGetCommentsParams): Promise<Responses.VideoGetCommentsResponse> {
        return super.call("video.getComments", params)
    }
    /**
     * Adds a new comment on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   from_group: (boolean|undefined),
     *   reply_to_comment: (number|undefined),
     *   sticker_id: (number|undefined),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoCreateCommentResponse>}
     */
    public async videoCreateComment(params: MethodsProps.VideoCreateCommentParams): Promise<Responses.VideoCreateCommentResponse> {
        return super.call("video.createComment", params)
    }
    /**
     * Deletes a comment on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoDeleteComment(params: MethodsProps.VideoDeleteCommentParams): Promise<Responses.OkResponse> {
        return super.call("video.deleteComment", params)
    }
    /**
     * Restores a previously deleted comment on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoRestoreCommentResponse>}
     */
    public async videoRestoreComment(params: MethodsProps.VideoRestoreCommentParams): Promise<Responses.VideoRestoreCommentResponse> {
        return super.call("video.restoreComment", params)
    }
    /**
     * Edits the text of a comment on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   comment_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoEditComment(params: MethodsProps.VideoEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("video.editComment", params)
    }
    /**
     * Returns a list of tags on a video.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetTagsResponse>}
     */
    public async videoGetTags(params: MethodsProps.VideoGetTagsParams): Promise<Responses.VideoGetTagsResponse> {
        return super.call("video.getTags", params)
    }
    /**
     * Adds a tag on a video.
     *
     * @param {{
     *   user_id: (number),
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   tagged_name: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoPutTagResponse>}
     */
    public async videoPutTag(params: MethodsProps.VideoPutTagParams): Promise<Responses.VideoPutTagResponse> {
        return super.call("video.putTag", params)
    }
    /**
     * Removes a tag from a video.
     *
     * @param {{
     *   tag_id: (number),
     *   owner_id: (number|undefined),
     *   video_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoRemoveTag(params: MethodsProps.VideoRemoveTagParams): Promise<Responses.OkResponse> {
        return super.call("video.removeTag", params)
    }
    /**
     * Returns a list of videos with tags that have not been viewed.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetNewTagsResponse>}
     */
    public async videoGetNewTags(params: MethodsProps.VideoGetNewTagsParams): Promise<Responses.VideoGetNewTagsResponse> {
        return super.call("video.getNewTags", params)
    }
    /**
     * Reports (submits a complaint about) a video.
     *
     * @param {{
     *   owner_id: (number),
     *   video_id: (number),
     *   reason: (number|undefined),
     *   comment: (string|undefined),
     *   search_query: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoReport(params: MethodsProps.VideoReportParams): Promise<Responses.OkResponse> {
        return super.call("video.report", params)
    }
    /**
     * Reports (submits a complaint about) a comment on a video.
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   reason: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoReportComment(params: MethodsProps.VideoReportCommentParams): Promise<Responses.OkResponse> {
        return super.call("video.reportComment", params)
    }
    /**
     * Returns video catalog
     *
     * @param {{
     *   count: (number|undefined),
     *   items_count: (number|undefined),
     *   from: (string|undefined),
     *   filters: (string[]|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetCatalogResponse>}
     */
    public async videoGetCatalog(params: MethodsProps.VideoGetCatalogParams): Promise<Responses.VideoGetCatalogResponse> {
        return super.call("video.getCatalog", params)
    }
    /**
     * Returns a separate catalog section
     *
     * @param {{
     *   section_id: (string),
     *   from: (string),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.VideoGetCatalogSectionResponse>}
     */
    public async videoGetCatalogSection(params: MethodsProps.VideoGetCatalogSectionParams): Promise<Responses.VideoGetCatalogSectionResponse> {
        return super.call("video.getCatalogSection", params)
    }
    /**
     * Hides a video catalog section from a user.
     *
     * @param {{
     *   section_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async videoHideCatalogSection(params: MethodsProps.VideoHideCatalogSectionParams): Promise<Responses.OkResponse> {
        return super.call("video.hideCatalogSection", params)
    }
    /**
     * Returns a list of notes created by a user.
     *
     * @param {{
     *   note_ids: (number[]|undefined),
     *   user_id: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotesGetResponse>}
     */
    public async notesGet(params: MethodsProps.NotesGetParams): Promise<Responses.NotesGetResponse> {
        return super.call("notes.get", params)
    }
    /**
     * Returns a note by its ID.
     *
     * @param {{
     *   note_id: (number),
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotesGetByIdResponse>}
     */
    public async notesGetById(params: MethodsProps.NotesGetByIdParams): Promise<Responses.NotesGetByIdResponse> {
        return super.call("notes.getById", params)
    }
    /**
     * Creates a new note for the current user.
     *
     * @param {{
     *   title: (string),
     *   text: (string),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotesAddResponse>}
     */
    public async notesAdd(params: MethodsProps.NotesAddParams): Promise<Responses.NotesAddResponse> {
        return super.call("notes.add", params)
    }
    /**
     * Edits a note of the current user.
     *
     * @param {{
     *   note_id: (number),
     *   title: (string),
     *   text: (string),
     *   privacy_view: (string[]|undefined),
     *   privacy_comment: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async notesEdit(params: MethodsProps.NotesEditParams): Promise<Responses.OkResponse> {
        return super.call("notes.edit", params)
    }
    /**
     * Deletes a note of the current user.
     *
     * @param {{
     *   note_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async notesDelete(params: MethodsProps.NotesDeleteParams): Promise<Responses.OkResponse> {
        return super.call("notes.delete", params)
    }
    /**
     * Returns a list of comments on a note.
     *
     * @param {{
     *   note_id: (number),
     *   owner_id: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotesGetCommentsResponse>}
     */
    public async notesGetComments(params: MethodsProps.NotesGetCommentsParams): Promise<Responses.NotesGetCommentsResponse> {
        return super.call("notes.getComments", params)
    }
    /**
     * Adds a new comment on a note.
     *
     * @param {{
     *   note_id: (number),
     *   owner_id: (number|undefined),
     *   reply_to: (number|undefined),
     *   message: (string),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotesCreateCommentResponse>}
     */
    public async notesCreateComment(params: MethodsProps.NotesCreateCommentParams): Promise<Responses.NotesCreateCommentResponse> {
        return super.call("notes.createComment", params)
    }
    /**
     * Edits a comment on a note.
     *
     * @param {{
     *   comment_id: (number),
     *   owner_id: (number|undefined),
     *   message: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async notesEditComment(params: MethodsProps.NotesEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("notes.editComment", params)
    }
    /**
     * Deletes a comment on a note.
     *
     * @param {{
     *   comment_id: (number),
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async notesDeleteComment(params: MethodsProps.NotesDeleteCommentParams): Promise<Responses.OkResponse> {
        return super.call("notes.deleteComment", params)
    }
    /**
     * Restores a deleted comment on a note.
     *
     * @param {{
     *   comment_id: (number),
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async notesRestoreComment(params: MethodsProps.NotesRestoreCommentParams): Promise<Responses.OkResponse> {
        return super.call("notes.restoreComment", params)
    }
    /**
     * Adds a new location to the location database.
     *
     * @param {{
     *   type: (number|undefined),
     *   title: (string),
     *   latitude: (number),
     *   longitude: (number),
     *   country: (number|undefined),
     *   city: (number|undefined),
     *   address: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesAddResponse>}
     */
    public async placesAdd(params: MethodsProps.PlacesAddParams): Promise<Responses.PlacesAddResponse> {
        return super.call("places.add", params)
    }
    /**
     * Returns information about locations by their IDs.
     *
     * @param {{
     *   places: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesGetByIdResponse>}
     */
    public async placesGetById(params: MethodsProps.PlacesGetByIdParams): Promise<Responses.PlacesGetByIdResponse> {
        return super.call("places.getById", params)
    }
    /**
     * Returns a list of locations that match the search criteria.
     *
     * @param {{
     *   q: (string|undefined),
     *   city: (number|undefined),
     *   latitude: (number),
     *   longitude: (number),
     *   radius: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesSearchResponse>}
     */
    public async placesSearch(params: MethodsProps.PlacesSearchParams): Promise<Responses.PlacesSearchResponse> {
        return super.call("places.search", params)
    }
    /**
     * Checks a user in at the specified location.
     *
     * @param {{
     *   place_id: (number|undefined),
     *   text: (string|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   friends_only: (boolean|undefined),
     *   services: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesCheckinResponse>}
     */
    public async placesCheckin(params: MethodsProps.PlacesCheckinParams): Promise<Responses.PlacesCheckinResponse> {
        return super.call("places.checkin", params)
    }
    /**
     * Returns a list of user check-ins at locations according to the set parameters.
     *
     * @param {{
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   place: (number|undefined),
     *   user_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   timestamp: (number|undefined),
     *   friends_only: (boolean|undefined),
     *   need_places: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesGetCheckinsResponse>}
     */
    public async placesGetCheckins(params: MethodsProps.PlacesGetCheckinsParams): Promise<Responses.PlacesGetCheckinsResponse> {
        return super.call("places.getCheckins", params)
    }
    /**
     * Returns a list of all types of locations.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PlacesGetTypesResponse>}
     */
    public async placesGetTypes(params: MethodsProps.PlacesGetTypesParams): Promise<Responses.PlacesGetTypesResponse> {
        return super.call("places.getTypes", params)
    }
    /**
     * Returns non-null values of user counters.
     *
     * @param {{
     *   filter: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetCountersResponse>}
     */
    public async accountGetCounters(params: MethodsProps.AccountGetCountersParams): Promise<Responses.AccountGetCountersResponse> {
        return super.call("account.getCounters", params)
    }
    /**
     * Sets an application screen name (up to 17 characters), that is shown to the user in the left menu.
     *
     * @param {{
     *   user_id: (number),
     *   name: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetNameInMenu(params: MethodsProps.AccountSetNameInMenuParams): Promise<Responses.OkResponse> {
        return super.call("account.setNameInMenu", params)
    }
    /**
     * Marks the current user as online for 15 minutes.
     *
     * @param {{
     *   voip: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetOnline(params: MethodsProps.AccountSetOnlineParams): Promise<Responses.OkResponse> {
        return super.call("account.setOnline", params)
    }
    /**
     * Marks a current user as offline.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetOffline(params: MethodsProps.AccountSetOfflineParams): Promise<Responses.OkResponse> {
        return super.call("account.setOffline", params)
    }
    /**
     * Allows to search the VK users using phone numbers, e-mail addresses and user IDs on other services.
     *
     * @param {{
     *   contacts: (string[]|undefined),
     *   service: (string),
     *   mycontact: (string|undefined),
     *   return_all: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountLookupContactsResponse>}
     */
    public async accountLookupContacts(params: MethodsProps.AccountLookupContactsParams): Promise<Responses.AccountLookupContactsResponse> {
        return super.call("account.lookupContacts", params)
    }
    /**
     * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
     *
     * @param {{
     *   token: (string),
     *   device_model: (string|undefined),
     *   device_year: (number|undefined),
     *   device_id: (string),
     *   system_version: (string|undefined),
     *   settings: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountRegisterDevice(params: MethodsProps.AccountRegisterDeviceParams): Promise<Responses.OkResponse> {
        return super.call("account.registerDevice", params)
    }
    /**
     * Unsubscribes a device from push notifications.
     *
     * @param {{
     *   device_id: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountUnregisterDevice(params: MethodsProps.AccountUnregisterDeviceParams): Promise<Responses.OkResponse> {
        return super.call("account.unregisterDevice", params)
    }
    /**
     * Mutes push notifications for the set period of time.
     *
     * @param {{
     *   device_id: (string|undefined),
     *   time: (number|undefined),
     *   peer_id: (number|undefined),
     *   sound: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetSilenceMode(params: MethodsProps.AccountSetSilenceModeParams): Promise<Responses.OkResponse> {
        return super.call("account.setSilenceMode", params)
    }
    /**
     * Gets settings of push notifications.
     *
     * @param {{
     *   device_id: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetPushSettingsResponse>}
     */
    public async accountGetPushSettings(params: MethodsProps.AccountGetPushSettingsParams): Promise<Responses.AccountGetPushSettingsResponse> {
        return super.call("account.getPushSettings", params)
    }
    /**
     * Change push settings.
     *
     * @param {{
     *   device_id: (string),
     *   settings: (string|undefined),
     *   key: (string|undefined),
     *   value: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetPushSettings(params: MethodsProps.AccountSetPushSettingsParams): Promise<Responses.OkResponse> {
        return super.call("account.setPushSettings", params)
    }
    /**
     * Gets settings of the user in this application.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetAppPermissionsResponse>}
     */
    public async accountGetAppPermissions(params: MethodsProps.AccountGetAppPermissionsParams): Promise<Responses.AccountGetAppPermissionsResponse> {
        return super.call("account.getAppPermissions", params)
    }
    /**
     * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
     *
     * @param {{
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetActiveOffersResponse>}
     */
    public async accountGetActiveOffers(params: MethodsProps.AccountGetActiveOffersParams): Promise<Responses.AccountGetActiveOffersResponse> {
        return super.call("account.getActiveOffers", params)
    }
    /**
     * Adds user to the banlist.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountBanUser(params: MethodsProps.AccountBanUserParams): Promise<Responses.OkResponse> {
        return super.call("account.banUser", params)
    }
    /**
     * Deletes user from the blacklist.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountUnbanUser(params: MethodsProps.AccountUnbanUserParams): Promise<Responses.OkResponse> {
        return super.call("account.unbanUser", params)
    }
    /**
     * Returns a user's blacklist.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetBannedResponse>}
     */
    public async accountGetBanned(params: MethodsProps.AccountGetBannedParams): Promise<Responses.AccountGetBannedResponse> {
        return super.call("account.getBanned", params)
    }
    /**
     * Returns current account info.
     *
     * @param {{
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetInfoResponse>}
     */
    public async accountGetInfo(params: MethodsProps.AccountGetInfoParams): Promise<Responses.AccountGetInfoResponse> {
        return super.call("account.getInfo", params)
    }
    /**
     * Allows to edit the current account info.
     *
     * @param {{
     *   name: (string|undefined),
     *   value: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async accountSetInfo(params: MethodsProps.AccountSetInfoParams): Promise<Responses.OkResponse> {
        return super.call("account.setInfo", params)
    }
    /**
     * Changes a user password after access is successfully restored with the [vk.com/dev/auth.restore|auth.restore] method.
     *
     * @param {{
     *   restore_sid: (string|undefined),
     *   change_password_hash: (string|undefined),
     *   old_password: (string|undefined),
     *   new_password: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountChangePasswordResponse>}
     */
    public async accountChangePassword(params: MethodsProps.AccountChangePasswordParams): Promise<Responses.AccountChangePasswordResponse> {
        return super.call("account.changePassword", params)
    }
    /**
     * Returns the current account info.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountGetProfileInfoResponse>}
     */
    public async accountGetProfileInfo(params: MethodsProps.AccountGetProfileInfoParams): Promise<Responses.AccountGetProfileInfoResponse> {
        return super.call("account.getProfileInfo", params)
    }
    /**
     * Edits current profile info.
     *
     * @param {{
     *   first_name: (string|undefined),
     *   last_name: (string|undefined),
     *   maiden_name: (string|undefined),
     *   screen_name: (string|undefined),
     *   cancel_request_id: (number|undefined),
     *   sex: (number|undefined),
     *   relation: (number|undefined),
     *   relation_partner_id: (number|undefined),
     *   bdate: (string|undefined),
     *   bdate_visibility: (number|undefined),
     *   home_town: (string|undefined),
     *   country_id: (number|undefined),
     *   city_id: (number|undefined),
     *   status: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AccountSaveProfileInfoResponse>}
     */
    public async accountSaveProfileInfo(params: MethodsProps.AccountSaveProfileInfoParams): Promise<Responses.AccountSaveProfileInfoResponse> {
        return super.call("account.saveProfileInfo", params)
    }
    /**
     * Returns a list of the current user's conversations.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   filter: (string|undefined),
     *   extended: (boolean|undefined),
     *   start_message_id: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetConversationsResponse>}
     */
    public async messagesGetConversations(params: MethodsProps.MessagesGetConversationsParams): Promise<Responses.MessagesGetConversationsResponse> {
        return super.call("messages.getConversations", params)
    }
    /**
     * Returns conversations by their IDs
     *
     * @param {{
     *   peer_ids: (number[]),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetConversationsByIdResponse>}
     */
    public async messagesGetConversationsById(params: MethodsProps.MessagesGetConversationsByIdParams): Promise<Responses.MessagesGetConversationsByIdResponse> {
        return super.call("messages.getConversationsById", params)
    }
    /**
     * Returns messages by their IDs.
     *
     * @param {{
     *   message_ids: (number[]),
     *   preview_length: (number|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetByIdResponse>}
     */
    public async messagesGetById(params: MethodsProps.MessagesGetByIdParams): Promise<Responses.MessagesGetByIdResponse> {
        return super.call("messages.getById", params)
    }
    /**
     * Returns messages by their IDs within the conversation.
     *
     * @param {{
     *   peer_id: (number|undefined),
     *   conversation_message_ids: (number[]),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetByConversationMessageIdResponse>}
     */
    public async messagesGetByConversationMessageId(params: MethodsProps.MessagesGetByConversationMessageIdParams): Promise<Responses.MessagesGetByConversationMessageIdResponse> {
        return super.call("messages.getByConversationMessageId", params)
    }
    /**
     * Returns a list of the current user's private messages that match search criteria.
     *
     * @param {{
     *   q: (string|undefined),
     *   peer_id: (number|undefined),
     *   date: (number|undefined),
     *   preview_length: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesSearchResponse>}
     */
    public async messagesSearch(params: MethodsProps.MessagesSearchParams): Promise<Responses.MessagesSearchResponse> {
        return super.call("messages.search", params)
    }
    /**
     * Returns message history for the specified user or group chat.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   user_id: (number|undefined),
     *   peer_id: (number|undefined),
     *   start_message_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   rev: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetHistoryResponse>}
     */
    public async messagesGetHistory(params: MethodsProps.MessagesGetHistoryParams): Promise<Responses.MessagesGetHistoryResponse> {
        return super.call("messages.getHistory", params)
    }
    /**
     * Returns media files from the dialog or group chat.
     *
     * @param {{
     *   peer_id: (number),
     *   media_type: (string|undefined),
     *   start_from: (string|undefined),
     *   count: (number|undefined),
     *   photo_sizes: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetHistoryAttachmentsResponse>}
     */
    public async messagesGetHistoryAttachments(params: MethodsProps.MessagesGetHistoryAttachmentsParams): Promise<Responses.MessagesGetHistoryAttachmentsResponse> {
        return super.call("messages.getHistoryAttachments", params)
    }
    /**
     * Sends a message.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   random_id: (number|undefined),
     *   peer_id: (number|undefined),
     *   domain: (string|undefined),
     *   chat_id: (number|undefined),
     *   user_ids: (number[]|undefined),
     *   message: (string|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   attachment: (string[]|undefined),
     *   forward_messages: (string|undefined),
     *   sticker_id: (number|undefined),
     *   notification: (boolean|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesSendResponse>}
     */
    public async messagesSend(params: MethodsProps.MessagesSendParams): Promise<Responses.MessagesSendResponse> {
        return super.call("messages.send", params)
    }
    /**
     * Edits the message.
     *
     * @param {{
     *   peer_id: (number),
     *   message: (string|undefined),
     *   lat: (number|undefined),
     *   long: (number|undefined),
     *   attachment: (string[]|undefined),
     *   keep_forward_messages: (boolean|undefined),
     *   keep_snippets: (boolean|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesEditResponse>}
     */
    public async messagesEdit(params: MethodsProps.MessagesEditParams): Promise<Responses.MessagesEditResponse> {
        return super.call("messages.edit", params)
    }
    /**
     * Deletes one or more messages.
     *
     * @param {{
     *   message_ids: (number[]|undefined),
     *   spam: (boolean|undefined),
     *   delete_for_all: (boolean|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesDeleteResponse>}
     */
    public async messagesDelete(params: MethodsProps.MessagesDeleteParams): Promise<Responses.MessagesDeleteResponse> {
        return super.call("messages.delete", params)
    }
    /**
     * Deletes all private messages in a conversation.
     *
     * @param {{
     *   user_id: (string|undefined),
     *   group_id: (number|undefined),
     *   peer_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesDeleteConversation(params: MethodsProps.MessagesDeleteConversationParams): Promise<Responses.OkResponse> {
        return super.call("messages.deleteConversation", params)
    }
    /**
     * Restores a deleted message.
     *
     * @param {{
     *   message_id: (number),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesRestore(params: MethodsProps.MessagesRestoreParams): Promise<Responses.OkResponse> {
        return super.call("messages.restore", params)
    }
    /**
     * Marks messages as read.
     *
     * @param {{
     *   message_ids: (number[]|undefined),
     *   peer_id: (number|undefined),
     *   start_message_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesMarkAsRead(params: MethodsProps.MessagesMarkAsReadParams): Promise<Responses.OkResponse> {
        return super.call("messages.markAsRead", params)
    }
    /**
     * Marks and unmarks messages as important (starred).
     *
     * @param {{
     *   message_ids: (number[]|undefined),
     *   important: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesMarkAsImportantResponse>}
     */
    public async messagesMarkAsImportant(params: MethodsProps.MessagesMarkAsImportantParams): Promise<Responses.MessagesMarkAsImportantResponse> {
        return super.call("messages.markAsImportant", params)
    }
    /**
     * Marks and unmarks conversations as important.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   peer_id: (number),
     *   important: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesMarkAsImportantConversation(params: MethodsProps.MessagesMarkAsImportantConversationParams): Promise<Responses.OkResponse> {
        return super.call("messages.markAsImportantConversation", params)
    }
    /**
     * Marks and unmarks conversations as unanswered.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   peer_id: (number),
     *   answered: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesMarkAsAnsweredConversation(params: MethodsProps.MessagesMarkAsAnsweredConversationParams): Promise<Responses.OkResponse> {
        return super.call("messages.markAsAnsweredConversation", params)
    }
    /**
     * Returns data required for connection to a Long Poll server.
     *
     * @param {{
     *   lp_version: (number|undefined),
     *   need_pts: (boolean|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetLongPollServerResponse>}
     */
    public async messagesGetLongPollServer(params: MethodsProps.MessagesGetLongPollServerParams): Promise<Responses.MessagesGetLongPollServerResponse> {
        return super.call("messages.getLongPollServer", params)
    }
    /**
     * Returns updates in user's private messages.
     *
     * @param {{
     *   ts: (number|undefined),
     *   pts: (number|undefined),
     *   preview_length: (number|undefined),
     *   onlines: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   events_limit: (number|undefined),
     *   msgs_limit: (number|undefined),
     *   max_msg_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetLongPollHistoryResponse>}
     */
    public async messagesGetLongPollHistory(params: MethodsProps.MessagesGetLongPollHistoryParams): Promise<Responses.MessagesGetLongPollHistoryResponse> {
        return super.call("messages.getLongPollHistory", params)
    }
    /**
     * Creates a chat with several participants.
     *
     * @param {{
     *   user_ids: (number[]),
     *   title: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesCreateChatResponse>}
     */
    public async messagesCreateChat(params: MethodsProps.MessagesCreateChatParams): Promise<Responses.MessagesCreateChatResponse> {
        return super.call("messages.createChat", params)
    }
    /**
     * Edits the title of a chat.
     *
     * @param {{
     *   chat_id: (number),
     *   title: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesEditChat(params: MethodsProps.MessagesEditChatParams): Promise<Responses.OkResponse> {
        return super.call("messages.editChat", params)
    }
    /**
     * Returns a list of IDs of users participating in a chat.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   peer_id: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetConversationMembersResponse>}
     */
    public async messagesGetConversationMembers(params: MethodsProps.MessagesGetConversationMembersParams): Promise<Responses.MessagesGetConversationMembersResponse> {
        return super.call("messages.getConversationMembers", params)
    }
    /**
     * Changes the status of a user as typing in a conversation.
     *
     * @param {{
     *   user_id: (string|undefined),
     *   type: (string|undefined),
     *   peer_id: (number|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesSetActivity(params: MethodsProps.MessagesSetActivityParams): Promise<Responses.OkResponse> {
        return super.call("messages.setActivity", params)
    }
    /**
     * Returns a list of the current user's conversations that match search criteria.
     *
     * @param {{
     *   q: (string|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesSearchConversationsResponse>}
     */
    public async messagesSearchConversations(params: MethodsProps.MessagesSearchConversationsParams): Promise<Responses.MessagesSearchConversationsResponse> {
        return super.call("messages.searchConversations", params)
    }
    /**
     * Adds a new user to a chat.
     *
     * @param {{
     *   chat_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesAddChatUser(params: MethodsProps.MessagesAddChatUserParams): Promise<Responses.OkResponse> {
        return super.call("messages.addChatUser", params)
    }
    /**
     * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
     *
     * @param {{
     *   chat_id: (number),
     *   user_id: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesRemoveChatUser(params: MethodsProps.MessagesRemoveChatUserParams): Promise<Responses.OkResponse> {
        return super.call("messages.removeChatUser", params)
    }
    /**
     * Returns a user's current status and date of last activity.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesGetLastActivityResponse>}
     */
    public async messagesGetLastActivity(params: MethodsProps.MessagesGetLastActivityParams): Promise<Responses.MessagesGetLastActivityResponse> {
        return super.call("messages.getLastActivity", params)
    }
    /**
     * Sets a previously-uploaded picture as the cover picture of a chat.
     *
     * @param {{
     *   file: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesSetChatPhotoResponse>}
     */
    public async messagesSetChatPhoto(params: MethodsProps.MessagesSetChatPhotoParams): Promise<Responses.MessagesSetChatPhotoResponse> {
        return super.call("messages.setChatPhoto", params)
    }
    /**
     * Deletes a chat's cover picture.
     *
     * @param {{
     *   chat_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesDeleteChatPhotoResponse>}
     */
    public async messagesDeleteChatPhoto(params: MethodsProps.MessagesDeleteChatPhotoParams): Promise<Responses.MessagesDeleteChatPhotoResponse> {
        return super.call("messages.deleteChatPhoto", params)
    }
    /**
     * Denies sending message from community to the current user.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesDenyMessagesFromGroup(params: MethodsProps.MessagesDenyMessagesFromGroupParams): Promise<Responses.OkResponse> {
        return super.call("messages.denyMessagesFromGroup", params)
    }
    /**
     * Allows sending messages from community to the current user.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async messagesAllowMessagesFromGroup(params: MethodsProps.MessagesAllowMessagesFromGroupParams): Promise<Responses.OkResponse> {
        return super.call("messages.allowMessagesFromGroup", params)
    }
    /**
     * Returns information whether sending messages from the community to current user is allowed.
     *
     * @param {{
     *   group_id: (number),
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MessagesIsMessagesFromGroupAllowedResponse>}
     */
    public async messagesIsMessagesFromGroupAllowed(params: MethodsProps.MessagesIsMessagesFromGroupAllowedParams): Promise<Responses.MessagesIsMessagesFromGroupAllowedResponse> {
        return super.call("messages.isMessagesFromGroupAllowed", params)
    }
    /**
     * Returns data required to show newsfeed for the current user.
     *
     * @param {{
     *   filters: (string[]|undefined),
     *   return_banned: (boolean|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   max_photos: (number|undefined),
     *   source_ids: (string[]|undefined),
     *   start_from: (string|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetResponse>}
     */
    public async newsfeedGet(params: MethodsProps.NewsfeedGetParams): Promise<Responses.NewsfeedGetResponse> {
        return super.call("newsfeed.get", params)
    }
    /**
     * , Returns a list of newsfeeds recommended to the current user.
     *
     * @param {{
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   max_photos: (number|undefined),
     *   start_from: (string|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetRecommendedResponse>}
     */
    public async newsfeedGetRecommended(params: MethodsProps.NewsfeedGetRecommendedParams): Promise<Responses.NewsfeedGetRecommendedResponse> {
        return super.call("newsfeed.getRecommended", params)
    }
    /**
     * Returns a list of comments in the current user's newsfeed.
     *
     * @param {{
     *   count: (number|undefined),
     *   filters: (string[]|undefined),
     *   reposts: (string|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   start_from: (string|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetCommentsResponse>}
     */
    public async newsfeedGetComments(params: MethodsProps.NewsfeedGetCommentsParams): Promise<Responses.NewsfeedGetCommentsResponse> {
        return super.call("newsfeed.getComments", params)
    }
    /**
     * Returns a list of posts on user walls in which the current user is mentioned.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetMentionsResponse>}
     */
    public async newsfeedGetMentions(params: MethodsProps.NewsfeedGetMentionsParams): Promise<Responses.NewsfeedGetMentionsResponse> {
        return super.call("newsfeed.getMentions", params)
    }
    /**
     * Returns a list of users and communities banned from the current user's newsfeed.
     *
     * @param {{
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetBannedResponse>}
     */
    public async newsfeedGetBanned(params: MethodsProps.NewsfeedGetBannedParams): Promise<Responses.NewsfeedGetBannedResponse> {
        return super.call("newsfeed.getBanned", params)
    }
    /**
     * Prevents news from specified users and communities from appearing in the current user's newsfeed.
     *
     * @param {{
     *   user_ids: (number[]|undefined),
     *   group_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedAddBan(params: MethodsProps.NewsfeedAddBanParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.addBan", params)
    }
    /**
     * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
     *
     * @param {{
     *   user_ids: (number[]|undefined),
     *   group_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedDeleteBan(params: MethodsProps.NewsfeedDeleteBanParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.deleteBan", params)
    }
    /**
     * Hides an item from the newsfeed.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedIgnoreItem(params: MethodsProps.NewsfeedIgnoreItemParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.ignoreItem", params)
    }
    /**
     * Returns a hidden item to the newsfeed.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedUnignoreItem(params: MethodsProps.NewsfeedUnignoreItemParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.unignoreItem", params)
    }
    /**
     * Returns search results by statuses.
     *
     * @param {{
     *   q: (string|undefined),
     *   extended: (boolean|undefined),
     *   count: (number|undefined),
     *   latitude: (number|undefined),
     *   longitude: (number|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   start_from: (string|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedSearchResponse>}
     */
    public async newsfeedSearch(params: MethodsProps.NewsfeedSearchParams): Promise<Responses.NewsfeedSearchResponse> {
        return super.call("newsfeed.search", params)
    }
    /**
     * Returns a list of newsfeeds followed by the current user.
     *
     * @param {{
     *   list_ids: (number[]|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetListsResponse>}
     */
    public async newsfeedGetLists(params: MethodsProps.NewsfeedGetListsParams): Promise<Responses.NewsfeedGetListsResponse> {
        return super.call("newsfeed.getLists", params)
    }
    /**
     * Creates and edits user newsfeed lists
     *
     * @param {{
     *   list_id: (number|undefined),
     *   title: (string),
     *   source_ids: (number[]|undefined),
     *   no_reposts: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedSaveListResponse>}
     */
    public async newsfeedSaveList(params: MethodsProps.NewsfeedSaveListParams): Promise<Responses.NewsfeedSaveListResponse> {
        return super.call("newsfeed.saveList", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   list_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedDeleteList(params: MethodsProps.NewsfeedDeleteListParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.deleteList", params)
    }
    /**
     * Unsubscribes the current user from specified newsfeeds.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number|undefined),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async newsfeedUnsubscribe(params: MethodsProps.NewsfeedUnsubscribeParams): Promise<Responses.OkResponse> {
        return super.call("newsfeed.unsubscribe", params)
    }
    /**
     * Returns communities and users that current user is suggested to follow.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   shuffle: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NewsfeedGetSuggestedSourcesResponse>}
     */
    public async newsfeedGetSuggestedSources(params: MethodsProps.NewsfeedGetSuggestedSourcesParams): Promise<Responses.NewsfeedGetSuggestedSourcesResponse> {
        return super.call("newsfeed.getSuggestedSources", params)
    }
    /**
     * Returns a list of IDs of users who added the specified object to their 'Likes' list.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number|undefined),
     *   item_id: (number|undefined),
     *   page_url: (string|undefined),
     *   filter: (string|undefined),
     *   friends_only: (boolean|undefined),
     *   extended: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   skip_own: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LikesGetListResponse>}
     */
    public async likesGetList(params: MethodsProps.LikesGetListParams): Promise<Responses.LikesGetListResponse> {
        return super.call("likes.getList", params)
    }
    /**
     * Adds the specified object to the 'Likes' list of the current user.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number|undefined),
     *   item_id: (number),
     *   access_key: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LikesAddResponse>}
     */
    public async likesAdd(params: MethodsProps.LikesAddParams): Promise<Responses.LikesAddResponse> {
        return super.call("likes.add", params)
    }
    /**
     * Deletes the specified object from the 'Likes' list of the current user.
     *
     * @param {{
     *   type: (string),
     *   owner_id: (number|undefined),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LikesDeleteResponse>}
     */
    public async likesDelete(params: MethodsProps.LikesDeleteParams): Promise<Responses.LikesDeleteResponse> {
        return super.call("likes.delete", params)
    }
    /**
     * Checks for the object in the 'Likes' list of the specified user.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   type: (string),
     *   owner_id: (number|undefined),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.LikesIsLikedResponse>}
     */
    public async likesIsLiked(params: MethodsProps.LikesIsLikedParams): Promise<Responses.LikesIsLikedResponse> {
        return super.call("likes.isLiked", params)
    }
    /**
     * Returns detailed information about a poll by its ID.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   is_board: (boolean|undefined),
     *   poll_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PollsGetByIdResponse>}
     */
    public async pollsGetById(params: MethodsProps.PollsGetByIdParams): Promise<Responses.PollsGetByIdResponse> {
        return super.call("polls.getById", params)
    }
    /**
     * Adds the current user's vote to the selected answer in the poll.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   poll_id: (number),
     *   answer_id: (number),
     *   is_board: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PollsAddVoteResponse>}
     */
    public async pollsAddVote(params: MethodsProps.PollsAddVoteParams): Promise<Responses.PollsAddVoteResponse> {
        return super.call("polls.addVote", params)
    }
    /**
     * Deletes the current user's vote from the selected answer in the poll.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   poll_id: (number),
     *   answer_id: (number),
     *   is_board: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PollsDeleteVoteResponse>}
     */
    public async pollsDeleteVote(params: MethodsProps.PollsDeleteVoteParams): Promise<Responses.PollsDeleteVoteResponse> {
        return super.call("polls.deleteVote", params)
    }
    /**
     * Returns a list of IDs of users who selected specific answers in the poll.
     *
     * @param {{
     *   owner_id: (number|undefined),
     *   poll_id: (number),
     *   answer_ids: (number[]),
     *   is_board: (boolean|undefined),
     *   friends_only: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PollsGetVotersResponse>}
     */
    public async pollsGetVoters(params: MethodsProps.PollsGetVotersParams): Promise<Responses.PollsGetVotersResponse> {
        return super.call("polls.getVoters", params)
    }
    /**
     * Creates polls that can be attached to the users' or communities' posts.
     *
     * @param {{
     *   question: (string|undefined),
     *   is_anonymous: (boolean|undefined),
     *   owner_id: (number|undefined),
     *   add_answers: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.PollsCreateResponse>}
     */
    public async pollsCreate(params: MethodsProps.PollsCreateParams): Promise<Responses.PollsCreateResponse> {
        return super.call("polls.create", params)
    }
    /**
     * Edits created polls
     *
     * @param {{
     *   owner_id: (number),
     *   poll_id: (number),
     *   question: (string|undefined),
     *   add_answers: (string|undefined),
     *   edit_answers: (string|undefined),
     *   delete_answers: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async pollsEdit(params: MethodsProps.PollsEditParams): Promise<Responses.OkResponse> {
        return super.call("polls.edit", params)
    }
    /**
     * Returns detailed information about user or community documents.
     *
     * @param {{
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   owner_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsGetResponse>}
     */
    public async docsGet(params: MethodsProps.DocsGetParams): Promise<Responses.DocsGetResponse> {
        return super.call("docs.get", params)
    }
    /**
     * Returns information about documents by their IDs.
     *
     * @param {{
     *   docs: (string[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsGetByIdResponse>}
     */
    public async docsGetById(params: MethodsProps.DocsGetByIdParams): Promise<Responses.DocsGetByIdResponse> {
        return super.call("docs.getById", params)
    }
    /**
     * Returns the server address for document upload.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async docsGetUploadServer(params: MethodsProps.DocsGetUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("docs.getUploadServer", params)
    }
    /**
     * Returns the server address for document upload onto a user's or community's wall.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async docsGetWallUploadServer(params: MethodsProps.DocsGetWallUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("docs.getWallUploadServer", params)
    }
    /**
     * Returns the server address for document upload.
     *
     * @param {{
     *   type: (string|undefined),
     *   peer_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.BaseGetUploadServerResponse>}
     */
    public async docsGetMessagesUploadServer(params: MethodsProps.DocsGetMessagesUploadServerParams): Promise<Responses.BaseGetUploadServerResponse> {
        return super.call("docs.getMessagesUploadServer", params)
    }
    /**
     * Saves a document after [vk.com/dev/upload_files_2|uploading it to a server].
     *
     * @param {{
     *   file: (string),
     *   title: (string|undefined),
     *   tags: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsSaveResponse>}
     */
    public async docsSave(params: MethodsProps.DocsSaveParams): Promise<Responses.DocsSaveResponse> {
        return super.call("docs.save", params)
    }
    /**
     * Deletes a user or community document.
     *
     * @param {{
     *   owner_id: (number),
     *   doc_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async docsDelete(params: MethodsProps.DocsDeleteParams): Promise<Responses.OkResponse> {
        return super.call("docs.delete", params)
    }
    /**
     * Copies a document to a user's or community's document list.
     *
     * @param {{
     *   owner_id: (number),
     *   doc_id: (number),
     *   access_key: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsAddResponse>}
     */
    public async docsAdd(params: MethodsProps.DocsAddParams): Promise<Responses.DocsAddResponse> {
        return super.call("docs.add", params)
    }
    /**
     * Returns documents types available for current user.
     *
     * @param {{
     *   owner_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsGetTypesResponse>}
     */
    public async docsGetTypes(params: MethodsProps.DocsGetTypesParams): Promise<Responses.DocsGetTypesResponse> {
        return super.call("docs.getTypes", params)
    }
    /**
     * Returns a list of documents matching the search criteria.
     *
     * @param {{
     *   q: (string),
     *   search_own: (boolean|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DocsSearchResponse>}
     */
    public async docsSearch(params: MethodsProps.DocsSearchParams): Promise<Responses.DocsSearchResponse> {
        return super.call("docs.search", params)
    }
    /**
     * Edits a document.
     *
     * @param {{
     *   owner_id: (number),
     *   doc_id: (number),
     *   title: (string|undefined),
     *   tags: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async docsEdit(params: MethodsProps.DocsEditParams): Promise<Responses.OkResponse> {
        return super.call("docs.edit", params)
    }
    /**
     * Returns a list of users whom the current user has bookmarked.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetUsersResponse>}
     */
    public async faveGetUsers(params: MethodsProps.FaveGetUsersParams): Promise<Responses.FaveGetUsersResponse> {
        return super.call("fave.getUsers", params)
    }
    /**
     * Returns a list of photos that the current user has liked.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   photo_sizes: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetPhotosResponse>}
     */
    public async faveGetPhotos(params: MethodsProps.FaveGetPhotosParams): Promise<Responses.FaveGetPhotosResponse> {
        return super.call("fave.getPhotos", params)
    }
    /**
     * Returns a list of wall posts that the current user has liked.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetPostsResponse>}
     */
    public async faveGetPosts(params: MethodsProps.FaveGetPostsParams): Promise<Responses.FaveGetPostsResponse> {
        return super.call("fave.getPosts", params)
    }
    /**
     * Returns a list of videos that the current user has liked.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetVideosResponse>}
     */
    public async faveGetVideos(params: MethodsProps.FaveGetVideosParams): Promise<Responses.FaveGetVideosResponse> {
        return super.call("fave.getVideos", params)
    }
    /**
     * Returns a list of links that the current user has bookmarked.
     *
     * @param {{
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetLinksResponse>}
     */
    public async faveGetLinks(params: MethodsProps.FaveGetLinksParams): Promise<Responses.FaveGetLinksResponse> {
        return super.call("fave.getLinks", params)
    }
    /**
     * Returns market items bookmarked by current user.
     *
     * @param {{
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.FaveGetMarketItemsResponse>}
     */
    public async faveGetMarketItems(params: MethodsProps.FaveGetMarketItemsParams): Promise<Responses.FaveGetMarketItemsResponse> {
        return super.call("fave.getMarketItems", params)
    }
    /**
     * Adds a profile to user faves.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveAddUser(params: MethodsProps.FaveAddUserParams): Promise<Responses.OkResponse> {
        return super.call("fave.addUser", params)
    }
    /**
     * Removes a profile from user faves.
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveRemoveUser(params: MethodsProps.FaveRemoveUserParams): Promise<Responses.OkResponse> {
        return super.call("fave.removeUser", params)
    }
    /**
     * Adds a community to user faves.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveAddGroup(params: MethodsProps.FaveAddGroupParams): Promise<Responses.OkResponse> {
        return super.call("fave.addGroup", params)
    }
    /**
     * Removes a community from user faves.
     *
     * @param {{
     *   group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveRemoveGroup(params: MethodsProps.FaveRemoveGroupParams): Promise<Responses.OkResponse> {
        return super.call("fave.removeGroup", params)
    }
    /**
     * Adds a link to user faves.
     *
     * @param {{
     *   link: (string),
     *   text: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveAddLink(params: MethodsProps.FaveAddLinkParams): Promise<Responses.OkResponse> {
        return super.call("fave.addLink", params)
    }
    /**
     * Removes link from the user's faves.
     *
     * @param {{
     *   link_id: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async faveRemoveLink(params: MethodsProps.FaveRemoveLinkParams): Promise<Responses.OkResponse> {
        return super.call("fave.removeLink", params)
    }
    /**
     * Returns a list of notifications about other users' feedback to the current user's wall posts.
     *
     * @param {{
     *   count: (number|undefined),
     *   start_from: (string|undefined),
     *   filters: (string[]|undefined),
     *   start_time: (number|undefined),
     *   end_time: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotificationsGetResponse>}
     */
    public async notificationsGet(params: MethodsProps.NotificationsGetParams): Promise<Responses.NotificationsGetResponse> {
        return super.call("notifications.get", params)
    }
    /**
     * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.NotificationsMarkAsViewedResponse>}
     */
    public async notificationsMarkAsViewed(params: MethodsProps.NotificationsMarkAsViewedParams): Promise<Responses.NotificationsMarkAsViewedResponse> {
        return super.call("notifications.markAsViewed", params)
    }
    /**
     * Returns statistics of a community or an application.
     *
     * @param {{
     *   group_id: (number|undefined),
     *   app_id: (number|undefined),
     *   date_from: (string|undefined),
     *   date_to: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StatsGetResponse>}
     */
    public async statsGet(params: MethodsProps.StatsGetParams): Promise<Responses.StatsGetResponse> {
        return super.call("stats.get", params)
    }
    /**
     * undefined
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async statsTrackVisitor(params: MethodsProps.StatsTrackVisitorParams): Promise<Responses.OkResponse> {
        return super.call("stats.trackVisitor", params)
    }
    /**
     * Returns stats for a wall post.
     *
     * @param {{
     *   owner_id: (number),
     *   post_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.StatsGetPostReachResponse>}
     */
    public async statsGetPostReach(params: MethodsProps.StatsGetPostReachParams): Promise<Responses.StatsGetPostReachResponse> {
        return super.call("stats.getPostReach", params)
    }
    /**
     * Allows the programmer to do a quick search for any substring.
     *
     * @param {{
     *   q: (string|undefined),
     *   offset: (number|undefined),
     *   limit: (number|undefined),
     *   filters: (string[]|undefined),
     *   search_global: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SearchGetHintsResponse>}
     */
    public async searchGetHints(params: MethodsProps.SearchGetHintsParams): Promise<Responses.SearchGetHintsResponse> {
        return super.call("search.getHints", params)
    }
    /**
     * Returns a list of applications (apps) available to users in the App Catalog.
     *
     * @param {{
     *   sort: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number),
     *   platform: (string|undefined),
     *   extended: (boolean|undefined),
     *   return_friends: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   q: (string|undefined),
     *   genre_id: (number|undefined),
     *   filter: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsGetCatalogResponse>}
     */
    public async appsGetCatalog(params: MethodsProps.AppsGetCatalogParams): Promise<Responses.AppsGetCatalogResponse> {
        return super.call("apps.getCatalog", params)
    }
    /**
     * Returns applications data.
     *
     * @param {{
     *   app_id: (number|undefined),
     *   app_ids: (string[]|undefined),
     *   platform: (string|undefined),
     *   fields: (string[]|undefined),
     *   name_case: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsGetResponse>}
     */
    public async appsGet(params: MethodsProps.AppsGetParams): Promise<Responses.AppsGetResponse> {
        return super.call("apps.get", params)
    }
    /**
     * Sends a request to another user in an app that uses VK authorization.
     *
     * @param {{
     *   user_id: (number),
     *   text: (string|undefined),
     *   type: (string|undefined),
     *   name: (string|undefined),
     *   key: (string|undefined),
     *   separate: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsSendRequestResponse>}
     */
    public async appsSendRequest(params: MethodsProps.AppsSendRequestParams): Promise<Responses.AppsSendRequestResponse> {
        return super.call("apps.sendRequest", params)
    }
    /**
     * Deletes all request notifications from the current app.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async appsDeleteAppRequests(params: MethodsProps.AppsDeleteAppRequestsParams): Promise<Responses.OkResponse> {
        return super.call("apps.deleteAppRequests", params)
    }
    /**
     * Creates friends list for requests and invites in current app.
     *
     * @param {{
     *   count: (number|undefined),
     *   type: (string|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsGetFriendsListResponse>}
     */
    public async appsGetFriendsList(params: MethodsProps.AppsGetFriendsListParams): Promise<Responses.AppsGetFriendsListResponse> {
        return super.call("apps.getFriendsList", params)
    }
    /**
     * Returns players rating in the game.
     *
     * @param {{
     *   type: (string),
     *   global: (boolean|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsGetLeaderboardResponse>}
     */
    public async appsGetLeaderboard(params: MethodsProps.AppsGetLeaderboardParams): Promise<Responses.AppsGetLeaderboardResponse> {
        return super.call("apps.getLeaderboard", params)
    }
    /**
     * Adds user activity information to an application
     *
     * @param {{
     *   user_id: (number),
     *   activity_id: (number),
     *   value: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async secureAddAppEvent(params: MethodsProps.SecureAddAppEventParams): Promise<Responses.OkResponse> {
        return super.call("secure.addAppEvent", params)
    }
    /**
     * Returns user score in app
     *
     * @param {{
     *   user_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AppsGetScoreResponse>}
     */
    public async appsGetScore(params: MethodsProps.AppsGetScoreParams): Promise<Responses.AppsGetScoreResponse> {
        return super.call("apps.getScore", params)
    }
    /**
     * Checks whether a link is blocked in VK.
     *
     * @param {{
     *   url: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsCheckLinkResponse>}
     */
    public async utilsCheckLink(params: MethodsProps.UtilsCheckLinkParams): Promise<Responses.UtilsCheckLinkResponse> {
        return super.call("utils.checkLink", params)
    }
    /**
     * Deletes shortened link from user's list.
     *
     * @param {{
     *   key: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async utilsDeleteFromLastShortened(params: MethodsProps.UtilsDeleteFromLastShortenedParams): Promise<Responses.OkResponse> {
        return super.call("utils.deleteFromLastShortened", params)
    }
    /**
     * Returns a list of user's shortened links.
     *
     * @param {{
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsGetLastShortenedLinksResponse>}
     */
    public async utilsGetLastShortenedLinks(params: MethodsProps.UtilsGetLastShortenedLinksParams): Promise<Responses.UtilsGetLastShortenedLinksResponse> {
        return super.call("utils.getLastShortenedLinks", params)
    }
    /**
     * Returns stats data for shortened link.
     *
     * @param {{
     *   key: (string),
     *   access_key: (string|undefined),
     *   interval: (string|undefined),
     *   intervals_count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsGetLinkStatsResponse>}
     */
    public async utilsGetLinkStats(params: MethodsProps.UtilsGetLinkStatsParams): Promise<Responses.UtilsGetLinkStatsResponse> {
        return super.call("utils.getLinkStats", params)
    }
    /**
     * Allows to receive a link shortened via vk.cc.
     *
     * @param {{
     *   url: (string),
     *   private: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsGetShortLinkResponse>}
     */
    public async utilsGetShortLink(params: MethodsProps.UtilsGetShortLinkParams): Promise<Responses.UtilsGetShortLinkResponse> {
        return super.call("utils.getShortLink", params)
    }
    /**
     * Detects a type of object (e.g., user, community, application) and its ID by screen name.
     *
     * @param {{
     *   screen_name: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsResolveScreenNameResponse>}
     */
    public async utilsResolveScreenName(params: MethodsProps.UtilsResolveScreenNameParams): Promise<Responses.UtilsResolveScreenNameResponse> {
        return super.call("utils.resolveScreenName", params)
    }
    /**
     * Returns the current time of the VK server.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.UtilsGetServerTimeResponse>}
     */
    public async utilsGetServerTime(params: MethodsProps.UtilsGetServerTimeParams): Promise<Responses.UtilsGetServerTimeResponse> {
        return super.call("utils.getServerTime", params)
    }
    /**
     * Returns a list of countries.
     *
     * @param {{
     *   need_all: (boolean|undefined),
     *   code: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetCountriesResponse>}
     */
    public async databaseGetCountries(params: MethodsProps.DatabaseGetCountriesParams): Promise<Responses.DatabaseGetCountriesResponse> {
        return super.call("database.getCountries", params)
    }
    /**
     * Returns a list of regions.
     *
     * @param {{
     *   country_id: (number),
     *   q: (string|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetRegionsResponse>}
     */
    public async databaseGetRegions(params: MethodsProps.DatabaseGetRegionsParams): Promise<Responses.DatabaseGetRegionsResponse> {
        return super.call("database.getRegions", params)
    }
    /**
     * Returns information about streets by their IDs.
     *
     * @param {{
     *   street_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetStreetsByIdResponse>}
     */
    public async databaseGetStreetsById(params: MethodsProps.DatabaseGetStreetsByIdParams): Promise<Responses.DatabaseGetStreetsByIdResponse> {
        return super.call("database.getStreetsById", params)
    }
    /**
     * Returns information about countries by their IDs.
     *
     * @param {{
     *   country_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetCountriesByIdResponse>}
     */
    public async databaseGetCountriesById(params: MethodsProps.DatabaseGetCountriesByIdParams): Promise<Responses.DatabaseGetCountriesByIdResponse> {
        return super.call("database.getCountriesById", params)
    }
    /**
     * Returns a list of cities.
     *
     * @param {{
     *   country_id: (number),
     *   region_id: (number|undefined),
     *   q: (string|undefined),
     *   need_all: (boolean|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetCitiesResponse>}
     */
    public async databaseGetCities(params: MethodsProps.DatabaseGetCitiesParams): Promise<Responses.DatabaseGetCitiesResponse> {
        return super.call("database.getCities", params)
    }
    /**
     * Returns information about cities by their IDs.
     *
     * @param {{
     *   city_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetCitiesByIdResponse>}
     */
    public async databaseGetCitiesById(params: MethodsProps.DatabaseGetCitiesByIdParams): Promise<Responses.DatabaseGetCitiesByIdResponse> {
        return super.call("database.getCitiesById", params)
    }
    /**
     * Returns a list of higher education institutions.
     *
     * @param {{
     *   q: (string|undefined),
     *   country_id: (number|undefined),
     *   city_id: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetUniversitiesResponse>}
     */
    public async databaseGetUniversities(params: MethodsProps.DatabaseGetUniversitiesParams): Promise<Responses.DatabaseGetUniversitiesResponse> {
        return super.call("database.getUniversities", params)
    }
    /**
     * Returns a list of schools.
     *
     * @param {{
     *   q: (string|undefined),
     *   city_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetSchoolsResponse>}
     */
    public async databaseGetSchools(params: MethodsProps.DatabaseGetSchoolsParams): Promise<Responses.DatabaseGetSchoolsResponse> {
        return super.call("database.getSchools", params)
    }
    /**
     * Returns a list of school classes specified for the country.
     *
     * @param {{
     *   country_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetSchoolClassesResponse>}
     */
    public async databaseGetSchoolClasses(params: MethodsProps.DatabaseGetSchoolClassesParams): Promise<Responses.DatabaseGetSchoolClassesResponse> {
        return super.call("database.getSchoolClasses", params)
    }
    /**
     * Returns a list of faculties (i.e., university departments).
     *
     * @param {{
     *   university_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetFacultiesResponse>}
     */
    public async databaseGetFaculties(params: MethodsProps.DatabaseGetFacultiesParams): Promise<Responses.DatabaseGetFacultiesResponse> {
        return super.call("database.getFaculties", params)
    }
    /**
     * Returns list of chairs on a specified faculty.
     *
     * @param {{
     *   faculty_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.DatabaseGetChairsResponse>}
     */
    public async databaseGetChairs(params: MethodsProps.DatabaseGetChairsParams): Promise<Responses.DatabaseGetChairsResponse> {
        return super.call("database.getChairs", params)
    }
    /**
     * Returns a list of user gifts.
     *
     * @param {{
     *   user_id: (number|undefined),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.GiftsGetResponse>}
     */
    public async giftsGet(params: MethodsProps.GiftsGetParams): Promise<Responses.GiftsGetResponse> {
        return super.call("gifts.get", params)
    }
    /**
     * Returns a list of advertising accounts.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetAccountsResponse>}
     */
    public async adsGetAccounts(params: MethodsProps.AdsGetAccountsParams): Promise<Responses.AdsGetAccountsResponse> {
        return super.call("ads.getAccounts", params)
    }
    /**
     * Returns a list of advertising agency's clients.
     *
     * @param {{
     *   account_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetClientsResponse>}
     */
    public async adsGetClients(params: MethodsProps.AdsGetClientsParams): Promise<Responses.AdsGetClientsResponse> {
        return super.call("ads.getClients", params)
    }
    /**
     * Creates clients of an advertising agency.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsCreateClientsResponse>}
     */
    public async adsCreateClients(params: MethodsProps.AdsCreateClientsParams): Promise<Responses.AdsCreateClientsResponse> {
        return super.call("ads.createClients", params)
    }
    /**
     * Edits clients of an advertising agency.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsUpdateClientsResponse>}
     */
    public async adsUpdateClients(params: MethodsProps.AdsUpdateClientsParams): Promise<Responses.AdsUpdateClientsResponse> {
        return super.call("ads.updateClients", params)
    }
    /**
     * Archives clients of an advertising agency.
     *
     * @param {{
     *   account_id: (number),
     *   ids: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsDeleteClientsResponse>}
     */
    public async adsDeleteClients(params: MethodsProps.AdsDeleteClientsParams): Promise<Responses.AdsDeleteClientsResponse> {
        return super.call("ads.deleteClients", params)
    }
    /**
     * Returns a list of campaigns in an advertising account.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   include_deleted: (boolean|undefined),
     *   campaign_ids: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetCampaignsResponse>}
     */
    public async adsGetCampaigns(params: MethodsProps.AdsGetCampaignsParams): Promise<Responses.AdsGetCampaignsResponse> {
        return super.call("ads.getCampaigns", params)
    }
    /**
     * Creates advertising campaigns.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsCreateCampaignsResponse>}
     */
    public async adsCreateCampaigns(params: MethodsProps.AdsCreateCampaignsParams): Promise<Responses.AdsCreateCampaignsResponse> {
        return super.call("ads.createCampaigns", params)
    }
    /**
     * Edits advertising campaigns.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsUpdateCampaignsResponse>}
     */
    public async adsUpdateCampaigns(params: MethodsProps.AdsUpdateCampaignsParams): Promise<Responses.AdsUpdateCampaignsResponse> {
        return super.call("ads.updateCampaigns", params)
    }
    /**
     * Archives advertising campaigns.
     *
     * @param {{
     *   account_id: (number),
     *   ids: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsDeleteCampaignsResponse>}
     */
    public async adsDeleteCampaigns(params: MethodsProps.AdsDeleteCampaignsParams): Promise<Responses.AdsDeleteCampaignsResponse> {
        return super.call("ads.deleteCampaigns", params)
    }
    /**
     * Returns number of ads.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   include_deleted: (boolean|undefined),
     *   campaign_ids: (string|undefined),
     *   ad_ids: (string|undefined),
     *   limit: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetAdsResponse>}
     */
    public async adsGetAds(params: MethodsProps.AdsGetAdsParams): Promise<Responses.AdsGetAdsResponse> {
        return super.call("ads.getAds", params)
    }
    /**
     * Returns descriptions of ad layouts.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   include_deleted: (boolean|undefined),
     *   campaign_ids: (string|undefined),
     *   ad_ids: (string|undefined),
     *   limit: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetAdsLayoutResponse>}
     */
    public async adsGetAdsLayout(params: MethodsProps.AdsGetAdsLayoutParams): Promise<Responses.AdsGetAdsLayoutResponse> {
        return super.call("ads.getAdsLayout", params)
    }
    /**
     * Returns ad targeting parameters.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   include_deleted: (boolean|undefined),
     *   campaign_ids: (string|undefined),
     *   ad_ids: (string|undefined),
     *   limit: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetAdsTargetingResponse>}
     */
    public async adsGetAdsTargeting(params: MethodsProps.AdsGetAdsTargetingParams): Promise<Responses.AdsGetAdsTargetingResponse> {
        return super.call("ads.getAdsTargeting", params)
    }
    /**
     * Creates ads.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsCreateAdsResponse>}
     */
    public async adsCreateAds(params: MethodsProps.AdsCreateAdsParams): Promise<Responses.AdsCreateAdsResponse> {
        return super.call("ads.createAds", params)
    }
    /**
     * Edits ads.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsUpdateAdsResponse>}
     */
    public async adsUpdateAds(params: MethodsProps.AdsUpdateAdsParams): Promise<Responses.AdsUpdateAdsResponse> {
        return super.call("ads.updateAds", params)
    }
    /**
     * Archives ads.
     *
     * @param {{
     *   account_id: (number),
     *   ids: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsDeleteAdsResponse>}
     */
    public async adsDeleteAds(params: MethodsProps.AdsDeleteAdsParams): Promise<Responses.AdsDeleteAdsResponse> {
        return super.call("ads.deleteAds", params)
    }
    /**
     * Allows to check the ad link.
     *
     * @param {{
     *   account_id: (number),
     *   link_type: (string),
     *   link_url: (string),
     *   campaign_id: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsCheckLinkResponse>}
     */
    public async adsCheckLink(params: MethodsProps.AdsCheckLinkParams): Promise<Responses.AdsCheckLinkResponse> {
        return super.call("ads.checkLink", params)
    }
    /**
     * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
     *
     * @param {{
     *   account_id: (number),
     *   ids_type: (string),
     *   ids: (string),
     *   period: (string),
     *   date_from: (string),
     *   date_to: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetStatisticsResponse>}
     */
    public async adsGetStatistics(params: MethodsProps.AdsGetStatisticsParams): Promise<Responses.AdsGetStatisticsResponse> {
        return super.call("ads.getStatistics", params)
    }
    /**
     * Returns demographics for ads or campaigns.
     *
     * @param {{
     *   account_id: (number),
     *   ids_type: (string),
     *   ids: (string),
     *   period: (string),
     *   date_from: (string),
     *   date_to: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetDemographicsResponse>}
     */
    public async adsGetDemographics(params: MethodsProps.AdsGetDemographicsParams): Promise<Responses.AdsGetDemographicsResponse> {
        return super.call("ads.getDemographics", params)
    }
    /**
     * Allows to get detailed information about the ad post reach.
     *
     * @param {{
     *   account_id: (number),
     *   ads_ids: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetAdsPostsReachResponse>}
     */
    public async adsGetAdsPostsReach(params: MethodsProps.AdsGetAdsPostsReachParams): Promise<Responses.AdsGetAdsPostsReachResponse> {
        return super.call("ads.getAdsPostsReach", params)
    }
    /**
     * Returns current budget of the advertising account.
     *
     * @param {{
     *   account_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetBudgetResponse>}
     */
    public async adsGetBudget(params: MethodsProps.AdsGetBudgetParams): Promise<Responses.AdsGetBudgetResponse> {
        return super.call("ads.getBudget", params)
    }
    /**
     * Returns a list of managers and supervisors of advertising account.
     *
     * @param {{
     *   account_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetOfficeUsersResponse>}
     */
    public async adsGetOfficeUsers(params: MethodsProps.AdsGetOfficeUsersParams): Promise<Responses.AdsGetOfficeUsersResponse> {
        return super.call("ads.getOfficeUsers", params)
    }
    /**
     * Adds managers and/or supervisors to advertising account.
     *
     * @param {{
     *   account_id: (number),
     *   data: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsAddOfficeUsersResponse>}
     */
    public async adsAddOfficeUsers(params: MethodsProps.AdsAddOfficeUsersParams): Promise<Responses.AdsAddOfficeUsersResponse> {
        return super.call("ads.addOfficeUsers", params)
    }
    /**
     * Removes managers and/or supervisors from advertising account.
     *
     * @param {{
     *   account_id: (number),
     *   ids: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsRemoveOfficeUsersResponse>}
     */
    public async adsRemoveOfficeUsers(params: MethodsProps.AdsRemoveOfficeUsersParams): Promise<Responses.AdsRemoveOfficeUsersResponse> {
        return super.call("ads.removeOfficeUsers", params)
    }
    /**
     * Returns the size of targeting audience, and also recommended values for CPC and CPM.
     *
     * @param {{
     *   account_id: (number),
     *   criteria: (string|undefined),
     *   ad_id: (number|undefined),
     *   ad_format: (number|undefined),
     *   ad_platform: (string|undefined),
     *   link_url: (string),
     *   link_domain: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetTargetingStatsResponse>}
     */
    public async adsGetTargetingStats(params: MethodsProps.AdsGetTargetingStatsParams): Promise<Responses.AdsGetTargetingStatsResponse> {
        return super.call("ads.getTargetingStats", params)
    }
    /**
     * Returns a set of auto-suggestions for various targeting parameters.
     *
     * @param {{
     *   section: (string),
     *   ids: (string|undefined),
     *   q: (string|undefined),
     *   country: (number|undefined),
     *   cities: (string|undefined),
     *   lang: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetSuggestionsResponse>}
     */
    public async adsGetSuggestions(params: MethodsProps.AdsGetSuggestionsParams): Promise<Responses.AdsGetSuggestionsResponse> {
        return super.call("ads.getSuggestions", params)
    }
    /**
     * Returns a list of possible ad categories.
     *
     * @param {{
     *   lang: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetCategoriesResponse>}
     */
    public async adsGetCategories(params: MethodsProps.AdsGetCategoriesParams): Promise<Responses.AdsGetCategoriesResponse> {
        return super.call("ads.getCategories", params)
    }
    /**
     * Returns URL to upload an ad photo to.
     *
     * @param {{
     *   ad_format: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetUploadURLResponse>}
     */
    public async adsGetUploadURL(params: MethodsProps.AdsGetUploadURLParams): Promise<Responses.AdsGetUploadURLResponse> {
        return super.call("ads.getUploadURL", params)
    }
    /**
     * Returns URL to upload an ad video to.
     *
     * @param {{
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetVideoUploadURLResponse>}
     */
    public async adsGetVideoUploadURL(params: MethodsProps.AdsGetVideoUploadURLParams): Promise<Responses.AdsGetVideoUploadURLResponse> {
        return super.call("ads.getVideoUploadURL", params)
    }
    /**
     * Returns information about current state of a counter — number of remaining runs of methods and time to the next counter nulling in seconds.
     *
     * @param {{
     *   account_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetFloodStatsResponse>}
     */
    public async adsGetFloodStats(params: MethodsProps.AdsGetFloodStatsParams): Promise<Responses.AdsGetFloodStatsResponse> {
        return super.call("ads.getFloodStats", params)
    }
    /**
     * Returns a reason of ad rejection for pre-moderation.
     *
     * @param {{
     *   account_id: (number),
     *   ad_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetRejectionReasonResponse>}
     */
    public async adsGetRejectionReason(params: MethodsProps.AdsGetRejectionReasonParams): Promise<Responses.AdsGetRejectionReasonResponse> {
        return super.call("ads.getRejectionReason", params)
    }
    /**
     * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   name: (string),
     *   domain: (string|undefined),
     *   lifetime: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsCreateTargetGroupResponse>}
     */
    public async adsCreateTargetGroup(params: MethodsProps.AdsCreateTargetGroupParams): Promise<Responses.AdsCreateTargetGroupResponse> {
        return super.call("ads.createTargetGroup", params)
    }
    /**
     * Edits a retarget group.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   target_group_id: (number),
     *   name: (string),
     *   domain: (string|undefined),
     *   lifetime: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async adsUpdateTargetGroup(params: MethodsProps.AdsUpdateTargetGroupParams): Promise<Responses.OkResponse> {
        return super.call("ads.updateTargetGroup", params)
    }
    /**
     * Deletes a retarget group.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   target_group_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async adsDeleteTargetGroup(params: MethodsProps.AdsDeleteTargetGroupParams): Promise<Responses.OkResponse> {
        return super.call("ads.deleteTargetGroup", params)
    }
    /**
     * Returns a list of target groups.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsGetTargetGroupsResponse>}
     */
    public async adsGetTargetGroups(params: MethodsProps.AdsGetTargetGroupsParams): Promise<Responses.AdsGetTargetGroupsResponse> {
        return super.call("ads.getTargetGroups", params)
    }
    /**
     * Imports a list of advertiser's contacts to count VK registered users against the target group.
     *
     * @param {{
     *   account_id: (number),
     *   client_id: (number|undefined),
     *   target_group_id: (number),
     *   contacts: (string),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.AdsImportTargetContactsResponse>}
     */
    public async adsImportTargetContacts(params: MethodsProps.AdsImportTargetContactsParams): Promise<Responses.AdsImportTargetContactsResponse> {
        return super.call("ads.importTargetContacts", params)
    }
    /**
     * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
     *
     * @param {{
     *   token: (string|undefined),
     *   ip: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.SecureCheckTokenResponse>}
     */
    public async secureCheckToken(params: MethodsProps.SecureCheckTokenParams): Promise<Responses.SecureCheckTokenResponse> {
        return super.call("secure.checkToken", params)
    }
    /**
     * Returns items list for a community.
     *
     * @param {{
     *   owner_id: (number),
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetResponse>}
     */
    public async marketGet(params: MethodsProps.MarketGetParams): Promise<Responses.MarketGetResponse> {
        return super.call("market.get", params)
    }
    /**
     * Returns information about market items by their ids.
     *
     * @param {{
     *   item_ids: (string[]),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetByIdResponse>}
     */
    public async marketGetById(params: MethodsProps.MarketGetByIdParams): Promise<Responses.MarketGetByIdResponse> {
        return super.call("market.getById", params)
    }
    /**
     * Searches market items in a community's catalog
     *
     * @param {{
     *   owner_id: (number),
     *   q: (string|undefined),
     *   price_from: (number|undefined),
     *   price_to: (number|undefined),
     *   tags: (number[]|undefined),
     *   rev: (number|undefined),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   extended: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketSearchResponse>}
     */
    public async marketSearch(params: MethodsProps.MarketSearchParams): Promise<Responses.MarketSearchResponse> {
        return super.call("market.search", params)
    }
    /**
     * Returns community's collections list.
     *
     * @param {{
     *   owner_id: (number),
     *   offset: (number|undefined),
     *   count: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetAlbumsResponse>}
     */
    public async marketGetAlbums(params: MethodsProps.MarketGetAlbumsParams): Promise<Responses.MarketGetAlbumsResponse> {
        return super.call("market.getAlbums", params)
    }
    /**
     * Returns items album's data
     *
     * @param {{
     *   owner_id: (number),
     *   album_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetAlbumByIdResponse>}
     */
    public async marketGetAlbumById(params: MethodsProps.MarketGetAlbumByIdParams): Promise<Responses.MarketGetAlbumByIdResponse> {
        return super.call("market.getAlbumById", params)
    }
    /**
     * Creates a new comment for an item.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   from_group: (boolean|undefined),
     *   reply_to_comment: (number|undefined),
     *   sticker_id: (number|undefined),
     *   guid: (string|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketCreateCommentResponse>}
     */
    public async marketCreateComment(params: MethodsProps.MarketCreateCommentParams): Promise<Responses.MarketCreateCommentResponse> {
        return super.call("market.createComment", params)
    }
    /**
     * Returns comments list for an item.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   need_likes: (boolean|undefined),
     *   start_comment_id: (number|undefined),
     *   count: (number|undefined),
     *   sort: (string|undefined),
     *   extended: (boolean|undefined),
     *   fields: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetCommentsResponse>}
     */
    public async marketGetComments(params: MethodsProps.MarketGetCommentsParams): Promise<Responses.MarketGetCommentsResponse> {
        return super.call("market.getComments", params)
    }
    /**
     * Deletes an item's comment
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketDeleteCommentResponse>}
     */
    public async marketDeleteComment(params: MethodsProps.MarketDeleteCommentParams): Promise<Responses.MarketDeleteCommentResponse> {
        return super.call("market.deleteComment", params)
    }
    /**
     * Restores a recently deleted comment
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketRestoreCommentResponse>}
     */
    public async marketRestoreComment(params: MethodsProps.MarketRestoreCommentParams): Promise<Responses.MarketRestoreCommentResponse> {
        return super.call("market.restoreComment", params)
    }
    /**
     * Chages item comment's text
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   message: (string|undefined),
     *   attachments: (string[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketEditComment(params: MethodsProps.MarketEditCommentParams): Promise<Responses.OkResponse> {
        return super.call("market.editComment", params)
    }
    /**
     * Sends a complaint to the item's comment.
     *
     * @param {{
     *   owner_id: (number),
     *   comment_id: (number),
     *   reason: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketReportComment(params: MethodsProps.MarketReportCommentParams): Promise<Responses.OkResponse> {
        return super.call("market.reportComment", params)
    }
    /**
     * Returns a list of market categories.
     *
     * @param {{
     *   count: (number|undefined),
     *   offset: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketGetCategoriesResponse>}
     */
    public async marketGetCategories(params: MethodsProps.MarketGetCategoriesParams): Promise<Responses.MarketGetCategoriesResponse> {
        return super.call("market.getCategories", params)
    }
    /**
     * Sends a complaint to the item.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   reason: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketReport(params: MethodsProps.MarketReportParams): Promise<Responses.OkResponse> {
        return super.call("market.report", params)
    }
    /**
     * Ads a new item to the market.
     *
     * @param {{
     *   owner_id: (number),
     *   name: (string),
     *   description: (string),
     *   category_id: (number),
     *   price: (number),
     *   deleted: (boolean|undefined),
     *   main_photo_id: (number),
     *   photo_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketAddResponse>}
     */
    public async marketAdd(params: MethodsProps.MarketAddParams): Promise<Responses.MarketAddResponse> {
        return super.call("market.add", params)
    }
    /**
     * Edits an item.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   name: (string),
     *   description: (string),
     *   category_id: (number),
     *   price: (number),
     *   deleted: (boolean|undefined),
     *   main_photo_id: (number),
     *   photo_ids: (number[]|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketEdit(params: MethodsProps.MarketEditParams): Promise<Responses.OkResponse> {
        return super.call("market.edit", params)
    }
    /**
     * Deletes an item.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketDelete(params: MethodsProps.MarketDeleteParams): Promise<Responses.OkResponse> {
        return super.call("market.delete", params)
    }
    /**
     * Restores recently deleted item
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketRestore(params: MethodsProps.MarketRestoreParams): Promise<Responses.OkResponse> {
        return super.call("market.restore", params)
    }
    /**
     * Changes item place in a collection.
     *
     * @param {{
     *   owner_id: (number),
     *   album_id: (number|undefined),
     *   item_id: (number),
     *   before: (number|undefined),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketReorderItems(params: MethodsProps.MarketReorderItemsParams): Promise<Responses.OkResponse> {
        return super.call("market.reorderItems", params)
    }
    /**
     * Reorders the collections list.
     *
     * @param {{
     *   owner_id: (number),
     *   album_id: (number),
     *   before: (number|undefined),
     *   after: (number|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketReorderAlbums(params: MethodsProps.MarketReorderAlbumsParams): Promise<Responses.OkResponse> {
        return super.call("market.reorderAlbums", params)
    }
    /**
     * Creates new collection of items
     *
     * @param {{
     *   owner_id: (number),
     *   title: (string),
     *   photo_id: (number|undefined),
     *   main_album: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.MarketAddAlbumResponse>}
     */
    public async marketAddAlbum(params: MethodsProps.MarketAddAlbumParams): Promise<Responses.MarketAddAlbumResponse> {
        return super.call("market.addAlbum", params)
    }
    /**
     * Edits a collection of items
     *
     * @param {{
     *   owner_id: (number),
     *   album_id: (number),
     *   title: (string),
     *   photo_id: (number|undefined),
     *   main_album: (boolean|undefined),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketEditAlbum(params: MethodsProps.MarketEditAlbumParams): Promise<Responses.OkResponse> {
        return super.call("market.editAlbum", params)
    }
    /**
     * Deletes a collection of items.
     *
     * @param {{
     *   owner_id: (number),
     *   album_id: (number),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketDeleteAlbum(params: MethodsProps.MarketDeleteAlbumParams): Promise<Responses.OkResponse> {
        return super.call("market.deleteAlbum", params)
    }
    /**
     * Removes an item from one or multiple collections.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   album_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketRemoveFromAlbum(params: MethodsProps.MarketRemoveFromAlbumParams): Promise<Responses.OkResponse> {
        return super.call("market.removeFromAlbum", params)
    }
    /**
     * Adds an item to one or multiple collections.
     *
     * @param {{
     *   owner_id: (number),
     *   item_id: (number),
     *   album_ids: (number[]),
     *   access_token: (string|undefined)
     * }} params
     *
     * @returns {Promise<Responses.OkResponse>}
     */
    public async marketAddToAlbum(params: MethodsProps.MarketAddToAlbumParams): Promise<Responses.OkResponse> {
        return super.call("market.addToAlbum", params)
    }
}