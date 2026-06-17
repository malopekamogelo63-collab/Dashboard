{/*The Imports (Bringing the components Together)*/}
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import RewardsGrid from './components/RewardsGrid';

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Fixed Left Navigation */}
      <Sidebar />

      {/* Main Content Viewport */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1>Dashboard Overview</h1>
        </header>

        {/* Top Metric Cards */}
        <Analytics />

        {/* Main Workspace Area */}
        <RewardsGrid />
      </main>
    </div>
  );
}