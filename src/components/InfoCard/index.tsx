import "./styles.scss";

interface ICardInfoProps {
  image: any;
  span: string;
  title: string;
  description: string;
  actionText: string;
}

export function InfoCard({
  title,
  image,
  span,
  description,
  actionText,
}: ICardInfoProps) {
  return (
    <div className="card">
      <div className="text">
        <span className="desc-span">{span}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{actionText}</button>
      </div>

      <img src={image} alt="company description" />
    </div>
  );
}
