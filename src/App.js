import UserCard from './sumador';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard name='Ryan' saldo={32000} married={false}
      points={[99, 33.3, 22,2]}
      addres={{
        street: '123 main street',
        city: 'New York'
      }
      }
      greet = { function(){
        alert('Hello')
      }}
      />
          <UserCard name='Joe' saldo={32000} married={true}
      points={[99, 33.3, 22,2]}
      addres={{
        street: '24 Flee street',
        city: 'Chivilcoy'
      }
      }
      greet = { function(){
        alert('Cia')
      }}
      />
    </div>
  );
}

export default App;
