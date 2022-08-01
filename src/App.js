import { useState } from 'react';
import './App.css';
import UserForm from './Component/Form';





function App() {
  const [user, setUser]= useState({})
  return (
    <div className="form">
      <div>
      <UserForm setUser={setUser}/>
      {user.firstName}
      <div></div>
      {user.lastName}
      <div></div>
      {user.email}
      <div></div>
      {user.password}

      </div>

    </div>
    
  );
}

export default App;
