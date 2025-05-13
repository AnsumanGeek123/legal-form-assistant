import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Welcome to Legal Form Assist</h1>
    <p>Select your preferred language and start your application process.</p>
  </div>
);

const FormPage = () => <div>Form Page (Coming Soon)</div>;
const TrackPage = () => <div>Track Application (Coming Soon)</div>;
const Chatbot = () => (
  <div className="fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg">
    <p>Need help? Chat with us!</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:formId" element={<FormPage />} />
        <Route path="/track" element={<TrackPage />} />
      </Routes>
      <Chatbot />
    </Router>
  );
}
export default App; 