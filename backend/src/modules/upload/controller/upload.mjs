import uploadFile from "../services/upload.mjs";

const uploadController = async (req, res) => {
    try {
        const file =await uploadFile(req.file);
        console.log(file)
        res.status(200).send({status:200,url:file.url});
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
};

export default uploadController;

