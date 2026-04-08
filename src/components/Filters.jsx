export default function Filters({ districts, categories, district, category, onDistrictChange, onCategoryChange }) {
  return (
    <div className="filters">
      <select value={district} onChange={(e) => onDistrictChange(e.target.value)}>
        <option value="">Все районы</option>
        {districts.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Все категории</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
}
