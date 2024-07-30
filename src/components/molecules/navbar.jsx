
import searchIcon from '../../assets/search.png';

function Navbar() {
  return (
    <div className="NavBarWrapper">
      <div className="NavBar">
        <div className="leftSide">
          <h2 className="searchText">Name or Number</h2>
          <div className="searchSection">
            <input type="text" className="searchField"/>
            <button className="searchBtn">
              <img className="searchIcon" src={searchIcon} alt="" />
            </button>
          </div>
          <p className="searchContext">Use the advanced search to explore Pokémon by type, weakness, Ability and more!</p>
        </div>
        <div className="rightSide">
          <p className="greenBox">Search a pokemon by name or using its National Pokedex number</p>
        </div>
      </div>
      <div className="downSide">
        <p>Show advanced Search</p>
      </div>
    </div>
  )
}

export default Navbar