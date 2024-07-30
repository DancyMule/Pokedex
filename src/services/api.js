import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  export const fetchPokemonList = async () => {
    try {
      const response = await api.get();
      console.log(response);
      return response.data;      
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
      throw error;
    }
  };

  export const fetchPokemonData = async (url) => {
    try {
      const response = await api.get(url);
      console.log(response);
      return response.data;      
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
      throw error;
    }
  };
