{/*refers to the navigation panel
aside: A semantic HTML tag that tells the browser, "This is a sidebar layout."
width: '240px', height: '100vh': Locks the sidebar's width and forces it to stretch from the very top to the absolute bottom of the user's screen.
background: '#1e1e24': Gives it a professional, dark off-black finish so it stands out from the rest of the workspace. */}
export default function Sidebar() {
  return ( 
    
    <aside style={{ width: '240px', background: '#1e1e24', color: '#fff', height: '100vh', padding: '1rem' }}>
      <h2>Rewards Admin</h2> {/*This is a Heading 2 tag. It acts as the bold, prominent logo or title at the very top of your application panel.*/}
      <nav> {/*signals to web browsers (and screen readers) that everything sitting inside this specific block is meant for navigating around the app.*/}
        <p>📊 Dashboard</p> {/*serving as clean, lightweight placeholders for your menu options.*/}
        <p>🎁 Catalog</p>
        <p>📜 Redemptions</p>
      </nav>
    </aside>
  );
}