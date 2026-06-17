{/*refers to the navigation panel
aside: A semantic HTML tag that tells the browser, "This is a sidebar layout."
width: '240px', height: '100vh': Locks the sidebar's width and forces it to stretch from the very top to the absolute bottom of the user's screen.
background: '#1e1e24': Gives it a professional, dark off-black finish so it stands out from the rest of the workspace. */}
interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  // Helper styling function to highlight the active menu link cleanly
  const linkStyle = (viewName: string) => ({
    margin: 0,
    cursor: 'pointer',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    backgroundColor: currentView === viewName ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    color: '#fff',
    fontWeight: currentView === viewName ? '600' : '400',
    opacity: currentView === viewName ? 1 : 0.65,
    transition: 'all 0.2s ease'
  });

  return (
    <aside style={{ 
      width: '240px', 
      background: '#1e1e24', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '1.5rem',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 2rem 0', color: '#fff' }}>
        Rewards Admin
      </h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={linkStyle('dashboard')} onClick={() => onViewChange('dashboard')}>
          📊 Dashboard
        </p>
        <p style={linkStyle('catalog')} onClick={() => onViewChange('catalog')}>
          🎁 Catalog
        </p>
        <p style={linkStyle('redemptions')} onClick={() => onViewChange('redemptions')}>
          📜 Redemptions
        </p>
      </nav>
    </aside>
  );
}