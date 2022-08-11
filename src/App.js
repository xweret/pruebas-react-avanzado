import {UserCard} from './sumador';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard title='hola'/>
      <UserCard x="bye"/>
      <UserCard y={30}/>
      <UserCard z={true}/>
      <UserCard a={[1, 2, 3]}/>

  
    </div>
  );
}

export default App;
