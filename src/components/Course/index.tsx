import starSvg from "../../assets/images/star.svg";

import "./styles.scss";

interface ICourseProps {
  thumbnail: any;
  title: string;
  author: string;
  origin: string;
  price: string;
}

export function Course({
  thumbnail,
  title,
  price,
  origin,
  author,
}: ICourseProps) {
  return (
    <div className="course">
      <img src={thumbnail} alt="course thumbnail" className="thumbnail" />
      <div className="description">
        <h3>{title}</h3>
        <div className="origin">
          <span>{author}</span>
          <span>{origin}</span>
        </div>
        <div className="stars">
          <strong>4,7</strong>
          <div className="stars-group">
            <img src={starSvg} alt="stars" />
            <img src={starSvg} alt="stars" />
            <img src={starSvg} alt="stars" />
          </div>
          <span>(160.363)</span>
        </div>
        <div className="price">
          <strong>${price}</strong>
          <span>Mais vendido</span>
        </div>
      </div>
    </div>
  );
}
