import { StockStatus } from '../types';
{/* This will trigger a low-stock alert!*/}
export const mockStock: StockStatus[] = [
  { rewardId: 'rw-1', currentStock: 14, minStockThreshold: 5 },
  { rewardId: 'rw-2', currentStock: 2, minStockThreshold: 3 }, 
  { rewardId: 'rw-3', currentStock: 50, minStockThreshold: 10 }
];