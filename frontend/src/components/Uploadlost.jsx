import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// Import the hook from the respective file
import  useLostFound from '../Hooks/useLostFound';

function Uploadlost() {
    const navigate = useNavigate();
    const [lostItem, setLostItem] = useState({
        title: "",
        description: "",
        date: "",
        place: "",
        ownerName: "",
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    // Get the function from the hook
    const { reportLostItem } = useLostFound();

    const handleChange = (e) => {
        setLostItem({ ...lostItem, [e.target.name]: e.target.value.trim() });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLostItem((prevState) => ({
                ...prevState,
                image: file,
            }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setLostItem({
            title: "",
            description: "",
            date: "",
            place: "",
            ownerName: "",
            image: null,
        });
        setPreviewImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!lostItem.image) {
            toast.error('Please select an image before uploading!');
            return;
        }
        console.log("lostitem",lostItem)
        // console.log("formdata",formData)
        try {
            // Call the reportLostItem function from the hook
            await reportLostItem(lostItem, resetForm); // Call the hook here
        } catch (error) {
            toast.error("Failed to upload item.");
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPLOAD LOST ITEMS REQUEST</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                            <input 
                            id="title" 
                            name="title" 
                            onChange={handleChange} 
                            type="text" 
                            autoComplete="text" 
                            required 
                            value={lostItem.title}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                        <div className="mt-2">
                            <input 
                            id="date" 
                            name="date" 
                            onChange={handleChange} 
                            type="date" 
                            value={lostItem.date}
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">Place</label>
                        <div className="mt-2">
                            <input 
                            id="place" 
                            name="place"
                            onChange={handleChange} 
                            type="text" 
                            value={lostItem.place}
                            required 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        <div className="mt-2">
                            <textarea id="description" name="description" value={lostItem.description} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium leading-6 text-gray-900">Owner Name</label>
                        <div className="mt-2">
                            <input id="ownerName" name="ownerName" value={lostItem.ownerName} onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-900">Upload Image</label>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer"
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="mt-2 w-full h-40 object-cover rounded-md"
                            />
                        )}
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Uploadlost;
