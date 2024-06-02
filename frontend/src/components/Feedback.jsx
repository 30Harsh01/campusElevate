import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

function Feedback() {
  const [input, setInput] = useState({
    designation: "",
    department: "",
    subject: "",
    field: "",
    feedback: "",
    declarationChecked: false
  });


  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };



  const handleCheckboxChange = (e) => {
    setInput({ ...input, declarationChecked: e.target.checked });
  };





  const handleonsubmit= async (e) => {
    e.preventDefault();

    if (!input.declarationChecked) {
      toast.error("Please declare your information before submitting.");
      return;
    }

    const url = "http://localhost:3000/feedback/feedbackform";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth': localStorage.getItem('auth')
      },

      body: JSON.stringify(input)
    });
    
    const data = await response.json();
    if (data.message) {
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }
  };




  return (


    <div className='flex items-center justify-center p-3 m-auto bg-blue-200'>
      <Form onSubmit={handleonsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h2 className='font-bold text-3xl capitalize p-5 m-5 rounded bg-blue-950 text-white'>Feedback/Suggestions/Improvement scopes </h2>
          <Form.Label className='font-semibold'>Designation :</Form.Label>
          <Form.Select required onChange={handleOnChange} name='designation' className='p-2 rounded-lg' aria-label="Default select">
            <option>Select your Designation</option>
            <option value="1">Faculty</option>
            <option value="2">Student</option>
            <option value="3">Worker</option>
            <option value="4">Alumni</option>
            <option value="5">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='font-semibold'>Department :</Form.Label>
          <Form.Select required name='department' onChange={handleOnChange} className='p-2 rounded-lg' aria-label="Default select">
            <option>Select your Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="ME/EN">ME/EN</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Management">Management</option>
            <option value="NA">NA</option>
            <option value="Other">Others</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Input1">
          <Form.Label className='font-semibold'>Subject of Concern</Form.Label>
          <Form.Control required onChange={handleOnChange} name='subject' className='p-2' type="text" placeholder="Enter the main crux/subject" />
        </Form.Group>
        <Form.Label className='font-semibold'>Related Field of concern :</Form.Label>
        <Form.Select required onChange={handleOnChange} name='field' className='p-2 rounded-lg' aria-label="Default select">
          <option>Select the fields related to your feedback/suggestions</option>
          <option value="Technical">Technical</option>
          <option value="Infrastructural">Infrastructural</option>
          <option value="Management">Management</option>
          <option value="Non-Technical">Non-Technical</option>
          <option value="Facilities">Facilities</option>
          <option value="NA">NA</option>
          <option value="Others">Others</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="textarea">
          <Form.Label className='font-semibold'>Enter a detailed feedback/suggestions and improvement scopes</Form.Label>
          <Form.Control required onChange={handleOnChange} name='feedback' as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check id='declarationbox' className='font-bold' type="checkbox" label="I hereby declare that the information feeded by me is my personal feedback/suggestions for improvement scope." onChange={handleCheckboxChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Feedback;
