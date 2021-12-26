import searchLogo from "../../assets/images/search.png";
import institutoLogo from "../../assets/images/logo.png";

import "./styles.scss";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <img src={institutoLogo} alt="instituto bukar logo" />
          </div>
          <div className="column is-6">
            <div className="search">
              <img src={searchLogo} alt="search logo" />
              <input type="text" placeholder="Pesquise por instituições" />
            </div>
          </div>
          <div className="column is-3 is-button-group">
            <button>Iniciar sessão</button>
            <button>Inscrever-se</button>
          </div>
        </div>
      </div>
    </header>
  );
}
