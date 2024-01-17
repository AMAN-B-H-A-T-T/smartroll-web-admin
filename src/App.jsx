import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import { SignIn } from "./pages/auth";
function App() {
  const DashboardProtected = ({ element }) => {    
    const accessToken = localStorage.getItem("accessToken");    
    if (!accessToken) {
      return <Navigate to="/auth/sign-in" replace />;
    }    
    return element;
  };
  const LoginProtected = ({ element }) => {    
    const accessToken = localStorage.getItem("accessToken");    
    if (accessToken) {
      return <Navigate to="/" replace />;
    }    
    return element;
  };
  return (
    <Routes>
      <Route path="/" element={<DashboardProtected element={<Dashboard />} />} />
      <Route path="/auth/sign-in/" element={<LoginProtected element={<SignIn />} />}/>
    </Routes>
  );
}

export default App;
