import React, { useState } from 'react'
import { TextInput, Label, Button, Alert, Spinner } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';  


const SignIn = () => {
  const [formData, setFormData] = useState({})
  const {loading, error: errorMessage} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})

  }
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill in all fields'));  
    }
    try {
      dispatch(signInStart()); 
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      
    }
   
  } 
 
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
    {/* left side */}
    <div className='flex-1'>
    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-gray-900 to-slate-950 rounded-lg text-white '>Parrot's</span> Blog

    </Link>
    <p className='text-sm mt-5'>Welcome to my blog You can signin with your email and password </p>

    </div>
    {/* right side */}
    <div className='flex-1' onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} >
    
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='***********'
                id='password'
                onChange={handleChange}
              />
            </div>
        {/* buttons */}
        <div className='flex gap-2 mt-5'>
          <Button gradientDuoTone='purpleToBlue' type='submit' outline disabled={loading}>
            {loading ? (
              <>
                <Spinner className='w-5 h-5' />
                <span>Signing In</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
          <Link to='/signin'><Button gradientDuoTone='pinkToOrange' outline>Sign In</Button></Link>
        </div>
        
      </form>
      {/* have an account signin */}
      <div className='flex gap-2 text-sm mt-5'>
      <span>Dont have an account? </span>
      <Link to='/signin'><span className='text-blue-500'>Sign Up</span></Link>

      </div>
      {/* error message */}
     {errorMessage && (
      <Alert className='mt-5' color='failure'>
      {errorMessage}
      </Alert>
     )}
    </div>

    </div>
      
    </div>
  )
}

export default SignIn

