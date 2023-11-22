import '@testing-library/jest-dom';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: any) => {
    return <a {...props} />;
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});
