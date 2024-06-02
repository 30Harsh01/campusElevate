// import Table from 'react-bootstrap/Table';
// import React, { useEffect,useState } from 'react';

// function Status() {
//     const [data, setData] = useState({});
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const url = 'http://localhost:3000/library/getuserbooks';
//                 const response = await fetch(url,{
//                     method: 'GET',
//                     headers: {
//                         'Content-type': 'application/json',
//                         'auth': localStorage.getItem('auth')
//                     },
//                 });
//                 const data = await response.json();
//                 const allbooks = data.allbooks || [];
//                 if (data.message) {
//                     toast.success(data.message)
//                 }
//                 setData(allbooks);

//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 toast.error(data.error)
//             }

//         };

//         fetchData();
//     }, []);

//     const fine=(issueddate,duedate)=>{
//         console.log('fine')
//     }

//     return (
//         <div className='h-screen text-[20px] m-3'>
//             <Table responsive>
//                 <thead>
//                     <tr>
//                         <th>S. No.</th>
//                         <th>Book Ref. No.</th>
//                         <th>Book Name</th>
//                         <th>Issued Date</th>
//                         <th>Submission Date</th>
//                         <th>Fine</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((book, index) => (
//                     <tr key={book._id} className='text-center'>
//                         <td>{index + 1}</td>
//                         <td>{book.bookName}</td>
//                         <td>{book.category}</td>
//                         <td>{book.issueddate}</td>
//                         <td>{book.duedate}</td>
//                         <td>{fine(book.issueddate,book.duedate)}</td>
//                         <td>
//                         </td>
//                     </tr>
//                 ))}

//                 </tbody>
//             </Table>
//         </div>
//     );
// }

// export default Status;



import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';

function Status() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://localhost:3000/library/getuserbooks';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'auth': localStorage.getItem('auth')
                    },
                });
                const responseData = await response.json();
                console.log(response)
                // console.log(data)
                const userbooks = responseData || [];
                if (responseData.message) {
                    toast.success(responseData.message);
                }
                setData(userbooks);

            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error(error.message || 'Error fetching data');
            }
        };

        fetchData();
    }, []);
    // console.log(data)
    const calculateFine = (issuedDate, dueDate) => {
        const dateString = "2024-12-12";
        const issuedate = issuedDate.replace(/-/g, '');
        const duedate = dueDate.replace(/-/g, '');
        if (issuedate > duedate) {
            return (issuedate - duedate) * 5 + ' rupees'
        } else {
            return 'No fine'
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
                    {data && data.map((book, index) => (
                        <tr key={book._id} className='text-center'>
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
