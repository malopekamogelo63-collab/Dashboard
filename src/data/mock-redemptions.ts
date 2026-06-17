import type { RedemptionRecord } from '../types';

export const mockRedemptions: RedemptionRecord[] = [
  {
    id: 'red-1',
    rewardId: 'rw-1',
    rewardName: 'R500 Uber Eats Voucher',
    userEmail: 'employee.one@company.com',
    redeemedAt: '2026-06-14T10:30:00Z',
    status: 'Completed'
  },
  {
    id: 'red-2',
    rewardId: 'rw-2',
    rewardName: 'Wireless Noise-Cancelling Headphones',
    userEmail: 'employee.two@company.com',
    redeemedAt: '2026-06-15T08:15:00Z',
    status: 'Processing'
  }
];