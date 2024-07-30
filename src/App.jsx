import PokemonList from "./components/molecules/pokemonList";
import './App.css';
import Navbar from "./components/molecules/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <PokemonList />
    </div>
  );
};

export default App;
