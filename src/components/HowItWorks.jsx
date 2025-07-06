import HowItWorksCard from './HowItWorksCard';
import '../assets/styles/HowItWorks.css';

const stepsData = [
  {
    step: 1,
    icon: '🔍',
    title: 'Explora las rutas',
    description: 'Navega por nuestra colección de rutas y aventuras disponibles. Filtra por ubicación, duración y nivel de dificultad.'
  },
  {
    step: 2,
    icon: '📅',
    title: 'Organiza tu viaje',
    description: 'Selecciona la ruta que más te guste y organiza tu viaje. Puedes elegir fechas y personalizar tu experiencia según tus preferencias.'
  },
  {
    step: 3,
    icon: '🎒',
    title: 'Prepárate para la aventura',
    description: 'Recibe toda la información necesaria: qué llevar, punto de encuentro y detalles importantes del viaje.'
  },
  {
    step: 4,
    icon: '🌟',
    title: 'Vive la experiencia',
    description: 'Disfruta de tu aventura con guías expertos y conecta con otros viajeros que comparten tu pasión por la naturaleza.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-header">
        <h2 className="how-it-works-title">¿Cómo funciona?</h2>
        <p className="how-it-works-subtitle">Descubre lo fácil que es planificar tu próxima aventura</p>
      </div>
      
      <div className="how-it-works-container">
        {stepsData.map((step, index) => (
          <HowItWorksCard 
            key={index} 
            step={step.step}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
      
      <div className="how-it-works-cta">
        <button className="cta-button">¡Comienza tu aventura!</button>
      </div>
    </section>
  );
}
