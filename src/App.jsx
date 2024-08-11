import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./pages/components/layout/Layout";
import { Provider } from "react-redux";
import store from "../src/redux/store"; // Adjust the path based on your project structure
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
