import getData from "../services/get.mjs";
const getController = async (req, res) => {
    try {
        // const{name}=req.query;
        const users = await getData(req.query);
        res.status(200).send({status:200,data:users});
    } catch (err) {
        res.status(500).send({ status: 500, message: 'Internal Server Error', error: err });
    }
}

export default getController;
