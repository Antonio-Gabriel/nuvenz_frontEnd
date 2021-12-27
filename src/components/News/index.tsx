import { New } from "../New";

import t3Img from "../../assets/images/t3.png";
import t31Img from "../../assets/images/t3-1.png";
import pic1Img from "../../assets/images/pic1.png";
import pic2Img from "../../assets/images/pic2.png";
import pic3Img from "../../assets/images/pic3.png";
import pic4Img from "../../assets/images/pic4.png";
import pic5Img from "../../assets/images/pic5.png";

import "./styles.scss";

export function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="header">
          <h2>Novidades</h2>
        </div>

        <div className="content">
          <New
            photo={pic1Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={t31Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={t3Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin.  adipiscing elit. Amet eu
              dolor, neque sollicitudin proin"
          />
          <New
            photo={pic2Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={pic2Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={pic4Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={pic3Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
          <New
            photo={pic5Img}
            title="What can we expect from UI / UX Design in 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu
              dolor, neque sollicitudin proin."
          />
        </div>

        <button>Ver mais novidades</button>
      </div>
    </section>
  );
}
