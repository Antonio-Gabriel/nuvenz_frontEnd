import teamSvg from "../../assets/images/team.svg";
import treeSvg from "../../assets/images/03.svg";
import fortSvg from "../../assets/images/04.svg";
import firstSvg from "../../assets/images/01.svg";
import secondSvg from "../../assets/images/02.svg";
import rightIconSvg from "../../assets/images/right-icon.svg";

import "./styles.scss";

import { AboutCard } from "../AbourCard";

export function AboutUs() {
  return (
    <section className="about_us">
      <div className="container">
        <header>
          <div className="text">
            <h2>Como nossa plataforms funciona</h2>
            <p>Uma solução que tem como finalidade demostrar</p>
          </div>

          <span>
            Cadastra-se grátis
            <img src={rightIconSvg} alt="right" />
          </span>
        </header>

        <div className="columns about-desc">
          <div className="column is-6">
            <AboutCard
              icon={firstSvg}
              title="Escolhe o seu curso"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a."
            />
            <AboutCard
              icon={secondSvg}
              title="Faça a sua pré-inscrição"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a."
            />

            <AboutCard
              icon={treeSvg}
              title="Faça o pagamento"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a."
            />

            <AboutCard
              icon={fortSvg}
              title="Pronto para bukar"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a."
            />
          </div>
          <div className="column is-6">
            <img src={teamSvg} alt="my team" />
          </div>
        </div>
      </div>
    </section>
  );
}
