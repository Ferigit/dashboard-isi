export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  GenericMapping: any
  JSON: any
}

export enum AgGridColumnType {
  AddressColumn = 'ADDRESS_COLUMN',
  BaseColumn = 'BASE_COLUMN',
  CurrencyColumn = 'CURRENCY_COLUMN',
  DateColumn = 'DATE_COLUMN',
  DateTimeColumn = 'DATE_TIME_COLUMN',
  DescriptionColumn = 'DESCRIPTION_COLUMN',
  EmailColumn = 'EMAIL_COLUMN',
  EntityColumn = 'ENTITY_COLUMN',
  IdColumn = 'ID_COLUMN',
  ListColumn = 'LIST_COLUMN',
  NumericColumn = 'NUMERIC_COLUMN',
  PhoneNumberColumn = 'PHONE_NUMBER_COLUMN',
  StatusColumn = 'STATUS_COLUMN',
  TagColumn = 'TAG_COLUMN',
  UrlColumn = 'URL_COLUMN',
  UsersColumn = 'USERS_COLUMN',
}

export type AccountProfileAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']>
  addressLine2?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  zipCode?: InputMaybe<Scalars['String']>
}

export type AccountProfileAddressOut = {
  __typename?: 'AccountProfileAddressOut'
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}

export type AccountProfileOut = {
  __typename?: 'AccountProfileOut'
  address?: Maybe<AccountProfileAddressOut>
  birthday?: Maybe<Scalars['Date']>
  dateFormat?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName: Scalars['String']
  lastName?: Maybe<Scalars['String']>
  mfaEnabled?: Maybe<Scalars['Boolean']>
  middleName?: Maybe<Scalars['String']>
  mobileNumber?: Maybe<Scalars['String']>
  profilePicture?: Maybe<Scalars['String']>
  signupMethod: AuthenticationType
  startWeek?: Maybe<DayOfWeekType>
  timeFormat?: Maybe<TimeFormatType>
  timezone?: Maybe<Scalars['String']>
}

/** Input for action permission level. */
export type ActionPermissionLevelInput = {
  /** The actual permission in the provided permission type. */
  level: Scalars['Int']
  /** Type of the action you want to give permission to. */
  permissionType: ActionTypeEnum
  /** The status of the permission level. Defaults to ENABLED. */
  status?: PermissionStatusEnum
}

/** Output for action permission level. */
export type ActionPermissionLevelOut = {
  __typename?: 'ActionPermissionLevelOut'
  /** ID of the permission. */
  id: Scalars['Int']
  /** Level of the permission. */
  permissionLevel: Scalars['Int']
  /** ActionTypeEnum of the permission. */
  permissionType: ActionTypeEnum
  /** Status of the permission. */
  status: PermissionStatusEnum
}

export enum ActionTypeEnum {
  BulkUpdate = 'BULK_UPDATE',
  Duplicate = 'DUPLICATE',
  Export = 'EXPORT',
  ManageTag = 'MANAGE_TAG',
  ModifyAttachment = 'MODIFY_ATTACHMENT',
  UploadAttachment = 'UPLOAD_ATTACHMENT',
  ViewAttachment = 'VIEW_ATTACHMENT',
}

/** Input for archiving a status. */
export type ArchiveStatusInput = {
  /** ID of status. */
  statusId: Scalars['String']
}

/** Input for archiving a type. */
export type ArchiveTypeInput = {
  /** ID of type. */
  typeId: Scalars['String']
}

/** Input for assigning a tag. */
export type AssignTagToEntityInput = {
  /** ID of the entity. */
  entityId: Scalars['String']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the tag */
  tagId: Scalars['String']
}

/** Output for attaching files to an entity. */
export type AttachFileToEntityOut = {
  __typename?: 'AttachFileToEntityOut'
  /** ID of the attachment. */
  attachmentId: Scalars['String']
  /** Credentials for uploading this file. */
  credential: FileManagementUploadCredential
  /** Name of the file. */
  fileName: Scalars['String']
  /** Label information. */
  label?: Maybe<LabelOut>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for attaching files to and entity. */
export type AttachFilesToEntityInput = {
  /** The id of the entity. */
  entityId: Scalars['String']
  /** The type of the entity. */
  entityType: EntityType
  /** List of files for this attachment. */
  files: Array<AttachmentFilesItemInput>
  /** The id of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for attachment files. */
export type AttachmentFilesItemInput = {
  /** ID of the label for this attachment. */
  labelId?: InputMaybe<Scalars['String']>
  /** Name of the file. */
  name: Scalars['String']
}

/** Output for attaching files to an entity. */
export type AttachmentFilesItemOut = {
  __typename?: 'AttachmentFilesItemOut'
  /** ID of the attachment. */
  attachmentId: Scalars['String']
  /** Time the attachment got created. */
  createdAt: Scalars['DateTime']
  /** The user who has created this attachment. */
  createdBy: SimpleUserProfileOut
  /** Name of the file. */
  fileName: Scalars['String']
  /** Label of the attachment. */
  label?: Maybe<LabelOut>
  /** ID of the object this attachment is attached to, it can be an entity or a comment. */
  objectId: Scalars['String']
  /** Type to object. */
  objectType: AttachmentObjectTypeEnum
  /** The user who has updated this attachment. */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** Time the attachment got created. */
  updatedBy?: Maybe<SimpleUserProfileOut>
}

/** Output data for attachments list. */
export type AttachmentFilesOut = {
  __typename?: 'AttachmentFilesOut'
  /** List of attachment items. */
  attachments: Array<AttachmentFilesItemOut>
  /** The pagination data. */
  pagination: PaginationDataOut
}

export enum AttachmentObjectTypeEnum {
  Comment = 'COMMENT',
  Entity = 'ENTITY',
}

export enum AuthenticationType {
  GoogleOauth2 = 'GOOGLE_OAUTH2',
  Normal = 'NORMAL',
}

/**
 * An available filter for the entity list view.
 *
 * If the field is a dropdown or multi-dropdown field, the dropdown items will be provided.
 */
export type AvailableFilterOut = {
  __typename?: 'AvailableFilterOut'
  /** The dropdown field items. */
  dropdownFieldItems?: Maybe<Array<DropdownFieldItemOut>>
  /** The field id. */
  fieldId: Scalars['String']
  /** The field title. */
  fieldTitle: Scalars['String']
  /** The field type. */
  fieldType: FieldType
  /** The supported operators. */
  supportedOperators: Array<SupportedOperatorOut>
}

export enum BindOperatorType {
  And = 'AND',
  Or = 'OR',
}

/** Input for bulk update action. */
export type BulkUpdateEntityActionInput = {
  /** ID of the entities. */
  entityIds: Array<Scalars['String']>
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the field. */
  fieldId: Scalars['String']
  /** Mode of update. */
  mode: UpdateModeEnum
  /** New Value. */
  newValue: Scalars['GenericMapping']
  /** Old Value, only available for REPLACE mode. */
  oldValue?: InputMaybe<Scalars['GenericMapping']>
  workspaceId: Scalars['String']
}

/** Output for bulk update action. */
export type BulkUpdateEntityActionOut = {
  __typename?: 'BulkUpdateEntityActionOut'
  /** Type of the entity. */
  entityType: EntityType
  /** Count of entities that got updated. */
  modifiedCount: Scalars['Int']
  /** Count of selected entities. */
  selectedCount: Scalars['Int']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

export type ChangeEmailInput = {
  newEmail: Scalars['String']
  password: Scalars['String']
}

export type ChangePasswordInput = {
  confirmNewPassword: Scalars['String']
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

/** Output for change password. */
export type ChangePasswordTokenOut = {
  __typename?: 'ChangePasswordTokenOut'
  /** Change password token. */
  changePasswordToken: Scalars['String']
}

/** Input for checking if a layout is the default layout. */
export type CheckDefaultLayoutInput = {
  /** The IDs of the data types the layout belongs to. */
  dataTypeIds: Array<Scalars['String']>
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Input data for checking if a domain name is available. */
export type CheckDomainNameInput = {
  /** Domain name to check. */
  domain: Scalars['String']
}

/** Input for checking if a workspace key is unique inside a company. */
export type CheckWorkspaceKeyInput = {
  /** ID of the company the workspace belongs to. */
  companyId: Scalars['String']
  /** Key of the workspace. Must be unique. */
  key: Scalars['String']
}

/** Input for cloning a custom view. */
export type CloneCustomViewInput = {
  title: Scalars['String']
  /** ID of the view to clone from. */
  viewId: Scalars['String']
}

export type CloneCustomViewOut = {
  __typename?: 'CloneCustomViewOut'
  id: Scalars['String']
}

export enum ColumnSortType {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
}

/** Input for create comment. */
export type CommentCreateInput = {
  /** Body of the comment. */
  body: Scalars['String']
  /** ID of the entity. */
  entityId: Scalars['String']
  /** ID of the parent of this comment. */
  parentId?: InputMaybe<Scalars['String']>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for editing a comment. */
export type CommentEditInput = {
  /** Body of the comment. */
  body: Scalars['String']
  /** ID of the comment. */
  id: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for retrievnig a comment. */
export type CommentOut = {
  __typename?: 'CommentOut'
  /** Body of the comment. */
  body: Scalars['String']
  /** The time this comment got created. */
  createdAt: Scalars['DateTime']
  /** The user who created this comment. */
  createdBy: SimpleUserProfileOut
  /** ID of the entity. */
  entityId: Scalars['String']
  /** ID of the comment. */
  id: Scalars['String']
  /** ID of the parent of comment. */
  parentId?: Maybe<Scalars['String']>
  /** Time of last update. */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** The user who updated this comment. */
  updatedBy?: Maybe<SimpleUserProfileOut>
}

/** Input for retrieving a comment. */
export type CommentRetrieveInput = {
  /** ID of the entity. */
  entityId: Scalars['String']
  /** ID of the parent of this comment. */
  parentId?: InputMaybe<Scalars['String']>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

export enum CompanyCreatorRoleType {
  Agent = 'AGENT',
  Director = 'DIRECTOR',
  Executive = 'EXECUTIVE',
  Founder = 'FOUNDER',
  Manager = 'MANAGER',
  Other = 'OTHER',
  VicePresident = 'VICE_PRESIDENT',
}

export enum CompanyIndustryType {
  Construction = 'CONSTRUCTION',
  Consulting = 'CONSULTING',
  CreativeAgency = 'CREATIVE_AGENCY',
  EducationAndTraining = 'EDUCATION_AND_TRAINING',
  Health = 'HEALTH',
  ItServices = 'IT_SERVICES',
  Manufacturing = 'MANUFACTURING',
  NewsMediaPublications = 'NEWS_MEDIA_PUBLICATIONS',
  Other = 'OTHER',
  RealEstate = 'REAL_ESTATE',
  SoftwareDevelopment = 'SOFTWARE_DEVELOPMENT',
  TechStartup = 'TECH_STARTUP',
  Trade = 'TRADE',
}

/** Output data for a company list item. */
export type CompanyListItemOut = {
  __typename?: 'CompanyListItemOut'
  /** Color of the company. Generated based on the name. */
  color: Scalars['String']
  /** Domain of the company. */
  domain: Scalars['String']
  /** ID of the company. */
  id: Scalars['String']
  /** Name of the company. */
  name: Scalars['String']
  /** ID of the owner of the company. */
  ownerId: Scalars['Int']
  /** List of workspaces of the company. */
  workspaces: Array<WorkspaceListItemOut>
}

/** Output data for a company. */
export type CompanyOut = {
  __typename?: 'CompanyOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  /** Color of the company. Generated based on the name. */
  color: Scalars['String']
  /** Image of the company. */
  companyImage?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** Role of the creator of the company. */
  creatorRole?: Maybe<CompanyCreatorRoleType>
  /** Currency of the company. */
  currency?: Maybe<Scalars['String']>
  /** Domain of the company. */
  domain: Scalars['String']
  /** ID of the company. */
  id: Scalars['String']
  /** Industry of the company. */
  industry?: Maybe<CompanyIndustryType>
  isArchived: Scalars['Boolean']
  /** Name of the company. */
  name: Scalars['String']
  /** ID of the owner of the company. */
  ownerId: Scalars['Int']
  /** Population of the company. */
  population?: Maybe<CompanyPopulationType>
  /** Timezone of the company. */
  timezone?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
}

export enum CompanyPopulationType {
  Between_2And_5 = 'BETWEEN_2_AND_5',
  Between_6And_10 = 'BETWEEN_6_AND_10',
  Between_11And_50 = 'BETWEEN_11_AND_50',
  MoreThan_50 = 'MORE_THAN_50',
  SinglePerson = 'SINGLE_PERSON',
}

/** Input for complete forgot password. */
export type CompleteForgotPasswordInput = {
  /** Change password token. */
  changePasswordToken: Scalars['String']
  /** User password confirmation. */
  confirmPassword: Scalars['String']
  /** User password. */
  password: Scalars['String']
}

/** Input for complete reset password. */
export type CompleteResetPasswordInput = {
  /** Change password token. */
  changePasswordToken: Scalars['String']
  /** User new password confirmation. */
  confirmPassword: Scalars['String']
  /** Old password. */
  oldPassword: Scalars['String']
  /** User new password. */
  password: Scalars['String']
}

/** Output for a country with a dial code and flag. */
export type CountryDialCodeFlagOut = {
  __typename?: 'CountryDialCodeFlagOut'
  /** The country code. */
  countryCode: Scalars['String']
  /** The name of the country. */
  countryName: Scalars['String']
  /** The dial code. */
  dialCode: Scalars['String']
  /** The flag unicode. */
  flagUnicode: Scalars['String']
}

/** Output for a country, state, or city. */
export type CountryStateCityItemOut = {
  __typename?: 'CountryStateCityItemOut'
  /** The name of the city. */
  cityName?: Maybe<Scalars['String']>
  /** The name of the country. */
  countryName?: Maybe<Scalars['String']>
  /** The name of the state. */
  stateName?: Maybe<Scalars['String']>
}

/** Output data for the create company form. */
export type CreateCompanyFormDataOut = {
  __typename?: 'CreateCompanyFormDataOut'
  /** List of creator roles. */
  creatorRoles: Array<FormDropdownItemOut>
  /** List of currencies. */
  currencies: Array<FormDropdownItemOut>
  /** List of industries. */
  industries: Array<FormDropdownItemOut>
  /** List of populations. */
  populations: Array<FormDropdownItemOut>
  /** List of timezones. */
  timezones: Array<FormDropdownItemOut>
}

/** Input data for creating a company. */
export type CreateCompanyInput = {
  /** Image of the company. */
  companyImage?: InputMaybe<Scalars['String']>
  /** Role of the creator of the company. */
  creatorRole?: InputMaybe<CompanyCreatorRoleType>
  /** Currency of the company. */
  currency?: InputMaybe<Scalars['String']>
  /** Domain of the company. Must be unique. */
  domain: Scalars['String']
  /** Industry of the company. */
  industry?: InputMaybe<CompanyIndustryType>
  /** Name of the company. Must be unique. */
  name: Scalars['String']
  /** Population of the company. */
  population?: InputMaybe<CompanyPopulationType>
  /** Timezone of the company. */
  timezone?: InputMaybe<Scalars['String']>
}

/** Input for creating a custom view. */
export type CreateCustomViewInput = {
  /** The columns of the custom view. */
  columns: Array<ViewDataColumnInput>
  /** The default pagination limit of the custom view. Defaults to 50. */
  defaultPaginationLimit?: InputMaybe<Scalars['Int']>
  /** The type of entity the custom view belongs to. */
  entityType: EntityType
  /** The filter of the custom view. */
  filter?: InputMaybe<ViewDataFilterInput>
  /** The title of the custom view. Must be unique. */
  title: Scalars['String']
  /** The ID of the workspace the custom view belongs to. */
  workspaceId: Scalars['String']
}

/** Input for create entity. */
export type CreateEntityInput = {
  /**
   * The actual data of the entity. This JSON must contain an object with key and values. The keys are
   * considered fields id, and the values considered the value of that field.
   */
  data: Scalars['JSON']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the layout. */
  layoutId: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for create entity. */
export type CreateEntityOut = {
  __typename?: 'CreateEntityOut'
  /**
   * The actual data of the entity. This JSON will contain an object with key and values. The keys are
   * considered fields id, and the values considered the value of that field.
   */
  data: Scalars['JSON']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the created entity. */
  id: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating a custom field. */
export type CreateFieldInput = {
  /** The data of the custom field. */
  data: Scalars['JSON']
  /** The type of the entity. */
  entityType: EntityType
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating an invitation. */
export type CreateInvitationInput = {
  /** Email of the user. */
  email: Scalars['String']
  /** Expiration date of the invitation. */
  expireDate: Scalars['DateTime']
  /** A name for invitation. */
  name?: InputMaybe<Scalars['String']>
  /** ID of the permission profile user will own. */
  permissionProfileId: Scalars['Int']
  /** ID of the workspace the user is being invited into. */
  workspaceId: Scalars['String']
}

/** Input for creating label. */
export type CreateLabelInput = {
  /** Type of the entity. */
  entityType: EntityType
  /** Name of the label. */
  name: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating a layout. */
export type CreateLayoutInput = {
  /** The IDs of the data types the layout belongs to. */
  dataTypeIds: Array<Scalars['String']>
  /** The type of entity. */
  entityType: EntityType
  /** The title of the layout. Must be unique. */
  title: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Output for creating a layout. */
export type CreateLayoutOut = {
  __typename?: 'CreateLayoutOut'
  /** The IDs of the data types the layout belongs to. */
  dataTypeIds: Array<Scalars['String']>
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the layout. */
  id: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Input for creating a permission profile. */
export type CreatePermissionProfileInput = {
  /** Description of the permission profile. Defaults to Null. */
  description?: InputMaybe<Scalars['String']>
  /** Name of the permission profile. */
  name: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating pipeline. */
export type CreatePipelineInput = {
  /** List of data type ids. */
  dataTypeIds: Array<Scalars['String']>
  /** Type of entity. */
  entityType: EntityType
  /** Name of pipeline. Must be unique. */
  name: Scalars['String']
  /** List of steps. */
  steps: Array<PipelineStepInput>
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Output for creating pipeline. */
export type CreatePipelineOut = {
  __typename?: 'CreatePipelineOut'
  /** Type of entity. */
  entityType: EntityType
  /** ID of pipeline. */
  id: Scalars['String']
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating a status. */
export type CreateStatusInput = {
  /** color of the status. Defaults to #B1ADBE. */
  color?: InputMaybe<Scalars['String']>
  /** Type of entity. */
  entityType: EntityType
  /** Stage of status. */
  stage: StatusStage
  /** title of status. */
  title: Scalars['String']
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

export type CreateTeamInput = {
  name: Scalars['String']
  profileIds: Array<Scalars['String']>
  workspaceId: Scalars['String']
}

/** Input for creating a type. */
export type CreateTypeInput = {
  /** Type of entity. */
  entityType: EntityType
  /** Whether it is the default type. */
  isDefault: Scalars['Boolean']
  /** list of `status_id` in this type */
  statusList: Array<Scalars['String']>
  /** title of type. */
  title: Scalars['String']
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating a workspace. */
export type CreateWorkspaceInput = {
  /** Color of the workspace. */
  color: Scalars['String']
  /** ID of the company the workspace belongs to. */
  companyId: Scalars['String']
  /** Key of the workspace. Must be unique. */
  key: Scalars['String']
  /** Name of the workspace. Must be unique. */
  name: Scalars['String']
}

/** Output data for a custom field list item. */
export type CustomFieldListItemOut = {
  __typename?: 'CustomFieldListItemOut'
  createdAt: Scalars['DateTime']
  createdBy: SimpleUserProfileOut
  /** The id of the custom field. */
  id: Scalars['String']
  isStatic: Scalars['Boolean']
  required: Scalars['Boolean']
  requiredStatuses: Array<SimpleStatusOut>
  title: Scalars['String']
  type: FieldType
}

/** Output data for a custom field. */
export type CustomFieldOut = {
  __typename?: 'CustomFieldOut'
  /** The data of the custom field. */
  data: Scalars['JSON']
  /** The type of the entity. */
  entityType: EntityType
  /** The id of the custom field. */
  id: Scalars['String']
  /** The id of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for custom view list. */
export type CustomViewListItemOut = {
  __typename?: 'CustomViewListItemOut'
  /** Indicating if this view can be deleted. */
  canDelete: Scalars['Boolean']
  /** Indicating if this view can be edited. */
  canEdit: Scalars['Boolean']
  /** Default value for custom view's limit when user does not provide limit. */
  defaultPaginationLimit: Scalars['Int']
  /** ID of the custom view */
  id: Scalars['String']
  /** Indicating if this view is the default. */
  isDefault: Scalars['Boolean']
  /** Indicating if this view is the favorite. */
  isFavorite: Scalars['Boolean']
  /** Custom view title. */
  title: Scalars['String']
}

/** Output for a custom view. */
export type CustomViewOut = {
  __typename?: 'CustomViewOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  /** The columns of the custom view. */
  columns: Array<ViewDataColumnOut>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** The default pagination limit of the custom view. */
  defaultPaginationLimit?: Maybe<Scalars['Int']>
  /** The type of entity the custom view belongs to. */
  entityType: EntityType
  /** The filter of the custom view. */
  filter?: Maybe<ViewDataFilterOut>
  /** The ID of the custom view. */
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  /** The title of the custom view. */
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  /** The ID of the workspace the custom view belongs to. */
  workspaceId: Scalars['String']
}

export enum DateFormatType {
  DdMmYyyy = 'DD_MM_YYYY',
  MmDdYyyy = 'MM_DD_YYYY',
  YyyyMmDd = 'YYYY_MM_DD',
}

export enum DayOfWeekType {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

/** Input for deassigning a tag. */
export type DeassignTagFromEntityInput = {
  /** ID of the entity. */
  entityId: Scalars['String']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the tag */
  tagId: Scalars['String']
}

/** Input for deleting an attachment. */
export type DeleteAttachmentInput = {
  /** ID of the attachment. */
  attachmentId: Scalars['String']
}

/** Input data for deleting a company. */
export type DeleteCompanyInput = {
  /** ID of the company. */
  companyId: Scalars['String']
}

export type DeleteCustomViewInput = {
  viewId: Scalars['String']
}

/** Input for deleting a custom field. */
export type DeleteFieldInput = {
  /** The id of the custom field. */
  fieldId: Scalars['String']
}

/** Input for deleting a label. */
export type DeleteLabelInput = {
  /** ID of the label. */
  labelId: Scalars['String']
}

/** Input for deleting a layout. */
export type DeleteLayoutInput = {
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the layout. */
  layoutId: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Input for deleting a status. */
export type DeleteStatusInput = {
  /**
   * if provided, all statuses belonging to `status_id` will be substituted by
   * `new_status_id`.
   */
  newStatusId?: InputMaybe<Scalars['String']>
  /** ID of status. */
  statusId: Scalars['String']
}

/** Input for deleting a type. */
export type DeleteTypeInput = {
  /** ID of type. */
  typeId: Scalars['String']
}

/** Input for deleting a workspace. */
export type DeleteWorkspaceInput = {
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for a detail view. */
export type DetailViewOut = {
  __typename?: 'DetailViewOut'
  /** The embed lists of the detail view. */
  embedLists: Array<EmbedListOut>
  /** The ID of the detail view. */
  id: Scalars['String']
  /** The information layout of the detail view. */
  informationLayout: InformationLayoutOut
  /** The ID of the layout the detail view belongs to. */
  layoutId: Scalars['String']
  /** The main widgets of the detail view. */
  mainWidgets: Array<Scalars['JSON']>
  /** The sidebar widgets of the detail view. */
  sidebarWidgets: Array<SidebarWidgetOut>
}

export enum DeviceType {
  Android = 'ANDROID',
  Desktop = 'DESKTOP',
  Ios = 'IOS',
  WebApp = 'WEB_APP',
}

/** Input for disabling a member. */
export type DisableMemberInput = {
  /** ID of the member. */
  memberId: Scalars['String']
  /** ID of the member to be subsituted if the disabled member as assigned items. */
  substitutionId?: InputMaybe<Scalars['String']>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** A dropdown field item. */
export type DropdownFieldItemOut = {
  __typename?: 'DropdownFieldItemOut'
  /** The item color. */
  color?: Maybe<Scalars['String']>
  /** The item value. */
  value: Scalars['String']
}

/** Input for entity duplicate action. */
export type DuplicateEntityInput = {
  /**
   * The actual data of the entity. This JSON must contain an object with key and values. The keys are
   * considered fields id, and the values considered the value of that field.
   */
  data: Scalars['JSON']
  /** ID of the entity to duplicate from. */
  entityId: Scalars['String']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the layout. */
  layoutId: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for editing permission profile permission levels. */
export type EditPermissionLevelInput = {
  /** The list of action permission levels. */
  actionLevels: Array<ActionPermissionLevelInput>
  /** The list of entity permission levels. */
  entityLevels: Array<EntityPermissionLevelInput>
  /** ID of the permission profile. */
  permissionProfileId: Scalars['Int']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating an embed list. */
export type EmbedListInput = {
  /** The order of the embed list. */
  order: Scalars['Int']
  /** The type of entity the embed list is related to. */
  relationEntityType: EntityType
}

/** Output for an embed list. */
export type EmbedListOut = {
  __typename?: 'EmbedListOut'
  /** The order of the embed list. */
  order: Scalars['Int']
  /** The type of entity the embed list is related to. */
  relationEntityType: EntityType
}

/** Output of search result on an entity. */
export type EntitiesSearchOut = {
  __typename?: 'EntitiesSearchOut'
  /**  list of entities based on query. */
  entities: Array<SimpleEntitiesSearchOut>
  workspaceId: Scalars['String']
}

/** A column for the entity list view. */
export type EntityColumnOut = {
  __typename?: 'EntityColumnOut'
  /** Type of the column for AGGrid. */
  aggridColumnType: AgGridColumnType
  /** The field id. */
  fieldId: Scalars['String']
  /** The field title. */
  fieldTitle: Scalars['String']
  /** The field type. */
  fieldType: FieldType
  /** Whether the field is selected. */
  isSelected: Scalars['Boolean']
}

/** Entity detail setup output. */
export type EntityDetailSetupOut = {
  __typename?: 'EntityDetailSetupOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** Entity type. */
  entityType: EntityType
  /** ID. */
  id: Scalars['String']
  /** Whether the entity inherits access to. */
  inheritanceForAccessTo: Scalars['Boolean']
  /** Whether the entity inherits watcher. */
  inheritanceForWatcher: Scalars['Boolean']
  /** Whether the entity detail setup is active. */
  isActive: Scalars['Boolean']
  isArchived: Scalars['Boolean']
  /** Plural name. */
  pluralName: Scalars['String']
  /** Singular name. */
  singularName: Scalars['String']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  /** Workspace ID. */
  workspaceId: Scalars['String']
}

/** Output for entity list. */
export type EntityEmbedListOut = {
  __typename?: 'EntityEmbedListOut'
  /** The actual data of entityList goes here. This JSON will have */
  data: EntityListDataFieldOut
  entityPluralName: Scalars['String']
  entitySingularName: Scalars['String']
  /** Type of entity. */
  entityType: EntityType
  filter?: Maybe<ViewDataFilterOut>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for getting the entity layout of a data type. */
export type EntityLayoutOut = {
  __typename?: 'EntityLayoutOut'
  /** The number of columns in the layout. */
  colCount: Scalars['Int']
  /** The data types of the layout. */
  dataTypes: Array<LayoutDataTypeOut>
  /** The type of entity. */
  entityType: EntityType
  /** The fields of the layout. */
  fields: Array<Scalars['JSON']>
  /** The ID of the layout. */
  id: Scalars['String']
  /** The number of rows in the layout. */
  rowCount: Scalars['Int']
  /** The title of the layout. */
  title: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Output for the field data in EntityListOut. */
export type EntityListDataFieldOut = {
  __typename?: 'EntityListDataFieldOut'
  /** Fetched data of entities. */
  data: Scalars['JSON']
  /** It's the retrieved columns. */
  headers: Scalars['JSON']
  /** Paginated data. */
  pagination: Scalars['JSON']
}

/** Output for entity list. */
export type EntityListOut = {
  __typename?: 'EntityListOut'
  /** List of activities. */
  activities: Scalars['JSON']
  /** The actual data of entityList goes here. This JSON will have */
  data: EntityListDataFieldOut
  /** Plural name of the entity. */
  entityPluralName: Scalars['String']
  /** Singular name of the entity. */
  entitySingularName: Scalars['String']
  /** Type of entity. */
  entityType: EntityType
  /** Applied filter to this query. */
  filter?: Maybe<ViewDataFilterOut>
  /** Row actions. */
  rowActions: Array<EntityRowActionOut>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/**
 * Input for viewData of the entityList.
 *
 * Here you can customize the way entityList fetches us the result.
 *
 * This customization includes:
 *     - Applying filters on the data.
 *     - Specifying arbitrary columns to get returned.
 *     - Applying sorts in the way data gets represented to you.
 */
export type EntityListViewDataInput = {
  /** The data you want the columns to be sorted or shown based on. */
  columns: Array<ViewDataColumnInput>
  /** The data of the filter you want the query to get run based on. */
  filter?: InputMaybe<ViewDataFilterInput>
}

export type EntityMenuCategoryOut = {
  __typename?: 'EntityMenuCategoryOut'
  icon: Scalars['String']
  items: Array<EntityMenuItemOut>
  key: Scalars['String']
  title: Scalars['String']
}

export type EntityMenuItemOut = {
  __typename?: 'EntityMenuItemOut'
  entityType: EntityType
  icon: Scalars['String']
  isFavorite: Scalars['Boolean']
  title: Scalars['String']
}

/**
 * Output for an entity.
 *
 * The structure of the `sections` is a list. The order in which information may occur is as follows:
 *     1. Information Layout
 *     2. Widgets e.g. KPI, PIPELINE
 *     3. EmbedLists
 */
export type EntityOut = {
  __typename?: 'EntityOut'
  /** List of entity activities. */
  activities: Scalars['JSON']
  /** Plural name of the entity. */
  entityPluralName: Scalars['String']
  /** Singular name of the entity. */
  entitySingularName: Scalars['String']
  /** Type of entity. */
  entityType: EntityType
  /** ID of the entity. */
  id: Scalars['String']
  /** The main data of the entity goes here. */
  sections: Scalars['JSON']
  /** Tags of the entity. */
  tags: Array<SimpleTagOut>
  /** Watchers of the entity. */
  watchers: Array<SimpleWatcherOut>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for entity permission level. */
export type EntityPermissionLevelInput = {
  /** The actual permission in the provided permission type. */
  level: Scalars['Int']
  /** Type of the entity you want to give permission to. */
  permissionType: EntityType
}

/** Output for entity permission level. */
export type EntityPermissionLevelOut = {
  __typename?: 'EntityPermissionLevelOut'
  /** ID of the permission. */
  id: Scalars['Int']
  /** Level of the permission. */
  permissionLevel: Scalars['Int']
  /** EntityType of the permission. */
  permissionType: EntityType
  /** Status of the permission. */
  status: PermissionStatusEnum
}

/** Output for entity row action. */
export type EntityRowActionOut = {
  __typename?: 'EntityRowActionOut'
  /** The ID of the entity. */
  entityId: Scalars['String']
  /** Title of the entity row action. */
  title: Scalars['String']
  /** The type of entity row action. e.g. CHANGE_OWNER, RENAME, DELETE. */
  type: EntityRowActionType
}

export enum EntityRowActionType {
  ChangeOwner = 'CHANGE_OWNER',
  Delete = 'DELETE',
  Rename = 'RENAME',
}

export enum EntityType {
  Case = 'CASE',
  Contact = 'CONTACT',
  Customer = 'CUSTOMER',
  CustomerGroup = 'CUSTOMER_GROUP',
  Deal = 'DEAL',
  Lead = 'LEAD',
  PriceBooks = 'PRICE_BOOKS',
  Product = 'PRODUCT',
  PurchaseOrder = 'PURCHASE_ORDER',
  Quote = 'QUOTE',
  SalesOrder = 'SALES_ORDER',
  Space = 'SPACE',
  Task = 'TASK',
  Vendor = 'VENDOR',
}

/** Entity type output. */
export type EntityTypeOut = {
  __typename?: 'EntityTypeOut'
  /** Entity type. */
  entityType: EntityType
  /** Title. */
  title: Scalars['String']
}

export enum ExportColumnsType {
  All = 'ALL',
  Visible = 'VISIBLE',
}

/** Output for entity list export info. */
export type ExportEntityListInfoOut = {
  __typename?: 'ExportEntityListInfoOut'
  /** An unique id for inquiring export request. */
  exportId: Scalars['String']
}

/** Input for export entity. */
export type ExportEntityListInput = {
  /** The type of columns to export. Default is all. */
  columnsType?: ExportColumnsType
  /** Date format. Default is DD/MM/YYYY. */
  dateFormat?: InputMaybe<DateFormatType>
  /** Entity type. */
  entityType: EntityType
  /** File format. Default is Excel. */
  fileFormat?: ExportFileFormatType
  /** The number of the results in each page. */
  limit?: InputMaybe<Scalars['Int']>
  /** Page number. If not provided, all pages will be exported. */
  page?: InputMaybe<Scalars['Int']>
  /** Time format. Default is 12h. */
  timeFormat?: InputMaybe<TimeFormatType>
  /** The custom view data you wish to get back the result based on. */
  viewData?: InputMaybe<EntityListViewDataInput>
  /** The ID of the custom view you wish to get back the result based on. */
  viewId?: InputMaybe<Scalars['String']>
  /** Workspace id. */
  workspaceId: Scalars['String']
}

/** Inpurt for entity list export inquiry. */
export type ExportEntityListInquiryInput = {
  /** An unique id for inquiring export request. */
  exportId: Scalars['String']
}

/** Output for entity list export result. */
export type ExportEntityListResultOut = {
  __typename?: 'ExportEntityListResultOut'
  /** Export status. */
  status: ExportStatus
  /** Exported file download url. Only set if export is succeeded. */
  url?: Maybe<Scalars['String']>
}

export enum ExportFileFormatType {
  Csv = 'CSV',
}

export enum ExportStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Succeed = 'SUCCEED',
}

export enum FieldType {
  AccessTo = 'ACCESS_TO',
  Address = 'ADDRESS',
  AutoNumber = 'AUTO_NUMBER',
  Currency = 'CURRENCY',
  Datetime = 'DATETIME',
  DelegateTo = 'DELEGATE_TO',
  Dropdown = 'DROPDOWN',
  Email = 'EMAIL',
  Lookup = 'LOOKUP',
  MultipleLookup = 'MULTIPLE_LOOKUP',
  MultiSelectDropdown = 'MULTI_SELECT_DROPDOWN',
  Numeric = 'NUMERIC',
  Owner = 'OWNER',
  Phone = 'PHONE',
  StatusDropdown = 'STATUS_DROPDOWN',
  Tag = 'TAG',
  Text = 'TEXT',
  TextArea = 'TEXT_AREA',
  TypeDropdown = 'TYPE_DROPDOWN',
  Url = 'URL',
  User = 'USER',
  Watcher = 'WATCHER',
}

/** Input for file download request. */
export type FileDownloadRequestInput = {
  /** ID of the attachment to download. */
  attachmentId: Scalars['String']
}

/** Output for file download request. */
export type FileDownloadRequestOut = {
  __typename?: 'FileDownloadRequestOut'
  /** URL to download the attachment. */
  url: Scalars['String']
}

/** Output for upload credential. */
export type FileManagementUploadCredential = {
  __typename?: 'FileManagementUploadCredential'
  /** ID of the file being uploaded. */
  fileId: Scalars['String']
  /** Name of the file. */
  fileName: Scalars['String']
  /** ID of the upload request in the file management service. */
  id: Scalars['String']
  /** The section of the file being uploaded. */
  section: FileManagerSectionType
  /** Status of the uploading file. */
  status: FileManagerStatus
  /** Information required for uploading the file. */
  uploadData: FileManagementUploadDataOut
}

/** Output for files upload data field. */
export type FileManagementUploadDataFieldsOut = {
  __typename?: 'FileManagementUploadDataFieldsOut'
  /** Amazon key. */
  key: Scalars['String']
  /** Amazon policy. */
  policy: Scalars['String']
  /** Amazon algorithm. */
  xAmzAlgorithm: Scalars['String']
  /** Amazon credential. */
  xAmzCredential: Scalars['String']
  /** Amazon date. */
  xAmzDate: Scalars['String']
  /** Amazon signature. */
  xAmzSignature: Scalars['String']
}

/** Ouput for upload data. */
export type FileManagementUploadDataOut = {
  __typename?: 'FileManagementUploadDataOut'
  /** The upload data fields info. */
  fields: FileManagementUploadDataFieldsOut
  /** URL of the upload. */
  url: Scalars['String']
}

export enum FileManagerSectionType {
  Attachment = 'ATTACHMENT',
  ProfilePic = 'PROFILE_PIC',
}

export enum FileManagerStatus {
  Available = 'AVAILABLE',
  Deleted = 'DELETED',
  ReUpload = 'RE_UPLOAD',
  UploadRequest = 'UPLOAD_REQUEST',
}

/** Input for the condition of the filter. */
export type FilterConditionInput = {
  /** The bind type filter. e.g. AND, OR. Defaults to AND. */
  bindOperator?: InputMaybe<BindOperatorType>
  /** The ID of the field which applying the filter on. */
  fieldId: Scalars['String']
  /** The operator of the filter. */
  operator: FilterConditionOperatorInput
}

/**
 * Input for the operator of the condition.
 *
 * Conditions are used in the filter inside viewData.
 *
 * If the type is `IN_RANGE`, then the value could accept an `array` in the following manner [$gte, $lt].
 */
export type FilterConditionOperatorInput = {
  /** The type of the operator of the condition. e.g. EQUALS, NOT_EQUALS, IN_RANGE, LT. */
  type: OperatorType
  /** The value of the condition. */
  value?: InputMaybe<Scalars['GenericMapping']>
}

/**
 * Output for the operator of the condition.
 *
 * Conditions are used in the filter inside viewData.
 */
export type FilterConditionOperatorOut = {
  __typename?: 'FilterConditionOperatorOut'
  /** The type of the operator of the condition. e.g. EQUALS, NOT_EQUALS, IN_RANGE, LT. */
  type: OperatorType
  /** The value of the condition. */
  value?: Maybe<Scalars['GenericMapping']>
}

/** Output for the condition of the filter. */
export type FilterConditionOut = {
  __typename?: 'FilterConditionOut'
  /** The bind type filter. e.g. AND, OR. Defaults to AND. */
  bindOperator?: Maybe<BindOperatorType>
  /** The ID of the field which applying the filter on. */
  fieldId: Scalars['String']
  fieldType: FieldType
  /** The operator of the filter. */
  operator: FilterConditionOperatorOut
}

/** Input for forgot password. */
export type ForgotPasswordInput = {
  /** User device type. */
  deviceType: DeviceType
  /** User email. */
  email: Scalars['String']
}

export type FormDropdownItemOut = {
  __typename?: 'FormDropdownItemOut'
  displayName?: Maybe<Scalars['String']>
  id: Scalars['String']
  value: Scalars['String']
}

/** Output data for retrieve members item. */
export type GenericMemberItemOut = {
  __typename?: 'GenericMemberItemOut'
  /** The datetime in which this member got created. */
  createdAt: Scalars['DateTime']
  /** The user, who created this member. */
  createdBy: SimpleUserProfileOut
  /** ID of the member. */
  memberId: Scalars['String']
  /**  Type of the member. */
  memberType: MemberTypeEnum
  /** Name of the member. */
  name?: Maybe<Scalars['String']>
  /** List of user profiles in this member. */
  profiles: Array<SimpleUserProfileOut>
  /** Status of the member. */
  status: MemberStatusEnum
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/**
 * Get all columns for a given entity type.
 *
 * This is used to get the columns for the entity list view.
 *
 * If no view id is provided, the default view will be used.
 */
export type GetAllEntityColumnsInput = {
  /** The entity type. */
  entityType: EntityType
  /** The view id. */
  viewId?: InputMaybe<Scalars['String']>
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/** Get all available filters for a given entity type. */
export type GetAvailableFiltersInput = {
  /** The entity type. */
  entityType: EntityType
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/** Input for getting a list of custom views. */
export type GetCustomViewListInput = {
  /** The type of entity the custom views belong to. */
  entityType: EntityType
  /** The ID of the workspace the custom views belong to. */
  workspaceId: Scalars['String']
}

/** Input for getting search result of an entity. */
export type GetEntitiesSearchInput = {
  /** The type of entity. */
  entityType?: InputMaybe<EntityType>
  limit?: Scalars['Int']
  page?: Scalars['Int']
  /** The query of the items. */
  query: Scalars['String']
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting the entity embed list. */
export type GetEntityEmbedListInput = {
  /** The ID of the entity. */
  entityId: Scalars['String']
  entityType: EntityType
  /** The number of the results in each page. */
  limit?: Scalars['Int']
  /** The number of the page you want the data returned. Defaults to 1. */
  page?: Scalars['Int']
  /** The type of relation entity. */
  relationEntityType: EntityType
  /** The custom view data you wish to get back the result based on. */
  viewData?: InputMaybe<EntityListViewDataInput>
  /** The ID of the custom view you wish to get back the result based on. */
  viewId?: InputMaybe<Scalars['String']>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting the entity list. */
export type GetEntityListInput = {
  entityType: EntityType
  /** The number of the results in each page. */
  limit?: Scalars['Int']
  /** The number of the page you want the data returned. Defaults to 1. */
  page?: Scalars['Int']
  /** The custom view data you wish to get back the result based on. */
  viewData?: InputMaybe<EntityListViewDataInput>
  /** The ID of the custom view you wish to get back the result based on. */
  viewId?: InputMaybe<Scalars['String']>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting entity types. */
export type GetEntityTypesInput = {
  /** Workspace ID. */
  workspaceId: Scalars['String']
}

/** Input for getting a list of layouts. */
export type GetLayoutListInput = {
  /** The type of entity. */
  entityType: EntityType
  limit?: Scalars['Int']
  page?: Scalars['Int']
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Input for listing custom fields. */
export type GetListFieldInput = {
  /** The type of the entity. */
  entityType: EntityType
  includeCustomFields?: Scalars['Boolean']
  includeStaticFields?: Scalars['Boolean']
  /** The number of the results in each page. */
  limit?: Scalars['Int']
  /** The number of the page you want the data returned. Defaults to 1. */
  page?: Scalars['Int']
  /** The columns you want to sort by. */
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** The id of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting lookup field items. */
export type GetLookupFieldItemsInput = {
  /** The type of entity. */
  entityType: EntityType
  /** (str): The ID of the lookup field. */
  lookupFieldId: Scalars['String']
  /** The query of the items. */
  query?: InputMaybe<Scalars['String']>
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting a permission profile. */
export type GetPermissionProfileInput = {
  /** ID of the permission profile. */
  permissionProfileId: Scalars['Int']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting the list of permission profiles. */
export type GetPermissionProfileListInput = {
  /** The number of items per page. */
  limit?: Scalars['Int']
  /** The page number. */
  page?: Scalars['Int']
  query?: InputMaybe<Scalars['String']>
  /** The list of sorted columns. */
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for getting pipeline list. */
export type GetPipelineListInput = {
  /** Type of entity. */
  entityType: EntityType
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

export type GetUserFieldItemsInput = {
  query?: InputMaybe<Scalars['String']>
  workspaceId: Scalars['String']
}

/** Input for getting the user permissions. */
export type GetUserPermissionInput = {
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output of the user permissions. */
export type GetUserPermissionOut = {
  __typename?: 'GetUserPermissionOut'
  /** This JSON is an object keys indication permission_type and values showing permission level. */
  permission: Scalars['JSON']
}

/** Input for get_user_profile_list */
export type GetUserProfileListInput = {
  /** The limit of items per page. */
  limit?: Scalars['Int']
  /** The page number. */
  page?: Scalars['Int']
  /** The list of sorted columns. */
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/** Input for retrieving a list of widgets. */
export type GetWidgetListInput = {
  /** The type of entity the widgets belong to. */
  entityType: EntityType
  /** The ID of the workspace the widgets belong to. */
  workspaceId: Scalars['String']
}

/** Input for signin with google. */
export type GoogleSigninInput = {
  /** Device type. */
  deviceType: DeviceType
  /** Google ID token. */
  idToken: Scalars['String']
}

/** Input for signup with google. */
export type GoogleSignupInput = {
  /** Device type. */
  deviceType: DeviceType
  /** Google ID token. */
  idToken: Scalars['String']
}

/**
 * Input for creating a information layout.
 *
 * The number of columns is fixed to 4.
 */
export type InformationLayoutInput = {
  /** The fields of the information layout. */
  fields: Array<LayoutField>
  /** The order of the information layout. */
  order: Scalars['Int']
  /** The number of rows in the layout. */
  rowCount: Scalars['Int']
}

/** Output for an information layout. */
export type InformationLayoutOut = {
  __typename?: 'InformationLayoutOut'
  /** The fields of the information layout. */
  fields: Array<Scalars['JSON']>
  /** The order of the information layout. */
  order: Scalars['Int']
  /** The number of rows in the layout. */
  rowCount: Scalars['Int']
}

/** Output for invitation item. */
export type InvitationItemOut = {
  __typename?: 'InvitationItemOut'
  /** The time the invitation got created. */
  createdAt: Scalars['DateTime']
  /** Profile of the user who created this invitation. */
  createdBy: SimpleUserProfileOut
  /** The email of the user. */
  email?: Maybe<Scalars['String']>
  /** The expiration time. */
  expireDate: Scalars['DateTime']
  /** ID of the invitation. */
  invitationId: Scalars['String']
  /** Does mfa is required on this user. */
  mfaRequired: Scalars['Boolean']
  /** Name of the user. */
  name?: Maybe<Scalars['String']>
  /** Info of the permission profile. */
  permissionProfile: InvitePermissionProfileOut
  /** The status of the invitation. */
  status: Scalars['String']
  /** Token of the invitation which the incomming user must provide in order to be accepted. */
  token: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for invitation list. */
export type InvitationListOut = {
  __typename?: 'InvitationListOut'
  /** The invitation list. */
  invitations: Array<InvitationItemOut>
  /** The pagination data. */
  pagination: PaginationDataOut
}

/** Output for permission profile of an invitation. */
export type InvitePermissionProfileOut = {
  __typename?: 'InvitePermissionProfileOut'
  /** Descriptoin of the permission profile. */
  description?: Maybe<Scalars['String']>
  /** ID of the permission profile. */
  id: Scalars['Int']
  /** ID of the permission profile members. */
  members?: Maybe<Array<Scalars['String']>>
  /** Name of permission profile. */
  name: Scalars['String']
}

/** Output entities search data. */
export type ItemsEntitiesSearchOut = {
  __typename?: 'ItemsEntitiesSearchOut'
  /** Display name of the entities search data. */
  displayName: Scalars['String']
  /** Entity type of the entities search data. */
  entityType?: Maybe<EntityType>
  /** ID of the entities search data. */
  id: Scalars['String']
}

/** Output for label out. */
export type LabelOut = {
  __typename?: 'LabelOut'
  /** Type of the entity. */
  entityType: EntityType
  /** Label ID. */
  id: Scalars['String']
  /** Name of the label. */
  name: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for getting the status of a layout. */
export type LayoutDataStatusOut = {
  __typename?: 'LayoutDataStatusOut'
  /** The color of the layout. */
  color: Scalars['String']
  /** The ID of the layout. */
  id: Scalars['String']
  /** The stage of the layout. */
  stage: StatusStage
  /** The title of the layout. */
  title: Scalars['String']
}

/** Output for getting the data types of a layout. */
export type LayoutDataTypeOut = {
  __typename?: 'LayoutDataTypeOut'
  /** The ID of the layout. */
  id: Scalars['String']
  /** Whether the layout is the default layout. */
  isDefault: Scalars['Boolean']
  /** The status of the layout. */
  statusList: Array<LayoutDataStatusOut>
  /** The title of the layout. */
  title: Scalars['String']
}

/** Input for creating a layout field. */
export type LayoutField = {
  /** The column of the field. */
  col?: InputMaybe<Scalars['Int']>
  /** The number of columns which the field spans. */
  colNum?: InputMaybe<Scalars['Int']>
  /** The ID of the custom field. */
  id: Scalars['String']
  /** The row of the field. */
  row?: InputMaybe<Scalars['Int']>
  /** The number of rows which the field spans. */
  rowNum?: InputMaybe<Scalars['Int']>
}

/** Output for getting a layout. */
export type LayoutListItemOut = {
  __typename?: 'LayoutListItemOut'
  /** The date and time the layout was created. */
  createdAt: Scalars['DateTime']
  createdBy: SimpleUserProfileOut
  /** The IDs of the data types the layout belongs to. */
  dataTypes: Array<SimpleLayoutDataTypeOut>
  /** The ID of the layout. */
  id: Scalars['String']
  /** The title of the layout. */
  title: Scalars['String']
}

/** Output for getting a list of layouts. */
export type LayoutListOut = {
  __typename?: 'LayoutListOut'
  /** The type of entity. */
  entityType: EntityType
  /** The list of layouts. */
  layouts: Array<LayoutListItemOut>
  /** The pagination of the list. */
  pagination: PaginationDataOut
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Output for getting a layout. */
export type LayoutOut = {
  __typename?: 'LayoutOut'
  /** The number of columns in the layout. */
  colCount: Scalars['Int']
  /** The data types of the layout. */
  dataTypes: Array<LayoutDataTypeOut>
  /** The type of entity. */
  entityType: EntityType
  /** The fields of the layout. */
  fields: Array<SimpleCustomFieldOut>
  /** The ID of the layout. */
  id: Scalars['String']
  /** The number of rows in the layout. */
  rowCount: Scalars['Int']
  /** The title of the layout. */
  title: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Output data for a list of custom fields. */
export type ListCustomFieldOut = {
  __typename?: 'ListCustomFieldOut'
  /** The data of the list of custom fields. */
  customFields: Array<CustomFieldListItemOut>
  /** The type of the entity. */
  entityType: EntityType
  /** The pagination data. */
  pagination: PaginationDataOut
  /** The id of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for listing entity attachments. */
export type ListEntityAttachmentsInput = {
  /** The id of the entity. */
  entityId: Scalars['String']
  /** The type of the entity. */
  entityType: EntityType
  /** The number of the results in each page. */
  limit?: Scalars['Int']
  /** The number of the page you want the data returned. Defaults to 1. */
  page?: Scalars['Int']
  /** The id of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for listing workspaces. */
export type ListWorkspacesInput = {
  /** ID of the company the workspace belongs to. */
  companyId: Scalars['String']
}

/** Output of lookup field item. */
export type LookupFieldItemOut = {
  __typename?: 'LookupFieldItemOut'
  /** ID of the lookup field item. */
  id: Scalars['String']
  /** value of the lookup field item. */
  value: Scalars['String']
}

/** Input for manipulating member permission profile. */
export type MemberPermissionProfileInput = {
  memberIds: Array<Scalars['String']>
  /** ID of the permission profile. */
  permissionProfileId: Scalars['Int']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

export enum MemberStatusEnum {
  Active = 'ACTIVE',
  Deactive = 'DEACTIVE',
}

export enum MemberTypeEnum {
  Team = 'TEAM',
  User = 'USER',
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptInvitation: InvitationItemOut
  /** Add user to a permission profile. */
  addMemberToPermissionProfile: Ok
  /** Add member to entity watchers. */
  addToEntityWatchers: Ok
  /** Archive a status. */
  archiveStatus: Ok
  /** Archive a type. */
  archiveType: Ok
  /** Assign tag to an Entity. */
  assignTagToEntity: Ok
  /** Attach file to an entity. */
  attachFileToEntity: Array<AttachFileToEntityOut>
  /** Bulk update bunch of entities. */
  bulkUpdateEntityAction: BulkUpdateEntityActionOut
  changeEmail: TempUserTokenOut
  changePassword: Ok
  /** Check if the member has any assigned items to himself. */
  checkMemberAssignedItems: Ok
  /** Clone a custom view. */
  cloneCustomView: CloneCustomViewOut
  /** Complete forgot password */
  completeForgotPassword: Ok
  /** Complete reset password */
  completeResetPassword: Ok
  /** Create a company. */
  createCompany: CompanyOut
  /** Create a custom view. */
  createCustomView: CustomViewOut
  /** Create an Entity. */
  createEntity: CreateEntityOut
  /** Creates comment on an Entity. */
  createEntityComment: CommentOut
  /** Create a custom field. */
  createField: CustomFieldOut
  createInvitation: InvitationItemOut
  /** Create a label. */
  createLabel: LabelOut
  /** Create a layout. */
  createLayout: CreateLayoutOut
  /** Create permission profile. */
  createPermissionProfile: PermissionProfileOut
  /** Create pipeline */
  createPipeline: CreatePipelineOut
  /** Create a status. */
  createStatus: StatusOut
  /** Creates tag on an Entity. */
  createTag: TagOut
  createTeam: GenericMemberItemOut
  /** Create a type. */
  createType: TypeOut
  /** Create a workspace. */
  createWorkspace: WorkspaceOut
  /** DeAssign tag from an Entity. */
  deassignTagFromEntity: Ok
  declineInvitation: InvitationItemOut
  /** Delete an attachment. */
  deleteAttachment: Ok
  /** Delete a company. */
  deleteCompany: Ok
  /** Delete a custom view. */
  deleteCustomView: Ok
  /** Deletes an Entity's comment. */
  deleteEntityComment: Ok
  /** Delete a custom field. */
  deleteField: Ok
  /** Delete a label. */
  deleteLabel: Ok
  /** Delete a layout. */
  deleteLayout: Ok
  /** Delete a status. */
  deleteStatus: Ok
  /** Deletes a Tag's value. */
  deleteTag: Ok
  /** Delete a type. */
  deleteType: Ok
  /** Delete a workspace. */
  deleteWorkspace: Ok
  disableInvitation: InvitationItemOut
  disableMember: GenericMemberItemOut
  /** Duplicate an Entity. */
  duplicateEntity: CreateEntityOut
  /** Edits an Entity's comment. */
  editEntityComment: CommentOut
  /** Edit permissions of a permission profile. */
  editPermissionLevels: PermissionProfileOut
  editTeam: GenericMemberItemOut
  enableMember: GenericMemberItemOut
  /** Forgot password */
  forgotPassword: VerifyForgotPasswordTokenOut
  logout: Ok
  /** Refresh token */
  refreshToken: UserTokenOut
  /** Remove from entity watchers. */
  removeFromEntityWatchers: Ok
  /** Remove user from a permission profile. */
  removeMemberFromPermissionProfile: Ok
  /** Resend forgot password otp */
  resendForgotPasswordOtp: VerifyForgotPasswordTokenOut
  /** Resend reset password otp */
  resendResetPasswordOtp: VerifyResetPasswordTokenOut
  /** Reset password */
  resetPassword: VerifyResetPasswordTokenOut
  sendInvitationEmail: Ok
  /** Set a custom view as default. */
  setDefaultCustomView: Ok
  /** Set a custom view as favorite. */
  setFavoriteCustomView: Ok
  setFavoriteEntity: Ok
  /** Set the default type. */
  setTypeAsDefault: Ok
  /** Signin user */
  signin: UserTokenOut
  /** Signin with google */
  signinWithGoogle: UserTokenOut
  /** Signup user */
  signup: TempUserTokenOut
  /** Signup with google */
  signupWithGoogle: UserTokenOut
  /** Unarchive a status. */
  unarchiveStatus: Ok
  /** Unarchive a type. */
  unarchiveType: Ok
  /** Unset a custom view as favorite. */
  unsetFavoriteCustomView: Ok
  unsetFavoriteEntity: Ok
  updateAccountProfile: AccountProfileOut
  /** Update an attachment. */
  updateAttachment: Ok
  /** Update a company. */
  updateCompany: CompanyOut
  /** Update a custom view. */
  updateCustomView: Ok
  /** Update a custom view title. */
  updateCustomViewTitle: Ok
  /** Update a detail view. */
  updateDetailView: UpdateDetailViewOut
  /** Update an Entity. */
  updateEntity: UpdateEntityOut
  /** Update entity detail setup. */
  updateEntityDetailSetup: EntityDetailSetupOut
  /** Update a custom field. */
  updateField: UpdatedCustomFieldOut
  updateInvitation: InvitationItemOut
  /** Update a label. */
  updateLabel: LabelOut
  /** Update a layout. */
  updateLayout: UpdateLayoutOut
  /** Update pipeline stage */
  updatePipelineStage: Ok
  /** Update a status. */
  updateStatus: StatusOut
  /** Updates a Tag's value. */
  updateTag: TagOut
  /** Update a type. */
  updateType: TypeOut
  updateUserProfile: UserProfileOut
  updateUserProfileAsAdmin: UpdateUserProfileAsAdminOut
  /** Update a workspace. */
  updateWorkspace: WorkspaceOut
  verifyChangeEmail: Ok
  /** Verify forgot password */
  verifyForgotPassword: ChangePasswordTokenOut
  /** Verify otp */
  verifyOtp: VerifiedUserOut
  /** Verify reset password */
  verifyResetPassword: ChangePasswordTokenOut
}

export type MutationAcceptInvitationArgs = {
  data: TokenInvitationInput
}

export type MutationAddMemberToPermissionProfileArgs = {
  data: MemberPermissionProfileInput
}

export type MutationAddToEntityWatchersArgs = {
  data: UpdateEntityWatchersInput
}

export type MutationArchiveStatusArgs = {
  data: ArchiveStatusInput
}

export type MutationArchiveTypeArgs = {
  data: ArchiveTypeInput
}

export type MutationAssignTagToEntityArgs = {
  data: AssignTagToEntityInput
}

export type MutationAttachFileToEntityArgs = {
  data: AttachFilesToEntityInput
}

export type MutationBulkUpdateEntityActionArgs = {
  data: BulkUpdateEntityActionInput
}

export type MutationChangeEmailArgs = {
  data: ChangeEmailInput
}

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput
}

export type MutationCheckMemberAssignedItemsArgs = {
  data: RetrieveMemberInput
}

export type MutationCloneCustomViewArgs = {
  data: CloneCustomViewInput
}

export type MutationCompleteForgotPasswordArgs = {
  data: CompleteForgotPasswordInput
}

export type MutationCompleteResetPasswordArgs = {
  data: CompleteResetPasswordInput
}

export type MutationCreateCompanyArgs = {
  data: CreateCompanyInput
}

export type MutationCreateCustomViewArgs = {
  data: CreateCustomViewInput
}

export type MutationCreateEntityArgs = {
  data: CreateEntityInput
}

export type MutationCreateEntityCommentArgs = {
  data: CommentCreateInput
}

export type MutationCreateFieldArgs = {
  data: CreateFieldInput
}

export type MutationCreateInvitationArgs = {
  data: CreateInvitationInput
}

export type MutationCreateLabelArgs = {
  data: CreateLabelInput
}

export type MutationCreateLayoutArgs = {
  data: CreateLayoutInput
}

export type MutationCreatePermissionProfileArgs = {
  data: CreatePermissionProfileInput
}

export type MutationCreatePipelineArgs = {
  data: CreatePipelineInput
}

export type MutationCreateStatusArgs = {
  data: CreateStatusInput
}

export type MutationCreateTagArgs = {
  data: TagCreateInput
}

export type MutationCreateTeamArgs = {
  data: CreateTeamInput
}

export type MutationCreateTypeArgs = {
  data: CreateTypeInput
}

export type MutationCreateWorkspaceArgs = {
  data: CreateWorkspaceInput
}

export type MutationDeassignTagFromEntityArgs = {
  data: DeassignTagFromEntityInput
}

export type MutationDeclineInvitationArgs = {
  data: TokenInvitationInput
}

export type MutationDeleteAttachmentArgs = {
  data: DeleteAttachmentInput
}

export type MutationDeleteCompanyArgs = {
  data: DeleteCompanyInput
}

export type MutationDeleteCustomViewArgs = {
  data: DeleteCustomViewInput
}

export type MutationDeleteEntityCommentArgs = {
  id: Scalars['String']
}

export type MutationDeleteFieldArgs = {
  data: DeleteFieldInput
}

export type MutationDeleteLabelArgs = {
  data: DeleteLabelInput
}

export type MutationDeleteLayoutArgs = {
  data: DeleteLayoutInput
}

export type MutationDeleteStatusArgs = {
  data: DeleteStatusInput
}

export type MutationDeleteTagArgs = {
  data: TagDeleteInput
}

export type MutationDeleteTypeArgs = {
  data: DeleteTypeInput
}

export type MutationDeleteWorkspaceArgs = {
  data: DeleteWorkspaceInput
}

export type MutationDisableInvitationArgs = {
  data: RetrieveInvitationInput
}

export type MutationDisableMemberArgs = {
  data: DisableMemberInput
}

export type MutationDuplicateEntityArgs = {
  data: DuplicateEntityInput
}

export type MutationEditEntityCommentArgs = {
  data: CommentEditInput
}

export type MutationEditPermissionLevelsArgs = {
  data: EditPermissionLevelInput
}

export type MutationEditTeamArgs = {
  data: UpdateTeamInput
}

export type MutationEnableMemberArgs = {
  data: RetrieveMemberInput
}

export type MutationForgotPasswordArgs = {
  data: ForgotPasswordInput
}

export type MutationRefreshTokenArgs = {
  data: RefreshTokenInput
}

export type MutationRemoveFromEntityWatchersArgs = {
  data: UpdateEntityWatchersInput
}

export type MutationRemoveMemberFromPermissionProfileArgs = {
  data: RemoveMemberFromPermissionProfileInput
}

export type MutationResendForgotPasswordOtpArgs = {
  data: ResendOtpInput
}

export type MutationResendResetPasswordOtpArgs = {
  data: ResendOtpInput
}

export type MutationSendInvitationEmailArgs = {
  data: RetrieveInvitationInput
}

export type MutationSetDefaultCustomViewArgs = {
  data: SetDefaultCustomViewInput
}

export type MutationSetFavoriteCustomViewArgs = {
  data: SetFavoriteCustomViewInput
}

export type MutationSetFavoriteEntityArgs = {
  data: SetFavoriteEntityInput
}

export type MutationSetTypeAsDefaultArgs = {
  data: SetTypeAsDefaultInput
}

export type MutationSigninArgs = {
  data: SigninInput
}

export type MutationSigninWithGoogleArgs = {
  data: GoogleSigninInput
}

export type MutationSignupArgs = {
  data: SignupInput
}

export type MutationSignupWithGoogleArgs = {
  data: GoogleSignupInput
}

export type MutationUnarchiveStatusArgs = {
  data: UnarchiveStatusInput
}

export type MutationUnarchiveTypeArgs = {
  data: UnarchiveTypeInput
}

export type MutationUnsetFavoriteCustomViewArgs = {
  data: UnsetFavoriteCustomViewInput
}

export type MutationUnsetFavoriteEntityArgs = {
  data: UnsetFavoriteEntityInput
}

export type MutationUpdateAccountProfileArgs = {
  data: UpdateAccountProfileInput
}

export type MutationUpdateAttachmentArgs = {
  data: UpdateAttachmentInput
}

export type MutationUpdateCompanyArgs = {
  data: UpdateCompanyInput
}

export type MutationUpdateCustomViewArgs = {
  data: UpdateCustomViewInput
}

export type MutationUpdateCustomViewTitleArgs = {
  data: UpdateCustomViewTitleInput
}

export type MutationUpdateDetailViewArgs = {
  data: UpdateDetailViewInput
}

export type MutationUpdateEntityArgs = {
  data: UpdateEntityInput
}

export type MutationUpdateEntityDetailSetupArgs = {
  data: UpdateEntityDetailSetupInput
}

export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput
}

export type MutationUpdateInvitationArgs = {
  data: UpdateInvitationInput
}

export type MutationUpdateLabelArgs = {
  data: UpdateLabelInput
}

export type MutationUpdateLayoutArgs = {
  data: UpdateLayoutInput
}

export type MutationUpdatePipelineStageArgs = {
  data: UpdatePipeLineStageInput
}

export type MutationUpdateStatusArgs = {
  data: UpdateStatusInput
}

export type MutationUpdateTagArgs = {
  data: TagUpdateInput
}

export type MutationUpdateTypeArgs = {
  data: UpdateTypeInput
}

export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput
}

export type MutationUpdateUserProfileAsAdminArgs = {
  data: UpdateUserProfileAsAdminInput
}

export type MutationUpdateWorkspaceArgs = {
  data: UpdateWorkspaceInput
}

export type MutationVerifyChangeEmailArgs = {
  data: OtpInput
}

export type MutationVerifyForgotPasswordArgs = {
  data: VerifyForgotPasswordInput
}

export type MutationVerifyOtpArgs = {
  data: OtpInput
}

export type MutationVerifyResetPasswordArgs = {
  data: VerifyResetPasswordInput
}

/** OK type is used when the operation is successful. */
export type Ok = {
  __typename?: 'OK'
  ok: Scalars['Boolean']
}

/** Input for verify otp. */
export type OtpInput = {
  /** OTP code. */
  code: Scalars['Int']
  /** Temp token. */
  tempToken: Scalars['String']
}

export enum OperatorType {
  Contains = 'CONTAINS',
  Empty = 'EMPTY',
  EndsWith = 'ENDS_WITH',
  Equals = 'EQUALS',
  Gt = 'GT',
  Gte = 'GTE',
  InLastTime = 'IN_LAST_TIME',
  InRange = 'IN_RANGE',
  Lt = 'LT',
  Lte = 'LTE',
  NotContains = 'NOT_CONTAINS',
  NotEmpty = 'NOT_EMPTY',
  NotEquals = 'NOT_EQUALS',
  StartsWith = 'STARTS_WITH',
}

/** Pagination data. */
export type PaginationDataOut = {
  __typename?: 'PaginationDataOut'
  /** The number of items per page. */
  limit: Scalars['Int']
  /** The current page. */
  page: Scalars['Int']
  /** The total number of pages. */
  pageCount: Scalars['Int']
  /** The total number of items. */
  resultCount: Scalars['Int']
}

/** Output for the list of permission profiles. */
export type PermissionProfileListOut = {
  __typename?: 'PermissionProfileListOut'
  pagination: PaginationDataOut
  /** List of permission profiles. */
  permissionProfiles: Array<PermissionProfileOut>
}

export type PermissionProfileMemberOut = {
  __typename?: 'PermissionProfileMemberOut'
  createdAt?: Maybe<Scalars['DateTime']>
  createdBy: PermissionSimpleUserProfileOut
  memberId: Scalars['String']
  memberType: MemberTypeEnum
  name?: Maybe<Scalars['String']>
  profiles: Array<PermissionSimpleUserProfileOut>
  status: MemberStatusEnum
  workspaceId: Scalars['String']
}

/** Output for a permission Profile. */
export type PermissionProfileOut = {
  __typename?: 'PermissionProfileOut'
  /** Permission profile permission levels relating to the actions. */
  actionLevels: Array<ActionPermissionLevelOut>
  createdAt: Scalars['DateTime']
  createdBy: SimpleUserProfileOut
  /** Description for permission profile. */
  description?: Maybe<Scalars['String']>
  /** Permission profile permission levels relating to entities. */
  entityLevels: Array<EntityPermissionLevelOut>
  /** ID of the permission profile. */
  id: Scalars['Int']
  /** Whether the permission profile is the admin or not. */
  isAdmin: Scalars['Boolean']
  /** List of members in this permission profile. */
  members?: Maybe<Array<PermissionProfileMemberOut>>
  /** Name of the permission profile. */
  name: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  /** ID of the permission profile workspace. */
  workspaceId: Scalars['String']
}

export type PermissionSimpleUserProfileOut = {
  __typename?: 'PermissionSimpleUserProfileOut'
  firstName: Scalars['String']
  id: Scalars['String']
  lastName: Scalars['String']
  middleName?: Maybe<Scalars['String']>
  profilePicture?: Maybe<Scalars['String']>
  userId: Scalars['Int']
}

export enum PermissionStatusEnum {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Hidden = 'HIDDEN',
}

/** Input for pipeline step. */
export type PipelineStepInput = {
  /** Guidance for step. */
  guidance?: InputMaybe<Scalars['String']>
  /** List of key custom field ids. */
  keyFields?: InputMaybe<Array<Scalars['String']>>
  /** ID of status. */
  statusId: Scalars['String']
}

export type ProfileAddressInput = {
  addressLine1?: InputMaybe<Scalars['String']>
  addressLine2?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  zipCode?: InputMaybe<Scalars['String']>
}

export type ProfileAddressOut = {
  __typename?: 'ProfileAddressOut'
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}

/** Output for profile main feed. */
export type ProfileMainFeedOut = {
  __typename?: 'ProfileMainFeedOut'
  /** List of companies */
  companies: Array<CompanyListItemOut>
}

export type Query = {
  __typename?: 'Query'
  accountProfile: AccountProfileOut
  /** Check if a layout is the default layout. */
  checkDefaultLayout: Ok
  /** Check if a domain name is available. */
  checkDomainName: Ok
  /** Check if a workspace key is unique. */
  checkWorkspaceKey: Ok
  /** Get the form data for creating a company. */
  companyFormData: CreateCompanyFormDataOut
  /** Get all countries with a dial code and flag. */
  countriesWithDialCodeAndFlag: Array<CountryDialCodeFlagOut>
  currentUser: UserOut
  /** Retrieve a list of widgets. */
  detailViewWidgetList: WidgetListOut
  /** Retrieve list of entities */
  entityList: EntityListOut
  /** Get entity types. */
  entityTypes: Array<EntityTypeOut>
  /** Export entity list */
  exportEntityList: ExportEntityListInfoOut
  /** Export entity list inquiry */
  exportEntityListInquiry: ExportEntityListResultOut
  /** Request to get attachment download url. */
  fileDownloadRequest: FileDownloadRequestOut
  /** Get all columns for a given entity type. */
  getAllEntityColumns: Array<EntityColumnOut>
  /** Get all available filters for a given entity type. */
  getAvailableFilters: Array<AvailableFilterOut>
  /** Retrieve lookup field items. */
  getLookupFieldItems: Array<LookupFieldItemOut>
  /** Retrieve available items for user fields. */
  getUserFieldItems: UserFieldItemsOut
  /** Get a list of layouts. */
  layoutList: LayoutListOut
  /** List companies. */
  listCompanies: Array<CompanyOut>
  /** Get all custom views for a given entity type. */
  listCustomView: Array<CustomViewListItemOut>
  /** List entity attachments. */
  listEntityAttachments: AttachmentFilesOut
  /** List custom fields. */
  listField: ListCustomFieldOut
  /** List workspaces. */
  listWorkspaces: Array<WorkspaceOut>
  /** Get pipeline list */
  pipelineList: Array<SimplePipelineOut>
  profileMainFeed: ProfileMainFeedOut
  resolveRouteParameters: ResolveRouteParametersOut
  /** Retrieve a company. */
  retrieveCompany: CompanyOut
  retrieveCurrentUserProfile: UserProfileOut
  /** Retrieve a detail view. */
  retrieveDetailView: DetailViewOut
  /**
   * Retrieve an entity layout for duplicate action.
   * If the layoutId or dataTypeId is not provided, the default layout will be returned.
   */
  retrieveDuplicationEntityLayout: EntityLayoutOut
  /** Retrieve entities search. */
  retrieveEntitiesSearch: EntitiesSearchOut
  /** Retrieve an entity */
  retrieveEntity: EntityOut
  /** Get entity's comments by providing entity_id */
  retrieveEntityComment: Array<CommentOut>
  /** Retrieve entity detail setup. */
  retrieveEntityDetailSetup: EntityDetailSetupOut
  /** Retrieve embedlist of an entity. */
  retrieveEntityEmbedList: EntityEmbedListOut
  /**
   * Retrieve an entity layout.
   * If the layoutId or dataTypeId is not provided, the default layout will be returned.
   */
  retrieveEntityLayout: EntityLayoutOut
  retrieveEntityMenu: Array<EntityMenuCategoryOut>
  /** Retrieve a custom field. */
  retrieveField: CustomFieldOut
  retrieveInvitation: InvitationItemOut
  retrieveInvitations: InvitationListOut
  /** Retrieve labels. */
  retrieveLabel: Array<LabelOut>
  /** Retrieve a layout. */
  retrieveLayout: LayoutOut
  /** Retrieve a member. */
  retrieveMember: GenericMemberItemOut
  /** Retrieve the permission profile with the given ID. */
  retrievePermissionProfile: PermissionProfileOut
  /** Retrieve all permission profiles of a workspace. */
  retrievePermissionProfiles: PermissionProfileListOut
  /** Get entity's tag by providing workspace_id and entity_type */
  retrieveTags: Array<TagOut>
  /** Retrieve team members. */
  retrieveTeamMembers: RetrieveTeamMembersOut
  /** Retrieve user members. */
  retrieveUserMembers: RetrieveUserMembersOut
  /** Retrieve all the permissions that user has in this workspace. */
  retrieveUserPermission: GetUserPermissionOut
  retrieveUserProfile: UserProfileOut
  /** Retrieve a workspace. */
  retrieveWorkspace: WorkspaceOut
  /** Search for a country, state, or city. */
  searchForCountryStateCity: SearchCountryStateCityDataOut
  sentryTest: Scalars['Float']
  /** Retrieve the list of statuses. */
  statusList: Array<StatusOut>
  /** Retrieve list of types. */
  typeList: Array<TypeOut>
  /** Get user profile list */
  userProfileList: UserProfileListOut
}

export type QueryCheckDefaultLayoutArgs = {
  data: CheckDefaultLayoutInput
}

export type QueryCheckDomainNameArgs = {
  data: CheckDomainNameInput
}

export type QueryCheckWorkspaceKeyArgs = {
  data: CheckWorkspaceKeyInput
}

export type QueryDetailViewWidgetListArgs = {
  data: GetWidgetListInput
}

export type QueryEntityListArgs = {
  data: GetEntityListInput
}

export type QueryEntityTypesArgs = {
  data: GetEntityTypesInput
}

export type QueryExportEntityListArgs = {
  data: ExportEntityListInput
}

export type QueryExportEntityListInquiryArgs = {
  data: ExportEntityListInquiryInput
}

export type QueryFileDownloadRequestArgs = {
  data: FileDownloadRequestInput
}

export type QueryGetAllEntityColumnsArgs = {
  data: GetAllEntityColumnsInput
}

export type QueryGetAvailableFiltersArgs = {
  data: GetAvailableFiltersInput
}

export type QueryGetLookupFieldItemsArgs = {
  data: GetLookupFieldItemsInput
}

export type QueryGetUserFieldItemsArgs = {
  data: GetUserFieldItemsInput
}

export type QueryLayoutListArgs = {
  data: GetLayoutListInput
}

export type QueryListCustomViewArgs = {
  data: GetCustomViewListInput
}

export type QueryListEntityAttachmentsArgs = {
  data: ListEntityAttachmentsInput
}

export type QueryListFieldArgs = {
  data: GetListFieldInput
}

export type QueryListWorkspacesArgs = {
  data: ListWorkspacesInput
}

export type QueryPipelineListArgs = {
  data: GetPipelineListInput
}

export type QueryResolveRouteParametersArgs = {
  data: ResolveRouteParametersInput
}

export type QueryRetrieveCompanyArgs = {
  data: RetrieveCompanyInput
}

export type QueryRetrieveCurrentUserProfileArgs = {
  data: RetrieveCurrentUserProfileInput
}

export type QueryRetrieveDetailViewArgs = {
  data: RetrieveDetailViewInput
}

export type QueryRetrieveDuplicationEntityLayoutArgs = {
  data: RetrieveEntityLayoutInput
}

export type QueryRetrieveEntitiesSearchArgs = {
  data: GetEntitiesSearchInput
}

export type QueryRetrieveEntityArgs = {
  data: RetrieveEntityInput
}

export type QueryRetrieveEntityCommentArgs = {
  data: CommentRetrieveInput
}

export type QueryRetrieveEntityDetailSetupArgs = {
  data: RetrieveEntityDetailSetupInput
}

export type QueryRetrieveEntityEmbedListArgs = {
  data: GetEntityEmbedListInput
}

export type QueryRetrieveEntityLayoutArgs = {
  data: RetrieveEntityLayoutInput
}

export type QueryRetrieveEntityMenuArgs = {
  data: RetrieveEntityMenuInput
}

export type QueryRetrieveFieldArgs = {
  data: RetrieveFieldInput
}

export type QueryRetrieveInvitationArgs = {
  data: RetrieveInvitationInput
}

export type QueryRetrieveInvitationsArgs = {
  data: RetrieveInvitationsInput
}

export type QueryRetrieveLabelArgs = {
  data: RetrieveLabelInput
}

export type QueryRetrieveLayoutArgs = {
  data: RetrieveLayoutInput
}

export type QueryRetrieveMemberArgs = {
  data: RetrieveMemberInput
}

export type QueryRetrievePermissionProfileArgs = {
  data: GetPermissionProfileInput
}

export type QueryRetrievePermissionProfilesArgs = {
  data: GetPermissionProfileListInput
}

export type QueryRetrieveTagsArgs = {
  data: TagRetrieveInput
}

export type QueryRetrieveTeamMembersArgs = {
  data: RetrieveMembersInput
}

export type QueryRetrieveUserMembersArgs = {
  data: RetrieveMembersInput
}

export type QueryRetrieveUserPermissionArgs = {
  data: GetUserPermissionInput
}

export type QueryRetrieveUserProfileArgs = {
  data: RetrieveUserProfileInput
}

export type QueryRetrieveWorkspaceArgs = {
  data: RetrieveWorkspaceInput
}

export type QuerySearchForCountryStateCityArgs = {
  data: SearchForCountryStateCityInput
}

export type QueryStatusListArgs = {
  data: RetrieveStatusInput
}

export type QueryTypeListArgs = {
  data: RetrieveTypeInput
}

export type QueryUserProfileListArgs = {
  data: GetUserProfileListInput
}

/** Input for refresh token. */
export type RefreshTokenInput = {
  /** Refresh token. */
  refreshToken: Scalars['String']
}

/** Input for remove member permission profile. */
export type RemoveMemberFromPermissionProfileInput = {
  /** ID of the member. */
  memberId: Scalars['String']
  /** ID of the permission profile. */
  permissionProfileId: Scalars['Int']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for resend otp. */
export type ResendOtpInput = {
  /** Temporary token. */
  tempToken: Scalars['String']
}

export type ResolveRouteParametersInput = {
  companyDomain?: InputMaybe<Scalars['String']>
  workspaceKey?: InputMaybe<Scalars['String']>
}

export type ResolveRouteParametersOut = {
  __typename?: 'ResolveRouteParametersOut'
  company?: Maybe<CompanyOut>
  lastActiveCompany?: Maybe<CompanyOut>
  lastActiveWorkspace?: Maybe<WorkspaceOut>
  timezone?: Maybe<Scalars['String']>
  workspace?: Maybe<WorkspaceOut>
}

/** Input data for retrieving a company. */
export type RetrieveCompanyInput = {
  /** ID of the company. */
  companyId: Scalars['String']
}

export type RetrieveCurrentUserProfileInput = {
  workspaceId: Scalars['String']
}

/** Input for retrieving a detail view. */
export type RetrieveDetailViewInput = {
  /** The ID of the layout the detail view belongs to. */
  layoutId: Scalars['String']
}

/** Input for retrieving entity detail setup. */
export type RetrieveEntityDetailSetupInput = {
  /** Entity type. */
  entityType: EntityType
  /** Workspace ID. */
  workspaceId: Scalars['String']
}

/** Input for getting an entity. */
export type RetrieveEntityInput = {
  /** The ID of the entity. */
  entityId: Scalars['String']
  entityType: EntityType
}

/** Input for retrieving an entity layout. */
export type RetrieveEntityLayoutInput = {
  /** The IDs of the data types the layout belongs to. */
  dataTypeId?: InputMaybe<Scalars['String']>
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the layout. */
  layoutId?: InputMaybe<Scalars['String']>
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

export type RetrieveEntityMenuInput = {
  workspaceId: Scalars['String']
}

/** Input for retrieving a custom field. */
export type RetrieveFieldInput = {
  /** The id of the custom field. */
  fieldId: Scalars['String']
}

/** Input for retirieving an invitation. */
export type RetrieveInvitationInput = {
  /** ID of the invitation. */
  invitationId: Scalars['String']
  /** ID of the workspace the user is being invited into. */
  workspaceId: Scalars['String']
}

/** Input for invitations list. */
export type RetrieveInvitationsInput = {
  /** The limit of items per page. */
  limit?: Scalars['Int']
  /** The page number. */
  page?: Scalars['Int']
  /** The list of sorted columns. */
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/** Input for label list. */
export type RetrieveLabelInput = {
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for retrieving a layout. */
export type RetrieveLayoutInput = {
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the layout. */
  layoutId: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Input for retirieving a member. */
export type RetrieveMemberInput = {
  /** ID of the member. */
  memberId: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for retrieve members. */
export type RetrieveMembersInput = {
  /** The limit of items per page. */
  limit?: Scalars['Int']
  /** The page number. */
  page?: Scalars['Int']
  /** The list of sorted columns. */
  sortedColumns?: InputMaybe<Array<SortedColumnInput>>
  /** The workspace id. */
  workspaceId: Scalars['String']
}

/** Input for retrieving status. */
export type RetrieveStatusInput = {
  /** Type of entity. */
  entityType: EntityType
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Output data for retrieve team members item. */
export type RetrieveTeamMembersItemOut = {
  __typename?: 'RetrieveTeamMembersItemOut'
  /** The datetime in which this member got created. */
  createdAt: Scalars['DateTime']
  /** The user, who created this member. */
  createdBy: SimpleUserProfileOut
  /** ID of the member. */
  memberId: Scalars['String']
  /**  Type of the member. */
  memberType: MemberTypeEnum
  /** Name of the member. */
  name?: Maybe<Scalars['String']>
  /** List of user profiles in this member. */
  profiles: Array<UserMemberItemOut>
  /** Status of the member. */
  status: MemberStatusEnum
  /** The workspace id. */
  workspaceId: Scalars['String']
}

export type RetrieveTeamMembersOut = {
  __typename?: 'RetrieveTeamMembersOut'
  members: Array<RetrieveTeamMembersItemOut>
  pagination: PaginationDataOut
}

/** Input for retrieving a type. */
export type RetrieveTypeInput = {
  /** Type of entity. */
  entityType: EntityType
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** User Member list item. */
export type RetrieveUserMembersItemOut = {
  __typename?: 'RetrieveUserMembersItemOut'
  /** The created at. */
  createdAt: Scalars['DateTime']
  /** The email. */
  email: Scalars['String']
  /** The first name. */
  firstName: Scalars['String']
  /** The member id. */
  id: Scalars['String']
  /** The last name. */
  lastName: Scalars['String']
  /** The user last visit of the current workspace. */
  lastVisit?: Maybe<Scalars['DateTime']>
  /** The mfa enabled. */
  mfaEnabled: Scalars['Boolean']
  /** The middle name. */
  middleName?: Maybe<Scalars['String']>
  /** The permission profiles. */
  permissionProfiles: Array<SimplePermissionProfileOut>
  /** The status. */
  status: MemberStatusEnum
  /** The user id. */
  userId: Scalars['Int']
  /** The user profile id. */
  userProfileId: Scalars['String']
}

export type RetrieveUserMembersOut = {
  __typename?: 'RetrieveUserMembersOut'
  members: Array<RetrieveUserMembersItemOut>
  pagination: PaginationDataOut
}

export type RetrieveUserProfileInput = {
  userId: Scalars['Int']
  workspaceId: Scalars['String']
}

/** Input for retrieving a workspace. */
export type RetrieveWorkspaceInput = {
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output for searching for a country, state, or city. */
export type SearchCountryStateCityDataOut = {
  __typename?: 'SearchCountryStateCityDataOut'
  /** The items. */
  items: Array<CountryStateCityItemOut>
  /** The pagination. */
  pagination: Scalars['JSON']
}

/**
 * Input for searching for a country, state, or city.
 *
 * The result will be returned based on the selected parent country or state.
 * If no parent country or state is selected, all items will be returned.
 *
 * The result will be sorted by name.
 */
export type SearchForCountryStateCityInput = {
  /** The name of the city. */
  cityName?: InputMaybe<Scalars['String']>
  /** The name of the country. */
  countryName?: InputMaybe<Scalars['String']>
  /** The number of items per page. Defaults to 50. */
  limit?: Scalars['Int']
  /** The page number. Defaults to 1. */
  page?: Scalars['Int']
  /** The name of the state. */
  stateName?: InputMaybe<Scalars['String']>
}

/** Input for setting a custom view as default. */
export type SetDefaultCustomViewInput = {
  /** The ID of the custom view to set as default. */
  viewId: Scalars['String']
}

/** Input for setting a custom view as favorite. */
export type SetFavoriteCustomViewInput = {
  /** The ID of the custom view to set as favorite. */
  viewId: Scalars['String']
}

export type SetFavoriteEntityInput = {
  entityType: EntityType
  workspaceId: Scalars['String']
}

/** Input for setting the default type. */
export type SetTypeAsDefaultInput = {
  /** Type of entity. */
  entityType: EntityType
  /** ID of type. */
  typeId: Scalars['String']
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Input for creating a sidebar widget. */
export type SidebarWidgetInput = {
  /** The icon of the sidebar widget. */
  icon: Scalars['String']
  /** The order of the sidebar widget. */
  order: Scalars['Int']
  /** The type of the sidebar widget. */
  type: SidebarWidgetType
}

/** Output for a sidebar widget. */
export type SidebarWidgetOut = {
  __typename?: 'SidebarWidgetOut'
  /** The icon of the sidebar widget. */
  icon: Scalars['String']
  /** The order of the sidebar widget. */
  order: Scalars['Int']
  /** The type of the sidebar widget. */
  type: SidebarWidgetType
}

export enum SidebarWidgetType {
  Calls = 'CALLS',
  Comments = 'COMMENTS',
  Events = 'EVENTS',
}

/** Input for signin user. */
export type SigninInput = {
  /** User device type. */
  deviceType: DeviceType
  /** User email. */
  email: Scalars['String']
  /** User password. */
  password: Scalars['String']
}

/** Input for signup user. */
export type SignupInput = {
  /** User device type. */
  deviceType: DeviceType
  /** User email. */
  email: Scalars['String']
  /** User first name. */
  firstName: Scalars['String']
  /** User last name. */
  lastName: Scalars['String']
  /** User mobile number. */
  mobileNumber?: InputMaybe<Scalars['String']>
  /** User password. */
  password: Scalars['String']
}

/** The output of a custom field. */
export type SimpleCustomFieldOut = {
  __typename?: 'SimpleCustomFieldOut'
  /** The column of the custom field. */
  col: Scalars['Int']
  /** The number of the column of the custom field. */
  colNum: Scalars['Int']
  /** The id of the custom field. */
  id: Scalars['String']
  /** Whether the custom field is static. */
  isStatic: Scalars['Boolean']
  /** Whether the custom field is required. */
  required: Scalars['Boolean']
  /** The row of the custom field. */
  row: Scalars['Int']
  /** The number of the row of the custom field. */
  rowNum: Scalars['Int']
  title: Scalars['String']
  /** The type of the custom field. */
  type: FieldType
}

/** Output entities search data. */
export type SimpleEntitiesSearchOut = {
  __typename?: 'SimpleEntitiesSearchOut'
  /** plural name of entity. */
  entityPluralName: Scalars['String']
  /** singular name of entity. */
  entitySingularName: Scalars['String']
  /** Entity type of the entities search data. */
  entityType?: Maybe<EntityType>
  /** icon of entity type */
  icon: Scalars['String']
  /** List of custom fields belong to entity. */
  items: Array<ItemsEntitiesSearchOut>
  /** Paginated data. */
  pagination: PaginationDataOut
}

/** Output for getting the data types of a layout. */
export type SimpleLayoutDataTypeOut = {
  __typename?: 'SimpleLayoutDataTypeOut'
  /** The ID of the layout. */
  id: Scalars['String']
  /** Whether the layout is the default layout. */
  isDefault: Scalars['Boolean']
  /** The title of the layout. */
  title: Scalars['String']
}

export type SimplePermissionProfileInput = {
  id: Scalars['String']
  name: Scalars['String']
}

export type SimplePermissionProfileOut = {
  __typename?: 'SimplePermissionProfileOut'
  id: Scalars['String']
  name: Scalars['String']
}

/** Simple output for pipeline. */
export type SimplePipelineOut = {
  __typename?: 'SimplePipelineOut'
  /** Date of creation. */
  createdAt: Scalars['DateTime']
  /** User profile of creator. */
  createdBy: SimpleUserProfileOut
  /** List of data types. */
  dataTypes: Array<SimpleTypeOut>
  /** ID of pipeline. */
  id: Scalars['String']
  /** Name of pipeline. */
  name: Scalars['String']
}

/** Output for a simpler status. */
export type SimpleStatusOut = {
  __typename?: 'SimpleStatusOut'
  /** color of the status. */
  color?: Maybe<Scalars['String']>
  /** ID of the status. */
  id: Scalars['String']
  /** title of status. */
  title: Scalars['String']
}

/** Output for tag. */
export type SimpleTagOut = {
  __typename?: 'SimpleTagOut'
  /** Color of the tag. */
  color: Scalars['String']
  /** ID of the tag. */
  id: Scalars['String']
  /** Type of the tag. */
  tagType: TagTypeEnum
  /** Title of the tag. */
  title: Scalars['String']
}

/** Output for a simpler type. */
export type SimpleTypeOut = {
  __typename?: 'SimpleTypeOut'
  /** ID of the type. */
  id: Scalars['String']
  /** title of type. */
  title: Scalars['String']
}

/** Output for a user profile. */
export type SimpleUserProfileOut = {
  __typename?: 'SimpleUserProfileOut'
  /** Email of the user profile. */
  email: Scalars['String']
  /** Firstname of the user profile. */
  firstName: Scalars['String']
  /** ID of the user profile. */
  id: Scalars['String']
  /** Lastname of the user profile. */
  lastName: Scalars['String']
  /** Middlename of the user profile. */
  middleName?: Maybe<Scalars['String']>
  /** URL of the user profile picture. */
  profilePicture?: Maybe<Scalars['String']>
  /** ID of the user */
  userId: Scalars['Int']
}

/** Output for a user profile in watcher field. */
export type SimpleWatcherMemberItemOut = {
  __typename?: 'SimpleWatcherMemberItemOut'
  /** Email of the user profile. */
  email: Scalars['String']
  /** Firstname of the user profile. */
  firstName: Scalars['String']
  /** ID of the user profile. */
  id: Scalars['String']
  /** Lastname of the user profile. */
  lastName: Scalars['String']
  /** Middlename of the user profile. */
  middleName?: Maybe<Scalars['String']>
  /** URL of the user profile picture. */
  profilePicture?: Maybe<Scalars['String']>
  /** status of the user profile. */
  status: UserProfileStatusType
  /** ID of the user */
  userId: Scalars['Int']
}

/** Output for watcher field out. */
export type SimpleWatcherOut = {
  __typename?: 'SimpleWatcherOut'
  /** Name of the member */
  name?: Maybe<Scalars['String']>
  /** List of user profiles. */
  profiles: Array<SimpleWatcherMemberItemOut>
  /** Status of the member. */
  status: MemberStatusEnum
  /** Member type. */
  type: MemberTypeEnum
}

/** Input for sorting a column. */
export type SortedColumnInput = {
  colId: Scalars['String']
  /** The sort index. */
  sortIndex?: InputMaybe<Scalars['Int']>
  /** The sort type. */
  sortType?: InputMaybe<ColumnSortType>
}

/** Output for getting a status. */
export type StatusOut = {
  __typename?: 'StatusOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  /** color of the status. */
  color: Scalars['String']
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** Type of entity. */
  entityType: EntityType
  /** ID of status. */
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  /** Stage of status. */
  stage: StatusStage
  /** title of status. */
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

export enum StatusStage {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Rejected = 'REJECTED',
}

/** A supported operator for a filter. */
export type SupportedOperatorOut = {
  __typename?: 'SupportedOperatorOut'
  /** The operator title. */
  title: Scalars['String']
  /** The operator type. */
  type: OperatorType
}

export type TagCreateInput = {
  color: Scalars['String']
  entityType: EntityType
  tagType: TagTypeEnum
  title: Scalars['String']
  workspaceId: Scalars['String']
}

export type TagDeleteInput = {
  entityType: EntityType
  id: Scalars['String']
  workspaceId: Scalars['String']
}

export type TagOut = {
  __typename?: 'TagOut'
  color: Scalars['String']
  createdAt: Scalars['DateTime']
  entityType: EntityType
  id: Scalars['String']
  tagType: TagTypeEnum
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  workspaceId: Scalars['String']
}

export type TagRetrieveInput = {
  entityType: EntityType
  workspaceId: Scalars['String']
}

export enum TagTypeEnum {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type TagUpdateInput = {
  color: Scalars['String']
  entityType: EntityType
  id: Scalars['String']
  tagType: TagTypeEnum
  title: Scalars['String']
  workspaceId: Scalars['String']
}

export type TeamMemberItemOut = {
  __typename?: 'TeamMemberItemOut'
  id: Scalars['String']
  teamName?: Maybe<Scalars['String']>
  users: Array<UserMemberItemOut>
}

/** Temp user token output. */
export type TempUserTokenOut = {
  __typename?: 'TempUserTokenOut'
  /** Temp token. */
  tempToken: Scalars['String']
}

export enum TimeFormatType {
  Time_12H = 'TIME_12H',
  Time_24H = 'TIME_24H',
}

/** Input for sending invitation token. */
export type TokenInvitationInput = {
  /** The token. */
  token: Scalars['String']
}

/** Output for a type. */
export type TypeOut = {
  __typename?: 'TypeOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** Type of entity. */
  entityType: EntityType
  /** ID of the type. */
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  /** Whether it is the default type. */
  isDefault: Scalars['Boolean']
  /** list of status_id in this type */
  statusList: Array<StatusOut>
  /** title of type. */
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Input for unarchiving a status. */
export type UnarchiveStatusInput = {
  /** ID of status. */
  statusId: Scalars['String']
}

/** Input for unarchiving a type. */
export type UnarchiveTypeInput = {
  /** ID of type. */
  typeId: Scalars['String']
}

/** Input for unsetting a custom view as favorite. */
export type UnsetFavoriteCustomViewInput = {
  /** The ID of the custom view to unset as favorite. */
  viewId: Scalars['String']
}

export type UnsetFavoriteEntityInput = {
  entityType: EntityType
  workspaceId: Scalars['String']
}

export type UpdateAccountProfileInput = {
  address?: InputMaybe<AccountProfileAddressInput>
  birthday?: InputMaybe<Scalars['Date']>
  dateFormat?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  mfaEnabled?: InputMaybe<Scalars['Boolean']>
  middleName?: InputMaybe<Scalars['String']>
  mobileNumber?: InputMaybe<Scalars['String']>
  profilePicture?: InputMaybe<Scalars['String']>
  startWeek?: InputMaybe<DayOfWeekType>
  timeFormat?: InputMaybe<TimeFormatType>
  timezone?: InputMaybe<Scalars['String']>
}

/** Input for updating an attachment. */
export type UpdateAttachmentInput = {
  /** ID of the attachment. */
  attachmentId: Scalars['String']
  /** New label ID to be assigned to the attachment. */
  labelId?: InputMaybe<Scalars['String']>
}

/** Input data for updating a company. */
export type UpdateCompanyInput = {
  /** ID of the company. */
  companyId: Scalars['String']
  /** Image of the company. */
  companyImage?: InputMaybe<Scalars['String']>
  /** Role of the creator of the company. */
  creatorRole?: InputMaybe<CompanyCreatorRoleType>
  /** Currency of the company. */
  currency?: InputMaybe<Scalars['String']>
  /** Industry of the company. */
  industry?: InputMaybe<CompanyIndustryType>
  /** Name of the company. */
  name?: InputMaybe<Scalars['String']>
  /** Population of the company. */
  population?: InputMaybe<CompanyPopulationType>
  /** Timezone of the company. */
  timezone?: InputMaybe<Scalars['String']>
}

/** Input for updating a custom view. */
export type UpdateCustomViewInput = {
  /** The columns of the custom view. */
  columns: Array<ViewDataColumnInput>
  /** The default pagination limit of the custom view. Defaults to 50. */
  defaultPaginationLimit?: InputMaybe<Scalars['Int']>
  /** The filter of the custom view. */
  filter?: InputMaybe<ViewDataFilterInput>
  /** The title of the custom view. Must be unique. */
  title?: InputMaybe<Scalars['String']>
  /** The ID of the custom view to update. */
  viewId: Scalars['String']
}

/** Input for updating a custom view title. */
export type UpdateCustomViewTitleInput = {
  /** The title of the custom view. Must be unique. */
  title: Scalars['String']
  /** The ID of the custom view to update. */
  viewId: Scalars['String']
}

/** Input for updating a detail view. */
export type UpdateDetailViewInput = {
  /** The embed lists of the detail view. */
  embedLists: Array<EmbedListInput>
  /** The information layout of the detail view. */
  informationLayout: InformationLayoutInput
  /** The ID of the layout the detail view belongs to. */
  layoutId: Scalars['String']
  /** The main widgets of the detail view. */
  mainWidgets: Array<Scalars['JSON']>
  /** The sidebar widgets of the detail view. */
  sidebarWidgets: Array<SidebarWidgetInput>
}

/** Output for updating a detail view. */
export type UpdateDetailViewOut = {
  __typename?: 'UpdateDetailViewOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** The ID of the detail view. */
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  /** The ID of the layout the detail view belongs to. */
  layoutId: Scalars['String']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
}

/**
 * Input for updating entity detail setup.
 *
 * If the isActive is set to false, the entity will be hidden from the system
 * and only admins can see it in the entity setup page.
 */
export type UpdateEntityDetailSetupInput = {
  /** Entity type. */
  entityType: EntityType
  /** Whether the entity inherits access to. Defaults to False. */
  inheritanceForAccessTo?: InputMaybe<Scalars['Boolean']>
  /** Whether the entity inherits watcher. Defaults to False. */
  inheritanceForWatcher?: InputMaybe<Scalars['Boolean']>
  /** Whether the entity detail setup is active. Defaults to True. */
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Plural name. */
  pluralName: Scalars['String']
  /** Singular name. */
  singularName: Scalars['String']
  /** Workspace ID. */
  workspaceId: Scalars['String']
}

/** Input for update entity. */
export type UpdateEntityInput = {
  /**
   * The actual data of the entity. This JSON must contain an object with key and values. The keys are
   * considered fields id, and the values considered the value of that field.
   */
  data: Scalars['JSON']
  /** ID of the entity. */
  entityId: Scalars['String']
  /** Type of the entity. */
  entityType: EntityType
}

/** Output for updating entity. */
export type UpdateEntityOut = {
  __typename?: 'UpdateEntityOut'
  /**
   * The actual data of the entity. This JSON will contain an object with key and values. The keys are
   * considered fields id, and the values considered the value of that field.
   */
  data: Scalars['JSON']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the created entity. */
  id: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for updating entity watchers. */
export type UpdateEntityWatchersInput = {
  /** ID of the entity. */
  entityId: Scalars['String']
  /** Type of the entity. */
  entityType: EntityType
  /** ID of the member. */
  memberId: Scalars['String']
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Input for updaing a custom field. */
export type UpdateFieldInput = {
  /** The data of the custom field. */
  data: Scalars['JSON']
  /** The type of the entity. */
  entityType: EntityType
  /** The ID of the custom field. */
  fieldId: Scalars['String']
  /** The ID of the workspace. */
  workspaceId: Scalars['String']
}

/**
 * Input for updating an invitation.
 *
 * Note:
 *     Update gets done partially.
 */
export type UpdateInvitationInput = {
  /** Email of the user. */
  email?: InputMaybe<Scalars['String']>
  /** Expiration date of the invitation. */
  expireDate?: InputMaybe<Scalars['DateTime']>
  /** ID of the invitation. */
  invitationId: Scalars['String']
  /** A name for invitation. */
  name?: InputMaybe<Scalars['String']>
  /** ID of the permission profile user will own. */
  permissionProfileId?: InputMaybe<Scalars['Int']>
  /** ID of the workspace the user is being invited into. */
  workspaceId: Scalars['String']
}

/** Input for updating a label. */
export type UpdateLabelInput = {
  /** ID of the label. */
  labelId: Scalars['String']
  /** Name of the label. */
  name: Scalars['String']
}

/** Input for updating a layout. */
export type UpdateLayoutInput = {
  /** The number of columns in the layout. Between 2 and 4. */
  colCount: Scalars['Int']
  /** The IDs of the data types the layout belongs to. */
  dataTypeIds?: InputMaybe<Array<Scalars['String']>>
  /** The type of entity. */
  entityType: EntityType
  /** The fields of the layout. */
  fields?: InputMaybe<Array<LayoutField>>
  /** The ID of the layout. */
  layoutId: Scalars['String']
  /** The number of rows in the layout. */
  rowCount: Scalars['Int']
  /** The title of the layout. Must be unique. */
  title?: InputMaybe<Scalars['String']>
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

/** Output for updating a layout. */
export type UpdateLayoutOut = {
  __typename?: 'UpdateLayoutOut'
  /** The IDs of the data types the layout belongs to. */
  dataTypeIds: Array<Scalars['String']>
  /** The type of entity. */
  entityType: EntityType
  /** The ID of the layout. */
  id: Scalars['String']
  /** The ID of the workspace the layout belongs to. */
  workspaceId: Scalars['String']
}

export enum UpdateModeEnum {
  Add = 'ADD',
  Remove = 'REMOVE',
  Replace = 'REPLACE',
  Set = 'SET',
}

/** Input for updating pipeline stage. */
export type UpdatePipeLineStageInput = {
  /** ID of entity. */
  entityId: Scalars['String']
  /** Type of entity. */
  entityType: EntityType
  /** ID of status. */
  statusId: Scalars['String']
  /** ID of workspace. */
  workspaceId: Scalars['String']
}

/** Input for updating a status. */
export type UpdateStatusInput = {
  /** color of the status. */
  color?: InputMaybe<Scalars['String']>
  /** Stage of status. */
  stage?: InputMaybe<StatusStage>
  /** ID of status. */
  statusId: Scalars['String']
  /** title of status. */
  title?: InputMaybe<Scalars['String']>
}

export type UpdateTeamInput = {
  memberId: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  profileIds?: InputMaybe<Array<Scalars['String']>>
  workspaceId: Scalars['String']
}

/** Input for updating a type. */
export type UpdateTypeInput = {
  /** Whether it is the default type. */
  isDefault?: InputMaybe<Scalars['Boolean']>
  /** list of status_id in this type */
  statusList?: InputMaybe<Array<Scalars['String']>>
  /** title of type. */
  title?: InputMaybe<Scalars['String']>
  /** ID of type. */
  typeId: Scalars['String']
}

export type UpdateUserProfileAsAdminInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  mfaEnabled?: InputMaybe<Scalars['Boolean']>
  permissionProfiles: Array<SimplePermissionProfileInput>
  status?: UserProfileStatusType
  userId: Scalars['Int']
  workspaceId: Scalars['String']
}

export type UpdateUserProfileAsAdminOut = {
  __typename?: 'UpdateUserProfileAsAdminOut'
  address?: Maybe<ProfileAddressOut>
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  birthday?: Maybe<Scalars['Date']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  dateFormat?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  lastName: Scalars['String']
  mfaEnabled?: Maybe<Scalars['Boolean']>
  middleName?: Maybe<Scalars['String']>
  permissionProfiles: Array<SimplePermissionProfileOut>
  phoneNumberList?: Maybe<Array<Scalars['String']>>
  profilePicture?: Maybe<Scalars['String']>
  startWeek?: Maybe<DayOfWeekType>
  status: UserProfileStatusType
  timeFormat?: Maybe<TimeFormatType>
  timezone?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  userId: Scalars['Int']
  workspaceId: Scalars['String']
}

export type UpdateUserProfileInput = {
  address?: InputMaybe<ProfileAddressInput>
  birthday?: InputMaybe<Scalars['Date']>
  dateFormat?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  mfaEnabled?: InputMaybe<Scalars['Boolean']>
  middleName?: InputMaybe<Scalars['String']>
  phoneNumberList?: InputMaybe<Array<Scalars['String']>>
  profilePicture?: InputMaybe<Scalars['String']>
  startWeek?: InputMaybe<DayOfWeekType>
  timeFormat?: InputMaybe<TimeFormatType>
  timezone?: InputMaybe<Scalars['String']>
  userId: Scalars['Int']
  workspaceId: Scalars['String']
}

/** Input for updating a workspace. */
export type UpdateWorkspaceInput = {
  /** Color of the workspace. */
  color?: InputMaybe<Scalars['String']>
  /** Name of the workspace. Must be unique. */
  name?: InputMaybe<Scalars['String']>
  /** ID of the workspace. */
  workspaceId: Scalars['String']
}

/** Output data for an updated custom field. */
export type UpdatedCustomFieldOut = {
  __typename?: 'UpdatedCustomFieldOut'
  /** The data of the custom field. */
  data: Scalars['JSON']
  /** The id of the custom field. */
  id: Scalars['String']
}

export type UserFieldItemsOut = {
  __typename?: 'UserFieldItemsOut'
  teams: Array<TeamMemberItemOut>
  users: Array<UserMemberItemOut>
}

/** Output for profiles of members. */
export type UserMemberItemOut = {
  __typename?: 'UserMemberItemOut'
  /** Email of the user profile. */
  email: Scalars['String']
  /** Firstname of the user profile. */
  firstName: Scalars['String']
  /** The member ID of the user profile. */
  id: Scalars['String']
  /** Lastname of the user profile. */
  lastName?: Maybe<Scalars['String']>
  /** Middlename of the user profile. */
  middleName?: Maybe<Scalars['String']>
  /** ID of the user profile. */
  profileId: Scalars['String']
  /** URL of the user profile picture. */
  profilePicture?: Maybe<Scalars['String']>
  /** ID of the user */
  userId: Scalars['Int']
}

/** User output. */
export type UserOut = {
  __typename?: 'UserOut'
  /** User country code. */
  countryCode?: Maybe<Scalars['String']>
  /** User email. */
  email: Scalars['String']
  /** User first name. */
  firstName: Scalars['String']
  /** User last name. */
  lastName?: Maybe<Scalars['String']>
  /** User mobile number. */
  mobileNumber?: Maybe<Scalars['String']>
}

/** User profile list item. */
export type UserProfileListItemOut = {
  __typename?: 'UserProfileListItemOut'
  /** The created at. */
  createdAt: Scalars['DateTime']
  /** The email. */
  email: Scalars['String']
  /** The first name. */
  firstName: Scalars['String']
  /** The user profile id. */
  id: Scalars['String']
  /** The last name. */
  lastName: Scalars['String']
  /** The user last visit of the current workspace. */
  lastVisit?: Maybe<Scalars['DateTime']>
  /** The mfa enabled. */
  mfaEnabled: Scalars['Boolean']
  /** The middle name. */
  middleName?: Maybe<Scalars['String']>
  /** The permission profiles. */
  permissionProfiles: Array<SimplePermissionProfileOut>
  /** The status. */
  status: UserProfileStatusType
  /** The user id. */
  userId: Scalars['Int']
}

/** User profile list. */
export type UserProfileListOut = {
  __typename?: 'UserProfileListOut'
  /** The pagination data. */
  pagination: PaginationDataOut
  /** The user profile list. */
  profiles: Array<UserProfileListItemOut>
}

export type UserProfileOut = {
  __typename?: 'UserProfileOut'
  address?: Maybe<ProfileAddressOut>
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  birthday?: Maybe<Scalars['Date']>
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  dateFormat?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  lastName: Scalars['String']
  mfaEnabled?: Maybe<Scalars['Boolean']>
  middleName?: Maybe<Scalars['String']>
  phoneNumberList?: Maybe<Array<Scalars['String']>>
  profilePicture?: Maybe<Scalars['String']>
  startWeek?: Maybe<DayOfWeekType>
  status: UserProfileStatusType
  timeFormat?: Maybe<TimeFormatType>
  timezone?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
  userId: Scalars['Int']
  workspaceId: Scalars['String']
}

export enum UserProfileStatusType {
  Active = 'ACTIVE',
  Deactive = 'DEACTIVE',
}

/** User token output. */
export type UserTokenOut = {
  __typename?: 'UserTokenOut'
  /** Access token. */
  accessToken: Scalars['String']
  /** Refresh token. */
  refreshToken: Scalars['String']
}

/** Output for verified user. */
export type VerifiedUserOut = {
  __typename?: 'VerifiedUserOut'
  /** User token data. */
  token: UserTokenOut
  /** User data. */
  user: UserOut
}

/** Input for verify forgot password. */
export type VerifyForgotPasswordInput = {
  /** Verification code. */
  code: Scalars['Int']
  /** Temporary token. */
  tempToken: Scalars['String']
}

/** Output for verify forgot password. */
export type VerifyForgotPasswordTokenOut = {
  __typename?: 'VerifyForgotPasswordTokenOut'
  /** Temporary token. */
  tempToken: Scalars['String']
}

/** Input for verify reset password. */
export type VerifyResetPasswordInput = {
  /** Verification code. */
  code: Scalars['Int']
  /** Temporary token. */
  tempToken: Scalars['String']
}

/** Output for verify reset password. */
export type VerifyResetPasswordTokenOut = {
  __typename?: 'VerifyResetPasswordTokenOut'
  /** Temporary token. */
  tempToken: Scalars['String']
}

/** Input for indicating which columns get shown in which sort manner. */
export type ViewDataColumnInput = {
  /** The width of the column. Defaults to 120. */
  columnWidth?: InputMaybe<Scalars['Int']>
  /** The ID of the field. */
  fieldId: Scalars['String']
  /** Specifies the index of the sort. */
  sortIndex?: InputMaybe<Scalars['Int']>
  /** The order in which the sort happens. e.g. ASCENDING, DESCENDING. */
  sortType?: InputMaybe<ColumnSortType>
}

/** Output for indicating which columns get shown in which sort manner. */
export type ViewDataColumnOut = {
  __typename?: 'ViewDataColumnOut'
  /** The width of the column. */
  columnWidth?: Maybe<Scalars['Int']>
  /** The ID of the field. */
  fieldId: Scalars['String']
  /** Specifies the index of the sort. */
  sortIndex?: Maybe<Scalars['Int']>
  /** The order in which the sort happens. e.g. ASCENDING, DESCENDING. */
  sortType?: Maybe<ColumnSortType>
}

/** Input for the filter in the viewData. */
export type ViewDataFilterInput = {
  /** The list of all conditions of the filter. */
  conditions: Array<FilterConditionInput>
}

/** Output for the filter in the viewData. */
export type ViewDataFilterOut = {
  __typename?: 'ViewDataFilterOut'
  /** The list of all conditions of the filter. */
  conditions: Array<FilterConditionOut>
}

/** Output for a widget item. */
export type WidgetItemOut = {
  __typename?: 'WidgetItemOut'
  /** The title of the widget item. */
  title: Scalars['String']
  /** The type of the widget item. */
  type: Scalars['String']
}

/** Output for a widget list. */
export type WidgetListOut = {
  __typename?: 'WidgetListOut'
  /** The embed lists of the widget list. */
  embedLists: Array<WidgetItemOut>
  /** The main widgets of the widget list. */
  mainWidgets: Array<Scalars['JSON']>
  /** The sidebar widgets of the widget list. */
  sidebarWidgets: Array<WidgetItemOut>
}

/** Output for a workspace list item. */
export type WorkspaceListItemOut = {
  __typename?: 'WorkspaceListItemOut'
  /** Color of the workspace. */
  color: Scalars['String']
  /** ID of the company the workspace belongs to. */
  companyId: Scalars['String']
  /** ID of the workspace. */
  id: Scalars['String']
  /** Key of the workspace. */
  key: Scalars['String']
  /** Name of the workspace. */
  name: Scalars['String']
  /** ID of the owner of the workspace. */
  ownerId: Scalars['Int']
}

/** Output for a workspace. */
export type WorkspaceOut = {
  __typename?: 'WorkspaceOut'
  archivedAt?: Maybe<Scalars['DateTime']>
  archivedBy?: Maybe<Scalars['Int']>
  /** Color of the workspace. */
  color: Scalars['String']
  /** ID of the company the workspace belongs to. */
  companyId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdBy?: Maybe<Scalars['Int']>
  /** ID of the workspace. */
  id: Scalars['String']
  isArchived: Scalars['Boolean']
  /** Key of the workspace. */
  key: Scalars['String']
  /** Name of the workspace. */
  name: Scalars['String']
  /** ID of the owner of the workspace. */
  ownerId: Scalars['Int']
  updatedAt: Scalars['DateTime']
  updatedBy?: Maybe<Scalars['Int']>
}
