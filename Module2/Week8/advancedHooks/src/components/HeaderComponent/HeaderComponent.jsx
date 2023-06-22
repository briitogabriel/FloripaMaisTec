import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

const HeaderComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme={ theme }>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
    </nav>
  )
}

export default HeaderComponent;