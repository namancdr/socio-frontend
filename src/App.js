import './App.css';
import Navbar from './components/Navbar';
import AddBtn from './components/AddBtn';
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup';
import { AuthProvider } from './context/auth/authContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Footer />
        <AddBtn />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
