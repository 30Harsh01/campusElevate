import React,{useState} from 'react'
import toast from 'react-hot-toast';
import {Link ,useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
      name:"",
      regno: "",
      password: "",
      cpassword:""
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(credentials.password!==credentials.cpassword){
        toast.error('Pasword not matched')
        return
      }
      const url = "http://localhost:3000/auth/signup";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name:credentials.name,regno:credentials.regno,password:credentials.password})
      });
      const data = await response.json();
      console.log(data);
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
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="reg" className="block text-sm font-medium leading-6 text-gray-900"> Name</label>
        <div className="mt-2">
          <input onChange={onHandleChange} name="name" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>    

      <div>
        <label htmlFor="reg" className="block text-sm font-medium leading-6 text-gray-900">Registration Number</label>
        <div className="mt-2">
          <input minLength={10} onChange={onHandleChange} name="regno" type="number" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input onChange={onHandleChange} minLength={8} name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2">
          <input onChange={onHandleChange} name="cpassword" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already have an account?
      <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
    </p>
  </div>
</div>
  )
}

export default SignUp