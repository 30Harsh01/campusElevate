// import Table from 'react-bootstrap/Table';
// import React,{useState} from 'react';

// function Request() {
//   return (
//     <Table striped bordered hover className='mt-3'>
//       <thead>
//         <tr className='text-center text-[22px]'>
//           <th>S.No</th>
//           <th>Book name</th>
//           <th>Category</th>
//           <th>Generate request</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr className='text-center'>
//           <td>1</td>
//           <td>BOOK1</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center' >
//           <td>2</td>
//           <td>BOOK2</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>3</td>
//           <td>BOOK3</td>
//           <td>Horror</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>4</td>
//           <td>BOOK4</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>5</td>
//           <td>BOOK5</td>
//           <td>Science</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>

//         <tr className='text-center'>
//           <td>6</td>
//           <td>BOOK6</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>7</td>
//           <td>BOOK7</td>
//           <td>Physics</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>8</td>
//           <td>BOOK8</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>9</td>
//           <td>BOOK9</td>
//           <td>Chemistry</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>
//         <tr className='text-center'>
//           <td>10</td>
//           <td>Book10</td>
//           <td>Fiction</td>
//           <td><button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>Issue</button></td>
//         </tr>

//       </tbody>
//     </Table>
//   );
// }

// export default Request;



import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';

function Request() {
    // const [issue,setIssue]=useState({
    //     user,username,bookid,bookname,issueddate,duedate
    // })
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://localhost:3000/library/getbooks';
                const response = await fetch(url);
                const data = await response.json();
                const allbooks = data.allbooks || [];
                if (data.message) {
                    toast.success(data.message)
                }
                // console.log('Fetched books:', allbooks);
                setData(allbooks);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error(data.error)
            }
        };

        fetchData();
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

            const url = `http://localhost:3000/library/issuebook/${id}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'auth': localStorage.getItem('auth')
                },
                body: JSON.stringify({
                    bookname: bookname,
                    issueddate: issuedate,
                    duedate: duedate
                })
            });
            // console.log(response)
            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.error || 'Failed to issue book');
            // }
            const responseData = await response.json();
            if (responseData.error) {
                throw new Error(responseData.error);
            } else if (responseData.message) {
                toast.success(responseData.message);
            }
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
                {data.map((book, index) => (
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
