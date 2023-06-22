import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

const ActionsComponent = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="container d-flex justify-content-center align-itens-center gap-3 p-3">
      <button type="button" onClick={() => setTheme('light')} className="btn btn-light">Light</button>
      <button type="button" onClick={() => setTheme('dark')} className="btn btn-dark">Dark</button>
    </div>
  )
}

export default ActionsComponent;