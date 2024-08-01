import HelloWord from "./HelloWorldComponent/HelloWorld";
import Counter from "./CounterComponent/Counter";
import RegistrationForm from "./RegFormComponent/RegistrationForm";
import DataFetcher from "./APIComponent/DataFetcher";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./PageComponents/Home.tsx";
import Product from "./PageComponents/Product.tsx";
import Contact from "./PageComponents/Contact.tsx";
import './App.css';
//import "../styles/Navbar.css"

function App() {
  return (
    <>
    <h1>React and Typescript Assignments</h1>
    <br />
      <div>
      <HelloWord />
      </div>

      <div>
      <Counter />
      </div>

      <br></br>

      <div>
      <RegistrationForm />
      </div>

      <br></br>

      <div>
        <h1>API Data Fetcher</h1>
      <DataFetcher />
      </div>

      <br></br>

      <Router>
      <nav>
        <div className="flex space-x-4">
          <Link to="/">Home     </Link>
          <Link to="/about">About     </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>

      </>
  );
}

export default App;