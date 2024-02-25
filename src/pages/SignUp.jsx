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