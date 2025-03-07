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
  waiting = 'Waiting for Clarification',
  declined = 'Declined',
  cancelled = 'Cancelled',
  approved = 'Approved',
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
  open = 'Open',
  waiting = 'Waiting for Clarification',
  processed = 'Processed',
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
