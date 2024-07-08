import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Interview from './pages/Interview';
import Jobs from './pages/Jobs';
import Ai from './pages/Ai';
import NewJob from './pages/NewJob';
import JobDetails from './pages/JobDetails';
import Lobby from './pages/Lobby';
import VideoCall from './pages/VideoCall';
import { AuthProvider, AuthContext } from './Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/interviews" element={
            <ProtectedRoute>
              <Lobby />
            </ProtectedRoute>
          } />
          <Route path="/jobroles" element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          } />
          <Route path="/call" element={
            <ProtectedRoute>
              <VideoCall />
            </ProtectedRoute>
          } />
          <Route path="/interviews/:id" element={
            <ProtectedRoute>
              <Interview />
            </ProtectedRoute>
          } />
          <Route path="/jobroles/:title" element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          } />
          <Route path="/ask" element={
            <ProtectedRoute>
              <Ai />
            </ProtectedRoute>
          } />
          <Route path='/newJob' element={
            <ProtectedRoute>
              <NewJob />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
