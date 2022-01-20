import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transação 1",
          type: "deposit",
          category: "food",
          createdDate: "26/01/2004",
        }
      ];
    });
  },
});

render(<App />, document.querySelector("#root"));
