import { StockStatus } from '../types';

export const mockStock: StockStatus[] = [
  { rewardId: 'rw-1', currentStock: 14, minStockThreshold: 5 },
  { rewardId: 'rw-2', currentStock: 2, minStockThreshold: 3 }, // This will trigger a low-stock alert!
  { rewardId: 'rw-3', currentStock: 50, minStockThreshold: 10 }
];