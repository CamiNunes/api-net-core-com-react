import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  const baseUrl = "https://localhost:44351/api/gestores";
  const [data, setData]=useState([])

  const gestoresGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getSelection();
  },[])

  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Código</th>  
            <th>Nome</th>  
            <th>Lançamento</th>  
            <th>Desenvolvedor</th>  
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>  
    </div>
  );
}

export default App;
