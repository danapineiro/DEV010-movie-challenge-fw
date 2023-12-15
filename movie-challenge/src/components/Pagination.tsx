import React from "react";

// Define la interfaz de props para el componente Pagination
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Componente funcional Pagination con tipo React.FC y desestructuración de props
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Define el número máximo de páginas a mostrar y calcula el rango de páginas a mostrar
  const maxPagesToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Crea un array con las páginas a mostrar
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  // Manejador de clics para ir a la página anterior
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Manejador de clics para ir a la página siguiente
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Renderiza el componente con botones de navegación y páginas
  return (
    <section className="Btns">
      <button className="BtnPrev" disabled={currentPage === 1} onClick={handlePrevClick}>
        Prev
      </button>
      {/* <p>Current Page: {currentPage}</p> */}
      {pages.map((page) => (
        <button className="BtnPag" key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className="BtnNext" disabled={currentPage === totalPages} onClick={handleNextClick}>
        Next
      </button>
    </section>
  );
};

// Exporta el componente Pagination como la exportación predeterminada
export default Pagination;
