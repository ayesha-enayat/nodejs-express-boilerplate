import Model from './models/index.mjs';

const getAll = async () => await Model.find();

const addData = (data) => new Model(data).save().then((user)=>user.toObject())

const deleteById = async (id) => await Model.findByIdAndDelete(id);

const updateById = async (id, data) => {
    return await Model.findByIdAndUpdate(id, data, { new: true });
};

export { getAll, addData, deleteById, updateById };
