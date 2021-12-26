import clientsImg from "../../assets/images/clients.png";

import "./styles.scss";

export function Client() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <header className="clients-Header">
            <h2>
              Conheça as instituições <br /> parceiras e clientes
            </h2>
            <p>Uma solução que tem como finalidade demostrar</p>
          </header>
          <img src={clientsImg} alt="clients" />
          <button>Ver todas entidades</button>
        </div>
      </div>
    </section>
  );
}
