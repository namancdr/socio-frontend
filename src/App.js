import './App.css';
import Navbar from './components/Navbar';
// import AddBtn from './components/AddBtn';
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup';
import { AuthProvider } from './context/auth/authContext';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import { PostProvider } from './context/post/postContext'
import PrivateRoute from './protected/PrivateRoute';
import CreatePost from './components/CreatePost';
import Profile from './components/Profile';
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <PostProvider>
      <BrowserRouter>

<<<<<<< Updated upstream
        
=======
<<<<<<< Updated upstream
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
=======
>>>>>>> Stashed changes
          <Navbar />
          <Footer />
          <Routes>
            <Route path="/login" element={<Login /> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/"
              element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>}
            />

            <Route path="/createpost"
              element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>}
            />

            <Route path="/profile"
              element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>}
            />

          </Routes>
        </BrowserRouter>
        </PostProvider>
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </AuthProvider>
    </div>
  );
}

export default App;
