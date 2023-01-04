import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerHome from './pages/customer/CustomerHome/CustomerHome';
import CustomerLogin from './pages/customer/CustomerLogin/CustomerLogin';
import CustomerRegister from './pages/customer/CustomerRegister/CustomerRegister';
import Select from './pages/Select';
import StoreHome from './pages/store/StoreHome/StoreHome';
import StoreLogin from './pages/store/StoreLogin/StoreLogin';
import StoreRegister from './pages/store/StoreRegister/StoreRegister';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Select />} />
                    <Route path='/customer/home' element={<CustomerHome />} />
                    <Route path='/store/home' element={<StoreHome />} />
                    <Route path='/store/login' element={<StoreLogin />} />
                    <Route path='/customer/login' element={<CustomerLogin />} />
                    <Route
                        path='/customer/register'
                        element={<CustomerRegister />}
                    />
                    <Route path='/store/register' element={<StoreRegister />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
