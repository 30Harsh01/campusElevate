import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import toast from 'react-hot-toast';

function UploadR() {
  const [formData, setFormData] = useState({
    Resourcename: '',
    ResourceCategory: '',
    resourceDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/postresources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth':localStorage.getItem('auth')
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message)
        console.log(data.message);
        // Reset form fields after successful submission if needed
        setFormData({
          Resourcename: '',
          ResourceCategory: '',
          resourceDescription: ''
        });
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error)
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPLOAD RESOURCES</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Resourcename" className="block text-sm font-medium leading-6 text-gray-900"> Name</label>
            <div className="mt-2">
              <input
                id="Resourcename"
                name="Resourcename"
                type="text"
                value={formData.Resourcename}
                onChange={handleChange}
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ResourceCategory" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <div className="mt-2">
              <select
                id="ResourceCategory"
                name="ResourceCategory"
                value={formData.ResourceCategory}
                onChange={handleChange}
                className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="book">Second Hand Books/Books</option>
                <option value="hardware">Hardware</option>
                <option value="technical">Technical accessories</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="resourceDescription" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
            </div>
            <div className="mt-2">
              <textarea
                id="resourceDescription"
                name="resourceDescription"
                value={formData.resourceDescription}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {/* image upload */}
            <ImageUpload />
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadR;
