export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: 'Gift Cards' | 'Electronics' | 'Vouchers' | 'Experience';
  imageUrl: string;
}

export interface StockStatus {
  rewardId: string;
  currentStock: number;
  minStockThreshold: number; // Alerts when stock drops below this
}

export interface RedemptionRecord {
  id: string;
  rewardId: string;
  rewardName: string;
  userEmail: string;
  redeemedAt: string; // ISO Date String
  status: 'Completed' | 'Processing' | 'Failed';
}