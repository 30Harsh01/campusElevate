// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import ImageUpload from './ImageUpload';

// function UploadFound() {
//     const navigate = useNavigate();
//     const [foundItem, setFoundItem] = useState({
//         title: "",
//         description: "",
//         date: "",
//         place: "",
//         ownerName: ""
//     });

//     const handleChange = (e) => {
//         setFoundItem({ ...foundItem, [e.target.name]: e.target.value.trim() });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const url = "http://localhost:3000/lostandfound/newfound";
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'auth':localStorage.getItem('auth')
//                 },
//                 body: JSON.stringify(foundItem)
//             });
//             const data = await response.json();
//             console.log(data)
//             if (response.status === 200) {
//                 toast.success("Item uploaded successfully!");
//                 setFoundItem({
//                     title: "",
//                     description: "",
//                     date: "",
//                     place: "",
//                     ownerName: ""
//                 });
//             } else {
//                 toast.error(data.error);
//             }
//         } catch (error) {
//             console.error('Error uploading item:', error);
//             toast.error("Failed to upload item.");
//         }
//     };

//     return (
//         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPLOAD FOUND ITEMS REQUEST</h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
//                         <div className="mt-2">
//                             <input id="title" name="title" onChange={handleChange} type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
//                         </div>
//                         <div className="mt-2">
//                             <input id="date" name="date" onChange={handleChange} type="date" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">Place</label>
//                         </div>
//                         <div className="mt-2">
//                             <input id="place" name="place" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
//                         </div>
//                         <div className="mt-2">
//                             <textarea id="description" name="description" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="ownerName" className="block text-sm font-medium leading-6 text-gray-900">Founder Name</label>
//                         </div>
//                         <div className="mt-2">
//                             <input id="ownerName" name="ownerName" onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                         </div>
//                     </div>

//                     <div>
//                         {/* Image upload component */}
//                         <ImageUpload />
//                     </div>

//                     <div>
//                         <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default UploadFound;






import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import ImageUpload from './ImageUpload';
import useLostAndFoundManagement from '../Hooks/useLostFound';

function UploadFound() {
    const navigate = useNavigate();
    // const [previewImage, setPreviewImage] = useState(null);
    
    const {reportFoundItem}=useLostAndFoundManagement()
    const [foundItem, setFoundItem] = useState({
        title: "",
        description: "",
        date: "",
        place: "",
        founderName: "",
        image: null
    });
    
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);   

    const handleChange = (e) => {
        setFoundItem({ ...foundItem, [e.target.name]: e.target.value.trim() });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFoundItem((prevState) => ({
                ...prevState,
                image: file,
            }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setFoundItem({
            title: "",
            description: "",
            date: "",
            place: "",
            founderName: "",
            image: null,
        });
        setPreviewImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!foundItem.image) {
            toast.error('Please select an image before uploading!');
            return;
        }

        try {
            await reportFoundItem(foundItem,resetForm)
         } catch (error) {
            console.error('Error uploading item:', error);
            toast.error("Failed to upload item.");
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPLOAD FOUND ITEMS REQUEST</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={foundItem.title}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                        <div className="mt-2">
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={foundItem.date}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">Place</label>
                        <div className="mt-2">
                            <input
                                id="place"
                                name="place"
                                type="text"
                                value={foundItem.place}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                value={foundItem.description}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="founderName" className="block text-sm font-medium leading-6 text-gray-900">Founder Name</label>
                        <div className="mt-2">
                            <input
                                id="founderName"
                                name="founderName"
                                type="text"
                                value={foundItem.founderName}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
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
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadFound;
