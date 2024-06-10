import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';
import {PersonWindowContent} from './PersonWindowContent';

const personData = {
  name: 'Person Name',
  hair_color: 'Blonde',
  skin_color: 'Fair',
  eye_color: 'Blue',
  gender: 'Male',
  height: '172',
  mass: '77',
  homeworld: {
    name: 'Planet Name',
    url: 'planets/1',
  },
  films: [{title: 'Film Title', url: 'films/1'}],
  vehicles: [{name: 'Vehicle Name', url: 'vehicles/1'}],
  starships: [{name: 'Starship Name', url: 'starships/1'}],
};

describe('PersonWindowContent component', () => {
  const renderPersonWindowContent = () =>
    render(
      <MemoryRouter>
        <PersonWindowContent person={personData}>
          <div>Child content</div>
        </PersonWindowContent>
      </MemoryRouter>
    );

  test('Should render with person name', () => {
    renderPersonWindowContent();

    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
    const personnameElement = screen.getByText('Person Name');
    expect(personnameElement).toBeInTheDocument();
  });

  test('Should render block Appearance with content', () => {
    renderPersonWindowContent();
    const appearanceElement = screen.getByText('Apperance');
    expect(appearanceElement).toBeInTheDocument();
    expect(screen.getByText('Hair color: Blonde')).toBeInTheDocument();
    expect(screen.getByText('Skin color: Fair')).toBeInTheDocument();
    expect(screen.getByText('Eye color: Blue')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
  });
  test('Should render block Stats with content', () => {
    renderPersonWindowContent();
    const statsElement = screen.getByText('Stats');
    expect(statsElement).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77')).toBeInTheDocument();
  });

  test('Should render block Home world with content', () => {
    renderPersonWindowContent();
    const homeworldElement = screen.getByText('Home world:');
    expect(homeworldElement).toBeInTheDocument();
    const planetNameElement = screen.getByText('Planet Name');
    expect(planetNameElement).toBeInTheDocument();
    expect(planetNameElement).toHaveAttribute('href', '/planets/1');
  });

  test('Should render block Films with content', () => {
    renderPersonWindowContent();
    const filmsElement = screen.getByText('Films:');
    expect(filmsElement).toBeInTheDocument();
    const filmTitleElement = screen.getByText('Film Title');
    expect(filmTitleElement).toBeInTheDocument();
    expect(filmTitleElement).toHaveAttribute('href', '/films/1');
  });

  test('Should render block Vehicles with content', () => {
    renderPersonWindowContent();
    const vehiclesElement = screen.getByText('Vehicles:');
    expect(vehiclesElement).toBeInTheDocument();
    const vehicleElement = screen.getByText('Vehicle Name');
    expect(vehicleElement).toBeInTheDocument();
    expect(vehicleElement).toHaveAttribute('href', '/vehicles/1');
  });
  test('Should render block Starships with content', () => {
    renderPersonWindowContent();
    const starshipsElement = screen.getByText('Starships:');
    expect(starshipsElement).toBeInTheDocument();
    const starshipElement = screen.getByText('Starship Name');
    expect(starshipElement).toBeInTheDocument();
    expect(starshipElement).toHaveAttribute('href', '/starships/1');
  });
});
