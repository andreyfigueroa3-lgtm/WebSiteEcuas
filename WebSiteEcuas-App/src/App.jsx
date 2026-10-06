import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseExams from './pages/BrowseExams';
import ExamPractice from './pages/ExamPractice';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<BrowseExams />} />
        <Route path="/exam/:examId" element={<ExamPractice />} />
      </Routes>
    </Router>
  );
}

export default App;
