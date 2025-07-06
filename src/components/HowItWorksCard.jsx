import '../assets/styles/HowItWorks.css';

const HowItWorksCard = ({ step, icon, title, description }) => {
  return (
    <div className="how-it-works-card">
      <div className="step-number">{step}</div>
      <div className="step-icon">{icon}</div>
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
