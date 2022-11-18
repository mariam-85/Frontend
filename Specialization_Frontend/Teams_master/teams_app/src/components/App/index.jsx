import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../context'

export default function App() {


const [ teams, setTeams ] = useState([]);

const addTeam = (team_title) => {
  setTeams([...teams, { value: team_title, label: team_title}])
}

  return (
    <div>
      <Context.Provider value={{ teams, addTeam }}>
     <Nav />
     <Routes>
       <Route path='/configurations_page' element={<ConfigurationsPage />} />
       <Route path='/teams_page' element={<TeamsPage />} />
     </Routes>
     </Context.Provider>
    </div>
  );
}

