const PreLoginNavbar = ({ }) => {
  return (
    <div className="nav">
      <label id="hamburger" for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <div className="menu">
        <Link href="customerpage.html">View Products</Link>
        <Link id="Login" href="#">Login/Register</Link>
        <Link id="app-name" href="landingpage.html">Food-direct</Link>
      </div>
      <p id="app-name-toggle" href="landingpage.html">Food-direct</p>
    </div>
  )
}

export default PreLoginNavbar;
