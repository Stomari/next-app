import Layout from '@/components/layout';
import { render, screen } from '@testing-library/react';

const ChildrenMock = () => <div data-testid="children-mock" />;

describe('Layout', () => {
  it('renders home layout', () => {
    render(
      <Layout home>
        <ChildrenMock />
      </Layout>,
    );

    const headerTitle = screen.getByTestId('header-title');
    const headerBackActionText = screen.queryByTestId('header-back');
    const mockedChildren = screen.getByTestId('children-mock');

    expect(document.title).toBe('Beer App');
    expect(headerTitle).toBeInTheDocument();
    expect(headerBackActionText).not.toBeInTheDocument();
    expect(mockedChildren).toBeInTheDocument();
  });

  it('renders back option when not in home page', () => {
    render(
      <Layout>
        <ChildrenMock />
      </Layout>,
    );

    const headerBackActionText = screen.queryByTestId('header-back');

    expect(headerBackActionText).toBeInTheDocument();
  });
});
