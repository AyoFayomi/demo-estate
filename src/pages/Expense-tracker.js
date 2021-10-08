import  './expense.css'

const ExpenseTracker = () => {
    state = {
        income: [],
        currentIncome: ""
      };
    return (
        <div className="Expense">
            <h3>Welcome, Let's help you track your expenses</h3>
            <h1>Expense Tracker</h1>
            <div className="expense-row">
                <div className="expenseInput">
                    <h5>Please Enter Your Income</h5>
                    <p>Click reset to clear income to zero (0)</p>
                    <form >
                        <input type="number" name="Income" id="income" className="expenseForm income" placeholder="Enter Amount"/>
                        <div className="expensebtns">
                            <button type="submit" className="expensebtn1">Calculate</button>
                            <button type="reset" className="expensebtn2">Reset</button> 
                        </div>
                        
                    </form>
                </div>
                <div className="expenseDisplay">
                    <span className="imcome">
                        <h4>
                            INCOME
                        </h4>
                        <i className="fas fa-4x fa-money-bill-alt expenseicons"></i>
                        <div>
                            <h4 className="green-txt">&#8358; 0</h4>
                        </div>
                    </span>
                    <span className="expenses">
                        <h4>
                            EXPENSES
                        </h4>
                        <i className="far fa-credit-card fa-4x expenseicons"></i>
                        <div>
                            <h4 className="red-txt">&#8358; 0</h4>
                        </div>
                    </span>
                    <span className="balance">
                        <h4>BALANCE</h4>
                        <h3 className="expenseicons">&#8358;</h3>
                        <div>
                            <h4>&#8358; 0</h4>
                        </div>
                    </span>
                </div>
            </div>
            <div className="expenserow2">
                <div className="expenseInput2">
                    <h5>Please Enter Your Expense Title</h5>
                    <form><input type="text" name="Expense Title" className="expenseForm expense-title" id="ExpenseTitle" value={this.state.currentIncome} placeholder="Enter Expense Title"/></form>
                    <h5>Please Enter Your Expense Amount</h5>
                    <form action="Post">
                        <input type="number" name="Expense" className="expenseForm expens-num" id="expense" placeholder="Enter Expense Amount"/>
                        <button type="submit" className="expensebtn3">Add Expense</button>
                    </form>
                </div>
                <div className="expenseLog">
                    <div className="log-header">
                        <p>Expense title</p>
                        <p>Expense value</p>
                        <div className="col-34">

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default ExpenseTracker
