

const Navbar = () => {
  

  return (
    <section>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="images/citycircuit-logo.png" alt="" />
        </div>
        <img className="nav-light" src="images/navbar-light.png" alt="" />
        <div className="nav-links">
          <ul className="nav-ul">
            <li className="nav-item">
              <a href="" className="nav-link">Eventos</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Programacion</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Inscripcion</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;