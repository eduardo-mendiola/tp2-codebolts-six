import '@/components/Section/Section.css';
import Line from '@/components/Line/Line';
import Title from "@/components/Title/Title";

const Section = ({ title, cards, CardComponent, showLine = true }) => {
  return (
    <section className="section">
      <div style={{ textAlign: "center" }}>
        <Title title={title}/>
      </div>
      <div className='cards-container'>
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      {showLine && <Line />}
    </section>
  );
};

export default Section;




 
