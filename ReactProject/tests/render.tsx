import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import getApolloClient from "../src/utils/get-apollo-client";
import { ApolloProvider } from "@apollo/client";
import { render as parentRender } from "@testing-library/react";
import { jest } from "@jest/globals";

configure({
  asyncUtilTimeout: 100000,
});

jest.setTimeout(100000);

type WrapperProps = {
  client: ReturnType<typeof getApolloClient>;
};

const Wrapper: React.FC<WrapperProps> = ({ client, children }) => {
  return <ApolloProvider client={client} children={children}></ApolloProvider>;
};

export const render = (
  children: JSX.Element,

): ReturnType<typeof parentRender> => {
  const client = getApolloClient();
  const result = parentRender(<Wrapper client={client}>{children}</Wrapper>);

  return {
    ...result,
    rerender: (children) =>
      result.rerender(<Wrapper client={client}>{children}</Wrapper>),
  };
};
