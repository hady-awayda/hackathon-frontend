import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/components/layout/Layout";
import { Provider } from "react-redux";
import store from "../src/data/redux/store";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import PaidFeatureDashboard from "./pages/dashboard/PaidFeatureDashboard";
import StreamlitPage from "./pages/dashboard/StreamlitPage";
import ProtectedRoute from "./pages/components/protectedRoute";
// Import the ProtectedRoute component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="paiduserdashboard"
              element={<PaidFeatureDashboard />}
            />
            <Route path="/streamlit" element={<StreamlitPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
