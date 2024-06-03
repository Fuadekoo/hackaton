
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
// ADMIN REGISTER PAGE
export default function AdminSignUp() {
  const [formData , setFormData]=useState({});
  const [error ,setError]=useState(null);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();

  const handleChange =(e)=>{
   setFormData({
    ...formData,
    [e.target.id]:e.target.value,
   });
  };
  const handleSumbit=async (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
    const res=await fetch('/api/auth/signup', 
    {
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData),
    });
    const data =await res.json();
    console.log(data);
    if(data.success===false){
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
    
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Register The Task Collector</h1>
      <form onSubmit={handleSumbit}  className='flex flex-col gap-4'>
        <input type='text' placeholder='fullname' id='fullname' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='username' id='username' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='address' id='address' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='number' placeholder='phone number' id='phone_no' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {
          loading ? 'loading ....': 'Sign up'
        }</button>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
