import { useParams, useNavigate, Link } from 'react-router-dom'
import places from '../data/places.json'
import PlaceCard from '../components/PlaceCard'

export default function Place() {
  const { id } = useParams()
  const navigate = useNavigate()
  const place = places.find((p) => p.id === Number(id))

  if (!place) {
    return (
      <div className="place-page">
        <button className="back-btn" onClick={() => navigate('/')}>&#8592; На главную</button>
        <h1>Место не найдено</h1>
      </div>
    )
  }

  const similar = places
    .filter((p) => p.id !== place.id && (p.category === place.category || p.district === place.district))
    .slice(0, 3)

  return (
    <div className="place-page">
      <button className="back-btn" onClick={() => navigate(-1)}>&#8592; Назад</button>

      <div className="place-gallery">
        {place.images.map((img, i) => (
          <img key={i} src={img} alt={`${place.name} ${i + 1}`} loading="lazy" />
        ))}
      </div>

      <div className="place-header">
        <h1>{place.name}</h1>
        <div className="place-tags">
          <span className="badge">{place.category}</span>
          <span className="badge">{place.district}</span>
        </div>
        <div className="place-info">
          <span>&#128205; {place.address}</span>
          <span>&#128647; {place.metro_time}</span>
        </div>
      </div>

      <p className="place-description">{place.description}</p>

      {similar.length > 0 && (
        <div className="similar-section">
          <h2>Похожие места</h2>
          <div className="similar-grid">
            {similar.map((p) => <PlaceCard key={p.id} place={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
