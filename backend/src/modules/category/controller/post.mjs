import postData from "../services/post.mjs";
import { POST_DATA_MESSAGE } from "../../../constants/index.mjs";

const postController = async (req, res) => {
    try {
        console.log("req.body",req.body)
        const data = await postData(req.body);
        console.log("data",data);
        res.status(200).send({status:200,POST_DATA_MESSAGE,data:data});
    } catch (err) {
        console.log("error",err);
        res.status(500).send({ status: 500, message: 'Internal Server Error', error: err });
    }
}

export default postController;
