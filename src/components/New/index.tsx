import rightIconSvg from "../../assets/images/right-icon.svg";

import "./styles.scss";

interface INewsProps {
  title: string;
  description: string;
  photo: any;
}

export function New({ title, description, photo }: INewsProps) {
  return (
    <div className="new">
      <img src={photo} alt="post" />
      <div className="views">
        <span>Agosto 2021</span>
        <strong>220 views</strong>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <span>
        Mais conteúdo
        <img src={rightIconSvg} alt="right" />
      </span>
    </div>
  );
}
