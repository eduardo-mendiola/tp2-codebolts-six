import '@/components/Section/section.css';
import Card from '@/components/Card/Card';

const Section = ({ title, cards }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className='cards-container'>
        {cards.map((card, index) => (
          <Card 
            key={index} 
            resource={card.resource} 
            alt={card.alt} 
            text={card.text} 
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
