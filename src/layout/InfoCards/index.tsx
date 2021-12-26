import companyImage from "../../assets/images/company.png";
import courseImage from "../../assets/images/cources.png";

import "./styles.scss";

export function InfoCards() {
  return (
    <section className="infoCards">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="card">
              <div className="text">
                <span className="desc-span">Para empresas de Angola</span>
                <h3>Conheça nossas soluções para empresas</h3>
                <p>Uma solução que tem como finalidade demostrar</p>
                <button>Conhecer a solução</button>
              </div>

              <img src={companyImage} alt="company description" />
            </div>
          </div>
          <div className="column is-6">
            <div className="card">
              <div className="text">
                <span className="desc-span">Para empresas de Angola</span>
                <h3>
                  Cadastre seus cursos no instituto <span>Bukas</span>
                </h3>
                <p>Uma solução que tem como finalidade demostrar</p>
                <button>Cadastrar cursos</button>
              </div>

              <img src={courseImage} alt="course description" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
