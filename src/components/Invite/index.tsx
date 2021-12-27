import model from "../../assets/images/model.png";

import "./styles.scss";

export function Invite() {
  return (
    <section className="invite">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5 has-text-centered image">
            <img src={model} alt="model" />
          </div>
          <div className="column is-5 text">
            <h2>Torne-se um instrutor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio. pharetra, vel.
            </p>
            <button>Comece a ensinar hoje</button>
          </div>
        </div>
      </div>
    </section>
  );
}
