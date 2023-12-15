import React from "react";
// import "./Search.css"; 

// Define la interfaz de props para el componente Search
interface Props {
  searchInput(e: React.FormEvent<HTMLInputElement>): void; // Función para manejar cambios en el input
  search(e: React.KeyboardEvent<HTMLInputElement>): void; // Función para manejar la pulsación de tecla Enter
}

// Componente funcional Search que recibe las funciones de manejo como props
function Search(props: Props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find Your Favorite Movie..."
        className="search"
        name="searchInput"
        onChange={props.searchInput} // Asigna la función de manejo de cambios en el input
        onKeyPress={props.search} // Asigna la función de manejo de la pulsación de tecla Enter
      />
    </div>
  );
}

// Exporta el componente Search como la exportación predeterminada
export default Search;
