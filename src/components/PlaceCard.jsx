import { Link } from 'react-router-dom'

export default function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place.id}`} className="place-card">
      <div className="place-card__image-wrapper">
        <img className="place-card__image" src={place.images[0]} alt={place.name} loading="lazy" />
      </div>
      <div className="place-card__body">
        <h3 className="place-card__name">{place.name}</h3>
        <div className="place-card__meta">
          <span className="badge">{place.category}</span>
          <span className="place-card__district">{place.district}</span>
        </div>
      </div>
    </Link>
  )
}
