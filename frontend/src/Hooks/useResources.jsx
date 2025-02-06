import { useState } from 'react';
import toast from 'react-hot-toast';

const useResourceManagement = () => {
  const [resources, setResources] = useState([]); // Initialize with an empty array

  const fetchResources = async () => {
    try {
      const url = 'http://localhost:3000/user/getResources';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      console.log("Response data:", responseData.resources);
      const data = responseData.resources || [];

      setResources(data); // Update state
      console.log("ssss",resources)

      if (responseData.message) {
        toast.success(responseData.message);
      }

      if (data.length === 0) { // Use `data.length` instead of `resources.length`
        toast.success("No data found");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };

  const getResource = async (resource) => {
    console.log(resource)
    try {
      const usrl = 'http://localhost:3000/user/borrowresources';
      const response = await fetch(usrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
        body: JSON.stringify({ resource }), // Sending resource directly
      });

      const data = await response.json();
      console.log("data",data)

      if (response.ok) {
        if (data.message) {
          toast.success(data.message);
        } else {
          toast(data.Info, {
            icon: 'ℹ️', // Optional icon for the info toast
            style: {
              background: '#1e90ff', // Blue background for informational toast
              color: 'white', // White text color
            },
          });
        }
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };

  const uploadResource = async (formData, resetForm) => {
    try {
      const uploadData = new FormData();
      uploadData.append('Resourcename', formData.Resourcename);
      uploadData.append('ResourceCategory', formData.ResourceCategory);
      uploadData.append('resourceDescription', formData.resourceDescription);
      uploadData.append('resourceImage', formData.resourceImage);
      console.log("form data",formData)

      const response = await fetch('http://localhost:3000/user/postresources', {
        method: 'POST',
        headers: {
          auth: localStorage.getItem('auth'),
        },
        body: uploadData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        resetForm(); // Reset form fields
      } else {
        toast.error(data.error || 'Failed to upload resource');
      }
    } catch (error) {
      console.error('Error uploading resource:', error);
      toast.error(error.message || 'Error submitting data');
    }
  };



  const BorrowedResources = async () => {
    try {
      const url = 'http://localhost:3000/user/borrowedresources';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
      });
      const responseData = await response.json();
      console.log("response data", responseData.borrowed);
      const resources = responseData.borrowed || [];

      if (responseData.message) {
        toast.success(responseData.message);
      }else if(responseData.Info){
        toast(responseData.Info, {
          icon: 'ℹ️', // Optional icon for the info toast
          style: {
            background: '#1e90ff', // Blue background for informational toast
            color: 'white', // White text color
          },
        });
      }
      setResources(resources);
      console.log("try",resources[0]?.resource?.resourceImage)

      if (resources?.length === 0) {
        toast.success("No data found");
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };


  const uploadedResources = async () => {
    try {
      const url = 'http://localhost:3000/user/uploadedresources';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
      });
      const responseData = await response.json();
      console.log("response data", responseData.borrowed);
      const resources = responseData.borrowed || [];

      if (responseData.message) {
        toast.success(responseData.message);
      }else if(responseData.Info){
        toast(responseData.Info, {
          icon: 'ℹ️', // Optional icon for the info toast
          style: {
            background: '#1e90ff', // Blue background for informational toast
            color: 'white', // White text color
          },
        });
      }
      setResources(resources);
      // console.log("try",data[0]?.resourceImage)

      if (resources?.length === 0) {
        toast.success("No data found");
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };



  return { resources, getResource,fetchResources,uploadResource,BorrowedResources,uploadedResources }; // Return both state and function
};

export default useResourceManagement;
