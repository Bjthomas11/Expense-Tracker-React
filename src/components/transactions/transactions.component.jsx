import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const signColor = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={signColor}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transactions;
