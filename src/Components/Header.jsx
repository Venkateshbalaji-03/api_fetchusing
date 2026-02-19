function Header() {
  return (
    <nav className="navbar">
      <div className="company">Shoppify</div>
      <div className="toggle-container">
        <button>☷</button>
        <button>☰</button>
      </div>
      <div className="cart">
        <button >🛒AddtoCart</button>
      </div>
    </nav>
  );
}

export default Header;