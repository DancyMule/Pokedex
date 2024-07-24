import './style.css'; // Asegúrate de importar tus estilos CSS

const ColorTypes = [
  ["Grass", "#8ec652"],
  ["Poison", "#b373bf"],
  ["Fire", "#ff6f30"],
  ["Flying", "#9daef6"],
  ["Water", "#3587b9"],
  ["Bug", "#a9ba26"],
  ["Normal", "#c4c1b7"],
  ["Dark", "#534032"],
  ["Dragon", "#7461d5"],
  ["Electric", "#f5c034"],
  ["Fairy", "#f0c5ef"],
  ["Fighting", "#7d3924"],
  ["Ghost", "#5e5ead"],
  ["Ground", "#d1b96f"],
  ["Ice", "#89dff6"],
  ["Psychic", "#e54279"],
  ["Rock", "#baa663"],
  ["Steel", "#bfbfc7"]
];

const PokemonTypes = ({ children }) => {
  // Si children es un solo elemento, conviértelo en un arreglo
  const types = Array.isArray(children) ? children : [children];

  const getTypeColor = (type) => {
    const foundType = ColorTypes.find(colorType => colorType[0].toLowerCase() === type.toLowerCase());
    return foundType ? foundType[1] : '#ffffff'; // Default color white if not found
  };

  return (
    <div className='pokemonTypesContainer'>
      {types.map((child, index) => (
        <div className='pokemonTypes' key={index} style={{ backgroundColor: getTypeColor(child.props.children) }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default PokemonTypes;