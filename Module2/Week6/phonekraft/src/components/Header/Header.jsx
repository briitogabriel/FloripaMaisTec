const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">phonekraft</a>
            <div className="text-end navbar" id="navbarText">
              <ul className="navbar-nav">
                <li className="nav-text mx-2">
                  <a className="nav-link" aria-current="page" href="#">Celulares</a>
                </li>
                <li className="nav-text mx-2">
                  <a className="nav-link" href="#">Seguros</a>
                </li>
                <li className="nav-text mx-2">
                  <a className="nav-link" href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  )
}

export default Header;