import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "../components/AddBudgetModal"
import AddExpenseModal from "../components/AddExpenseModal"
import ViewExpensesModal from "../components/ViewExpensesModal"
import BudgetCard from "../components/BudgetCard"
import UncategorizedBudgetCard from "../components/UncategorizedBudgetCard"
import TotalBudgetCard from "../components/TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import '../components/BudgettCard.css';
import {Navbar} from '../components/Navbar'
import axios from "axios"
// import  useBudgets  from "../contexts/BudgetsContext"

function Budget() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }
  const navbarLinks=[{url:"/",title:"Home"},{url:"/Budget",title:"Budgeting"},{url:"https://savingshackniche.netlify.app/",title:"Savings"},{url:"https://insuranceplans.netlify.app/",title:"Insurance"},,{url:"/Login",title:"Stock Recommendation and Gold Price"},{url:"/Signup",title:"SignIn"},{url:"/Login",title:"Log In"}]

  return (

    <div className="body-styling">
       <Navbar navbarLinks={navbarLinks}/>
      <Container className="container-styling" >
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets and Expense Tracker</h1>
          <Button  onClick={() => setShowAddBudgetModal(true)} style={{ backgroundColor: 'red' }}>
            Add Budget
          </Button>
          <Button onClick={openAddExpenseModal} style={{ backgroundColor: 'red' }}>
            Add Expense
          </Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(budget.id)
                }
              />
            )
          })}
          <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </div>
  )
}


export default Budget;
//   const handleApi = () => {
//   axios.get('http://127.0.0.1:8000',)
//             .then(res => {const token = res.data.access;
  
//     axios.post('http://127.0.0.1:8000/monitor/budget',{ headers: {"Authorization" : `Bearer ${token}`} }, {
//       name: budgets.name,
//       max_spending: budgets.max,
    
//     }).then(result => {
//       console.log(result);
//       setShowAddBudgetModal(false);
//     });
//   ;})}