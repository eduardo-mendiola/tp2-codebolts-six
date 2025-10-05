import '@/components/Card/Card.css';

const Card = ({ resource, alt, text, href}) => {
    return (
        <div className="card">
            <a href={href} target="_blank">
                <img src={resource} alt={alt} className="card-img" />
                <p>{text}</p>
            </a>
        </div>
    );
}

export default Card;