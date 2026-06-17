import { useState } from 'react';
import { mockRewards } from '../data/mock-rewards';
import { mockStock } from '../data/mock-stock';
import { mockRedemptions } from '../data/mock-redemptions';

// 1. Business Rules: Comprehensive reward health function
const determineHealthStatus = (currentStock: number, minStockThreshold: number) => {
  if (currentStock === 0) return 'out_of_stock';
  if (currentStock <= minStockThreshold) return 'low_stock';
  return 'healthy';
};

const getRecommendedAction = (status: string) => {
  switch (status) {
    case 'healthy': return 'No action needed';
    case 'low_stock': return 'Review stock levels';
    case 'out_of_stock': return 'Restock or hide reward';
    default: return 'Monitor';
  }
};

const getStatusBadgeStyles = (status: string) => {
  switch (status) {
    case 'out_of_stock':
      return { backgroundColor: '#fef2f2', color: '#991b1b', border: '1px solid #fee2e2', text: 'Out of Stock' };
    case 'low_stock':
      return { backgroundColor: '#fff7ed', color: '#c2410c', border: '1px solid #ffedd5', text: 'Low Stock' };
    case 'healthy':
    default:
      return { backgroundColor: '#f0fdf4', color: '#166534', border: '1px solid #dcfce7', text: 'Healthy' };
  }
};

export default function Analytics() {
  // Interactive UI States for Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const totalRewards = mockRewards.length;
  const totalRedemptions = mockRedemptions.length;

  // Process the full list with calculated statuses
  const processedStockItems = mockStock.map(item => {
    const matchingReward = mockRewards.find(r => r.id === item.rewardId);
    const displayName = matchingReward ? matchingReward.name : `Unknown Reward (${item.rewardId})`;
    const healthStatus = determineHealthStatus(item.currentStock, item.minStockThreshold);

    return {
      ...item,
      displayName,
      healthStatus
    };
  });

  // Calculate dynamic low stock alerts based on our business rule function
  const lowStockAlerts = processedStockItems.filter(item => item.healthStatus === 'low_stock' || item.healthStatus === 'out_of_stock').length;

  // Apply Search by Reward Name & Filter by Health Status
  const filteredStockItems = processedStockItems.filter(item => {
    const matchesSearch = item.displayName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.healthStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Total Rewards</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{totalRewards}</div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #fee2e2', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#ef4444' }}>Critical Stock Alerts</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#b91c1c', marginTop: '0.5rem' }}>{lowStockAlerts}</div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Total Redemptions</span>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{totalRedemptions}</div>
        </div>
      </div>

      {/* Table & Controls Container */}
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-beteen', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', margin: 0, flex: 1 }}>
            Reward Health Monitor
          </h3>
          
          {/* Controls UI: Search and Filters */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search by reward name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem', width: '220px' }}
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem', backgroundColor: '#fff', color: '#334155' }}
            >
              <option value="all">All Statuses</option>
              <option value="healthy">Healthy</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
        </div>
        
        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #f1f5f9', color: '#0f172a', fontSize: '0.875rem' }}>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Reward Name</th>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Stock Level</th>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Health Status</th>
              <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStockItems.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                  No matching rewards found.
                </td>
              </tr>
            ) : (
              filteredStockItems.map((item, index) => {
                const badge = getStatusBadgeStyles(item.healthStatus);
                
                return (
                  <tr 
                    key={item.rewardId} 
                    style={{ borderBottom: '1px solid #f1f5f9', color: '#334155', fontSize: '0.9rem', backgroundColor: index % 2 === 0 ? '#fff' : '#f8fafc' }}
                  >
                    <td style={{ padding: '1rem', fontWeight: '600', color: '#0f172a' }}>{item.displayName}</td>
                    <td style={{ padding: '1rem' }}>{item.currentStock} <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>(Min: {item.minStockThreshold})</span></td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ display: 'inline-block', padding: '0.25rem 0.625rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600', backgroundColor: badge.backgroundColor, color: badge.color, border: badge.border }}>
                        {badge.text}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: item.healthStatus === 'healthy' ? '#64748b' : '#334155', fontWeight: item.healthStatus !== 'healthy' ? '500' : 'normal' }}>
                      {getRecommendedAction(item.healthStatus)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}