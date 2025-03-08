import { EBenefitFields, IBenefit, IEmployee, ITransaction, ETransactionFields } from '../../common/models/base.model';

export const EMPLOYEES_DATA: IEmployee[] = [
  {
    id: 1,
    fullName: 'Andrii Mykytenko',
    role: 'QA Automation Engineer',
    department: 'SuperNova',
    location: 'Ukraine',
    benefitProgram: 'More energy',
    totalCompensation: 100000,
    totalUsedCompensation: 100
  },
  {
    id: 1,
    fullName: 'Andrii Mykytenko',
    role: 'QA Automation Engineer',
    department: 'SuperNova',
    location: 'Ukraine',
    benefitProgram: 'More energy',
    totalCompensation: 100000,
    totalUsedCompensation: 100
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
