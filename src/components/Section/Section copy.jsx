import '@/components/Section/Section.css';
import Card from '@/components/Card/Card';
import Line from '@/components/Line/Line';
import Title from  "@/components/Title/Title";

const Section = ({ title, cards }) => {
  return (
    <section className="section">
      <div style={{ textAlign: "center" }}>
         <Title title={title}/>
      </div>
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
      <Line/>
    </section>
  );
}

export default Section;
