import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PlaceholderPage from './components/ui/PlaceholderPage'
import Home from './pages/Home'
import ExecutiveBoard from './pages/leadership/ExecutiveBoard'
import GeneralBoard from './pages/leadership/GeneralBoard'
import TechnicalTeams from './pages/leadership/TechnicalTeams'
import Committees from './pages/leadership/Committees'
import SHPEtinas from './pages/programs/SHPEtinas'
import MentorSHPE from './pages/programs/MentorSHPE'
import DiaDeCiencias from './pages/programs/DiaDeCiencias'
import WomenInStemSummit from './pages/programs/WomenInStemSummit'
import NationalConvention from './pages/programs/NationalConvention'
import Sponsors from './pages/Sponsors'
import Awards from './pages/Awards'
import Calendar from './pages/Calendar'
import JoinUs from './pages/JoinUs'
import Alumni from './pages/Alumni'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/leadership/executive-board" element={<ExecutiveBoard />} />
          <Route path="/leadership/general-board" element={<GeneralBoard />} />
          <Route path="/leadership/technical-teams" element={<TechnicalTeams />} />
          <Route path="/leadership/committees" element={<Committees />} />
          {/* Old link kept working for anyone with it bookmarked/shared */}
          <Route path="/officers" element={<Navigate to="/leadership/executive-board" replace />} />
          <Route path="/shpetinas" element={<SHPEtinas />} />
          <Route path="/mentorshpe" element={<MentorSHPE />} />
          <Route path="/dia-de-ciencias" element={<DiaDeCiencias />} />
          <Route path="/women-in-stem-summit" element={<WomenInStemSummit />} />
          <Route path="/national-convention" element={<NationalConvention />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
