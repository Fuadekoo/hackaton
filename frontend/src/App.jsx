import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import SignUp from './pages/SignUp'
import UpdateListing from './pages/UpdateListing'
import Search from './pages/Search'
import AdminSignUp from './pages/AdminSignUp'
import SellerSignUp from './pages/SellerSignUp'
import Bill from './pages/Bill'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-signup' element={<AdminSignUp />} />
        <Route path='/Seller-signup' element={<SellerSignUp />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/bill' element={<Bill />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/search' element={<Search/>} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/update-listing/:listingId' element={<UpdateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
