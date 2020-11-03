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
    gestoresGet();
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(gestor=>(
            <tr key={gestor.Id}>
              <td>{gestor.Id}</td>
              <td>{gestor.Nome}</td>
              <td>{gestor.Lancamento}</td>
              <td>{gestor.Desenvolvedor}</td>
              <td>
                <button className="btn btn-success">Editar</button> {" "}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
      <Modal>
        <ModalHeader>Inserir um Gestor na base de dados</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nome:</label>
            <br/>
            <input type="text" className="form-control"/>
            <label>Lançamento:</label>
            <br/>
            <input type="text" className="form-control"/>
            <label>Desenvolvedor:</label>
            <br/>
            <input type="text" className="form-control"/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary">Inserir</button>{"  "}
          <button className="btn btn-danger">Cancelar</button> 
        </ModalFooter>
      </Modal>      
    </div>
  );
}

export default App;
