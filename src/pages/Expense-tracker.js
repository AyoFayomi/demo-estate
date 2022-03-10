import "./expense.css";
import { React, useState } from "react";

const ExpenseTracker = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [balance, setBalance] = useState(0);
  const [incomeVal, setIncomeVal] = useState(0);
  const [expenseVal, setExpenseVal] = useState(0);
  const [expenseName, setExpenseName] = useState("");
  const [addExpense, setAddExpense] = useState([  ]);
  const incomeChange = (e) => setIncome(e.target.value);
  const expenseChange = (e) => setExpense(e.target.value);
  const expenseNameChange = (e) => setExpenseName(e.target.value);

  const handleIncome = (e) => {
    e.preventDefault();
    setIncomeVal(parseInt(income) + incomeVal);
    setBalance((parseInt(income) + incomeVal - expenseVal).toLocaleString('en-US'));
    setIncome("");
  };
  const handleReset = () => {
    setIncome("");
    setIncomeVal(0);
    setBalance(-expenseVal);
  };
  const handleExpense = (e, expenses) => {
    e.preventDefault();
    setExpenseVal(parseInt(expense) + expenseVal);
    setBalance(incomeVal - (expenseVal + parseInt(expense)));
    const newExpense = {  id:  Math.floor(Math.random() * 1000) + 1,
      expenseListName: expenseName,
      expenseListValue: expense,}
    setAddExpense([...addExpense, newExpense]);
    setExpense("");
    setExpenseName("");
  };

  const handleExpenseDelete = (id, expenseListValue) => {
    setAddExpense(addExpense.filter((ex) => ex.id !== id));
    setExpenseVal(expenseVal - parseInt(expenseListValue));
    setBalance(balance - parseInt(expenseListValue));
  };
  const handleExpenseEdit = (id, expenseListName, expenseListValue) => {
    setAddExpense(addExpense.filter((ex) => ex.id !== id));
    setExpenseVal(expenseVal - parseInt(expenseListValue));
    setBalance(balance + parseInt(expenseListValue));
    setExpenseName(expenseListName);
    setExpense(parseInt(expenseListValue));
  };
  const balanceColor = incomeVal > expenseVal ? "green-txt" : incomeVal < expenseVal ? "red-txt" : "black";
  return (
    <div className="Expense">
      <h3>Welcome, Let's help you track your expenses</h3>
      <h1>Expense Tracker</h1>
      <div className="expense-row">
        <div className="expenseInput">
          <h5>Please Enter Your Income</h5>
          <p>Click reset to clear income to zero (0)</p>
          <form onSubmit={handleIncome}>
            <input
              type="number"
              name="Income"
              id="income"
              className="expenseForm income"
              placeholder="Enter Amount"
              value={income}
              onChange={incomeChange}
              required
            />
            <span className="btn-group">
              <button type="submit" className="expensebtn1">
                Calculate
              </button>
              <button
                type="reset"
                className="expensebtn2"
                onClick={handleReset}
              >
                Reset
              </button>
            </span>
          </form>
        </div>
        <div className="expenseDisplay">
          <span className="imcome">
            <h4>INCOME</h4>
            <i className="fas fa-4x fa-money-bill-alt expenseicons"></i>
            <div>
              <h4 className="green-txt">
                &#8358;
                <span> {incomeVal.toLocaleString('en-US')}</span>
              </h4>
            </div>
          </span>
          <span className="expenses">
            <h4>EXPENSES</h4>
            <i className="far fa-credit-card fa-4x expenseicons"></i>
            <div>
              <h4 className="red-txt">
                &#8358;
                <span> {expenseVal.toLocaleString('en-US')}</span>{" "}
              </h4>
            </div>
          </span>
          <span className="balance">
            <h4>BALANCE</h4>
            <h3 className="expenseicons">&#8358;</h3>
            <div>
              <h4 className={`${balanceColor}`}>
                &#8358;
                <span> {balance.toLocaleString('en-US')}</span>
              </h4>
            </div>
          </span>
        </div>
      </div>
      <div className="expenserow2">
        <div className="expenseInput2">
          <h5>Please Enter Your Expense Title</h5>
          <form onSubmit={handleExpense}>
            <input
              type="text"
              name="Expense Title"
              className="expenseForm expense-title"
              id="ExpenseTitle"
              placeholder="Enter Expense Title"
              value={expenseName}
              onChange={expenseNameChange}
              required
            />
            <h5>Please Enter Your Expense Amount</h5>
            <input
              type="number"
              name="Expense"
              className="expenseForm expens-num"
              id="expense"
              placeholder="Enter Expense Amount"
              step="10"
              value={expense}
              onChange={expenseChange}
              required
            />
            <button type="submit" className="expensebtn3">
              Add Expense
            </button>
          </form>
        </div>
        <div className="expenseLog">
          <div className="log-header">
            <p>Expense title</p>
            <p>Expense value</p>
            <div className="col-34"></div>
          </div>
          <div className="log-list">
            <ul>
              {addExpense.map((ex) => (
                <li className="log-list-item" key={ex.id} id="note">
                  {ex.expenseListName}
                  <span>{ex.expenseListValue}</span>
                  <span>
                    <button
                      className="btn-edit"
                      onClick={() =>
                        handleExpenseEdit(
                          ex.id,
                          ex.expenseListName,
                          ex.expenseListValue
                        )
                      }
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        handleExpenseDelete(ex.id, ex.expenseListValue)
                      }
                    >
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        id="info"
                      ></i>
                    </button>
                  </span>
                </li>
              ))}
            </ul>

            {/* <ul>
                <li className="log-list-item">
                  Cable
                  <span>100</span>
                  <span>
                    <button className="btn-edit">
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                    <button className="btn-delete">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </span>
                </li>
              </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
