export interface IPages {
  title: string;
  path: string;
}

export enum EPagePath {
  requests = 'requests',
  employees = 'employees',
  dashboard = 'dashboard',
  login = 'login',
  request = 'request',
}

export enum ERequestFields {
  requestDate = 'requestDate',
  email = 'email',
  fullName = 'fullName',
  requestStatus = 'requestStatus',
  benefitProgram = 'benefitProgram',
  location = 'location',
  totalUsed = 'totalUsed',
}

export enum EDetailRequestFields {
  transactionDate = 'transactionDate',
  category = 'category',
  fullName = 'fullName',
  recipient = 'recipient',
  recipeAmountLocal = 'recipeAmountLocal',
  recipeAmountUSD = 'recipeAmountUSD',
  paymentPurpose = 'paymentPurpose',
  recipeStatus = 'recipeStatus',
}

export enum ERecipeStatus {
  waiting = 'waiting',
  declined = 'declined',
  cancelled = 'cancelled',
  approved = 'approved',
}
export namespace ERecipeStatus {
  export enum title {
    waiting = 'Waiting for Clarification',
    declined = 'Declined',
    cancelled = 'Cancelled',
    approved = 'Approved',
  }
}

export enum EEmployeeFields {
  fullName = 'fullName',
  role = 'role',
  department = 'department',
  location = 'location',
  benefitProgram = 'benefitProgram',
  totalCompensation = 'totalCompensation',
  totalUsedCompensation = 'totalUsedCompensation',
}

export enum ERequestStatus {
  open = 'open',
  waiting = 'waiting',
  processed = 'processed',
}


export namespace ERequestStatus {
  export enum title {
    open = 'Open',
    waiting = 'Waiting for Clarification',
    processed = 'Processed',
  }
}


export interface IRequests {
  id: number,
  [ERequestFields.requestDate]: string;
  [ERequestFields.requestStatus]: ERequestStatus;
  [ERequestFields.fullName]: string;
  [ERequestFields.email]: string;
  [ERequestFields.benefitProgram]: string;
  [ERequestFields.location]: string;
  [ERequestFields.totalUsed]: number;
}

export interface IRequest {
  id: number,
  [EDetailRequestFields.transactionDate]: string;
  [EDetailRequestFields.category]: string;
  [EDetailRequestFields.fullName]: string;
  [EDetailRequestFields.recipient]: string;
  [EDetailRequestFields.recipeAmountLocal]: string;
  [EDetailRequestFields.recipeAmountUSD]: string;
  [EDetailRequestFields.paymentPurpose]: string;
  [EDetailRequestFields.recipeStatus]: ERecipeStatus;
}

export interface IEmployee {
  id: number,
  [EEmployeeFields.fullName]: string;
  [EEmployeeFields.role]: string;
  [EEmployeeFields.department]: string;
  [EEmployeeFields.location]: string;
  [EEmployeeFields.benefitProgram]: string;
  [EEmployeeFields.totalCompensation]: number;
  [EEmployeeFields.totalUsedCompensation]: number;
}

export enum EBenefitFields {
  category = 'category',
  limit = 'limit',
  compensation = 'compensation',
  total = 'total',
  remaining = 'remaining',
}

export interface IBenefit {
  id: string;
  [EBenefitFields.category]: string;
  [EBenefitFields.limit]: number;
  [EBenefitFields.compensation]: number;
  [EBenefitFields.total]: number;
  [EBenefitFields.remaining]: number;
}

export enum ETransactionFields {
  date = 'date',
  category = 'category',
  amount = 'amount',
  amountUSD = 'amountUSD',
  attachments = 'attachments',
}

export interface ITransaction {
  id: string;
  [ETransactionFields.date]: string;
  [ETransactionFields.category]: string;
  [ETransactionFields.amount]: number;
  [ETransactionFields.amountUSD]: number;
  [ETransactionFields.attachments]: string;
}
