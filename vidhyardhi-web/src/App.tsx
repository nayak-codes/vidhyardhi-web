import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { About } from './pages/About';

import { Clips } from './pages/Clips';
import { DocumentSaver } from './pages/DocumentSaver';
import { SmartGroups } from './pages/SmartGroups';
import { StudentFeed } from './pages/StudentFeed';
import { Events } from './pages/Events';
import { DigitalLibrary } from './pages/DigitalLibrary';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />

        {/* Feature Pages */}
        <Route path="/features/clips" element={<Clips />} />
        <Route path="/features/documents" element={<DocumentSaver />} />
        <Route path="/features/groups" element={<SmartGroups />} />
        <Route path="/features/feed" element={<StudentFeed />} />
        <Route path="/features/events" element={<Events />} />
        <Route path="/features/library" element={<DigitalLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
