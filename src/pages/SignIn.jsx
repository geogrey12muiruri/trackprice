import React, { useState } from 'react'
import { TextInput, Label, Button, Alert, Spinner } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';  
import OAuth from '../components/OAuth';
import ChartComponent from '../components/charts/ChartComponent';

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
    <div className='min-h-screen '>
      <div className='flex p-3 max-w-7xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left side */}
        <div >
          <ChartComponent />
        </div>
        {/* right side */}
        <div  style={{marginLeft: '150px'}}>
          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
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
            <OAuth />
          </form>
          {/* have an account signin */}
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account? </span>
            <Link to='/signup'><span className='text-blue-500'>Sign Up</span></Link>
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
  );
}

export default SignIn;
