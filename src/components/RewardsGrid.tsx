{/*the main stage of your application. will house your entire rewards catalog*/}
import { mockRewards } from '../data/mock-rewards';
import { mockStock } from '../data/mock-stock';

export default function RewardsGrid() {
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
          Active Rewards Catalog
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem', margin: 0 }}>
          Manage your active reward inventory, pricing configurations, and real-time item status.
        </p>
      </div>

      {/* Grid Canvas Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {mockRewards.map((reward) => {
          // Find matching stock information for this reward
          const stockInfo = mockStock.find((item) => item.rewardId === reward.id);
          
          // Determine stock badges
          let stockText = 'N/A';
          let isLowStock = false;
          
          if (stockInfo) {
            stockText = `${stockInfo.currentStock} left`;
            isLowStock = stockInfo.currentStock <= stockInfo.minStockThreshold;
          }

          return (
            <div 
              key={reward.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Image Banner Area */}
              <div style={{ position: 'relative', height: '160px', backgroundColor: '#f1f5f9' }}>
                <img 
                  src={reward.imageUrl} 
                  alt={reward.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Category Badge */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  color: '#fff',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(4px)'
                }}>
                  {reward.category}
                </span>

                {/* Stock Level Badge */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: isLowStock ? '#fee2e2' : '#f1f5f9',
                  color: isLowStock ? '#991b1b' : '#334155',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  border: isLowStock ? '1px solid #fecaca' : '1px solid #e2e8f0'
                }}>
                  {stockText}
                </span>
              </div>

              {/* Card Information Body Content */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#0f172a', lineHeight: '1.4' }}>
                    {reward.name}
                  </h4>
                </div>
                
                <p style={{ 
                  margin: '0.5rem 0 1.25rem 0', 
                  fontSize: '0.85rem', 
                  color: '#64748b', 
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {reward.description}
                </p>

                {/* Bottom Row Pricing Context Footer */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '0.75rem',
                  marginTop: 'auto'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>Cost</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                      🪙 {reward.pointsCost.toLocaleString()} <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#64748b' }}>pts</span>
                    </span>
                  </div>

                  <button style={{
                    backgroundColor: '#1e1e24',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Edit Item
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}