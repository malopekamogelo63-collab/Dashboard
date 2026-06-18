import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import RewardsGrid from './components/RewardsGrid';
import RedemptionsLog from './components/RedemptionsLog';

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
        return <RedemptionsLog />;
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