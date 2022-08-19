import { UserCard } from "./sumador";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserCard
        name="Ryan"
        saldo={32000}
        married={true}
        points={[99, 33.3, 22, 2]}
        adress={{
          street: "123 main street",
          city: "New York",
        }}
      />
    </div>
  );
}

export default App;
