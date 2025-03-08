import { EBenefitFields, IBenefit, IEmployee, ITransaction, ETransactionFields, EEmployeeFields } from '../../common/models/base.model';

export const EMPLOYEES_DATA: IEmployee[] = [
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
  {
    id: '1',
    [EEmployeeFields.fullName]: 'Andrii Mykytenko',
    [EEmployeeFields.role]: 'QA Automation Engineer',
    [EEmployeeFields.department]: 'SuperNova',
    [EEmployeeFields.location]: 'Ukraine',
    [EEmployeeFields.benefitProgram]: 'More energy',
    [EEmployeeFields.totalCompensation]: 100000,
    [EEmployeeFields.totalUsedCompensation]: 10,
  },
];

export const BENEFITS: IBenefit[] = [
  {
    id: '1',
    [EBenefitFields.category]: 'Psychotherapy',
    [EBenefitFields.limit]: 33,
    [EBenefitFields.compensation]: 100,
    [EBenefitFields.total]: 0,
    [EBenefitFields.remaining]: 33
  },
  {
    id: '1',
    [EBenefitFields.category]: 'English',
    [EBenefitFields.limit]: 33,
    [EBenefitFields.compensation]: 100,
    [EBenefitFields.total]: 0,
    [EBenefitFields.remaining]: 33
  },
  {
    id: '1',
    [EBenefitFields.category]: 'Sport',
    [EBenefitFields.limit]: 33,
    [EBenefitFields.compensation]: 50,
    [EBenefitFields.total]: 0,
    [EBenefitFields.remaining]: 33
  },
  {
    id: '1',
    [EBenefitFields.category]: 'TOTAL',
    [EBenefitFields.limit]: 99,
    [EBenefitFields.compensation]: 100,
    [EBenefitFields.total]: 0,
    [EBenefitFields.remaining]: 99
  },
];

export const TRANSACTIONS: ITransaction[] = [
  {
    id: '1',
    [ETransactionFields.date]:  new Date(2025, 2, 2).toISOString(),
    [ETransactionFields.category]: 'Psychotherapy',
    [ETransactionFields.amount]: 900,
    [ETransactionFields.amountUSD]: 100,
    [ETransactionFields.attachments]: 'View'
  },
  {
    id: '1',
    [ETransactionFields.date]:  new Date(2025, 2, 2).toISOString(),
    [ETransactionFields.category]: 'Psychotherapy',
    [ETransactionFields.amount]: 900,
    [ETransactionFields.amountUSD]: 100,
    [ETransactionFields.attachments]: 'View'
  },
  {
    id: '1',
    [ETransactionFields.date]:  new Date(2025, 2, 2).toISOString(),
    [ETransactionFields.category]: 'Psychotherapy',
    [ETransactionFields.amount]: 900,
    [ETransactionFields.amountUSD]: 100,
    [ETransactionFields.attachments]: 'View'
  },
  {
    id: '1',
    [ETransactionFields.date]:  new Date(2025, 2, 2).toISOString(),
    [ETransactionFields.category]: 'English',
    [ETransactionFields.amount]: 900,
    [ETransactionFields.amountUSD]: 100,
    [ETransactionFields.attachments]: 'View'
  },
  {
    id: '1',
    [ETransactionFields.date]:  new Date(2025, 2, 2).toISOString(),
    [ETransactionFields.category]: 'Sport',
    [ETransactionFields.amount]: 900,
    [ETransactionFields.amountUSD]: 100,
    [ETransactionFields.attachments]: 'View'
  },
]
