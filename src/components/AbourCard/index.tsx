import "./styles.scss";

interface IAboutCardProps {
  icon: any;
  title: string;
  description: string;
}

export function AboutCard({ icon, title, description }: IAboutCardProps) {
  return (
    <div className="info">
      <div className="left">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
