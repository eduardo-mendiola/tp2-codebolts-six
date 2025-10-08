import '@/components/MemberButton/MemberButton.css';

export default function MemberButton({ imgsrc, name }) {
  return (
    <div className="member-button">
      <div className="member-img-container">
        <img src={imgsrc} alt={name} className="member-img" />
      </div>
      <span className="member-name">{name}</span>
    </div>
  );
}
