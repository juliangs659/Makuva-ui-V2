import Card from './Card';
import '../assets/styles/Cards.css';

const cardsData = [
  {
    id: 1,
    title: 'Explorando la Amazonía Colombiana',
    image: '', // Sin imagen para simular el ejemplo
    description: 'Una aventura única en la selva amazónica, conociendo su biodiversidad ...',
    location: 'Amazonas, Colombia',
    author: 'Ana Rodríguez',
    days: 7,
    likes: 156
  },
  {
    id: 2,
    title: 'Sendero del Sol',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Disfruta de un recorrido lleno de luz y naturaleza.',
    location: 'Desconocida',
    author: 'Desconocido',
    days: 2,
    likes: 10
  },
  {
    id: 3,
    title: 'Ruta de la Montaña',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Aventúrate por paisajes montañosos y vistas increíbles.',
    location: 'Desconocida',
    author: 'Desconocido',
    days: 11,
    likes: 2
  },
  {
    id: 4,
    title: 'Bosque Encantado',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    description: 'Explora la magia y tranquilidad de un bosque único.',
    location: 'Desconocida',
    author: 'Desconocido',
    days: 5,
    likes: 2
  }
];

export default function CardsContainer() {
  return (
    <section className="cards-section">
      <h2 className="cards-title">Explora nuestras rutas destacadas</h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
