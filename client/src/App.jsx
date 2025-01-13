import './index.css'
import {BrowserRouter,Route,Router,Routes} from "react-router-dom";
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Profile from './pages/Profile/profile';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
