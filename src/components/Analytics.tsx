import { mockRewards } from '../data/mock-rewards';
import { mockStock } from '../data/mock-stock';
import { mockRedemptions } from '../data/mock-redemptions';

const getRecommendedAction = (status: string) => {
  switch (status) {
    case 'healthy': return 'No action needed';
    case 'low_stock': return 'Review stock levels';
    case 'out_of_stock': return 'Restock or hide reward';
    case 'config_issue': return 'Check reward setup';
    default: return 'Monitor';
  }
};

export default function Analytics() {
  // 1. Count the total items in your mock arrays
  const totalRewards = mockRewards.length;
  const totalRedemptions = mockRedemptions.length;

  // 2. Filter the stock array to find items where quantity has reached the minimum stock threshold
  const lowStockAlerts = mockStock.filter(item => item.currentStock <= item.minStockThreshold).length;

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      padding: '2rem', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          Dashboard Overview
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem', margin: 0 }}>
          Real-time reward metrics and tracking status.
        </p>
      </div>

      {/* Summary Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2rem' 
      }}>
        
        {/* CARD 1: Total Rewards */}
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          border: '1px solid #e2e8f0', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)' 
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Total Rewards</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{totalRewards}</div>
        </div>

        {/* CARD 2: Low Stock Alerts */}
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          border: '1px solid #fee2e2', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)' 
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#ef4444' }}>Low Stock Alerts</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#b91c1c', marginTop: '0.5rem' }}>{lowStockAlerts}</div>
        </div>

        {/* CARD 3: Total Redemptions */}
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          padding: '1.5rem', 
          border: '1px solid #e2e8f0', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)' 
        }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Total Redemptions</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{totalRedemptions}</div>
        </div>

      </div>

      {/* Table Container Section */}
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '12px', 
        border: '1px solid #e2e8f0', 
        padding: '1.5rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', marginTop: 0, marginBottom: '1.25rem' }}>
          Reward Health Monitor
        </h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: '#0f172a', fontSize: '0.875rem' }}>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Reward Name</th>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Stock</th>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {mockStock.map((item, index) => {
              const isLowStock = item.currentStock <= item.minStockThreshold;
              
              return (
                <tr 
                  key={item.rewardId} 
                  style={{ 
                    borderBottom: '1px solid #f1f5f9', 
                    color: '#334155',
                    fontSize: '0.9rem',
                    backgroundColor: index % 2 === 0 ? '#fff' : '#f8fafc'
                  }}
                >
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{item.rewardId}</td>
                  <td style={{ padding: '1rem' }}>{item.currentStock}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: isLowStock ? '#fee2e2' : '#f1f5f9',
                      color: isLowStock ? '#991b1b' : '#334155'
                    }}>
                      {getRecommendedAction(isLowStock ? 'low_stock' : 'healthy')}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>

    </div>
  );
}