import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App ">
      <NavBar/>
      <h1>Nuna  </h1>
      <ItemListContainer title={'Nuestros Productos'}/>
    </div>
  );
}

export default App;
