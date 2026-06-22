import React, { useMemo } from 'react';

// Using an interface that perfectly matches what Analytics.tsx outputs
interface StockItem {
  rewardId: string;
  currentStock: number;
  minStockThreshold: number;
  displayName: string;
  healthStatus: string;
  id?: string | number;
  name?: string;
}

interface InsightsPanelProps {
  items: StockItem[];
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({ items }) => {
  const metrics = useMemo(() => {
    const totalItems = items.length;
    let outOfStockCount = 0;
    let lowStockCount = 0;
    const rewardCountMap: Record<string, number> = {};

    items.forEach((item) => {
      // 1. Status counters
      if (item.healthStatus === 'out_of_stock') {
        outOfStockCount++;
      } else if (item.healthStatus === 'low_stock') {
        lowStockCount++;
      }

      // 2. Track reward frequencies safely
      if (item.displayName) {
        rewardCountMap[item.displayName] = (rewardCountMap[item.displayName] || 0) + 1;
      }
    });

    // 3. Extract the top associated reward item
    let topReward = 'None';
    let maxCount = 0;
    Object.entries(rewardCountMap).forEach(([name, count]) => {
      if (count > maxCount && !name.startsWith('Unknown Reward')) {
        maxCount = count;
        topReward = name;
      }
    });

    return {
      totalItems,
      outOfStockCount,
      lowStockCount,
      topReward,
    };
  }, [items]);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem', marginTop: 0 }}>
        System Insights
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {/* Total Items */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Total Tracked Types</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a' }}>{metrics.totalItems}</div>
        </div>

        {/* Out of Stock */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Completely Out of Stock</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: metrics.outOfStockCount > 0 ? '#b91c1c' : '#0f172a' }}>
            {metrics.outOfStockCount}
          </div>
        </div>

        {/* Low Stock */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#f59e0b', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Near Minimum Threshold</div>
          <div style={{ fontSize: '1.75rem', fontWeight: '700', color: metrics.lowStockCount > 0 ? '#b45309' : '#0f172a' }}>
            {metrics.lowStockCount}
          </div>
        </div>

        {/* Top Reward */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Top Mode Recurring</div>
          <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>
            {metrics.topReward}
          </div>
        </div>
      </div>
    </div>
  );
};