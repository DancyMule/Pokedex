// src/components/atoms/Pokemon.jsx
import { useEffect, useState } from 'react';
import { fetchPokemonData } from '../../services/api';
import PokemonTypes from './PokemonTypes';
import './style.css'; 


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


// eslint-disable-next-line react/prop-types
const Pokemon = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);
    

  useEffect(() => {
    const fetchPokemonFromAPI = async () => {
      try {
        const pokemonData = await fetchPokemonData(url);
        setPokemon(pokemonData); // Actualiza el estado con los datos del Pokémon
      } catch (error) {
        // Maneja el error según tu lógica de aplicación
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonFromAPI();
  }, [url]);

  return (
    <div className=''>
      {pokemon ? (
        <div className='pokeContainer'>
            <div>
                <img className='pokemonImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className='TextContainer'>
                    <p className='pokemonId'>#{String(pokemon.id).padStart(3, 0)}</p>
                    <h3 className='pokemonName'>{capitalizeFirstLetter(pokemon.name)}</h3>
                    <PokemonTypes>{pokemon.types.map((typeData, index) => (
                        <p key={index}>{
                            capitalizeFirstLetter(typeData.type.name)
                        }</p>
                    ))}</PokemonTypes>
                </div>
                
                
                {/* Agrega más detalles según sea necesario */}
            </div>
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
    </div>
  );
};

export default Pokemon;
