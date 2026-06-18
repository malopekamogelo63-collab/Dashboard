import { mockRedemptions } from '../data/mock-redemptions';

export default function RedemptionsLog() {
  // Helper to format ISO strings cleanly into user-friendly localized strings
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Helper to assign distinct color profiles based on transaction statuses
  const getStatusStyle = (status: 'Completed' | 'Processing' | 'Failed') => {
    switch (status) {
      case 'Completed':
        return { bg: '#dcfce7', text: '#15803d' };
      case 'Processing':
        return { bg: '#fef9c3', text: '#a16207' };
      case 'Failed':
        return { bg: '#fee2e2', text: '#b91c1c' };
      default:
        return { bg: '#f1f5f9', text: '#334155' };
    }
  };

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
          Redemption History Logs
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem', margin: 0 }}>
          Monitor claims, trace transactional audit lines, and update fulfillment statuses.
        </p>
      </div>

      {/* Responsive Data Table Container */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Log ID</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Reward Item</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>User Account</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Timestamp</th>
                <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockRedemptions.map((log) => {
                const colors = getStatusStyle(log.status);
                
                return (
                  <tr key={log.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.2s' }}>
                    {/* Log ID */}
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#94a3b8' }}>
                      {log.id}
                    </td>
                    
                    {/* Item Title */}
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a' }}>
                      {log.rewardName}
                    </td>
                    
                    {/* User Email */}
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#475569' }}>
                      {log.userEmail}
                    </td>
                    
                    {/* Date Transacted */}
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                      {formatDate(log.redeemedAt)}
                    </td>
                    
                    {/* Styled Status Pill */}
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        padding: '0.25rem 0.625rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        display: 'inline-block'
                      }}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}