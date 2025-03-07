export interface IPages {
  title: string;
  path: string;
}

export enum EPagePath {
  requests = 'requests',
  employees = 'employees',
  dashboard = 'dashboard',
  login = 'login',
}

export enum EEmailFields {
  subject = 'subject',
  date = 'date',
  fullName = 'fullName',
  email = 'email',
  status = 'status',
  talentSpecialist = 'talentSpecialist',
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

export interface IEmail {
  id: number,
  [EEmailFields.subject]: string;
  [EEmailFields.date]: string;
  [EEmailFields.fullName]: string;
  [EEmailFields.email]: string;
  [EEmailFields.status]: string;
  [EEmailFields.talentSpecialist]: string;
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
