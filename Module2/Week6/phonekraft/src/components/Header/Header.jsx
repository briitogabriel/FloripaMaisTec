import PropTypes from 'prop-types';

const Header = ({ brand, links }) => {

  console.log(links)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{brand}</a>
            <div className="text-end navbar" id="navbarText">
              <ul className="navbar-nav">

                {links.forEach(link => {
                  <li className="nav-text mx-2">
                    <a className="nav-link" href="#">{link}</a>
                  </li>
                })}

              </ul>
            </div>
          </div>
        </nav>
      </>
  )
}

Header.propTypes = {
  brand: PropTypes.string.isRequired,
  links: PropTypes.array,
}

export default Header;