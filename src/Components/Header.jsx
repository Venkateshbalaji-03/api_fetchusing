function Header({setView,view}) {
  return (
    <nav className="navbar">
      <div className="company">Shoppify</div>
      <div className="toggle-container">
        <button className={view === "grid"? "active":""}
        onClick={()=>setView("grid")}>☷</button>
        <button className={view === "list" ? "active":""}
        onClick={()=>setView("list")}>☰</button>
        <button className={view === "uncommon" ? "active":""}
        onClick={()=>setView("uncommon")}>▥</button>
      </div>
      <div className="cart">
        <button >🛒AddtoCart</button>
      </div>
    </nav>
  );
}

export default Header;