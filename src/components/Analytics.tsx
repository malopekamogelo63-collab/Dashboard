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

  // 2. Filter the stock array to find items where quantity has reached the ,minimum stock threshold
const lowStockAlerts = mockStock.filter(item => item.currentStock <= item.minStockThreshold).length;


  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {/* Total Rewards Card */}
        <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Total Rewards</h3>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.75rem', fontWeight: 'bold', color: '#111' }}>
            {totalRewards}
          </p>
        </div>

        {/* Low Stock Card */}
        <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Low Stock Alerts</h3>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.75rem', fontWeight: 'bold', color: '#e11d48' }}>
            {lowStockAlerts}
          </p>
        </div>

        {/* Total Redemptions Card */}
        <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', flex: 1 }}>
          <h3 style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Total Redemptions</h3>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.75rem', fontWeight: 'bold', color: '#111' }}>
            {totalRedemptions}
          </p>
        </div>
      </div>

      {/* Reward Health Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th>Reward Name</th>
            <th>Stock</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          {mockStock.map((item) => (
            <tr key={item.rewardId} style={{ borderBottom: '1px solid #eee' }}>
              <td>{item.rewardId}</td>
              <td>{item.currentStock}</td>
              <td>
                {getRecommendedAction(
                  item.currentStock <= item.minStockThreshold ? 'low_stock' : 'healthy'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}