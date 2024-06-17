import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Button} from './Button';

describe('Button component', () => {
  const renderButton = props => render(<Button {...props} />);

  test('Should render Button component and check className', () => {
    renderButton({className: 'button'});
    const buttonElem = screen.getByRole('button');
    expect(buttonElem).toBeInTheDocument();
    expect(buttonElem).toHaveClass('button');
  });
  test('Should execute onClick function when button is clicked', () => {
    const handleClick = jest.fn();
    renderButton({onClick: handleClick});
    const buttonElem = screen.getByRole('button');
    fireEvent.click(buttonElem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should render Button component with title', () => {
    const title = 'Text';
    renderButton({title: title});
    const buttonElem = screen.getByRole('button');
    expect(buttonElem).toHaveTextContent('Text');
    expect(buttonElem).toHaveAttribute('aria-label', title);
  });
  test('Should render Button component as disabled when data is not loaded', () => {
    const dataLoaded = false;
    renderButton({disabled: !dataLoaded});
    const buttonElem = screen.getByRole('button');
    expect(buttonElem).toBeDisabled();
  });
});
