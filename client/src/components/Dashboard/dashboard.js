import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import "./dashboard.css";
import { useState } from 'react';

function Dashboard() {
  const [username, setUsername] = useState("")

  const savedUser = localStorage.getItem("user");
  const parseUser = JSON.parse(savedUser);

  console.log(parseUser.username)
  return (
    <h1>Painel de controle {parseUser.username}</h1>
  );
}

export default Dashboard;