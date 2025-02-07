import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function NaviTable() {
  return (
    <>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr  className='text-center text-[22px]'>
          <th>S. No.</th>
          <th>Bus Route</th>
          <th>Bus Number</th>
          <th>Driver Name</th>
          <th>Track the bus</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>1</td>
          <td>City-Mini Bypass</td>
          <td>1426</td>
          <td>Guddu Bhaiya</td>
          <td>
           
           <Link to='/track'>
          <button className='bg-blue-800 text-white p-1 rounded hover:bg-green-600'>
                                Track
                            </button>
                            </Link>
          </td>
          
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default NaviTable
