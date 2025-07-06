export default function LoadMoreButton({ onClick, loading = false }) {
  return (
    <div className="load-more-section">
      <button 
        className="load-more-button"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Cargar más aventuras'}
      </button>
    </div>
  );
}
