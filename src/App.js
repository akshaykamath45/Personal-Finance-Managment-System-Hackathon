
import './App.css';
import {Hero} from './components/Hero';
import {Slider} from './components/Slider';
import { Navbar } from './components/Navbar';
import financial_01 from './assets/financial-01.jpg';
import main_01 from './assets/main.jpg'
import expense_tracking from './assets/expense-tracking.jpg';
import budgeting from './assets/budgeting.jpg';
import investment_portfolio from './assets/investment-portfolio.jpg';
import financial_goals from './assets/financial-goals.jpg';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'tailwindcss/tailwind.css'

import Signup from './pages/Signup';
import Login from './pages/Login';
import Budget from './pages/Budget';
import Savings from './pages/Savings';
import Sliders from './pages/Sliders';

// import Signup from './components/Signup';
const navbarLinks=[{url:"/",title:"Home"},{url:"/Budget",title:"Budgeting"},{url:"https://savingshackniche.netlify.app/",title:"Saving Schemes"},{url:"https://insuranceplans.netlify.app/",title:"Insurance"},{url:"https://personalrecommendation.netlify.app/",title:"PRS"},{url:"/Login",title:"Stock Recommendation"},{url:"/Signup",title:"SignIn"},{url:"/Login",title:"Log In"}]
function Landing()  {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={financial_01}/>
      <Slider imageSrc={budgeting} title={"Budgeting"} subtitle={"Our AI-powered budgeting tool helps you keep track of your finances and stay on top of your spending."}/>
      <Slider imageSrc={expense_tracking} title={"Expense Tracking"} subtitle={"Track your expenses and easily see where your money is going."} flipped={true}/>
      <Slider imageSrc={investment_portfolio} title={"Investment Portfolio Management"} subtitle={"Maximize your investments with our AI-powered portfolio management tools."}/>
      <Slider imageSrc={financial_goals} title={"Financial Goals"} subtitle={"Set and track your financial goals with our easy-to-use tools."} flipped={true}/>

    </div>
  );
}
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Budget" element={<Budget/>}/>
          <Route path="/dashboard" element={<index/>}/>
          <Route path="/Savings" element={<Savings/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
