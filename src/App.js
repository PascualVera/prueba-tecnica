import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main-layout">
        <Aside />
        <Table />
      </main>
    </div>
  );
}

export default App;
