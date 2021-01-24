import "./App.scss";
import List from "./components/List";
import Menu from "./components/Menu";
import React, { Component } from "react";

class App extends Component {
  state = {
    expenses: [],
    total: 0,
  };

  handleExpensesAdded = expense => {
    let { expenses, total } = this.state;
    expenses.push(expense);

    total += parseInt(expense.amount);
    this.setState({ expenses, total });
  };

  render() {
    const { expenses, total } = this.state;

    return (
      <div className="container">
        <List total={total} expenses={expenses} />
        <Menu addExpence={this.handleExpensesAdded} />
      </div>
    );
  }
}

export default App;
