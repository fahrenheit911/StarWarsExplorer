import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';
import {Starship} from './Starship';

describe('Starship component', () => {
  const starshipData = {
    name: 'Starship Name',
    cost_in_credits: '100000',
    passengers: '500',
    url: '/starships/1',
  };
  const renderStarship = () =>
    render(
      <MemoryRouter>
        <Starship {...starshipData} />
      </MemoryRouter>
    );
  test('Should render Starship component with props and className', () => {
    renderStarship();
    const starshipElement = screen.getByTestId('cardid');
    expect(starshipElement).toBeInTheDocument();
    expect(starshipElement).toHaveClass('items__container');
  });
  test('SShould render Starship component with correct link attribute', () => {
    renderStarship();
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/starships/1');
  });
  test('Should render Starship component with correct initials', () => {
    renderStarship();
    const initialsElement = screen.getByText(/SN/);
    expect(initialsElement).toBeInTheDocument();
  });
  test('Should render Starship component with correct name', () => {
    renderStarship();
    const nameElement = screen.getByText(/Name: Starship Name/);
    expect(nameElement).toBeInTheDocument();
  });
  test('hould render Starship component with correct cost', () => {
    renderStarship();
    const costElement = screen.getByText(/Cost: 100000/);
    expect(costElement).toBeInTheDocument();
  });
  test('hould render Starship component with correct passangers', () => {
    renderStarship();
    const passengersElement = screen.getByText(/Passangers: 500/);
    expect(passengersElement).toBeInTheDocument();
  });
});
