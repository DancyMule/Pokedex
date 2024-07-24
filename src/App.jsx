import PokemonList from "./components/molecules/pokemonList";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Mi Aplicación React con Consumo de API</h1>
      <PokemonList></PokemonList>
    </div>
  );
};

export default App;
