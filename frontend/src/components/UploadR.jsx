import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import useResourceManagement from '../Hooks/useResources'; // Import the custom hook

function UploadR() {
  const { uploadResource } = useResourceManagement(); // Use the API hook

  const [formData, setFormData] = useState({
    Resourcename: '',
    ResourceCategory: '',
    resourceDescription: '',
    resourceImage: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        resourceImage: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setFormData({
      Resourcename: '',
      ResourceCategory: '',
      resourceDescription: '',
      resourceImage: null,
    });
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resourceImage) {
      toast.error('Please select an image before uploading!');
      return;
    }

    await uploadResource(formData, resetForm);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          UPLOAD RESOURCES
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="Resourcename" className="block text-sm font-medium text-gray-900">
              Resource Name
            </label>
            <input
              id="Resourcename"
              name="Resourcename"
              type="text"
              value={formData.Resourcename}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="ResourceCategory" className="block text-sm font-medium text-gray-900">
              Category
            </label>
            <select
              id="ResourceCategory"
              name="ResourceCategory"
              value={formData.ResourceCategory}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm sm:text-sm"
            >
               <option value="" disabled>Select</option>
              <option value="book">Second Hand Books/Books</option>
              <option value="hardware">Hardware</option>
              <option value="technical">Technical accessories</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="resourceDescription" className="block text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              id="resourceDescription"
              name="resourceDescription"
              value={formData.resourceDescription}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="resourceImage" className="block text-sm font-medium text-gray-900">
              Upload Image
            </label>
            <input
              id="resourceImage"
              name="resourceImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded-md"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadR;
