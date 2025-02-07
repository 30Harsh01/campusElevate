import React, { useState } from 'react';
import toast from 'react-hot-toast';

const QueryForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    designation: "",
    department: "",
    feedback: ""
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(feedback);
    const url = "http://localhost:3000/websitefeedback/feedbackform";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
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
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className='font-bold text-center text-2xl text-blue-900 mb-4'>FEEDBACKS / SUGGESTIONS</h1>
        <div className="mb-4">
          <label htmlFor="name" className='block text-gray-700 font-medium mb-2'>Name:</label>
          <input required name='name' onChange={handleChange} type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className='block text-gray-700 font-medium mb-2'>Designation:</label>
          <select required onChange={handleChange} name="designation" className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="workers">Workers</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="department" className='block text-gray-700 font-medium mb-2'>Department:</label>
          <select required onChange={handleChange} name="department" className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="">Select</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className='block text-gray-700 font-medium mb-2'>Feedback:</label>
          <textarea required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Looking for feedback or suggestions, please share your thoughts briefly to help improve our services or products." onChange={handleChange} name='feedback'></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
