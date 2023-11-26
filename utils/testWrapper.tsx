import { store } from '@/redux';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';

export const Wrapper = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const renderWithWrapper = (component: ReactElement) => {
  return render(component, { wrapper: Wrapper });
};
