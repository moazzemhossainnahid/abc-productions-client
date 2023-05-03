import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/SharedPages/Footer/Footer';
import Home from './Components/Home/Home';
import ContactUS from './Components/ContactUS/ContactUS';
import NotFound from './Components/NotFound/NotFound';
import AboutUS from './Components/AboutUS/AboutUS';
import Header from './Components/SharedPages/Header/Header';
import { ToastContainer } from 'react-toastify';
import Signin from './Components/Auth/Signin/Signin';
import Signup from './Components/Auth/Signup/Signup';
import RequireAuth from './Components/Others/RequireAuth';
import RequireAdmin from './Components/Others/RequireAdmin';
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel';
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard';
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers';
import ManagePosts from './Components/Dashboard/AdminDashboard/ManagePosts/ManagePosts';
import UnapprovePosts from './Components/Dashboard/AdminDashboard/UnapprovePosts/UnapprovePosts';


function App() {

  return (
    <>
      <div className="App pt-20">
        <Header />
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          {/* Control Panel Routes */}
          <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
            <Route index element={<AdDashboard />} />
            <Route path="addashboard" element={<AdDashboard />} />
            <Route path="musers" element={<ManageUsers />} />
            <Route path="mposts" element={<ManagePosts />} />
            <Route path="munaposts" element={<UnapprovePosts />} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
