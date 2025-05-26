import { Routes, Route, HashRouter } from 'react-router-dom';
import { ExcersiceList } from './Components/ExcersiceList/ExcersiceList.jsx'
import { HubApp } from './HubApp.jsx'


export function App() {
  return (
    <Routes>
      <Route path="/" element={<ExcersiceList />} />
      <Route path="/:Folder" element={<HubApp />} />
    </Routes>
  );
}