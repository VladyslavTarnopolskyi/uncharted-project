import {
  IRequests,
  ERequestFields,
  ERequestStatus,
  IRequest,
  EDetailRequestFields,
  ERecipeStatus
} from '../../common/models/base.model';

export const REQUESTS_DATA: IRequests[] = [
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
  {
    id: 1,
    [ERequestFields.requestDate]: new Date(2025, 2, 2).toISOString(),
    [ERequestFields.fullName]: 'Andrii Mykytenko',
    [ERequestFields.email]: 'andrii.mykytenko@trinetix.com',
    [ERequestFields.requestStatus]: ERequestStatus.open,
    [ERequestFields.benefitProgram]: 'Custom',
    [ERequestFields.location]: 'Ukraine',
    [ERequestFields.totalUsed]: 0
  },
];

export const REQUEST_DATA: IRequest[] = [
  {
    id: 1,
    [EDetailRequestFields.transactionDate]: new Date(2025, 2, 2).toISOString(),
    [EDetailRequestFields.category]: 'Sport',
    [EDetailRequestFields.fullName]: 'Andrii Mykytenko',
    [EDetailRequestFields.recipient]: 'Amazon',
    [EDetailRequestFields.recipeAmountLocal]: '100 UAH',
    [EDetailRequestFields.recipeAmountUSD]: '10',
    [EDetailRequestFields.paymentPurpose]: 'Dance',
    [EDetailRequestFields.recipeStatus]: ERecipeStatus.waiting,
  }
]
