import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

const transactionsPddr = [
  {
    id: 1,
    title: "Transação 1",
    type: "deposit",
    value: "4.000,00",
    category: "food",
    createdDate: "26/01/2004",
  },
  {
    id: 2,
    title: "Transação 2",
    type: "deposit",
    category: "food",
    value: "1.000,00",
    createdDate: "27/01/2004",
  },
  {
    id: 3,
    title: "Transação 3",
    type: "deposit",
    category: "food",
    value: "2.000,00",
    createdDate: "27/01/2004",
  },
  {
    id: 4,
    title: "Transação 4",
    type: "deposit",
    category: "food",
    value: "5.000,00",
    createdDate: "27/01/2004",
  },
  {
    id: 5,
    title: "Transação 5",
    type: "deposit",
    category: "food",
    value: "4.000,00",
    createdDate: "27/01/2004",
  },
];

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
   server.db.loadData({
     transactions: [
      {
        id: 1,
        title: 'compras de roupas',
        type: 'deposit',
        category: 'dev',
        value: 6000,
        createdAt: new Date('2021-02-12')
      },
      {
        id: 2,
        title: 'compras de roupas',
        type: 'deposit',
        category: 'dev',
        value: 6000,
        createdAt: new Date('2021-02-12')
      }
     ]
   })
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", (schema, request) => {
      return this.schema.transactions.all('transactions');
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      schema.create("transactions", data);

      return `transação ${data.title} criada com sucesso!`;
    });
  },
});

render(<App />, document.querySelector("#root"));
