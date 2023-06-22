import { Link } from "react-router-dom";

const MenuComponent = () => {
  return (
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
      <li><Link to={'/batatinha'}>Batatinha</Link></li>
    </ul>
  )
}

export default MenuComponent;