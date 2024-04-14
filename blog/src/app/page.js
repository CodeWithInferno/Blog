// App.js
"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Theme/page';
import { ThemeProvider } from 'next-themes';



function App() {
  return (
    <div className="App">
      <ThemeProvider enableSystem={true} attribute="class">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
