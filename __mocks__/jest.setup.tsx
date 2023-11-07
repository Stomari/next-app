import { ReactNode } from "react";

jest.mock("next/link", () => {
  return ({ children }: { children: ReactNode }) => {
    return children;
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));
