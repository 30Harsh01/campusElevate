import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import useLibraryManagement from '../Hooks/useLibrary';

function Status() {
    const [data, setData] = useState([]);
    const { fetchUserBooks,userBooks } = useLibraryManagement();

    useEffect(() => {
        fetchUserBooks()
    }, []);
    // console.log(data)
    const calculateFine = (issuedDate, dueDate) => {
        // Parse the date strings into Date objects
        const issued = new Date(issuedDate); // e.g., "2025-2-6"
        const due = new Date(dueDate); // e.g., "2024-12-12"
    
        // Compare the two dates
        if (issued > due) {
            const diffTime = issued - due; // Difference in milliseconds
            const diffDays = diffTime / (1000 * 3600 * 24); // Convert milliseconds to days
            const fine = diffDays * 5; // Assuming 5 rupees per day
            return `${fine} rupees`;
        } else {
            return 'No fine';
        }
    };

    return (
        <div className='h-screen text-[20px] m-3'>
            <Table responsive>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Book Ref. No.</th>
                        <th>Book Name</th>
                        <th>Issued Date</th>
                        <th>Submission Date</th>
                        <th>Fine</th>
                    </tr>
                </thead>
                <tbody>
                    {userBooks && userBooks.map((book, index) => (
                        <tr key={book.bookid} className='text-center'>
                            <td>{index + 1}</td>
                            <td>{book.bookid}</td>
                            <td>{book.bookname}</td>
                            <td>{book.issueddate}</td>
                            <td>{book.duedate}</td>
                            <td>{calculateFine(book.issueddate, book.duedate)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Status;
