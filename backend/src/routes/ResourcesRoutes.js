const express = require('express')
const UserResources = require('../../module/userResources.js')
const BorrowedResource = require('../../module/resourceBorrower.js')
// const protectedRoutes=require('../../middleware/protectedRoutes.js')
const {protectRoute}=require('../../middleware/protectedRoutes.js')
const upload=require('../../middleware/multerConfig.js')
const Router = express.Router()


//post resources
Router.post("/postresources", protectRoute, upload.single('resourceImage'), async (req, res) => {
    try {
        const { Resourcename, ResourceCategory, resourceDescription } = req.body;
        if (!Resourcename || !ResourceCategory || !resourceDescription) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const resourceImage = req.file ? req.file.path : null;
        console.log("user",req.user)

        const newResource = await UserResources.create({ 
            Resourcename,
            ResourceCategory, 
            resourceImage, 
            resourceDescription,
            resourceUploadedBy:req.user._id
        });
        
        await newResource.save();
        res.status(200).json({ message: "Resource added successfully", resource: newResource });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//getresources
// Router.get("/getResources", async (req, res) => {
//     try {
//         const allUsers = await UserResources.find();

//         if (!allUsers || allUsers.length === 0) {
//             return res.status(200).json({ message: "No resources to show" });
//         }

//         // Append full URL to each resource's image
//         const baseUrl = `${req.protocol}://${req.get('host')}`; // e.g., http://localhost:3000
//         const resourcesWithImages = allUsers.map(resource => ({
//             ...resource._doc, // Spread the resource document
//             resourceImage: resource.resourceImage
//                 ? `${baseUrl}/${resource.resourceImage}` // Full URL for the image
//                 : null // Handle cases where there is no image
//         }));

//         res.status(200).json({ resources: resourcesWithImages });
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server error" });
//         console.error(error);
//     }
// });

Router.get("/getResources", async (req, res) => {
    try {
        const allUsers = await UserResources.find();

        if (!allUsers || allUsers.length === 0) {
            return res.status(200).json({ message: "No resources to show" });
        }

        // Append full URL to each resource's image
        const baseUrl = `${req.protocol}://${req.get('host')}`; // e.g., http://localhost:3000
        const resourcesWithImages = allUsers.map(resource => ({
            ...resource._doc, // Spread the resource document
            resourceImage: resource.resourceImage
                ? `${baseUrl}/${resource.resourceImage.replace(/\\/g, '/')}` // Ensure forward slashes
                : `${baseUrl}/uploads/resources/default-image.jpg` // Fallback image
        }));

        res.status(200).json({ resources: resourcesWithImages });
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
        console.error(error);
    }
});


Router.post('/borrowresources',protectRoute,async(req,res)=>{
    try {
        const {resource}=req.body
        // console.log("resource",resource)
        const changeResource=await UserResources.findById(resource._id)
        if(changeResource.borrowed){
           return res.status(200).json({Info:"Already borrowed by someone please contact the admin"})
        }
        changeResource.borrowed=true
        await changeResource.save()
        const newborrower=await BorrowedResource.create({borrower:req.user._id,resource:resource._id})
        await newborrower.save()
        res.status(200).json({message:"Borrowed"})
    } catch (error) {
        res.status(500).json({ error: "Login first" })
        console.log(error)
    }
})

Router.get('/borrowedresources',protectRoute,async(req,res)=>{
    try {
        const borrowed = await BorrowedResource.find({ borrower: req.user._id })
        .populate('borrower')  // Populate the 'borrower' field with User data
        .populate('resource'); ;
        console.log(borrowed.length)
        if(!borrowed||borrowed.length===0){
           return res.status(200).json({Info:"No resources to display"})
        }
        res.status(200).json({borrowed})
    } catch (error) {
        res.status(500).json({ error: "Login first" })
        console.log(error)
    }
})





Router.get('/uploadedresources',protectRoute,async(req,res)=>{
    try {
        console.log("id",req.user._id)
        const borrowed = await UserResources.find({ resourceUploadedBy : req.user._id })
        // .populate('borrower')  // Populate the 'borrower' field with User data
        // .populate('resource'); ;
        console.log("uploaded",borrowed)
        if(!borrowed||borrowed.length===0){
           return res.status(200).json({Info:"No resources to display"})
        }
        res.status(200).json({borrowed})
    } catch (error) {
        res.status(500).json({ error: "Login first" })
        console.log(error)
    }
})



module.exports=Router