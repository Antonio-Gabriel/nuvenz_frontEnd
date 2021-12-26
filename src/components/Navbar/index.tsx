import categoriesSvg from "../../assets/images/categories.svg";

import "./styles.scss";

export function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <img src={categoriesSvg} alt="categories" />
            Categories
          </li>
          <li>Home</li>
          <li className="navbar-item has-dropdown is-hoverable dropdown-selection">
            <span className="navbar-link">Sobre</span>

            <div className="navbar-dropdown">
              <span className="navbar-item">Mais informações</span>
            </div>
          </li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}
