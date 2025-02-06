import { useState } from 'react';
import toast from 'react-hot-toast';

const useLibraryManagement = () => {
  const [books, setBooks] = useState([]);
  const [userBooks, setUserBooks] = useState([]);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/library/getbooks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      console.log("Fetched books:", responseData.allbooks);
      const data = responseData.allbooks || [];

      setBooks(data);

      if (responseData.message) {
        toast.success(responseData.message);
      } else if (data.length === 0) {
        toast.success("No books found");
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      toast.error(error.message || 'Error fetching books');
    }
  };

  // Add a new book
  const postBook = async (bookDetails, resetForm) => {
    try {
      const response = await fetch('http://localhost:3000/user/postbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
        body: JSON.stringify(bookDetails),
      });

      const data = await response.json();
      console.log("Post book response:", data);

      if (response.ok) {
        toast.success(data.message);
        resetForm(); // Reset form after success
        fetchBooks(); // Refresh book list
      } else {
        toast.error(data.error || 'Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      toast.error(error.message || 'Error adding book');
    }
  };

  // Issue a book
  const issueBook = async (bookId, issuedDate, dueDate) => {
    try {
      const response = await fetch(`http://localhost:3000/library/issuebook/${bookId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
        body: JSON.stringify({ issueddate: issuedDate, duedate: dueDate }),
      });

      const data = await response.json();
      console.log("Issue book response:", data);

      if (response.ok) {
        toast.success(data.message);
        fetchUserBooks(); // Refresh user's issued books
      } else {
        toast.error(data.error || 'Failed to issue book');
      }
    } catch (error) {
      console.error('Error issuing book:', error);
      toast.error(error.message || 'Error issuing book');
    }
  };

  // Fetch issued books for a user
  const fetchUserBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/library/getuserbooks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('auth'),
        },
      });

      const responseData = await response.json();
      console.log("User issued books:", responseData);
      const data = responseData || [];

      setUserBooks(data);

      if (responseData.message) {
        toast.success(responseData.message);
      } else if (data.length === 0) {
        toast.success("No issued books found");
      }
    } catch (error) {
      console.error('Error fetching user books:', error);
      toast.error(error.message || 'Error fetching user books');
    }
  };

  return { books, userBooks, fetchBooks, postBook, issueBook, fetchUserBooks };
};

export default useLibraryManagement;
