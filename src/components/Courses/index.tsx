import { Course } from "../Course";

import inglesImage from "../../assets/images/ingles.png";
import powerBiImage from "../../assets/images/powerBi.png";
import bootcampImage from "../../assets/images/bootcamp.png";
import microsoftExelmage from "../../assets/images/microsoftExel.png";

import "./styles.scss";

export function Courses() {
  return (
    <section className="categories">
      <div className="container">
        <div className="header">
          <h2>Cursos em destaque</h2>

          <div className="tags">
            <ul>
              <li>Mais populares</li>
              <li>Finanças</li>
              <li>LifeStyles</li>
              <li>Art & Design</li>
              <li>Desenvolvimento web</li>
            </ul>
          </div>
        </div>

        <div className="courses">
          <div className="columns">
            <div className="column is-3">
              <Course
                thumbnail={bootcampImage}
                title="Bootcamp completo de desenvolvimento de web 2022"
                author="Dr. Angela Yu"
                origin="Udemy"
                price="12.00"
              />
            </div>
            <div className="column is-3">
              <Course
                thumbnail={microsoftExelmage}
                title="Microsoft exel - from beginner
                to advance"
                author="Kely Pew"
                origin="Online study"
                price="13.99"
              />
            </div>
            <div className="column is-3">
              <Course
                thumbnail={powerBiImage}
                title="Power Bi Completo - Do Básico
                até o avançado"
                author="João Paulo de Lira"
                origin="Udemy"
                price="26.99"
              />
            </div>
            <div className="column is-3">
              <Course
                thumbnail={inglesImage}
                title="Inglês Extremo - Curso Completo 
                do Zero à Fluência"
                author="Inglês Extremo"
                origin="Inglês Extremo"
                price="13.99"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
