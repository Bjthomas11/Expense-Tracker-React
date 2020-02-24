import React from "react";
import Header from "./components/header/header.component";
import Balance from "./components/balance/balance.component";
import IncomeExpenses from "./components/income-expenses/income-expenses.component";
import TransactionList from "./components/transaction-list/transaction-list.component";
import AddTransaction from "./components/add-transaction/add-transaction.component";
import { GlobalProvider } from "./context/globalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
