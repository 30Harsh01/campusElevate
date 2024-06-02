import React, { useState } from 'react';
import toast from 'react-hot-toast';

const QueryForm = () => {
  const [feedback, setFeedback] = useState({
    name:"",
    designation:"",
    department:"",
    feedback:""
  });

  const handleChange = (e) => {
    setFeedback({...feedback,[e.target.name]:e.target.value.trim()});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(feedback)
    const url = "http://localhost:3000/websitefeedback/feedbackform";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // 'auth': localStorage.getItem('auth')
      },
      body: JSON.stringify(feedback)
    });
    const data = await response.json();
    if (data.message) {
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-screen max-w-lg mx-auto bg-slate-400 h-144 p-4 rounded-lg">
        <h1 className='font-bold m-4 text-center text-[22px]'>FEEDBACKS/SUGGESTIONS </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label htmlFor="name" className='w-full p-1'>Name : &nbsp;
        <input required name='name' onChange={handleChange} type="text" /></label> <br/><br/>
        <label htmlFor="designation" className='w-full'>Designation :  &nbsp;
        <select required onChange={handleChange} name="designation" className='p-1' >Select
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="workers">workers</option>
        </select>
        <br/><br/>
        </label>
        <label htmlFor="department" className='w-full'>Department : &nbsp;
        <select required onChange={handleChange} name="department" className='p-1'>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
        <option value="Pharmacy">Pharmacy</option>
        </select></label>
        <br/><br/>
        <textarea required
          className="mt-2 w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Looking for feedback or suggestions, please share your thoughts briefly to help improve our services or products."
          // value='feedback'
          onChange={handleChange}
          name='feedback'
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default QueryForm;
