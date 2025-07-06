import ReviewCard from './ReviewCard';
import '../assets/styles/Reviews.css';

const reviewsData = [
  {
    id: 1,
    rating: 5,
    comment: "¡Increíble experiencia! Los paisajes eran espectaculares y la organización fue perfecta. Definitivamente regresaré para explorar más rutas.",
    user: "María González",
    location: "Bogotá, Colombia"
  },
  {
    id: 2,
    rating: 4,
    comment: "Muy buena aventura, especialmente recomendada para quienes buscan conectar con la naturaleza. El guía fue muy profesional.",
    user: "Carlos Mendoza",
    location: "Medellín, Colombia"
  },
  {
    id: 3,
    rating: 5,
    comment: "Superó todas mis expectativas. La ruta cafetera fue una experiencia única llena de aprendizaje y momentos memorables.",
    user: "Ana Sofía López",
    location: "Cali, Colombia"
  },
  {
    id: 4,
    rating: 4,
    comment: "Excelente servicio y atención. Los paisajes de la Amazonía son indescriptibles. Una experiencia que todos deberían vivir.",
    user: "Diego Ramírez",
    location: "Barranquilla, Colombia"
  },
  {
    id: 5,
    rating: 5,
    comment: "Perfecta organización y rutas bien planificadas. Me encantó la diversidad de paisajes y la conexión con las comunidades locales.",
    user: "Valentina Torres",
    location: "Manizales, Colombia"
  },
  {
    id: 6,
    rating: 4,
    comment: "Una aventura increíble en la montaña. Las vistas eran espectaculares y el equipo muy profesional. Altamente recomendado.",
    user: "Andrés Vargas",
    location: "Bucaramanga, Colombia"
  }
];

export default function ReviewsContainer() {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-title">Lo que dicen nuestros viajeros</h2>
        <p className="reviews-subtitle">Experiencias reales de quienes ya vivieron la aventura</p>
      </div>
      <div className="reviews-container">
        {reviewsData.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
}
