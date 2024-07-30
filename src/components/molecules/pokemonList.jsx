import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../../services/api'
import Pokemon from '../atoms/Pokemon';
import './style.css'; 

const PokemonList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPokemonListFromAPI = async () => {
      try {
        const apiData = await fetchPokemonList();
        setData(apiData); // Actualiza el estado con los datos de la API
      } catch (error) {
        // Maneja el error según tu lógica de aplicación
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonListFromAPI();
  }, []);

  return (
    <div>
      <div className='SelectFilter'>
        <select name="" id="PokemonFilter">
          <option value="Lowest">Lowest Number (First)</option>
          <option value="Highest">Highest Number (First)</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </div>
      {data && data.results && Array.isArray(data.results) ? (
        <div className='container'>
          {data.results.map((pokemon, index) => (
            <div  key={index}>
              <Pokemon url={pokemon.url} />
            </div>
          ))}
        </div>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default PokemonList;