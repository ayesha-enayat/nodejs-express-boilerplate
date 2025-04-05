import { deleteById } from "../db/index.mjs";
const deleteData = async(id) => {
    return await deleteById(id);
}

export default deleteData;