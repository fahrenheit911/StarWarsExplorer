import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter, useLocation, useNavigate} from 'react-router-dom';
import {ModalWindow} from './ModalWindow';

jest.mock('../Loader', () => () => <div>Loading...</div>);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const mockNavigate = jest.fn();
const mockLocation = {
  pathname: '/main-path/100',
};

beforeEach(() => {
  useNavigate.mockReturnValue(mockNavigate);
  useLocation.mockReturnValue(mockLocation);
});

describe('ModalWindow component', () => {
  const renderModalWindow = props => {
    render(
      <MemoryRouter>
        <ModalWindow {...props}>
          <div>Child Content</div>
        </ModalWindow>
      </MemoryRouter>
    );
  };
  test('Should render ModalWindow component with children', () => {
    renderModalWindow({loading: false});
    const modalContent = screen.getByText('Child Content');
    expect(modalContent).toBeInTheDocument();
  });

  test('Should render Loader component when loading', () => {
    renderModalWindow({loading: true});
    const loader = screen.getByText('Loading...');
    expect(loader).toBeInTheDocument();
  });
  test('Should navigate to parent path when wrapper is clicked', () => {
    const onWrapperClick = jest.fn((e, navigate) => navigate());
    renderModalWindow({loading: false, onWrapperClick});

    const wrapper = screen.getByTestId('modal-wrapper');
    fireEvent.click(wrapper);

    expect(onWrapperClick).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/main-path');
  });
});
