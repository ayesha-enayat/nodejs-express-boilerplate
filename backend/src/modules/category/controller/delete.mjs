import { DELETE_DATA_MESSAGE } from "../../../constants/index.mjs";
import deleteData from '../services/delete.mjs';

const deleteController = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteData(id);
        res.status(200).send({ status: 200, DELETE_DATA_MESSAGE});

    }
    catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}


export default deleteController;