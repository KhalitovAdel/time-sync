/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IDevartTimeTrackerModelsAccount {
  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Guid
   * @format uuid
   */
  externalAccountId?: string;

  /**
   * Byte
   * 0 - sunday, 1 - monday, 6 - saturday
   * @format int32
   */
  firstWeekDay?: number;

  /** String */
  accountName?: string | null;

  /** String */
  accountLogo?: string | null;

  /** String */
  companyAddress?: string | null;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;

  /** String */
  reportTimeFormat?: 'HM' | 'CL' | 'DH' | null;
  reportTimeRoundingMode?: IDevartTimeTrackerModelsReportTimeRoundingMode;

  /**
   * Byte
   * @format int32
   */
  reportTimeRoundingMinutes?: number;

  /**
   * Int16
   * 0 - only today is editable, -1 - all days are editable
   * @format int32
   */
  editableDays?: number;

  /** Boolean */
  reportDetailedTimeEnabled?: boolean;

  /** Boolean */
  canMembersManagePublicProjects?: boolean;

  /** Boolean */
  canMembersCreateTags?: boolean;

  /** Boolean */
  hasDemoData?: boolean;

  /** AccountDate[] */
  dates?: IDevartTimeTrackerModelsAccountDate[] | null;

  /**
   * Int32
   * @format int32
   */
  inactivityStopMinutes?: number;

  /** Boolean */
  blurScreenshots?: boolean;
  permissions?: IDevartTimeTrackerModelsAccountPermissionsMap;
  requiredFields?: IDevartTimeTrackerModelsRequiredFieldsMap;
  activityCaptureSettings?: IDevartTimeTrackerModelsActivityCaptureSettingsMap;

  /**
   * MemberInfo[]
   * Returns members time tracking permissions
   */
  members?: IDevartTimeTrackerModelsMemberInfo[] | null;
}

export interface IDevartTimeTrackerModelsAccountDate {
  /**
   * DateTime
   * @format date-time
   */
  date?: string;
  dateType?: IDevartTimeTrackerModelsAccountDateType;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsAccountDateType = 1 | 2;

export interface IDevartTimeTrackerModelsAccountMember {
  /**
   * Int32
   * @format int32
   */
  accountMemberId?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfile;
  role?: IDevartTimeTrackerModelsServiceRole;

  /** Represents the account member status. */
  status?: IDevartTimeTrackerModelsAccountMemberStatus;
  accountMemberScope?: IDevartTimeTrackerModelsAccountMemberScope;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;
  costRate?: IDevartTimeTrackerModelsRate;

  /**
   * Nullable`1
   * @format date-time
   */
  costRateApplyDate?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  defaultWorkTypeId?: number | null;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Nullable`1
   * @format int32
   */
  clientId?: number | null;
  permissions?: IDevartTimeTrackerModelsAccountPermissionsMap;
  requiredFields?: IDevartTimeTrackerModelsRequiredFieldsMap;
  activityCaptureSettings?: IDevartTimeTrackerModelsActivityCaptureSettingsMap;
}

export interface IDevartTimeTrackerModelsAccountMemberScope {
  /**
   * IList`1
   * Gets or sets the group membership.
   */
  groupMembership?: IDevartTimeTrackerModelsIdentifierInfo[] | null;

  /**
   * Boolean
   * Gets or sets a value indicating whether this member has more than one account.
   */
  hasSeveralAccounts?: boolean;
}

/**
 * Represents the account member status.
 * @format int32
 */
export type IDevartTimeTrackerModelsAccountMemberStatus = 0 | 1 | 2;

export interface IDevartTimeTrackerModelsAccountPermissionsMap {
  /** Boolean */
  manualTimeEditing?: boolean;

  /** Boolean */
  mobileTimeTracking?: boolean;

  /** Boolean */
  workingOnWeekendsAndHolidays?: boolean;
}

export interface IDevartTimeTrackerModelsAccountScope {
  /**
   * AccountMember[]
   * Gets or sets the members.
   */
  members?: ITMetricAccountsViewModelsV2AccountMember[] | null;

  /**
   * MemberListInfo[]
   * Gets or sets the groups.
   */
  groups?: IDevartTimeTrackerModelsMemberListInfo[] | null;

  /**
   * ProjectScope[]
   * Gets or sets all projects.
   */
  projects?: IDevartTimeTrackerModelsProjectScope[] | null;

  /**
   * Client[]
   * Gets or sets all clients.
   */
  clients?: IDevartTimeTrackerModelsClient[] | null;

  /**
   * Tag[]
   * Gets or sets the tags.
   */
  tags?: ITMetricTagsDomainModelsTag[] | null;

  /**
   * Int32[]
   * Gets or sets the identifiers of managed projects.
   */
  managedProjects?: number[] | null;

  /**
   * Int32[]
   * Gets or sets the identifiers of projects where user can track time.
   */
  trackedProjects?: number[] | null;

  /**
   * Subordination[]
   * Gets or sets the managed groups.
   */
  managedGroups?: IDevartTimeTrackerModelsSubordination[] | null;

  /**
   * Subordination[]
   * Gets or sets the managed users.
   */
  managedUsers?: IDevartTimeTrackerModelsSubordination[] | null;
  account?: ITMetricAccountsViewModelsV2Account;

  /** Represents a customer's subscription for a TMetric account. */
  currentSubscription?: IDevartTimeTrackerModelsSubscription;
  features?: IDevartTimeTrackerModelsSubscriptionFeaturesMap;
  permissions?: IDevartTimeTrackerModelsAccountPermissionsMap;
  requiredFields?: IDevartTimeTrackerModelsRequiredFieldsMap;
  activityCaptureSettings?: IDevartTimeTrackerModelsActivityCaptureSettingsMap;
}

export interface IDevartTimeTrackerModelsActivityCaptureSettingsMap {
  /** Boolean */
  activityLevels?: boolean;

  /** Boolean */
  appsAndSites?: boolean;

  /** Boolean */
  screenshots?: boolean;
}

export interface IDevartTimeTrackerModelsActivityReportRow {
  /** String */
  userName?: string | null;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /**
   * Int64
   * @format int64
   */
  activeTime?: number;

  /**
   * Int64
   * @format int64
   */
  idleTime?: number;

  /**
   * Int64
   * @format int64
   */
  unknownTimerTime?: number;

  /**
   * Int64
   * @format int64
   */
  unknownManualTime?: number;

  /**
   * Int64
   * @format int64
   */
  unknownTime?: number;

  /**
   * Int64
   * @format int64
   */
  timerTime?: number;

  /**
   * Double
   * @format double
   */
  activityLevel?: number;

  /**
   * Int64
   * @format int64
   */
  totalTime?: number;
}

export interface IDevartTimeTrackerModelsApproverGroup {
  /** String */
  roleName?: string | null;

  /** String */
  roleDisplayName?: string | null;

  /** List`1 */
  members?: IDevartTimeTrackerModelsUserProfileLite[] | null;
}

export interface IDevartTimeTrackerModelsAppsUsageReportRow {
  /** String */
  user?: string | null;

  /** String */
  application?: string | null;

  /**
   * Int64
   * @format int64
   */
  timeSpent?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsBudgetingMethod = 0 | 1 | 2 | 3;

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsBudgetPeriod = 0 | 1 | 2 | 3;

/**
 * Client related to specific account.
 */
export interface IDevartTimeTrackerModelsClient {
  /**
   * Int32
   * Gets or sets the client identifier.
   * @format int32
   */
  clientId?: number;

  /**
   * Int32
   * Gets or sets the account identifier.
   * @format int32
   */
  accountId?: number;

  /**
   * String
   * Gets or sets the name of the client.
   */
  clientName?: string | null;

  /**
   * String
   * Gets or sets the address of the client.
   */
  clientAddress?: string | null;

  /**
   * String
   * Gets or sets the relative path to the client avatar.
   * For example, /Content/Avatars/avatar_12.svg.
   */
  avatar?: string | null;

  /**
   * Int32
   * Gets or sets the active projects count.
   * @format int32
   */
  activeProjectsCount?: number;

  /**
   * Int32
   * Gets or sets the total projects count.
   * @format int32
   */
  totalProjectsCount?: number;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;

  /** IList`1 */
  contactUsers?: number[] | null;
}

export interface IDevartTimeTrackerModelsCultureInfoLite {
  /** String */
  id?: string | null;

  /** String */
  nativeName?: string | null;
}

export interface IDevartTimeTrackerModelsCurrencyInfo {
  /** String */
  code?: string | null;

  /** String */
  name?: string | null;
}

export interface IDevartTimeTrackerModelsDetailedReportRow {
  /**
   * DateTime
   * The noon timestamp of reported day (#65331)
   * @format date-time
   */
  day?: string;

  /**
   * Nullable`1
   * @format date-time
   */
  startTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endTime?: string | null;

  /** String */
  user?: string | null;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /** String */
  project?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectId?: number | null;

  /** String */
  projectCode?: string | null;

  /** String */
  workType?: string | null;

  /** String */
  client?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  clientId?: number | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectTaskId?: number | null;

  /** String */
  description?: string | null;

  /** String */
  issueUrl?: string | null;

  /** String */
  issueId?: string | null;

  /** String[] */
  tags?: string[] | null;

  /**
   * Double
   * @format double
   */
  duration?: number;

  /**
   * Double
   * @format double
   */
  billableDuration?: number;

  /** Money[] */
  billableAmount?: IDevartTimeTrackerModelsMoney[] | null;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsFeePeriod = 0 | 1 | 2 | 3;

export interface IDevartTimeTrackerModelsHttpError {
  /**
   * Int32
   * @format int32
   */
  statusCode?: number;

  /** String */
  message?: string | null;
}

export interface IDevartTimeTrackerModelsIdentifierInfo {
  /**
   * Int32
   * The identifier
   * @format int32
   */
  id: number;

  /**
   * String
   * The name
   */
  name?: string | null;
}

export interface IDevartTimeTrackerModelsIntegration {
  /**
   * Int32
   * @format int32
   */
  integrationId?: number;

  /** String */
  integrationType: string;

  /** String */
  applicationUrl: string;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /** String */
  accessKey?: string | null;

  /** Boolean */
  hasAccessKey?: boolean;

  /** Boolean */
  isTimeSynchronizationEnabled?: boolean;

  /** Boolean */
  showIssueId?: boolean;

  /** String */
  displayName?: string | null;

  /** String */
  defaultWorkType?: string | null;

  /** Boolean */
  mapWorkTypes?: boolean;

  /** Boolean */
  agjustEstimatesAutomatically?: boolean;
}

export interface IDevartTimeTrackerModelsInvoice {
  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Int32
   * @format int32
   */
  clientId?: number;
  invoiceType?: IDevartTimeTrackerModelsInvoiceType;

  /**
   * Int32
   * @format int32
   */
  invoiceId?: number;

  /** String */
  textId: string;
  status?: IDevartTimeTrackerModelsInvoiceStatus;

  /** String */
  purchaseOrderNumber?: string | null;

  /**
   * DateTime
   * @format date-time
   */
  issueDate?: string;

  /**
   * Int16
   * @format int32
   */
  dueDays?: number;

  /**
   * Decimal
   * @format double
   */
  subtotalAmount?: number;

  /** String */
  currency: string;

  /**
   * Single
   * @format float
   * @min 0
   * @max 100
   */
  discountPercents?: number;

  /**
   * Decimal
   * @format double
   */
  discountAmount?: number;

  /**
   * Single
   * @format float
   * @min 0
   * @max 100
   */
  taxPercents?: number;

  /**
   * Decimal
   * @format double
   */
  taxAmount?: number;

  /**
   * Decimal
   * @format double
   */
  totalAmount?: number;

  /** String */
  subject?: string | null;

  /** List`1 */
  items?: IDevartTimeTrackerModelsInvoiceItem[] | null;
}

export interface IDevartTimeTrackerModelsInvoiceItem {
  /**
   * Decimal
   * @format double
   */
  unitCount?: number;

  /**
   * Decimal
   * @format double
   */
  unitPrice?: number;

  /**
   * Decimal
   * @format double
   */
  unitAmount?: number;

  /** String */
  description?: string | null;

  /** String */
  itemType?: string | null;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsInvoiceMethod = 0 | 1 | 2 | 3 | 4;

export interface IDevartTimeTrackerModelsInvoiceRange {
  /**
   * Int32
   * @format int32
   */
  clientId?: number;

  /**
   * Nullable`1
   * @format date-time
   */
  startTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endTime?: string | null;
  invoiceType?: IDevartTimeTrackerModelsInvoiceType;

  /** List`1 */
  projects?: number[] | null;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsInvoicesInvoiceStatusFilter = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsInvoiceStatus = 0 | 1 | 2;

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsInvoiceType = 0 | 1 | 2 | 3;

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsJobStatus = 0 | 1 | 2;

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsJobType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface IDevartTimeTrackerModelsMemberInfo {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /** String */
  userName?: string | null;
  role?: IDevartTimeTrackerModelsServiceRole;
  permissions?: IDevartTimeTrackerModelsAccountPermissionsMap;
  requiredFields?: IDevartTimeTrackerModelsRequiredFieldsMap;
  activityCaptureSettings?: IDevartTimeTrackerModelsActivityCaptureSettingsMap;
}

export interface IDevartTimeTrackerModelsMemberListInfo {
  /** IList`1 */
  members?: IDevartTimeTrackerModelsIdentifierInfo[] | null;

  /**
   * Int32
   * The identifier
   * @format int32
   */
  id: number;

  /**
   * String
   * The name
   */
  name?: string | null;
}

/**
 * Represents an abstraction for manipulating money amounts in different currencies.
 */
export interface IDevartTimeTrackerModelsMoney {
  /**
   * Decimal
   * Gets or sets the money amount.
   * @format double
   */
  amount?: number;

  /**
   * String
   * Gets or sets the currency.
   */
  currency?: string | null;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsOverBudgetBehaviour = 0 | 1 | 2;

export interface IDevartTimeTrackerModelsProject {
  /** ICollection`1 */
  members?: IDevartTimeTrackerModelsProjectMember[] | null;

  /** ICollection`1 */
  groups?: IDevartTimeTrackerModelsProjectGroup[] | null;

  /** ICollection`1 */
  workTypes?: IDevartTimeTrackerModelsProjectWorkType[] | null;
  commonBillableRate?: IDevartTimeTrackerModelsRate;

  /** PersonalRate[] */
  personalRates?: IDevartTimeTrackerModelsProjectPersonalRate[] | null;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;

  /** String */
  projectName?: string | null;

  /** String */
  projectCode?: string | null;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
  projectStatus?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * Gets or sets the client identifier.
   * @format int32
   */
  clientId?: number | null;

  /**
   * String
   * Gets or sets the relative path to the project avatar.
   * For example, /Content/Avatars/avatar_12.svg.
   */
  avatar?: string | null;

  /** Boolean */
  isBillable?: boolean;
  invoiceMethod?: IDevartTimeTrackerModelsInvoiceMethod;
  budgetingMethod?: IDevartTimeTrackerModelsBudgetingMethod;
  spentRatesType?: IDevartTimeTrackerModelsSpentRatesType;

  /**
   * Decimal
   * Gets or sets budget size.
   * Can be a money or hours.
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  budgetSize?: number;
  overBudgetBehaviour?: IDevartTimeTrackerModelsOverBudgetBehaviour;
  budgetPeriod?: IDevartTimeTrackerModelsBudgetPeriod;

  /**
   * Nullable`1
   * @format date-time
   */
  budgetAppliedDate?: string | null;

  /**
   * Int32
   * @format int32
   * @min 0
   * @max 100
   */
  budgetAlertPercents?: number;

  /** String */
  notes?: string | null;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  projectFee?: number;
  projectFeePeriod?: IDevartTimeTrackerModelsFeePeriod;
}

export interface IDevartTimeTrackerModelsProjectPersonalRate {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 1000000000
   */
  billableRateAmount?: number;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 1000000000
   */
  budgetHours?: number;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 1000000000
   */
  memberFee?: number;
}

export interface IDevartTimeTrackerModelsProjectGroup {
  /**
   * Int32
   * @format int32
   */
  projectId?: number;
  userGroup?: IDevartTimeTrackerModelsUserGroup;

  /**
   * Int32
   * @format int32
   */
  userGroupId?: number;
}

export interface IDevartTimeTrackerModelsProjectLite {
  /**
   * Int32
   * @format int32
   */
  memberCount?: number;

  /**
   * Int32
   * @format int32
   */
  groupCount?: number;

  /**
   * Decimal
   * @format double
   */
  billableAmount?: number;

  /** String */
  billableCurrency?: string | null;

  /**
   * Decimal
   * @format double
   */
  totalBudget?: number;

  /**
   * Decimal
   * @format double
   */
  spentBudget?: number;

  /** String */
  budgetCurrency?: string | null;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;

  /** String */
  projectName?: string | null;

  /** String */
  projectCode?: string | null;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
  projectStatus?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * Gets or sets the client identifier.
   * @format int32
   */
  clientId?: number | null;

  /**
   * String
   * Gets or sets the relative path to the project avatar.
   * For example, /Content/Avatars/avatar_12.svg.
   */
  avatar?: string | null;

  /** Boolean */
  isBillable?: boolean;
  invoiceMethod?: IDevartTimeTrackerModelsInvoiceMethod;
  budgetingMethod?: IDevartTimeTrackerModelsBudgetingMethod;
  spentRatesType?: IDevartTimeTrackerModelsSpentRatesType;

  /**
   * Decimal
   * Gets or sets budget size.
   * Can be a money or hours.
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  budgetSize?: number;
  overBudgetBehaviour?: IDevartTimeTrackerModelsOverBudgetBehaviour;
  budgetPeriod?: IDevartTimeTrackerModelsBudgetPeriod;

  /**
   * Nullable`1
   * @format date-time
   */
  budgetAppliedDate?: string | null;

  /**
   * Int32
   * @format int32
   * @min 0
   * @max 100
   */
  budgetAlertPercents?: number;

  /** String */
  notes?: string | null;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  projectFee?: number;
  projectFeePeriod?: IDevartTimeTrackerModelsFeePeriod;
}

export interface IDevartTimeTrackerModelsProjectMember {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfile;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;
  role?: IDevartTimeTrackerModelsProjectRole;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsProjectRole = 0 | 1;

export interface IDevartTimeTrackerModelsProjectScope {
  /** IList`1 */
  workTypeIdentifires?: number[] | null;

  /** IList`1 */
  workTypeIdentifiresNonBillable?: number[] | null;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;

  /** String */
  projectName?: string | null;

  /** String */
  projectCode?: string | null;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
  projectStatus?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * Gets or sets the client identifier.
   * @format int32
   */
  clientId?: number | null;

  /**
   * String
   * Gets or sets the relative path to the project avatar.
   * For example, /Content/Avatars/avatar_12.svg.
   */
  avatar?: string | null;

  /** Boolean */
  isBillable?: boolean;
  invoiceMethod?: IDevartTimeTrackerModelsInvoiceMethod;
  budgetingMethod?: IDevartTimeTrackerModelsBudgetingMethod;
  spentRatesType?: IDevartTimeTrackerModelsSpentRatesType;

  /**
   * Decimal
   * Gets or sets budget size.
   * Can be a money or hours.
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  budgetSize?: number;
  overBudgetBehaviour?: IDevartTimeTrackerModelsOverBudgetBehaviour;
  budgetPeriod?: IDevartTimeTrackerModelsBudgetPeriod;

  /**
   * Nullable`1
   * @format date-time
   */
  budgetAppliedDate?: string | null;

  /**
   * Int32
   * @format int32
   * @min 0
   * @max 100
   */
  budgetAlertPercents?: number;

  /** String */
  notes?: string | null;

  /**
   * Decimal
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  projectFee?: number;
  projectFeePeriod?: IDevartTimeTrackerModelsFeePeriod;
}

export enum IDevartTimeTrackerModelsProjectStatus {
  Active = 'active',
  Done = 'done',
  Archived = 'archived',
}

export interface IDevartTimeTrackerModelsProjectsUpdate {
  /**
   * Int32[]
   * Projects identifiers
   */
  projects?: number[] | null;
  projectStatus?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * Undefined - without change, 0 - 'No client'
   * @format int32
   */
  clientId?: number | null;
}

export interface IDevartTimeTrackerModelsProjectWorkType {
  /**
   * Int32
   * @format int32
   */
  workTypeId?: number;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;
  billableRate?: IDevartTimeTrackerModelsRate;

  /** Boolean */
  nonBillable?: boolean;
}

export interface IDevartTimeTrackerModelsRate {
  /**
   * Decimal
   * @format double
   * @min 0
   * @max 1000000000
   */
  amount?: number;

  /** String */
  currency: string;
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsReportTimeRoundingMode = 0 | 1 | 2 | 3;

export interface IDevartTimeTrackerModelsRequiredFieldsMap {
  /** Boolean */
  description?: boolean;

  /** Boolean */
  project?: boolean;

  /** Boolean */
  tags?: boolean;

  /** Boolean */
  taskLink?: boolean;
}

export interface IDevartTimeTrackerModelsScheduledJob {
  /**
   * Int32
   * @format int32
   */
  scheduledJobId?: number;

  /**
   * Nullable`1
   * @format int32
   */
  integrationId?: number | null;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
  jobType?: IDevartTimeTrackerModelsJobType;
  jobStatus?: IDevartTimeTrackerModelsJobStatus;

  /**
   * Nullable`1
   * @format date-time
   */
  nextRunTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  lastFinishTime?: string | null;

  /** String */
  errorMessage?: string | null;

  /** String */
  message?: string | null;
}

export enum IDevartTimeTrackerModelsServiceRole {
  Member = 'member',
  Client = 'client',
  Admin = 'admin',
  Owner = 'owner',
}

/**
 * @format int32
 */
export type IDevartTimeTrackerModelsSpentRatesType = 0 | 1 | 2;

export interface IDevartTimeTrackerModelsSubordination {
  /**
   * Int32
   * @format int32
   */
  id?: number;

  /** Boolean */
  byTeam?: boolean;

  /** Boolean */
  byProject?: boolean;
}

/**
 * Represents a customer's subscription for a TMetric account.
 */
export interface IDevartTimeTrackerModelsSubscription {
  /**
   * Int32
   * Gets or sets the identifier of an account to which the subscription is attached.
   * @format int32
   */
  accountId?: number;

  /**
   * DateTime
   * Gets or sets the subscription's expiration date.
   * @format date-time
   */
  expirationDate?: string;

  /**
   * Boolean
   * Gets a value indicating whether this subscription is annual.
   */
  isAnnual?: boolean;

  /**
   * Boolean
   * Gets or sets a value indicating whether the subscription has recurring billing flag.
   */
  isRecurring?: boolean;

  /**
   * Boolean
   * Gets or sets a value indicating whether the subscription is created for evaluation purpose.
   */
  isTrial?: boolean;

  /**
   * Int32
   * Gets or sets the maximum allowed number of users for the account
   * under this subscription. The value is defined at the time of purchase
   * by the 'Number of Users' pricing option in Avangate's system.
   * @format int32
   */
  maxUsers?: number;

  /**
   * DateTime
   * Gets or sets the subscription's start date.
   * @format date-time
   */
  startDate?: string;

  /** Represents the subscription status. */
  status?: IDevartTimeTrackerModelsSubscriptionStatus;

  /**
   * Int32
   * Gets or sets the subscription plan identifier.
   * @format int32
   */
  subscriptionId?: number;

  /** Subscription plan represents a set of pricing options for TMetric customers. */
  subscriptionPlan?: IDevartTimeTrackerModelsSubscriptionPlan;

  /**
   * Int32
   * Gets or sets the identifier of the subscription plan
   * that defines the product features avaiable for the subscritpion.
   * @format int32
   */
  subscriptionPlanId?: number;
}

export interface IDevartTimeTrackerModelsSubscriptionFeaturesMap {
  /** Boolean */
  tasks?: boolean;

  /** Boolean */
  integrations?: boolean;

  /** Boolean */
  billableRates?: boolean;

  /** Boolean */
  costRates?: boolean;

  /** Boolean */
  workTypes?: boolean;

  /** Boolean */
  clientContacts?: boolean;

  /** Boolean */
  activityKeeping?: boolean;

  /** Boolean */
  workSchedule?: boolean;

  /** Boolean */
  budget?: boolean;

  /** Boolean */
  timeTrackingPermissions?: boolean;

  /** Boolean */
  timeSheetLocking?: boolean;

  /** Boolean */
  rounding?: boolean;

  /** Boolean */
  customImages?: boolean;

  /** Boolean */
  activityLevels?: boolean;

  /** Boolean */
  applicationUsage?: boolean;

  /** Boolean */
  screenshots?: boolean;

  /** Boolean */
  activitySettings?: boolean;

  /** Boolean */
  timeOff?: boolean;

  /** Boolean */
  modifyingNotSelfTrackers?: boolean;

  /** Boolean */
  externalCalendars?: boolean;
}

/**
 * Subscription plan represents a set of pricing options for TMetric customers.
 */
export interface IDevartTimeTrackerModelsSubscriptionPlan {
  /**
   * String
   * Gets or sets the subscription plan's description.
   */
  description?: string | null;

  /**
   * String
   * Gets or sets the external plan identifier which is an pricing option unique code in Avagate's system.
   */
  externalPlanId?: string | null;

  /**
   * Boolean
   * Gets or sets a value indicating whether this plan is deprecated (cannot be used for new subscriptions).
   */
  isDeprecated?: boolean;

  /**
   * Boolean
   * Gets a value indicating whether this plan is free one.
   */
  isFree?: boolean;

  /**
   * String
   * Gets or sets the subscription plan's name.
   */
  name?: string | null;

  /**
   * Decimal
   * Gets or sets the price (in USD ) per user per month for annual billing.
   * @format double
   */
  priceAnnualUsd?: number;

  /**
   * Decimal
   * Gets or sets the price (in USD ) per user per month for monthly billing.
   * @format double
   */
  priceMonthlyUsd?: number;

  /**
   * Int32
   * Gets or sets the subscription plan identifier.
   * @format int32
   */
  subscriptionPlanId?: number;

  /**
   * Int32
   * Gets or sets max users with role Client for plan
   * @format int32
   */
  maxClients?: number;
}

/**
 * Represents the subscription status.
 * @format int32
 */
export type IDevartTimeTrackerModelsSubscriptionStatus = 0 | 1 | 2 | 3 | 4 | 128;

export interface IDevartTimeTrackerModelsSummaryProjectReportRow {
  /** String */
  project?: string | null;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;

  /** String */
  projectCode?: string | null;

  /** String */
  client?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  clientId?: number | null;

  /**
   * Decimal
   * @format double
   */
  totalBudget?: number;

  /**
   * Nullable`1
   * @format double
   */
  spentBudget?: number | null;

  /** String */
  budgetCurrency?: string | null;

  /** Money[] */
  costs?: IDevartTimeTrackerModelsMoney[] | null;

  /**
   * Double
   * @format double
   */
  duration?: number;

  /**
   * Double
   * @format double
   */
  billableDuration?: number;

  /** Money[] */
  billableAmount?: IDevartTimeTrackerModelsMoney[] | null;
}

export interface IDevartTimeTrackerModelsSummaryStaffReportRow {
  /** String */
  user?: string | null;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /**
   * Int32
   * @format int32
   */
  workdays?: number;

  /**
   * Nullable`1
   * @format double
   */
  paidTimeOffHours?: number | null;

  /**
   * Nullable`1
   * @format double
   */
  timeBalance?: number | null;

  /** Represents the timer abstraction. */
  timer?: ITMetricTimeEntriesDomainModelsTimer;

  /**
   * Nullable`1
   * @format double
   */
  beyondSchedule?: number | null;

  /** Money[] */
  costs?: IDevartTimeTrackerModelsMoney[] | null;

  /**
   * Double
   * @format double
   */
  duration?: number;

  /**
   * Double
   * @format double
   */
  billableDuration?: number;

  /** Money[] */
  billableAmount?: IDevartTimeTrackerModelsMoney[] | null;
}

export enum IDevartTimeTrackerModelsTaskChangeType {
  Created = 'created',
  Deleted = 'deleted',
  Restored = 'restored',
  AssigneeChanged = 'assigneeChanged',
  CompleteStatusChanged = 'completeStatusChanged',
  ProjectChanged = 'projectChanged',
  NameChanged = 'nameChanged',
  DescriptionChanged = 'descriptionChanged',
  TagChanged = 'tagChanged',
  DueDateChanged = 'dueDateChanged',
  EstimateChanged = 'estimateChanged',
  WorklogAdded = 'worklogAdded',
}

export interface IDevartTimeTrackerModelsTaskReportRow {
  /** Money[] */
  costs?: IDevartTimeTrackerModelsMoney[] | null;

  /** String */
  user?: string | null;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /** String */
  project?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectId?: number | null;

  /** String */
  projectCode?: string | null;

  /** String */
  workType?: string | null;

  /** String */
  client?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  clientId?: number | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectTaskId?: number | null;

  /** String */
  description?: string | null;

  /** String */
  issueUrl?: string | null;

  /** String */
  issueId?: string | null;

  /** String[] */
  tags?: string[] | null;

  /**
   * Double
   * @format double
   */
  duration?: number;

  /**
   * Double
   * @format double
   */
  billableDuration?: number;

  /** Money[] */
  billableAmount?: IDevartTimeTrackerModelsMoney[] | null;
}

/**
* Represents a time entry of aggregated user's activity. The entrys are aligned to clock.
The first time line in a day starts at 00:00. Entry duration is 15 minutes.
*/
export interface IDevartTimeTrackerModelsTimelineEntry {
  /**
   * List`1
   * Gets or sets the timeline entry details.
   */
  details?: IDevartTimeTrackerModelsTimelineEntryDetail[] | null;

  /**
   * DateTime
   * @format date-time
   */
  startTime?: string;
}

/**
 * Stores the information about the application in which the user was working during the specified timeline entry.
 */
export interface IDevartTimeTrackerModelsTimelineEntryDetail {
  /**
   * Int32
   * Gets or sets the application's activity time in seconds.
   * Usually, this indicates that a particular window was active.
   * @format int32
   */
  activitySeconds?: number;

  /**
   * Int32
   * @format int32
   */
  totalSeconds?: number;

  /** Stores the information about the process that was active during a timeline entry. */
  timelineProcess?: IDevartTimeTrackerModelsTimelineProcess;

  /** Stores the information about the foreground window that was active during a timeline entry. */
  timelineWindow?: IDevartTimeTrackerModelsTimelineWindow;
}

/**
 * Stores the information about the process that was active during a timeline entry.
 */
export interface IDevartTimeTrackerModelsTimelineProcess {
  /**
   * String
   * Gets or sets the name of the main process module (.exe file).
   */
  processName: string;
}

/**
 * Stores the information about the foreground window that was active during a timeline entry.
 */
export interface IDevartTimeTrackerModelsTimelineWindow {
  /**
   * String
   * Gets or sets the name of the foreground window that used worked in.
   */
  windowText?: string | null;
}

export interface IDevartTimeTrackerModelsTimeZoneInfoLite {
  /** String */
  id?: string | null;

  /** String */
  displayName?: string | null;

  /**
   * Double
   * @format double
   */
  winterOffset?: number;

  /**
   * Double
   * @format double
   */
  summerOffset?: number;

  /**
   * Nullable`1
   * @format double
   */
  currentOffset?: number | null;
}

export interface IDevartTimeTrackerModelsUserGroup {
  /**
   * Int32
   * @format int32
   */
  userGroupId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /** String */
  name: string;

  /** ICollection`1 */
  members?: IDevartTimeTrackerModelsUserGroupMember[] | null;

  /** ICollection`1 */
  supervisors?: IDevartTimeTrackerModelsUserGroupSupervisor[] | null;
}

export interface IDevartTimeTrackerModelsUserGroupMember {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfile;

  /**
   * Int32
   * @format int32
   */
  userGroupId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
}

export interface IDevartTimeTrackerModelsUserGroupSupervisor {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfile;

  /**
   * Int32
   * @format int32
   */
  userGroupId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
}

export interface IDevartTimeTrackerModelsUserProfile {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /**
   * Int32
   * @format int32
   */
  activeAccountId?: number;

  /**
   * String
   * Gets or sets end-User's full name in displayable form including all name parts,
   * possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
   */
  userName?: string | null;

  /**
   * String
   * Gets or sets the date format.
   */
  dateFormat?: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'DD.MM.YYYY' | 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD' | null;

  /**
   * String
   * Gets or sets the time format.
   */
  timeFormat?: 'H:mm' | 'h:mm a' | null;

  /** Nullable`1 */
  showBreaks?: boolean | null;

  /**
   * Nullable`1
   * Gets or sets the registration date in UTC.
   * @format date-time
   */
  registrationDate?: string | null;
  timeZoneInfo?: IDevartTimeTrackerModelsTimeZoneInfoLite;

  /** Boolean */
  isRegistered?: boolean;

  /** String */
  email: string;

  /**
   * IList
   * Gets or sets the collection of objects the define the user's membership in service accounts.
   * This collection defines which service accounts the user can access.
   * Accounts where user is locked are not included in the list.
   */
  accountMembership?: any[] | null;

  /** Nullable`1 */
  optinEmail?: boolean | null;

  /** String */
  avatar?: string | null;

  /** String */
  defaultAvatar?: string | null;
  cultureInfo?: IDevartTimeTrackerModelsCultureInfoLite;
}

export interface IDevartTimeTrackerModelsUserProfileLite {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /** String */
  userName?: string | null;

  /** String */
  timeZone?: string | null;

  /** String */
  avatar?: string | null;
}

export interface IDevartTimeTrackerModelsWebToolIssueTimer {
  /** Boolean */
  isStarted?: boolean;

  /** Nullable`1 */
  isBillable?: boolean | null;

  /** Boolean */
  showIssueId?: boolean;

  /**
   * Int32
   * @format int32
   */
  projectId?: number;

  /** String */
  issueId?: string | null;

  /** String */
  issueName?: string | null;

  /** String */
  description?: string | null;

  /** String */
  serviceType?: string | null;

  /** String */
  projectName?: string | null;

  /** IList`1 */
  tagNames?: string[] | null;

  /** String */
  serviceUrl?: string | null;

  /** String */
  issueUrl?: string | null;
}

export interface IDevartTimeTrackerViewModelsActivityCaptureSettings {
  /** Boolean */
  activityLevels?: boolean;

  /** Boolean */
  appsAndSites?: boolean;

  /** Boolean */
  screenshots?: boolean;
}

export interface IDevartTimeTrackerViewModelsBalance {
  month?: IDevartTimeTrackerViewModelsBalanceData;
  today?: IDevartTimeTrackerViewModelsBalanceData;
}

export interface IDevartTimeTrackerViewModelsBalanceData {
  /**
   * Nullable`1
   * @format int64
   */
  requiredSeconds?: number | null;

  /**
   * Int64
   * @format int64
   */
  actualSeconds?: number;

  /**
   * Int64
   * @format int64
   */
  actualSecondsRounded?: number;
}

export interface IDevartTimeTrackerViewModelsClient {
  /** String */
  iconUrl?: string | null;

  /**
   * Int32
   * The identifier
   * @format int32
   */
  id: number;

  /**
   * String
   * The name
   */
  name?: string | null;
}

export interface IDevartTimeTrackerViewModelsExternalLink {
  /**
   * String
   * The caption of link, e.g "#12345" or "Open in Asana"
   */
  caption?: string | null;

  /**
   * String
   * The icon absoulte URL, e.g. "https://services.tmetric.com/storage/Content/Integrations/jira.svg"
   */
  iconUrl?: string | null;

  /**
   * String
   * The absolute external URL, e.g. "http://jira.myserver.local/browse/PROJ-1234"
   */
  link?: string | null;

  /**
   * String
   * The external issue identifier, e.g. "#12345", "PROJ-1234", "89ABCDEF-0123-4567-89AB-CDEF01234567"
   */
  issueId?: string | null;
}

export interface IDevartTimeTrackerViewModelsIntegrationLite {
  /**
   * String
   * The integration URL, e.g "http://jira.myserver.local"
   */
  url?: string | null;

  /**
   * String
   * The type of integration, e.g. "Jira"
   */
  type?: string | null;
}

export interface IDevartTimeTrackerViewModelsPermissions {
  /** Boolean */
  manualTimeEditing?: boolean;

  /** Boolean */
  mobileTimeTracking?: boolean;

  /** Boolean */
  workingOnWeekendsAndHolidays?: boolean;
}

export interface IDevartTimeTrackerViewModelsRequiredFields {
  /** Boolean */
  description?: boolean;

  /** Boolean */
  project?: boolean;

  /** Boolean */
  tags?: boolean;

  /** Boolean */
  taskLink?: boolean;
}

/**
 * @format int32
 */
export type ITimeTrackerDomainModelsProjectBillingFilter = 0 | 1 | 2 | 3;

/**
 * @format int32
 */
export type ITimeTrackerDomainModelsProjectBudgetFilter = 0 | 1 | 2;

/**
 * @format int32
 */
export type ITimeTrackerDomainModelsProjectStatusFilter = 0 | 1 | 2 | 3 | 4;

export interface ITMetricAccountsActivitySettings {
  /**
   * Int32
   * @format int32
   */
  inactivityStopMinutes?: number;

  /** Boolean */
  captureActivityLine?: boolean;

  /** Boolean */
  captureActivityLevels?: boolean;

  /** Boolean */
  captureAppsAndSites?: boolean;

  /** Boolean */
  captureScreenshots?: boolean;

  /** Boolean */
  blurScreenshots?: boolean;
}

export interface ITMetricAccountsDomainModelsAccessTokenReponse {
  /** String */
  accessToken?: string | null;

  /**
   * Int64
   * @format int64
   */
  expiresIn?: number;

  /** String */
  tokenType?: string | null;
}

export interface ITMetricAccountsTimeTrackingSettings {
  /** Boolean */
  allowManualEditing?: boolean;

  /** Boolean */
  allowNewTags?: boolean;

  /** Boolean */
  allowNewTask?: boolean;

  /** Boolean */
  allowNewProject?: boolean;

  /** Boolean */
  requireDescription?: boolean;

  /** Boolean */
  requireProject?: boolean;

  /** Boolean */
  requireTags?: boolean;

  /** Boolean */
  requireTask?: boolean;
}

export interface ITMetricAccountsUserAccount {
  /**
   * Int32
   * @format int32
   */
  id?: number;

  /** String */
  name?: string | null;

  /**
   * Int32
   * 0 - sunday, 1 - monday, 6 - saturday
   * @format int32
   */
  firstWeekDay?: number;
  timeTracking?: ITMetricAccountsTimeTrackingSettings;
  activity?: ITMetricAccountsActivitySettings;
  role?: IDevartTimeTrackerModelsServiceRole;
}

export interface ITMetricAccountsUserDetailed {
  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  activeAccountId?: number | null;

  /** String */
  dateFormat?: string | null;

  /** String */
  timeFormat?: string | null;

  /** String */
  email?: string | null;

  /** String */
  iconUrl?: string | null;
  cultureInfo?: IDevartTimeTrackerModelsCultureInfoLite;
  timeZone?: IDevartTimeTrackerModelsTimeZoneInfoLite;

  /** List`1 */
  accounts?: ITMetricAccountsUserAccount[] | null;
}

export interface ITMetricAccountsViewModelsTeam {
  /** String */
  iconUrl?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricAccountsViewModelsUser {
  /** String */
  iconUrl?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricAccountsViewModelsUserWithTimeZone {
  /** String */
  timeZone?: string | null;

  /** String */
  iconUrl?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricAccountsViewModelsV2Account {
  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Guid
   * @format uuid
   */
  externalAccountId?: string;

  /**
   * Byte
   * 0 - sunday, 1 - monday, 6 - saturday
   * @format int32
   */
  firstWeekDay?: number;

  /** String */
  accountName?: string | null;

  /** String */
  accountLogo?: string | null;

  /** String */
  companyAddress?: string | null;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;

  /** String */
  reportTimeFormat?: string | null;
  reportTimeRoundingMode?: IDevartTimeTrackerModelsReportTimeRoundingMode;

  /**
   * Byte
   * @format int32
   */
  reportTimeRoundingMinutes?: number;

  /**
   * Int16
   * 0 - only today is editable, -1 - all days are editable
   * @format int32
   */
  editableDays?: number;

  /** Boolean */
  reportDetailedTimeEnabled?: boolean;

  /** Boolean */
  canMembersManagePublicProjects?: boolean;

  /** Boolean */
  canMembersCreateTags?: boolean;

  /** Boolean */
  hasDemoData?: boolean;

  /**
   * Decimal
   * @format double
   */
  workingHours?: number;

  /** Boolean[] */
  workdays?: boolean[] | null;

  /** AccountDate[] */
  dates?: IDevartTimeTrackerModelsAccountDate[] | null;

  /** String */
  surveyCompanyIndustry?: string | null;

  /**
   * Int32
   * @format int32
   */
  inactivityStopMinutes?: number;

  /** Boolean */
  blurScreenshots?: boolean;
  permissions?: IDevartTimeTrackerViewModelsPermissions;
  requiredFields?: IDevartTimeTrackerViewModelsRequiredFields;
  activityCaptureSettings?: IDevartTimeTrackerViewModelsActivityCaptureSettings;

  /**
   * MemberInfo[]
   * Returns members time tracking permissions
   */
  members?: IDevartTimeTrackerModelsMemberInfo[] | null;
  defaultWorkweek?: ITMetricWorkSchedulesViewModelsWorkSchedule;

  /** Boolean */
  irregularWorkingHours?: boolean;
}

export interface ITMetricAccountsViewModelsV2AccountMember {
  /**
   * Int32
   * @format int32
   */
  accountMemberId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfile;
  role?: IDevartTimeTrackerModelsServiceRole;

  /**
   * Nullable`1
   * @format int32
   */
  clientId?: number | null;

  /** Represents the account member status. */
  status?: IDevartTimeTrackerModelsAccountMemberStatus;
  accountMemberScope?: IDevartTimeTrackerModelsAccountMemberScope;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;
  costRate?: IDevartTimeTrackerModelsRate;

  /**
   * Nullable`1
   * @format date-time
   */
  costRateApplyDate?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  defaultWorkTypeId?: number | null;
  permissions?: IDevartTimeTrackerViewModelsPermissions;
  requiredFields?: IDevartTimeTrackerViewModelsRequiredFields;
  activityCaptureSettings?: IDevartTimeTrackerViewModelsActivityCaptureSettings;
  personalWorkweek?: ITMetricWorkSchedulesViewModelsWorkSchedule;

  /** Boolean */
  irregularWorkingHours?: boolean;
}

export interface ITMetricAccountsViewModelsV2UserProfile {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /**
   * Int32
   * @format int32
   */
  activeAccountId?: number;

  /**
   * String
   * Gets or sets end-User's full name in displayable form including all name parts,
   * possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
   */
  userName?: string | null;

  /**
   * String
   * Gets or sets the date format.
   */
  dateFormat?: string | null;

  /**
   * String
   * Gets or sets the time format.
   */
  timeFormat?: string | null;

  /** Nullable`1 */
  showBreaks?: boolean | null;

  /**
   * Nullable`1
   * @format date-time
   */
  registrationDate?: string | null;
  timeZoneInfo?: IDevartTimeTrackerModelsTimeZoneInfoLite;

  /** Boolean */
  isRegistered?: boolean;

  /** String */
  email?: string | null;

  /**
   * IList
   * Gets or sets the collection of objects the define the user's membership in service accounts.
   * This collection defines which service accounts the user can access.
   * Accounts where user is locked are not included in the list.
   */
  accountMembership?: any[] | null;

  /** Nullable`1 */
  optinEmail?: boolean | null;

  /** String */
  avatar?: string | null;

  /** String */
  defaultAvatar?: string | null;
  cultureInfo?: IDevartTimeTrackerModelsCultureInfoLite;

  /** List`1 */
  calendarIntegrations?: ITMetricExternalCalendarsDomainModelsCalendarType[] | null;
}

/**
 * @format int32
 */
export type ITMetricExternalCalendarsDomainModelsCalendarType = 0 | 1;

export interface ITMetricProjectsViewModelsProject {
  /** String */
  iconUrl?: string | null;
  client?: IDevartTimeTrackerViewModelsClient;
  status?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricProjectsViewModelsProjectDetailed {
  /**
   * Nullable`1
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  budgetSize?: number | null;

  /** String */
  iconUrl?: string | null;
  client?: IDevartTimeTrackerViewModelsClient;
  status?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricTagsDomainModelsTag {
  /**
   * Int32
   * @format int32
   */
  tagId?: number;

  /** String */
  tagName: string;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;
  defaultBillableRate?: IDevartTimeTrackerModelsRate;

  /** List`1 */
  workTypeProjects?: number[] | null;

  /** Boolean */
  isWorkType?: boolean;
}

/**
 * The tag.
 */
export interface ITMetricTagsViewModelsTag {
  /**
   * Boolean
   * The value indicating whether this tag is work type
   */
  isWorkType?: boolean;

  /**
   * Int32
   * The identifier
   * @format int32
   */
  id: number;

  /**
   * String
   * The name
   */
  name?: string | null;
}

export interface ITMetricTasksDomainModelsProjectTask {
  assignee?: IDevartTimeTrackerModelsUserProfile;

  /**
   * Nullable`1
   * @format int32
   */
  assigneeId?: number | null;

  /**
   * Decimal
   * Gets or sets budget size.
   * Can be a money or hours.
   * @format double
   * @min 0
   * @max 9999999999999.99
   */
  budgetSize?: number;

  /**
   * Nullable`1
   * @format int32
   */
  creatorId?: number | null;

  /** String */
  description?: string | null;

  /** String */
  externalIssueId?: string | null;

  /** Boolean */
  showIssueId?: boolean;

  /**
   * Nullable`1
   * @format int32
   */
  integrationId?: number | null;

  /** String */
  integrationUrl?: string | null;

  /** String */
  relativeIssueUrl?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectId?: number | null;

  /**
   * Int32
   * @format int32
   */
  projectTaskId?: number;

  /** Boolean */
  isCompleted?: boolean;

  /**
   * IList`1
   * Gets or sets the tags identifiers.
   */
  tagsIdentifiers?: number[] | null;
}

export interface ITMetricTasksViewModelsRecentTask {
  /** Boolean */
  isBillable?: boolean;

  /**
   * Int32
   * The task identifier
   * @format int32
   */
  id?: number;

  /**
   * String
   * The task name
   */
  name?: string | null;
  project?: ITMetricProjectsViewModelsProject;
  externalLink?: IDevartTimeTrackerViewModelsExternalLink;

  /**
   * List`1
   * List of task tags
   */
  tags?: ITMetricTagsViewModelsTag[] | null;
}

export interface ITMetricTasksViewModelsTask {
  /**
   * String
   * The task description in markdown formating syntax
   */
  description?: string | null;

  /**
   * Nullable`1
   * The value indicating whether this task is completed
   */
  isCompleted?: boolean | null;
  creator?: ITMetricAccountsViewModelsUser;

  /**
   * DateTime
   * The timestamp when task was created in requestor local timezone
   * @format date-time
   */
  created?: string;

  /**
   * DateTime
   * The timestamp when task was modified in requestor local timezone
   * @format date-time
   */
  modified?: string;

  /**
   * Nullable`1
   * @format date-time
   */
  dueDate?: string | null;
  assignee?: ITMetricAccountsViewModelsUser;

  /**
   * Nullable`1
   * @format int32
   * @min 0
   * @max 600000000
   */
  estimatedMinutes?: number | null;

  /**
   * Int32
   * The task identifier
   * @format int32
   */
  id?: number;

  /**
   * String
   * The task name
   */
  name?: string | null;
  project?: ITMetricProjectsViewModelsProject;
  externalLink?: IDevartTimeTrackerViewModelsExternalLink;

  /**
   * List`1
   * List of task tags
   */
  tags?: ITMetricTagsViewModelsTag[] | null;
}

export interface ITMetricTasksViewModelsTaskBasic {
  externalLink?: IDevartTimeTrackerViewModelsExternalLink;
  integration?: IDevartTimeTrackerViewModelsIntegrationLite;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

/**
 * A change of task
 */
export interface ITMetricTasksViewModelsTaskChange {
  type?: IDevartTimeTrackerModelsTaskChangeType;

  /**
   * DateTime
   * The ISO datetime of change in requestor timezone
   * @format date-time
   */
  timestamp?: string;
  user?: ITMetricAccountsViewModelsUser;

  /**
   * String
   * Human-readable text of change
   */
  text?: string | null;

  /**
   * Object
   * The old value
   */
  oldValue?: any;

  /**
   * Object
   * The new value
   */
  newValue?: any;
}

/**
 * The source of tasks
 */
export enum ITMetricTasksViewModelsTaskType {
  Internal = 'internal',
  External = 'external',
  All = 'all',
}

export interface ITMetricTasksViewModelsTrashStatus {
  /**
   * Boolean
   * Value indicating whether the task should be deleted or restored.
   */
  isDeleted?: boolean;
}

export interface ITMetricTimeEntriesDomainModelsGroupTimeEntries {
  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;

  /** String */
  userName?: string | null;
  timeZone?: IDevartTimeTrackerModelsTimeZoneInfoLite;

  /** List`1 */
  entries?: ITMetricTimeEntriesDomainModelsTimeEntry[] | null;
}

/**
 * Represents work task last usage information.
 */
export interface ITMetricTimeEntriesDomainModelsRecentWorkTaskLegacy {
  details?: ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy;

  /**
   * IList`1
   * Gets or sets the tags identifiers.
   */
  tagsIdentifiers?: number[] | null;

  /**
   * Boolean
   * Gets or sets the billable status.
   */
  isBillable?: boolean;
}

export interface ITMetricTimeEntriesDomainModelsTimeEntry {
  /**
   * Nullable`1
   * Gets or sets the end time value for a external data contract. If EndTime == null this means that the time entry is active.
   * @format date-time
   */
  endTime?: string | null;

  /**
   * Nullable`1
   * @format int64
   */
  timerDuration?: number | null;

  /**
   * DateTime
   * @format date-time
   */
  startTime?: string;

  /** Nullable`1 */
  isBillable?: boolean | null;

  /** Boolean */
  isInvoiced?: boolean;

  /**
   * Int64
   * @format int64
   */
  timeEntryId?: number;
  details?: ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy;

  /**
   * String
   * Fill it on our own if needed.
   */
  projectName?: string | null;

  /**
   * IList`1
   * Gets or sets the tags identifiers.
   */
  tagsIdentifiers?: number[] | null;

  /** Boolean */
  isDeleted?: boolean;
}

export interface ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy {
  /** String */
  description?: string | null;

  /**
   * Nullable`1
   * @format int32
   */
  projectId?: number | null;
  projectTask?: ITMetricTasksDomainModelsProjectTask;
}

/**
 * Represents the timer abstraction.
 */
export interface ITMetricTimeEntriesDomainModelsTimer {
  /**
   * Boolean
   * Gets or sets a value indicating whether the timer is started.
   */
  isStarted?: boolean;

  /**
   * Boolean
   * Gets or sets a value indicating whether the timer is long.
   */
  isLong?: boolean;

  /**
   * Nullable`1
   * Gets or sets a value indicating current time of timer.
   * @format date-time
   */
  endTime?: string | null;

  /**
   * Nullable`1
   * Gets or sets a value indicating monthly balance in milliseconds, excluding active timer.
   * @format int64
   */
  monthlyBalance?: number | null;
  details?: ITMetricTimeEntriesDomainModelsTimeEntryDetailLegacy;

  /**
   * DateTime
   * Gets or sets the timer's start time.
   * @format date-time
   */
  startTime?: string;

  /**
   * IList`1
   * Gets or sets the tags identifiers.
   */
  tagsIdentifiers?: number[] | null;

  /**
   * Boolean
   * Gets or sets the billable status.
   */
  isBillable?: boolean;
}

export interface ITMetricTimeEntriesViewModelsBreakEntry {
  /**
   * Nullable`1
   * @format date-time
   */
  startTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endTime?: string | null;
}

export interface ITMetricTimeEntriesViewModelsTimeEntry {
  /**
   * Int64
   * @format int64
   */
  id?: number;
  project?: ITMetricProjectsViewModelsProject;
  task?: ITMetricTasksViewModelsTaskBasic;

  /** String */
  note?: string | null;

  /** List`1 */
  tags?: ITMetricTagsViewModelsTag[] | null;

  /** Nullable`1 */
  isBillable?: boolean | null;

  /** Nullable`1 */
  isInvoiced?: boolean | null;

  /**
   * Nullable`1
   * @format date-time
   */
  startTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endTime?: string | null;
}

export interface ITMetricTimeEntriesViewModelsTimeEntryProject {
  /**
   * Nullable`1
   * @format date-time
   */
  recentUsageTime?: string | null;

  /** String */
  iconUrl?: string | null;
  client?: IDevartTimeTrackerViewModelsClient;
  status?: IDevartTimeTrackerModelsProjectStatus;

  /**
   * Nullable`1
   * @format int32
   */
  id?: number | null;

  /** String */
  name?: string | null;
}

export interface ITMetricTimeOffDomainModelsBalanceMovement {
  /**
   * DateTime
   * @format date-time
   */
  date?: string;

  /**
   * Decimal
   * @format double
   */
  deltaHours?: number;

  /**
   * Decimal
   * @format double
   */
  balanceHours?: number;

  /** String */
  reason?: string | null;
  actionType?: ITMetricTimeOffDomainModelsTimeOffBalanceActionType;
}

export interface ITMetricTimeOffDomainModelsTimeOffBalance {
  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfileLite;

  /**
   * Int32
   * @format int32
   */
  timeOffPolicyId?: number;

  /** String */
  timeOffPolicyName?: string | null;

  /**
   * Decimal
   * @format double
   */
  balance?: number;

  /**
   * Decimal
   * @format double
   */
  used?: number;

  /**
   * Decimal
   * @format double
   */
  scheduled?: number;
}

/**
 * @format int32
 */
export type ITMetricTimeOffDomainModelsTimeOffBalanceActionType = 0 | 1 | 2 | 3 | 4;

export interface ITMetricTimeOffDomainModelsTimeOffPolicy {
  /**
   * Int32
   * @format int32
   */
  timeOffPolicyId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /** String */
  name: string;

  /** String */
  color?: string | null;

  /** String */
  iconUrl?: string | null;

  /** Boolean */
  enabled?: boolean;
  period?: ITMetricTimeOffDomainModelsTimeOffPolicyPeriod;

  /**
   * Decimal
   * @format double
   */
  accruedHoursPerPeriod?: number;

  /**
   * Decimal
   * @format double
   */
  balanceMaximumHours?: number;

  /** Boolean */
  paid?: boolean;

  /** Boolean */
  requiresApproval?: boolean;

  /** Boolean */
  resetBalanceYearly?: boolean;

  /** Boolean */
  allowNegativeBalance?: boolean;

  /** Boolean */
  allowOnlyFullDayRequest?: boolean;

  /**
   * DateTime
   * @format date-time
   */
  created?: string;

  /**
   * Nullable`1
   * @format date-time
   */
  archivedAt?: string | null;

  /** ICollection`1 */
  members?: ITMetricTimeOffDomainModelsTimeOffPolicyMember[] | null;
}

export interface ITMetricTimeOffDomainModelsTimeOffPolicyMember {
  /**
   * Int32
   * @format int32
   */
  timeOffPolicyMemberId?: number;

  /**
   * Int32
   * @format int32
   */
  timeOffPolicyId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfileLite;

  /**
   * DateTime
   * @format date-time
   */
  initialDate?: string;
}

/**
 * @format int32
 */
export type ITMetricTimeOffDomainModelsTimeOffPolicyPeriod = 0 | 1 | 2 | 3 | 4;

export interface ITMetricTimeOffDomainModelsTimeOffRequest {
  /**
   * Int32
   * @format int32
   */
  timeOffRequestId?: number;

  /**
   * Int32
   * @format int32
   */
  timeOffPolicyId?: number;

  /**
   * Int32
   * @format int32
   */
  accountId?: number;

  /**
   * Int32
   * @format int32
   */
  userProfileId?: number;
  userProfile?: IDevartTimeTrackerModelsUserProfileLite;

  /** String */
  description?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  requestDate?: string | null;
  status?: ITMetricTimeOffDomainModelsTimeOffRequestStatus;

  /** String */
  denialReason?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  startDate?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endDate?: string | null;

  /**
   * Decimal
   * @format double
   */
  hours?: number;

  /**
   * Nullable`1
   * @format int32
   */
  workdays?: number | null;

  /**
   * Int32
   * @format int32
   */
  approverId?: number;
  approver?: IDevartTimeTrackerModelsUserProfileLite;
}

/**
 * @format int32
 */
export type ITMetricTimeOffDomainModelsTimeOffRequestStatus = 0 | 1 | 2 | 3;

export interface ITMetricTimeOffViewModelsPolicy {
  /**
   * Int32
   * @format int32
   */
  id?: number;

  /** String */
  name?: string | null;

  /** String */
  iconUrl?: string | null;

  /** String */
  color?: string | null;

  /** Boolean */
  requiresApproval?: boolean;
}

export interface ITMetricTimeOffViewModelsPolicyStatistics {
  /**
   * Int32
   * @format int32
   */
  totalRequests?: number;

  /**
   * Int32
   * @format int32
   */
  deniedRequests?: number;

  /**
   * Int32
   * @format int32
   */
  approvedRequests?: number;

  /**
   * Int32
   * @format int32
   */
  needApprovalRequests?: number;
}

export interface ITMetricTimeOffViewModelsRequest {
  /**
   * Int32
   * @format int32
   */
  id?: number;
  policy?: ITMetricTimeOffViewModelsPolicy;

  /**
   * String
   * One of the values - MissedWorkday, NeedsApproval, Approved, Denied
   */
  status?: string | null;
  requester?: ITMetricAccountsViewModelsUserWithTimeZone;
  approver?: ITMetricAccountsViewModelsUserWithTimeZone;

  /**
   * Nullable`1
   * @format date-time
   */
  requestDate?: string | null;

  /**
   * DateTime
   * @format date-time
   */
  startDate?: string;

  /**
   * DateTime
   * @format date-time
   */
  endDate?: string;

  /**
   * Decimal
   * @format double
   */
  hours?: number;

  /**
   * Nullable`1
   * @format int32
   */
  workdays?: number | null;

  /** String */
  description?: string | null;

  /** String */
  denialReason?: string | null;
}

export interface ITMetricTimeOffViewModelsRequesterList {
  /** List`1 */
  teams?: ITMetricAccountsViewModelsTeam[] | null;

  /** List`1 */
  users?: ITMetricAccountsViewModelsUser[] | null;
}

export interface ITMetricTimeOffViewModelsTimeOffRequestResolution {
  /** Boolean */
  isApproved?: boolean;

  /** String */
  denialReason?: string | null;

  /**
   * DateTime
   * @format date-time
   */
  requestDate?: string;
}

export interface ITMetricWorkSchedulesViewModelsDay {
  /**
   * DateTime
   * Date in schedule
   * @format date-time
   */
  date?: string;

  /**
   * Boolean
   * Flag that indicates that day is working or not
   */
  isWorking?: boolean;

  /**
   * Nullable`1
   * Amount of working hours in this date
   * @format double
   */
  hours?: number | null;

  /**
   * Nullable`1
   * @format date-time
   */
  startTime?: string | null;

  /**
   * Nullable`1
   * @format date-time
   */
  endTime?: string | null;
}

export interface ITMetricWorkSchedulesViewModelsIndividualSchedule {
  user?: ITMetricAccountsViewModelsUser;

  /**
   * List`1
   * User schedule list
   */
  days?: ITMetricWorkSchedulesViewModelsDay[] | null;
}

export interface ITMetricWorkSchedulesViewModelsWorkSchedule {
  /**
   * Nullable`1
   * The start date when working schedule will apply
   * @format date-time
   */
  applyDate?: string | null;

  /**
   * List`1
   * List of days [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
   */
  weekdays?: ITMetricWorkSchedulesViewModelsDay[] | null;
}
