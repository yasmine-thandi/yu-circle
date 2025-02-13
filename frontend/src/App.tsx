import { Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CommunityPage from './pages/CommunityPage'; 


function App() {
  return (
    <div>

        <Routes>

          <Route path="/" element={<CommunityPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>


    </div>
  );
}

export default App;