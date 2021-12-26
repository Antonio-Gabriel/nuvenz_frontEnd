import teamSvg from "../../assets/images/team.svg";
import firstSvg from "../../assets/images/01.svg";
import secondSvg from "../../assets/images/02.svg";
import treeSvg from "../../assets/images/03.svg";
import fortSvg from "../../assets/images/04.svg";
import rightIconSvg from "../../assets/images/right-icon.svg";

import "./styles.scss";

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
            <div className="info">
              <div className="left">
                <div className="icon">
                  <img src={firstSvg} alt="icon 1" />
                </div>
              </div>
              <div className="text">
                <h3>Escolhe o seu curso</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </div>
            <div className="info">
              <div className="left">
                <div className="icon">
                  <img src={secondSvg} alt="icon 1" />
                </div>
              </div>
              <div className="text">
                <h3>Faça a sua pré-inscrição</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </div>
            <div className="info">
              <div className="left">
                <div className="icon">
                  <img src={treeSvg} alt="icon 1" />
                </div>
              </div>
              <div className="text">
                <h3>Faça o pagamento</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </div>
            <div className="info">
              <div className="left">
                <div className="icon">
                  <img src={fortSvg} alt="icon 1" />
                </div>
              </div>
              <div className="text">
                <h3>Pronto para bukar</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <img src={teamSvg} alt="my team" />
          </div>
        </div>
      </div>
    </section>
  );
}
