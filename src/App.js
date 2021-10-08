import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/header/header'
import Main from './pages/main'
import ExpenseTracker from './pages/Expense-tracker'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route component={Main} path="/" exact/>
        <Route component={ExpenseTracker} path="/Expense_Tracker"/>
      </div>
    </Router>
    
  );
}

export default App