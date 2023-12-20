import './App.css';
import Customers from './components/Customers/Customers';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Customers />}> </Route>
        <Route path='/addCustomer' element={<Customers />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
