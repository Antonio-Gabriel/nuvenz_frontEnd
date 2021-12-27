import rightIconLight from "../../assets/images/right-icon-light.svg";

import "./styles.scss";

export function Category() {
  return (
    <section className="category">
      <div className="container">
        <div className="text">
          <h2>As categorias mais buscadas</h2>
          <p>Uma solução que tem como finalidade demostrar</p>
          <span>
            Mais categorias
            <img src={rightIconLight} alt="right icon light" />
          </span>
        </div>
        <div className="items">
          <div className="tags">
            <span>Art & Design</span>
            <span>Desenvolvimento Web</span>
            <span>LifeStyles</span>
            <span>Desenvolvimento Desktop</span>
            <span>Finanças</span>
            <span>Inglês avançado</span>
            <span>Automação de sistemas com arduino</span>
            <span>Art & Design</span>
            <span>Desenvolvimento Web</span>
            <span>LifeStyles</span>
            <span>Desenvolvimento Desktop</span>
            <span>Finanças</span>
            <span>Inglês avançado</span>
            <span>Automação de sistemas com arduino</span>
            <span>Desenvolvimento Desktop</span>
            <span>Finanças</span>
            <span>Inglês avançado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
