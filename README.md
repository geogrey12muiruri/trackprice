## Navigation

Home: A landing page that presents key information like featured markets, trending commodities, or recent price updates.
Markets: Showcase a list of markets covered by the platform, allowing users to filter by location, type, or other relevant criteria.
Commodities: Display a searchable list of agricultural commodities available for tracking, potentially showcasing popular choices or trending items.
Watchlist: Provide dedicated access to the user's personalized list of tracked commodities and their current prices.
Price Alerts: Offer settings for notification thresholds and preferences for price change alerts.
News & Insights: Integrate relevant news articles, market analysis reports, or expert viewpoints for contextual understanding.
## Authentication

-signup
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

-login
import React, { useState } from 'react'
import { TextInput, Label, Button, Alert, Spinner } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';
import ChartComponent from '../components/charts/ChartComponent';


const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})

  }
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
    <div className='flex-1' style={{marginLeft: '150px'}} onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} >
        <h2 className='text-2xl font-bold'>Create an Account to Get Personalized insights and Market Updates</h2>
        {/* form fields */}
      <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
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
                placeholder='Password'
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
                <span>Signing Up</span>
              </>
            ) : (
              <span>Sign Up</span>
            )}
          </Button>
          <Link to='/signin'><Button gradientDuoTone='pinkToOrange' outline>Sign In</Button></Link>
        </div>
        <OAuth />
      </form>
      {/* have an account signin */}
      <div className='flex gap-2 text-sm mt-5'>
      <span>Have an account?</span>
      <Link to='/signin'><span className='text-blue-500'>Sign In</span></Link>

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

export default SignUp
email and username
google authentication


## backend
ruby on rails

## database
mongodb node js

const COLORS = ["#16a34a", "#4c0519", "#1e1b4b"];

https://ibb.co/ZcDYWNm
https://ibb.co/RCxYf7h
https://ibb.co/6yRWtyX
https://ibb.co/x3h71Kw
https://ibb.co/S67RJwp
https://ibb.co/K6zg71p


https://ibb.co/pJ1kR6D beef
https://ibb.co/GW2fhxh maize
https://ibb.co/NL02wbH tomatoes
https://ibb.co/BjPzxxS  cabbage
https://ibb.co/BBQ1dyt  rice
https://ibb.co/gTm1G1Z Green grams
https://ibb.co/Btj6qSP irish potatoes
https://ibb.co/XWw0LT8
https://ibb.co/tMRB71v