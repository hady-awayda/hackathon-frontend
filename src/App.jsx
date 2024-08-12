import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/components/layout/Layout";
import { Provider } from "react-redux";
import store from "../src/data/redux/store";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import PaidFeatureDashboard from "./pages/dashboard/PaidFeatureDashboard";
import PricingPage from "./pages/pricing/PricingPage";
import Profile from "./pages/profile/Profile";
import Graph from "./pages/components/graph/Graph";
import LogoAnimation from "./pages/components/booking/LogoAnimation";
import StreamlitPage from "./pages/dashboard/StreamlitPage";
import ProtectedRoute from "./pages/components/protectedRoute";
import AuthenticatedRoute from "./pages/components/AuthenticatedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="logo" element={<LogoAnimation />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="dashboard"
              element={
                <AuthenticatedRoute>
                  <Dashboard />
                </AuthenticatedRoute>
              }
            />
            <Route path="graph" element={<Graph />} />
            <Route
              path="paiduserdashboard"
              element={
                <ProtectedRoute requiredRole="paid">
                  <PaidFeatureDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="pricing" element={<PricingPage />} />
            <Route
              path="profile"
              element={
                <AuthenticatedRoute>
                  <Profile />
                </AuthenticatedRoute>
              }
            />
            <Route path="/streamlit" element={<StreamlitPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
