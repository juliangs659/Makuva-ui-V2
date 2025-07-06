import '../assets/styles/Reviews.css';

const ReviewCard = ({ rating, comment, user, location }) => {
  // Función para renderizar las estrellas
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
        >
          {i <= rating ? '⭐' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="review-rating">
        {renderStars(rating)}
      </div>
      <p className="review-comment">{comment}</p>
      <div className="review-user">
        <span className="user-name">{user}</span>
        <span className="user-location">{location}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
