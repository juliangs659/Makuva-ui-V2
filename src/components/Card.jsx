import '../assets/styles/Cards.css';

export default function Card({ title, image, description, location, author, days, likes }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        {image && (
          <img src={image} alt={title} className="card-img" loading="lazy" />
        )}
      </div>
      {days && (
        <span className="card-badge">{days} días</span>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-info-row">
          <span className="card-location">
            <span className="card-info-icon" role="img" aria-label="ubicación">📍</span>
            {location}
          </span>
          <span className="card-author">
            <span className="card-info-icon" role="img" aria-label="autor">🧑‍💼</span>
            Por {author}
          </span>
        </div>
        <div className="card-actions">
          <span className="card-likes">
            <span role="img" aria-label="me gusta">🤍</span> {likes}
          </span>
          <button className="card-btn">Ver ruta</button>
        </div>
      </div>
    </div>
  );
}
