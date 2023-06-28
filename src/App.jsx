import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/SharedPages/Footer/Footer';
import ContactUS from './Components/ContactUS/ContactUS';
import NotFound from './Components/NotFound/NotFound';
import AboutUS from './Components/AboutUS/AboutUS';
import Header from './Components/SharedPages/Header/Header';
import { ToastContainer } from 'react-toastify';
import Signin from './Components/Auth/Signin/Signin';
import Signup from './Components/Auth/Signup/Signup';
import RequireAuth from './Components/Others/RequireAuth';
import RequireDiu from './Components/Others/RequireDiu';
import RequireAdmin from './Components/Others/RequireAdmin';
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel';
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard';
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers';
import UnapprovePosts from './Components/Dashboard/AdminDashboard/UnapprovePosts/UnapprovePosts';
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile';
import Publish from './Components/Dashboard/UserDashboard/Publish/Publish';
import Posts from './Components/Posts/Posts';
import SinglePost from './Components/Posts/SinglePost/SinglePost';
import ApprovePosts from './Components/Dashboard/AdminDashboard/ManagePosts/ApprovePosts';
import MyPost from './Components/Dashboard/UserDashboard/myPost/MyPost';


function App() {

  return (
    <>
      <div className="App pt-20">
        {/* <Header /> */}
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/approveposts' && window.location.pathname !== '/cpanel/unapproveposts') && <Header />}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path='/post/:id' element={<RequireDiu><SinglePost /></RequireDiu>} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          {/* User Routes */}
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/mypost" element={<RequireAuth><MyPost /></RequireAuth>} />
          <Route path="/publish" element={<RequireAuth><Publish /></RequireAuth>} />


          {/* Control Panel Routes */}
          <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
            <Route index element={<AdDashboard />} />
            <Route path="addashboard" element={<AdDashboard />} />
            <Route path="musers" element={<ManageUsers />} />
            <Route path="approveposts" element={<ApprovePosts />} />
            <Route path="unapproveposts" element={<UnapprovePosts />} />
          </Route>
        </Routes>
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/approveposts' && window.location.pathname !== '/cpanel/unapproveposts') && <Footer />}
        {/* <Footer /> */}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
