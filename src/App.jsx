import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Place from './pages/Place'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Place />} />
      </Routes>
    </HashRouter>
  )
}
