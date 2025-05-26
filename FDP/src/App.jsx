import { Routes, Route } from 'react-router-dom';
import { ExcersiceList } from './Components/ExcersiceList/ExcersiceList.jsx'
import { HubApp } from './HubApp.jsx'


export function App() {
  return (
    <Routes basename="/FDP">
      <Route path="/" element={<ExcersiceList />} />
      <Route path="/FDP/:carpeta" element={<HubApp />} />
    </Routes>
  );
}