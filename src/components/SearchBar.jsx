export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">&#128269;</span>
      <input
        type="text"
        placeholder="Найти место для прогулки..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
