import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import TrainingGuide from './pages/TrainingGuide';
import Models from './pages/Models';
import Datasets from './pages/Datasets';
import ModelApps from './pages/ModelApps';
import CloudGPU from './pages/CloudGPU';
import ResearchAssistant from './pages/ResearchAssistant';
import Courses from './pages/Courses';
import Chat from './pages/Chat';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/training" element={<TrainingGuide />} />
          <Route path="/models" element={<Models />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/apps" element={<ModelApps />} />
          <Route path="/cloud-gpu" element={<CloudGPU />} />
          <Route path="/research" element={<ResearchAssistant />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/chat" element={<Chat />} />
          {/* Additional routes will be added for other pages */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;