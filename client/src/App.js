import React from 'react';
import Homepage from './pages/Homepage';
import PostForm from './pages/PostForm';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-cyan-700 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
