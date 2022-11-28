import { getUsers } from '../../requests/users'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import UsersContainer from '../UsersContainer';

export default function App() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []); // функция вызывается один раз при перезагрузке страницы

  // getUsers(setUsers) - функция вызывается много раз

  return (
    <div>
      <Context.Provider value={{ users }}>
        <UsersContainer />
      </Context.Provider>
    </div>
  );
}


