import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {StatsBlock} from './StatsBlock';

describe('StatsBlock component', () => {
  const statsblockData = {
    title: 'Text',
    stats: [{label: 'Label', value: 'Value'}],
  };
  const renderStatsBlock = () =>
    render(
      <StatsBlock {...statsblockData}>
        <div>Child Content</div>
      </StatsBlock>
    );
  test('Should render StatsBlock component with children and check className', () => {
    renderStatsBlock();
    const titleElement = screen.getByText('Text');
    const listElement = screen.getByRole('list');
    expect(titleElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('modal__container-block-left-headline');
    expect(listElement).toHaveClass('lists');
  });

  test('Should render StatsBlock component with list of stats', () => {
    renderStatsBlock();
    const statsElement1 = screen.getByText(/Label:\s*Value/);
    expect(statsElement1).toBeInTheDocument();
  });
});
