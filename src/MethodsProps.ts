export interface UsersGetParams {
    /**
     * User IDs or screen names ('screen_name'). By default, current user ID.
     */
    userIds?: string[],
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities';
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersSearchParams {
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string,
    /**
     * Sort order:; '1' — by date registered; '0' — by rating
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
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online';
     */
    fields?: string[],
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
    universityCountry?: number,
    /**
     * ID of the institution of higher education.
     */
    university?: number,
    /**
     * Year of graduation from an institution of higher education.
     */
    universityYear?: number,
    /**
     * Faculty ID.
     */
    universityFaculty?: number,
    /**
     * Chair ID.
     */
    universityChair?: number,
    /**
     * '1' — female; '2' — male; '0' — any (default)
     */
    sex?: number,
    /**
     * Relationship status:; '1' — Not married; '2' — In a relationship; '3' — Engaged; '4' — Married; '5' — It's complicated; '6' — Actively searching; '7' — In love
     */
    status?: number,
    /**
     * Minimum age.
     */
    ageFrom?: number,
    /**
     * Maximum age.
     */
    ageTo?: number,
    /**
     * Day of birth.
     */
    birthDay?: number,
    /**
     * Month of birth.
     */
    birthMonth?: number,
    /**
     * Year of birth.
     */
    birthYear?: number,
    /**
     * '1' — online only; '0' — all users
     */
    online?: boolean,
    /**
     * '1' — with photo only; '0' — all users
     */
    hasPhoto?: boolean,
    /**
     * ID of the country where users finished school.
     */
    schoolCountry?: number,
    /**
     * ID of the city where users finished school.
     */
    schoolCity?: number,
    /**
     * undefined
     */
    schoolClass?: number,
    /**
     * ID of the school.
     */
    school?: number,
    /**
     * School graduation year.
     */
    schoolYear?: number,
    /**
     * Users' religious affiliation.
     */
    religion?: string,
    /**
     * Users' interests.
     */
    interests?: string,
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
    groupId?: number,
    /**
     * undefined
     */
    fromList?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersIsAppUserParams {
    /**
     * undefined
     */
    userId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersGetSubscriptionsParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * '1' — to return a combined list of users and communities; '0' — to return separate lists of users and communities (default)
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
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersGetFollowersParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Offset needed to return a specific subset of followers.
     */
    offset?: number,
    /**
     * Number of followers to return.
     */
    count?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online'.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersReportParams {
    /**
     * ID of the user about whom a complaint is being made.
     */
    userId: number,
    /**
     * Type of complaint:; 'porn' – pornography; 'spam' – spamming; 'insult' – abusive behavior; 'advertisment' – disruptive advertisements
     */
    type: string,
    /**
     * Comment describing the complaint.
     */
    comment?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface UsersGetNearbyParams {
    /**
     * geographic latitude of the place a user is located, in degrees (from -90 to 90)
     */
    latitude: number,
    /**
     * geographic longitude of the place a user is located, in degrees (from -180 to 180)
     */
    longitude: number,
    /**
     * current location accuracy in meters
     */
    accuracy?: number,
    /**
     * time when a user disappears from location search results, in seconds
     */
    timeout?: number,
    /**
     * search zone radius type (1 to 4); :* 1 – 300 m;; :* 2 – 2400 m;; :* 3 – 18 km;; :* 4 – 150 km.
     */
    radius?: number,
    /**
     * list of additional fields to return.; Available values: sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters, screen_name, maiden_name, timezone, occupation
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname: ; nom –nominative (default) ; gen – genitive ; dat – dative ; acc – accusative ; ins – instrumental ; abl – prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AuthCheckPhoneParams {
    /**
     * Phone number.
     */
    phone: string,
    /**
     * User ID.
     */
    clientId?: number,
    /**
     * undefined
     */
    clientSecret: string,
    /**
     * undefined
     */
    authByPhone?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AuthSignupParams {
    /**
     * User's first name.
     */
    firstName: string,
    /**
     * User's surname.
     */
    lastName: string,
    /**
     * Your application ID.
     */
    clientId: number,
    /**
     * undefined
     */
    clientSecret: string,
    /**
     * User's phone number. Can be pre-checked with the [vk.com/dev/auth.checkPhone|auth.checkPhone] method.
     */
    phone: string,
    /**
     * User's password (minimum of 6 characters). Can be specified later with the [vk.com/dev/auth.confirm|auth.confirm] method.
     */
    password?: string,
    /**
     * '1' — test mode, in which the user will not be registered and the phone number will not be checked for availability; '0' — default mode (default)
     */
    testMode?: boolean,
    /**
     * '1' — call the phone number and leave a voice message of the authorization code; '0' — send the code by SMS (default)
     */
    voice?: boolean,
    /**
     * '1' — female; '2' — male
     */
    sex?: number,
    /**
     * Session ID required for method recall when SMS was not delivered.
     */
    sid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AuthConfirmParams {
    /**
     * undefined
     */
    clientId: number,
    /**
     * undefined
     */
    clientSecret: string,
    /**
     * undefined
     */
    phone: string,
    /**
     * undefined
     */
    code: string,
    /**
     * undefined
     */
    password?: string,
    /**
     * undefined
     */
    testMode?: boolean,
    /**
     * undefined
     */
    intro?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AuthRestoreParams {
    /**
     * user phone number.
     */
    phone: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallGetParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
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
     * Filter to apply:; 'owner' — posts by the wall owner; 'others' — posts by someone else; 'all' — posts by the wall owner and others (default); 'postponed' — timed posts (only available for calls with an 'access_token'); 'suggests' — suggested posts on a community wall
     */
    filter?: string,
    /**
     * '1' — to return 'wall', 'profiles', and 'groups' fields; '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface WallSearchParams {
    /**
     * user or community id. ; "Remember that for a community 'owner_id' must be negative."
     */
    ownerId?: number,
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
    ownersOnly?: boolean,
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
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosCreateAlbumParams {
    /**
     * Album title.
     */
    title: string,
    /**
     * ID of the community in which the album will be created.
     */
    groupId?: number,
    /**
     * Album description.
     */
    description?: string,
    /**
     * undefined
     */
    privacyView?: string[],
    /**
     * undefined
     */
    privacyComment?: string[],
    /**
     * undefined
     */
    uploadByAdminsOnly?: boolean,
    /**
     * undefined
     */
    commentsDisabled?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosEditAlbumParams {
    /**
     * ID of the photo album to be edited.
     */
    albumId: number,
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
    ownerId?: number,
    /**
     * undefined
     */
    privacyView?: string[],
    /**
     * undefined
     */
    privacyComment?: string[],
    /**
     * undefined
     */
    uploadByAdminsOnly?: boolean,
    /**
     * undefined
     */
    commentsDisabled?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetAlbumsParams {
    /**
     * ID of the user or community that owns the albums.
     */
    ownerId?: number,
    /**
     * Album IDs.
     */
    albumIds?: number[],
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
    needSystem?: boolean,
    /**
     * '1' — to return an additional 'thumb_src' field; '0' — (default)
     */
    needCovers?: boolean,
    /**
     * '1' — to return photo sizes in a
     */
    photoSizes?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetParams {
    /**
     * ID of the user or community that owns the photos. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Photo album ID. To return information about photos from service albums, use the following string values: 'profile, wall, saved'.
     */
    albumId?: string,
    /**
     * Photo IDs.
     */
    photoIds?: string[],
    /**
     * Sort order:; '1' — reverse chronological; '0' — chronological
     */
    rev?: boolean,
    /**
     * '1' — to return additional 'likes', 'comments', and 'tags' fields; '0' — (default)
     */
    extended?: boolean,
    /**
     * Type of feed obtained in 'feed' field of the method.
     */
    feedType?: string,
    /**
     * unixtime, that can be obtained with [vk.com/dev/newsfeed.get|newsfeed.get] method in date field to get all photos uploaded by the user on a specific day, or photos the user has been tagged on. Also, 'uid' parameter of the user the event happened with shall be specified.
     */
    feed?: number,
    /**
     * '1' — to return photo sizes in a [vk.com/dev/photo_sizes|special format]
     */
    photoSizes?: boolean,
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
    accessToken?: string
}

export interface PhotosGetAlbumsCountParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Community ID.
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetByIdParams {
    /**
     * IDs separated with a comma, that are IDs of users who posted photos and IDs of photos themselves with an underscore character between such IDs. To get information about a photo in the group album, you shall specify group ID instead of user ID. Example:; "1_129207899,6492_135055734, ; -20629724_271945303"
     */
    photos: string[],
    /**
     * '1' — to return additional fields; '0' — (default)
     */
    extended?: boolean,
    /**
     * '1' — to return photo sizes in a
     */
    photoSizes?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetUploadServerParams {
    /**
     * Album ID.
     */
    albumId?: number,
    /**
     * ID of community that owns the album (if the photo will be uploaded to a community album).
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetOwnerPhotoUploadServerParams {
    /**
     * identifier of a community or current user.; ; "Note that community id must be negative.; 'owner_id=1' – user; 'owner_id=-1' – community; "
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetChatUploadServerParams {
    /**
     * ID of the chat for which you want to upload a cover photo.
     */
    chatId: number,
    /**
     *
     */
    cropX?: number,
    /**
     *
     */
    cropY?: number,
    /**
     * Width (in pixels) of the photo after cropping.
     */
    cropWidth?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetMarketUploadServerParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * '1' if you want to upload the main item photo.
     */
    mainPhoto?: boolean,
    /**
     * X coordinate of the crop left upper corner.
     */
    cropX?: number,
    /**
     * Y coordinate of the crop left upper corner.
     */
    cropY?: number,
    /**
     * Width of the cropped photo in px.
     */
    cropWidth?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetMarketAlbumUploadServerParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosSaveMarketPhotoParams {
    /**
     * Community ID.
     */
    groupId?: number,
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
    cropData?: string,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    cropHash?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosSaveMarketAlbumPhotoParams {
    /**
     * Community ID.
     */
    groupId: number,
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
    accessToken?: string
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
    accessToken?: string
}

export interface PhotosSaveWallPhotoParams {
    /**
     * ID of the user on whose wall the photo will be saved.
     */
    userId?: number,
    /**
     * ID of community on whose wall the photo will be saved.
     */
    groupId?: number,
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
    accessToken?: string
}

export interface PhotosGetWallUploadServerParams {
    /**
     * ID of community to whose wall the photo will be uploaded.
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetMessagesUploadServerParams {
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface PhotosReportParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * Reason for the complaint:; '0' – spam; '1' – child pornography; '2' – extremism; '3' – violence; '4' – drug propaganda; '5' – adult material; '6' – insult; abuse
     */
    reason?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosReportCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId: number,
    /**
     * ID of the comment being reported.
     */
    commentId: number,
    /**
     * Reason for the complaint:; '0' – spam; '1' – child pornography; '2' – extremism; '3' – violence; '4' – drug propaganda; '5' – adult material; '6' – insult; abuse
     */
    reason?: number,
    /**
     * access token
     */
    accessToken?: string
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
     * Geographical longitude, in degrees (from '-180' to '180').;
     */
    long?: number,
    /**
     *
     */
    startTime?: number,
    /**
     *
     */
    endTime?: number,
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
    accessToken?: string
}

export interface FriendsGetParams {
    /**
     * User ID. By default, the current user ID.
     */
    userId?: number,
    /**
     * Sort order: ; 'name' — by name (enabled only if the 'fields' parameter is used); 'hints' — by rating, similar to how friends are sorted in My friends section; ; This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    order?: string,
    /**
     * ID of the friend list returned by the [vk.com/dev/friends.getLists|friends.getLists] method to be used as the source. This parameter is taken into account only when the uid parameter is set to the current user ID.; ; This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    listId?: number,
    /**
     * Number of friends to return.
     */
    count?: number,
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number,
    /**
     * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname: ; 'nom' — nominative (default) ; 'gen' — genitive ; 'dat' — dative ; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetOnlineParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Friend list ID. If this parameter is not set, information about all online friends is returned.
     */
    listId?: number,
    /**
     * '1' — to return an additional 'online_mobile' field; '0' — (default);
     */
    onlineMobile?: boolean,
    /**
     * Sort order:; 'random' — random order
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
    accessToken?: string
}

export interface FriendsGetMutualParams {
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'target_uid'.
     */
    sourceUid?: number,
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    targetUid?: number,
    /**
     * IDs of the users whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    targetUids?: number[],
    /**
     * Sort order:; 'random' — random order
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
    accessToken?: string
}

export interface FriendsGetRecentParams {
    /**
     * Number of recently added friends to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
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
    needMutual?: boolean,
    /**
     * '1' — to return outgoing requests; '0' — to return incoming requests (default)
     */
    out?: boolean,
    /**
     * Sort order:; '1' — by number of mutual friends; '0' — by date
     */
    sort?: number,
    /**
     * '1' — to return a list of suggested friends; '0' — to return friend requests (default)
     */
    suggested?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsAddParams {
    /**
     * ID of the user whose friend request will be approved or to whom a friend request will be sent.
     */
    userId: number,
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
    accessToken?: string
}

export interface FriendsEditParams {
    /**
     * ID of the user whose friend list is to be edited.
     */
    userId: number,
    /**
     * IDs of the friend lists to which to add the user.
     */
    listIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsDeleteParams {
    /**
     * ID of the user whose friend request is to be declined or who is to be deleted from the current user's friend list.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetListsParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * '1' — to return system friend lists. By default: '0'.
     */
    returnSystem?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsAddListParams {
    /**
     * Name of the friend list.
     */
    name: string,
    /**
     * IDs of users to be added to the friend list.;
     */
    userIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsEditListParams {
    /**
     * Name of the friend list.
     */
    name?: string,
    /**
     * Friend list ID.
     */
    listId: number,
    /**
     * IDs of users in the friend list.
     */
    userIds?: number[],
    /**
     * (Applies if 'user_ids' parameter is not set.); User IDs to add to the friend list.
     */
    addUserIds?: number[],
    /**
     * (Applies if 'user_ids' parameter is not set.); User IDs to delete from the friend list.
     */
    deleteUserIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsDeleteListParams {
    /**
     * ID of the friend list to delete.
     */
    listId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetAppUsersParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetByPhonesParams {
    /**
     * List of phone numbers in MSISDN format (maximum 1000).; Example:; "+79219876543,+79111234567"
     */
    phones?: string[],
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online, counters'.;
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsDeleteAllRequestsParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetSuggestionsParams {
    /**
     * Types of potential friends to return:; 'mutual' — users with many mutual friends ; 'contacts' — users found with the [vk.com/dev/account.importContacts|account.importContacts] method ; 'mutual_contacts' — users who imported the same contacts as the current user with the [vk.com/dev/account.importContacts|account.importContacts] method
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
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname: ; 'nom' — nominative (default) ; 'gen' — genitive ; 'dat' — dative ; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsAreFriendsParams {
    /**
     * IDs of the users whose friendship status to check.
     */
    userIds: number[],
    /**
     * '1' — to return 'sign' field. 'sign' is md5("{id}_{user_id}_{friends_status}_{application_secret}"), where id is current user ID.; This field allows to check that data has not been modified by the client.; By default: '0'.
     */
    needSign?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsGetAvailableForCallParams {
    /**
     * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname: ; 'nom' — nominative (default) ; 'gen' — genitive ; 'dat' — dative ; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface FriendsSearchParams {
    /**
     * User ID.
     */
    userId: number,
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online';
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
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
    accessToken?: string
}

export interface WidgetsGetCommentsParams {
    /**
     * undefined
     */
    widgetApiId?: number,
    /**
     * undefined
     */
    url?: string,
    /**
     * undefined
     */
    pageId?: string,
    /**
     * undefined
     */
    order?: string,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * undefined
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WidgetsGetPagesParams {
    /**
     * undefined
     */
    widgetApiId?: number,
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
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureGetAppBalanceParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureGetTransactionsHistoryParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureGetSMSHistoryParams {
    /**
     * undefined
     */
    userId?: number,
    /**
     * filter by start date. It is set as UNIX-time.
     */
    dateFrom?: number,
    /**
     * filter by end date. It is set as UNIX-time.
     */
    dateTo?: number,
    /**
     * number of returned posts. By default — 1000.
     */
    limit?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureSendSMSNotificationParams {
    /**
     * ID of the user to whom SMS notification is sent. The user shall allow the application to send him/her notifications (, +1).
     */
    userId: number,
    /**
     * 'SMS' text to be sent in 'UTF-8' encoding. Only Latin letters and numbers are allowed. Maximum size is '160' characters.
     */
    message: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureSendNotificationParams {
    /**
     * undefined
     */
    userIds?: number[],
    /**
     * undefined
     */
    userId?: number,
    /**
     * notification text which should be sent in 'UTF-8' encoding ('254' characters maximum).
     */
    message: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureSetCounterParams {
    /**
     * undefined
     */
    counters?: string[],
    /**
     * undefined
     */
    userId?: number,
    /**
     * counter value.
     */
    counter?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureSetUserLevelParams {
    /**
     * undefined
     */
    levels?: string[],
    /**
     * undefined
     */
    userId?: number,
    /**
     * level value.
     */
    level?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureGetUserLevelParams {
    /**
     * undefined
     */
    userIds: number[],
    /**
     * access token
     */
    accessToken?: string
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
    userId?: number,
    /**
     * access token
     */
    accessToken?: string
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
    userId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface StorageGetKeysParams {
    /**
     * user id, whose variables names are returned if they were requested with a server method.
     */
    userId?: number,
    /**
     * amount of variable names the info needs to be collected from.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface OrdersGetParams {
    /**
     * number of returned orders.
     */
    count?: number,
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    testMode?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface OrdersGetByIdParams {
    /**
     * order ID.
     */
    orderId?: number,
    /**
     * order IDs (when information about several orders is requested).
     */
    orderIds?: number[],
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    testMode?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface OrdersChangeStateParams {
    /**
     * order ID.
     */
    orderId: number,
    /**
     * action to be done with the order. ; ; Available actions:; *cancel — to cancel unconfirmed order.; *charge — to confirm unconfirmed order. Applies only if processing of [vk.com/dev/payments_status|order_change_state] notification failed.; *refund — to cancel confirmed order.;
     */
    action: string,
    /**
     * internal ID of the order in the application.
     */
    appOrderId?: number,
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default — 0.
     */
    testMode?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface OrdersGetAmountParams {
    /**
     * undefined
     */
    userId: number,
    /**
     * undefined
     */
    votes: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosSaveParams {
    /**
     * ID of the album to save photos to.
     */
    albumId?: number,
    /**
     * ID of the community to save photos to.
     */
    groupId?: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server?: number,
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photosList?: string,
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
    accessToken?: string
}

export interface PhotosCopyParams {
    /**
     * photo's owner ID
     */
    ownerId: number,
    /**
     * photo ID
     */
    photoId: number,
    /**
     * for private photos
     */
    accessKey?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosEditParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
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
    placeStr?: string,
    /**
     * undefined
     */
    foursquareId?: string,
    /**
     * undefined
     */
    deletePlace?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosMoveParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * ID of the album to which the photo will be moved.
     */
    targetAlbumId: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosMakeCoverParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * Album ID.
     */
    albumId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosReorderAlbumsParams {
    /**
     * ID of the user or community that owns the album.
     */
    ownerId?: number,
    /**
     * Album ID.
     */
    albumId: number,
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
    accessToken?: string
}

export interface PhotosReorderPhotosParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
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
    accessToken?: string
}

export interface PhotosGetAllParams {
    /**
     * ID of a user or community that owns the photos.; Use a negative value to designate a community ID.
     */
    ownerId?: number,
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
    photoSizes?: boolean,
    /**
     * '1' – to return photos only from standard albums; '0' – to return all photos including those in service albums, e.g., 'My wall photos' (default)
     */
    noServiceAlbums?: boolean,
    /**
     * '1' – to show information about photos being hidden from the block above the wall.
     */
    needHidden?: boolean,
    /**
     * '1' – not to return photos being hidden from the block above the wall. Works only with owner_id>0, no_service_albums is ignored.
     */
    skipHidden?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetUserPhotosParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Offset needed to return a specific subset of photos. By default, '0'.
     */
    offset?: number,
    /**
     * Number of photos to return. Maximum value is 1000.
     */
    count?: number,
    /**
     * '1' — to return an additional 'likes' field; '0' — (default)
     */
    extended?: boolean,
    /**
     * Sort order:; '1' — by date the tag was added in ascending order; '0' — by date the tag was added in descending order
     */
    sort?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosDeleteAlbumParams {
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * ID of the community that owns the album.
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosDeleteParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosRestoreParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosConfirmTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: string,
    /**
     * Tag ID.
     */
    tagId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetCommentsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * '1' — to return an additional 'likes' field; '0' — (default)
     */
    needLikes?: boolean,
    /**
     * undefined
     */
    startCommentId?: number,
    /**
     * Offset needed to return a specific subset of comments. By default, '0'.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * Sort order:; 'asc' — old first; 'desc' — new first
     */
    sort?: string,
    /**
     * undefined
     */
    accessKey?: string,
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
    accessToken?: string
}

export interface PhotosGetAllCommentsParams {
    /**
     * ID of the user or community that owns the album(s).
     */
    ownerId?: number,
    /**
     * Album ID. If the parameter is not set, comments on all of the user's albums will be returned.
     */
    albumId?: number,
    /**
     * '1' — to return an additional 'likes' field; '0' — (default)
     */
    needLikes?: boolean,
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
    accessToken?: string
}

export interface PhotosCreateCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * Comment text.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — Media attachment owner ID.; '<media_id>' — Media attachment ID.; ; Example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * '1' — to post a comment from the community
     */
    fromGroup?: boolean,
    /**
     *
     */
    replyToComment?: number,
    /**
     * undefined
     */
    stickerId?: number,
    /**
     * undefined
     */
    accessKey?: string,
    /**
     * undefined
     */
    guid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosDeleteCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosRestoreCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * ID of the deleted comment.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosEditCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * New text of the comment.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — Media attachment owner ID.; '<media_id>' — Media attachment ID.; ; Example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosGetTagsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * undefined
     */
    accessKey?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PhotosPutTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * ID of the user to be tagged.
     */
    userId: number,
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
    accessToken?: string
}

export interface PhotosRemoveTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    ownerId?: number,
    /**
     * Photo ID.
     */
    photoId: number,
    /**
     * Tag ID.
     */
    tagId: number,
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface WallGetByIdParams {
    /**
     * User or community IDs and post IDs, separated by underscores. Use a negative value to designate a community ID. Example:; "93388_21539,93388_20904,2943_4276,-1_1"
     */
    posts: string[],
    /**
     * '1' — to return user and community objects needed to display posts; '0' — no additional fields are returned (default)
     */
    extended?: boolean,
    /**
     * Sets the number of parent elements to include in the array 'copy_history' that is returned if the post is a repost from another wall.
     */
    copyHistoryDepth?: number,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface WallPostParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * '1' — post will be available to friends only; '0' — post will be available to all users (default)
     */
    friendsOnly?: boolean,
    /**
     * For a community:; '1' — post will be published by the community; '0' — post will be published by the user (default)
     */
    fromGroup?: boolean,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; 'page' — wiki-page; 'note' — note; 'poll' — poll; 'album' — photo album; '<owner_id>' — ID of the media application owner. ; '<media_id>' — Media application ID.; ; Example:; "photo100172_166443618,photo66748_265827614"; May contain a link to an external page to include in the post. Example:; "photo66748_265827614,http://habrahabr.ru"; "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[],
    /**
     * List of services or websites the update will be exported to, if the user has so requested. Sample values: 'twitter', 'facebook'.
     */
    services?: string,
    /**
     * Only for posts in communities with 'from_group' set to '1':; '1' — post will be signed with the name of the posting user; '0' — post will not be signed (default)
     */
    signed?: boolean,
    /**
     * Publication date (in Unix time). If used, posting will be delayed until the set time.
     */
    publishDate?: number,
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
    placeId?: number,
    /**
     * Post ID. Used for publishing of scheduled and suggested posts.
     */
    postId?: number,
    /**
     * undefined
     */
    guid?: string,
    /**
     * undefined
     */
    markAsAds?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallRepostParams {
    /**
     * ID of the object to be reposted on the wall. Example:; "wall66748_3675"
     */
    object: string,
    /**
     * Comment to be added along with the reposted object.
     */
    message?: string,
    /**
     * Target community ID when reposting to a community.
     */
    groupId?: number,
    /**
     * undefined
     */
    markAsAds?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallGetRepostsParams {
    /**
     * User ID or community ID. By default, current user ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId?: number,
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
    accessToken?: string
}

export interface WallEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * (Applies only when editing a scheduled post.); '1' — post will be available to friends only; '0' — post will be available to all users (default)
     */
    friendsOnly?: boolean,
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media application owner.; '<media_id>' — Media application ID. ; ; Example:; "photo100172_166443618,photo66748_265827614"; May contain a link to an external page to include in the post. Example:; "photo66748_265827614,http://habrahabr.ru"; "NOTE: If more than one link is being attached, an error is thrown."
     */
    attachments?: string[],
    /**
     * (Applies only to a scheduled post.) List of services or websites where status will be updated, if the user has so requested. Sample values: 'twitter', 'facebook'.
     */
    services?: string,
    /**
     * (Applies only to a post that was created "as community" on a community wall.); '1' — to add the signature of the user who created the post
     */
    signed?: boolean,
    /**
     * (Applies only to a scheduled post.) Publication date (in Unix time). If used, posting will be delayed until the set time.
     */
    publishDate?: number,
    /**
     * Geographical latitude of the check-in, in degrees (from -90 to 90).
     */
    lat?: number,
    /**
     * Geographical longitude of the check-in, in degrees (from -180 to 180).
     */
    long?: number,
    /**
     * ID of the location where the user was tagged.
     */
    placeId?: number,
    /**
     * undefined
     */
    markAsAds?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallDeleteParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * ID of the post to be deleted.
     */
    postId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallRestoreParams {
    /**
     * User ID or community ID from whose wall the post was deleted. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * ID of the post to be restored.
     */
    postId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallPinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallUnpinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallGetCommentsParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * '1' — to return the 'likes' field; '0' — not to return the 'likes' field (default)
     */
    needLikes?: boolean,
    /**
     * undefined
     */
    startCommentId?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return (maximum 100).
     */
    count?: number,
    /**
     * Sort order:; 'asc' — chronological; 'desc' — reverse chronological
     */
    sort?: string,
    /**
     * Number of characters at which to truncate comments when previewed. By default, '90'. Specify '0' if you do not want to truncate comments.;
     */
    previewLength?: number,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallCreateCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * '1' — to post the comment as from the community;; '0' — (default) to post the comment as from the user.
     */
    fromGroup?: boolean,
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string,
    /**
     * ID of comment to reply.
     */
    replyToComment?: number,
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media ojbect:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media owner.; '<media_id>' — Media ID. ; ; For example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * Sticker ID.
     */
    stickerId?: number,
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallEditCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.; ;
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * New comment text.;
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format:; ; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media attachment owner.; '<media_id>' — Media attachment ID. ; ; For example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface WallDeleteCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.;
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallRestoreCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallReportPostParams {
    /**
     * ID of the user or community that owns the wall.
     */
    ownerId: number,
    /**
     * Post ID.
     */
    postId: number,
    /**
     * Reason for the complaint:; '0' – spam; '1' – child pornography; '2' – extremism; '3' – violence; '4' – drug propaganda; '5' – adult material; '6' – insult; abuse
     */
    reason?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface WallReportCommentParams {
    /**
     * ID of the user or community that owns the wall.
     */
    ownerId: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * Reason for the complaint:; '0' – spam; '1' – child pornography; '2' – extremism; '3' – violence; '4' – drug propaganda; '5' – adult material; '6' – insult; abuse
     */
    reason?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface StatusGetParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    userId?: number,
    /**
     * undefined
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface StatusSetParams {
    /**
     * Text of the new status.
     */
    text?: string,
    /**
     * Identifier of a community to set a status in. If left blank the status is set to current user.
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetParams {
    /**
     * ID of the user or community that owns the audio file. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Audio album ID.
     */
    albumId?: number,
    /**
     * IDs of the audio files to return.
     */
    audioIds?: number[],
    /**
     * '1' — to return information about users who uploaded audio files
     */
    needUser?: boolean,
    /**
     * Offset needed to return a specific subset of audio files.
     */
    offset?: number,
    /**
     * Number of audio files to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetByIdParams {
    /**
     * Audio file IDs, in the following format:; "{owner_id}_{audio_id}"
     */
    audios: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetLyricsParams {
    /**
     * Lyrics ID (could be obtained with [vk.com/dev/audio.get|audio.get], [vk.com/dev/audio.getById|audio.getById], or [vk.com/dev/audio.search|audio.search] methods).
     */
    lyricsId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioSearchParams {
    /**
     * Search query string (e.g., 'The Beatles').
     */
    q?: string,
    /**
     * '1' — to correct for mistakes in the search query (e.g., if you enter 'Beetles', the system will search for 'Beatles').
     */
    autoComplete?: boolean,
    /**
     * '1' — to return only audio files that have associated lyrics.
     */
    lyrics?: boolean,
    /**
     * '1' — to search only by artist name.
     */
    performerOnly?: boolean,
    /**
     * Sort order: ; '1' — by duration;; '2' — by popularity;; '0' — by date added.
     */
    sort?: number,
    /**
     * '1' — to search among current user's audios. By default: '0'.
     */
    searchOwn?: boolean,
    /**
     * Offset needed to return a specific subset of audio files.
     */
    offset?: number,
    /**
     * Number of audio files to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetUploadServerParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioSaveParams {
    /**
     * This parameter is returned when the audio file is [vk.com/dev/upload_files_2|uploaded to the server].
     */
    server: number,
    /**
     * This parameter is returned when the audio file is [vk.com/dev/upload_files_2|uploaded to the server].
     */
    audio: string,
    /**
     * This parameter is returned when the audio file is [vk.com/dev/upload_files_2|uploaded to the server].
     */
    hash?: string,
    /**
     * The name of the artist. By default, this is obtained from ID3 tags.
     */
    artist?: string,
    /**
     * The title of the audio file. By default, this is obtained from ID3 tags.
     */
    title?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioAddParams {
    /**
     * Audio file ID.
     */
    audioId: number,
    /**
     * ID of the user or community that owns the audio file. Use a negative value to designate a community ID. ; ;
     */
    ownerId: number,
    /**
     * Community ID, needed when adding the audio file to a community (without minus).
     */
    groupId?: number,
    /**
     * Album ID.
     */
    albumId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioDeleteParams {
    /**
     * Audio file ID.
     */
    audioId: number,
    /**
     * ID of the user or community that owns the audio file. Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioEditParams {
    /**
     * ID of the user or community that owns the audio file.
     */
    ownerId: number,
    /**
     * Audio file ID.
     */
    audioId: number,
    /**
     * Name of the artist.
     */
    artist?: string,
    /**
     * Title of the audio file.
     */
    title?: string,
    /**
     * Text of the lyrics of the audio file.
     */
    text?: string,
    /**
     * Genre of the audio file. See the list of [vk.com/dev/audio_genres|audio genres].
     */
    genreId?: number,
    /**
     * '1' — audio file will not be available for search; '0' — audio file will be available for search (default)
     */
    noSearch?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioReorderParams {
    /**
     * Audio file ID.
     */
    audioId: number,
    /**
     * ID of the user or community that owns the audio file.
     */
    ownerId?: number,
    /**
     * ID of the audio file before which to place the audio file.
     */
    before?: number,
    /**
     * ID of the audio file after which to place the audio file.
     */
    after?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioRestoreParams {
    /**
     * Audio file ID.
     */
    audioId: number,
    /**
     * ID of the user or community that owns the audio file.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetAlbumsParams {
    /**
     * ID of the user or community that owns the audio file.
     */
    ownerId?: number,
    /**
     * Offset needed to return a specific subset of albums.
     */
    offset?: number,
    /**
     * Number of albums to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioAddAlbumParams {
    /**
     * Community ID (if the album will be created in a community).
     */
    groupId?: number,
    /**
     * Album title.
     */
    title: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioEditAlbumParams {
    /**
     * ID of the community where the album is located.;
     */
    groupId?: number,
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * New album title.
     */
    title: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioDeleteAlbumParams {
    /**
     * ID of the community where the album is located.;
     */
    groupId?: number,
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioMoveToAlbumParams {
    /**
     * ID of the community where the audio files are located. By default, current user ID.;
     */
    groupId?: number,
    /**
     * ID of the album to which the audio files will be moved.
     */
    albumId?: number,
    /**
     * IDs of the audio files to be moved.; "NOTE: An album can hold up to 1000 audio files.";
     */
    audioIds: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioSetBroadcastParams {
    /**
     * ID of the audio file to be shown in status (e.g., '1_190442705'). If the parameter is not set, the audio status of given communities and user will be deleted.
     */
    audio?: string,
    /**
     * IDs of communities and user whose statuses will be included in the broadcast. Use a negative value to designate a community ID. By default, current user ID.
     */
    targetIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetBroadcastListParams {
    /**
     * Types of objects to return:; 'friends' — only friends; 'groups' — only communities; 'all' — both friends and communities (default)
     */
    filter?: string,
    /**
     * '1' — to return only friends and communities that are broadcasting at the moment.; '0' — to return all friends and communities (default).
     */
    active?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetRecommendationsParams {
    /**
     * Use to get recommendations based on a particular audio file. The ID of the user or community that owns an audio file and that audio file's ID, separated by an underscore.;
     */
    targetAudio?: string,
    /**
     * Use to get recommendations based on a user's playlist. User ID. By default, the current user ID.;
     */
    userId?: number,
    /**
     * Offset needed to return a specific subset of audio files.
     */
    offset?: number,
    /**
     * Number of audio files to return.
     */
    count?: number,
    /**
     * '1' — shuffle on
     */
    shuffle?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetPopularParams {
    /**
     * '1' — to return only foreign audio files; '0' — to return all audio files;
     */
    onlyEng?: boolean,
    /**
     * Genre ID. See the list of [vk.com/dev/audio_genres|audio genres].
     */
    genreId?: number,
    /**
     * Offset needed to return a specific subset of audio files.
     */
    offset?: number,
    /**
     * Number of audio files to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AudioGetCountParams {
    /**
     * ID of the user or community that owns the audio files. By default, current user ID.
     */
    ownerId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsCompleteParams {
    /**
     * Session obtained as GET parameter when session started.
     */
    vkSid: string,
    /**
     * Secret key from the lead testing interface.
     */
    secret: string,
    /**
     * Comment text.
     */
    comment?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsStartParams {
    /**
     * Lead ID.
     */
    leadId: number,
    /**
     * Secret key from the lead testing interface.
     */
    secret: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsGetStatsParams {
    /**
     * Lead ID.
     */
    leadId: number,
    /**
     * Secret key obtained from the lead testing interface.
     */
    secret?: string,
    /**
     * Day to start stats from (YYYY_MM_DD, e.g.2011-09-17).
     */
    dateStart?: string,
    /**
     * Day to finish stats (YYYY_MM_DD, e.g.2011-09-17).
     */
    dateEnd?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsGetUsersParams {
    /**
     * Offer ID.
     */
    offerId: number,
    /**
     * Secret key obtained in the lead testing interface.
     */
    secret: string,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Action type. Possible values:; *'0' — start;; *'1' — finish;; *'2' — blocking users;; *'3' — start in a test mode;; *'4' — finish in a test mode.;
     */
    status?: number,
    /**
     * Sort order. Possible values:; *'1' — chronological;; *'0' — reverse chronological.
     */
    reverse?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsCheckUserParams {
    /**
     * Lead ID.
     */
    leadId: number,
    /**
     * Value to be return in 'result' field when test mode is used.
     */
    testResult?: number,
    /**
     * User age.
     */
    age?: number,
    /**
     * User country code.
     */
    country?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface LeadsMetricHitParams {
    /**
     * Metric data obtained in the lead interface.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesGetParams {
    /**
     * Page owner ID.
     */
    ownerId?: number,
    /**
     * Wiki page ID.
     */
    pageId?: number,
    /**
     * '1' — to return information about a global wiki page
     */
    global?: boolean,
    /**
     * '1' — resulting wiki page is a preview for the attached link
     */
    sitePreview?: boolean,
    /**
     * Wiki page title.
     */
    title?: string,
    /**
     * undefined
     */
    needSource?: boolean,
    /**
     * '1' — to return the page as HTML;
     */
    needHtml?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesSaveParams {
    /**
     * Text of the wiki page in wiki-format.
     */
    text?: string,
    /**
     * Wiki page ID. The 'title' parameter can be passed instead of 'pid'.
     */
    pageId?: number,
    /**
     * ID of the community that owns the wiki page.
     */
    groupId?: number,
    /**
     *
     */
    userId?: number,
    /**
     * Wiki page title.
     */
    title?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesSaveAccessParams {
    /**
     * Wiki page ID.
     */
    pageId: number,
    /**
     * ID of the community that owns the wiki page.
     */
    groupId?: number,
    /**
     *
     */
    userId?: number,
    /**
     * Who can view the wiki page:; '1' — only community members; '2' — all users can view the page; '0' — only community managers
     */
    view?: number,
    /**
     * Who can edit the wiki page:; '1' — only community members; '2' — all users can edit the page; '0' — only community managers
     */
    edit?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesGetHistoryParams {
    /**
     * Wiki page ID.
     */
    pageId: number,
    /**
     * ID of the community that owns the wiki page.
     */
    groupId?: number,
    /**
     *
     */
    userId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesGetTitlesParams {
    /**
     * ID of the community that owns the wiki page.
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesGetVersionParams {
    /**
     *
     */
    versionId: number,
    /**
     * ID of the community that owns the wiki page.
     */
    groupId?: number,
    /**
     *
     */
    userId?: number,
    /**
     * '1' — to return the page as HTML
     */
    needHtml?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesParseWikiParams {
    /**
     * Text of the wiki page.
     */
    text: string,
    /**
     * ID of the group in the context of which this markup is interpreted.;
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PagesClearCacheParams {
    /**
     * Address of the page where you need to refesh the cached version
     */
    url: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsIsMemberParams {
    /**
     * ID or screen name of the community.
     */
    groupId: string,
    /**
     * User ID.
     */
    userId?: number,
    /**
     * User IDs.
     */
    userIds?: number[],
    /**
     * '1' — to return an extended response with additional fields.; By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetByIdParams {
    /**
     * IDs or screen names of communities.
     */
    groupIds?: string[],
    /**
     * ID or screen name of the community.
     */
    groupId?: string,
    /**
     * Group fields to return.;
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * '1' — to return complete information about a user's communities; '0' — to return a list of community IDs without any additional fields (default);
     */
    extended?: boolean,
    /**
     * Types of communities to return:; 'admin' — to return communities administered by the user ; 'editor' — to return communities where the user is an administrator or editor; 'moder' — to return communities where the user is an administrator, editor, or moderator; 'groups' — to return only groups; 'publics' — to return only public pages; 'events' — to return only events
     */
    filter?: string[],
    /**
     * Profile fields to return.;
     */
    fields?: string[],
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
    accessToken?: string
}

export interface GroupsGetMembersParams {
    /**
     * ID or screen name of the community.
     */
    groupId?: string,
    /**
     * Sort order. Available values: 'id_asc', 'id_desc', 'time_asc', 'time_desc'.; 'time_asc' and 'time_desc' are availavle only if the method is called by the group's 'moderator'.
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
     * List of additional fields to be returned. ; Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: string[],
    /**
     * *'friends' – only friends in this community will be returned;; *'unsure' – only those who pressed 'I may attend' will be returned (if it's an event).
     */
    filter?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsJoinParams {
    /**
     * ID or screen name of the community.
     */
    groupId?: number,
    /**
     * Optional parameter which is taken into account when 'gid' belongs to the event:; '1' — Perhaps I will attend; '0' — I will be there for sure (default); ;
     */
    notSure?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsLeaveParams {
    /**
     * ID or screen name of the community.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
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
    countryId?: number,
    /**
     * City ID. If this parameter is transmitted, country_id is ignored.
     */
    cityId?: number,
    /**
     * '1' — to return only upcoming events. Works with the 'type' = 'event' only.
     */
    future?: boolean,
    /**
     * '1' — to return communities with enabled market only.
     */
    market?: boolean,
    /**
     * Sort order. Possible values:; *'0' — default sorting (similar the full version of the site);; *'1' — by growth speed;; *'2'— by the "day attendance/members number" ratio;; *'3' — by the "Likes number/members number" ratio;; *'4' — by the "comments number/members number" ratio;; *'5' — by the "boards entries number/members number" ratio.; ;
     */
    sort?: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of communities to return.; "Note that you can not receive more than first thousand of results, regardless of 'count' and 'offset' values."
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetCatalogParams {
    /**
     * Category id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
     */
    categoryId?: number,
    /**
     * Subcategory id received from [vk.com/dev/groups.getCatalogInfo|groups.getCatalogInfo].
     */
    subcategoryId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetCatalogInfoParams {
    /**
     * 1 – to return communities count and three communities for preview.; By default: 0.
     */
    extended?: boolean,
    /**
     * 1 – to return subcategories info.; By default: 0.
     */
    subcategories?: boolean,
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface GroupsGetInvitedUsersParams {
    /**
     * Group ID to return invited users for.
     */
    groupId: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * List of additional fields to be returned. ; Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname. Possible values:; *'nom' — nominative (default);; *'gen' — genitive;; *'dat' — dative;; *'acc' — accusative; ; *'ins' — instrumental;; *'abl' — prepositional.
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsBanUserParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * Date (in Unix time) when the user will be removed from the blacklist.
     */
    endDate?: number,
    /**
     * Reason for ban:; '1' — spam; '2' — verbal abuse; '3' — strong language; '4' — irrelevant messages; '0' — other (default)
     */
    reason?: number,
    /**
     * Text of comment to ban.
     */
    comment?: string,
    /**
     * '1' — text of comment will be visible to the user;; '0' — text of comment will be invisible to the user. ; By default: '0'.
     */
    commentVisible?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsUnbanUserParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetBannedParams {
    /**
     * Community ID.
     */
    groupId: number,
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
    fields?: string[],
    /**
     * undefined
     */
    userId?: number,
    /**
     * access token
     */
    accessToken?: string
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
     * Community type. Possible values:; *'group' – group;; *'event' – event;; *'public' – public page
     */
    type?: string,
    /**
     * Category ID (for 'type' = 'public' only).
     */
    publicCategory?: number,
    /**
     * Public page subtype. Possible values:; *'1' – place or small business;; *'2' – company, organization or website;; *'3' – famous person or group of people;; *'4' – product or work of art.
     */
    subtype?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsEditParams {
    /**
     * Community ID.
     */
    groupId: number,
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
    screenName?: string,
    /**
     * Community type. Possible values:; *'0' – open;; *'1' – closed;; *'2' – private.
     */
    access?: number,
    /**
     * Website that will be displayed in the community information field.
     */
    website?: string,
    /**
     * Community subject. Possible values: ; *'1' – auto/moto;; *'2' – activity holidays;; *'3' – business;; *'4' – pets;; *'5' – health;; *'6' – dating and communication; ; *'7' – games;; *'8' – IT (computers and software);; *'9' – cinema;; *'10' – beauty and fashion;; *'11' – cooking;; *'12' – art and culture;; *'13' – literature;; *'14' – mobile services and internet;; *'15' – music;; *'16' – science and technology;; *'17' – real estate;; *'18' – news and media;; *'19' – security;; *'20' – education;; *'21' – home and renovations;; *'22' – politics;; *'23' – food;; *'24' – industry;; *'25' – travel;; *'26' – work;; *'27' – entertainment;; *'28' – religion;; *'29' – family;; *'30' – sports;; *'31' – insurance;; *'32' – television;; *'33' – goods and services;; *'34' – hobbies;; *'35' – finance;; *'36' – photo;; *'37' – esoterics;; *'38' – electronics and appliances;; *'39' – erotic;; *'40' – humor;; *'41' – society, humanities;; *'42' – design and graphics.
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
    eventStartDate?: number,
    /**
     * Event finish date in Unixtime format.
     */
    eventFinishDate?: number,
    /**
     * Organizer community ID (for events only).
     */
    eventGroupId?: number,
    /**
     * Public page category ID.
     */
    publicCategory?: number,
    /**
     * Public page subcategory ID.
     */
    publicSubcategory?: number,
    /**
     * Founding date of a company or organization owning the community in "dd.mm.YYYY" format.
     */
    publicDate?: string,
    /**
     * Wall settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (groups and events only);; *'3' – closed (groups and events only).;
     */
    wall?: number,
    /**
     * Board topics settings. Possbile values: ; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).;
     */
    topics?: number,
    /**
     * Photos settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).;
     */
    photos?: number,
    /**
     * Video settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).
     */
    video?: number,
    /**
     * Audio settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).
     */
    audio?: number,
    /**
     * Links settings (for public pages only). Possible values:; *'0' – disabled;; *'1' – enabled.;
     */
    links?: boolean,
    /**
     * Events settings (for public pages only). Possible values:; *'0' – disabled;; *'1' – enabled.;
     */
    events?: boolean,
    /**
     * Places settings (for public pages only). Possible values:; *'0' – disabled;; *'1' – enabled.;
     */
    places?: boolean,
    /**
     * Contacts settings (for public pages only). Possible values:; *'0' – disabled;; *'1' – enabled.;
     */
    contacts?: boolean,
    /**
     * Documents settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).
     */
    docs?: number,
    /**
     * Wiki pages settings. Possible values:; *'0' – disabled;; *'1' – open;; *'2' – limited (for groups and events only).
     */
    wiki?: number,
    /**
     * Community messages. Possible values:; *'0' — disabled;; *'1' — enabled.
     */
    messages?: boolean,
    /**
     * Community age limits. Possible values:; *'1' — no limits;; *'2' — 16+;; *'3' — 18+.
     */
    ageLimits?: number,
    /**
     * Market settings. Possible values:; *'0' – disabled;; *'1' – enabled.
     */
    market?: boolean,
    /**
     * market comments settings. Possible values:; *'0' – disabled;; *'1' – enabled.
     */
    marketComments?: boolean,
    /**
     * Market delivery countries.
     */
    marketCountry?: number[],
    /**
     * Market delivery cities (if only one country is specified).
     */
    marketCity?: number[],
    /**
     * Market currency settings. Possbile values: ; *'643' – Russian rubles;; *'980' – Ukrainian hryvnia;; *'398' – Kazakh tenge;; *'978' – Euro;; *'840' – US dollars
     */
    marketCurrency?: number,
    /**
     * Seller contact for market.; Set '0' for community messages.
     */
    marketContact?: number,
    /**
     * ID of a wiki page with market description.
     */
    marketWiki?: number,
    /**
     * Obscene expressions filter in comments. Possible values: ; *'0' – disabled;; *'1' – enabled.
     */
    obsceneFilter?: boolean,
    /**
     * Stopwords filter in comments. Possible values: ; *'0' – disabled;; *'1' – enabled.
     */
    obsceneStopwords?: boolean,
    /**
     * Keywords for stopwords filter.
     */
    obsceneWords?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsEditPlaceParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Place title.
     */
    title?: string,
    /**
     * Place address.
     */
    address?: string,
    /**
     * Country ID.
     */
    countryId?: number,
    /**
     * City ID.
     */
    cityId?: number,
    /**
     * Geographical latitude.
     */
    latitude?: number,
    /**
     * Geographical longitude.
     */
    longitude?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetSettingsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetRequestsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * Profile fields to return.;
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsEditManagerParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * Manager role. Possible values:; *'moderator';; *'editor';; *'administrator'.
     */
    role?: string,
    /**
     * '1' — to show the manager in Contacts block of the community.
     */
    isContact?: boolean,
    /**
     * Position to show in Contacts block.
     */
    contactPosition?: string,
    /**
     * Contact phone.
     */
    contactPhone?: string,
    /**
     * Contact e-mail.
     */
    contactEmail?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsInviteParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsAddLinkParams {
    /**
     * Community ID.
     */
    groupId: number,
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
    accessToken?: string
}

export interface GroupsDeleteLinkParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Link ID.
     */
    linkId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsEditLinkParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Link ID.
     */
    linkId: number,
    /**
     * New description text for the link.
     */
    text?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsReorderLinkParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Link ID.
     */
    linkId: number,
    /**
     * ID of the link after which to place the link with 'link_id'.
     */
    after?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsRemoveUserParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsApproveRequestParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetCallbackConfirmationCodeParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetCallbackServerSettingsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsGetCallbackSettingsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsSetCallbackServerParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Server URL.
     */
    serverUrl?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsSetCallbackServerSettingsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * Callback API secret key.
     */
    secretKey?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface GroupsSetCallbackSettingsParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * New messages notifications ('0' — disabled, '1' — enabled).
     */
    messageNew?: boolean,
    /**
     * Allowed messages notifications ('0' — disabled, '1' — enabled).
     */
    messageAllow?: boolean,
    /**
     * Denied messages notifications ('0' — disabled, '1' — enabled).
     */
    messageDeny?: boolean,
    /**
     * New photos notifications ('0' — disabled, '1' — enabled).
     */
    photoNew?: boolean,
    /**
     * New audios notifications ('0' — disabled, '1' — enabled).
     */
    audioNew?: boolean,
    /**
     * New videos notifications ('0' — disabled, '1' — enabled).
     */
    videoNew?: boolean,
    /**
     * New wall replies notifications ('0' — disabled, '1' — enabled).
     */
    wallReplyNew?: boolean,
    /**
     * Wall replies edited notifications ('0' — disabled, '1' — enabled).
     */
    wallReplyEdit?: boolean,
    /**
     * New wall posts notifications ('0' — disabled, '1' — enabled).
     */
    wallPostNew?: boolean,
    /**
     * New board posts notifications ('0' — disabled, '1' — enabled).
     */
    boardPostNew?: boolean,
    /**
     * Board posts edited notifications ('0' — disabled, '1' — enabled).
     */
    boardPostEdit?: boolean,
    /**
     * Board posts restored notifications ('0' — disabled, '1' — enabled).
     */
    boardPostRestore?: boolean,
    /**
     * Board posts deleted notifications ('0' — disabled, '1' — enabled).
     */
    boardPostDelete?: boolean,
    /**
     * New comment to photo notifications ('0' — disabled, '1' — enabled).
     */
    photoCommentNew?: boolean,
    /**
     * New comment to video notifications ('0' — disabled, '1' — enabled).
     */
    videoCommentNew?: boolean,
    /**
     * New comment to market item notifications ('0' — disabled, '1' — enabled).
     */
    marketCommentNew?: boolean,
    /**
     * Joined community notifications ('0' — disabled, '1' — enabled).
     */
    groupJoin?: boolean,
    /**
     * Left community notifications ('0' — disabled, '1' — enabled).
     */
    groupLeave?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardGetTopicsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * IDs of topics to be returned (100 maximum). By default, all topics are returned.; If this parameter is set, the 'order', 'offset', and 'count' parameters are ignored.
     */
    topicIds?: number[],
    /**
     * Sort order:; '1' — by date updated in reverse chronological order.; '2' — by date created in reverse chronological order.; '-1' — by date updated in chronological order.; '-2' — by date created in chronological order.; ; If no sort order is specified, topics are returned in the order specified by the group administrator. Pinned topics are returned first, regardless of the sorting.
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
     * '1' — to return information about users who created topics or who posted there last; '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * '1' — to return the first comment in each topic;; '2' — to return the last comment in each topic;; '0' — to return no comments.; ; By default: '0'.
     */
    preview?: number,
    /**
     * Number of characters after which to truncate the previewed comment. To preview the full comment, specify '0'.
     */
    previewLength?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardGetCommentsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * '1' — to return the 'likes' field; '0' — not to return the 'likes' field (default)
     */
    needLikes?: boolean,
    /**
     * undefined
     */
    startCommentId?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * '1' — to return information about users who posted comments; '0' — to return no additional fields (default)
     */
    extended?: boolean,
    /**
     * Sort order:; 'asc' — by creation date in chronological order; 'desc' — by creation date in reverse chronological order;
     */
    sort?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardAddTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic title.
     */
    title: string,
    /**
     * Text of the topic.
     */
    text?: string,
    /**
     * For a community:; '1' — to post the topic as by the community; '0' — to post the topic as by the user (default)
     */
    fromGroup?: boolean,
    /**
     * List of media objects attached to the topic, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media object:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media owner. ; '<media_id>' — Media ID.; ; Example:; "photo100172_166443618,photo66748_265827614"; ; "NOTE: If you try to attach more than one reference, an error will be thrown.";
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardCreateCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * ID of the topic to be commented on.
     */
    topicId: number,
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string,
    /**
     * (Required if 'text' is not set.) List of media objects attached to the comment, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media object:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media owner. ; '<media_id>' — Media ID.
     */
    attachments?: string[],
    /**
     * '1' — to post the comment as by the community; '0' — to post the comment as by the user (default)
     */
    fromGroup?: boolean,
    /**
     * Sticker ID.
     */
    stickerId?: number,
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardDeleteTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardEditTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * New title of the topic.
     */
    title: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardEditCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * ID of the comment on the topic.
     */
    commentId: number,
    /**
     * (Required if 'attachments' is not set). New comment text.
     */
    message?: string,
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media object:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media owner. ; '<media_id>' — Media ID.; ; Example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardRestoreCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardDeleteCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardOpenTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardCloseTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardFixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface BoardUnfixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    groupId: number,
    /**
     * Topic ID.
     */
    topicId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetParams {
    /**
     * ID of the user or community that owns the video(s).
     */
    ownerId?: number,
    /**
     * Video IDs, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; Use a negative value to designate a community ID.; ; Example:; "-4363_136089719,13245770_137352259"
     */
    videos?: string[],
    /**
     * ID of the album containing the video(s).
     */
    albumId?: number,
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
    accessToken?: string
}

export interface VideoEditParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * New video title.
     */
    name?: string,
    /**
     * New video description.
     */
    desc?: string,
    /**
     * Privacy settings in a [vk.com/dev/privacy_setting|special format].; Privacy setting is available for videos uploaded to own profile by user.
     */
    privacyView?: string[],
    /**
     * Privacy settings for comments in a [vk.com/dev/privacy_setting|special format].
     */
    privacyComment?: string[],
    /**
     * Disable comments for the group video.
     */
    noComments?: boolean,
    /**
     * '1' — to repeat the playback of the video; '0' — to play the video once;
     */
    repeat?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoAddParams {
    /**
     * identifier of a user or community to add a video to.; Use a negative value to designate a community ID.
     */
    targetId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * ID of the user or community that owns the video.; Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * access token
     */
    accessToken?: string
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
     * '1' — to designate the video as private (send it via a private message); the video will not appear on the user's video list and will not be available by ID for other users; '0' — not to designate the video as private
     */
    isPrivate?: boolean,
    /**
     * '1' — to post the saved video on a user's wall; '0' — not to post the saved video on a user's wall
     */
    wallpost?: boolean,
    /**
     * URL for embedding the video from an external website.
     */
    link?: string,
    /**
     * ID of the community in which the video will be saved. By default, the current user's page.
     */
    groupId?: number,
    /**
     * ID of the album to which the saved video will be added.
     */
    albumId?: number,
    /**
     * undefined
     */
    privacyView?: string[],
    /**
     * undefined
     */
    privacyComment?: string[],
    /**
     * undefined
     */
    noComments?: boolean,
    /**
     * '1' — to repeat the playback of the video; '0' — to play the video once;
     */
    repeat?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoDeleteParams {
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * undefined
     */
    targetId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoRestoreParams {
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoSearchParams {
    /**
     * Search query string (e.g., 'The Beatles').
     */
    q: string,
    /**
     * Sort order:; '1' — by duration; '2' — by relevance; '0' — by date added
     */
    sort?: number,
    /**
     * If not null, only searches for high-definition videos.
     */
    hd?: number,
    /**
     * '1' — to disable the Safe Search filter; '0' — to enable the Safe Search filter
     */
    adult?: boolean,
    /**
     * Filters to apply:; 'youtube' — return YouTube videos only; 'vimeo' — return Vimeo videos only; 'short' — return short videos only; 'long' — return long videos only
     */
    filters?: string[],
    /**
     *
     */
    searchOwn?: boolean,
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
     *
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetUserVideosParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number,
    /**
     * Number of videos to return.
     */
    count?: number,
    /**
     *
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetAlbumsParams {
    /**
     * ID of the user or community that owns the video album(s).
     */
    ownerId?: number,
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
     * access token
     */
    accessToken?: string
}

export interface VideoGetAlbumByIdParams {
    /**
     * identifier of a user or community to add a video to. ; Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoAddAlbumParams {
    /**
     * Community ID (if the album will be created in a community).
     */
    groupId?: number,
    /**
     * Album title.
     */
    title?: string,
    /**
     * new access permissions for the album.; Possible values: ; *'0' – all users;; *'1' – friends only;; *'2' – friends and friends of friends;; *'3' – "only me".
     */
    privacy?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoEditAlbumParams {
    /**
     * Community ID (if the album edited is owned by a community).
     */
    groupId?: number,
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * New album title.
     */
    title: string,
    /**
     * new access permissions for the album.; Possible values: ; *'0' – all users;; *'1' – friends only;; *'2' – friends and friends of friends;; *'3' – "only me".
     */
    privacy?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoDeleteAlbumParams {
    /**
     * Community ID (if the album is owned by a community).
     */
    groupId?: number,
    /**
     * Album ID.
     */
    albumId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoReorderAlbumsParams {
    /**
     * ID of the user or community that owns the albums..
     */
    ownerId?: number,
    /**
     * Album ID.
     */
    albumId: number,
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
    accessToken?: string
}

export interface VideoReorderVideosParams {
    /**
     * ID of the user or community that owns the album with videos.
     */
    targetId?: number,
    /**
     * ID of the video album.
     */
    albumId?: number,
    /**
     * ID of the user or community that owns the video.
     */
    ownerId: number,
    /**
     * ID of the video.
     */
    videoId: number,
    /**
     * ID of the user or community that owns the video before which the video in question shall be placed.
     */
    beforeOwnerId?: number,
    /**
     * ID of the video before which the video in question shall be placed.
     */
    beforeVideoId?: number,
    /**
     * ID of the user or community that owns the video after which the photo in question shall be placed.
     */
    afterOwnerId?: number,
    /**
     * ID of the video after which the photo in question shall be placed.
     */
    afterVideoId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoAddToAlbumParams {
    /**
     * undefined
     */
    targetId?: number,
    /**
     * undefined
     */
    albumId?: number,
    /**
     * undefined
     */
    albumIds?: number[],
    /**
     * undefined
     */
    ownerId: number,
    /**
     * undefined
     */
    videoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoRemoveFromAlbumParams {
    /**
     * undefined
     */
    targetId?: number,
    /**
     * undefined
     */
    albumId?: number,
    /**
     * undefined
     */
    albumIds?: number[],
    /**
     * undefined
     */
    ownerId: number,
    /**
     * undefined
     */
    videoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetAlbumsByVideoParams {
    /**
     * undefined
     */
    targetId?: number,
    /**
     * undefined
     */
    ownerId: number,
    /**
     * undefined
     */
    videoId: number,
    /**
     *
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetCommentsParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * '1' — to return an additional 'likes' field
     */
    needLikes?: boolean,
    /**
     * undefined
     */
    startCommentId?: number,
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * Sort order:; 'asc' — oldest comment first; 'desc' — newest comment first
     */
    sort?: string,
    /**
     * undefined
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoCreateCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media attachment owner.; '<media_id>' — Media attachment ID. ; ; Example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * '1' — to post the comment from a community name (only if 'owner_id'<0)
     */
    fromGroup?: boolean,
    /**
     *
     */
    replyToComment?: number,
    /**
     * undefined
     */
    stickerId?: number,
    /**
     * undefined
     */
    guid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoDeleteCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * ID of the comment to be deleted.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoRestoreCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * ID of the deleted comment.
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoEditCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * List of objects attached to the comment, in the following format:; "<owner_id>_<media_id>,<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; '<owner_id>' — ID of the media attachment owner.; '<media_id>' — Media attachment ID. ; ; Example:; "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetTagsParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoPutTagParams {
    /**
     * ID of the user to be tagged.
     */
    userId: number,
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * Tag text.
     */
    taggedName?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoRemoveTagParams {
    /**
     * Tag ID.
     */
    tagId: number,
    /**
     * ID of the user or community that owns the video.
     */
    ownerId?: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetNewTagsParams {
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number,
    /**
     * Number of videos to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoReportParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId: number,
    /**
     * Video ID.
     */
    videoId: number,
    /**
     * Reason for the complaint:; '0' – spam; '1' – child pornography; '2' – extremism; '3' – violence; '4' – drug propaganda; '5' – adult material; '6' – insult; abuse
     */
    reason?: number,
    /**
     * Comment describing the complaint.
     */
    comment?: string,
    /**
     * (If the video was found in search results.) Search query string.
     */
    searchQuery?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoReportCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    ownerId: number,
    /**
     * ID of the comment being reported.
     */
    commentId: number,
    /**
     * Reason for the complaint: ; 0 – spam ; 1 – child pornography ; 2 – extremism ; 3 – violence ; 4 – drug propaganda ; 5 – adult material ; 6 – insult; abuse
     */
    reason?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetCatalogParams {
    /**
     * number of catalog blocks to return.
     */
    count?: number,
    /**
     * number of videos in each block.
     */
    itemsCount?: number,
    /**
     * parameter for requesting the next results page. Value for transmitting here is returned in the 'next' field in a reply.
     */
    from?: string,
    /**
     * list of requested catalog sections
     */
    filters?: string[],
    /**
     * 1 – return additional infor about users and communities in profiles and groups fields.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoGetCatalogSectionParams {
    /**
     * 'id' value returned with a block by the '' method.
     */
    sectionId: string,
    /**
     * 'next' value returned with a block by the '' method.
     */
    from: string,
    /**
     * number of blocks to return.
     */
    count?: number,
    /**
     * 1 – return additional infor about users and communities in profiles and groups fields.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface VideoHideCatalogSectionParams {
    /**
     * 'id' value returned with a block to hide by the '' method.
     */
    sectionId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesGetParams {
    /**
     * Note IDs.
     */
    noteIds?: number[],
    /**
     * Note owner ID.
     */
    userId?: number,
    /**
     * Number of notes to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesGetByIdParams {
    /**
     * Note ID.
     */
    noteId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
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
    privacyView?: string[],
    /**
     * undefined
     */
    privacyComment?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesEditParams {
    /**
     * Note ID.
     */
    noteId: number,
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
    privacyView?: string[],
    /**
     * undefined
     */
    privacyComment?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesDeleteParams {
    /**
     * Note ID.
     */
    noteId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesGetCommentsParams {
    /**
     * Note ID.
     */
    noteId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * Number of comments to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesCreateCommentParams {
    /**
     * Note ID.
     */
    noteId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * ID of the user to whom the reply is addressed (if the comment is a reply to another comment).;
     */
    replyTo?: number,
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
    accessToken?: string
}

export interface NotesEditCommentParams {
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * New comment text.
     */
    message?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesDeleteCommentParams {
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotesRestoreCommentParams {
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * Note owner ID.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesAddParams {
    /**
     * ID of the location's type (e.g., '1' — Home, '2' — Work). To get location type IDs, use the [vk.com/dev/places.getTypes|places.getTypes] method.
     */
    type?: number,
    /**
     * Title of the location.
     */
    title: string,
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    latitude: number,
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    longitude: number,
    /**
     * ID of the location's country. To get country IDs, use the [vk.com/dev/database.getCountries|database.getCountries] method.
     */
    country?: number,
    /**
     * ID of the location's city. To get city IDs, use the [vk.com/dev/database.getCities|database.getCities] method.
     */
    city?: number,
    /**
     * Street address of the location (e.g., '125 Elm Street').
     */
    address?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesGetByIdParams {
    /**
     * Location IDs.
     */
    places: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesSearchParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * City ID.
     */
    city?: number,
    /**
     * Geographical latitude of the initial search point, in degrees (from '-90' to '90').
     */
    latitude: number,
    /**
     * Geographical longitude of the initial search point, in degrees (from '-180' to '180').
     */
    longitude: number,
    /**
     * Radius of the search zone:; '1' — 100 m. (default); '2' — 800 m.; '3' — 6 km.; '4' — 50 km.
     */
    radius?: number,
    /**
     * Offset needed to return a specific subset of locations.
     */
    offset?: number,
    /**
     * Number of locations to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesCheckinParams {
    /**
     * Location ID.
     */
    placeId?: number,
    /**
     * Text of the comment on the check-in (255 characters maximum; line breaks not supported).
     */
    text?: string,
    /**
     * Geographical latitude of the check-in, in degrees (from '-90' to '90').
     */
    latitude?: number,
    /**
     * Geographical longitude of the check-in, in degrees (from '-180' to '180').
     */
    longitude?: number,
    /**
     * '1' — Check-in will be available only for friends.; '0' — Check-in will be available for all users (default).
     */
    friendsOnly?: boolean,
    /**
     * List of services or websites (e.g., 'twitter', 'facebook') to which the check-in will be exported, if the user has set up the respective option.
     */
    services?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesGetCheckinsParams {
    /**
     * Geographical latitude of the initial search point, in degrees (from '-90' to '90').
     */
    latitude?: number,
    /**
     * Geographical longitude of the initial search point, in degrees (from '-180' to '180').
     */
    longitude?: number,
    /**
     * Location ID of check-ins to return. (Ignored if 'latitude' and 'longitude' are specified.)
     */
    place?: number,
    /**
     * undefined
     */
    userId?: number,
    /**
     * Offset needed to return a specific subset of check-ins. (Ignored if 'timestamp' is not null.)
     */
    offset?: number,
    /**
     * Number of check-ins to return. (Ignored if 'timestamp' is not null.)
     */
    count?: number,
    /**
     * Specifies that only those check-ins created after the specified timestamp will be returned.
     */
    timestamp?: number,
    /**
     * '1' — to return only check-ins with set geographical coordinates. (Ignored if 'latitude' and 'longitude' are not set.)
     */
    friendsOnly?: boolean,
    /**
     * '1' — to return location information with the check-ins. (Ignored if 'place' is not set.);
     */
    needPlaces?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PlacesGetTypesParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountGetCountersParams {
    /**
     * Counters to be returned.
     */
    filter?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSetNameInMenuParams {
    /**
     * User ID.
     */
    userId: number,
    /**
     * Application screen name.
     */
    name?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSetOnlineParams {
    /**
     * '1' if videocalls are available for current device.
     */
    voip?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSetOfflineParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountLookupContactsParams {
    /**
     * List of contacts separated with commas
     */
    contacts?: string[],
    /**
     * String identifier of a service which contacts are used for searching. Possible values: ; * email; * phone; * twitter; * facebook; * odnoklassniki; * instagram; * google
     */
    service: string,
    /**
     * Contact of a current user on a specified service
     */
    mycontact?: string,
    /**
     * '1' – also return contacts found using this service before, '0' – return only contacts found using 'contacts' field.
     */
    returnAll?: boolean,
    /**
     * Profile fields to return. Possible values: 'nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities'.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountRegisterDeviceParams {
    /**
     * Device token used to send notifications. (for mpns, the token shall be URL for sending of notifications)
     */
    token: string,
    /**
     * String name of device model.
     */
    deviceModel?: string,
    /**
     * Device year.
     */
    deviceYear?: number,
    /**
     * Unique device ID.
     */
    deviceId: string,
    /**
     * String version of device operating system.
     */
    systemVersion?: string,
    /**
     * Push settings in a [vk.com/dev/push_settings|special format].
     */
    settings?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountUnregisterDeviceParams {
    /**
     * Unique device ID.
     */
    deviceId?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSetSilenceModeParams {
    /**
     * Unique device ID.
     */
    deviceId?: string,
    /**
     * Time in seconds for what notifications should be disabled. '-1' to disable forever.
     */
    time?: number,
    /**
     * Destination ID.; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'Chat ID', e.g. '2000000001'.; ; For community:; '- Community ID', e.g. '-12345'.; "
     */
    peerId?: number,
    /**
     * '1' — to enable sound in this dialog, '0' — to disable sound. Only if 'peer_id' contains user or community ID.
     */
    sound?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountGetPushSettingsParams {
    /**
     * Unique device ID.
     */
    deviceId?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSetPushSettingsParams {
    /**
     * Unique device ID.
     */
    deviceId: string,
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
    accessToken?: string
}

export interface AccountGetAppPermissionsParams {
    /**
     * User ID whose settings information shall be got. By default: current user.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountGetActiveOffersParams {
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountBanUserParams {
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountUnbanUserParams {
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface AccountGetInfoParams {
    /**
     * Fields to return. Possible values:; *'country' — user country;; *'https_required' — is "HTTPS only" option enabled;; *'own_posts_default' — is "Show my posts only" option is enabled;; *'no_wall_replies' — are wall replies disabled or not;; *'intro' — is intro passed by user or not;; *'lang' — user language.; ; By default: all.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface AccountChangePasswordParams {
    /**
     * Session id received after the [vk.com/dev/auth.restore|auth.restore] method is executed.; (If the password is changed right after the access was restored)
     */
    restoreSid?: string,
    /**
     * Hash received after a successful OAuth authorization with a code got by SMS.; (If the password is changed right after the access was restored)
     */
    changePasswordHash?: string,
    /**
     * Current user password.
     */
    oldPassword?: string,
    /**
     * New password that will be set as a current
     */
    newPassword: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountGetProfileInfoParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AccountSaveProfileInfoParams {
    /**
     * User first name.
     */
    firstName?: string,
    /**
     * User last name.
     */
    lastName?: string,
    /**
     * User maiden name (female only)
     */
    maidenName?: string,
    /**
     * User screen name.
     */
    screenName?: string,
    /**
     * ID of the name change request to be canceled. If this parameter is sent, all the others are ignored.
     */
    cancelRequestId?: number,
    /**
     * User sex. Possible values: ; * '1' – female;; * '2' – male.
     */
    sex?: number,
    /**
     * User relationship status. Possible values: ; * '1' – single;; * '2' – in a relationship;; * '3' – engaged;; * '4' – married;; * '5' – it's complicated;; * '6' – actively searching;; * '7' – in love;; * '0' – not specified.
     */
    relation?: number,
    /**
     * ID of the relationship partner.
     */
    relationPartnerId?: number,
    /**
     * User birth date, format: DD.MM.YYYY.
     */
    bdate?: string,
    /**
     * Birth date visibility. Returned values: ; * '1' – show birth date;; * '2' – show only month and day;; * '0' – hide birth date.
     */
    bdateVisibility?: number,
    /**
     * User home town.
     */
    homeTown?: string,
    /**
     * User country.
     */
    countryId?: number,
    /**
     * User city.
     */
    cityId?: number,
    /**
     * Status text.
     */
    status?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetParams {
    /**
     * '1' — to return outgoing messages; '0' — to return incoming messages (default)
     */
    out?: boolean,
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number,
    /**
     * Number of messages to return.
     */
    count?: number,
    /**
     * Maximum time since a message was sent, in seconds. To return messages without a time limitation, set as '0'.
     */
    timeOffset?: number,
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'.; "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    previewLength?: number,
    /**
     * ID of the message received before the message that will be returned last (provided that no more than 'count' messages were received before it; otherwise 'offset' parameter shall be used).
     */
    lastMessageId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetDialogsParams {
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number,
    /**
     * Number of messages to return.
     */
    count?: number,
    /**
     * ID of the message from what to return dialogs.
     */
    startMessageId?: number,
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'.; "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    previewLength?: number,
    /**
     * '1' — return unread messages only.
     */
    unread?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetByIdParams {
    /**
     * Message IDs.
     */
    messageIds: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesSearchParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Destination ID.; ; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'chat_id', e.g. '2000000001'.; ; For community:; '- community ID', e.g. '-12345'.; "
     */
    peerId?: number,
    /**
     * Date to search message before in Unixtime.
     */
    date?: number,
    /**
     * Number of messages to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
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
    userId?: string,
    /**
     * undefined
     */
    peerId?: number,
    /**
     * Starting message ID from which to return history.
     */
    startMessageId?: number,
    /**
     * Sort order:; '1' — return messages in chronological order.; '0' — return messages in reverse chronological order.
     */
    rev?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetHistoryAttachmentsParams {
    /**
     * Peer ID.; ; "; For group chat:; '2000000000 + chat ID' ; ; For community:; '-community ID'"
     */
    peerId: number,
    /**
     * Type of media files to return:; *'photo';; *'video';; *'audio';; *'doc';; *'link'.;;*'market'.;;*'wall'.;;*'share'
     */
    mediaType?: string,
    /**
     * Message ID to start return results from.
     */
    startFrom?: string,
    /**
     * Number of objects to return.
     */
    count?: number,
    /**
     * '1' — to return photo sizes in a
     */
    photoSizes?: boolean,
    /**
     * Additional profile [vk.com/dev/fields|fields] to return.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesSendParams {
    /**
     * User ID (by default — current user).
     */
    userId?: number,
    /**
     * Unique identifier to avoid resending the message.
     */
    randomId?: number,
    /**
     * Destination ID.; ; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'chat_id', e.g. '2000000001'.; ; For community:; '- community ID', e.g. '-12345'.; "
     */
    peerId?: number,
    /**
     * User's short address (for example, 'illarionov').
     */
    domain?: string,
    /**
     * ID of conversation the message will relate to.
     */
    chatId?: number,
    /**
     * IDs of message recipients (if new conversation shall be started).
     */
    userIds?: number[],
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
     * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format:; "<owner_id>_<media_id>"; '' — Type of media attachment:; 'photo' — photo; 'video' — video; 'audio' — audio; 'doc' — document; 'wall' — wall post; '<owner_id>' — ID of the media attachment owner.; '<media_id>' — media attachment ID.; ; Example:; "photo100172_166443618"
     */
    attachment?: string,
    /**
     * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's.; ; Example:; "123,431,544"
     */
    forwardMessages?: string,
    /**
     * Sticker id.
     */
    stickerId?: number,
    /**
     * '1' if the message is a notification (for community messages).
     */
    notification?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesDeleteParams {
    /**
     * Message IDs.
     */
    messageIds?: number[],
    /**
     * '1' — to mark message as spam.
     */
    spam?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesDeleteDialogParams {
    /**
     * User ID. To clear a chat history use 'chat_id'
     */
    userId?: string,
    /**
     * Destination ID.; ; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'chat_id', e.g. '2000000001'.; ; For community:; '- community ID', e.g. '-12345'.; "
     */
    peerId?: number,
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number,
    /**
     * Number of messages to delete.; "NOTE: If the number of messages exceeds the maximum, the method shall be called several times."
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesRestoreParams {
    /**
     * ID of a previously-deleted message to restore.
     */
    messageId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesMarkAsReadParams {
    /**
     * IDs of messages to mark as read.
     */
    messageIds?: number[],
    /**
     * Destination ID.; ; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'chat_id', e.g. '2000000001'.; ; For community:; '- community ID', e.g. '-12345'.; "
     */
    peerId?: string,
    /**
     * Message ID to start from.
     */
    startMessageId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesMarkAsImportantParams {
    /**
     * IDs of messages to mark as important.
     */
    messageIds?: number[],
    /**
     * '1' — to add a star (mark as important); '0' — to remove the star
     */
    important?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetLongPollServerParams {
    /**
     * '1' — to use SSL.
     */
    useSsl?: boolean,
    /**
     * '1' — to return the 'pts' field, needed for the [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    needPts?: boolean,
    /**
     * access token
     */
    accessToken?: string
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
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'.; "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    previewLength?: number,
    /**
     * '1' — to return history with online users only.
     */
    onlines?: boolean,
    /**
     * Additional profile [vk.com/dev/fields|fields] to return.
     */
    fields?: string[],
    /**
     * Maximum number of events to return.
     */
    eventsLimit?: number,
    /**
     * Maximum number of messages to return.
     */
    msgsLimit?: number,
    /**
     * Maximum ID of the message among existing ones in the local copy. Both messages received with API methods (for example, , ), and data received from a Long Poll server (events with code 4) are taken into account.
     */
    maxMsgId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetChatParams {
    /**
     * Chat ID.
     */
    chatId?: number,
    /**
     * Chat IDs.
     */
    chatIds?: number[],
    /**
     * Profile fields to return.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesCreateChatParams {
    /**
     * IDs of the users to be added to the chat.
     */
    userIds: number[],
    /**
     * Chat title.
     */
    title?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesEditChatParams {
    /**
     * Chat ID.
     */
    chatId: number,
    /**
     * New title of the chat.
     */
    title: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetChatUsersParams {
    /**
     * Chat ID.
     */
    chatId?: number,
    /**
     * Chat IDs.
     */
    chatIds?: number[],
    /**
     * Profile fields to return.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive; 'dat' — dative; 'acc' — accusative; 'ins' — instrumental; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesSetActivityParams {
    /**
     * User ID.
     */
    userId?: string,
    /**
     * 'typing' — user has started to type.
     */
    type?: string,
    /**
     * Destination ID.; ; "For user:; 'User ID', e.g. '12345'.; ; For chat:; '2000000000' + 'chat_id', e.g. '2000000001'.; ; For community:; '- community ID', e.g. '-12345'.; "
     */
    peerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesSearchDialogsParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Maximum number of results.
     */
    limit?: number,
    /**
     * Profile fields to return.;
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesAddChatUserParams {
    /**
     * Chat ID.
     */
    chatId: number,
    /**
     * ID of the user to be added to the chat.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesRemoveChatUserParams {
    /**
     * Chat ID.
     */
    chatId: number,
    /**
     * ID of the user to be removed from the chat.
     */
    userId: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesGetLastActivityParams {
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesSetChatPhotoParams {
    /**
     * Upload URL from the 'response' field returned by the [vk.com/dev/photos.getChatUploadServer|photos.getChatUploadServer] method upon successfully uploading an image.
     */
    file: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesDeleteChatPhotoParams {
    /**
     * Chat ID.
     */
    chatId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesDenyMessagesFromGroupParams {
    /**
     * Group ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesAllowMessagesFromGroupParams {
    /**
     * Group ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MessagesIsMessagesFromGroupAllowedParams {
    /**
     * Group ID.
     */
    groupId: number,
    /**
     * User ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedGetParams {
    /**
     * Filters to apply:; 'post' — new wall posts; 'photo' — new photos; 'photo_tag' — new photo tags; 'wall_photo' — new wall photos; 'friend' — new friends; 'note' — new notes
     */
    filters?: string[],
    /**
     * '1' — to return news items from banned sources
     */
    returnBanned?: boolean,
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    endTime?: number,
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    maxPhotos?: number,
    /**
     * Sources to obtain news from, separated by commas.; ; User IDs can be specified in formats '' or 'u' ; where '' is the user's friend ID.; ; Community IDs can be specified in formats '-' or 'g' ; where '' is the community ID.; ; If the parameter is not set, all of the user's friends and communities are returned, except for banned sources, which can be obtained with the [vk.com/dev/newsfeed.getBanned|newsfeed.getBanned] method.;
     */
    sourceIds?: string,
    /**
     * identifier required to get the next page of results. ; Value for this parameter is returned in 'next_from' field in a reply.
     */
    startFrom?: string,
    /**
     * Number of news items to return (default 50; maximum 100). For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedGetRecommendedParams {
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    endTime?: number,
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    maxPhotos?: number,
    /**
     * 'new_from' value obtained in previous call.
     */
    startFrom?: string,
    /**
     * Number of news items to return.
     */
    count?: number,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedGetCommentsParams {
    /**
     * Number of comments to return. For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number,
    /**
     * Filters to apply:; 'post' — new comments on wall posts; 'photo' — new comments on photos; 'video' — new comments on videos; 'topic' — new comments on discussions; 'note' — new comments on notes;
     */
    filters?: string[],
    /**
     * Object ID, comments on repost of which shall be returned, e.g. 'wall1_45486'. (If the parameter is set, the 'filters' parameter is optional.);
     */
    reposts?: string,
    /**
     * Earliest timestamp (in Unix time) of a comment to return. By default, 24 hours ago.
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a comment to return. By default, the current time.
     */
    endTime?: number,
    /**
     * Identificator needed to return the next page with results. Value for this parameter returns in 'next_from' field.
     */
    startFrom?: string,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedGetMentionsParams {
    /**
     * Owner ID.
     */
    ownerId?: number,
    /**
     * Earliest timestamp (in Unix time) of a post to return. By default, 24 hours ago.;
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a post to return. By default, the current time.;
     */
    endTime?: number,
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
    accessToken?: string
}

export interface NewsfeedGetBannedParams {
    /**
     * '1' — return extra information about users and communities
     */
    extended?: boolean,
    /**
     * Profile fields to return.; ;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedAddBanParams {
    /**
     * undefined
     */
    userIds?: number[],
    /**
     * undefined
     */
    groupIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedDeleteBanParams {
    /**
     * undefined
     */
    userIds?: number[],
    /**
     * undefined
     */
    groupIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedIgnoreItemParams {
    /**
     * Item type. Possible values:; *'wall' – post on the wall;; *'tag' – tag on a photo;; *'profilephoto' – profile photo;; *'video' – video;; *'audio' – audio.
     */
    type: string,
    /**
     * Item owner's identifier (user or community); "Note that community id must be negative. ; 'owner_id=1' – user ; 'owner_id=-1' – community "
     */
    ownerId: number,
    /**
     * Item identifier
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedUnignoreItemParams {
    /**
     * Item type. Possible values:; *'wall' – post on the wall;; *'tag' – tag on a photo;; *'profilephoto' – profile photo;; *'video' – video;; *'audio' – audio.
     */
    type: string,
    /**
     * Item owner's identifier (user or community); "Note that community id must be negative. ; 'owner_id=1' – user ; 'owner_id=-1' – community "
     */
    ownerId: number,
    /**
     * Item identifier
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
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
     * Geographical latitude point (in degrees, -90 to 90) within which to search.;
     */
    latitude?: number,
    /**
     * Geographical longitude point (in degrees, -180 to 180) within which to search.;
     */
    longitude?: number,
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    endTime?: number,
    /**
     * undefined
     */
    startFrom?: string,
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedGetListsParams {
    /**
     * numeric list identifiers.
     */
    listIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedSaveListParams {
    /**
     * numeric list identifier (if not sent, will be set automatically).
     */
    listId?: number,
    /**
     * list name.
     */
    title: string,
    /**
     * users and communities identifiers to be added to the list. Community identifiers must be negative numbers.
     */
    sourceIds?: number[],
    /**
     * reposts display on and off ('1' is for off).
     */
    noReposts?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedDeleteListParams {
    /**
     * undefined
     */
    listId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NewsfeedUnsubscribeParams {
    /**
     * Type of object from which to unsubscribe:; 'note' — note; 'photo' — photo; 'post' — post on user wall or community wall; 'topic' — topic; 'video' — video
     */
    type: string,
    /**
     * Object owner ID.
     */
    ownerId?: number,
    /**
     * Object ID.
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
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
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface LikesGetListParams {
    /**
     * ; Object type:; 'post' — post on user or community wall; 'comment' — comment on a wall post; 'photo' — photo; 'audio' — audio; 'video' — video; 'note' — note; 'photo_comment' — comment on the photo; 'video_comment' — comment on the video; 'topic_comment' — comment in the discussion; 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user, community, or application that owns the object. If the 'type' parameter is set as 'sitepage', the application ID is passed as 'owner_id'. Use negative value for a community id. If the 'type' parameter is not set, the 'owner_id' is assumed to be either the current user or the same application ID as if the 'type' parameter was set to 'sitepage'.; ;
     */
    ownerId?: number,
    /**
     * Object ID. If 'type' is set as 'sitepage', 'item_id' can include the 'page_id' parameter value used during initialization of the [vk.com/dev/Like|Like widget].
     */
    itemId?: number,
    /**
     * URL of the page where the [vk.com/dev/Like|Like widget] is installed. Used instead of the 'item_id' parameter.
     */
    pageUrl?: string,
    /**
     * Filters to apply:; 'likes' — returns information about all users who liked the object (default); 'copies' — returns information only about users who told their friends about the object
     */
    filter?: string,
    /**
     * Specifies which users are returned:; '1' — to return only the current user's friends; '0' — to return all users (default)
     */
    friendsOnly?: boolean,
    /**
     * Specifies whether extended information will be returned.; '1' — to return extended information about users and communities from the 'Likes' list; '0' — to return no additional information (default)
     */
    extended?: boolean,
    /**
     * Offset needed to select a specific subset of users.
     */
    offset?: number,
    /**
     * Number of user IDs to return (maximum '1000').; Default is '100' if 'friends_only' is set to '0'; otherwise, the default is '10' if 'friends_only' is set to '1'.;
     */
    count?: number,
    /**
     * undefined
     */
    skipOwn?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface LikesAddParams {
    /**
     * Object type:; 'post' — post on user or community wall; 'comment' — comment on a wall post; 'photo' — photo; 'audio' — audio; 'video' — video; 'note' — note; 'photo_comment' — comment on the photo; 'video_comment' — comment on the video; 'topic_comment' — comment in the discussion; 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    ownerId?: number,
    /**
     * Object ID.
     */
    itemId: number,
    /**
     * Access key required for an object owned by a private entity.;
     */
    accessKey?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface LikesDeleteParams {
    /**
     * Object type:; 'post' — post on user or community wall; 'comment' — comment on a wall post; 'photo' — photo; 'audio' — audio; 'video' — video; 'note' — note; 'photo_comment' — comment on the photo; 'video_comment' — comment on the video; 'topic_comment' — comment in the discussion; 'sitepage' — page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    ownerId?: number,
    /**
     * Object ID.
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface LikesIsLikedParams {
    /**
     * User ID.
     */
    userId?: number,
    /**
     * Object type:; 'post' — post on user or community wall; 'comment' — comment on a wall post; 'photo' — photo; 'audio' — audio; 'video' — video; 'note' — note; 'photo_comment' — comment on the photo; 'video_comment' — comment on the video; 'topic_comment' — comment in the discussion
     */
    type: string,
    /**
     * ID of the user or community that owns the object.
     */
    ownerId?: number,
    /**
     * Object ID.
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsGetByIdParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * '1' – poll is in a board, '0' – poll is on a wall. ; '0' by default.
     */
    isBoard?: boolean,
    /**
     * Poll ID.
     */
    pollId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsAddVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Poll ID.
     */
    pollId: number,
    /**
     * Answer ID.
     */
    answerId: number,
    /**
     * undefined
     */
    isBoard?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsDeleteVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Poll ID.
     */
    pollId: number,
    /**
     * Answer ID.
     */
    answerId: number,
    /**
     * undefined
     */
    isBoard?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsGetVotersParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * Poll ID.
     */
    pollId: number,
    /**
     * Answer IDs.
     */
    answerIds: number[],
    /**
     * undefined
     */
    isBoard?: boolean,
    /**
     * '1' — to return only current user's friends; '0' — to return all users (default);
     */
    friendsOnly?: boolean,
    /**
     * Offset needed to return a specific subset of voters.; '0' — (default)
     */
    offset?: number,
    /**
     * Number of user IDs to return (if the 'friends_only' parameter is not set, maximum '1000'; otherwise '10').; '100' — (default)
     */
    count?: number,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate (birthdate)', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.;
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname: ; 'nom' — nominative (default) ; 'gen' — genitive ; 'dat' — dative ; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsCreateParams {
    /**
     * question text
     */
    question?: string,
    /**
     * '1' – anonymous poll, participants list is hidden;; '0' – public poll, participants list is available;; Default value is '0'.
     */
    isAnonymous?: boolean,
    /**
     * If a poll will be added to a communty it is required to send a negative group identifier. Current user by default.
     */
    ownerId?: number,
    /**
     * available answers list, for example:; " ["yes","no","maybe"]"; There can be from 1 to 10 answers.
     */
    addAnswers?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface PollsEditParams {
    /**
     * poll owner id
     */
    ownerId: number,
    /**
     * edited poll's id
     */
    pollId: number,
    /**
     * new question text
     */
    question?: string,
    /**
     * answers list, for example: ; "["yes","no","maybe"]"
     */
    addAnswers?: string,
    /**
     * object containing answers that need to be edited;; key – answer id, value – new answer text.; Example:; {"382967099":"option1", "382967103":"option2"}"
     */
    editAnswers?: string,
    /**
     * list of answer ids to be deleted. For example:; "[382967099, 382967103]"
     */
    deleteAnswers?: string,
    /**
     * access token
     */
    accessToken?: string
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
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    ownerId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsGetByIdParams {
    /**
     * Document IDs. Example: ; "66748_91488,66748_91455";
     */
    docs: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsGetUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsGetWallUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    groupId?: number,
    /**
     * access token
     */
    accessToken?: string
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
     * access token
     */
    accessToken?: string
}

export interface DocsDeleteParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * Document ID.
     */
    docId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsAddParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * Document ID.
     */
    docId: number,
    /**
     * Access key. This parameter is required if 'access_key' was returned with the document's data.
     */
    accessKey?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsGetTypesParams {
    /**
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface DocsSearchParams {
    /**
     * Search query string.
     */
    q: string,
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
    accessToken?: string
}

export interface DocsEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    ownerId: number,
    /**
     * Document ID.
     */
    docId: number,
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
    accessToken?: string
}

export interface FaveGetUsersParams {
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number,
    /**
     * Number of users to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveGetPhotosParams {
    /**
     * Offset needed to return a specific subset of photos.
     */
    offset?: number,
    /**
     * Number of photos to return.
     */
    count?: number,
    /**
     * '1' — to return photo sizes in a [vk.com/dev/photo_sizes|special format].
     */
    photoSizes?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveGetPostsParams {
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number,
    /**
     * Number of posts to return.
     */
    count?: number,
    /**
     * '1' — to return additional 'wall', 'profiles', and 'groups' fields.; ; By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveGetVideosParams {
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number,
    /**
     * Number of videos to return.
     */
    count?: number,
    /**
     * Return an additional information about videos. Also returns all owners profiles and groups.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveGetLinksParams {
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number,
    /**
     * Number of results to return.
     */
    count?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveGetMarketItemsParams {
    /**
     * Number of results to return. ;
     */
    count?: number,
    /**
     * '1' – to return additional fields 'likes, can_comment, can_repost, photos'. By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveAddUserParams {
    /**
     * Profile ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveRemoveUserParams {
    /**
     * Profile ID.
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveAddGroupParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveRemoveGroupParams {
    /**
     * Community ID.
     */
    groupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveAddLinkParams {
    /**
     * Link URL.
     */
    link: string,
    /**
     * Description text.
     */
    text?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface FaveRemoveLinkParams {
    /**
     * Link ID (can be obtained by [vk.com/dev/faves.getLinks|faves.getLinks] method).
     */
    linkId: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotificationsGetParams {
    /**
     * Number of notifications to return.
     */
    count?: number,
    /**
     * undefined
     */
    startFrom?: string,
    /**
     * Type of notifications to return:; 'wall' — wall posts; 'mentions' — mentions in wall posts, comments, or topics; 'comments' — comments to wall posts, photos, and videos; 'likes' — likes; 'reposted' — wall posts that are copied from the current user's wall; 'followers' — new followers; 'friends' — accepted friend requests
     */
    filters?: string[],
    /**
     * Earliest timestamp (in Unix time) of a notification to return. By default, 24 hours ago.
     */
    startTime?: number,
    /**
     * Latest timestamp (in Unix time) of a notification to return. By default, the current time.
     */
    endTime?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface NotificationsMarkAsViewedParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface StatsGetParams {
    /**
     * Community ID.
     */
    groupId?: number,
    /**
     * Application ID.
     */
    appId?: number,
    /**
     * Latest datestamp (in Unix time) of statistics to return.
     */
    dateFrom?: string,
    /**
     * End datestamp (in Unix time) of statistics to return.
     */
    dateTo?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface StatsTrackVisitorParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface StatsGetPostReachParams {
    /**
     * post owner community id. Specify with "-" sign.
     */
    ownerId: number,
    /**
     * wall post id. Note that stats are available only for '300' last (newest) posts on a community wall.
     */
    postId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface SearchGetHintsParams {
    /**
     * Search query string.
     */
    q?: string,
    /**
     * Maximum number of results to return.
     */
    limit?: number,
    /**
     *
     */
    filters?: string[],
    /**
     *
     */
    searchGlobal?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsGetCatalogParams {
    /**
     * Sort order:; 'popular_today' — popular for one day (default); 'visitors' — by visitors number ; 'create_date' — by creation date; 'growth_rate' — by growth rate; 'popular_week' — popular for one week
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
     * '1' — to return additional fields 'screenshots', 'MAU', 'catalog_position', and 'international'. If set, 'count' must be less than or equal to '100'. ; '0' — not to return additional fields (default).
     */
    extended?: boolean,
    /**
     * undefined
     */
    returnFriends?: boolean,
    /**
     * undefined
     */
    fields?: string[],
    /**
     * undefined
     */
    nameCase?: string,
    /**
     * Search query string.
     */
    q?: string,
    /**
     * undefined
     */
    genreId?: number,
    /**
     * 'installed' — to return list of installed apps (only for mobile platform).
     */
    filter?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsGetParams {
    /**
     * Application ID
     */
    appId?: number,
    /**
     * List of application ID
     */
    appIds?: string[],
    /**
     * platform. Possible values:; *'ios' — iOS;; *'android' — Android;; *'winphone' — Windows Phone;; *'web' — приложения на vk.com.; By default: 'web'.
     */
    platform?: string,
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities'; (only if return_friends - 1)
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default);; 'gen' — genitive;; 'dat' — dative;; 'acc' — accusative;; 'ins' — instrumental;; 'abl' — prepositional.; ; (only if 'return_friends' = '1')
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsSendRequestParams {
    /**
     * id of the user to send a request
     */
    userId: number,
    /**
     * request text
     */
    text?: string,
    /**
     * request type. Values:; 'invite' – if the request is sent to a user who does not have the app installed;; 'request' – if a user has already installed the app
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
    accessToken?: string
}

export interface AppsDeleteAppRequestsParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsGetFriendsListParams {
    /**
     * List size.
     */
    count?: number,
    /**
     * List type. Possible values:; * 'invite' — available for invites (don't play the game);; * 'request' — available for request (play the game).; ; By default: 'invite'.
     */
    type?: string,
    /**
     * Additional profile fields, see [vk.com/dev/fields|description].
     */
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsGetLeaderboardParams {
    /**
     * Leaderboard type. Possible values:; *'level' — by level;; *'points' — by mission points;; *'score' — by score ().
     */
    type: string,
    /**
     * Rating type. Possible values:; *'1' — global rating among all players;; *'0' — rating among user friends.
     */
    global?: boolean,
    /**
     * 1 — to return additional info about users
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureAddAppEventParams {
    /**
     * ID of a user to save the data
     */
    userId: number,
    /**
     * there are 2 default activities: ; * 1 – level. Works similar to ;; * 2 – points, saves points amount; Any other value is for saving completed missions
     */
    activityId: number,
    /**
     * depends on activity_id:; * 1 – number, current level number;; * 2 – number, current user's points amount; ; Any other value is ignored
     */
    value?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AppsGetScoreParams {
    /**
     * undefined
     */
    userId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface UtilsCheckLinkParams {
    /**
     * Link to check (e.g., 'http://google.com').
     */
    url: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface UtilsResolveScreenNameParams {
    /**
     * Screen name of the user, community (e.g., 'apiclub,' 'andrew', or 'rules_of_war'), or application.
     */
    screenName: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface UtilsGetServerTimeParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface DatabaseGetCountriesParams {
    /**
     * '1' — to return a full list of all countries; '0' — to return a list of countries near the current user's country (default).;
     */
    needAll?: boolean,
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
    accessToken?: string
}

export interface DatabaseGetRegionsParams {
    /**
     * Country ID, received in [vk.com/dev/database.getCountries|database.getCountries] method.
     */
    countryId: number,
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
    accessToken?: string
}

export interface DatabaseGetStreetsByIdParams {
    /**
     * Street IDs.
     */
    streetIds: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface DatabaseGetCountriesByIdParams {
    /**
     * Country IDs.
     */
    countryIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface DatabaseGetCitiesParams {
    /**
     * Country ID.
     */
    countryId: number,
    /**
     * Region ID.
     */
    regionId?: number,
    /**
     * Search query.
     */
    q?: string,
    /**
     * '1' — to return all cities in the country; '0' — to return major cities in the country (default);
     */
    needAll?: boolean,
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
    accessToken?: string
}

export interface DatabaseGetCitiesByIdParams {
    /**
     * City IDs.
     */
    cityIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface DatabaseGetUniversitiesParams {
    /**
     * Search query.
     */
    q?: string,
    /**
     * Country ID.
     */
    countryId?: number,
    /**
     * City ID.
     */
    cityId?: number,
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
    accessToken?: string
}

export interface DatabaseGetSchoolsParams {
    /**
     * Search query.
     */
    q?: string,
    /**
     * City ID.
     */
    cityId: number,
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
    accessToken?: string
}

export interface DatabaseGetSchoolClassesParams {
    /**
     * Country ID.
     */
    countryId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface DatabaseGetFacultiesParams {
    /**
     * University ID.
     */
    universityId: number,
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
    accessToken?: string
}

export interface DatabaseGetChairsParams {
    /**
     * id of the faculty to get chairs from
     */
    facultyId: number,
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
    accessToken?: string
}

export interface GiftsGetParams {
    /**
     * User ID.
     */
    userId?: number,
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
    accessToken?: string
}

export interface AdsGetAccountsParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetClientsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsCreateClientsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'client_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsUpdateClientsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe changes in clients. Description of 'client_mod' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsDeleteClientsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array with IDs of deleted clients.
     */
    ids: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetCampaignsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'For advertising agencies'. ID of the client advertising campaigns are retrieved from.
     */
    clientId?: number,
    /**
     * Flag that specifies whether archived ads shall be shown.; *0 — show only active campaigns;; *1 — show all campaigns.;
     */
    includeDeleted?: boolean,
    /**
     * Filter of advertising campaigns to show. ; Serialized JSON array with campaign IDs. Only campaigns that exist in 'campaign_ids' and belong to the specified advertising account will be shown. If the parameter is null, all campaigns will be shown.;
     */
    campaignIds?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsCreateCampaignsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'campaign_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsUpdateCampaignsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe changes in campaigns. Description of 'campaign_mod' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsDeleteCampaignsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array with IDs of deleted campaigns.
     */
    ids: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetAdsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Available and required for advertising agencies.' ID of the client ads are retrieved from.
     */
    clientId?: number,
    /**
     * Flag that specifies whether archived ads shall be shown:; *0 — show only active ads;; *1 — show all ads.;
     */
    includeDeleted?: boolean,
    /**
     * Filter by advertising campaigns. ; Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.;
     */
    campaignIds?: string,
    /**
     * Filter by ads. ; Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.;
     */
    adIds?: string,
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
    accessToken?: string
}

export interface AdsGetAdsLayoutParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    clientId?: number,
    /**
     * Flag that specifies whether archived ads shall be shown.; *0 — show only active ads;; *1 — show all ads.;
     */
    includeDeleted?: boolean,
    /**
     * Filter by advertising campaigns.; Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.;
     */
    campaignIds?: string,
    /**
     * Filter by ads.; Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.;
     */
    adIds?: string,
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
    accessToken?: string
}

export interface AdsGetAdsTargetingParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    clientId?: number,
    /**
     * flag that specifies whether archived ads shall be shown:; *0 — show only active ads;; *1 — show all ads.
     */
    includeDeleted?: boolean,
    /**
     * Filter by advertising campaigns.; Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.;
     */
    campaignIds?: string,
    /**
     * Filter by ads.; Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    adIds?: string,
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
    accessToken?: string
}

export interface AdsCreateAdsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe created ads. Description of 'ad_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsUpdateAdsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe changes in ads. Description of 'ad_edit_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsDeleteAdsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array with ad IDs.
     */
    ids: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsCheckLinkParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Object type:; *'community' — community;; *'post' — community post;; *'application' — VK application;; *'video' — video;; *'site' — external site.
     */
    linkType: string,
    /**
     * Object URL.
     */
    linkUrl: string,
    /**
     * Campaign ID
     */
    campaignId?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetStatisticsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Type of requested objects listed in 'ids' parameter:; *ad — ads;; *campaign — campaigns;; *client — clients;; *office — account.;
     */
    idsType: string,
    /**
     * IDs requested ads, campaigns, clients or account, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string,
    /**
     * Data grouping by dates:; *day — statistics by days;; *month — statistics by months;; *overall — overall statistics.; 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: string,
    /**
     * Date to show statistics from. For different value of 'period' different date format is used:; *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011; **0 — day it was created on;; *month: YYYY-MM, example: 2011-09 — September 2011; **0 — month it was created in;; *overall: 0.;
     */
    dateFrom: string,
    /**
     * Date to show statistics to. For different value of 'period' different date format is used:; *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011; **0 — current day;; *month: YYYY-MM, example: 2011-09 — September 2011; **0 — current month;; *overall: 0.
     */
    dateTo: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetDemographicsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Type of requested objects listed in 'ids' parameter:; *ad — ads;; *campaign — campaigns.;
     */
    idsType: string,
    /**
     * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string,
    /**
     * Data grouping by dates:; *day — statistics by days;; *month — statistics by months;; *overall — overall statistics.; 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: string,
    /**
     * Date to show statistics from. For different value of 'period' different date format is used:; *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011; **0 — day it was created on;; *month: YYYY-MM, example: 2011-09 — September 2011; **0 — month it was created in;; *overall: 0.
     */
    dateFrom: string,
    /**
     * Date to show statistics to. For different value of 'period' different date format is used:; *day: YYYY-MM-DD, example: 2011-09-27 — September 27, 2011; **0 — current day;; *month: YYYY-MM, example: 2011-09 — September 2011; **0 — current month;; *overall: 0.
     */
    dateTo: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetAdsPostsReachParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Ads IDS separated by comma.
     */
    adsIds: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetBudgetParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsAddOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
     */
    data: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsRemoveOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON array with IDs of deleted managers.
     */
    ids: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetTargetingStatsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Serialized JSON object that describes targeting parameters. Description of 'criteria' object see below.
     */
    criteria?: string,
    /**
     * ID of an ad which targeting parameters shall be analyzed.
     */
    adId?: number,
    /**
     * Ad format. Possible values:; *'1' — image and text;; *'2' — big image;; *'3' — exclusive format;; *'4' — community, square image;; *'7' — special app format;; *'8' — special community format;; *'9' — post in community;; *'10' — app board.
     */
    adFormat?: number,
    /**
     * Platforms to use for ad showing. Possible values:; (for 'ad_format' = '1'); *'0' — VK and partner sites;; *'1' — VK only.; (for 'ad_format' = '9'); *'all' — all platforms;; *'desktop' — desktop version;; *'mobile' — mobile version and apps.
     */
    adPlatform?: string,
    /**
     * URL for the advertised object.
     */
    linkUrl: string,
    /**
     * Domain of the advertised object.
     */
    linkDomain?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetSuggestionsParams {
    /**
     * Section, suggestions are retrieved in. Available values:; *countries — request of a list of countries. If q is not set or blank, a short list of countries is shown. Otherwise, a full list of countries is shown.; *regions — requested list of regions. 'country' parameter is required.; *cities — requested list of cities. 'country' parameter is required.; *districts — requested list of districts. 'cities' parameter is required.; *stations — requested list of subway stations. 'cities' parameter is required.; *streets — requested list of streets. 'cities' parameter is required.; *schools — requested list of educational organizations. 'cities' parameter is required.; *interests — requested list of interests.; *positions — requested list of positions (professions).; *group_types — requested list of group types.; *religions — requested list of religious commitments.; *browsers — requested list of browsers and mobile devices.;
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
     * Language of the returned string values. Supported languages:; *ru — Russian;; *ua — Ukrainian;; *en — English.;
     */
    lang?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetCategoriesParams {
    /**
     * Language. The full list of supported languages is [vk.com/dev/api_requests|here].
     */
    lang?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetUploadURLParams {
    /**
     * Ad format:; *1 — image and text;; *2 — big image;; *3 — exclusive format;; *4 — community, square image;; *7 — special app format.
     */
    adFormat: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetVideoUploadURLParams {
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetFloodStatsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetRejectionReasonParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * Ad ID.
     */
    adId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsCreateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Only for advertising agencies.'; ID of the client with the advertising account where the group will be created.;
     */
    clientId?: number,
    /**
     * Name of the target group — a string up to 64 characters long.
     */
    name: string,
    /**
     * Domain of the site where user accounting code will be placed.
     */
    domain?: string,
    /**
     * 'For groups with auditory created with pixel code only.'; ; Number of days after that users will be automatically removed from the group. '0' — not to remove users.;
     */
    lifetime?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsUpdateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Only for advertising agencies.' ; ID of the client with the advertising account where the group will be created.;
     */
    clientId?: number,
    /**
     * Group ID.
     */
    targetGroupId: number,
    /**
     * New name of the target group — a string up to 64 characters long.
     */
    name: string,
    /**
     * Domain of the site where user accounting code will be placed.
     */
    domain?: string,
    /**
     * 'Only for the groups that get audience from sites with user accounting code.'; Time in days when users added to a retarget group will be automatically excluded from it. ; '0' – automatic exclusion is off.
     */
    lifetime?: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsDeleteTargetGroupParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Only for advertising agencies.' ; ID of the client with the advertising account where the group will be created.;
     */
    clientId?: number,
    /**
     * Group ID.
     */
    targetGroupId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsGetTargetGroupsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Only for advertising agencies.'; ID of the client with the advertising account where the group will be created.;
     */
    clientId?: number,
    /**
     * '1' — to return pixel code.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface AdsImportTargetContactsParams {
    /**
     * Advertising account ID.
     */
    accountId: number,
    /**
     * 'Only for advertising agencies.' ; ID of the client with the advertising account where the group will be created.;
     */
    clientId?: number,
    /**
     * Target group ID.
     */
    targetGroupId: number,
    /**
     * List of phone numbers, emails or user IDs separated with a comma.
     */
    contacts: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface SecureCheckTokenParams {
    /**
     * client 'access_token'
     */
    token?: string,
    /**
     * user 'ip address'. Note that user may access using the 'ipv6' address, in this case it is required to transmit the 'ipv6' address. ; If not transmitted, the address will not be checked.
     */
    ip?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketGetParams {
    /**
     * ID of an item owner community; "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    ownerId: number,
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
    accessToken?: string
}

export interface MarketGetByIdParams {
    /**
     * Comma-separated ids list: {user id}_{item id}.; If an item belongs to a community -{community id} is used. ; " 'Videos' value example: ; '-4363_136089719,13245770_137352259'"
     */
    itemIds: string[],
    /**
     * '1' – to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
     */
    extended?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketSearchParams {
    /**
     * ID of an items owner community.
     */
    ownerId: number,
    /**
     * Search query, for example "pink slippers".
     */
    q?: string,
    /**
     * Minimum item price value.
     */
    priceFrom?: number,
    /**
     * Maximum item price value.
     */
    priceTo?: number,
    /**
     * Comma-separated tag IDs list.
     */
    tags?: number[],
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
     * access token
     */
    accessToken?: string
}

export interface MarketGetAlbumsParams {
    /**
     * ID of an items owner community.
     */
    ownerId: number,
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
    accessToken?: string
}

export interface MarketGetAlbumByIdParams {
    /**
     * identifier of an album owner community; "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    ownerId: number,
    /**
     * collections identifiers to obtain data from
     */
    albumIds: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketCreateCommentParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * Comment text (required if 'attachments' parameter is not specified)
     */
    message?: string,
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: ; "'<owner_id>_<media_id>,<owner_id>_<media_id>'"; ; '' - media attachment type:; "'photo' - photo; 'video' - video; 'audio' - audio; 'doc' - document"; ; '<owner_id>' - media owner id; '<media_id>' - media attachment id; ; For example:; "photo100172_166443618,photo66748_265827614";
     */
    attachments?: string[],
    /**
     * '1' - comment will be published on behalf of a community, '0' - on behalf of a user (by default).
     */
    fromGroup?: boolean,
    /**
     * ID of a comment to reply with current comment to.
     */
    replyToComment?: number,
    /**
     * Sticker ID.
     */
    stickerId?: number,
    /**
     * Random value to avoid resending one comment.
     */
    guid?: string,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketGetCommentsParams {
    /**
     * ID of an item owner community
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * '1' — to return likes info.
     */
    needLikes?: boolean,
    /**
     * ID of a comment to start a list from (details below).
     */
    startCommentId?: number,
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
    fields?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketDeleteCommentParams {
    /**
     * identifier of an item owner community; "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    ownerId: number,
    /**
     * comment id
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketRestoreCommentParams {
    /**
     * identifier of an item owner community; "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    ownerId: number,
    /**
     * deleted comment id
     */
    commentId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketEditCommentParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * New comment text (required if 'attachments' are not specified); ; 2048 symbols maximum.
     */
    message?: string,
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: ; "'<owner_id>_<media_id>,<owner_id>_<media_id>'"; ; '' - media attachment type:; "'photo' - photo; 'video' - video; 'audio' - audio; 'doc' - document"; ; '<owner_id>' - media owner id; '<media_id>' - media attachment id; ; For example:; "photo100172_166443618,photo66748_265827614";
     */
    attachments?: string[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketReportCommentParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Comment ID.
     */
    commentId: number,
    /**
     * Complaint reason. Possible values:; *'0' — spam;; *'1' — child porn;; *'2' — extremism;; *'3' — violence;; *'4' — drugs propaganda;; *'5' — adult materials;; *'6' — insult.
     */
    reason: number,
    /**
     * access token
     */
    accessToken?: string
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
    accessToken?: string
}

export interface MarketReportParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * Complaint reason. Possible values:; *'0' — spam;; *'1' — child porn;; *'2' — extremism;; *'3' — violence;; *'4' — drugs propaganda;; *'5' — adult materials;; *'6' — insult.
     */
    reason: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketAddParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
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
    categoryId: number,
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
    mainPhotoId: number,
    /**
     * IDs of additional photos.
     */
    photoIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketEditParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
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
    categoryId: number,
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
    mainPhotoId: number,
    /**
     * IDs of additional photos.
     */
    photoIds?: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketDeleteParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketRestoreParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Deleted item ID.
     */
    itemId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketReorderItemsParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * ID of a collection to reorder items in. Set 0 to reorder full items list.
     */
    albumId?: number,
    /**
     * Item ID.
     */
    itemId: number,
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
    accessToken?: string
}

export interface MarketReorderAlbumsParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Collection ID.
     */
    albumId: number,
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
    accessToken?: string
}

export interface MarketAddAlbumParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Collection title.
     */
    title: string,
    /**
     * Cover photo ID.
     */
    photoId?: number,
    /**
     * Set as main ('1' – set, '0' – no).
     */
    mainAlbum?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketEditAlbumParams {
    /**
     * ID of an collection owner community.
     */
    ownerId: number,
    /**
     * Collection ID.
     */
    albumId: number,
    /**
     * Collection title.
     */
    title: string,
    /**
     * Cover photo id
     */
    photoId?: number,
    /**
     * Set as main ('1' – set, '0' – no).
     */
    mainAlbum?: boolean,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketDeleteAlbumParams {
    /**
     * ID of an collection owner community.
     */
    ownerId: number,
    /**
     * Collection ID.
     */
    albumId: number,
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketRemoveFromAlbumParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * Collections IDs to remove item from.
     */
    albumIds: number[],
    /**
     * access token
     */
    accessToken?: string
}

export interface MarketAddToAlbumParams {
    /**
     * ID of an item owner community.
     */
    ownerId: number,
    /**
     * Item ID.
     */
    itemId: number,
    /**
     * Collections IDs to add item to.
     */
    albumIds: number[],
    /**
     * access token
     */
    accessToken?: string
}