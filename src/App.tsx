import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import RewardsGrid from './components/RewardsGrid';

export default function App() {
  // Manage which view is currently active: 'dashboard' | 'catalog' | 'redemptions'
  const [currentView, setCurrentView] = useState<string>('dashboard');

  // Helper function to render the correct component based on state
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Analytics />;
      case 'catalog':
        return <RewardsGrid />;
      case 'redemptions':
        return (
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>Redemptions Log</h3>
            <p style={{ color: '#64748b', marginTop: '0.5rem', fontFamily: 'system-ui, sans-serif' }}>Transaction records and user claims will map out here...</p>
          </div>
        );
      default:
        return <Analytics />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Pass state and setter function down to the Sidebar */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Viewport */}
      <main style={{ flex: 1, minWidth: 0 }}>
        {renderView()}
      </main>
    </div>
  );
}