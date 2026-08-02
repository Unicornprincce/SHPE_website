import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import UpcomingEvents from './pages/UpcomingEvents'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
