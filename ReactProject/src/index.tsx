import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import getApolloClient from "./utils/get-apollo-client";

/*
const RootElement : React.FC = ({children}) => (
    <div>
        {children}
    </div>
)*/

ReactDOM.render(
  <ApolloProvider client={getApolloClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
