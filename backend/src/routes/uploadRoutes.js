const express = require('express');
const multer = require('multer');
// const path = require('path');
const lostUpload=require('../../module/lostitemuploadSchema')


const router = express.Router;
const upload = multer({ dest: 'uploads/lostitems' });

//found uploads


router.post('/lostupload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ error: 'No file uploaded' });
    }

    // Save file information to MongoDB
    try {
        const newFile = new lostUpload({
            originalName: req.file.originalname,
            filePath: `uploads/lostitems${req.file.filename}`
        });

        await newFile.save();

        res.send({ filePath: `http://localhost:3000/uploads/lostitems/${req.file.filename}` });
    } catch (err) {
        console.error('Error saving file to database:', err);
        res.status(500).send({ error: 'Failed to save file to database' });
    }
});


// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve files statically
