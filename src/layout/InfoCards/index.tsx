import courseImage from "../../assets/images/cources.png";
import companyImage from "../../assets/images/company.png";

import { InfoCard } from "../../components/InfoCard";

export function InfoCards() {
  return (
    <section className="infoCards">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <InfoCard
              image={companyImage}
              span="Para empresas de Angola"
              title="Conheça nossas soluções para empresas"
              description="Uma solução que tem como finalidade demostrar"
              actionText="Conhecer a solução"
            />
          </div>
          <div className="column is-6">
            <InfoCard
              image={courseImage}
              span="Para empresas de Angola"
              title="Cadastre seus cursos no instituto Bukar"
              description="Uma solução que tem como finalidade demostrar"
              actionText="Cadastrar cursos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
