import { useState, useMemo } from 'react'
import places from '../data/places.json'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import PlaceCard from '../components/PlaceCard'

const districts = [...new Set(places.map((p) => p.district))]
const categories = [...new Set(places.map((p) => p.category))]

export default function Home() {
  const [search, setSearch] = useState('')
  const [district, setDistrict] = useState('')
  const [category, setCategory] = useState('')

  const filtered = useMemo(() => {
    return places.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
      const matchDistrict = !district || p.district === district
      const matchCategory = !category || p.category === category
      return matchSearch && matchDistrict && matchCategory
    })
  }, [search, district, category])

  return (
    <>
      <section className="hero">
        <h1>Прогулка</h1>
        <p>Найди лучшие места для прогулок в Новосибирске</p>
        <SearchBar value={search} onChange={setSearch} />
        <Filters
          districts={districts}
          categories={categories}
          district={district}
          category={category}
          onDistrictChange={setDistrict}
          onCategoryChange={setCategory}
        />
      </section>

      <div className="container">
        <div className="cards-grid">
          {filtered.length > 0 ? (
            filtered.map((place) => <PlaceCard key={place.id} place={place} />)
          ) : (
            <p className="no-results">Ничего не найдено. Попробуйте изменить фильтры.</p>
          )}
        </div>
      </div>
    </>
  )
}
