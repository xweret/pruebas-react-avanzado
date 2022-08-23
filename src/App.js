import UserCard from './sumador';
import './App.css';
import { Button } from './button';
import {TaskCard} from './task'
import {Saludar} from './Saludar'


function App() {
  return (
    <>
    <TaskCard ready={true}/>
    <Button/>
    <Saludar/>
    <Button text='Textos'/>
    <input
    placeholder='Escribi pa'
    onBlur={() => console.log('clickeado 2  veces')}
    >
  
    </input>
    <form
    onSubmit={(e) => {
      e.preventDefault()
      alert('enviado')
    }}
    >
      <h1>Registro</h1>
      <button>Send</button>
    </form>
    </>
  );
}

export default App;
