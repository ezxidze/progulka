import { useParams, Link } from 'react-router-dom'
import places from '../data/places.json'
import PlaceCard from '../components/PlaceCard'

export default function Place() {
  const { id } = useParams()
  const place = places.find((p) => p.id === Number(id))

  if (!place) {
    return (
      <div className="place-page">
        <Link to="/" className="back-btn">&#8592; На главную</Link>
        <h1>Место не найдено</h1>
      </div>
    )
  }

  const similar = places
    .filter((p) => p.id !== place.id && (p.category === place.category || p.district === place.district))
    .slice(0, 3)

  const [lat, lon] = place.coords
  const mapSrc = `https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=15&pt=${lon}%2C${lat}%2Cpm2rdm`

  return (
    <div className="place-page">
      <Link to="/" className="back-btn">&#8592; К списку мест</Link>

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

      <div className="place-map-section">
        <h2>На карте</h2>
        <div className="place-map">
          <iframe
            src={mapSrc}
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            title={`Карта: ${place.name}`}
          />
        </div>
      </div>

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
