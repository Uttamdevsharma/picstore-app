const express = require('express');
const app = express();
const cors = require('cors');
const cloudinary = require('./src/utils/cloudinaryConfig.js');
const upload = require('./src/utils/multer.js');
const fs = require('fs').promises; // ✅ modern promise-based fs
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Image Upload Server");
});

app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file found" });

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "uploads"
        });

        // delete local file after upload
        await fs.unlink(req.file.path);

        res.status(201).json({
            message: "File uploaded successfully",
            imageUrl: result.secure_url //eita pore database e save kore dibo jokhon mongodb use korbo ei url ta save kore dibo oikhane
        });

    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({
            error: "Upload Failed",
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`The server listen on port ${port}`);
});
