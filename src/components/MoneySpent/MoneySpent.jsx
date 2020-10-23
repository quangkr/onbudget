import React from "react";
import cn from "classnames";
import format from "date-fns/format";

import sumSpending from "./utils/sumSpending";

import Card from "../Card/Card";

import "./MoneySpent.css";

//TODO: proptypes
//TODO: Credit - (Un)/Planned Expenses instead of just displaying money spent

const MoneySpent = ({ classNames, expenses, categories, ...props }) => {
  const month = new Date();
  const moneySpent = sumSpending({ expenses, month });

  return (
    <Card
      className={cn("MoneySpent", classNames)}
      {...props}
      title={`Spending - ${format(month, "MMMM yyyy")}`}
      centered
      small
      wrapped
    >
      <p className="amount">${moneySpent}</p>
    </Card>
  );
};

export default MoneySpent;
