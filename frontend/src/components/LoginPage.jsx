import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
function LoginPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    regno: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/auth/signin";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    console.log(credentials)
    const data = await response.json();
    // console.log(data);
    if (data.auth) {
      localStorage.setItem('auth', data.auth);
      toast.success(data.message)
      navigate('/');
    }else{
      toast.error(data.error)
    }
  };

  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="reg" className="block text-sm font-medium leading-6 text-gray-900">Registration Number</label>
            <div className="mt-2">
              <input onChange={onHandleChange} name="regno" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input onChange={onHandleChange} name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? 
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
