import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PlaceholderPage from './components/ui/PlaceholderPage'
import Home from './pages/Home'
import Officers from './pages/Officers'
import SHPEtinas from './pages/programs/SHPEtinas'
import MentorSHPE from './pages/programs/MentorSHPE'
import DiaDeCiencias from './pages/programs/DiaDeCiencias'
import Sponsors from './pages/Sponsors'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/shpetinas" element={<SHPEtinas />} />
          <Route path="/mentorshpe" element={<MentorSHPE />} />
          <Route path="/dia-de-ciencias" element={<DiaDeCiencias />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/awards" element={<PlaceholderPage title="Awards — Coming Soon" />} />
          <Route path="/calendar" element={<PlaceholderPage title="Calendar — Coming Soon" />} />
          <Route path="/join-us" element={<PlaceholderPage title="Join Us — Coming Soon" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
