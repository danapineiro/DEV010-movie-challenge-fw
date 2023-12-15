//MovieInfo.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieInfo from '../src/components/MovieInfo';
import '@testing-library/jest-dom'; // jest-dom

// Inicia las pruebas para el componente MovieInfo
describe('MovieInfo Component', () => {
    // Inicia la prueba
    it('renderiza el componente con el título y la fecha de lanzamiento', () => {
    // Asignamos valores para el título y la fecha de lanzamiento que se mostrarán en la prueba
    //Se utiliza como nombre mock para especificar que esta simu
    const mockTitle = 'Paw Patrol';
    const mockReleaseDate = '2023-09-21';

    //Renderiza el componente con los valores antes mencioandos
    render(<MovieInfo title={mockTitle} release_date={mockReleaseDate}/>);

    // Verifica que el título y la fecha de lanzamiento estén presentes en el componente renderizado
    expect(screen.getAllByText(mockTitle)[0]).toBeInTheDocument();
    expect(screen.getAllByText(mockReleaseDate)[0]).toBeInTheDocument();
    //toBeInTheDocument se utiliza para asegurarse que estan presente en el DOM
    });
});

// En este test verifica que se este renderizando correctamente la info de la pelicula.