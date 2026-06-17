{/*refers to the navigation panel
aside: A semantic HTML tag that tells the browser, "This is a sidebar layout."
width: '240px', height: '100vh': Locks the sidebar's width and forces it to stretch from the very top to the absolute bottom of the user's screen.
background: '#1e1e24': Gives it a professional, dark off-black finish so it stands out from the rest of the workspace. */}
export default function Sidebar() {
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
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, cursor: 'pointer', opacity: 1, fontWeight: '600' }}>📊 Dashboard</p>
        <p style={{ margin: 0, cursor: 'pointer', opacity: 0.7 }}>🎁 Catalog</p>
        <p style={{ margin: 0, cursor: 'pointer', opacity: 0.7 }}>📜 Redemptions</p>
      </nav>
    </aside>
  );
}