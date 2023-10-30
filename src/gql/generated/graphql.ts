/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
};

export type AddContentViewsIn = {
  contentType: ViewsContentType;
  ids: Array<Scalars['ID']['input']>;
};

export type AdditionalInfo = {
  __typename?: 'AdditionalInfo';
  advantage?: Maybe<Scalars['String']['output']>;
  hasDelivery: Scalars['Boolean']['output'];
};

export type AdditionalInfoIn = {
  advantage?: InputMaybe<Scalars['String']['input']>;
  hasDelivery?: Scalars['Boolean']['input'];
};

export type AddressIn = {
  city: Scalars['String']['input'];
  coordinates: Array<CoordinateIn>;
};

export type AddressOut = {
  __typename?: 'AddressOut';
  city: Scalars['String']['output'];
  coordinates: Array<CoordinateOut>;
};

export type Album = {
  __typename?: 'Album';
  author: User;
  content: Array<Publication>;
  contentType: AlbumContentType;
  cover: File;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalCover?: Maybe<File>;
  name: Scalars['String']['output'];
  policy: VisibilityPolicy;
  unviewedContentCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};


export type AlbumContentArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type AlbumContentInUpdate = {
  addedContent: Array<Scalars['ID']['input']>;
  removedContent: Array<Scalars['ID']['input']>;
};

export enum AlbumContentType {
  PhotoVideo = 'PHOTO_VIDEO',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY'
}

export type AlbumIn = {
  content: Array<Scalars['String']['input']>;
  contentType: AlbumContentType;
  coverId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  internalCoverId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  policy: VisibilityPolicy;
};

export type AlbumInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalCoverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  policy?: InputMaybe<VisibilityPolicy>;
};

export type AlbumList = {
  __typename?: 'AlbumList';
  albums: Array<Album>;
  cover?: Maybe<File>;
  total: Scalars['Int']['output'];
};

export type AlbumListOrBe = AlbumList | BaseError;

export type AlbumOrBe = Album | BaseError;

export type AlbumOrEwf = Album | ErrorWithFields;

export type AppointmentContent = {
  __typename?: 'AppointmentContent';
  data?: Maybe<Product>;
  metadata: ContentMetadata;
};

export type AppointmentMessage = Message & {
  __typename?: 'AppointmentMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  service: AppointmentContent;
  text: Scalars['String']['output'];
  time: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AppointmentMessageIn = {
  serviceId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  time: Scalars['String']['input'];
};

export type AppointmentMessageOrEwf = AppointmentMessage | ErrorWithFields;

export type Article = {
  __typename?: 'Article';
  attachments: Array<File>;
  author: User;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isCommentable: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  topic?: Maybe<Topic>;
  unreadCommentsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ArticleIn = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  is18Plus: Scalars['Boolean']['input'];
  isCommentable?: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type ArticleInUpdate = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type ArticleList = {
  __typename?: 'ArticleList';
  articles: Array<Article>;
  total: Scalars['Int']['output'];
};

export type ArticleListOrBe = ArticleList | BaseError;

export type ArticleOrBe = Article | BaseError;

export type ArticleOrEwf = Article | ErrorWithFields;

export type BaseError = {
  __typename?: 'BaseError';
  status: ErrorStatus;
};

export type Blog = {
  __typename?: 'Blog';
  articles: Array<Article>;
  author: User;
  avatar?: Maybe<File>;
  cover?: Maybe<File>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  topics: Array<Topic>;
  unreadArticleCounts: Scalars['Int']['output'];
};


export type BlogArticlesArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type BlogTopicsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type BlogIn = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type BlogInUpdate = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BlogList = {
  __typename?: 'BlogList';
  blog: Array<Blog>;
  total: Scalars['Int']['output'];
};

export type BlogListOrBe = BaseError | BlogList;

export type BlogOrEwf = Blog | ErrorWithFields;

export type BooleanObject = {
  __typename?: 'BooleanObject';
  boolean: Scalars['Boolean']['output'];
};

export type BooleanObjectOrBe = BaseError | BooleanObject;

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  product: Product;
  selectedProperties: Array<RecordType>;
};

export type CartItemIn = {
  id: Scalars['ID']['input'];
  selectedProperties?: InputMaybe<Array<RecordTypeIn>>;
};

export type CartItems = {
  __typename?: 'CartItems';
  fullAmount: Scalars['Int']['output'];
  fullPrice: Scalars['Int']['output'];
  items: Array<CartItem>;
};

export type CartItemsOrBe = BaseError | CartItems;

export type Catalog = {
  __typename?: 'Catalog';
  author: User;
  collections: Array<Collection>;
  cover?: Maybe<File>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pdf?: Maybe<File>;
  updatedAt: Scalars['String']['output'];
};


export type CatalogCollectionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type CatalogInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  pdfCatalogId?: InputMaybe<Scalars['ID']['input']>;
};

export type CatalogOrBe = BaseError | Catalog;

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isTechSupport: Scalars['Boolean']['output'];
  lastMessage?: Maybe<LastMessage>;
  lastReadTimestamp: Scalars['String']['output'];
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']['output']>;
  unreadMessageCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<ChatUser>;
};

export type ChatList = {
  __typename?: 'ChatList';
  items: Array<Chat>;
  total: Scalars['Int']['output'];
};

export type ChatListOrBe = BaseError | ChatList;

export type ChatOrBe = BaseError | Chat;

export type ChatUser = {
  __typename?: 'ChatUser';
  lastReadTimestamp: Scalars['String']['output'];
  user: User;
};

export enum CodeTransport {
  Email = 'EMAIL',
  Phone = 'PHONE'
}

export type Collection = {
  __typename?: 'Collection';
  author: User;
  cover: File;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CollectionIn = {
  coverId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CollectionInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionOrBe = BaseError | Collection;

export type CollectionOrEwf = Collection | ErrorWithFields;

export type Comment = DeletedComment | ExistingComment;

export type CommentContentIn = {
  id: Scalars['ID']['input'];
  type: CommentContentType;
};

export enum CommentContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Publication = 'PUBLICATION'
}

export type CommentIn = {
  content: CommentContentIn;
  text: Scalars['String']['input'];
};

export type CommentList = {
  __typename?: 'CommentList';
  comments: Array<Comment>;
  total: Scalars['Int']['output'];
};

export type CommentListOrEwf = CommentList | ErrorWithFields;

export enum CommentReactionType {
  CryingFace = 'CRYING_FACE',
  FaceWithOpenMouth = 'FACE_WITH_OPEN_MOUTH',
  FaceWithTears = 'FACE_WITH_TEARS',
  FolderHands = 'FOLDER_HANDS',
  PileOfPoo = 'PILE_OF_POO',
  PoutingFace = 'POUTING_FACE',
  ThumbsUp = 'THUMBS_UP'
}

export type CommentReactions = {
  __typename?: 'CommentReactions';
  myReaction?: Maybe<CommentReactionType>;
  reactions: Array<Reaction>;
};

export type CommentTarget = Article | DeletedComment | ExistingComment | Publication;

export type CommentWithReplies = {
  __typename?: 'CommentWithReplies';
  comment: Comment;
  replies: Array<Comment>;
  total: Scalars['Int']['output'];
};

export type CommentWithRepliesList = {
  __typename?: 'CommentWithRepliesList';
  comments: Array<CommentWithReplies>;
  total: Scalars['Int']['output'];
};

export type CommentWithRepliesListOrEwf = CommentWithRepliesList | ErrorWithFields;

export type CommentWithRepliesOrEwf = CommentWithReplies | ErrorWithFields;

export type Complaint = {
  __typename?: 'Complaint';
  authorId: Scalars['ID']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  complaintFinalType?: Maybe<ComplaintType>;
  complaintType: ComplaintType;
  contentId: Scalars['ID']['output'];
  contentType: ComplaintContentType;
  createdAt: Scalars['String']['output'];
  decision?: Maybe<ComplaintDecision>;
  decisionMadeAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum ComplaintContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY'
}

export enum ComplaintDecision {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export type ComplaintFinalType = {
  __typename?: 'ComplaintFinalType';
  complaintFinalType: ComplaintType;
};

export type ComplaintIn = {
  comment?: InputMaybe<Scalars['String']['input']>;
  complaintType: ComplaintType;
  contentId: Scalars['ID']['input'];
  contentType: ComplaintContentType;
};

export type ComplaintMetadataIn = {
  contentId: Scalars['ID']['input'];
  contentType: ComplaintContentType;
};

export enum ComplaintType {
  AppealsToViolence = 'APPEALS_TO_VIOLENCE',
  Fraud = 'FRAUD',
  IllegalGoods = 'ILLEGAL_GOODS',
  Misinformation = 'MISINFORMATION',
  NotSetAs_18Plus = 'NOT_SET_AS_18_PLUS',
  Pornography = 'PORNOGRAPHY',
  Spam = 'SPAM',
  ViolationOfIntellectualRights = 'VIOLATION_OF_INTELLECTUAL_RIGHTS',
  Violence = 'VIOLENCE'
}

export type ComplaintsList = {
  __typename?: 'ComplaintsList';
  complaints: Array<Complaint>;
};

export type ContactsIn = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ContentMetadata = {
  __typename?: 'ContentMetadata';
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  type: ForwardedMessageMetadataContentType;
};

export type ContentNotification = INotification & {
  __typename?: 'ContentNotification';
  author: User;
  cover?: Maybe<File>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  targetId: Scalars['ID']['output'];
  targetType: ENotificationTargetType;
  text: Scalars['String']['output'];
  type: ENotificationType;
};

export type CoordinateIn = {
  address?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type CoordinateOut = {
  __typename?: 'CoordinateOut';
  address?: Maybe<Scalars['String']['output']>;
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type CreateComplaintOrEwf = Complaint | ErrorWithFields;

export type CreateStoryOrEwf = ErrorWithFields | Story;

export type CreateTokensResponse = ErrorWithFields | TokenPair;

export type DayWorkingHours = {
  __typename?: 'DayWorkingHours';
  hours?: Maybe<WorkingHours>;
  status: WorkingDayStatus;
};

export type DayWorkingHoursIn = {
  hours?: InputMaybe<WorkingHoursIn>;
  status: WorkingDayStatus;
};

export type DeletedComment = IBaseComment & {
  __typename?: 'DeletedComment';
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  target: CommentTarget;
  updatedAt: Scalars['String']['output'];
};

export enum ENotificationFilterType {
  All = 'ALL',
  Comments = 'COMMENTS',
  Followers = 'FOLLOWERS',
  Likes = 'LIKES'
}

export enum ENotificationTargetType {
  Article = 'ARTICLE',
  Chat = 'CHAT',
  Comment = 'COMMENT',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
  User = 'USER'
}

export enum ENotificationType {
  ContentIsBlocked = 'CONTENT_IS_BLOCKED',
  NewComment = 'NEW_COMMENT',
  NewFollower = 'NEW_FOLLOWER',
  NewLike = 'NEW_LIKE',
  NewMention = 'NEW_MENTION',
  NewMessage = 'NEW_MESSAGE'
}

export enum ErrorStatus {
  AlreadyDone = 'ALREADY_DONE',
  AlreadyExist = 'ALREADY_EXIST',
  InvalidInputData = 'INVALID_INPUT_DATA',
  NotAuthenticated = 'NOT_AUTHENTICATED',
  NotEnoughPermissions = 'NOT_ENOUGH_PERMISSIONS',
  NotFound = 'NOT_FOUND'
}

export type ErrorWithFields = {
  __typename?: 'ErrorWithFields';
  fields: Array<Scalars['String']['output']>;
  status: ErrorStatus;
};

export type ExistingComment = IBaseComment & {
  __typename?: 'ExistingComment';
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  reactions: CommentReactions;
  references: Array<RecordType>;
  target: CommentTarget;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ExistingCommentOrEwf = ErrorWithFields | ExistingComment;

export enum FavouriteContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION'
}

export type FavouriteIn = {
  contentType: FavouriteContentType;
  id: Scalars['ID']['input'];
};

export type File = {
  __typename?: 'File';
  checksum?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ForwardMessageIn = {
  contentId: Scalars['ID']['input'];
  contentType: ForwardedMessageMetadataContentType;
  text: Scalars['String']['input'];
};

export type ForwardedContent = {
  __typename?: 'ForwardedContent';
  data?: Maybe<ForwardedContentData>;
  metadata: ContentMetadata;
};

export type ForwardedContentData = Article | Product | Publication | Story;

export type ForwardedMessage = Message & {
  __typename?: 'ForwardedMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  forwardedContent: ForwardedContent;
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum ForwardedMessageMetadataContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY'
}

export type ForwardedMessageOrEwf = ErrorWithFields | ForwardedMessage;

export type GetCodeResponse = ErrorWithFields | StringObject;

export type GetComplaintFinalTypeOrEwf = ComplaintFinalType | ErrorWithFields;

export type GetComplaintsOrBe = BaseError | ComplaintsList;

export type GetHintsListOrBe = BaseError | HintsList;

export type GetHistoryListOrBe = BaseError | HistoryList;

export type GetMeResponse = BaseError | User;

export type GetRecentBlogsListOrBe = BaseError | RecentBlogsList;

export type GetRecentStoriesOrBe = BaseError | StoryFeedList;

export type GetUserStoriesOrBe = BaseError | StoryFeed;

export type HintsList = {
  __typename?: 'HintsList';
  hints: Array<Scalars['String']['output']>;
};

export type HistoryList = {
  __typename?: 'HistoryList';
  history: Array<Scalars['String']['output']>;
};

export type IBaseComment = {
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  target: CommentTarget;
  updatedAt: Scalars['String']['output'];
};

export type INotification = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  type: ENotificationType;
};

export type LastMessage = AppointmentMessage | ForwardedMessage | OrderMessage | RegularMessage;

export type LastReadTimestampChanged = {
  __typename?: 'LastReadTimestampChanged';
  chatId: Scalars['ID']['output'];
  lastReadTimestamp: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type LastReadTimestampChangedOrBe = BaseError | LastReadTimestampChanged;

export enum LikeContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
  User = 'USER'
}

export type LikeIn = {
  contentId: Scalars['ID']['input'];
  contentType: LikeContentType;
};

export type ListHashtags = {
  __typename?: 'ListHashtags';
  hashtags: Array<Scalars['String']['output']>;
};

export type ListHashtagsOrBe = BaseError | ListHashtags;

export type Message = {
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MessageList = {
  __typename?: 'MessageList';
  items: Array<Message>;
  total: Scalars['Int']['output'];
};

export type MessageListOrEwf = ErrorWithFields | MessageList;

export type MessageOrEwf = AppointmentMessage | ErrorWithFields | ForwardedMessage | OrderMessage | RegularMessage;

export type MessageUnion = AppointmentMessage | ForwardedMessage | OrderMessage | RegularMessage;

export type Mutation = {
  __typename?: 'Mutation';
  addContentViews?: Maybe<ErrorWithFields>;
  addItemToCart?: Maybe<ErrorWithFields>;
  addRecentBlog?: Maybe<BaseError>;
  blockUser?: Maybe<BaseError>;
  confirmCode?: Maybe<ErrorWithFields>;
  createAlbum: AlbumOrEwf;
  createAppointmentMessage: AppointmentMessageOrEwf;
  createArticle: ArticleOrEwf;
  createBlog: BlogOrEwf;
  createCatalog?: Maybe<BaseError>;
  createChat: ChatOrBe;
  createCollection: CollectionOrEwf;
  createComment: ExistingCommentOrEwf;
  createComplaint: CreateComplaintOrEwf;
  createForwardMessage: ForwardedMessageOrEwf;
  createOrderMessage: OrderMessageOrEwf;
  createProduct: ProductOrEwf;
  createPublication: PublicationOrEwf;
  createRegularMessage: RegularMessageOrEwf;
  createReview: ReviewOrEwf;
  createStory: CreateStoryOrEwf;
  createTechSupportChat: ChatOrBe;
  createTopic: TopicOrEwf;
  createUser: UserOrEwf;
  deleteAlbum?: Maybe<BaseError>;
  deleteAllArticles?: Maybe<Scalars['Void']['output']>;
  deleteAllPublications?: Maybe<Scalars['Void']['output']>;
  deleteArticle?: Maybe<BaseError>;
  deleteChat?: Maybe<BaseError>;
  deleteCollection?: Maybe<BaseError>;
  deleteComment?: Maybe<BaseError>;
  deleteComplaint?: Maybe<BaseError>;
  deleteFriend?: Maybe<BaseError>;
  deleteItemFromCart?: Maybe<BaseError>;
  deleteManyUsers?: Maybe<BaseError>;
  deleteMessage?: Maybe<BaseError>;
  deleteProduct?: Maybe<BaseError>;
  deletePublication?: Maybe<BaseError>;
  deleteStory?: Maybe<BaseError>;
  deleteTopic?: Maybe<BaseError>;
  deleteUser?: Maybe<BaseError>;
  followUser?: Maybe<BaseError>;
  muteChat?: Maybe<BaseError>;
  resetPassword?: Maybe<ErrorWithFields>;
  sendCode?: Maybe<ErrorWithFields>;
  sendContactsToPartnership?: Maybe<ErrorWithFields>;
  sendContactsToTechSupport?: Maybe<ErrorWithFields>;
  serverCleanup?: Maybe<BaseError>;
  setAdminRole?: Maybe<BaseError>;
  setAlbumsCover?: Maybe<BaseError>;
  setDecisionOfComplaint: SetComplaintDecisionOrEwf;
  setEmail?: Maybe<ErrorWithFields>;
  setFavourite?: Maybe<ErrorWithFields>;
  setFriend?: Maybe<BaseError>;
  setHashtags?: Maybe<BaseError>;
  setLastReadTimestamp?: Maybe<BaseError>;
  setLike?: Maybe<ErrorWithFields>;
  setNotificationSettings?: Maybe<BaseError>;
  setPhone?: Maybe<ErrorWithFields>;
  setReactionToComment?: Maybe<BaseError>;
  subscribe?: Maybe<BaseError>;
  unblockUser?: Maybe<BaseError>;
  unfollowUser?: Maybe<BaseError>;
  unmuteChat?: Maybe<BaseError>;
  unsetLike?: Maybe<ErrorWithFields>;
  unsubscribe?: Maybe<BaseError>;
  updateAlbum?: Maybe<ErrorWithFields>;
  updateAlbumContent?: Maybe<ErrorWithFields>;
  updateArticle: ArticleOrEwf;
  updateBlog: BlogOrEwf;
  updateCatalog?: Maybe<ErrorWithFields>;
  updateCollection?: Maybe<ErrorWithFields>;
  updateLastReadComment?: Maybe<BaseError>;
  updatePassword?: Maybe<ErrorWithFields>;
  updateProduct?: Maybe<ErrorWithFields>;
  updatePublication?: Maybe<ErrorWithFields>;
  updateTariff: TariffOrEwf;
  updateTopic: TopicOrEwf;
  updateUser?: Maybe<ErrorWithFields>;
  uploadFile: UploadFileResponse;
  uploadImage: UploadFileResponse;
  uploadVideo: UploadFileResponse;
};


export type MutationAddContentViewsArgs = {
  content: AddContentViewsIn;
};


export type MutationAddItemToCartArgs = {
  item: CartItemIn;
};


export type MutationAddRecentBlogArgs = {
  blogId: Scalars['ID']['input'];
};


export type MutationBlockUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationConfirmCodeArgs = {
  code: Scalars['String']['input'];
  target: Scalars['String']['input'];
  transport: CodeTransport;
};


export type MutationCreateAlbumArgs = {
  album: AlbumIn;
};


export type MutationCreateAppointmentMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: AppointmentMessageIn;
};


export type MutationCreateArticleArgs = {
  article: ArticleIn;
};


export type MutationCreateBlogArgs = {
  blog: BlogIn;
};


export type MutationCreateChatArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationCreateCollectionArgs = {
  collection: CollectionIn;
};


export type MutationCreateCommentArgs = {
  comment: CommentIn;
};


export type MutationCreateComplaintArgs = {
  complaint: ComplaintIn;
};


export type MutationCreateForwardMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: ForwardMessageIn;
};


export type MutationCreateOrderMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: OrderMessageIn;
};


export type MutationCreateProductArgs = {
  product: ProductIn;
};


export type MutationCreatePublicationArgs = {
  publication: PublicationIn;
};


export type MutationCreateRegularMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: RegularMessageIn;
};


export type MutationCreateReviewArgs = {
  review: ReviewIn;
};


export type MutationCreateStoryArgs = {
  story: StoryIn;
};


export type MutationCreateTopicArgs = {
  topic: TopicIn;
};


export type MutationCreateUserArgs = {
  user: UserIn;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteChatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteComplaintArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFriendArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteItemFromCartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManyUsersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMessageArgs = {
  chatId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePublicationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFollowUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMuteChatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  target: Scalars['String']['input'];
  transport: CodeTransport;
};


export type MutationSendCodeArgs = {
  target: Scalars['String']['input'];
  transport: CodeTransport;
};


export type MutationSendContactsToPartnershipArgs = {
  contacts: ContactsIn;
};


export type MutationSendContactsToTechSupportArgs = {
  contacts: ContactsIn;
};


export type MutationSetAdminRoleArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationSetAlbumsCoverArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetDecisionOfComplaintArgs = {
  complaint: SetComplaintDecisionIn;
};


export type MutationSetEmailArgs = {
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  transport: CodeTransport;
};


export type MutationSetFavouriteArgs = {
  favourite: FavouriteIn;
  isFavourite?: Scalars['Boolean']['input'];
};


export type MutationSetFriendArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetHashtagsArgs = {
  hashtags: Array<Scalars['String']['input']>;
};


export type MutationSetLastReadTimestampArgs = {
  chatId: Scalars['ID']['input'];
  lastReadTimestamp: Scalars['String']['input'];
};


export type MutationSetLikeArgs = {
  like: LikeIn;
};


export type MutationSetNotificationSettingsArgs = {
  settings: NotificationSettingsIn;
};


export type MutationSetPhoneArgs = {
  id: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  transport: CodeTransport;
};


export type MutationSetReactionToCommentArgs = {
  id: Scalars['ID']['input'];
  reaction?: InputMaybe<CommentReactionType>;
};


export type MutationSubscribeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnblockUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnfollowUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnmuteChatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnsetLikeArgs = {
  like: LikeIn;
};


export type MutationUnsubscribeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  album: AlbumInUpdate;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumContentArgs = {
  content: AlbumContentInUpdate;
  id: Scalars['ID']['input'];
};


export type MutationUpdateArticleArgs = {
  article: ArticleInUpdate;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlogArgs = {
  blog: BlogInUpdate;
};


export type MutationUpdateCatalogArgs = {
  catalog: CatalogInUpdate;
};


export type MutationUpdateCollectionArgs = {
  collection: CollectionInUpdate;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLastReadCommentArgs = {
  content: CommentContentIn;
  timestamp: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  id: Scalars['ID']['input'];
  password: PasswordInUpdate;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  product: ProductInUpdate;
};


export type MutationUpdatePublicationArgs = {
  id: Scalars['ID']['input'];
  publication: PublicationInUpdate;
};


export type MutationUpdateTariffArgs = {
  tariff: TariffIn;
};


export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  topic: TopicInUpdate;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  user: UserInUpdate;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadVideoArgs = {
  file: Scalars['Upload']['input'];
};

export type Notification = ContentNotification | TechSupNotification;

export type NotificationList = {
  __typename?: 'NotificationList';
  notifications: Array<Notification>;
  total: Scalars['Int']['output'];
};

export type NotificationListOrBe = BaseError | NotificationList;

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  emailNotificationsEnabled: Scalars['Boolean']['output'];
  platformNewsEnabled: Scalars['Boolean']['output'];
  pushNotificationsEnabled: Scalars['Boolean']['output'];
};

export type NotificationSettingsIn = {
  emailNotificationsEnabled: Scalars['Boolean']['input'];
  platformNewsEnabled: Scalars['Boolean']['input'];
  pushNotificationsEnabled: Scalars['Boolean']['input'];
};

export type NotificationSettingsOrBe = BaseError | NotificationSettings;

export type NumberObject = {
  __typename?: 'NumberObject';
  number: Scalars['Int']['output'];
};

export type NumberObjectOrBe = BaseError | NumberObject;

export type OnlineStatusChanged = {
  __typename?: 'OnlineStatusChanged';
  chatId: Scalars['ID']['output'];
  isOnline: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type OnlineStatusChangedOrBe = BaseError | OnlineStatusChanged;

export type OrderContent = {
  __typename?: 'OrderContent';
  data?: Maybe<Product>;
  metadata: ContentMetadata;
};

export type OrderMessage = Message & {
  __typename?: 'OrderMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  orderProperties: Array<RecordType>;
  product: OrderContent;
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type OrderMessageIn = {
  orderProperties: Array<RecordTypeIn>;
  productId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type OrderMessageOrEwf = ErrorWithFields | OrderMessage;

export type PasswordInUpdate = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Product = {
  __typename?: 'Product';
  attachments: Array<File>;
  author: User;
  collection: Collection;
  createdAt: Scalars['String']['output'];
  deliveryTerms?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isInCart: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  isService: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  linkId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  properties: Array<ProductProperty>;
  relatedProducts: Array<Product>;
  reviewsCount: Scalars['Int']['output'];
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ProductIn = {
  attachments: Array<Scalars['ID']['input']>;
  collectionId: Scalars['ID']['input'];
  deliveryTerms?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: Scalars['Boolean']['input'];
  isService?: Scalars['Boolean']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Int']['input'];
  properties: Array<ProductPropertyIn>;
  relatedProducts?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags: Array<Scalars['String']['input']>;
};

export type ProductInUpdate = {
  deliveryTerms?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<Array<ProductPropertyIn>>;
  relatedProducts?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductList = {
  __typename?: 'ProductList';
  products: Array<Product>;
  total: Scalars['Int']['output'];
};

export type ProductListOrBe = BaseError | ProductList;

export type ProductOrBe = BaseError | Product;

export type ProductOrEwf = ErrorWithFields | Product;

export type ProductProperty = {
  __typename?: 'ProductProperty';
  property: Scalars['String']['output'];
  values: Array<Scalars['String']['output']>;
};

export type ProductPropertyIn = {
  property: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
};

export type Publication = {
  __typename?: 'Publication';
  attachments: Array<File>;
  author: User;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isCommentable: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  references: Array<RecordType>;
  showInFeed: Scalars['Boolean']['output'];
  tags: Array<Scalars['String']['output']>;
  unreadCommentsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type PublicationIn = {
  attachments: Array<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: Scalars['Boolean']['input'];
  isCommentable?: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  showInFeed?: Scalars['Boolean']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationInUpdate = {
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  showInFeed?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationList = {
  __typename?: 'PublicationList';
  publications: Array<Publication>;
  total: Scalars['Int']['output'];
};

export type PublicationListOrBe = BaseError | PublicationList;

export type PublicationListOrEwf = ErrorWithFields | PublicationList;

export type PublicationOrBe = BaseError | Publication;

export type PublicationOrEwf = ErrorWithFields | Publication;

export type Query = {
  __typename?: 'Query';
  createTokens: CreateTokensResponse;
  deleteRefreshToken?: Maybe<BaseError>;
  getActiveTariff: TariffOrBe;
  getAlbumSubscriptions: AlbumListOrBe;
  getAlbumsByUserId: AlbumListOrBe;
  getArticleRecommendations: ArticleListOrBe;
  getArticleSubscriptions: ArticleListOrBe;
  getBlockedUsers: UserListOrEwf;
  getBlogSubscriptions: BlogListOrBe;
  getCartItems: CartItemsOrBe;
  getCatalogProducts: ProductListOrBe;
  getChatByUserId: ChatOrBe;
  getChats: ChatListOrBe;
  getChatsWithOrder: ChatListOrBe;
  getCode?: Maybe<GetCodeResponse>;
  getCommentReplies: CommentListOrEwf;
  getCommentsWithTopComment: CommentWithRepliesOrEwf;
  getComplaints: GetComplaintsOrBe;
  getContentComments: CommentWithRepliesListOrEwf;
  getFavouriteArticles: ArticleListOrBe;
  getFavouriteProducts: ProductListOrBe;
  getFavouritePublications: PublicationListOrBe;
  getFinalTypeByContentId: GetComplaintFinalTypeOrEwf;
  getHashtags: ListHashtagsOrBe;
  getMe: GetMeResponse;
  getMessages: MessageListOrEwf;
  getMyPublications: PublicationListOrEwf;
  getMyTopics: TopicListOrBe;
  getNotificationSettings: NotificationSettingsOrBe;
  getNotifications: NotificationListOrBe;
  getPopularTags: TagListOrEwf;
  getProductsByCollectionId: ProductListOrBe;
  getPublicationByCommentId: PublicationOrBe;
  getPublicationRecommendations: PublicationListOrBe;
  getPublicationSubscriptions: PublicationListOrBe;
  getPublicationsByTag: PublicationListOrEwf;
  getPublicationsByUserId: PublicationListOrEwf;
  getReactionAuthors: UserListOrEwf;
  getRecentBlogs: GetRecentBlogsListOrBe;
  getRecentStories: GetRecentStoriesOrBe;
  getRecommendedUsers: UserListOrBe;
  getReviewsByProductId: ReviewListOrEwf;
  getTechSupportChat: ChatOrBe;
  getTechSupportChats: ChatListOrBe;
  getUnreadNotificationsCount: NumberObjectOrBe;
  getUserStories: GetUserStoriesOrBe;
  getUsers: UserListOrBe;
  hints: GetHintsListOrBe;
  history: GetHistoryListOrBe;
  isEmailExist: BooleanObjectOrBe;
  isLoginExist: BooleanObjectOrBe;
  isPhoneExist: BooleanObjectOrBe;
  listFollowers: UserListOrBe;
  listSubscriptions: UserListOrBe;
  refreshAccessToken: RefreshAccessTokenResponse;
  retrieveAlbum: AlbumOrBe;
  retrieveArticle: ArticleOrBe;
  retrieveBlog: BlogOrEwf;
  retrieveCatalog: CatalogOrBe;
  retrieveCollection: CollectionOrBe;
  retrieveComplaint: RetrieveComplaintOrBe;
  retrieveFile: RetrieveFileResponse;
  retrieveMessage: MessageOrEwf;
  retrieveProduct: ProductOrBe;
  retrievePublication: PublicationOrBe;
  retrieveStory: RetrieveStoryOrBe;
  retrieveUser: UserOrBe;
  searchBlogs: SearchBlogsListOrEwf;
  searchFollowers: UserListOrEwf;
  searchProducts: SearchProductsListOrEwf;
  searchPublications: SearchPublicationsListOrEwf;
  searchSubscriptions: UserListOrEwf;
  searchUsers: SearchUsersListOrEwf;
};


export type QueryCreateTokensArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryDeleteRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type QueryGetAlbumSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetAlbumsByUserIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetArticleRecommendationsArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};


export type QueryGetArticleSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetBlockedUsersArgs = {
  limit?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
};


export type QueryGetBlogSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetCatalogProductsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetChatByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetChatsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetChatsWithOrderArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetCodeArgs = {
  target: Scalars['String']['input'];
  transport: CodeTransport;
};


export type QueryGetCommentRepliesArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetCommentsWithTopCommentArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  sorting?: SortingType;
};


export type QueryGetComplaintsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetContentCommentsArgs = {
  content: CommentContentIn;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  sorting?: SortingType;
};


export type QueryGetFavouriteArticlesArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetFavouriteProductsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetFavouritePublicationsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetFinalTypeByContentIdArgs = {
  metadata: ComplaintMetadataIn;
};


export type QueryGetMessagesArgs = {
  chatId: Scalars['ID']['input'];
  lastReadTimestamp?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetMyPublicationsArgs = {
  isVideo?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetNotificationsArgs = {
  filterBy?: ENotificationFilterType;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetPopularTagsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetProductsByCollectionIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetPublicationByCommentIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPublicationRecommendationsArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};


export type QueryGetPublicationSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetPublicationsByTagArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  tag: Scalars['String']['input'];
};


export type QueryGetPublicationsByUserIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  onlyVideo?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetReactionAuthorsArgs = {
  commentId: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  reactionType: CommentReactionType;
  skip?: Scalars['Int']['input'];
};


export type QueryGetRecommendedUsersArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};


export type QueryGetReviewsByProductIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetTechSupportChatsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryGetUserStoriesArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetUsersArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryHintsArgs = {
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
};


export type QueryIsEmailExistArgs = {
  email: Scalars['String']['input'];
};


export type QueryIsLoginExistArgs = {
  login: Scalars['String']['input'];
};


export type QueryIsPhoneExistArgs = {
  phone: Scalars['String']['input'];
};


export type QueryListFollowersArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryListSubscriptionsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type QueryRetrieveAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveBlogArgs = {
  id: Scalars['ID']['input'];
  topicId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRetrieveCatalogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveComplaintArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveMessageArgs = {
  chatId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type QueryRetrieveProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrievePublicationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveStoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveUserArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchBlogsArgs = {
  search: SearchBlogsIn;
};


export type QuerySearchFollowersArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
};


export type QuerySearchProductsArgs = {
  search: SearchIn;
};


export type QuerySearchPublicationsArgs = {
  search: SearchIn;
};


export type QuerySearchSubscriptionsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
};


export type QuerySearchUsersArgs = {
  search: SearchIn;
};

export type Reaction = {
  __typename?: 'Reaction';
  count: Scalars['Int']['output'];
  type: CommentReactionType;
};

export type RecentBlog = {
  __typename?: 'RecentBlog';
  author: User;
  avatar?: Maybe<File>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unreadCount: Scalars['Int']['output'];
};

export type RecentBlogsList = {
  __typename?: 'RecentBlogsList';
  records: Array<RecentBlog>;
  total: Scalars['Int']['output'];
};

export type RecordType = {
  __typename?: 'RecordType';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type RecordTypeIn = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type RefreshAccessTokenResponse = AccessToken | BaseError;

export type RegularMessage = Message & {
  __typename?: 'RegularMessage';
  attachments: Array<File>;
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type RegularMessageIn = {
  attachments: Array<Scalars['ID']['input']>;
  tempKey: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type RegularMessageOrEwf = ErrorWithFields | RegularMessage;

export type RetrieveComplaintOrBe = BaseError | Complaint;

export type RetrieveFileResponse = BaseError | File;

export type RetrieveStoryOrBe = BaseError | Story;

export type Review = {
  __typename?: 'Review';
  author: User;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ReviewIn = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type ReviewList = {
  __typename?: 'ReviewList';
  reviews: Array<Review>;
  total: Scalars['Int']['output'];
};

export type ReviewListOrEwf = ErrorWithFields | ReviewList;

export type ReviewOrEwf = ErrorWithFields | Review;

export type SearchBlogsIn = {
  inMySubscriptions?: Scalars['Boolean']['input'];
  limit: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip: Scalars['Int']['input'];
};

export type SearchBlogsList = {
  __typename?: 'SearchBlogsList';
  records: Array<Blog>;
  total: Scalars['Int']['output'];
};

export type SearchBlogsListOrEwf = ErrorWithFields | SearchBlogsList;

export type SearchIn = {
  city?: InputMaybe<Scalars['String']['input']>;
  hasDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  lat?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  lng?: InputMaybe<Scalars['Int']['input']>;
  openedAtTime?: InputMaybe<Scalars['String']['input']>;
  q: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  show18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  skip: Scalars['Int']['input'];
};

export type SearchProductsList = {
  __typename?: 'SearchProductsList';
  records: Array<Product>;
  total: Scalars['Int']['output'];
};

export type SearchProductsListOrEwf = ErrorWithFields | SearchProductsList;

export type SearchPublicationsList = {
  __typename?: 'SearchPublicationsList';
  records: Array<Publication>;
  total: Scalars['Int']['output'];
};

export type SearchPublicationsListOrEwf = ErrorWithFields | SearchPublicationsList;

export type SearchUserRecord = {
  __typename?: 'SearchUserRecord';
  content: Array<Publication>;
  user: User;
};

export type SearchUsersList = {
  __typename?: 'SearchUsersList';
  records: Array<SearchUserRecord>;
  total: Scalars['Int']['output'];
};

export type SearchUsersListOrEwf = ErrorWithFields | SearchUsersList;

export type SetComplaintDecisionIn = {
  complaintFinalType: ComplaintType;
  decision: ComplaintDecision;
  id: Scalars['ID']['input'];
};

export type SetComplaintDecisionOrEwf = Complaint | ErrorWithFields;

export type SocketMessage = {
  __typename?: 'SocketMessage';
  data: MessageUnion;
  tempKey: Scalars['ID']['output'];
};

export type SocketMessageOrBe = BaseError | SocketMessage;

export enum SortingType {
  ByCreatedAt = 'BY_CREATED_AT',
  ByPopular = 'BY_POPULAR'
}

export type Story = {
  __typename?: 'Story';
  createdAt: Scalars['String']['output'];
  file: File;
  id: Scalars['ID']['output'];
  isLiked: Scalars['Boolean']['output'];
  objects: Array<StoryObject>;
  policy: VisibilityPolicy;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type StoryFeed = {
  __typename?: 'StoryFeed';
  author: User;
  stories: Array<Story>;
};

export type StoryFeedList = {
  __typename?: 'StoryFeedList';
  items: Array<StoryFeed>;
  total: Scalars['Int']['output'];
};

export type StoryGeolocation = {
  __typename?: 'StoryGeolocation';
  coordinate: StoryGeolocationCoordinate;
  position: StoryObjectPosition;
};

export type StoryGeolocationCoordinate = {
  __typename?: 'StoryGeolocationCoordinate';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type StoryGeolocationCoordinateIn = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type StoryGeolocationIn = {
  coordinate: StoryGeolocationCoordinateIn;
  position: StoryObjectPositionIn;
};

export type StoryIn = {
  attachmentId: Scalars['ID']['input'];
  objects: Array<StoryObjectIn>;
  policy: VisibilityPolicy;
};

export type StoryLink = {
  __typename?: 'StoryLink';
  isAccountLinkMatched: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  linkName: Scalars['String']['output'];
  position: StoryObjectPosition;
  textColor: StoryTextColors;
};

export type StoryLinkIn = {
  isAccountLinkMatched: Scalars['Boolean']['input'];
  link: Scalars['String']['input'];
  linkName: Scalars['String']['input'];
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
};

export type StoryObject = StoryGeolocation | StoryLink | StoryProductLink | StoryText | StoryUserReference;

export type StoryObjectIn = {
  geolocation?: InputMaybe<StoryGeolocationIn>;
  link?: InputMaybe<StoryLinkIn>;
  productLink?: InputMaybe<StoryProductLinkIn>;
  text?: InputMaybe<StoryTextIn>;
  userReference?: InputMaybe<StoryUserReferenceIn>;
};

export type StoryObjectPosition = {
  __typename?: 'StoryObjectPosition';
  angle: Scalars['Float']['output'];
  scale: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type StoryObjectPositionIn = {
  angle: Scalars['Float']['input'];
  scale: Scalars['Float']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type StoryProductLink = {
  __typename?: 'StoryProductLink';
  catalogId: Scalars['ID']['output'];
  collectionName: Scalars['String']['output'];
  position: StoryObjectPosition;
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  textColor: StoryTextColors;
};

export type StoryProductLinkIn = {
  position: StoryObjectPositionIn;
  productId: Scalars['ID']['input'];
  textColor: StoryTextColors;
};

export type StoryText = {
  __typename?: 'StoryText';
  font: Scalars['String']['output'];
  fontSize: Scalars['String']['output'];
  position: StoryObjectPosition;
  textColor: StoryTextColors;
  value: Scalars['String']['output'];
};

export enum StoryTextColors {
  Black = 'BLACK',
  Gray = 'GRAY',
  Red = 'RED',
  White = 'WHITE'
}

export type StoryTextIn = {
  font: Scalars['String']['input'];
  fontSize: Scalars['String']['input'];
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
  value: Scalars['String']['input'];
};

export type StoryUserReference = {
  __typename?: 'StoryUserReference';
  login?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position: StoryObjectPosition;
  textColor: StoryTextColors;
  userId: Scalars['ID']['output'];
};

export type StoryUserReferenceIn = {
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
  userId: Scalars['ID']['input'];
};

export type StringObject = {
  __typename?: 'StringObject';
  string: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onLastReadTimestampChanged: LastReadTimestampChangedOrBe;
  onNewMessage: SocketMessageOrBe;
  onOnlineStatusChanged: OnlineStatusChangedOrBe;
};

export type TagList = {
  __typename?: 'TagList';
  tags: Array<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type TagListOrEwf = ErrorWithFields | TagList;

export type Tariff = {
  __typename?: 'Tariff';
  addressesCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  expiredAt: Scalars['String']['output'];
  hashtagsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mailingRecipients: Scalars['Int']['output'];
  mailingToAll: Scalars['Boolean']['output'];
  productsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  videoLengthS: Scalars['Int']['output'];
};

export type TariffIn = {
  addressesCount: Scalars['Int']['input'];
  hashtagsCount: Scalars['Int']['input'];
  mailingRecipients: Scalars['Int']['input'];
  mailingToAll: Scalars['Boolean']['input'];
  productsCount: Scalars['Int']['input'];
  videoLengthS: Scalars['Int']['input'];
};

export type TariffOrBe = BaseError | Tariff;

export type TariffOrEwf = ErrorWithFields | Tariff;

export type TechSupNotification = INotification & {
  __typename?: 'TechSupNotification';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  type: ENotificationType;
};

export type TokenPair = {
  __typename?: 'TokenPair';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  blog: Blog;
  cover: File;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TopicIn = {
  coverId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TopicInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TopicList = {
  __typename?: 'TopicList';
  topics: Array<Topic>;
};

export type TopicListOrBe = BaseError | TopicList;

export type TopicOrEwf = ErrorWithFields | Topic;

export type UploadFileResponse = BaseError | File;

export type User = {
  __typename?: 'User';
  additionalInfo?: Maybe<AdditionalInfo>;
  address?: Maybe<AddressOut>;
  avatar?: Maybe<File>;
  createdAt: Scalars['String']['output'];
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isFriend: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  sex?: Maybe<UserSex>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  subscribersCount: Scalars['Int']['output'];
  subscriptionsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<WeekWorkingHours>;
};

export type UserIn = {
  address: AddressIn;
  dateOfBirth: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  sex: UserSex;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type UserInUpdate = {
  additionalInfo?: InputMaybe<AdditionalInfoIn>;
  address?: InputMaybe<AddressIn>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isPaided?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<UserSex>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  workingHours?: InputMaybe<WeekWorkingHoursIn>;
};

export type UserList = {
  __typename?: 'UserList';
  total: Scalars['Int']['output'];
  users: Array<User>;
};

export type UserListOrBe = BaseError | UserList;

export type UserListOrEwf = ErrorWithFields | UserList;

export type UserOrBe = BaseError | User;

export type UserOrEwf = ErrorWithFields | User;

export enum UserSex {
  Female = 'FEMALE',
  Male = 'MALE'
}

export enum ViewsContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT'
}

export enum VisibilityPolicy {
  VisibleOnlyToFollowers = 'VISIBLE_ONLY_TO_FOLLOWERS',
  VisibleToEveryone = 'VISIBLE_TO_EVERYONE'
}

export type WeekWorkingHours = {
  __typename?: 'WeekWorkingHours';
  friday: DayWorkingHours;
  monday: DayWorkingHours;
  saturday: DayWorkingHours;
  sunday: DayWorkingHours;
  thursday: DayWorkingHours;
  tuesday: DayWorkingHours;
  wednesday: DayWorkingHours;
};

export type WeekWorkingHoursIn = {
  friday: DayWorkingHoursIn;
  monday: DayWorkingHoursIn;
  saturday: DayWorkingHoursIn;
  sunday: DayWorkingHoursIn;
  thursday: DayWorkingHoursIn;
  tuesday: DayWorkingHoursIn;
  wednesday: DayWorkingHoursIn;
};

export enum WorkingDayStatus {
  DayOff = 'DAY_OFF',
  Working = 'WORKING'
}

export type WorkingHours = {
  __typename?: 'WorkingHours';
  closesAt: Scalars['String']['output'];
  opensAt: Scalars['String']['output'];
};

export type WorkingHoursIn = {
  closesAt: Scalars['String']['input'];
  opensAt: Scalars['String']['input'];
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AlbumListOrBE": [
      "AlbumList",
      "BaseError"
    ],
    "AlbumOrBE": [
      "Album",
      "BaseError"
    ],
    "AlbumOrEWF": [
      "Album",
      "ErrorWithFields"
    ],
    "AppointmentMessageOrEWF": [
      "AppointmentMessage",
      "ErrorWithFields"
    ],
    "ArticleListOrBE": [
      "ArticleList",
      "BaseError"
    ],
    "ArticleOrBE": [
      "Article",
      "BaseError"
    ],
    "ArticleOrEWF": [
      "Article",
      "ErrorWithFields"
    ],
    "BlogListOrBE": [
      "BaseError",
      "BlogList"
    ],
    "BlogOrEWF": [
      "Blog",
      "ErrorWithFields"
    ],
    "BooleanObjectOrBE": [
      "BaseError",
      "BooleanObject"
    ],
    "CartItemsOrBE": [
      "BaseError",
      "CartItems"
    ],
    "CatalogOrBE": [
      "BaseError",
      "Catalog"
    ],
    "ChatListOrBE": [
      "BaseError",
      "ChatList"
    ],
    "ChatOrBE": [
      "BaseError",
      "Chat"
    ],
    "CollectionOrBE": [
      "BaseError",
      "Collection"
    ],
    "CollectionOrEWF": [
      "Collection",
      "ErrorWithFields"
    ],
    "Comment": [
      "DeletedComment",
      "ExistingComment"
    ],
    "CommentListOrEWF": [
      "CommentList",
      "ErrorWithFields"
    ],
    "CommentTarget": [
      "Article",
      "DeletedComment",
      "ExistingComment",
      "Publication"
    ],
    "CommentWithRepliesListOrEWF": [
      "CommentWithRepliesList",
      "ErrorWithFields"
    ],
    "CommentWithRepliesOrEWF": [
      "CommentWithReplies",
      "ErrorWithFields"
    ],
    "CreateComplaintOrEWF": [
      "Complaint",
      "ErrorWithFields"
    ],
    "CreateStoryOrEWF": [
      "ErrorWithFields",
      "Story"
    ],
    "CreateTokensResponse": [
      "ErrorWithFields",
      "TokenPair"
    ],
    "ExistingCommentOrEWF": [
      "ErrorWithFields",
      "ExistingComment"
    ],
    "ForwardedContentData": [
      "Article",
      "Product",
      "Publication",
      "Story"
    ],
    "ForwardedMessageOrEWF": [
      "ErrorWithFields",
      "ForwardedMessage"
    ],
    "GetCodeResponse": [
      "ErrorWithFields",
      "StringObject"
    ],
    "GetComplaintFinalTypeOrEWF": [
      "ComplaintFinalType",
      "ErrorWithFields"
    ],
    "GetComplaintsOrBE": [
      "BaseError",
      "ComplaintsList"
    ],
    "GetHintsListOrBE": [
      "BaseError",
      "HintsList"
    ],
    "GetHistoryListOrBE": [
      "BaseError",
      "HistoryList"
    ],
    "GetMeResponse": [
      "BaseError",
      "User"
    ],
    "GetRecentBlogsListOrBE": [
      "BaseError",
      "RecentBlogsList"
    ],
    "GetRecentStoriesOrBE": [
      "BaseError",
      "StoryFeedList"
    ],
    "GetUserStoriesOrBE": [
      "BaseError",
      "StoryFeed"
    ],
    "IBaseComment": [
      "DeletedComment",
      "ExistingComment"
    ],
    "INotification": [
      "ContentNotification",
      "TechSupNotification"
    ],
    "LastMessage": [
      "AppointmentMessage",
      "ForwardedMessage",
      "OrderMessage",
      "RegularMessage"
    ],
    "LastReadTimestampChangedOrBE": [
      "BaseError",
      "LastReadTimestampChanged"
    ],
    "ListHashtagsOrBE": [
      "BaseError",
      "ListHashtags"
    ],
    "Message": [
      "AppointmentMessage",
      "ForwardedMessage",
      "OrderMessage",
      "RegularMessage"
    ],
    "MessageListOrEWF": [
      "ErrorWithFields",
      "MessageList"
    ],
    "MessageOrEWF": [
      "AppointmentMessage",
      "ErrorWithFields",
      "ForwardedMessage",
      "OrderMessage",
      "RegularMessage"
    ],
    "MessageUnion": [
      "AppointmentMessage",
      "ForwardedMessage",
      "OrderMessage",
      "RegularMessage"
    ],
    "Notification": [
      "ContentNotification",
      "TechSupNotification"
    ],
    "NotificationListOrBE": [
      "BaseError",
      "NotificationList"
    ],
    "NotificationSettingsOrBE": [
      "BaseError",
      "NotificationSettings"
    ],
    "NumberObjectOrBE": [
      "BaseError",
      "NumberObject"
    ],
    "OnlineStatusChangedOrBE": [
      "BaseError",
      "OnlineStatusChanged"
    ],
    "OrderMessageOrEWF": [
      "ErrorWithFields",
      "OrderMessage"
    ],
    "ProductListOrBE": [
      "BaseError",
      "ProductList"
    ],
    "ProductOrBE": [
      "BaseError",
      "Product"
    ],
    "ProductOrEWF": [
      "ErrorWithFields",
      "Product"
    ],
    "PublicationListOrBE": [
      "BaseError",
      "PublicationList"
    ],
    "PublicationListOrEWF": [
      "ErrorWithFields",
      "PublicationList"
    ],
    "PublicationOrBE": [
      "BaseError",
      "Publication"
    ],
    "PublicationOrEWF": [
      "ErrorWithFields",
      "Publication"
    ],
    "RefreshAccessTokenResponse": [
      "AccessToken",
      "BaseError"
    ],
    "RegularMessageOrEWF": [
      "ErrorWithFields",
      "RegularMessage"
    ],
    "RetrieveComplaintOrBE": [
      "BaseError",
      "Complaint"
    ],
    "RetrieveFileResponse": [
      "BaseError",
      "File"
    ],
    "RetrieveStoryOrBE": [
      "BaseError",
      "Story"
    ],
    "ReviewListOrEWF": [
      "ErrorWithFields",
      "ReviewList"
    ],
    "ReviewOrEWF": [
      "ErrorWithFields",
      "Review"
    ],
    "SearchBlogsListOrEWF": [
      "ErrorWithFields",
      "SearchBlogsList"
    ],
    "SearchProductsListOrEWF": [
      "ErrorWithFields",
      "SearchProductsList"
    ],
    "SearchPublicationsListOrEWF": [
      "ErrorWithFields",
      "SearchPublicationsList"
    ],
    "SearchUsersListOrEWF": [
      "ErrorWithFields",
      "SearchUsersList"
    ],
    "SetComplaintDecisionOrEWF": [
      "Complaint",
      "ErrorWithFields"
    ],
    "SocketMessageOrBE": [
      "BaseError",
      "SocketMessage"
    ],
    "StoryObject": [
      "StoryGeolocation",
      "StoryLink",
      "StoryProductLink",
      "StoryText",
      "StoryUserReference"
    ],
    "TagListOrEWF": [
      "ErrorWithFields",
      "TagList"
    ],
    "TariffOrBE": [
      "BaseError",
      "Tariff"
    ],
    "TariffOrEWF": [
      "ErrorWithFields",
      "Tariff"
    ],
    "TopicListOrBE": [
      "BaseError",
      "TopicList"
    ],
    "TopicOrEWF": [
      "ErrorWithFields",
      "Topic"
    ],
    "UploadFileResponse": [
      "BaseError",
      "File"
    ],
    "UserListOrBE": [
      "BaseError",
      "UserList"
    ],
    "UserListOrEWF": [
      "ErrorWithFields",
      "UserList"
    ],
    "UserOrBE": [
      "BaseError",
      "User"
    ],
    "UserOrEWF": [
      "ErrorWithFields",
      "User"
    ]
  }
};
      export default result;
    