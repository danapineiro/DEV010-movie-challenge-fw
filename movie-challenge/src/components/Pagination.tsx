import React from "react"; 

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    //console.log('currentPage:', currentPage);
    //console.log('totalPages:', totalPages);
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);  
    const handlePrevClick = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
    //console.log('Renderizando componentes...');

    return (
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
          Prev
        </button>
        <p>Current Page: {currentPage}</p>
        {pages.map((page) => (
          <button key={page} onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={handleNextClick}>
          Next
        </button>
      </div>
    );
  };
  export default Pagination;