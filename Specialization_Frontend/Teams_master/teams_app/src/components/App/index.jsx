import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
     <Nav />
     <Routes>
       <Route path='/configurations_page' element={<ConfigurationsPage />} />
       <Route path='/teams_page' element={<TeamsPage />} />
     </Routes>
    </div>
  );
}

