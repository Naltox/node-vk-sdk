import {BaseLogger} from "./logger/BaseLogger";
import CallbackQueue from "./CallbackQueue";
import VKApiError from "./VKApiError";
import * as Responses from './Responses'
import * as MethodsProps from './MethodsProps'
const req = require('tiny_request')

const REQUESTS_PER_SECOND = 3
const TIMEOUT = 5000 // 5 seconds
const API_BASE_URL = 'https://api.vk.com/method/'
const API_VERSION = '5.62'

interface VKApiOptions {
    logger?: BaseLogger,
    token?: string,
    timeout?: number,
    requestsPerSecond?: number,
    useQueue?: boolean
}

export class VKApi {
    private _logger: BaseLogger|undefined
    private _queue: CallbackQueue|undefined
    private _timeout: number
    private _token

    constructor(options: VKApiOptions) {
        this._logger = options.logger
        this._token = options.token
        this._timeout = options.timeout || TIMEOUT

        if (options.useQueue)
            this._queue = new CallbackQueue(options.requestsPerSecond || REQUESTS_PER_SECOND)
    }

    public async call(method: string, params: Object, responseType?: Function): Promise<any> {
        params = this.filterParams(params)

        params['v'] = API_VERSION
        params['access_token'] = params['access_token'] || this._token

        if (params['access_token'] == undefined)
            delete params['access_token']

        return new Promise((resolve, reject) => {
            let reqFunc = () => {
                req.post({
                    url: API_BASE_URL + method,
                    query: params,
                    json: true,
                    timeout: this._timeout
                }, (body, response, err) => {
                    this.handleResponse(
                        method,
                        params,
                        responseType,
                        body,
                        response,
                        err,
                        resolve,
                        reject
                    )
                })
            }

            if (this._queue)
                this._queue.push(reqFunc)
            else
                reqFunc()
        })
    }

    private handleResponse(method, params, responseType, body, response, err, resolve, reject) {
        if (!err && response.statusCode == 200 && !body.error) {
            if (responseType) {
                let response

                if (Array.isArray(body.response) || typeof body.response != 'object')
                    response = body
                else
                    response = body.response

                resolve((responseType as any).deserialize(response))
            }

            resolve(body)
            return
        }

        if (body && body.error) {
            reject(VKApiError.deserialize(body.error))

            if (this._logger)
                this._logger.warn('VK Api error\n', {
                    response: JSON.stringify(body),
                    error: VKApiError.deserialize(body.error),
                    method,
                    params
                })

            return
        }

        if (err) {
            if (this._logger)
                this._logger.error('VK Api:\n', {
                    'Networking error:': err,
                    method,
                    params
                })

            return
        }

        if (this._logger)
            this._logger.error('VK Api:\n', {
                'api request error: Body:': body,
                'Error:': err
            })

        reject(err)
    }

    private filterParams(params: Object): Object {
        for (let paramName in params) {
            if (params[paramName] == undefined) {
                delete params[paramName]
            }
        }

        return params
    }

    /**
     * Returns detailed information on users.
     */
    public async usersGet(params: MethodsProps.UsersGetParams): Promise<Responses.UsersGetResponse> {
        return this.call(
            'users.get',
            {
                user_ids: params.userIds,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.UsersGetResponse
        )
    }

    /**
     * Returns a list of users matching the search criteria.
     */
    public async usersSearch(params: MethodsProps.UsersSearchParams): Promise<Responses.UsersSearchResponse> {
        return this.call(
            'users.search',
            {
                q: params.q,
                sort: params.sort,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                city: params.city,
                country: params.country,
                hometown: params.hometown,
                university_country: params.universityCountry,
                university: params.university,
                university_year: params.universityYear,
                university_faculty: params.universityFaculty,
                university_chair: params.universityChair,
                sex: params.sex,
                status: params.status,
                age_from: params.ageFrom,
                age_to: params.ageTo,
                birth_day: params.birthDay,
                birth_month: params.birthMonth,
                birth_year: params.birthYear,
                online: params.online,
                has_photo: params.hasPhoto,
                school_country: params.schoolCountry,
                school_city: params.schoolCity,
                school_class: params.schoolClass,
                school: params.school,
                school_year: params.schoolYear,
                religion: params.religion,
                interests: params.interests,
                company: params.company,
                position: params.position,
                group_id: params.groupId,
                from_list: params.fromList,
                access_token: params.accessToken
            },
            Responses.UsersSearchResponse
        )
    }

    /**
     * Returns information whether a user installed the application.
     */
    public async usersIsAppUser(params: MethodsProps.UsersIsAppUserParams): Promise<Responses.UsersIsAppUserResponse> {
        return this.call(
            'users.isAppUser',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.UsersIsAppUserResponse
        )
    }

    /**
     * Returns a list of IDs of users and communities followed by the user.
     */
    public async usersGetSubscriptions(params: MethodsProps.UsersGetSubscriptionsParams): Promise<Responses.UsersGetSubscriptionsResponse> {
        return this.call(
            'users.getSubscriptions',
            {
                user_id: params.userId,
                extended: params.extended,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.UsersGetSubscriptionsResponse
        )
    }

    /**
     * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
     */
    public async usersGetFollowers(params: MethodsProps.UsersGetFollowersParams): Promise<Responses.UsersGetFollowersResponse> {
        return this.call(
            'users.getFollowers',
            {
                user_id: params.userId,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.UsersGetFollowersResponse
        )
    }

    /**
     * Reports (submits a complain about) a user.;
     */
    public async usersReport(params: MethodsProps.UsersReportParams): Promise<Responses.UsersReportResponse> {
        return this.call(
            'users.report',
            {
                user_id: params.userId,
                type: params.type,
                comment: params.comment,
                access_token: params.accessToken
            },
            Responses.UsersReportResponse
        )
    }

    /**
     * Indexes current user location and returns nearby users.
     */
    public async usersGetNearby(params: MethodsProps.UsersGetNearbyParams): Promise<Responses.UsersGetNearbyResponse> {
        return this.call(
            'users.getNearby',
            {
                latitude: params.latitude,
                longitude: params.longitude,
                accuracy: params.accuracy,
                timeout: params.timeout,
                radius: params.radius,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.UsersGetNearbyResponse
        )
    }

    /**
     * Checks a user's phone number for correctness.
     */
    public async authCheckPhone(params: MethodsProps.AuthCheckPhoneParams): Promise<Responses.AuthCheckPhoneResponse> {
        return this.call(
            'auth.checkPhone',
            {
                phone: params.phone,
                client_id: params.clientId,
                client_secret: params.clientSecret,
                auth_by_phone: params.authByPhone,
                access_token: params.accessToken
            },
            Responses.AuthCheckPhoneResponse
        )
    }

    /**
     * Registers a new user by phone number.
     */
    public async authSignup(params: MethodsProps.AuthSignupParams): Promise<Responses.AuthSignupResponse> {
        return this.call(
            'auth.signup',
            {
                first_name: params.firstName,
                last_name: params.lastName,
                client_id: params.clientId,
                client_secret: params.clientSecret,
                phone: params.phone,
                password: params.password,
                test_mode: params.testMode,
                voice: params.voice,
                sex: params.sex,
                sid: params.sid,
                access_token: params.accessToken
            },
            Responses.AuthSignupResponse
        )
    }

    /**
     * Completes a user's registration (begun with the [vk.com/dev/auth.signup|auth.signup] method) using an authorization code.
     */
    public async authConfirm(params: MethodsProps.AuthConfirmParams): Promise<Responses.AuthConfirmResponse> {
        return this.call(
            'auth.confirm',
            {
                client_id: params.clientId,
                client_secret: params.clientSecret,
                phone: params.phone,
                code: params.code,
                password: params.password,
                test_mode: params.testMode,
                intro: params.intro,
                access_token: params.accessToken
            },
            Responses.AuthConfirmResponse
        )
    }

    /**
     * Allows to restore account access using a code received via SMS.; ; " This method is only available for apps with [vk.com/dev/auth_direct|Direct authorization] access. "
     */
    public async authRestore(params: MethodsProps.AuthRestoreParams): Promise<Responses.AuthRestoreResponse> {
        return this.call(
            'auth.restore',
            {
                phone: params.phone,
                access_token: params.accessToken
            },
            Responses.AuthRestoreResponse
        )
    }

    /**
     * Returns a list of posts on a user wall or community wall.
     */
    public async wallGet(params: MethodsProps.WallGetParams): Promise<Responses.WallGetResponse> {
        return this.call(
            'wall.get',
            {
                owner_id: params.ownerId,
                domain: params.domain,
                offset: params.offset,
                count: params.count,
                filter: params.filter,
                extended: params.extended,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.WallGetResponse
        )
    }

    /**
     * Allows to search posts on user or community walls.
     */
    public async wallSearch(params: MethodsProps.WallSearchParams): Promise<Responses.WallSearchResponse> {
        return this.call(
            'wall.search',
            {
                owner_id: params.ownerId,
                domain: params.domain,
                query: params.query,
                owners_only: params.ownersOnly,
                count: params.count,
                offset: params.offset,
                extended: params.extended,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.WallSearchResponse
        )
    }

    /**
     * Creates an empty photo album.
     */
    public async photosCreateAlbum(params: MethodsProps.PhotosCreateAlbumParams): Promise<Responses.PhotosCreateAlbumResponse> {
        return this.call(
            'photos.createAlbum',
            {
                title: params.title,
                group_id: params.groupId,
                description: params.description,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                upload_by_admins_only: params.uploadByAdminsOnly,
                comments_disabled: params.commentsDisabled,
                access_token: params.accessToken
            },
            Responses.PhotosCreateAlbumResponse
        )
    }

    /**
     * Edits information about a photo album.
     */
    public async photosEditAlbum(params: MethodsProps.PhotosEditAlbumParams): Promise<Responses.PhotosEditAlbumResponse> {
        return this.call(
            'photos.editAlbum',
            {
                album_id: params.albumId,
                title: params.title,
                description: params.description,
                owner_id: params.ownerId,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                upload_by_admins_only: params.uploadByAdminsOnly,
                comments_disabled: params.commentsDisabled,
                access_token: params.accessToken
            },
            Responses.PhotosEditAlbumResponse
        )
    }

    /**
     * Returns a list of a user's or community's photo albums.
     */
    public async photosGetAlbums(params: MethodsProps.PhotosGetAlbumsParams): Promise<Responses.PhotosGetAlbumsResponse> {
        return this.call(
            'photos.getAlbums',
            {
                owner_id: params.ownerId,
                album_ids: params.albumIds,
                offset: params.offset,
                count: params.count,
                need_system: params.needSystem,
                need_covers: params.needCovers,
                photo_sizes: params.photoSizes,
                access_token: params.accessToken
            },
            Responses.PhotosGetAlbumsResponse
        )
    }

    /**
     * Returns a list of a user's or community's photos.
     */
    public async photosGet(params: MethodsProps.PhotosGetParams): Promise<Responses.PhotosGetResponse> {
        return this.call(
            'photos.get',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                photo_ids: params.photoIds,
                rev: params.rev,
                extended: params.extended,
                feed_type: params.feedType,
                feed: params.feed,
                photo_sizes: params.photoSizes,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.PhotosGetResponse
        )
    }

    /**
     * Returns the number of photo albums belonging to a user or community.
     */
    public async photosGetAlbumsCount(params: MethodsProps.PhotosGetAlbumsCountParams): Promise<Responses.PhotosGetAlbumsCountResponse> {
        return this.call(
            'photos.getAlbumsCount',
            {
                user_id: params.userId,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PhotosGetAlbumsCountResponse
        )
    }

    /**
     * Returns information about photos by their IDs.
     */
    public async photosGetById(params: MethodsProps.PhotosGetByIdParams): Promise<Responses.PhotosGetByIdResponse> {
        return this.call(
            'photos.getById',
            {
                photos: params.photos,
                extended: params.extended,
                photo_sizes: params.photoSizes,
                access_token: params.accessToken
            },
            Responses.PhotosGetByIdResponse
        )
    }

    /**
     * Returns the server address for photo upload.
     */
    public async photosGetUploadServer(params: MethodsProps.PhotosGetUploadServerParams): Promise<Responses.PhotosGetUploadServerResponse> {
        return this.call(
            'photos.getUploadServer',
            {
                album_id: params.albumId,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PhotosGetUploadServerResponse
        )
    }

    /**
     * Returns an upload server address for a profile or community photo.
     */
    public async photosGetOwnerPhotoUploadServer(params: MethodsProps.PhotosGetOwnerPhotoUploadServerParams): Promise<Responses.PhotosGetOwnerPhotoUploadServerResponse> {
        return this.call(
            'photos.getOwnerPhotoUploadServer',
            {
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.PhotosGetOwnerPhotoUploadServerResponse
        )
    }

    /**
     * Returns an upload link for chat cover pictures.
     */
    public async photosGetChatUploadServer(params: MethodsProps.PhotosGetChatUploadServerParams): Promise<Responses.PhotosGetChatUploadServerResponse> {
        return this.call(
            'photos.getChatUploadServer',
            {
                chat_id: params.chatId,
                crop_x: params.cropX,
                crop_y: params.cropY,
                crop_width: params.cropWidth,
                access_token: params.accessToken
            },
            Responses.PhotosGetChatUploadServerResponse
        )
    }

    /**
     * Returns the server address for market photo upload.
     */
    public async photosGetMarketUploadServer(params: MethodsProps.PhotosGetMarketUploadServerParams): Promise<Responses.PhotosGetMarketUploadServerResponse> {
        return this.call(
            'photos.getMarketUploadServer',
            {
                group_id: params.groupId,
                main_photo: params.mainPhoto,
                crop_x: params.cropX,
                crop_y: params.cropY,
                crop_width: params.cropWidth,
                access_token: params.accessToken
            },
            Responses.PhotosGetMarketUploadServerResponse
        )
    }

    /**
     * Returns the server address for market album photo upload.
     */
    public async photosGetMarketAlbumUploadServer(params: MethodsProps.PhotosGetMarketAlbumUploadServerParams): Promise<Responses.PhotosGetMarketAlbumUploadServerResponse> {
        return this.call(
            'photos.getMarketAlbumUploadServer',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PhotosGetMarketAlbumUploadServerResponse
        )
    }

    /**
     * Saves market photos after successful uploading.
     */
    public async photosSaveMarketPhoto(params: MethodsProps.PhotosSaveMarketPhotoParams): Promise<Responses.PhotosSaveMarketPhotoResponse> {
        return this.call(
            'photos.saveMarketPhoto',
            {
                group_id: params.groupId,
                photo: params.photo,
                server: params.server,
                hash: params.hash,
                crop_data: params.cropData,
                crop_hash: params.cropHash,
                access_token: params.accessToken
            },
            Responses.PhotosSaveMarketPhotoResponse
        )
    }

    /**
     * Saves market album photos after successful uploading.
     */
    public async photosSaveMarketAlbumPhoto(params: MethodsProps.PhotosSaveMarketAlbumPhotoParams): Promise<Responses.PhotosSaveMarketAlbumPhotoResponse> {
        return this.call(
            'photos.saveMarketAlbumPhoto',
            {
                group_id: params.groupId,
                photo: params.photo,
                server: params.server,
                hash: params.hash,
                access_token: params.accessToken
            },
            Responses.PhotosSaveMarketAlbumPhotoResponse
        )
    }

    /**
     * Saves a profile or community photo. Upload URL can be got with the [vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer] method.
     */
    public async photosSaveOwnerPhoto(params: MethodsProps.PhotosSaveOwnerPhotoParams): Promise<Responses.PhotosSaveOwnerPhotoResponse> {
        return this.call(
            'photos.saveOwnerPhoto',
            {
                server: params.server,
                hash: params.hash,
                photo: params.photo,
                access_token: params.accessToken
            },
            Responses.PhotosSaveOwnerPhotoResponse
        )
    }

    /**
     * Saves a photo to a user's or community's wall after being uploaded.
     */
    public async photosSaveWallPhoto(params: MethodsProps.PhotosSaveWallPhotoParams): Promise<Responses.PhotosSaveWallPhotoResponse> {
        return this.call(
            'photos.saveWallPhoto',
            {
                user_id: params.userId,
                group_id: params.groupId,
                photo: params.photo,
                server: params.server,
                hash: params.hash,
                latitude: params.latitude,
                longitude: params.longitude,
                caption: params.caption,
                access_token: params.accessToken
            },
            Responses.PhotosSaveWallPhotoResponse
        )
    }

    /**
     * Returns the server address for photo upload onto a user's wall.
     */
    public async photosGetWallUploadServer(params: MethodsProps.PhotosGetWallUploadServerParams): Promise<Responses.PhotosGetWallUploadServerResponse> {
        return this.call(
            'photos.getWallUploadServer',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PhotosGetWallUploadServerResponse
        )
    }

    /**
     * Returns the server address for photo upload in a private message for a user.
     */
    public async photosGetMessagesUploadServer(params: MethodsProps.PhotosGetMessagesUploadServerParams): Promise<Responses.PhotosGetMessagesUploadServerResponse> {
        return this.call(
            'photos.getMessagesUploadServer',
            {
                access_token: params.accessToken
            },
            Responses.PhotosGetMessagesUploadServerResponse
        )
    }

    /**
     * Saves a photo after being successfully uploaded. URL obtained with [vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer] method.
     */
    public async photosSaveMessagesPhoto(params: MethodsProps.PhotosSaveMessagesPhotoParams): Promise<Responses.PhotosSaveMessagesPhotoResponse> {
        return this.call(
            'photos.saveMessagesPhoto',
            {
                photo: params.photo,
                server: params.server,
                hash: params.hash,
                access_token: params.accessToken
            },
            Responses.PhotosSaveMessagesPhotoResponse
        )
    }

    /**
     * Reports (submits a complaint about) a photo.;
     */
    public async photosReport(params: MethodsProps.PhotosReportParams): Promise<Responses.PhotosReportResponse> {
        return this.call(
            'photos.report',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.PhotosReportResponse
        )
    }

    /**
     * Reports (submits a complaint about) a comment on a photo.;
     */
    public async photosReportComment(params: MethodsProps.PhotosReportCommentParams): Promise<Responses.PhotosReportCommentResponse> {
        return this.call(
            'photos.reportComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.PhotosReportCommentResponse
        )
    }

    /**
     * Returns a list of photos.
     */
    public async photosSearch(params: MethodsProps.PhotosSearchParams): Promise<Responses.PhotosSearchResponse> {
        return this.call(
            'photos.search',
            {
                q: params.q,
                lat: params.lat,
                long: params.long,
                start_time: params.startTime,
                end_time: params.endTime,
                sort: params.sort,
                offset: params.offset,
                count: params.count,
                radius: params.radius,
                access_token: params.accessToken
            },
            Responses.PhotosSearchResponse
        )
    }

    /**
     * Returns a list of user IDs or detailed information about a user's friends.
     */
    public async friendsGet(params: MethodsProps.FriendsGetParams): Promise<Responses.FriendsGetResponse> {
        return this.call(
            'friends.get',
            {
                user_id: params.userId,
                order: params.order,
                list_id: params.listId,
                count: params.count,
                offset: params.offset,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.FriendsGetResponse
        )
    }

    /**
     * Returns a list of user IDs of a user's friends who are online.
     */
    public async friendsGetOnline(params: MethodsProps.FriendsGetOnlineParams): Promise<Responses.FriendsGetOnlineResponse> {
        return this.call(
            'friends.getOnline',
            {
                user_id: params.userId,
                list_id: params.listId,
                online_mobile: params.onlineMobile,
                order: params.order,
                count: params.count,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.FriendsGetOnlineResponse
        )
    }

    /**
     * Returns a list of user IDs of the mutual friends of two users.
     */
    public async friendsGetMutual(params: MethodsProps.FriendsGetMutualParams): Promise<Responses.FriendsGetMutualResponse> {
        return this.call(
            'friends.getMutual',
            {
                source_uid: params.sourceUid,
                target_uid: params.targetUid,
                target_uids: params.targetUids,
                order: params.order,
                count: params.count,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.FriendsGetMutualResponse
        )
    }

    /**
     * Returns a list of user IDs of the current user's recently added friends.
     */
    public async friendsGetRecent(params: MethodsProps.FriendsGetRecentParams): Promise<Responses.FriendsGetRecentResponse> {
        return this.call(
            'friends.getRecent',
            {
                count: params.count,
                access_token: params.accessToken
            },
            Responses.FriendsGetRecentResponse
        )
    }

    /**
     * Returns information about the current user's incoming and outgoing friend requests.
     */
    public async friendsGetRequests(params: MethodsProps.FriendsGetRequestsParams): Promise<Responses.FriendsGetRequestsResponse> {
        return this.call(
            'friends.getRequests',
            {
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                need_mutual: params.needMutual,
                out: params.out,
                sort: params.sort,
                suggested: params.suggested,
                access_token: params.accessToken
            },
            Responses.FriendsGetRequestsResponse
        )
    }

    /**
     * Approves or creates a friend request.
     */
    public async friendsAdd(params: MethodsProps.FriendsAddParams): Promise<Responses.FriendsAddResponse> {
        return this.call(
            'friends.add',
            {
                user_id: params.userId,
                text: params.text,
                follow: params.follow,
                access_token: params.accessToken
            },
            Responses.FriendsAddResponse
        )
    }

    /**
     * Edits the friend lists of the selected user.
     */
    public async friendsEdit(params: MethodsProps.FriendsEditParams): Promise<Responses.FriendsEditResponse> {
        return this.call(
            'friends.edit',
            {
                user_id: params.userId,
                list_ids: params.listIds,
                access_token: params.accessToken
            },
            Responses.FriendsEditResponse
        )
    }

    /**
     * Declines a friend request or deletes a user from the current user's friend list.
     */
    public async friendsDelete(params: MethodsProps.FriendsDeleteParams): Promise<Responses.FriendsDeleteResponse> {
        return this.call(
            'friends.delete',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.FriendsDeleteResponse
        )
    }

    /**
     * Returns a list of the user's friend lists.
     */
    public async friendsGetLists(params: MethodsProps.FriendsGetListsParams): Promise<Responses.FriendsGetListsResponse> {
        return this.call(
            'friends.getLists',
            {
                user_id: params.userId,
                return_system: params.returnSystem,
                access_token: params.accessToken
            },
            Responses.FriendsGetListsResponse
        )
    }

    /**
     * Creates a new friend list for the current user.
     */
    public async friendsAddList(params: MethodsProps.FriendsAddListParams): Promise<Responses.FriendsAddListResponse> {
        return this.call(
            'friends.addList',
            {
                name: params.name,
                user_ids: params.userIds,
                access_token: params.accessToken
            },
            Responses.FriendsAddListResponse
        )
    }

    /**
     * Edits a friend list of the current user.
     */
    public async friendsEditList(params: MethodsProps.FriendsEditListParams): Promise<Responses.FriendsEditListResponse> {
        return this.call(
            'friends.editList',
            {
                name: params.name,
                list_id: params.listId,
                user_ids: params.userIds,
                add_user_ids: params.addUserIds,
                delete_user_ids: params.deleteUserIds,
                access_token: params.accessToken
            },
            Responses.FriendsEditListResponse
        )
    }

    /**
     * Deletes a friend list of the current user.
     */
    public async friendsDeleteList(params: MethodsProps.FriendsDeleteListParams): Promise<Responses.FriendsDeleteListResponse> {
        return this.call(
            'friends.deleteList',
            {
                list_id: params.listId,
                access_token: params.accessToken
            },
            Responses.FriendsDeleteListResponse
        )
    }

    /**
     * Returns a list of IDs of the current user's friends who installed the application.
     */
    public async friendsGetAppUsers(params: MethodsProps.FriendsGetAppUsersParams): Promise<Responses.FriendsGetAppUsersResponse> {
        return this.call(
            'friends.getAppUsers',
            {
                access_token: params.accessToken
            },
            Responses.FriendsGetAppUsersResponse
        )
    }

    /**
     * Returns a list of the current user's friends whose phone numbers, validated or specified in a profile, are in a given list.
     */
    public async friendsGetByPhones(params: MethodsProps.FriendsGetByPhonesParams): Promise<Responses.FriendsGetByPhonesResponse> {
        return this.call(
            'friends.getByPhones',
            {
                phones: params.phones,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.FriendsGetByPhonesResponse
        )
    }

    /**
     * Marks all incoming friend requests as viewed.
     */
    public async friendsDeleteAllRequests(params: MethodsProps.FriendsDeleteAllRequestsParams): Promise<Responses.FriendsDeleteAllRequestsResponse> {
        return this.call(
            'friends.deleteAllRequests',
            {
                access_token: params.accessToken
            },
            Responses.FriendsDeleteAllRequestsResponse
        )
    }

    /**
     * Returns a list of profiles of users whom the current user may know.
     */
    public async friendsGetSuggestions(params: MethodsProps.FriendsGetSuggestionsParams): Promise<Responses.FriendsGetSuggestionsResponse> {
        return this.call(
            'friends.getSuggestions',
            {
                filter: params.filter,
                count: params.count,
                offset: params.offset,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.FriendsGetSuggestionsResponse
        )
    }

    /**
     * Checks the current user's friendship status with other specified users.
     */
    public async friendsAreFriends(params: MethodsProps.FriendsAreFriendsParams): Promise<Responses.FriendsAreFriendsResponse> {
        return this.call(
            'friends.areFriends',
            {
                user_ids: params.userIds,
                need_sign: params.needSign,
                access_token: params.accessToken
            },
            Responses.FriendsAreFriendsResponse
        )
    }

    /**
     * Returns a list of friends who can be called by the current user.
     */
    public async friendsGetAvailableForCall(params: MethodsProps.FriendsGetAvailableForCallParams): Promise<Responses.FriendsGetAvailableForCallResponse> {
        return this.call(
            'friends.getAvailableForCall',
            {
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.FriendsGetAvailableForCallResponse
        )
    }

    /**
     * Returns a list of friends matching the search criteria.
     */
    public async friendsSearch(params: MethodsProps.FriendsSearchParams): Promise<Responses.FriendsSearchResponse> {
        return this.call(
            'friends.search',
            {
                user_id: params.userId,
                q: params.q,
                fields: params.fields,
                name_case: params.nameCase,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.FriendsSearchResponse
        )
    }

    /**
     * Gets a list of comments for the page added through the [vk.com/dev/Comments|Comments widget].
     */
    public async widgetsGetComments(params: MethodsProps.WidgetsGetCommentsParams): Promise<Responses.WidgetsGetCommentsResponse> {
        return this.call(
            'widgets.getComments',
            {
                widget_api_id: params.widgetApiId,
                url: params.url,
                page_id: params.pageId,
                order: params.order,
                fields: params.fields,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.WidgetsGetCommentsResponse
        )
    }

    /**
     * Gets a list of application/site pages where the [vk.com/dev/Comments|Comments widget] or [vk.com/dev/Like|Like widget] is installed.
     */
    public async widgetsGetPages(params: MethodsProps.WidgetsGetPagesParams): Promise<Responses.WidgetsGetPagesResponse> {
        return this.call(
            'widgets.getPages',
            {
                widget_api_id: params.widgetApiId,
                order: params.order,
                period: params.period,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.WidgetsGetPagesResponse
        )
    }

    /**
     * Returns payment balance of the application in hundredth of a vote.
     */
    public async secureGetAppBalance(params: MethodsProps.SecureGetAppBalanceParams): Promise<Responses.SecureGetAppBalanceResponse> {
        return this.call(
            'secure.getAppBalance',
            {
                access_token: params.accessToken
            },
            Responses.SecureGetAppBalanceResponse
        )
    }

    /**
     * Shows history of votes transaction between users and the application.
     */
    public async secureGetTransactionsHistory(params: MethodsProps.SecureGetTransactionsHistoryParams): Promise<Responses.SecureGetTransactionsHistoryResponse> {
        return this.call(
            'secure.getTransactionsHistory',
            {
                access_token: params.accessToken
            },
            Responses.SecureGetTransactionsHistoryResponse
        )
    }

    /**
     * Shows a list of SMS notifications sent by the application using [vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification] method.
     */
    public async secureGetSMSHistory(params: MethodsProps.SecureGetSMSHistoryParams): Promise<Responses.SecureGetSMSHistoryResponse> {
        return this.call(
            'secure.getSMSHistory',
            {
                user_id: params.userId,
                date_from: params.dateFrom,
                date_to: params.dateTo,
                limit: params.limit,
                access_token: params.accessToken
            },
            Responses.SecureGetSMSHistoryResponse
        )
    }

    /**
     * Sends 'SMS' notification to a user's mobile device.
     */
    public async secureSendSMSNotification(params: MethodsProps.SecureSendSMSNotificationParams): Promise<Responses.SecureSendSMSNotificationResponse> {
        return this.call(
            'secure.sendSMSNotification',
            {
                user_id: params.userId,
                message: params.message,
                access_token: params.accessToken
            },
            Responses.SecureSendSMSNotificationResponse
        )
    }

    /**
     * Sends notification to the user.
     */
    public async secureSendNotification(params: MethodsProps.SecureSendNotificationParams): Promise<Responses.SecureSendNotificationResponse> {
        return this.call(
            'secure.sendNotification',
            {
                user_ids: params.userIds,
                user_id: params.userId,
                message: params.message,
                access_token: params.accessToken
            },
            Responses.SecureSendNotificationResponse
        )
    }

    /**
     * Sets a counter which is shown to the user in bold in the left menu.
     */
    public async secureSetCounter(params: MethodsProps.SecureSetCounterParams): Promise<Responses.SecureSetCounterResponse> {
        return this.call(
            'secure.setCounter',
            {
                counters: params.counters,
                user_id: params.userId,
                counter: params.counter,
                access_token: params.accessToken
            },
            Responses.SecureSetCounterResponse
        )
    }

    /**
     * Sets user game level in the application which can be seen by his/her friends.
     */
    public async secureSetUserLevel(params: MethodsProps.SecureSetUserLevelParams): Promise<Responses.SecureSetUserLevelResponse> {
        return this.call(
            'secure.setUserLevel',
            {
                levels: params.levels,
                user_id: params.userId,
                level: params.level,
                access_token: params.accessToken
            },
            Responses.SecureSetUserLevelResponse
        )
    }

    /**
     * Returns one of the previously set game levels of one or more users in the application.
     */
    public async secureGetUserLevel(params: MethodsProps.SecureGetUserLevelParams): Promise<Responses.SecureGetUserLevelResponse> {
        return this.call(
            'secure.getUserLevel',
            {
                user_ids: params.userIds,
                access_token: params.accessToken
            },
            Responses.SecureGetUserLevelResponse
        )
    }

    /**
     * Returns a value of variable with the name set by key parameter.
     */
    public async storageGet(params: MethodsProps.StorageGetParams): Promise<Responses.StorageGetResponse> {
        return this.call(
            'storage.get',
            {
                key: params.key,
                keys: params.keys,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.StorageGetResponse
        )
    }

    /**
     * Saves a value of variable with the name set by 'key' parameter.
     */
    public async storageSet(params: MethodsProps.StorageSetParams): Promise<Responses.StorageSetResponse> {
        return this.call(
            'storage.set',
            {
                key: params.key,
                value: params.value,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.StorageSetResponse
        )
    }

    /**
     * Returns the names of all variables.
     */
    public async storageGetKeys(params: MethodsProps.StorageGetKeysParams): Promise<Responses.StorageGetKeysResponse> {
        return this.call(
            'storage.getKeys',
            {
                user_id: params.userId,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.StorageGetKeysResponse
        )
    }

    /**
     * Returns a list of orders.
     */
    public async ordersGet(params: MethodsProps.OrdersGetParams): Promise<Responses.OrdersGetResponse> {
        return this.call(
            'orders.get',
            {
                count: params.count,
                test_mode: params.testMode,
                access_token: params.accessToken
            },
            Responses.OrdersGetResponse
        )
    }

    /**
     * Returns information about orders by their IDs.
     */
    public async ordersGetById(params: MethodsProps.OrdersGetByIdParams): Promise<Responses.OrdersGetByIdResponse> {
        return this.call(
            'orders.getById',
            {
                order_id: params.orderId,
                order_ids: params.orderIds,
                test_mode: params.testMode,
                access_token: params.accessToken
            },
            Responses.OrdersGetByIdResponse
        )
    }

    /**
     * Changes order status.
     */
    public async ordersChangeState(params: MethodsProps.OrdersChangeStateParams): Promise<Responses.OrdersChangeStateResponse> {
        return this.call(
            'orders.changeState',
            {
                order_id: params.orderId,
                action: params.action,
                app_order_id: params.appOrderId,
                test_mode: params.testMode,
                access_token: params.accessToken
            },
            Responses.OrdersChangeStateResponse
        )
    }

    /**
     * undefined
     */
    public async ordersGetAmount(params: MethodsProps.OrdersGetAmountParams): Promise<Responses.OrdersGetAmountResponse> {
        return this.call(
            'orders.getAmount',
            {
                user_id: params.userId,
                votes: params.votes,
                access_token: params.accessToken
            },
            Responses.OrdersGetAmountResponse
        )
    }

    /**
     * Saves photos after successful uploading.
     */
    public async photosSave(params: MethodsProps.PhotosSaveParams): Promise<Responses.PhotosSaveResponse> {
        return this.call(
            'photos.save',
            {
                album_id: params.albumId,
                group_id: params.groupId,
                server: params.server,
                photos_list: params.photosList,
                hash: params.hash,
                latitude: params.latitude,
                longitude: params.longitude,
                caption: params.caption,
                access_token: params.accessToken
            },
            Responses.PhotosSaveResponse
        )
    }

    /**
     * Allows to copy a photo to the "Saved photos" album
     */
    public async photosCopy(params: MethodsProps.PhotosCopyParams): Promise<Responses.PhotosCopyResponse> {
        return this.call(
            'photos.copy',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                access_key: params.accessKey,
                access_token: params.accessToken
            },
            Responses.PhotosCopyResponse
        )
    }

    /**
     * Edits the caption of a photo.
     */
    public async photosEdit(params: MethodsProps.PhotosEditParams): Promise<Responses.PhotosEditResponse> {
        return this.call(
            'photos.edit',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                caption: params.caption,
                latitude: params.latitude,
                longitude: params.longitude,
                place_str: params.placeStr,
                foursquare_id: params.foursquareId,
                delete_place: params.deletePlace,
                access_token: params.accessToken
            },
            Responses.PhotosEditResponse
        )
    }

    /**
     * Moves a photo from one album to another.
     */
    public async photosMove(params: MethodsProps.PhotosMoveParams): Promise<Responses.PhotosMoveResponse> {
        return this.call(
            'photos.move',
            {
                owner_id: params.ownerId,
                target_album_id: params.targetAlbumId,
                photo_id: params.photoId,
                access_token: params.accessToken
            },
            Responses.PhotosMoveResponse
        )
    }

    /**
     * Makes a photo into an album cover.
     */
    public async photosMakeCover(params: MethodsProps.PhotosMakeCoverParams): Promise<Responses.PhotosMakeCoverResponse> {
        return this.call(
            'photos.makeCover',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.PhotosMakeCoverResponse
        )
    }

    /**
     * Reorders the album in the list of user albums.
     */
    public async photosReorderAlbums(params: MethodsProps.PhotosReorderAlbumsParams): Promise<Responses.PhotosReorderAlbumsResponse> {
        return this.call(
            'photos.reorderAlbums',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.PhotosReorderAlbumsResponse
        )
    }

    /**
     * Reorders the photo in the list of photos of the user album.
     */
    public async photosReorderPhotos(params: MethodsProps.PhotosReorderPhotosParams): Promise<Responses.PhotosReorderPhotosResponse> {
        return this.call(
            'photos.reorderPhotos',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.PhotosReorderPhotosResponse
        )
    }

    /**
     * Returns a list of photos belonging to a user or community, in reverse chronological order.
     */
    public async photosGetAll(params: MethodsProps.PhotosGetAllParams): Promise<Responses.PhotosGetAllResponse> {
        return this.call(
            'photos.getAll',
            {
                owner_id: params.ownerId,
                extended: params.extended,
                offset: params.offset,
                count: params.count,
                photo_sizes: params.photoSizes,
                no_service_albums: params.noServiceAlbums,
                need_hidden: params.needHidden,
                skip_hidden: params.skipHidden,
                access_token: params.accessToken
            },
            Responses.PhotosGetAllResponse
        )
    }

    /**
     * Returns a list of photos in which a user is tagged.
     */
    public async photosGetUserPhotos(params: MethodsProps.PhotosGetUserPhotosParams): Promise<Responses.PhotosGetUserPhotosResponse> {
        return this.call(
            'photos.getUserPhotos',
            {
                user_id: params.userId,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                sort: params.sort,
                access_token: params.accessToken
            },
            Responses.PhotosGetUserPhotosResponse
        )
    }

    /**
     * Deletes a photo album belonging to the current user.
     */
    public async photosDeleteAlbum(params: MethodsProps.PhotosDeleteAlbumParams): Promise<Responses.PhotosDeleteAlbumResponse> {
        return this.call(
            'photos.deleteAlbum',
            {
                album_id: params.albumId,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PhotosDeleteAlbumResponse
        )
    }

    /**
     * Deletes a photo.
     */
    public async photosDelete(params: MethodsProps.PhotosDeleteParams): Promise<Responses.PhotosDeleteResponse> {
        return this.call(
            'photos.delete',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                access_token: params.accessToken
            },
            Responses.PhotosDeleteResponse
        )
    }

    /**
     * Restores a deleted photo.
     */
    public async photosRestore(params: MethodsProps.PhotosRestoreParams): Promise<Responses.PhotosRestoreResponse> {
        return this.call(
            'photos.restore',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                access_token: params.accessToken
            },
            Responses.PhotosRestoreResponse
        )
    }

    /**
     * Confirms a tag on a photo.
     */
    public async photosConfirmTag(params: MethodsProps.PhotosConfirmTagParams): Promise<Responses.PhotosConfirmTagResponse> {
        return this.call(
            'photos.confirmTag',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                tag_id: params.tagId,
                access_token: params.accessToken
            },
            Responses.PhotosConfirmTagResponse
        )
    }

    /**
     * Returns a list of comments on a photo.
     */
    public async photosGetComments(params: MethodsProps.PhotosGetCommentsParams): Promise<Responses.PhotosGetCommentsResponse> {
        return this.call(
            'photos.getComments',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                need_likes: params.needLikes,
                start_comment_id: params.startCommentId,
                offset: params.offset,
                count: params.count,
                sort: params.sort,
                access_key: params.accessKey,
                extended: params.extended,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.PhotosGetCommentsResponse
        )
    }

    /**
     * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
     */
    public async photosGetAllComments(params: MethodsProps.PhotosGetAllCommentsParams): Promise<Responses.PhotosGetAllCommentsResponse> {
        return this.call(
            'photos.getAllComments',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                need_likes: params.needLikes,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.PhotosGetAllCommentsResponse
        )
    }

    /**
     * Adds a new comment on the photo.
     */
    public async photosCreateComment(params: MethodsProps.PhotosCreateCommentParams): Promise<Responses.PhotosCreateCommentResponse> {
        return this.call(
            'photos.createComment',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                message: params.message,
                attachments: params.attachments,
                from_group: params.fromGroup,
                reply_to_comment: params.replyToComment,
                sticker_id: params.stickerId,
                access_key: params.accessKey,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.PhotosCreateCommentResponse
        )
    }

    /**
     * Deletes a comment on the photo.
     */
    public async photosDeleteComment(params: MethodsProps.PhotosDeleteCommentParams): Promise<Responses.PhotosDeleteCommentResponse> {
        return this.call(
            'photos.deleteComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.PhotosDeleteCommentResponse
        )
    }

    /**
     * Restores a deleted comment on a photo.
     */
    public async photosRestoreComment(params: MethodsProps.PhotosRestoreCommentParams): Promise<Responses.PhotosRestoreCommentResponse> {
        return this.call(
            'photos.restoreComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.PhotosRestoreCommentResponse
        )
    }

    /**
     * Edits a comment on a photo.
     */
    public async photosEditComment(params: MethodsProps.PhotosEditCommentParams): Promise<Responses.PhotosEditCommentResponse> {
        return this.call(
            'photos.editComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                message: params.message,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.PhotosEditCommentResponse
        )
    }

    /**
     * Returns a list of tags on a photo.
     */
    public async photosGetTags(params: MethodsProps.PhotosGetTagsParams): Promise<Responses.PhotosGetTagsResponse> {
        return this.call(
            'photos.getTags',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                access_key: params.accessKey,
                access_token: params.accessToken
            },
            Responses.PhotosGetTagsResponse
        )
    }

    /**
     * Adds a tag on the photo.
     */
    public async photosPutTag(params: MethodsProps.PhotosPutTagParams): Promise<Responses.PhotosPutTagResponse> {
        return this.call(
            'photos.putTag',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                user_id: params.userId,
                x: params.x,
                y: params.y,
                x2: params.x2,
                y2: params.y2,
                access_token: params.accessToken
            },
            Responses.PhotosPutTagResponse
        )
    }

    /**
     * Removes a tag from a photo.
     */
    public async photosRemoveTag(params: MethodsProps.PhotosRemoveTagParams): Promise<Responses.PhotosRemoveTagResponse> {
        return this.call(
            'photos.removeTag',
            {
                owner_id: params.ownerId,
                photo_id: params.photoId,
                tag_id: params.tagId,
                access_token: params.accessToken
            },
            Responses.PhotosRemoveTagResponse
        )
    }

    /**
     * Returns a list of photos with tags that have not been viewed.
     */
    public async photosGetNewTags(params: MethodsProps.PhotosGetNewTagsParams): Promise<Responses.PhotosGetNewTagsResponse> {
        return this.call(
            'photos.getNewTags',
            {
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.PhotosGetNewTagsResponse
        )
    }

    /**
     * Returns a list of posts from user or community walls by their IDs.
     */
    public async wallGetById(params: MethodsProps.WallGetByIdParams): Promise<Responses.WallGetByIdResponse> {
        return this.call(
            'wall.getById',
            {
                posts: params.posts,
                extended: params.extended,
                copy_history_depth: params.copyHistoryDepth,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.WallGetByIdResponse
        )
    }

    /**
     * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
     */
    public async wallPost(params: MethodsProps.WallPostParams): Promise<Responses.WallPostResponse> {
        return this.call(
            'wall.post',
            {
                owner_id: params.ownerId,
                friends_only: params.friendsOnly,
                from_group: params.fromGroup,
                message: params.message,
                attachments: params.attachments,
                services: params.services,
                signed: params.signed,
                publish_date: params.publishDate,
                lat: params.lat,
                long: params.long,
                place_id: params.placeId,
                post_id: params.postId,
                guid: params.guid,
                mark_as_ads: params.markAsAds,
                access_token: params.accessToken
            },
            Responses.WallPostResponse
        )
    }

    /**
     * Reposts (copies) an object to a user wall or community wall.
     */
    public async wallRepost(params: MethodsProps.WallRepostParams): Promise<Responses.WallRepostResponse> {
        return this.call(
            'wall.repost',
            {
                object: params.object,
                message: params.message,
                group_id: params.groupId,
                mark_as_ads: params.markAsAds,
                access_token: params.accessToken
            },
            Responses.WallRepostResponse
        )
    }

    /**
     * Returns information about reposts of a post on user wall or community wall.
     */
    public async wallGetReposts(params: MethodsProps.WallGetRepostsParams): Promise<Responses.WallGetRepostsResponse> {
        return this.call(
            'wall.getReposts',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.WallGetRepostsResponse
        )
    }

    /**
     * Edits a post on a user wall or community wall.
     */
    public async wallEdit(params: MethodsProps.WallEditParams): Promise<Responses.WallEditResponse> {
        return this.call(
            'wall.edit',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                friends_only: params.friendsOnly,
                message: params.message,
                attachments: params.attachments,
                services: params.services,
                signed: params.signed,
                publish_date: params.publishDate,
                lat: params.lat,
                long: params.long,
                place_id: params.placeId,
                mark_as_ads: params.markAsAds,
                access_token: params.accessToken
            },
            Responses.WallEditResponse
        )
    }

    /**
     * Deletes a post from a user wall or community wall.
     */
    public async wallDelete(params: MethodsProps.WallDeleteParams): Promise<Responses.WallDeleteResponse> {
        return this.call(
            'wall.delete',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                access_token: params.accessToken
            },
            Responses.WallDeleteResponse
        )
    }

    /**
     * Restores a post deleted from a user wall or community wall.
     */
    public async wallRestore(params: MethodsProps.WallRestoreParams): Promise<Responses.WallRestoreResponse> {
        return this.call(
            'wall.restore',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                access_token: params.accessToken
            },
            Responses.WallRestoreResponse
        )
    }

    /**
     * Pins the post on wall.
     */
    public async wallPin(params: MethodsProps.WallPinParams): Promise<Responses.WallPinResponse> {
        return this.call(
            'wall.pin',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                access_token: params.accessToken
            },
            Responses.WallPinResponse
        )
    }

    /**
     * Unpins the post on wall.
     */
    public async wallUnpin(params: MethodsProps.WallUnpinParams): Promise<Responses.WallUnpinResponse> {
        return this.call(
            'wall.unpin',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                access_token: params.accessToken
            },
            Responses.WallUnpinResponse
        )
    }

    /**
     * Returns a list of comments on a post on a user wall or community wall.
     */
    public async wallGetComments(params: MethodsProps.WallGetCommentsParams): Promise<Responses.WallGetCommentsResponse> {
        return this.call(
            'wall.getComments',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                need_likes: params.needLikes,
                start_comment_id: params.startCommentId,
                offset: params.offset,
                count: params.count,
                sort: params.sort,
                preview_length: params.previewLength,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.WallGetCommentsResponse
        )
    }

    /**
     * Adds a comment to a post on a user wall or community wall.
     */
    public async wallCreateComment(params: MethodsProps.WallCreateCommentParams): Promise<Responses.WallCreateCommentResponse> {
        return this.call(
            'wall.createComment',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                from_group: params.fromGroup,
                message: params.message,
                reply_to_comment: params.replyToComment,
                attachments: params.attachments,
                sticker_id: params.stickerId,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.WallCreateCommentResponse
        )
    }

    /**
     * Edits a comment on a user wall or community wall.;
     */
    public async wallEditComment(params: MethodsProps.WallEditCommentParams): Promise<Responses.WallEditCommentResponse> {
        return this.call(
            'wall.editComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                message: params.message,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.WallEditCommentResponse
        )
    }

    /**
     * Deletes a comment on a post on a user wall or community wall.;
     */
    public async wallDeleteComment(params: MethodsProps.WallDeleteCommentParams): Promise<Responses.WallDeleteCommentResponse> {
        return this.call(
            'wall.deleteComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.WallDeleteCommentResponse
        )
    }

    /**
     * Restores a comment deleted from a user wall or community wall.;
     */
    public async wallRestoreComment(params: MethodsProps.WallRestoreCommentParams): Promise<Responses.WallRestoreCommentResponse> {
        return this.call(
            'wall.restoreComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.WallRestoreCommentResponse
        )
    }

    /**
     * Reports (submits a complaint about) a post on a user wall or community wall.;
     */
    public async wallReportPost(params: MethodsProps.WallReportPostParams): Promise<Responses.WallReportPostResponse> {
        return this.call(
            'wall.reportPost',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.WallReportPostResponse
        )
    }

    /**
     * Reports (submits a complaint about) a comment on a post on a user wall or community wall.;
     */
    public async wallReportComment(params: MethodsProps.WallReportCommentParams): Promise<Responses.WallReportCommentResponse> {
        return this.call(
            'wall.reportComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.WallReportCommentResponse
        )
    }

    /**
     * Returns data required to show the status of a user or community.
     */
    public async statusGet(params: MethodsProps.StatusGetParams): Promise<Responses.StatusGetResponse> {
        return this.call(
            'status.get',
            {
                user_id: params.userId,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.StatusGetResponse
        )
    }

    /**
     * Sets a new status for the current user.
     */
    public async statusSet(params: MethodsProps.StatusSetParams): Promise<Responses.StatusSetResponse> {
        return this.call(
            'status.set',
            {
                text: params.text,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.StatusSetResponse
        )
    }

    /**
     * Returns a list of audio files of a user or community.
     */
    public async audioGet(params: MethodsProps.AudioGetParams): Promise<Responses.AudioGetResponse> {
        return this.call(
            'audio.get',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                audio_ids: params.audioIds,
                need_user: params.needUser,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AudioGetResponse
        )
    }

    /**
     * Returns information about audio files by their IDs.
     */
    public async audioGetById(params: MethodsProps.AudioGetByIdParams): Promise<Responses.AudioGetByIdResponse> {
        return this.call(
            'audio.getById',
            {
                audios: params.audios,
                access_token: params.accessToken
            },
            Responses.AudioGetByIdResponse
        )
    }

    /**
     * Returns lyrics associated with an audio file.
     */
    public async audioGetLyrics(params: MethodsProps.AudioGetLyricsParams): Promise<Responses.AudioGetLyricsResponse> {
        return this.call(
            'audio.getLyrics',
            {
                lyrics_id: params.lyricsId,
                access_token: params.accessToken
            },
            Responses.AudioGetLyricsResponse
        )
    }

    /**
     * Returns a list of audio matching the search criteria.
     */
    public async audioSearch(params: MethodsProps.AudioSearchParams): Promise<Responses.AudioSearchResponse> {
        return this.call(
            'audio.search',
            {
                q: params.q,
                auto_complete: params.autoComplete,
                lyrics: params.lyrics,
                performer_only: params.performerOnly,
                sort: params.sort,
                search_own: params.searchOwn,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AudioSearchResponse
        )
    }

    /**
     * Returns the server address to [vk.com/dev/upload_files_2|upload audio files].
     */
    public async audioGetUploadServer(params: MethodsProps.AudioGetUploadServerParams): Promise<Responses.AudioGetUploadServerResponse> {
        return this.call(
            'audio.getUploadServer',
            {
                access_token: params.accessToken
            },
            Responses.AudioGetUploadServerResponse
        )
    }

    /**
     * Saves audio files after successful [vk.com/dev/upload_files_2|uploading].
     */
    public async audioSave(params: MethodsProps.AudioSaveParams): Promise<Responses.AudioSaveResponse> {
        return this.call(
            'audio.save',
            {
                server: params.server,
                audio: params.audio,
                hash: params.hash,
                artist: params.artist,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.AudioSaveResponse
        )
    }

    /**
     * Copies an audio file to a user page or community page.
     */
    public async audioAdd(params: MethodsProps.AudioAddParams): Promise<Responses.AudioAddResponse> {
        return this.call(
            'audio.add',
            {
                audio_id: params.audioId,
                owner_id: params.ownerId,
                group_id: params.groupId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.AudioAddResponse
        )
    }

    /**
     * Deletes an audio file from a user page or community page.
     */
    public async audioDelete(params: MethodsProps.AudioDeleteParams): Promise<Responses.AudioDeleteResponse> {
        return this.call(
            'audio.delete',
            {
                audio_id: params.audioId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.AudioDeleteResponse
        )
    }

    /**
     * Edits an audio file on a user or community page.;
     */
    public async audioEdit(params: MethodsProps.AudioEditParams): Promise<Responses.AudioEditResponse> {
        return this.call(
            'audio.edit',
            {
                owner_id: params.ownerId,
                audio_id: params.audioId,
                artist: params.artist,
                title: params.title,
                text: params.text,
                genre_id: params.genreId,
                no_search: params.noSearch,
                access_token: params.accessToken
            },
            Responses.AudioEditResponse
        )
    }

    /**
     * Reorders an audio file, placing it between other specified audio files.
     */
    public async audioReorder(params: MethodsProps.AudioReorderParams): Promise<Responses.AudioReorderResponse> {
        return this.call(
            'audio.reorder',
            {
                audio_id: params.audioId,
                owner_id: params.ownerId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.AudioReorderResponse
        )
    }

    /**
     * Restores a [vk.com/dev/audio.delete|deleted] audio file.
     */
    public async audioRestore(params: MethodsProps.AudioRestoreParams): Promise<Responses.AudioRestoreResponse> {
        return this.call(
            'audio.restore',
            {
                audio_id: params.audioId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.AudioRestoreResponse
        )
    }

    /**
     * Returns a list of audio albums of a user or community.
     */
    public async audioGetAlbums(params: MethodsProps.AudioGetAlbumsParams): Promise<Responses.AudioGetAlbumsResponse> {
        return this.call(
            'audio.getAlbums',
            {
                owner_id: params.ownerId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AudioGetAlbumsResponse
        )
    }

    /**
     * Creates an empty audio album.
     */
    public async audioAddAlbum(params: MethodsProps.AudioAddAlbumParams): Promise<Responses.AudioAddAlbumResponse> {
        return this.call(
            'audio.addAlbum',
            {
                group_id: params.groupId,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.AudioAddAlbumResponse
        )
    }

    /**
     * Edits the title of an audio album.
     */
    public async audioEditAlbum(params: MethodsProps.AudioEditAlbumParams): Promise<Responses.AudioEditAlbumResponse> {
        return this.call(
            'audio.editAlbum',
            {
                group_id: params.groupId,
                album_id: params.albumId,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.AudioEditAlbumResponse
        )
    }

    /**
     * Deletes an audio album.
     */
    public async audioDeleteAlbum(params: MethodsProps.AudioDeleteAlbumParams): Promise<Responses.AudioDeleteAlbumResponse> {
        return this.call(
            'audio.deleteAlbum',
            {
                group_id: params.groupId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.AudioDeleteAlbumResponse
        )
    }

    /**
     * Moves audio files to an album.
     */
    public async audioMoveToAlbum(params: MethodsProps.AudioMoveToAlbumParams): Promise<Responses.AudioMoveToAlbumResponse> {
        return this.call(
            'audio.moveToAlbum',
            {
                group_id: params.groupId,
                album_id: params.albumId,
                audio_ids: params.audioIds,
                access_token: params.accessToken
            },
            Responses.AudioMoveToAlbumResponse
        )
    }

    /**
     * Activates an audio broadcast to the status of a user or community.
     */
    public async audioSetBroadcast(params: MethodsProps.AudioSetBroadcastParams): Promise<Responses.AudioSetBroadcastResponse> {
        return this.call(
            'audio.setBroadcast',
            {
                audio: params.audio,
                target_ids: params.targetIds,
                access_token: params.accessToken
            },
            Responses.AudioSetBroadcastResponse
        )
    }

    /**
     * Returns a list of the user's friends and communities that are broadcasting music in their statuses.
     */
    public async audioGetBroadcastList(params: MethodsProps.AudioGetBroadcastListParams): Promise<Responses.AudioGetBroadcastListResponse> {
        return this.call(
            'audio.getBroadcastList',
            {
                filter: params.filter,
                active: params.active,
                access_token: params.accessToken
            },
            Responses.AudioGetBroadcastListResponse
        )
    }

    /**
     * Returns a list of suggested audio files based on a user's playlist or a particular audio file.
     */
    public async audioGetRecommendations(params: MethodsProps.AudioGetRecommendationsParams): Promise<Responses.AudioGetRecommendationsResponse> {
        return this.call(
            'audio.getRecommendations',
            {
                target_audio: params.targetAudio,
                user_id: params.userId,
                offset: params.offset,
                count: params.count,
                shuffle: params.shuffle,
                access_token: params.accessToken
            },
            Responses.AudioGetRecommendationsResponse
        )
    }

    /**
     * Returns a list of audio files from the "Popular".
     */
    public async audioGetPopular(params: MethodsProps.AudioGetPopularParams): Promise<Responses.AudioGetPopularResponse> {
        return this.call(
            'audio.getPopular',
            {
                only_eng: params.onlyEng,
                genre_id: params.genreId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AudioGetPopularResponse
        )
    }

    /**
     * Returns the total number of audio files on a user or community page.
     */
    public async audioGetCount(params: MethodsProps.AudioGetCountParams): Promise<Responses.AudioGetCountResponse> {
        return this.call(
            'audio.getCount',
            {
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.AudioGetCountResponse
        )
    }

    /**
     * Completes the lead started by user.
     */
    public async leadsComplete(params: MethodsProps.LeadsCompleteParams): Promise<Responses.LeadsCompleteResponse> {
        return this.call(
            'leads.complete',
            {
                vk_sid: params.vkSid,
                secret: params.secret,
                comment: params.comment,
                access_token: params.accessToken
            },
            Responses.LeadsCompleteResponse
        )
    }

    /**
     * Creates new session for the user passing the offer.
     */
    public async leadsStart(params: MethodsProps.LeadsStartParams): Promise<Responses.LeadsStartResponse> {
        return this.call(
            'leads.start',
            {
                lead_id: params.leadId,
                secret: params.secret,
                access_token: params.accessToken
            },
            Responses.LeadsStartResponse
        )
    }

    /**
     * Returns lead stats data.
     */
    public async leadsGetStats(params: MethodsProps.LeadsGetStatsParams): Promise<Responses.LeadsGetStatsResponse> {
        return this.call(
            'leads.getStats',
            {
                lead_id: params.leadId,
                secret: params.secret,
                date_start: params.dateStart,
                date_end: params.dateEnd,
                access_token: params.accessToken
            },
            Responses.LeadsGetStatsResponse
        )
    }

    /**
     * Returns a list of last user actions for the offer.
     */
    public async leadsGetUsers(params: MethodsProps.LeadsGetUsersParams): Promise<Responses.LeadsGetUsersResponse> {
        return this.call(
            'leads.getUsers',
            {
                offer_id: params.offerId,
                secret: params.secret,
                offset: params.offset,
                count: params.count,
                status: params.status,
                reverse: params.reverse,
                access_token: params.accessToken
            },
            Responses.LeadsGetUsersResponse
        )
    }

    /**
     * Checks if the user can start the lead.
     */
    public async leadsCheckUser(params: MethodsProps.LeadsCheckUserParams): Promise<Responses.LeadsCheckUserResponse> {
        return this.call(
            'leads.checkUser',
            {
                lead_id: params.leadId,
                test_result: params.testResult,
                age: params.age,
                country: params.country,
                access_token: params.accessToken
            },
            Responses.LeadsCheckUserResponse
        )
    }

    /**
     * Counts the metric event.
     */
    public async leadsMetricHit(params: MethodsProps.LeadsMetricHitParams): Promise<Responses.LeadsMetricHitResponse> {
        return this.call(
            'leads.metricHit',
            {
                data: params.data,
                access_token: params.accessToken
            },
            Responses.LeadsMetricHitResponse
        )
    }

    /**
     * Returns information about a wiki page.
     */
    public async pagesGet(params: MethodsProps.PagesGetParams): Promise<Responses.PagesGetResponse> {
        return this.call(
            'pages.get',
            {
                owner_id: params.ownerId,
                page_id: params.pageId,
                global: params.global,
                site_preview: params.sitePreview,
                title: params.title,
                need_source: params.needSource,
                need_html: params.needHtml,
                access_token: params.accessToken
            },
            Responses.PagesGetResponse
        )
    }

    /**
     * Saves the text of a wiki page.
     */
    public async pagesSave(params: MethodsProps.PagesSaveParams): Promise<Responses.PagesSaveResponse> {
        return this.call(
            'pages.save',
            {
                text: params.text,
                page_id: params.pageId,
                group_id: params.groupId,
                user_id: params.userId,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.PagesSaveResponse
        )
    }

    /**
     * Saves modified read and edit access settings for a wiki page.
     */
    public async pagesSaveAccess(params: MethodsProps.PagesSaveAccessParams): Promise<Responses.PagesSaveAccessResponse> {
        return this.call(
            'pages.saveAccess',
            {
                page_id: params.pageId,
                group_id: params.groupId,
                user_id: params.userId,
                view: params.view,
                edit: params.edit,
                access_token: params.accessToken
            },
            Responses.PagesSaveAccessResponse
        )
    }

    /**
     * Returns a list of all previous versions of a wiki page.
     */
    public async pagesGetHistory(params: MethodsProps.PagesGetHistoryParams): Promise<Responses.PagesGetHistoryResponse> {
        return this.call(
            'pages.getHistory',
            {
                page_id: params.pageId,
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.PagesGetHistoryResponse
        )
    }

    /**
     * Returns a list of wiki pages in a group.
     */
    public async pagesGetTitles(params: MethodsProps.PagesGetTitlesParams): Promise<Responses.PagesGetTitlesResponse> {
        return this.call(
            'pages.getTitles',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PagesGetTitlesResponse
        )
    }

    /**
     * Returns the text of one of the previous versions of a wiki page.
     */
    public async pagesGetVersion(params: MethodsProps.PagesGetVersionParams): Promise<Responses.PagesGetVersionResponse> {
        return this.call(
            'pages.getVersion',
            {
                version_id: params.versionId,
                group_id: params.groupId,
                user_id: params.userId,
                need_html: params.needHtml,
                access_token: params.accessToken
            },
            Responses.PagesGetVersionResponse
        )
    }

    /**
     * Returns HTML representation of the wiki markup.
     */
    public async pagesParseWiki(params: MethodsProps.PagesParseWikiParams): Promise<Responses.PagesParseWikiResponse> {
        return this.call(
            'pages.parseWiki',
            {
                text: params.text,
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.PagesParseWikiResponse
        )
    }

    /**
     * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
     */
    public async pagesClearCache(params: MethodsProps.PagesClearCacheParams): Promise<Responses.PagesClearCacheResponse> {
        return this.call(
            'pages.clearCache',
            {
                url: params.url,
                access_token: params.accessToken
            },
            Responses.PagesClearCacheResponse
        )
    }

    /**
     * Returns information specifying whether a user is a member of a community.
     */
    public async groupsIsMember(params: MethodsProps.GroupsIsMemberParams): Promise<Responses.GroupsIsMemberResponse> {
        return this.call(
            'groups.isMember',
            {
                group_id: params.groupId,
                user_id: params.userId,
                user_ids: params.userIds,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.GroupsIsMemberResponse
        )
    }

    /**
     * Returns information about communities by their IDs.
     */
    public async groupsGetById(params: MethodsProps.GroupsGetByIdParams): Promise<Responses.GroupsGetByIdResponse> {
        return this.call(
            'groups.getById',
            {
                group_ids: params.groupIds,
                group_id: params.groupId,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.GroupsGetByIdResponse
        )
    }

    /**
     * Returns a list of the communities to which a user belongs.; ;
     */
    public async groupsGet(params: MethodsProps.GroupsGetParams): Promise<Responses.GroupsGetResponse> {
        return this.call(
            'groups.get',
            {
                user_id: params.userId,
                extended: params.extended,
                filter: params.filter,
                fields: params.fields,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.GroupsGetResponse
        )
    }

    /**
     * Returns a list of community members.
     */
    public async groupsGetMembers(params: MethodsProps.GroupsGetMembersParams): Promise<Responses.GroupsGetMembersResponse> {
        return this.call(
            'groups.getMembers',
            {
                group_id: params.groupId,
                sort: params.sort,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                filter: params.filter,
                access_token: params.accessToken
            },
            Responses.GroupsGetMembersResponse
        )
    }

    /**
     * With this method you can join the group or public page, and also confirm your participation in an event.
     */
    public async groupsJoin(params: MethodsProps.GroupsJoinParams): Promise<Responses.GroupsJoinResponse> {
        return this.call(
            'groups.join',
            {
                group_id: params.groupId,
                not_sure: params.notSure,
                access_token: params.accessToken
            },
            Responses.GroupsJoinResponse
        )
    }

    /**
     * With this method you can leave a group, public page, or event.; ;
     */
    public async groupsLeave(params: MethodsProps.GroupsLeaveParams): Promise<Responses.GroupsLeaveResponse> {
        return this.call(
            'groups.leave',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.GroupsLeaveResponse
        )
    }

    /**
     * Returns a list of communities matching the search criteria.
     */
    public async groupsSearch(params: MethodsProps.GroupsSearchParams): Promise<Responses.GroupsSearchResponse> {
        return this.call(
            'groups.search',
            {
                q: params.q,
                type: params.type,
                country_id: params.countryId,
                city_id: params.cityId,
                future: params.future,
                market: params.market,
                sort: params.sort,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.GroupsSearchResponse
        )
    }

    /**
     * Returns communities list for a catalog category.
     */
    public async groupsGetCatalog(params: MethodsProps.GroupsGetCatalogParams): Promise<Responses.GroupsGetCatalogResponse> {
        return this.call(
            'groups.getCatalog',
            {
                category_id: params.categoryId,
                subcategory_id: params.subcategoryId,
                access_token: params.accessToken
            },
            Responses.GroupsGetCatalogResponse
        )
    }

    /**
     * Returns categories list for communities catalog
     */
    public async groupsGetCatalogInfo(params: MethodsProps.GroupsGetCatalogInfoParams): Promise<Responses.GroupsGetCatalogInfoResponse> {
        return this.call(
            'groups.getCatalogInfo',
            {
                extended: params.extended,
                subcategories: params.subcategories,
                access_token: params.accessToken
            },
            Responses.GroupsGetCatalogInfoResponse
        )
    }

    /**
     * Returns a list of invitations to join communities and events.; ;
     */
    public async groupsGetInvites(params: MethodsProps.GroupsGetInvitesParams): Promise<Responses.GroupsGetInvitesResponse> {
        return this.call(
            'groups.getInvites',
            {
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.GroupsGetInvitesResponse
        )
    }

    /**
     * Returns invited users list of a community
     */
    public async groupsGetInvitedUsers(params: MethodsProps.GroupsGetInvitedUsersParams): Promise<Responses.GroupsGetInvitedUsersResponse> {
        return this.call(
            'groups.getInvitedUsers',
            {
                group_id: params.groupId,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.GroupsGetInvitedUsersResponse
        )
    }

    /**
     * Adds a user to a community blacklist.
     */
    public async groupsBanUser(params: MethodsProps.GroupsBanUserParams): Promise<Responses.GroupsBanUserResponse> {
        return this.call(
            'groups.banUser',
            {
                group_id: params.groupId,
                user_id: params.userId,
                end_date: params.endDate,
                reason: params.reason,
                comment: params.comment,
                comment_visible: params.commentVisible,
                access_token: params.accessToken
            },
            Responses.GroupsBanUserResponse
        )
    }

    /**
     * Removes a user from a community blacklist.
     */
    public async groupsUnbanUser(params: MethodsProps.GroupsUnbanUserParams): Promise<Responses.GroupsUnbanUserResponse> {
        return this.call(
            'groups.unbanUser',
            {
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.GroupsUnbanUserResponse
        )
    }

    /**
     * Returns a list of users on a community blacklist.
     */
    public async groupsGetBanned(params: MethodsProps.GroupsGetBannedParams): Promise<Responses.GroupsGetBannedResponse> {
        return this.call(
            'groups.getBanned',
            {
                group_id: params.groupId,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.GroupsGetBannedResponse
        )
    }

    /**
     * Creates a new community.
     */
    public async groupsCreate(params: MethodsProps.GroupsCreateParams): Promise<Responses.GroupsCreateResponse> {
        return this.call(
            'groups.create',
            {
                title: params.title,
                description: params.description,
                type: params.type,
                public_category: params.publicCategory,
                subtype: params.subtype,
                access_token: params.accessToken
            },
            Responses.GroupsCreateResponse
        )
    }

    /**
     * Edits a community.
     */
    public async groupsEdit(params: MethodsProps.GroupsEditParams): Promise<Responses.GroupsEditResponse> {
        return this.call(
            'groups.edit',
            {
                group_id: params.groupId,
                title: params.title,
                description: params.description,
                screen_name: params.screenName,
                access: params.access,
                website: params.website,
                subject: params.subject,
                email: params.email,
                phone: params.phone,
                rss: params.rss,
                event_start_date: params.eventStartDate,
                event_finish_date: params.eventFinishDate,
                event_group_id: params.eventGroupId,
                public_category: params.publicCategory,
                public_subcategory: params.publicSubcategory,
                public_date: params.publicDate,
                wall: params.wall,
                topics: params.topics,
                photos: params.photos,
                video: params.video,
                audio: params.audio,
                links: params.links,
                events: params.events,
                places: params.places,
                contacts: params.contacts,
                docs: params.docs,
                wiki: params.wiki,
                messages: params.messages,
                age_limits: params.ageLimits,
                market: params.market,
                market_comments: params.marketComments,
                market_country: params.marketCountry,
                market_city: params.marketCity,
                market_currency: params.marketCurrency,
                market_contact: params.marketContact,
                market_wiki: params.marketWiki,
                obscene_filter: params.obsceneFilter,
                obscene_stopwords: params.obsceneStopwords,
                obscene_words: params.obsceneWords,
                access_token: params.accessToken
            },
            Responses.GroupsEditResponse
        )
    }

    /**
     * Edits the place in community.
     */
    public async groupsEditPlace(params: MethodsProps.GroupsEditPlaceParams): Promise<Responses.GroupsEditPlaceResponse> {
        return this.call(
            'groups.editPlace',
            {
                group_id: params.groupId,
                title: params.title,
                address: params.address,
                country_id: params.countryId,
                city_id: params.cityId,
                latitude: params.latitude,
                longitude: params.longitude,
                access_token: params.accessToken
            },
            Responses.GroupsEditPlaceResponse
        )
    }

    /**
     * Returns community settings.
     */
    public async groupsGetSettings(params: MethodsProps.GroupsGetSettingsParams): Promise<Responses.GroupsGetSettingsResponse> {
        return this.call(
            'groups.getSettings',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.GroupsGetSettingsResponse
        )
    }

    /**
     * Returns a list of requests to the community.
     */
    public async groupsGetRequests(params: MethodsProps.GroupsGetRequestsParams): Promise<Responses.GroupsGetRequestsResponse> {
        return this.call(
            'groups.getRequests',
            {
                group_id: params.groupId,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.GroupsGetRequestsResponse
        )
    }

    /**
     * Allows to add, remove or edit the community manager.
     */
    public async groupsEditManager(params: MethodsProps.GroupsEditManagerParams): Promise<Responses.GroupsEditManagerResponse> {
        return this.call(
            'groups.editManager',
            {
                group_id: params.groupId,
                user_id: params.userId,
                role: params.role,
                is_contact: params.isContact,
                contact_position: params.contactPosition,
                contact_phone: params.contactPhone,
                contact_email: params.contactEmail,
                access_token: params.accessToken
            },
            Responses.GroupsEditManagerResponse
        )
    }

    /**
     * Allows to invite friends to the community.
     */
    public async groupsInvite(params: MethodsProps.GroupsInviteParams): Promise<Responses.GroupsInviteResponse> {
        return this.call(
            'groups.invite',
            {
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.GroupsInviteResponse
        )
    }

    /**
     * Allows to add a link to the community.
     */
    public async groupsAddLink(params: MethodsProps.GroupsAddLinkParams): Promise<Responses.GroupsAddLinkResponse> {
        return this.call(
            'groups.addLink',
            {
                group_id: params.groupId,
                link: params.link,
                text: params.text,
                access_token: params.accessToken
            },
            Responses.GroupsAddLinkResponse
        )
    }

    /**
     * Allows to delete a link from the community.
     */
    public async groupsDeleteLink(params: MethodsProps.GroupsDeleteLinkParams): Promise<Responses.GroupsDeleteLinkResponse> {
        return this.call(
            'groups.deleteLink',
            {
                group_id: params.groupId,
                link_id: params.linkId,
                access_token: params.accessToken
            },
            Responses.GroupsDeleteLinkResponse
        )
    }

    /**
     * Allows to edit a link in the community.
     */
    public async groupsEditLink(params: MethodsProps.GroupsEditLinkParams): Promise<Responses.GroupsEditLinkResponse> {
        return this.call(
            'groups.editLink',
            {
                group_id: params.groupId,
                link_id: params.linkId,
                text: params.text,
                access_token: params.accessToken
            },
            Responses.GroupsEditLinkResponse
        )
    }

    /**
     * Allows to reorder links in the community.
     */
    public async groupsReorderLink(params: MethodsProps.GroupsReorderLinkParams): Promise<Responses.GroupsReorderLinkResponse> {
        return this.call(
            'groups.reorderLink',
            {
                group_id: params.groupId,
                link_id: params.linkId,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.GroupsReorderLinkResponse
        )
    }

    /**
     * Removes a user from the community.
     */
    public async groupsRemoveUser(params: MethodsProps.GroupsRemoveUserParams): Promise<Responses.GroupsRemoveUserResponse> {
        return this.call(
            'groups.removeUser',
            {
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.GroupsRemoveUserResponse
        )
    }

    /**
     * Allows to approve join request to the community.
     */
    public async groupsApproveRequest(params: MethodsProps.GroupsApproveRequestParams): Promise<Responses.GroupsApproveRequestResponse> {
        return this.call(
            'groups.approveRequest',
            {
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.GroupsApproveRequestResponse
        )
    }

    /**
     * Returns Callback API confirmation code for the community.
     */
    public async groupsGetCallbackConfirmationCode(params: MethodsProps.GroupsGetCallbackConfirmationCodeParams): Promise<Responses.GroupsGetCallbackConfirmationCodeResponse> {
        return this.call(
            'groups.getCallbackConfirmationCode',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.GroupsGetCallbackConfirmationCodeResponse
        )
    }

    /**
     * Returns [vk.com/dev/callback_api|Callback API] server settings for the community.
     */
    public async groupsGetCallbackServerSettings(params: MethodsProps.GroupsGetCallbackServerSettingsParams): Promise<Responses.GroupsGetCallbackServerSettingsResponse> {
        return this.call(
            'groups.getCallbackServerSettings',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.GroupsGetCallbackServerSettingsResponse
        )
    }

    /**
     * Returns [vk.com/dev/callback_api|Callback API] notifications settings.
     */
    public async groupsGetCallbackSettings(params: MethodsProps.GroupsGetCallbackSettingsParams): Promise<Responses.GroupsGetCallbackSettingsResponse> {
        return this.call(
            'groups.getCallbackSettings',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.GroupsGetCallbackSettingsResponse
        )
    }

    /**
     * Allow to set [vk.com/dev/callback_api|Callback API] server URL for the community. ; ;
     */
    public async groupsSetCallbackServer(params: MethodsProps.GroupsSetCallbackServerParams): Promise<Responses.GroupsSetCallbackServerResponse> {
        return this.call(
            'groups.setCallbackServer',
            {
                group_id: params.groupId,
                server_url: params.serverUrl,
                access_token: params.accessToken
            },
            Responses.GroupsSetCallbackServerResponse
        )
    }

    /**
     * Allow to set [vk.com/dev/callback_api|Callback API] server settings.
     */
    public async groupsSetCallbackServerSettings(params: MethodsProps.GroupsSetCallbackServerSettingsParams): Promise<Responses.GroupsSetCallbackServerSettingsResponse> {
        return this.call(
            'groups.setCallbackServerSettings',
            {
                group_id: params.groupId,
                secret_key: params.secretKey,
                access_token: params.accessToken
            },
            Responses.GroupsSetCallbackServerSettingsResponse
        )
    }

    /**
     * Allow to set notifications settings for group.
     */
    public async groupsSetCallbackSettings(params: MethodsProps.GroupsSetCallbackSettingsParams): Promise<Responses.GroupsSetCallbackSettingsResponse> {
        return this.call(
            'groups.setCallbackSettings',
            {
                group_id: params.groupId,
                message_new: params.messageNew,
                message_allow: params.messageAllow,
                message_deny: params.messageDeny,
                photo_new: params.photoNew,
                audio_new: params.audioNew,
                video_new: params.videoNew,
                wall_reply_new: params.wallReplyNew,
                wall_reply_edit: params.wallReplyEdit,
                wall_post_new: params.wallPostNew,
                board_post_new: params.boardPostNew,
                board_post_edit: params.boardPostEdit,
                board_post_restore: params.boardPostRestore,
                board_post_delete: params.boardPostDelete,
                photo_comment_new: params.photoCommentNew,
                video_comment_new: params.videoCommentNew,
                market_comment_new: params.marketCommentNew,
                group_join: params.groupJoin,
                group_leave: params.groupLeave,
                access_token: params.accessToken
            },
            Responses.GroupsSetCallbackSettingsResponse
        )
    }

    /**
     * Returns a list of topics on a community's discussion board.
     */
    public async boardGetTopics(params: MethodsProps.BoardGetTopicsParams): Promise<Responses.BoardGetTopicsResponse> {
        return this.call(
            'board.getTopics',
            {
                group_id: params.groupId,
                topic_ids: params.topicIds,
                order: params.order,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                preview: params.preview,
                preview_length: params.previewLength,
                access_token: params.accessToken
            },
            Responses.BoardGetTopicsResponse
        )
    }

    /**
     * Returns a list of comments on a topic on a community's discussion board.
     */
    public async boardGetComments(params: MethodsProps.BoardGetCommentsParams): Promise<Responses.BoardGetCommentsResponse> {
        return this.call(
            'board.getComments',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                need_likes: params.needLikes,
                start_comment_id: params.startCommentId,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                sort: params.sort,
                access_token: params.accessToken
            },
            Responses.BoardGetCommentsResponse
        )
    }

    /**
     * Creates a new topic on a community's discussion board.
     */
    public async boardAddTopic(params: MethodsProps.BoardAddTopicParams): Promise<Responses.BoardAddTopicResponse> {
        return this.call(
            'board.addTopic',
            {
                group_id: params.groupId,
                title: params.title,
                text: params.text,
                from_group: params.fromGroup,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.BoardAddTopicResponse
        )
    }

    /**
     * Adds a comment on a topic on a community's discussion board.
     */
    public async boardCreateComment(params: MethodsProps.BoardCreateCommentParams): Promise<Responses.BoardCreateCommentResponse> {
        return this.call(
            'board.createComment',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                message: params.message,
                attachments: params.attachments,
                from_group: params.fromGroup,
                sticker_id: params.stickerId,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.BoardCreateCommentResponse
        )
    }

    /**
     * Deletes a topic from a community's discussion board.
     */
    public async boardDeleteTopic(params: MethodsProps.BoardDeleteTopicParams): Promise<Responses.BoardDeleteTopicResponse> {
        return this.call(
            'board.deleteTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                access_token: params.accessToken
            },
            Responses.BoardDeleteTopicResponse
        )
    }

    /**
     * Edits the title of a topic on a community's discussion board.
     */
    public async boardEditTopic(params: MethodsProps.BoardEditTopicParams): Promise<Responses.BoardEditTopicResponse> {
        return this.call(
            'board.editTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.BoardEditTopicResponse
        )
    }

    /**
     * Edits a comment on a topic on a community's discussion board.
     */
    public async boardEditComment(params: MethodsProps.BoardEditCommentParams): Promise<Responses.BoardEditCommentResponse> {
        return this.call(
            'board.editComment',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                comment_id: params.commentId,
                message: params.message,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.BoardEditCommentResponse
        )
    }

    /**
     * Restores a comment deleted from a topic on a community's discussion board.
     */
    public async boardRestoreComment(params: MethodsProps.BoardRestoreCommentParams): Promise<Responses.BoardRestoreCommentResponse> {
        return this.call(
            'board.restoreComment',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.BoardRestoreCommentResponse
        )
    }

    /**
     * Deletes a comment on a topic on a community's discussion board.
     */
    public async boardDeleteComment(params: MethodsProps.BoardDeleteCommentParams): Promise<Responses.BoardDeleteCommentResponse> {
        return this.call(
            'board.deleteComment',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.BoardDeleteCommentResponse
        )
    }

    /**
     * Re-opens a previously closed topic on a community's discussion board.
     */
    public async boardOpenTopic(params: MethodsProps.BoardOpenTopicParams): Promise<Responses.BoardOpenTopicResponse> {
        return this.call(
            'board.openTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                access_token: params.accessToken
            },
            Responses.BoardOpenTopicResponse
        )
    }

    /**
     * Closes a topic on a community's discussion board so that comments cannot be posted.
     */
    public async boardCloseTopic(params: MethodsProps.BoardCloseTopicParams): Promise<Responses.BoardCloseTopicResponse> {
        return this.call(
            'board.closeTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                access_token: params.accessToken
            },
            Responses.BoardCloseTopicResponse
        )
    }

    /**
     * Pins a topic (fixes its place) to the top of a community's discussion board.
     */
    public async boardFixTopic(params: MethodsProps.BoardFixTopicParams): Promise<Responses.BoardFixTopicResponse> {
        return this.call(
            'board.fixTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                access_token: params.accessToken
            },
            Responses.BoardFixTopicResponse
        )
    }

    /**
     * Unpins a pinned topic from the top of a community's discussion board.
     */
    public async boardUnfixTopic(params: MethodsProps.BoardUnfixTopicParams): Promise<Responses.BoardUnfixTopicResponse> {
        return this.call(
            'board.unfixTopic',
            {
                group_id: params.groupId,
                topic_id: params.topicId,
                access_token: params.accessToken
            },
            Responses.BoardUnfixTopicResponse
        )
    }

    /**
     * Returns detailed information about videos.
     */
    public async videoGet(params: MethodsProps.VideoGetParams): Promise<Responses.VideoGetResponse> {
        return this.call(
            'video.get',
            {
                owner_id: params.ownerId,
                videos: params.videos,
                album_id: params.albumId,
                count: params.count,
                offset: params.offset,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetResponse
        )
    }

    /**
     * Edits information about a video on a user or community page.
     */
    public async videoEdit(params: MethodsProps.VideoEditParams): Promise<Responses.VideoEditResponse> {
        return this.call(
            'video.edit',
            {
                owner_id: params.ownerId,
                video_id: params.videoId,
                name: params.name,
                desc: params.desc,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                no_comments: params.noComments,
                repeat: params.repeat,
                access_token: params.accessToken
            },
            Responses.VideoEditResponse
        )
    }

    /**
     * Adds a video to a user or community page.
     */
    public async videoAdd(params: MethodsProps.VideoAddParams): Promise<Responses.VideoAddResponse> {
        return this.call(
            'video.add',
            {
                target_id: params.targetId,
                video_id: params.videoId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.VideoAddResponse
        )
    }

    /**
     * Returns a server address (required for upload) and video data.
     */
    public async videoSave(params: MethodsProps.VideoSaveParams): Promise<Responses.VideoSaveResponse> {
        return this.call(
            'video.save',
            {
                name: params.name,
                description: params.description,
                is_private: params.isPrivate,
                wallpost: params.wallpost,
                link: params.link,
                group_id: params.groupId,
                album_id: params.albumId,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                no_comments: params.noComments,
                repeat: params.repeat,
                access_token: params.accessToken
            },
            Responses.VideoSaveResponse
        )
    }

    /**
     * Deletes a video from a user or community page.
     */
    public async videoDelete(params: MethodsProps.VideoDeleteParams): Promise<Responses.VideoDeleteResponse> {
        return this.call(
            'video.delete',
            {
                video_id: params.videoId,
                owner_id: params.ownerId,
                target_id: params.targetId,
                access_token: params.accessToken
            },
            Responses.VideoDeleteResponse
        )
    }

    /**
     * Restores a previously deleted video.
     */
    public async videoRestore(params: MethodsProps.VideoRestoreParams): Promise<Responses.VideoRestoreResponse> {
        return this.call(
            'video.restore',
            {
                video_id: params.videoId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.VideoRestoreResponse
        )
    }

    /**
     * Returns a list of videos under the set search criterion.
     */
    public async videoSearch(params: MethodsProps.VideoSearchParams): Promise<Responses.VideoSearchResponse> {
        return this.call(
            'video.search',
            {
                q: params.q,
                sort: params.sort,
                hd: params.hd,
                adult: params.adult,
                filters: params.filters,
                search_own: params.searchOwn,
                offset: params.offset,
                longer: params.longer,
                shorter: params.shorter,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoSearchResponse
        )
    }

    /**
     * Returns list of videos in which the user is tagged.
     */
    public async videoGetUserVideos(params: MethodsProps.VideoGetUserVideosParams): Promise<Responses.VideoGetUserVideosResponse> {
        return this.call(
            'video.getUserVideos',
            {
                user_id: params.userId,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetUserVideosResponse
        )
    }

    /**
     * Returns a list of video albums owned by a user or community.
     */
    public async videoGetAlbums(params: MethodsProps.VideoGetAlbumsParams): Promise<Responses.VideoGetAlbumsResponse> {
        return this.call(
            'video.getAlbums',
            {
                owner_id: params.ownerId,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetAlbumsResponse
        )
    }

    /**
     * Returns video album info
     */
    public async videoGetAlbumById(params: MethodsProps.VideoGetAlbumByIdParams): Promise<Responses.VideoGetAlbumByIdResponse> {
        return this.call(
            'video.getAlbumById',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.VideoGetAlbumByIdResponse
        )
    }

    /**
     * Creates an empty album for videos.
     */
    public async videoAddAlbum(params: MethodsProps.VideoAddAlbumParams): Promise<Responses.VideoAddAlbumResponse> {
        return this.call(
            'video.addAlbum',
            {
                group_id: params.groupId,
                title: params.title,
                privacy: params.privacy,
                access_token: params.accessToken
            },
            Responses.VideoAddAlbumResponse
        )
    }

    /**
     * Edits the title of a video album.
     */
    public async videoEditAlbum(params: MethodsProps.VideoEditAlbumParams): Promise<Responses.VideoEditAlbumResponse> {
        return this.call(
            'video.editAlbum',
            {
                group_id: params.groupId,
                album_id: params.albumId,
                title: params.title,
                privacy: params.privacy,
                access_token: params.accessToken
            },
            Responses.VideoEditAlbumResponse
        )
    }

    /**
     * Deletes a video album.
     */
    public async videoDeleteAlbum(params: MethodsProps.VideoDeleteAlbumParams): Promise<Responses.VideoDeleteAlbumResponse> {
        return this.call(
            'video.deleteAlbum',
            {
                group_id: params.groupId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.VideoDeleteAlbumResponse
        )
    }

    /**
     * Reorders the album in the list of user video albums.
     */
    public async videoReorderAlbums(params: MethodsProps.VideoReorderAlbumsParams): Promise<Responses.VideoReorderAlbumsResponse> {
        return this.call(
            'video.reorderAlbums',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.VideoReorderAlbumsResponse
        )
    }

    /**
     * Reorders the video in the video album.
     */
    public async videoReorderVideos(params: MethodsProps.VideoReorderVideosParams): Promise<Responses.VideoReorderVideosResponse> {
        return this.call(
            'video.reorderVideos',
            {
                target_id: params.targetId,
                album_id: params.albumId,
                owner_id: params.ownerId,
                video_id: params.videoId,
                before_owner_id: params.beforeOwnerId,
                before_video_id: params.beforeVideoId,
                after_owner_id: params.afterOwnerId,
                after_video_id: params.afterVideoId,
                access_token: params.accessToken
            },
            Responses.VideoReorderVideosResponse
        )
    }

    /**
     * undefined
     */
    public async videoAddToAlbum(params: MethodsProps.VideoAddToAlbumParams): Promise<Responses.VideoAddToAlbumResponse> {
        return this.call(
            'video.addToAlbum',
            {
                target_id: params.targetId,
                album_id: params.albumId,
                album_ids: params.albumIds,
                owner_id: params.ownerId,
                video_id: params.videoId,
                access_token: params.accessToken
            },
            Responses.VideoAddToAlbumResponse
        )
    }

    /**
     * undefined
     */
    public async videoRemoveFromAlbum(params: MethodsProps.VideoRemoveFromAlbumParams): Promise<Responses.VideoRemoveFromAlbumResponse> {
        return this.call(
            'video.removeFromAlbum',
            {
                target_id: params.targetId,
                album_id: params.albumId,
                album_ids: params.albumIds,
                owner_id: params.ownerId,
                video_id: params.videoId,
                access_token: params.accessToken
            },
            Responses.VideoRemoveFromAlbumResponse
        )
    }

    /**
     * undefined
     */
    public async videoGetAlbumsByVideo(params: MethodsProps.VideoGetAlbumsByVideoParams): Promise<Responses.VideoGetAlbumsByVideoResponse> {
        return this.call(
            'video.getAlbumsByVideo',
            {
                target_id: params.targetId,
                owner_id: params.ownerId,
                video_id: params.videoId,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetAlbumsByVideoResponse
        )
    }

    /**
     * Returns a list of comments on a video.
     */
    public async videoGetComments(params: MethodsProps.VideoGetCommentsParams): Promise<Responses.VideoGetCommentsResponse> {
        return this.call(
            'video.getComments',
            {
                owner_id: params.ownerId,
                video_id: params.videoId,
                need_likes: params.needLikes,
                start_comment_id: params.startCommentId,
                offset: params.offset,
                count: params.count,
                sort: params.sort,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetCommentsResponse
        )
    }

    /**
     * Adds a new comment on a video.
     */
    public async videoCreateComment(params: MethodsProps.VideoCreateCommentParams): Promise<Responses.VideoCreateCommentResponse> {
        return this.call(
            'video.createComment',
            {
                owner_id: params.ownerId,
                video_id: params.videoId,
                message: params.message,
                attachments: params.attachments,
                from_group: params.fromGroup,
                reply_to_comment: params.replyToComment,
                sticker_id: params.stickerId,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.VideoCreateCommentResponse
        )
    }

    /**
     * Deletes a comment on a video.
     */
    public async videoDeleteComment(params: MethodsProps.VideoDeleteCommentParams): Promise<Responses.VideoDeleteCommentResponse> {
        return this.call(
            'video.deleteComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.VideoDeleteCommentResponse
        )
    }

    /**
     * Restores a previously deleted comment on a video.
     */
    public async videoRestoreComment(params: MethodsProps.VideoRestoreCommentParams): Promise<Responses.VideoRestoreCommentResponse> {
        return this.call(
            'video.restoreComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.VideoRestoreCommentResponse
        )
    }

    /**
     * Edits the text of a comment on a video.
     */
    public async videoEditComment(params: MethodsProps.VideoEditCommentParams): Promise<Responses.VideoEditCommentResponse> {
        return this.call(
            'video.editComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                message: params.message,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.VideoEditCommentResponse
        )
    }

    /**
     * Returns a list of tags on a video.
     */
    public async videoGetTags(params: MethodsProps.VideoGetTagsParams): Promise<Responses.VideoGetTagsResponse> {
        return this.call(
            'video.getTags',
            {
                owner_id: params.ownerId,
                video_id: params.videoId,
                access_token: params.accessToken
            },
            Responses.VideoGetTagsResponse
        )
    }

    /**
     * Adds a tag on a video.
     */
    public async videoPutTag(params: MethodsProps.VideoPutTagParams): Promise<Responses.VideoPutTagResponse> {
        return this.call(
            'video.putTag',
            {
                user_id: params.userId,
                owner_id: params.ownerId,
                video_id: params.videoId,
                tagged_name: params.taggedName,
                access_token: params.accessToken
            },
            Responses.VideoPutTagResponse
        )
    }

    /**
     * Removes a tag from a video.
     */
    public async videoRemoveTag(params: MethodsProps.VideoRemoveTagParams): Promise<Responses.VideoRemoveTagResponse> {
        return this.call(
            'video.removeTag',
            {
                tag_id: params.tagId,
                owner_id: params.ownerId,
                video_id: params.videoId,
                access_token: params.accessToken
            },
            Responses.VideoRemoveTagResponse
        )
    }

    /**
     * Returns a list of videos with tags that have not been viewed.
     */
    public async videoGetNewTags(params: MethodsProps.VideoGetNewTagsParams): Promise<Responses.VideoGetNewTagsResponse> {
        return this.call(
            'video.getNewTags',
            {
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.VideoGetNewTagsResponse
        )
    }

    /**
     * Reports (submits a complaint about) a video.
     */
    public async videoReport(params: MethodsProps.VideoReportParams): Promise<Responses.VideoReportResponse> {
        return this.call(
            'video.report',
            {
                owner_id: params.ownerId,
                video_id: params.videoId,
                reason: params.reason,
                comment: params.comment,
                search_query: params.searchQuery,
                access_token: params.accessToken
            },
            Responses.VideoReportResponse
        )
    }

    /**
     * Reports (submits a complaint about) a comment on a video.;
     */
    public async videoReportComment(params: MethodsProps.VideoReportCommentParams): Promise<Responses.VideoReportCommentResponse> {
        return this.call(
            'video.reportComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.VideoReportCommentResponse
        )
    }

    /**
     * Returns video catalog
     */
    public async videoGetCatalog(params: MethodsProps.VideoGetCatalogParams): Promise<Responses.VideoGetCatalogResponse> {
        return this.call(
            'video.getCatalog',
            {
                count: params.count,
                items_count: params.itemsCount,
                from: params.from,
                filters: params.filters,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetCatalogResponse
        )
    }

    /**
     * Returns a separate catalog section
     */
    public async videoGetCatalogSection(params: MethodsProps.VideoGetCatalogSectionParams): Promise<Responses.VideoGetCatalogSectionResponse> {
        return this.call(
            'video.getCatalogSection',
            {
                section_id: params.sectionId,
                from: params.from,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.VideoGetCatalogSectionResponse
        )
    }

    /**
     * Hides a video catalog section from a user.
     */
    public async videoHideCatalogSection(params: MethodsProps.VideoHideCatalogSectionParams): Promise<Responses.VideoHideCatalogSectionResponse> {
        return this.call(
            'video.hideCatalogSection',
            {
                section_id: params.sectionId,
                access_token: params.accessToken
            },
            Responses.VideoHideCatalogSectionResponse
        )
    }

    /**
     * Returns a list of notes created by a user.
     */
    public async notesGet(params: MethodsProps.NotesGetParams): Promise<Responses.NotesGetResponse> {
        return this.call(
            'notes.get',
            {
                note_ids: params.noteIds,
                user_id: params.userId,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.NotesGetResponse
        )
    }

    /**
     * Returns a note by its ID.
     */
    public async notesGetById(params: MethodsProps.NotesGetByIdParams): Promise<Responses.NotesGetByIdResponse> {
        return this.call(
            'notes.getById',
            {
                note_id: params.noteId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.NotesGetByIdResponse
        )
    }

    /**
     * Creates a new note for the current user.
     */
    public async notesAdd(params: MethodsProps.NotesAddParams): Promise<Responses.NotesAddResponse> {
        return this.call(
            'notes.add',
            {
                title: params.title,
                text: params.text,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                access_token: params.accessToken
            },
            Responses.NotesAddResponse
        )
    }

    /**
     * Edits a note of the current user.
     */
    public async notesEdit(params: MethodsProps.NotesEditParams): Promise<Responses.NotesEditResponse> {
        return this.call(
            'notes.edit',
            {
                note_id: params.noteId,
                title: params.title,
                text: params.text,
                privacy_view: params.privacyView,
                privacy_comment: params.privacyComment,
                access_token: params.accessToken
            },
            Responses.NotesEditResponse
        )
    }

    /**
     * Deletes a note of the current user.
     */
    public async notesDelete(params: MethodsProps.NotesDeleteParams): Promise<Responses.NotesDeleteResponse> {
        return this.call(
            'notes.delete',
            {
                note_id: params.noteId,
                access_token: params.accessToken
            },
            Responses.NotesDeleteResponse
        )
    }

    /**
     * Returns a list of comments on a note.
     */
    public async notesGetComments(params: MethodsProps.NotesGetCommentsParams): Promise<Responses.NotesGetCommentsResponse> {
        return this.call(
            'notes.getComments',
            {
                note_id: params.noteId,
                owner_id: params.ownerId,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.NotesGetCommentsResponse
        )
    }

    /**
     * Adds a new comment on a note.
     */
    public async notesCreateComment(params: MethodsProps.NotesCreateCommentParams): Promise<Responses.NotesCreateCommentResponse> {
        return this.call(
            'notes.createComment',
            {
                note_id: params.noteId,
                owner_id: params.ownerId,
                reply_to: params.replyTo,
                message: params.message,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.NotesCreateCommentResponse
        )
    }

    /**
     * Edits a comment on a note.
     */
    public async notesEditComment(params: MethodsProps.NotesEditCommentParams): Promise<Responses.NotesEditCommentResponse> {
        return this.call(
            'notes.editComment',
            {
                comment_id: params.commentId,
                owner_id: params.ownerId,
                message: params.message,
                access_token: params.accessToken
            },
            Responses.NotesEditCommentResponse
        )
    }

    /**
     * Deletes a comment on a note.
     */
    public async notesDeleteComment(params: MethodsProps.NotesDeleteCommentParams): Promise<Responses.NotesDeleteCommentResponse> {
        return this.call(
            'notes.deleteComment',
            {
                comment_id: params.commentId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.NotesDeleteCommentResponse
        )
    }

    /**
     * Restores a deleted comment on a note.
     */
    public async notesRestoreComment(params: MethodsProps.NotesRestoreCommentParams): Promise<Responses.NotesRestoreCommentResponse> {
        return this.call(
            'notes.restoreComment',
            {
                comment_id: params.commentId,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.NotesRestoreCommentResponse
        )
    }

    /**
     * Adds a new location to the location database.
     */
    public async placesAdd(params: MethodsProps.PlacesAddParams): Promise<Responses.PlacesAddResponse> {
        return this.call(
            'places.add',
            {
                type: params.type,
                title: params.title,
                latitude: params.latitude,
                longitude: params.longitude,
                country: params.country,
                city: params.city,
                address: params.address,
                access_token: params.accessToken
            },
            Responses.PlacesAddResponse
        )
    }

    /**
     * Returns information about locations by their IDs.
     */
    public async placesGetById(params: MethodsProps.PlacesGetByIdParams): Promise<Responses.PlacesGetByIdResponse> {
        return this.call(
            'places.getById',
            {
                places: params.places,
                access_token: params.accessToken
            },
            Responses.PlacesGetByIdResponse
        )
    }

    /**
     * Returns a list of locations that match the search criteria.
     */
    public async placesSearch(params: MethodsProps.PlacesSearchParams): Promise<Responses.PlacesSearchResponse> {
        return this.call(
            'places.search',
            {
                q: params.q,
                city: params.city,
                latitude: params.latitude,
                longitude: params.longitude,
                radius: params.radius,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.PlacesSearchResponse
        )
    }

    /**
     * Checks a user in at the specified location.
     */
    public async placesCheckin(params: MethodsProps.PlacesCheckinParams): Promise<Responses.PlacesCheckinResponse> {
        return this.call(
            'places.checkin',
            {
                place_id: params.placeId,
                text: params.text,
                latitude: params.latitude,
                longitude: params.longitude,
                friends_only: params.friendsOnly,
                services: params.services,
                access_token: params.accessToken
            },
            Responses.PlacesCheckinResponse
        )
    }

    /**
     * Returns a list of user check-ins at locations according to the set parameters.
     */
    public async placesGetCheckins(params: MethodsProps.PlacesGetCheckinsParams): Promise<Responses.PlacesGetCheckinsResponse> {
        return this.call(
            'places.getCheckins',
            {
                latitude: params.latitude,
                longitude: params.longitude,
                place: params.place,
                user_id: params.userId,
                offset: params.offset,
                count: params.count,
                timestamp: params.timestamp,
                friends_only: params.friendsOnly,
                need_places: params.needPlaces,
                access_token: params.accessToken
            },
            Responses.PlacesGetCheckinsResponse
        )
    }

    /**
     * Returns a list of all types of locations.
     */
    public async placesGetTypes(params: MethodsProps.PlacesGetTypesParams): Promise<Responses.PlacesGetTypesResponse> {
        return this.call(
            'places.getTypes',
            {
                access_token: params.accessToken
            },
            Responses.PlacesGetTypesResponse
        )
    }

    /**
     * Returns non-null values of user counters.
     */
    public async accountGetCounters(params: MethodsProps.AccountGetCountersParams): Promise<Responses.AccountGetCountersResponse> {
        return this.call(
            'account.getCounters',
            {
                filter: params.filter,
                access_token: params.accessToken
            },
            Responses.AccountGetCountersResponse
        )
    }

    /**
     * Sets an application screen name (up to 17 characters), that is shown to the user in the left menu.
     */
    public async accountSetNameInMenu(params: MethodsProps.AccountSetNameInMenuParams): Promise<Responses.AccountSetNameInMenuResponse> {
        return this.call(
            'account.setNameInMenu',
            {
                user_id: params.userId,
                name: params.name,
                access_token: params.accessToken
            },
            Responses.AccountSetNameInMenuResponse
        )
    }

    /**
     * Marks the current user as online for 15 minutes.
     */
    public async accountSetOnline(params: MethodsProps.AccountSetOnlineParams): Promise<Responses.AccountSetOnlineResponse> {
        return this.call(
            'account.setOnline',
            {
                voip: params.voip,
                access_token: params.accessToken
            },
            Responses.AccountSetOnlineResponse
        )
    }

    /**
     * Marks a current user as offline.
     */
    public async accountSetOffline(params: MethodsProps.AccountSetOfflineParams): Promise<Responses.AccountSetOfflineResponse> {
        return this.call(
            'account.setOffline',
            {
                access_token: params.accessToken
            },
            Responses.AccountSetOfflineResponse
        )
    }

    /**
     * Allows to search the VK users using phone numbers, e-mail addresses and user IDs on other services.
     */
    public async accountLookupContacts(params: MethodsProps.AccountLookupContactsParams): Promise<Responses.AccountLookupContactsResponse> {
        return this.call(
            'account.lookupContacts',
            {
                contacts: params.contacts,
                service: params.service,
                mycontact: params.mycontact,
                return_all: params.returnAll,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.AccountLookupContactsResponse
        )
    }

    /**
     * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
     */
    public async accountRegisterDevice(params: MethodsProps.AccountRegisterDeviceParams): Promise<Responses.AccountRegisterDeviceResponse> {
        return this.call(
            'account.registerDevice',
            {
                token: params.token,
                device_model: params.deviceModel,
                device_year: params.deviceYear,
                device_id: params.deviceId,
                system_version: params.systemVersion,
                settings: params.settings,
                access_token: params.accessToken
            },
            Responses.AccountRegisterDeviceResponse
        )
    }

    /**
     * Unsubscribes a device from push notifications.
     */
    public async accountUnregisterDevice(params: MethodsProps.AccountUnregisterDeviceParams): Promise<Responses.AccountUnregisterDeviceResponse> {
        return this.call(
            'account.unregisterDevice',
            {
                device_id: params.deviceId,
                access_token: params.accessToken
            },
            Responses.AccountUnregisterDeviceResponse
        )
    }

    /**
     * Mutes push notifications for the set period of time.
     */
    public async accountSetSilenceMode(params: MethodsProps.AccountSetSilenceModeParams): Promise<Responses.AccountSetSilenceModeResponse> {
        return this.call(
            'account.setSilenceMode',
            {
                device_id: params.deviceId,
                time: params.time,
                peer_id: params.peerId,
                sound: params.sound,
                access_token: params.accessToken
            },
            Responses.AccountSetSilenceModeResponse
        )
    }

    /**
     * Gets settings of push notifications.
     */
    public async accountGetPushSettings(params: MethodsProps.AccountGetPushSettingsParams): Promise<Responses.AccountGetPushSettingsResponse> {
        return this.call(
            'account.getPushSettings',
            {
                device_id: params.deviceId,
                access_token: params.accessToken
            },
            Responses.AccountGetPushSettingsResponse
        )
    }

    /**
     * Change push settings.
     */
    public async accountSetPushSettings(params: MethodsProps.AccountSetPushSettingsParams): Promise<Responses.AccountSetPushSettingsResponse> {
        return this.call(
            'account.setPushSettings',
            {
                device_id: params.deviceId,
                settings: params.settings,
                key: params.key,
                value: params.value,
                access_token: params.accessToken
            },
            Responses.AccountSetPushSettingsResponse
        )
    }

    /**
     * Gets settings of the user in this application.
     */
    public async accountGetAppPermissions(params: MethodsProps.AccountGetAppPermissionsParams): Promise<Responses.AccountGetAppPermissionsResponse> {
        return this.call(
            'account.getAppPermissions',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.AccountGetAppPermissionsResponse
        )
    }

    /**
     * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
     */
    public async accountGetActiveOffers(params: MethodsProps.AccountGetActiveOffersParams): Promise<Responses.AccountGetActiveOffersResponse> {
        return this.call(
            'account.getActiveOffers',
            {
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AccountGetActiveOffersResponse
        )
    }

    /**
     * Adds user to the banlist.
     */
    public async accountBanUser(params: MethodsProps.AccountBanUserParams): Promise<Responses.AccountBanUserResponse> {
        return this.call(
            'account.banUser',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.AccountBanUserResponse
        )
    }

    /**
     * Deletes user from the blacklist.
     */
    public async accountUnbanUser(params: MethodsProps.AccountUnbanUserParams): Promise<Responses.AccountUnbanUserResponse> {
        return this.call(
            'account.unbanUser',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.AccountUnbanUserResponse
        )
    }

    /**
     * Returns a user's blacklist.
     */
    public async accountGetBanned(params: MethodsProps.AccountGetBannedParams): Promise<Responses.AccountGetBannedResponse> {
        return this.call(
            'account.getBanned',
            {
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.AccountGetBannedResponse
        )
    }

    /**
     * Returns current account info.
     */
    public async accountGetInfo(params: MethodsProps.AccountGetInfoParams): Promise<Responses.AccountGetInfoResponse> {
        return this.call(
            'account.getInfo',
            {
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.AccountGetInfoResponse
        )
    }

    /**
     * Allows to edit the current account info.
     */
    public async accountSetInfo(params: MethodsProps.AccountSetInfoParams): Promise<Responses.AccountSetInfoResponse> {
        return this.call(
            'account.setInfo',
            {
                name: params.name,
                value: params.value,
                access_token: params.accessToken
            },
            Responses.AccountSetInfoResponse
        )
    }

    /**
     * Changes a user password after access is successfully restored with the [vk.com/dev/auth.restore|auth.restore] method.
     */
    public async accountChangePassword(params: MethodsProps.AccountChangePasswordParams): Promise<Responses.AccountChangePasswordResponse> {
        return this.call(
            'account.changePassword',
            {
                restore_sid: params.restoreSid,
                change_password_hash: params.changePasswordHash,
                old_password: params.oldPassword,
                new_password: params.newPassword,
                access_token: params.accessToken
            },
            Responses.AccountChangePasswordResponse
        )
    }

    /**
     * Returns the current account info.
     */
    public async accountGetProfileInfo(params: MethodsProps.AccountGetProfileInfoParams): Promise<Responses.AccountGetProfileInfoResponse> {
        return this.call(
            'account.getProfileInfo',
            {
                access_token: params.accessToken
            },
            Responses.AccountGetProfileInfoResponse
        )
    }

    /**
     * Edits current profile info.
     */
    public async accountSaveProfileInfo(params: MethodsProps.AccountSaveProfileInfoParams): Promise<Responses.AccountSaveProfileInfoResponse> {
        return this.call(
            'account.saveProfileInfo',
            {
                first_name: params.firstName,
                last_name: params.lastName,
                maiden_name: params.maidenName,
                screen_name: params.screenName,
                cancel_request_id: params.cancelRequestId,
                sex: params.sex,
                relation: params.relation,
                relation_partner_id: params.relationPartnerId,
                bdate: params.bdate,
                bdate_visibility: params.bdateVisibility,
                home_town: params.homeTown,
                country_id: params.countryId,
                city_id: params.cityId,
                status: params.status,
                access_token: params.accessToken
            },
            Responses.AccountSaveProfileInfoResponse
        )
    }

    /**
     * Returns a list of the current user's incoming or outgoing private messages.
     */
    public async messagesGet(params: MethodsProps.MessagesGetParams): Promise<Responses.MessagesGetResponse> {
        return this.call(
            'messages.get',
            {
                out: params.out,
                offset: params.offset,
                count: params.count,
                time_offset: params.timeOffset,
                preview_length: params.previewLength,
                last_message_id: params.lastMessageId,
                access_token: params.accessToken
            },
            Responses.MessagesGetResponse
        )
    }

    /**
     * Returns a list of the current user's conversations.
     */
    public async messagesGetDialogs(params: MethodsProps.MessagesGetDialogsParams): Promise<Responses.MessagesGetDialogsResponse> {
        return this.call(
            'messages.getDialogs',
            {
                offset: params.offset,
                count: params.count,
                start_message_id: params.startMessageId,
                preview_length: params.previewLength,
                unread: params.unread,
                access_token: params.accessToken
            },
            Responses.MessagesGetDialogsResponse
        )
    }

    /**
     * Returns messages by their IDs.
     */
    public async messagesGetById(params: MethodsProps.MessagesGetByIdParams): Promise<Responses.MessagesGetByIdResponse> {
        return this.call(
            'messages.getById',
            {
                message_ids: params.messageIds,
                access_token: params.accessToken
            },
            Responses.MessagesGetByIdResponse
        )
    }

    /**
     * Returns a list of the current user's private messages that match search criteria.
     */
    public async messagesSearch(params: MethodsProps.MessagesSearchParams): Promise<Responses.MessagesSearchResponse> {
        return this.call(
            'messages.search',
            {
                q: params.q,
                peer_id: params.peerId,
                date: params.date,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.MessagesSearchResponse
        )
    }

    /**
     * Returns message history for the specified user or group chat.
     */
    public async messagesGetHistory(params: MethodsProps.MessagesGetHistoryParams): Promise<Responses.MessagesGetHistoryResponse> {
        return this.call(
            'messages.getHistory',
            {
                offset: params.offset,
                count: params.count,
                user_id: params.userId,
                peer_id: params.peerId,
                start_message_id: params.startMessageId,
                rev: params.rev,
                access_token: params.accessToken
            },
            Responses.MessagesGetHistoryResponse
        )
    }

    /**
     * Returns media files from the dialog or group chat.
     */
    public async messagesGetHistoryAttachments(params: MethodsProps.MessagesGetHistoryAttachmentsParams): Promise<Responses.MessagesGetHistoryAttachmentsResponse> {
        return this.call(
            'messages.getHistoryAttachments',
            {
                peer_id: params.peerId,
                media_type: params.mediaType,
                start_from: params.startFrom,
                count: params.count,
                photo_sizes: params.photoSizes,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.MessagesGetHistoryAttachmentsResponse
        )
    }

    /**
     * Sends a message.
     */
    public async messagesSend(params: MethodsProps.MessagesSendParams): Promise<Responses.MessagesSendResponse> {
        return this.call(
            'messages.send',
            {
                user_id: params.userId,
                random_id: params.randomId,
                peer_id: params.peerId,
                domain: params.domain,
                chat_id: params.chatId,
                user_ids: params.userIds,
                message: params.message,
                lat: params.lat,
                long: params.long,
                attachment: params.attachment,
                forward_messages: params.forwardMessages,
                sticker_id: params.stickerId,
                notification: params.notification,
                access_token: params.accessToken
            },
            Responses.MessagesSendResponse
        )
    }

    /**
     * Deletes one or more messages.
     */
    public async messagesDelete(params: MethodsProps.MessagesDeleteParams): Promise<Responses.MessagesDeleteResponse> {
        return this.call(
            'messages.delete',
            {
                message_ids: params.messageIds,
                spam: params.spam,
                access_token: params.accessToken
            },
            Responses.MessagesDeleteResponse
        )
    }

    /**
     * Deletes all private messages in a conversation.
     */
    public async messagesDeleteDialog(params: MethodsProps.MessagesDeleteDialogParams): Promise<Responses.MessagesDeleteDialogResponse> {
        return this.call(
            'messages.deleteDialog',
            {
                user_id: params.userId,
                peer_id: params.peerId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.MessagesDeleteDialogResponse
        )
    }

    /**
     * Restores a deleted message.
     */
    public async messagesRestore(params: MethodsProps.MessagesRestoreParams): Promise<Responses.MessagesRestoreResponse> {
        return this.call(
            'messages.restore',
            {
                message_id: params.messageId,
                access_token: params.accessToken
            },
            Responses.MessagesRestoreResponse
        )
    }

    /**
     * Marks messages as read.
     */
    public async messagesMarkAsRead(params: MethodsProps.MessagesMarkAsReadParams): Promise<Responses.MessagesMarkAsReadResponse> {
        return this.call(
            'messages.markAsRead',
            {
                message_ids: params.messageIds,
                peer_id: params.peerId,
                start_message_id: params.startMessageId,
                access_token: params.accessToken
            },
            Responses.MessagesMarkAsReadResponse
        )
    }

    /**
     * Marks and unmarks messages as important (starred).
     */
    public async messagesMarkAsImportant(params: MethodsProps.MessagesMarkAsImportantParams): Promise<Responses.MessagesMarkAsImportantResponse> {
        return this.call(
            'messages.markAsImportant',
            {
                message_ids: params.messageIds,
                important: params.important,
                access_token: params.accessToken
            },
            Responses.MessagesMarkAsImportantResponse
        )
    }

    /**
     * Returns data required for connection to a Long Poll server.
     */
    public async messagesGetLongPollServer(params: MethodsProps.MessagesGetLongPollServerParams): Promise<Responses.MessagesGetLongPollServerResponse> {
        return this.call(
            'messages.getLongPollServer',
            {
                use_ssl: params.useSsl,
                need_pts: params.needPts,
                access_token: params.accessToken
            },
            Responses.MessagesGetLongPollServerResponse
        )
    }

    /**
     * Returns updates in user's private messages.
     */
    public async messagesGetLongPollHistory(params: MethodsProps.MessagesGetLongPollHistoryParams): Promise<Responses.MessagesGetLongPollHistoryResponse> {
        return this.call(
            'messages.getLongPollHistory',
            {
                ts: params.ts,
                pts: params.pts,
                preview_length: params.previewLength,
                onlines: params.onlines,
                fields: params.fields,
                events_limit: params.eventsLimit,
                msgs_limit: params.msgsLimit,
                max_msg_id: params.maxMsgId,
                access_token: params.accessToken
            },
            Responses.MessagesGetLongPollHistoryResponse
        )
    }

    /**
     * Returns information about a chat.
     */
    public async messagesGetChat(params: MethodsProps.MessagesGetChatParams): Promise<Responses.MessagesGetChatResponse> {
        return this.call(
            'messages.getChat',
            {
                chat_id: params.chatId,
                chat_ids: params.chatIds,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.MessagesGetChatResponse
        )
    }

    /**
     * Creates a chat with several participants.
     */
    public async messagesCreateChat(params: MethodsProps.MessagesCreateChatParams): Promise<Responses.MessagesCreateChatResponse> {
        return this.call(
            'messages.createChat',
            {
                user_ids: params.userIds,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.MessagesCreateChatResponse
        )
    }

    /**
     * Edits the title of a chat.
     */
    public async messagesEditChat(params: MethodsProps.MessagesEditChatParams): Promise<Responses.MessagesEditChatResponse> {
        return this.call(
            'messages.editChat',
            {
                chat_id: params.chatId,
                title: params.title,
                access_token: params.accessToken
            },
            Responses.MessagesEditChatResponse
        )
    }

    /**
     * Returns a list of IDs of users participating in a chat.
     */
    public async messagesGetChatUsers(params: MethodsProps.MessagesGetChatUsersParams): Promise<Responses.MessagesGetChatUsersResponse> {
        return this.call(
            'messages.getChatUsers',
            {
                chat_id: params.chatId,
                chat_ids: params.chatIds,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.MessagesGetChatUsersResponse
        )
    }

    /**
     * Changes the status of a user as typing in a conversation.
     */
    public async messagesSetActivity(params: MethodsProps.MessagesSetActivityParams): Promise<Responses.MessagesSetActivityResponse> {
        return this.call(
            'messages.setActivity',
            {
                user_id: params.userId,
                type: params.type,
                peer_id: params.peerId,
                access_token: params.accessToken
            },
            Responses.MessagesSetActivityResponse
        )
    }

    /**
     * Returns a list of the current user's conversations that match search criteria.
     */
    public async messagesSearchDialogs(params: MethodsProps.MessagesSearchDialogsParams): Promise<Responses.MessagesSearchDialogsResponse> {
        return this.call(
            'messages.searchDialogs',
            {
                q: params.q,
                limit: params.limit,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.MessagesSearchDialogsResponse
        )
    }

    /**
     * Adds a new user to a chat.
     */
    public async messagesAddChatUser(params: MethodsProps.MessagesAddChatUserParams): Promise<Responses.MessagesAddChatUserResponse> {
        return this.call(
            'messages.addChatUser',
            {
                chat_id: params.chatId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.MessagesAddChatUserResponse
        )
    }

    /**
     * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
     */
    public async messagesRemoveChatUser(params: MethodsProps.MessagesRemoveChatUserParams): Promise<Responses.MessagesRemoveChatUserResponse> {
        return this.call(
            'messages.removeChatUser',
            {
                chat_id: params.chatId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.MessagesRemoveChatUserResponse
        )
    }

    /**
     * Returns a user's current status and date of last activity.
     */
    public async messagesGetLastActivity(params: MethodsProps.MessagesGetLastActivityParams): Promise<Responses.MessagesGetLastActivityResponse> {
        return this.call(
            'messages.getLastActivity',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.MessagesGetLastActivityResponse
        )
    }

    /**
     * Sets a previously-uploaded picture as the cover picture of a chat.
     */
    public async messagesSetChatPhoto(params: MethodsProps.MessagesSetChatPhotoParams): Promise<Responses.MessagesSetChatPhotoResponse> {
        return this.call(
            'messages.setChatPhoto',
            {
                file: params.file,
                access_token: params.accessToken
            },
            Responses.MessagesSetChatPhotoResponse
        )
    }

    /**
     * Deletes a chat's cover picture.
     */
    public async messagesDeleteChatPhoto(params: MethodsProps.MessagesDeleteChatPhotoParams): Promise<Responses.MessagesDeleteChatPhotoResponse> {
        return this.call(
            'messages.deleteChatPhoto',
            {
                chat_id: params.chatId,
                access_token: params.accessToken
            },
            Responses.MessagesDeleteChatPhotoResponse
        )
    }

    /**
     * Denies sending message from community to the current user.
     */
    public async messagesDenyMessagesFromGroup(params: MethodsProps.MessagesDenyMessagesFromGroupParams): Promise<Responses.MessagesDenyMessagesFromGroupResponse> {
        return this.call(
            'messages.denyMessagesFromGroup',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.MessagesDenyMessagesFromGroupResponse
        )
    }

    /**
     * Allows sending messages from community to the current user.
     */
    public async messagesAllowMessagesFromGroup(params: MethodsProps.MessagesAllowMessagesFromGroupParams): Promise<Responses.MessagesAllowMessagesFromGroupResponse> {
        return this.call(
            'messages.allowMessagesFromGroup',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.MessagesAllowMessagesFromGroupResponse
        )
    }

    /**
     * Returns information whether sending messages from the community to current user is allowed.
     */
    public async messagesIsMessagesFromGroupAllowed(params: MethodsProps.MessagesIsMessagesFromGroupAllowedParams): Promise<Responses.MessagesIsMessagesFromGroupAllowedResponse> {
        return this.call(
            'messages.isMessagesFromGroupAllowed',
            {
                group_id: params.groupId,
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.MessagesIsMessagesFromGroupAllowedResponse
        )
    }

    /**
     * Returns data required to show newsfeed for the current user.
     */
    public async newsfeedGet(params: MethodsProps.NewsfeedGetParams): Promise<Responses.NewsfeedGetResponse> {
        return this.call(
            'newsfeed.get',
            {
                filters: params.filters,
                return_banned: params.returnBanned,
                start_time: params.startTime,
                end_time: params.endTime,
                max_photos: params.maxPhotos,
                source_ids: params.sourceIds,
                start_from: params.startFrom,
                count: params.count,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetResponse
        )
    }

    /**
     * ; Returns a list of newsfeeds recommended to the current user.
     */
    public async newsfeedGetRecommended(params: MethodsProps.NewsfeedGetRecommendedParams): Promise<Responses.NewsfeedGetRecommendedResponse> {
        return this.call(
            'newsfeed.getRecommended',
            {
                start_time: params.startTime,
                end_time: params.endTime,
                max_photos: params.maxPhotos,
                start_from: params.startFrom,
                count: params.count,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetRecommendedResponse
        )
    }

    /**
     * Returns a list of comments in the current user's newsfeed.
     */
    public async newsfeedGetComments(params: MethodsProps.NewsfeedGetCommentsParams): Promise<Responses.NewsfeedGetCommentsResponse> {
        return this.call(
            'newsfeed.getComments',
            {
                count: params.count,
                filters: params.filters,
                reposts: params.reposts,
                start_time: params.startTime,
                end_time: params.endTime,
                start_from: params.startFrom,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetCommentsResponse
        )
    }

    /**
     * Returns a list of posts on user walls in which the current user is mentioned.;
     */
    public async newsfeedGetMentions(params: MethodsProps.NewsfeedGetMentionsParams): Promise<Responses.NewsfeedGetMentionsResponse> {
        return this.call(
            'newsfeed.getMentions',
            {
                owner_id: params.ownerId,
                start_time: params.startTime,
                end_time: params.endTime,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetMentionsResponse
        )
    }

    /**
     * Returns a list of users and communities banned from the current user's newsfeed.
     */
    public async newsfeedGetBanned(params: MethodsProps.NewsfeedGetBannedParams): Promise<Responses.NewsfeedGetBannedResponse> {
        return this.call(
            'newsfeed.getBanned',
            {
                extended: params.extended,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetBannedResponse
        )
    }

    /**
     * Prevents news from specified users and communities from appearing in the current user's newsfeed.
     */
    public async newsfeedAddBan(params: MethodsProps.NewsfeedAddBanParams): Promise<Responses.NewsfeedAddBanResponse> {
        return this.call(
            'newsfeed.addBan',
            {
                user_ids: params.userIds,
                group_ids: params.groupIds,
                access_token: params.accessToken
            },
            Responses.NewsfeedAddBanResponse
        )
    }

    /**
     * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
     */
    public async newsfeedDeleteBan(params: MethodsProps.NewsfeedDeleteBanParams): Promise<Responses.NewsfeedDeleteBanResponse> {
        return this.call(
            'newsfeed.deleteBan',
            {
                user_ids: params.userIds,
                group_ids: params.groupIds,
                access_token: params.accessToken
            },
            Responses.NewsfeedDeleteBanResponse
        )
    }

    /**
     * Hides an item from the newsfeed.
     */
    public async newsfeedIgnoreItem(params: MethodsProps.NewsfeedIgnoreItemParams): Promise<Responses.NewsfeedIgnoreItemResponse> {
        return this.call(
            'newsfeed.ignoreItem',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.NewsfeedIgnoreItemResponse
        )
    }

    /**
     * Returns a hidden item to the newsfeed.
     */
    public async newsfeedUnignoreItem(params: MethodsProps.NewsfeedUnignoreItemParams): Promise<Responses.NewsfeedUnignoreItemResponse> {
        return this.call(
            'newsfeed.unignoreItem',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.NewsfeedUnignoreItemResponse
        )
    }

    /**
     * Returns search results by statuses.;
     */
    public async newsfeedSearch(params: MethodsProps.NewsfeedSearchParams): Promise<Responses.NewsfeedSearchResponse> {
        return this.call(
            'newsfeed.search',
            {
                q: params.q,
                extended: params.extended,
                count: params.count,
                latitude: params.latitude,
                longitude: params.longitude,
                start_time: params.startTime,
                end_time: params.endTime,
                start_from: params.startFrom,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.NewsfeedSearchResponse
        )
    }

    /**
     * Returns a list of newsfeeds followed by the current user.
     */
    public async newsfeedGetLists(params: MethodsProps.NewsfeedGetListsParams): Promise<Responses.NewsfeedGetListsResponse> {
        return this.call(
            'newsfeed.getLists',
            {
                list_ids: params.listIds,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetListsResponse
        )
    }

    /**
     * Creates and edits user newsfeed lists
     */
    public async newsfeedSaveList(params: MethodsProps.NewsfeedSaveListParams): Promise<Responses.NewsfeedSaveListResponse> {
        return this.call(
            'newsfeed.saveList',
            {
                list_id: params.listId,
                title: params.title,
                source_ids: params.sourceIds,
                no_reposts: params.noReposts,
                access_token: params.accessToken
            },
            Responses.NewsfeedSaveListResponse
        )
    }

    /**
     * undefined
     */
    public async newsfeedDeleteList(params: MethodsProps.NewsfeedDeleteListParams): Promise<Responses.NewsfeedDeleteListResponse> {
        return this.call(
            'newsfeed.deleteList',
            {
                list_id: params.listId,
                access_token: params.accessToken
            },
            Responses.NewsfeedDeleteListResponse
        )
    }

    /**
     * Unsubscribes the current user from specified newsfeeds.
     */
    public async newsfeedUnsubscribe(params: MethodsProps.NewsfeedUnsubscribeParams): Promise<Responses.NewsfeedUnsubscribeResponse> {
        return this.call(
            'newsfeed.unsubscribe',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.NewsfeedUnsubscribeResponse
        )
    }

    /**
     * Returns communities and users that current user is suggested to follow.
     */
    public async newsfeedGetSuggestedSources(params: MethodsProps.NewsfeedGetSuggestedSourcesParams): Promise<Responses.NewsfeedGetSuggestedSourcesResponse> {
        return this.call(
            'newsfeed.getSuggestedSources',
            {
                offset: params.offset,
                count: params.count,
                shuffle: params.shuffle,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.NewsfeedGetSuggestedSourcesResponse
        )
    }

    /**
     * Returns a list of IDs of users who added the specified object to their 'Likes' list.
     */
    public async likesGetList(params: MethodsProps.LikesGetListParams): Promise<Responses.LikesGetListResponse> {
        return this.call(
            'likes.getList',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                page_url: params.pageUrl,
                filter: params.filter,
                friends_only: params.friendsOnly,
                extended: params.extended,
                offset: params.offset,
                count: params.count,
                skip_own: params.skipOwn,
                access_token: params.accessToken
            },
            Responses.LikesGetListResponse
        )
    }

    /**
     * Adds the specified object to the 'Likes' list of the current user.
     */
    public async likesAdd(params: MethodsProps.LikesAddParams): Promise<Responses.LikesAddResponse> {
        return this.call(
            'likes.add',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_key: params.accessKey,
                access_token: params.accessToken
            },
            Responses.LikesAddResponse
        )
    }

    /**
     * Deletes the specified object from the 'Likes' list of the current user.
     */
    public async likesDelete(params: MethodsProps.LikesDeleteParams): Promise<Responses.LikesDeleteResponse> {
        return this.call(
            'likes.delete',
            {
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.LikesDeleteResponse
        )
    }

    /**
     * Checks for the object in the 'Likes' list of the specified user.
     */
    public async likesIsLiked(params: MethodsProps.LikesIsLikedParams): Promise<Responses.LikesIsLikedResponse> {
        return this.call(
            'likes.isLiked',
            {
                user_id: params.userId,
                type: params.type,
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.LikesIsLikedResponse
        )
    }

    /**
     * Returns detailed information about a poll by its ID.
     */
    public async pollsGetById(params: MethodsProps.PollsGetByIdParams): Promise<Responses.PollsGetByIdResponse> {
        return this.call(
            'polls.getById',
            {
                owner_id: params.ownerId,
                is_board: params.isBoard,
                poll_id: params.pollId,
                access_token: params.accessToken
            },
            Responses.PollsGetByIdResponse
        )
    }

    /**
     * Adds the current user's vote to the selected answer in the poll.
     */
    public async pollsAddVote(params: MethodsProps.PollsAddVoteParams): Promise<Responses.PollsAddVoteResponse> {
        return this.call(
            'polls.addVote',
            {
                owner_id: params.ownerId,
                poll_id: params.pollId,
                answer_id: params.answerId,
                is_board: params.isBoard,
                access_token: params.accessToken
            },
            Responses.PollsAddVoteResponse
        )
    }

    /**
     * Deletes the current user's vote from the selected answer in the poll.
     */
    public async pollsDeleteVote(params: MethodsProps.PollsDeleteVoteParams): Promise<Responses.PollsDeleteVoteResponse> {
        return this.call(
            'polls.deleteVote',
            {
                owner_id: params.ownerId,
                poll_id: params.pollId,
                answer_id: params.answerId,
                is_board: params.isBoard,
                access_token: params.accessToken
            },
            Responses.PollsDeleteVoteResponse
        )
    }

    /**
     * Returns a list of IDs of users who selected specific answers in the poll.
     */
    public async pollsGetVoters(params: MethodsProps.PollsGetVotersParams): Promise<Responses.PollsGetVotersResponse> {
        return this.call(
            'polls.getVoters',
            {
                owner_id: params.ownerId,
                poll_id: params.pollId,
                answer_ids: params.answerIds,
                is_board: params.isBoard,
                friends_only: params.friendsOnly,
                offset: params.offset,
                count: params.count,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.PollsGetVotersResponse
        )
    }

    /**
     * Creates polls that can be attached to the users' or communities' posts.
     */
    public async pollsCreate(params: MethodsProps.PollsCreateParams): Promise<Responses.PollsCreateResponse> {
        return this.call(
            'polls.create',
            {
                question: params.question,
                is_anonymous: params.isAnonymous,
                owner_id: params.ownerId,
                add_answers: params.addAnswers,
                access_token: params.accessToken
            },
            Responses.PollsCreateResponse
        )
    }

    /**
     * Edits created polls
     */
    public async pollsEdit(params: MethodsProps.PollsEditParams): Promise<Responses.PollsEditResponse> {
        return this.call(
            'polls.edit',
            {
                owner_id: params.ownerId,
                poll_id: params.pollId,
                question: params.question,
                add_answers: params.addAnswers,
                edit_answers: params.editAnswers,
                delete_answers: params.deleteAnswers,
                access_token: params.accessToken
            },
            Responses.PollsEditResponse
        )
    }

    /**
     * Returns detailed information about user or community documents.
     */
    public async docsGet(params: MethodsProps.DocsGetParams): Promise<Responses.DocsGetResponse> {
        return this.call(
            'docs.get',
            {
                count: params.count,
                offset: params.offset,
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.DocsGetResponse
        )
    }

    /**
     * Returns information about documents by their IDs.
     */
    public async docsGetById(params: MethodsProps.DocsGetByIdParams): Promise<Responses.DocsGetByIdResponse> {
        return this.call(
            'docs.getById',
            {
                docs: params.docs,
                access_token: params.accessToken
            },
            Responses.DocsGetByIdResponse
        )
    }

    /**
     * Returns the server address for document upload.
     */
    public async docsGetUploadServer(params: MethodsProps.DocsGetUploadServerParams): Promise<Responses.DocsGetUploadServerResponse> {
        return this.call(
            'docs.getUploadServer',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.DocsGetUploadServerResponse
        )
    }

    /**
     * Returns the server address for document upload onto a user's or community's wall.
     */
    public async docsGetWallUploadServer(params: MethodsProps.DocsGetWallUploadServerParams): Promise<Responses.DocsGetWallUploadServerResponse> {
        return this.call(
            'docs.getWallUploadServer',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.DocsGetWallUploadServerResponse
        )
    }

    /**
     * Saves a document after [vk.com/dev/upload_files_2|uploading it to a server].
     */
    public async docsSave(params: MethodsProps.DocsSaveParams): Promise<Responses.DocsSaveResponse> {
        return this.call(
            'docs.save',
            {
                file: params.file,
                title: params.title,
                tags: params.tags,
                access_token: params.accessToken
            },
            Responses.DocsSaveResponse
        )
    }

    /**
     * Deletes a user or community document.
     */
    public async docsDelete(params: MethodsProps.DocsDeleteParams): Promise<Responses.DocsDeleteResponse> {
        return this.call(
            'docs.delete',
            {
                owner_id: params.ownerId,
                doc_id: params.docId,
                access_token: params.accessToken
            },
            Responses.DocsDeleteResponse
        )
    }

    /**
     * Copies a document to a user's or community's document list.
     */
    public async docsAdd(params: MethodsProps.DocsAddParams): Promise<Responses.DocsAddResponse> {
        return this.call(
            'docs.add',
            {
                owner_id: params.ownerId,
                doc_id: params.docId,
                access_key: params.accessKey,
                access_token: params.accessToken
            },
            Responses.DocsAddResponse
        )
    }

    /**
     * Returns documents types available for current user.
     */
    public async docsGetTypes(params: MethodsProps.DocsGetTypesParams): Promise<Responses.DocsGetTypesResponse> {
        return this.call(
            'docs.getTypes',
            {
                owner_id: params.ownerId,
                access_token: params.accessToken
            },
            Responses.DocsGetTypesResponse
        )
    }

    /**
     * Returns a list of documents matching the search criteria.
     */
    public async docsSearch(params: MethodsProps.DocsSearchParams): Promise<Responses.DocsSearchResponse> {
        return this.call(
            'docs.search',
            {
                q: params.q,
                count: params.count,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.DocsSearchResponse
        )
    }

    /**
     * Edits a document.
     */
    public async docsEdit(params: MethodsProps.DocsEditParams): Promise<Responses.DocsEditResponse> {
        return this.call(
            'docs.edit',
            {
                owner_id: params.ownerId,
                doc_id: params.docId,
                title: params.title,
                tags: params.tags,
                access_token: params.accessToken
            },
            Responses.DocsEditResponse
        )
    }

    /**
     * Returns a list of users whom the current user has bookmarked.; ;
     */
    public async faveGetUsers(params: MethodsProps.FaveGetUsersParams): Promise<Responses.FaveGetUsersResponse> {
        return this.call(
            'fave.getUsers',
            {
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.FaveGetUsersResponse
        )
    }

    /**
     * Returns a list of photos that the current user has liked.; ;
     */
    public async faveGetPhotos(params: MethodsProps.FaveGetPhotosParams): Promise<Responses.FaveGetPhotosResponse> {
        return this.call(
            'fave.getPhotos',
            {
                offset: params.offset,
                count: params.count,
                photo_sizes: params.photoSizes,
                access_token: params.accessToken
            },
            Responses.FaveGetPhotosResponse
        )
    }

    /**
     * Returns a list of wall posts that the current user has liked.;
     */
    public async faveGetPosts(params: MethodsProps.FaveGetPostsParams): Promise<Responses.FaveGetPostsResponse> {
        return this.call(
            'fave.getPosts',
            {
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.FaveGetPostsResponse
        )
    }

    /**
     * Returns a list of videos that the current user has liked.;
     */
    public async faveGetVideos(params: MethodsProps.FaveGetVideosParams): Promise<Responses.FaveGetVideosResponse> {
        return this.call(
            'fave.getVideos',
            {
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.FaveGetVideosResponse
        )
    }

    /**
     * Returns a list of links that the current user has bookmarked.
     */
    public async faveGetLinks(params: MethodsProps.FaveGetLinksParams): Promise<Responses.FaveGetLinksResponse> {
        return this.call(
            'fave.getLinks',
            {
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.FaveGetLinksResponse
        )
    }

    /**
     * Returns market items bookmarked by current user.
     */
    public async faveGetMarketItems(params: MethodsProps.FaveGetMarketItemsParams): Promise<Responses.FaveGetMarketItemsResponse> {
        return this.call(
            'fave.getMarketItems',
            {
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.FaveGetMarketItemsResponse
        )
    }

    /**
     * Adds a profile to user faves.
     */
    public async faveAddUser(params: MethodsProps.FaveAddUserParams): Promise<Responses.FaveAddUserResponse> {
        return this.call(
            'fave.addUser',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.FaveAddUserResponse
        )
    }

    /**
     * Removes a profile from user faves.
     */
    public async faveRemoveUser(params: MethodsProps.FaveRemoveUserParams): Promise<Responses.FaveRemoveUserResponse> {
        return this.call(
            'fave.removeUser',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.FaveRemoveUserResponse
        )
    }

    /**
     * Adds a community to user faves.
     */
    public async faveAddGroup(params: MethodsProps.FaveAddGroupParams): Promise<Responses.FaveAddGroupResponse> {
        return this.call(
            'fave.addGroup',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.FaveAddGroupResponse
        )
    }

    /**
     * Removes a community from user faves.
     */
    public async faveRemoveGroup(params: MethodsProps.FaveRemoveGroupParams): Promise<Responses.FaveRemoveGroupResponse> {
        return this.call(
            'fave.removeGroup',
            {
                group_id: params.groupId,
                access_token: params.accessToken
            },
            Responses.FaveRemoveGroupResponse
        )
    }

    /**
     * Adds a link to user faves.
     */
    public async faveAddLink(params: MethodsProps.FaveAddLinkParams): Promise<Responses.FaveAddLinkResponse> {
        return this.call(
            'fave.addLink',
            {
                link: params.link,
                text: params.text,
                access_token: params.accessToken
            },
            Responses.FaveAddLinkResponse
        )
    }

    /**
     * Removes link from the user's faves.
     */
    public async faveRemoveLink(params: MethodsProps.FaveRemoveLinkParams): Promise<Responses.FaveRemoveLinkResponse> {
        return this.call(
            'fave.removeLink',
            {
                link_id: params.linkId,
                access_token: params.accessToken
            },
            Responses.FaveRemoveLinkResponse
        )
    }

    /**
     * Returns a list of notifications about other users' feedback to the current user's wall posts.
     */
    public async notificationsGet(params: MethodsProps.NotificationsGetParams): Promise<Responses.NotificationsGetResponse> {
        return this.call(
            'notifications.get',
            {
                count: params.count,
                start_from: params.startFrom,
                filters: params.filters,
                start_time: params.startTime,
                end_time: params.endTime,
                access_token: params.accessToken
            },
            Responses.NotificationsGetResponse
        )
    }

    /**
     * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
     */
    public async notificationsMarkAsViewed(params: MethodsProps.NotificationsMarkAsViewedParams): Promise<Responses.NotificationsMarkAsViewedResponse> {
        return this.call(
            'notifications.markAsViewed',
            {
                access_token: params.accessToken
            },
            Responses.NotificationsMarkAsViewedResponse
        )
    }

    /**
     * Returns statistics of a community or an application.
     */
    public async statsGet(params: MethodsProps.StatsGetParams): Promise<Responses.StatsGetResponse> {
        return this.call(
            'stats.get',
            {
                group_id: params.groupId,
                app_id: params.appId,
                date_from: params.dateFrom,
                date_to: params.dateTo,
                access_token: params.accessToken
            },
            Responses.StatsGetResponse
        )
    }

    /**
     * undefined
     */
    public async statsTrackVisitor(params: MethodsProps.StatsTrackVisitorParams): Promise<Responses.StatsTrackVisitorResponse> {
        return this.call(
            'stats.trackVisitor',
            {
                access_token: params.accessToken
            },
            Responses.StatsTrackVisitorResponse
        )
    }

    /**
     * Returns stats for a wall post.
     */
    public async statsGetPostReach(params: MethodsProps.StatsGetPostReachParams): Promise<Responses.StatsGetPostReachResponse> {
        return this.call(
            'stats.getPostReach',
            {
                owner_id: params.ownerId,
                post_id: params.postId,
                access_token: params.accessToken
            },
            Responses.StatsGetPostReachResponse
        )
    }

    /**
     * Allows the programmer to do a quick search for any substring.
     */
    public async searchGetHints(params: MethodsProps.SearchGetHintsParams): Promise<Responses.SearchGetHintsResponse> {
        return this.call(
            'search.getHints',
            {
                q: params.q,
                limit: params.limit,
                filters: params.filters,
                search_global: params.searchGlobal,
                access_token: params.accessToken
            },
            Responses.SearchGetHintsResponse
        )
    }

    /**
     * Returns a list of applications (apps) available to users in the App Catalog.
     */
    public async appsGetCatalog(params: MethodsProps.AppsGetCatalogParams): Promise<Responses.AppsGetCatalogResponse> {
        return this.call(
            'apps.getCatalog',
            {
                sort: params.sort,
                offset: params.offset,
                count: params.count,
                platform: params.platform,
                extended: params.extended,
                return_friends: params.returnFriends,
                fields: params.fields,
                name_case: params.nameCase,
                q: params.q,
                genre_id: params.genreId,
                filter: params.filter,
                access_token: params.accessToken
            },
            Responses.AppsGetCatalogResponse
        )
    }

    /**
     * Returns applications data.
     */
    public async appsGet(params: MethodsProps.AppsGetParams): Promise<Responses.AppsGetResponse> {
        return this.call(
            'apps.get',
            {
                app_id: params.appId,
                app_ids: params.appIds,
                platform: params.platform,
                fields: params.fields,
                name_case: params.nameCase,
                access_token: params.accessToken
            },
            Responses.AppsGetResponse
        )
    }

    /**
     * Sends a request to another user in an app that uses VK authorization.
     */
    public async appsSendRequest(params: MethodsProps.AppsSendRequestParams): Promise<Responses.AppsSendRequestResponse> {
        return this.call(
            'apps.sendRequest',
            {
                user_id: params.userId,
                text: params.text,
                type: params.type,
                name: params.name,
                key: params.key,
                separate: params.separate,
                access_token: params.accessToken
            },
            Responses.AppsSendRequestResponse
        )
    }

    /**
     * Deletes all request notifications from the current app.
     */
    public async appsDeleteAppRequests(params: MethodsProps.AppsDeleteAppRequestsParams): Promise<Responses.AppsDeleteAppRequestsResponse> {
        return this.call(
            'apps.deleteAppRequests',
            {
                access_token: params.accessToken
            },
            Responses.AppsDeleteAppRequestsResponse
        )
    }

    /**
     * Creates friends list for requests and invites in current app.
     */
    public async appsGetFriendsList(params: MethodsProps.AppsGetFriendsListParams): Promise<Responses.AppsGetFriendsListResponse> {
        return this.call(
            'apps.getFriendsList',
            {
                count: params.count,
                type: params.type,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.AppsGetFriendsListResponse
        )
    }

    /**
     * Returns players rating in the game.
     */
    public async appsGetLeaderboard(params: MethodsProps.AppsGetLeaderboardParams): Promise<Responses.AppsGetLeaderboardResponse> {
        return this.call(
            'apps.getLeaderboard',
            {
                type: params.type,
                global: params.global,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.AppsGetLeaderboardResponse
        )
    }

    /**
     * Adds user activity information to an application
     */
    public async secureAddAppEvent(params: MethodsProps.SecureAddAppEventParams): Promise<Responses.SecureAddAppEventResponse> {
        return this.call(
            'secure.addAppEvent',
            {
                user_id: params.userId,
                activity_id: params.activityId,
                value: params.value,
                access_token: params.accessToken
            },
            Responses.SecureAddAppEventResponse
        )
    }

    /**
     * Returns user score in app
     */
    public async appsGetScore(params: MethodsProps.AppsGetScoreParams): Promise<Responses.AppsGetScoreResponse> {
        return this.call(
            'apps.getScore',
            {
                user_id: params.userId,
                access_token: params.accessToken
            },
            Responses.AppsGetScoreResponse
        )
    }

    /**
     * Checks whether a link is blocked in VK.
     */
    public async utilsCheckLink(params: MethodsProps.UtilsCheckLinkParams): Promise<Responses.UtilsCheckLinkResponse> {
        return this.call(
            'utils.checkLink',
            {
                url: params.url,
                access_token: params.accessToken
            },
            Responses.UtilsCheckLinkResponse
        )
    }

    /**
     * Detects a type of object (e.g., user, community, application) and its ID by screen name.
     */
    public async utilsResolveScreenName(params: MethodsProps.UtilsResolveScreenNameParams): Promise<Responses.UtilsResolveScreenNameResponse> {
        return this.call(
            'utils.resolveScreenName',
            {
                screen_name: params.screenName,
                access_token: params.accessToken
            },
            Responses.UtilsResolveScreenNameResponse
        )
    }

    /**
     * Returns the current time of the VK server.
     */
    public async utilsGetServerTime(params: MethodsProps.UtilsGetServerTimeParams): Promise<Responses.UtilsGetServerTimeResponse> {
        return this.call(
            'utils.getServerTime',
            {
                access_token: params.accessToken
            },
            Responses.UtilsGetServerTimeResponse
        )
    }

    /**
     * Returns a list of countries.
     */
    public async databaseGetCountries(params: MethodsProps.DatabaseGetCountriesParams): Promise<Responses.DatabaseGetCountriesResponse> {
        return this.call(
            'database.getCountries',
            {
                need_all: params.needAll,
                code: params.code,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetCountriesResponse
        )
    }

    /**
     * Returns a list of regions.
     */
    public async databaseGetRegions(params: MethodsProps.DatabaseGetRegionsParams): Promise<Responses.DatabaseGetRegionsResponse> {
        return this.call(
            'database.getRegions',
            {
                country_id: params.countryId,
                q: params.q,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetRegionsResponse
        )
    }

    /**
     * Returns information about streets by their IDs.
     */
    public async databaseGetStreetsById(params: MethodsProps.DatabaseGetStreetsByIdParams): Promise<Responses.DatabaseGetStreetsByIdResponse> {
        return this.call(
            'database.getStreetsById',
            {
                street_ids: params.streetIds,
                access_token: params.accessToken
            },
            Responses.DatabaseGetStreetsByIdResponse
        )
    }

    /**
     * Returns information about countries by their IDs.
     */
    public async databaseGetCountriesById(params: MethodsProps.DatabaseGetCountriesByIdParams): Promise<Responses.DatabaseGetCountriesByIdResponse> {
        return this.call(
            'database.getCountriesById',
            {
                country_ids: params.countryIds,
                access_token: params.accessToken
            },
            Responses.DatabaseGetCountriesByIdResponse
        )
    }

    /**
     * Returns a list of cities.
     */
    public async databaseGetCities(params: MethodsProps.DatabaseGetCitiesParams): Promise<Responses.DatabaseGetCitiesResponse> {
        return this.call(
            'database.getCities',
            {
                country_id: params.countryId,
                region_id: params.regionId,
                q: params.q,
                need_all: params.needAll,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetCitiesResponse
        )
    }

    /**
     * Returns information about cities by their IDs.
     */
    public async databaseGetCitiesById(params: MethodsProps.DatabaseGetCitiesByIdParams): Promise<Responses.DatabaseGetCitiesByIdResponse> {
        return this.call(
            'database.getCitiesById',
            {
                city_ids: params.cityIds,
                access_token: params.accessToken
            },
            Responses.DatabaseGetCitiesByIdResponse
        )
    }

    /**
     * Returns a list of higher education institutions.
     */
    public async databaseGetUniversities(params: MethodsProps.DatabaseGetUniversitiesParams): Promise<Responses.DatabaseGetUniversitiesResponse> {
        return this.call(
            'database.getUniversities',
            {
                q: params.q,
                country_id: params.countryId,
                city_id: params.cityId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetUniversitiesResponse
        )
    }

    /**
     * Returns a list of schools.
     */
    public async databaseGetSchools(params: MethodsProps.DatabaseGetSchoolsParams): Promise<Responses.DatabaseGetSchoolsResponse> {
        return this.call(
            'database.getSchools',
            {
                q: params.q,
                city_id: params.cityId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetSchoolsResponse
        )
    }

    /**
     * Returns a list of school classes specified for the country.
     */
    public async databaseGetSchoolClasses(params: MethodsProps.DatabaseGetSchoolClassesParams): Promise<Responses.DatabaseGetSchoolClassesResponse> {
        return this.call(
            'database.getSchoolClasses',
            {
                country_id: params.countryId,
                access_token: params.accessToken
            },
            Responses.DatabaseGetSchoolClassesResponse
        )
    }

    /**
     * Returns a list of faculties (i.e., university departments).;
     */
    public async databaseGetFaculties(params: MethodsProps.DatabaseGetFacultiesParams): Promise<Responses.DatabaseGetFacultiesResponse> {
        return this.call(
            'database.getFaculties',
            {
                university_id: params.universityId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetFacultiesResponse
        )
    }

    /**
     * Returns list of chairs on a specified faculty.
     */
    public async databaseGetChairs(params: MethodsProps.DatabaseGetChairsParams): Promise<Responses.DatabaseGetChairsResponse> {
        return this.call(
            'database.getChairs',
            {
                faculty_id: params.facultyId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.DatabaseGetChairsResponse
        )
    }

    /**
     * Returns a list of user gifts.
     */
    public async giftsGet(params: MethodsProps.GiftsGetParams): Promise<Responses.GiftsGetResponse> {
        return this.call(
            'gifts.get',
            {
                user_id: params.userId,
                count: params.count,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.GiftsGetResponse
        )
    }

    /**
     * Returns a list of advertising accounts.
     */
    public async adsGetAccounts(params: MethodsProps.AdsGetAccountsParams): Promise<Responses.AdsGetAccountsResponse> {
        return this.call(
            'ads.getAccounts',
            {
                access_token: params.accessToken
            },
            Responses.AdsGetAccountsResponse
        )
    }

    /**
     * Returns a list of advertising agency's clients.
     */
    public async adsGetClients(params: MethodsProps.AdsGetClientsParams): Promise<Responses.AdsGetClientsResponse> {
        return this.call(
            'ads.getClients',
            {
                account_id: params.accountId,
                access_token: params.accessToken
            },
            Responses.AdsGetClientsResponse
        )
    }

    /**
     * Creates clients of an advertising agency.
     */
    public async adsCreateClients(params: MethodsProps.AdsCreateClientsParams): Promise<Responses.AdsCreateClientsResponse> {
        return this.call(
            'ads.createClients',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsCreateClientsResponse
        )
    }

    /**
     * Edits clients of an advertising agency.
     */
    public async adsUpdateClients(params: MethodsProps.AdsUpdateClientsParams): Promise<Responses.AdsUpdateClientsResponse> {
        return this.call(
            'ads.updateClients',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsUpdateClientsResponse
        )
    }

    /**
     * Archives clients of an advertising agency.
     */
    public async adsDeleteClients(params: MethodsProps.AdsDeleteClientsParams): Promise<Responses.AdsDeleteClientsResponse> {
        return this.call(
            'ads.deleteClients',
            {
                account_id: params.accountId,
                ids: params.ids,
                access_token: params.accessToken
            },
            Responses.AdsDeleteClientsResponse
        )
    }

    /**
     * Returns a list of campaigns in an advertising account.
     */
    public async adsGetCampaigns(params: MethodsProps.AdsGetCampaignsParams): Promise<Responses.AdsGetCampaignsResponse> {
        return this.call(
            'ads.getCampaigns',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                include_deleted: params.includeDeleted,
                campaign_ids: params.campaignIds,
                access_token: params.accessToken
            },
            Responses.AdsGetCampaignsResponse
        )
    }

    /**
     * Creates advertising campaigns.
     */
    public async adsCreateCampaigns(params: MethodsProps.AdsCreateCampaignsParams): Promise<Responses.AdsCreateCampaignsResponse> {
        return this.call(
            'ads.createCampaigns',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsCreateCampaignsResponse
        )
    }

    /**
     * Edits advertising campaigns.
     */
    public async adsUpdateCampaigns(params: MethodsProps.AdsUpdateCampaignsParams): Promise<Responses.AdsUpdateCampaignsResponse> {
        return this.call(
            'ads.updateCampaigns',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsUpdateCampaignsResponse
        )
    }

    /**
     * Archives advertising campaigns.
     */
    public async adsDeleteCampaigns(params: MethodsProps.AdsDeleteCampaignsParams): Promise<Responses.AdsDeleteCampaignsResponse> {
        return this.call(
            'ads.deleteCampaigns',
            {
                account_id: params.accountId,
                ids: params.ids,
                access_token: params.accessToken
            },
            Responses.AdsDeleteCampaignsResponse
        )
    }

    /**
     * Returns number of ads.
     */
    public async adsGetAds(params: MethodsProps.AdsGetAdsParams): Promise<Responses.AdsGetAdsResponse> {
        return this.call(
            'ads.getAds',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                include_deleted: params.includeDeleted,
                campaign_ids: params.campaignIds,
                ad_ids: params.adIds,
                limit: params.limit,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.AdsGetAdsResponse
        )
    }

    /**
     * Returns descriptions of ad layouts.
     */
    public async adsGetAdsLayout(params: MethodsProps.AdsGetAdsLayoutParams): Promise<Responses.AdsGetAdsLayoutResponse> {
        return this.call(
            'ads.getAdsLayout',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                include_deleted: params.includeDeleted,
                campaign_ids: params.campaignIds,
                ad_ids: params.adIds,
                limit: params.limit,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.AdsGetAdsLayoutResponse
        )
    }

    /**
     * Returns ad targeting parameters.
     */
    public async adsGetAdsTargeting(params: MethodsProps.AdsGetAdsTargetingParams): Promise<Responses.AdsGetAdsTargetingResponse> {
        return this.call(
            'ads.getAdsTargeting',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                include_deleted: params.includeDeleted,
                campaign_ids: params.campaignIds,
                ad_ids: params.adIds,
                limit: params.limit,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.AdsGetAdsTargetingResponse
        )
    }

    /**
     * Creates ads.
     */
    public async adsCreateAds(params: MethodsProps.AdsCreateAdsParams): Promise<Responses.AdsCreateAdsResponse> {
        return this.call(
            'ads.createAds',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsCreateAdsResponse
        )
    }

    /**
     * Edits ads.
     */
    public async adsUpdateAds(params: MethodsProps.AdsUpdateAdsParams): Promise<Responses.AdsUpdateAdsResponse> {
        return this.call(
            'ads.updateAds',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsUpdateAdsResponse
        )
    }

    /**
     * Archives ads.
     */
    public async adsDeleteAds(params: MethodsProps.AdsDeleteAdsParams): Promise<Responses.AdsDeleteAdsResponse> {
        return this.call(
            'ads.deleteAds',
            {
                account_id: params.accountId,
                ids: params.ids,
                access_token: params.accessToken
            },
            Responses.AdsDeleteAdsResponse
        )
    }

    /**
     * Allows to check the ad link.
     */
    public async adsCheckLink(params: MethodsProps.AdsCheckLinkParams): Promise<Responses.AdsCheckLinkResponse> {
        return this.call(
            'ads.checkLink',
            {
                account_id: params.accountId,
                link_type: params.linkType,
                link_url: params.linkUrl,
                campaign_id: params.campaignId,
                access_token: params.accessToken
            },
            Responses.AdsCheckLinkResponse
        )
    }

    /**
     * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
     */
    public async adsGetStatistics(params: MethodsProps.AdsGetStatisticsParams): Promise<Responses.AdsGetStatisticsResponse> {
        return this.call(
            'ads.getStatistics',
            {
                account_id: params.accountId,
                ids_type: params.idsType,
                ids: params.ids,
                period: params.period,
                date_from: params.dateFrom,
                date_to: params.dateTo,
                access_token: params.accessToken
            },
            Responses.AdsGetStatisticsResponse
        )
    }

    /**
     * Returns demographics for ads or campaigns.
     */
    public async adsGetDemographics(params: MethodsProps.AdsGetDemographicsParams): Promise<Responses.AdsGetDemographicsResponse> {
        return this.call(
            'ads.getDemographics',
            {
                account_id: params.accountId,
                ids_type: params.idsType,
                ids: params.ids,
                period: params.period,
                date_from: params.dateFrom,
                date_to: params.dateTo,
                access_token: params.accessToken
            },
            Responses.AdsGetDemographicsResponse
        )
    }

    /**
     * Allows to get detailed information about the ad post reach.
     */
    public async adsGetAdsPostsReach(params: MethodsProps.AdsGetAdsPostsReachParams): Promise<Responses.AdsGetAdsPostsReachResponse> {
        return this.call(
            'ads.getAdsPostsReach',
            {
                account_id: params.accountId,
                ads_ids: params.adsIds,
                access_token: params.accessToken
            },
            Responses.AdsGetAdsPostsReachResponse
        )
    }

    /**
     * Returns current budget of the advertising account.
     */
    public async adsGetBudget(params: MethodsProps.AdsGetBudgetParams): Promise<Responses.AdsGetBudgetResponse> {
        return this.call(
            'ads.getBudget',
            {
                account_id: params.accountId,
                access_token: params.accessToken
            },
            Responses.AdsGetBudgetResponse
        )
    }

    /**
     * Returns a list of managers and supervisors of advertising account.
     */
    public async adsGetOfficeUsers(params: MethodsProps.AdsGetOfficeUsersParams): Promise<Responses.AdsGetOfficeUsersResponse> {
        return this.call(
            'ads.getOfficeUsers',
            {
                account_id: params.accountId,
                access_token: params.accessToken
            },
            Responses.AdsGetOfficeUsersResponse
        )
    }

    /**
     * Adds managers and/or supervisors to advertising account.
     */
    public async adsAddOfficeUsers(params: MethodsProps.AdsAddOfficeUsersParams): Promise<Responses.AdsAddOfficeUsersResponse> {
        return this.call(
            'ads.addOfficeUsers',
            {
                account_id: params.accountId,
                data: params.data,
                access_token: params.accessToken
            },
            Responses.AdsAddOfficeUsersResponse
        )
    }

    /**
     * Removes managers and/or supervisors from advertising account.
     */
    public async adsRemoveOfficeUsers(params: MethodsProps.AdsRemoveOfficeUsersParams): Promise<Responses.AdsRemoveOfficeUsersResponse> {
        return this.call(
            'ads.removeOfficeUsers',
            {
                account_id: params.accountId,
                ids: params.ids,
                access_token: params.accessToken
            },
            Responses.AdsRemoveOfficeUsersResponse
        )
    }

    /**
     * Returns the size of targeting audience, and also recommended values for CPC and CPM.
     */
    public async adsGetTargetingStats(params: MethodsProps.AdsGetTargetingStatsParams): Promise<Responses.AdsGetTargetingStatsResponse> {
        return this.call(
            'ads.getTargetingStats',
            {
                account_id: params.accountId,
                criteria: params.criteria,
                ad_id: params.adId,
                ad_format: params.adFormat,
                ad_platform: params.adPlatform,
                link_url: params.linkUrl,
                link_domain: params.linkDomain,
                access_token: params.accessToken
            },
            Responses.AdsGetTargetingStatsResponse
        )
    }

    /**
     * Returns a set of auto-suggestions for various targeting parameters.
     */
    public async adsGetSuggestions(params: MethodsProps.AdsGetSuggestionsParams): Promise<Responses.AdsGetSuggestionsResponse> {
        return this.call(
            'ads.getSuggestions',
            {
                section: params.section,
                ids: params.ids,
                q: params.q,
                country: params.country,
                cities: params.cities,
                lang: params.lang,
                access_token: params.accessToken
            },
            Responses.AdsGetSuggestionsResponse
        )
    }

    /**
     * Returns a list of possible ad categories.
     */
    public async adsGetCategories(params: MethodsProps.AdsGetCategoriesParams): Promise<Responses.AdsGetCategoriesResponse> {
        return this.call(
            'ads.getCategories',
            {
                lang: params.lang,
                access_token: params.accessToken
            },
            Responses.AdsGetCategoriesResponse
        )
    }

    /**
     * Returns URL to upload an ad photo to.
     */
    public async adsGetUploadURL(params: MethodsProps.AdsGetUploadURLParams): Promise<Responses.AdsGetUploadURLResponse> {
        return this.call(
            'ads.getUploadURL',
            {
                ad_format: params.adFormat,
                access_token: params.accessToken
            },
            Responses.AdsGetUploadURLResponse
        )
    }

    /**
     * Returns URL to upload an ad video to.
     */
    public async adsGetVideoUploadURL(params: MethodsProps.AdsGetVideoUploadURLParams): Promise<Responses.AdsGetVideoUploadURLResponse> {
        return this.call(
            'ads.getVideoUploadURL',
            {
                access_token: params.accessToken
            },
            Responses.AdsGetVideoUploadURLResponse
        )
    }

    /**
     * Returns information about current state of a counter — number of remaining runs of methods and time to the next counter nulling in seconds.
     */
    public async adsGetFloodStats(params: MethodsProps.AdsGetFloodStatsParams): Promise<Responses.AdsGetFloodStatsResponse> {
        return this.call(
            'ads.getFloodStats',
            {
                account_id: params.accountId,
                access_token: params.accessToken
            },
            Responses.AdsGetFloodStatsResponse
        )
    }

    /**
     * Returns a reason of ad rejection for pre-moderation.
     */
    public async adsGetRejectionReason(params: MethodsProps.AdsGetRejectionReasonParams): Promise<Responses.AdsGetRejectionReasonResponse> {
        return this.call(
            'ads.getRejectionReason',
            {
                account_id: params.accountId,
                ad_id: params.adId,
                access_token: params.accessToken
            },
            Responses.AdsGetRejectionReasonResponse
        )
    }

    /**
     * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
     */
    public async adsCreateTargetGroup(params: MethodsProps.AdsCreateTargetGroupParams): Promise<Responses.AdsCreateTargetGroupResponse> {
        return this.call(
            'ads.createTargetGroup',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                name: params.name,
                domain: params.domain,
                lifetime: params.lifetime,
                access_token: params.accessToken
            },
            Responses.AdsCreateTargetGroupResponse
        )
    }

    /**
     * Edits a retarget group.
     */
    public async adsUpdateTargetGroup(params: MethodsProps.AdsUpdateTargetGroupParams): Promise<Responses.AdsUpdateTargetGroupResponse> {
        return this.call(
            'ads.updateTargetGroup',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                target_group_id: params.targetGroupId,
                name: params.name,
                domain: params.domain,
                lifetime: params.lifetime,
                access_token: params.accessToken
            },
            Responses.AdsUpdateTargetGroupResponse
        )
    }

    /**
     * Deletes a retarget group.
     */
    public async adsDeleteTargetGroup(params: MethodsProps.AdsDeleteTargetGroupParams): Promise<Responses.AdsDeleteTargetGroupResponse> {
        return this.call(
            'ads.deleteTargetGroup',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                target_group_id: params.targetGroupId,
                access_token: params.accessToken
            },
            Responses.AdsDeleteTargetGroupResponse
        )
    }

    /**
     * Returns a list of target groups.
     */
    public async adsGetTargetGroups(params: MethodsProps.AdsGetTargetGroupsParams): Promise<Responses.AdsGetTargetGroupsResponse> {
        return this.call(
            'ads.getTargetGroups',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.AdsGetTargetGroupsResponse
        )
    }

    /**
     * Imports a list of advertiser's contacts to count VK registered users against the target group.
     */
    public async adsImportTargetContacts(params: MethodsProps.AdsImportTargetContactsParams): Promise<Responses.AdsImportTargetContactsResponse> {
        return this.call(
            'ads.importTargetContacts',
            {
                account_id: params.accountId,
                client_id: params.clientId,
                target_group_id: params.targetGroupId,
                contacts: params.contacts,
                access_token: params.accessToken
            },
            Responses.AdsImportTargetContactsResponse
        )
    }

    /**
     * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
     */
    public async secureCheckToken(params: MethodsProps.SecureCheckTokenParams): Promise<Responses.SecureCheckTokenResponse> {
        return this.call(
            'secure.checkToken',
            {
                token: params.token,
                ip: params.ip,
                access_token: params.accessToken
            },
            Responses.SecureCheckTokenResponse
        )
    }

    /**
     * Returns items list for a community.
     */
    public async marketGet(params: MethodsProps.MarketGetParams): Promise<Responses.MarketGetResponse> {
        return this.call(
            'market.get',
            {
                owner_id: params.ownerId,
                count: params.count,
                offset: params.offset,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.MarketGetResponse
        )
    }

    /**
     * Returns information about market items by their ids.
     */
    public async marketGetById(params: MethodsProps.MarketGetByIdParams): Promise<Responses.MarketGetByIdResponse> {
        return this.call(
            'market.getById',
            {
                item_ids: params.itemIds,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.MarketGetByIdResponse
        )
    }

    /**
     * Searches market items in a community's catalog
     */
    public async marketSearch(params: MethodsProps.MarketSearchParams): Promise<Responses.MarketSearchResponse> {
        return this.call(
            'market.search',
            {
                owner_id: params.ownerId,
                q: params.q,
                price_from: params.priceFrom,
                price_to: params.priceTo,
                tags: params.tags,
                rev: params.rev,
                offset: params.offset,
                count: params.count,
                extended: params.extended,
                access_token: params.accessToken
            },
            Responses.MarketSearchResponse
        )
    }

    /**
     * Returns community's collections list.
     */
    public async marketGetAlbums(params: MethodsProps.MarketGetAlbumsParams): Promise<Responses.MarketGetAlbumsResponse> {
        return this.call(
            'market.getAlbums',
            {
                owner_id: params.ownerId,
                offset: params.offset,
                count: params.count,
                access_token: params.accessToken
            },
            Responses.MarketGetAlbumsResponse
        )
    }

    /**
     * Returns items album's data
     */
    public async marketGetAlbumById(params: MethodsProps.MarketGetAlbumByIdParams): Promise<Responses.MarketGetAlbumByIdResponse> {
        return this.call(
            'market.getAlbumById',
            {
                owner_id: params.ownerId,
                album_ids: params.albumIds,
                access_token: params.accessToken
            },
            Responses.MarketGetAlbumByIdResponse
        )
    }

    /**
     * Creates a new comment for an item.
     */
    public async marketCreateComment(params: MethodsProps.MarketCreateCommentParams): Promise<Responses.MarketCreateCommentResponse> {
        return this.call(
            'market.createComment',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                message: params.message,
                attachments: params.attachments,
                from_group: params.fromGroup,
                reply_to_comment: params.replyToComment,
                sticker_id: params.stickerId,
                guid: params.guid,
                access_token: params.accessToken
            },
            Responses.MarketCreateCommentResponse
        )
    }

    /**
     * Returns comments list for an item.
     */
    public async marketGetComments(params: MethodsProps.MarketGetCommentsParams): Promise<Responses.MarketGetCommentsResponse> {
        return this.call(
            'market.getComments',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                need_likes: params.needLikes,
                start_comment_id: params.startCommentId,
                count: params.count,
                sort: params.sort,
                extended: params.extended,
                fields: params.fields,
                access_token: params.accessToken
            },
            Responses.MarketGetCommentsResponse
        )
    }

    /**
     * Deletes an item's comment
     */
    public async marketDeleteComment(params: MethodsProps.MarketDeleteCommentParams): Promise<Responses.MarketDeleteCommentResponse> {
        return this.call(
            'market.deleteComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.MarketDeleteCommentResponse
        )
    }

    /**
     * Restores a recently deleted comment
     */
    public async marketRestoreComment(params: MethodsProps.MarketRestoreCommentParams): Promise<Responses.MarketRestoreCommentResponse> {
        return this.call(
            'market.restoreComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                access_token: params.accessToken
            },
            Responses.MarketRestoreCommentResponse
        )
    }

    /**
     * Chages item comment's text
     */
    public async marketEditComment(params: MethodsProps.MarketEditCommentParams): Promise<Responses.MarketEditCommentResponse> {
        return this.call(
            'market.editComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                message: params.message,
                attachments: params.attachments,
                access_token: params.accessToken
            },
            Responses.MarketEditCommentResponse
        )
    }

    /**
     * Sends a complaint to the item's comment.
     */
    public async marketReportComment(params: MethodsProps.MarketReportCommentParams): Promise<Responses.MarketReportCommentResponse> {
        return this.call(
            'market.reportComment',
            {
                owner_id: params.ownerId,
                comment_id: params.commentId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.MarketReportCommentResponse
        )
    }

    /**
     * Returns a list of market categories.
     */
    public async marketGetCategories(params: MethodsProps.MarketGetCategoriesParams): Promise<Responses.MarketGetCategoriesResponse> {
        return this.call(
            'market.getCategories',
            {
                count: params.count,
                offset: params.offset,
                access_token: params.accessToken
            },
            Responses.MarketGetCategoriesResponse
        )
    }

    /**
     * Sends a complaint to the item.
     */
    public async marketReport(params: MethodsProps.MarketReportParams): Promise<Responses.MarketReportResponse> {
        return this.call(
            'market.report',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                reason: params.reason,
                access_token: params.accessToken
            },
            Responses.MarketReportResponse
        )
    }

    /**
     * Ads a new item to the market.
     */
    public async marketAdd(params: MethodsProps.MarketAddParams): Promise<Responses.MarketAddResponse> {
        return this.call(
            'market.add',
            {
                owner_id: params.ownerId,
                name: params.name,
                description: params.description,
                category_id: params.categoryId,
                price: params.price,
                deleted: params.deleted,
                main_photo_id: params.mainPhotoId,
                photo_ids: params.photoIds,
                access_token: params.accessToken
            },
            Responses.MarketAddResponse
        )
    }

    /**
     * Edits an item.
     */
    public async marketEdit(params: MethodsProps.MarketEditParams): Promise<Responses.MarketEditResponse> {
        return this.call(
            'market.edit',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                name: params.name,
                description: params.description,
                category_id: params.categoryId,
                price: params.price,
                deleted: params.deleted,
                main_photo_id: params.mainPhotoId,
                photo_ids: params.photoIds,
                access_token: params.accessToken
            },
            Responses.MarketEditResponse
        )
    }

    /**
     * Deletes an item.
     */
    public async marketDelete(params: MethodsProps.MarketDeleteParams): Promise<Responses.MarketDeleteResponse> {
        return this.call(
            'market.delete',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.MarketDeleteResponse
        )
    }

    /**
     * Restores recently deleted item
     */
    public async marketRestore(params: MethodsProps.MarketRestoreParams): Promise<Responses.MarketRestoreResponse> {
        return this.call(
            'market.restore',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                access_token: params.accessToken
            },
            Responses.MarketRestoreResponse
        )
    }

    /**
     * Changes item place in a collection.
     */
    public async marketReorderItems(params: MethodsProps.MarketReorderItemsParams): Promise<Responses.MarketReorderItemsResponse> {
        return this.call(
            'market.reorderItems',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                item_id: params.itemId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.MarketReorderItemsResponse
        )
    }

    /**
     * Reorders the collections list.
     */
    public async marketReorderAlbums(params: MethodsProps.MarketReorderAlbumsParams): Promise<Responses.MarketReorderAlbumsResponse> {
        return this.call(
            'market.reorderAlbums',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                before: params.before,
                after: params.after,
                access_token: params.accessToken
            },
            Responses.MarketReorderAlbumsResponse
        )
    }

    /**
     * Creates new collection of items
     */
    public async marketAddAlbum(params: MethodsProps.MarketAddAlbumParams): Promise<Responses.MarketAddAlbumResponse> {
        return this.call(
            'market.addAlbum',
            {
                owner_id: params.ownerId,
                title: params.title,
                photo_id: params.photoId,
                main_album: params.mainAlbum,
                access_token: params.accessToken
            },
            Responses.MarketAddAlbumResponse
        )
    }

    /**
     * Edits a collection of items
     */
    public async marketEditAlbum(params: MethodsProps.MarketEditAlbumParams): Promise<Responses.MarketEditAlbumResponse> {
        return this.call(
            'market.editAlbum',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                title: params.title,
                photo_id: params.photoId,
                main_album: params.mainAlbum,
                access_token: params.accessToken
            },
            Responses.MarketEditAlbumResponse
        )
    }

    /**
     * Deletes a collection of items.
     */
    public async marketDeleteAlbum(params: MethodsProps.MarketDeleteAlbumParams): Promise<Responses.MarketDeleteAlbumResponse> {
        return this.call(
            'market.deleteAlbum',
            {
                owner_id: params.ownerId,
                album_id: params.albumId,
                access_token: params.accessToken
            },
            Responses.MarketDeleteAlbumResponse
        )
    }

    /**
     * Removes an item from one or multiple collections.
     */
    public async marketRemoveFromAlbum(params: MethodsProps.MarketRemoveFromAlbumParams): Promise<Responses.MarketRemoveFromAlbumResponse> {
        return this.call(
            'market.removeFromAlbum',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                album_ids: params.albumIds,
                access_token: params.accessToken
            },
            Responses.MarketRemoveFromAlbumResponse
        )
    }

    /**
     * Adds an item to one or multiple collections.
     */
    public async marketAddToAlbum(params: MethodsProps.MarketAddToAlbumParams): Promise<Responses.MarketAddToAlbumResponse> {
        return this.call(
            'market.addToAlbum',
            {
                owner_id: params.ownerId,
                item_id: params.itemId,
                album_ids: params.albumIds,
                access_token: params.accessToken
            },
            Responses.MarketAddToAlbumResponse
        )
    }
}