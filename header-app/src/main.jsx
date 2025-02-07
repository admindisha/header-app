const Main = () => {
  return (
    <main className="main">
      <h2> Search across <strong>'4.7 Crore+'</strong> <span className="highlight">Businesses</span></h2>
      <div className="search-box">
        <input type="text" placeholder="Betkuli, Karwar" className="location" />
        <input type="text" placeholder="Search in Karwar" className="search" />
        <button className="search-btn">🔍</button>
      </div>
      <button className="download-app">Download App ⬇</button>
    </main>
  );
};

export default Main;