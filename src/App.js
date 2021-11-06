import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';
import Login from './Pages/Login/index.jsx'


function App() {

  const [user,setUser] = useState (null);

  const actionLoginDataGoogle = async (u) =>{
    let newUser ={
      id:u.uid,
      name:u.displayName,
      avatar:u.photoURL,
    }

    setUser(newUser);
  }


  if(user === null){

    return (

      <Login onReceiveGoogle={actionLoginDataGoogle}/>
    );
  }

  
  return (
    <BrowserRouter>
    <Header user={user}/>

    <Routes/>
    
    </BrowserRouter>
  );

}


export default App;
