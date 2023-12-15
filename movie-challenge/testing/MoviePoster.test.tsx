// MovieInfo.test.tsx
// Importaciones que se necesitan para hacer este test
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MoviePoster, { MoviePosterProps } from '../src/components/MoviePoster';
// import '@testing-library/jest-dom'; // jest-dom

// Inicia las pruebas para el componente MoviePoster
describe('MoviePoster Component', () => {
  // Inicia la prueba
  it('renderiza el componente MoviePoster', () => {
    // Asignamos una función jest.fn() como mock para la prueba
    const mockOnClick = jest.fn();
    const mockPosterPath = '/path/to/poster.png';

    // configuracion de propiedades simuladas para el componente MoviePoster
    const mockProps: MoviePosterProps = {
        posterPath: mockPosterPath,
        title: 'Paw Patrol', // Simulacion de título
        releaseDate: '2023-09-21', // Simulacion de fecha de lanzamiento
        onClick: mockOnClick, // Simulacion de funcion para el evento onCLick
      };
        
      // Renderizamos el componente MoviePoster con la simulacion de las propiedades
      const { getByAltText } = render(<MoviePoster {...mockProps} />);
    
      // Utilice la info de alt para obtener una referencia al elemento de la img de poster
    const posterImage = getByAltText('Este es el póster');

    // se hace la simulacion del click que se le da a la img del poster
    fireEvent.click(posterImage);

    // Verifica que la función mockOnClick haya sido llamada al hacer clic en la imagen del póster
    expect(mockOnClick).toHaveBeenCalled();
  });
});
// Este test verifica el comportamiento de MoviePoster cuando se le hace click a la img.