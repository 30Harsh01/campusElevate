import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useLostAndFoundManagement = () => {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  // Fetch Lost Items
  const fetchLostItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/lostandfound/losted', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth'),
        },
      });

      const data = await response.json();
      console.log('Lost Items:', data.lostItems);

      if (response.ok) {
        setLostItems(data.lostItems || []);
        if (data.message) {
          toast.success(data.message);
        }
      } else {
        toast.error(data.error || 'Failed to fetch lost items');
      }
    } catch (error) {
      console.error('Error fetching lost items:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };

  // Fetch Found Items
  const fetchFoundItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/lostandfound/founded', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth'),
        },
      });

      const data = await response.json();
      console.log('Found Items:', data.foundItems);

      if (response.ok) {
        setFoundItems(data.foundItems || []);
        if (data.message) {
          toast.success(data.message);
        }
      } else {
        toast.error(data.error || 'Failed to fetch found items');
      }
    } catch (error) {
      console.error('Error fetching found items:', error);
      toast.error(error.message || 'Error fetching data');
    }
  };

  // Add a Lost Item
  const reportLostItem = async (lostData, resetForm) => {
    const formData = new FormData();
    formData.append('title', lostData.title);
    formData.append('description', lostData.description);
    formData.append('date', lostData.date);
    formData.append('place', lostData.place);
    formData.append('ownerName', lostData.ownerName);
    formData.append('image', lostData.image);
    console.log("formdata",formData)

    try {
      const response = await fetch('http://localhost:3000/lostandfound/newlost', {
        method: 'POST',
        headers: {
        //   'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth'),
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        // fetchLostItems(); // Refresh the lost items list
        resetForm(); // Reset form fields
      } else {
        toast.error(data.error || 'Failed to report lost item');
      }
    } catch (error) {
      console.error('Error reporting lost item:', error);
      toast.error(error.message || 'Error submitting data');
    }
  };

  // Add a Found Item
  const reportFoundItem = async (foundItem, resetForm) => {
    // console.log("formdata",formData)
    const formData = new FormData();
    formData.append('title', foundItem.title);
    formData.append('description', foundItem.description);
    formData.append('date', foundItem.date);
    formData.append('place', foundItem.place);
    formData.append('founderName', foundItem.founderName);
    formData.append('image', foundItem.image);
    // console.log("formdata",formData)
    try {
      const response = await fetch('http://localhost:3000/lostandfound/newfound', {
        method: 'POST',
        headers: {
        //   'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth'),
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        fetchFoundItems(); // Refresh the found items list
        resetForm(); // Reset form fields
      } else {
        toast.error(data.error || 'Failed to report found item');
      }
    } catch (error) {
      console.error('Error reporting found item:', error);
      toast.error(error.message || 'Error submitting data');
    }
  };

  // Fetch data on component mount
  // useEffect(() => {
  //   fetchLostItems();
  //   fetchFoundItems();
  // }, []);

  return {
    lostItems,
    foundItems,
    fetchLostItems,
    fetchFoundItems,
    reportLostItem,
    reportFoundItem,
  };
};

export default useLostAndFoundManagement;
