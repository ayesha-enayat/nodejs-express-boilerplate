import updateData from '../services/update.mjs';
import {UPDATE_DATA_MESSAGE} from '../constants/index.mjs';

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateData(id, req.body);

        if (!updatedUser) {
            return res.status(404).send({ status: 404, message: "User not found" });
        }

        res.status(200).send({ status: 200, UPDATE_DATA_MESSAGE, data: updatedUser });

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export default updateController;
