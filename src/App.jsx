import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TableView from './TableView';
import SerialMonitorView from './SerialMonitorView'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/table" element={<TableView />} />
      <Route path="/serial-monitor" element={<SerialMonitorView />} />
    </Routes>
  </Router>
);

export default App;
