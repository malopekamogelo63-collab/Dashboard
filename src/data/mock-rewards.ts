import { Reward } from '../types';

export const mockRewards: Reward[] = [
  {
    id: 'rw-1',
    name: 'R500 Uber Eats Voucher',
    description: 'Get R500 off your next meal delivery or grocery order.',
    pointsCost: 5000,
    category: 'Vouchers',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500'
  },
  {
    id: 'rw-2',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium over-ear headphones with exceptional sound clarity.',
    pointsCost: 25000,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  },
  {
    id: 'rw-3',
    name: 'R200 Takealot Gift Card',
    description: 'Shop millions of products across hundreds of categories.',
    pointsCost: 2000,
    category: 'Gift Cards',
    imageUrl: 'https://images.unsplash.com/photo-1549463565-f72beba68404?w=500'
  }
];