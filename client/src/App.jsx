import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PlaceholderPage from './components/ui/PlaceholderPage'
import Home from './pages/Home'
import Officers from './pages/Officers'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/shpetinas" element={<PlaceholderPage title="SHPEtinas" />} />
          <Route path="/mentorshpe" element={<PlaceholderPage title="MentorSHPE" />} />
          <Route path="/events" element={<PlaceholderPage title="Events — Coming Soon" />} />
          <Route path="/dia-de-ciencias" element={<PlaceholderPage title="Dia de Ciencias — Coming Soon" />} />
          <Route path="/sponsors" element={<PlaceholderPage title="Sponsors — Coming Soon" />} />
          <Route path="/newsletter" element={<PlaceholderPage title="Newsletter — Coming Soon" />} />
          <Route path="/join-us" element={<PlaceholderPage title="Join Us — Coming Soon" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
