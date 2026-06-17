{/*top scoreboard
<div> acts as a wrapper that holds all individual data cards.
display: 'flex', gap: '1rem': Uses CSS Flexbox to sit your metric cards perfectly side-by-side with a clean gap between them.
flex: 1: Tells each individual card to grow equally so they share the top screen space perfectly. */}

export default function Analytics() {
  return (
    
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
      <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', flex: 1 }}>
        <h3>Total Rewards</h3>
        <p>0</p>
      </div>
      <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', flex: 1 }}>
        <h3>Low Stock Alerts</h3>
        <p>0</p>
      </div>
    </div>
  );
}