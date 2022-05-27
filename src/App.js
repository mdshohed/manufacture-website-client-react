
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfiles from './pages/Dashboard/MyProfiles';
import Purchase from './pages/Tools/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/Dashboard/Payment';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import ManageTools from './pages/Dashboard/ManageTools';
import AddTools from './pages/Dashboard/AddTools';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import NotFound from './pages/Shared/NotFound';
import Blogs from './pages/Blogs/Blogs';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import RequireAdmin from './pages/Login/RequireAdmin';
import CameraTools from './pages/Tools/CameraTools';

function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<CameraTools/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/tool/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview/>}></Route>
          <Route path='profile' element={<MyProfiles/>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>}></Route>
          <Route path='manageTools' element={<RequireAdmin><ManageTools/></RequireAdmin>}></Route>
          <Route path='addTools' element={<RequireAdmin><AddTools/></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
