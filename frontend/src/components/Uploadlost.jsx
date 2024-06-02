import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ImageUpload from './ImageUpload';

function Uploadlost() {
    const navigate = useNavigate();
    const [lostItem, setLostItem] = useState({
        title: "",
        description: "",
        date: "",
        place: "",
        ownerName: ""
    });

    const handleChange = (e) => {
        setLostItem({ ...lostItem, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/lostandfound/newlost";
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth':localStorage.getItem('auth')
                },
                body: JSON.stringify(lostItem)
            });
            const data = await response.json();
            console.log(data)
            if (response.status === 200) {
                toast.success("Item uploaded successfully!");
                setLostItem({
                    title: "",
                    description: "",
                    date: "",
                    place: "",
                    ownerName: ""
                });
            } else {
                toast.error("Failed to upload item.");
            }
        } catch (error) {
            console.error('Error uploading item:', error);
            toast.error("Failed to upload item.");
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPLOAD LOST ITEMS REQUEST</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                            <input id="title" name="title" onChange={handleChange} type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                        </div>
                        <div className="mt-2">
                            <input id="date" name="date" onChange={handleChange} type="date" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">Place</label>
                        </div>
                        <div className="mt-2">
                            <input id="place" name="place" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        </div>
                        <div className="mt-2">
                            <textarea id="description" name="description" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="ownerName" className="block text-sm font-medium leading-6 text-gray-900">Owner Name</label>
                        </div>
                        <div className="mt-2">
                            <input id="ownerName" name="ownerName" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        {/* Image upload component */}
                        <ImageUpload />
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Uploadlost;
