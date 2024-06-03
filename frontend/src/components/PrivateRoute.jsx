// import {useSelector} from 'react-redux';
import { useState } from 'react';
import {Outlet,Navigate} from 'react-router-dom';
export default function PrivateRoute() {
  const  [currentUser ,SetUseSelector]=useState('')
    // const {currentUser} = useSelector(state => state.user);
  return currentUser ? < Outlet/> : <Navigate to="/sign-in"/>;
}
