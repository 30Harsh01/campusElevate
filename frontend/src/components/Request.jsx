import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import useLibraryManagement from '../Hooks/useLibrary';

function Request() {
    const [data, setData] = useState([]);

    const { fetchUserBooks,userBooks,fetchBooks,books,issueBook } = useLibraryManagement();

    useEffect(() => {
        fetchBooks()
    }, []);
    const handleOnIssue = async (id, bookname) => {
        try {
            const timestamp1 = Date.now()
            const timestamp2 = Date.now() +(7 * 24 * 60 * 60 * 1000)
            const date1 = new Date(timestamp1);
            const date2 = new Date(timestamp2)
            const year1 = date1.getFullYear();
            const year2 = date2.getFullYear()
            const month1 = date1.getMonth() + 1;
            const month2 = date2.getMonth() + 1;
            const day1 = date1.getDate();
            const day2 = date2.getDate();
            const issuedate = `${year1}-${month1}-${day1}`
            const duedate=`${year2}-${month2}-${day2}`

            await issueBook(id, issuedate,duedate)
            
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.message || 'Failed to issue book');
        }
    };


    return (
        <Table striped bordered hover className='mt-3'>
            <thead>
                <tr className='text-center text-[22px]'>
                    <th>S.No</th>
                    <th>Book name</th>
                    <th>Category</th>
                    <th>Generate request</th>
                </tr>
            </thead>
            <tbody>
                {books?.map((book, index) => (
                    <tr key={book._id} className='text-center'>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.category}</td>
                        <td>
                            <button onClick={() => handleOnIssue(book._id, book.bookName)} className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>
                                Issue
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Request;
