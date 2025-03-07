import { IEmail } from '../../common/models/base.model';

export const EMAILS_DATA: IEmail[] = [
  {
    id: 1,
    subject: 'Hi Team, I share with you my check',
    date: new Date(2022, 2, 2).toISOString(),
    fullName: 'Test User',
    email: 'email@r.com',
    status: 'status',
    talentSpecialist: 'test'
  },
  {
    id: 2,
    subject: 'Hi Team, I share with you my check',
    date: new Date(2022, 2, 2).toISOString(),
    fullName: 'Test User',
    email: 'email@r.com',
    status: 'new',
    talentSpecialist: 'test'
  },
  {
    id: 3,
    subject: 'Hi Team, I share with you my check',
    date: new Date(2022, 2, 2).toISOString(),
    fullName: 'Test User',
    email: 'email@r.com',
    status: 'status',
    talentSpecialist: 'test'
  },
];
