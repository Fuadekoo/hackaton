
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
export default function SellerSignUp() {
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
      <h1 className='text-3xl text-center font-semibold my-7'>Seller Register</h1>
      <form onSubmit={handleSumbit}  className='flex flex-col gap-4'>
        <input type='text' placeholder='Company name' id='companyname' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='fullname' id='fullname' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='TIN' id='tin' className='border p-3 rounded-lg' onChange={handleChange} />
      

      
      
        <div className="inline-block relative w-90">
  <select   id='markettype' className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"  onChange={handleChange}>
    <option className='hidden'>Market Type</option>
    <option>Alcol</option>
    <option>Tubaco</option>
    <option>Car</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>

</div>
<div className="inline-block relative w-90">
  <select   id='taxtype' className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"  onChange={handleChange}>
    <option className='hidden'>Taxtype</option>
    <option>VAT</option>
    <option>TOT</option>
    <option>SURE</option>
    <option>Excise</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>

</div>


        <input type='number' placeholder='capital' id='capital' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='username' id='username' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='text' placeholder='Address' id='address' className='border p-3 rounded-lg' onChange={handleChange} />
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-lg' onChange={handleChange}/>
        <div className="inline-block relative w-90">
  <select   id='taxtype' className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"  onChange={handleChange}>
    <option className='hidden'>Level of task</option>
    <option>Standard</option>
    <option>reduced</option>
    <option>exempt</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>

</div>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          
           Sign up
        </button>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
