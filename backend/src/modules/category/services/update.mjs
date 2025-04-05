import { updateById } from "../db/index.mjs";

const updateData = async (id, data) => {
    return await updateById(id, data);
};

export default updateData;
