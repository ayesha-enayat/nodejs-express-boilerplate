import Model from './models/index.mjs';

const getAll = async () => await Model.find();

//find ke agy wo key laagani hai jisko opulate karna hai
const getAllPopulated = async (key) => await Model.find().populate({
  path:'category',
//  populate:{
//     path:'subcategory',
//     select:""
//  }
});

const getAggregate = async (query) => await Model.aggregate(query);
//aggregate array of objects leta hai 

const addData = (data) => new Model(data).save().then((user)=>user.toObject())

const deleteById = async (id) => await Model.findByIdAndDelete(id);

const updateById = async (id, data) => {
    return await Model.findByIdAndUpdate(id, data, { new: true });
};

export {getAggregate,getAllPopulated, getAll, addData, deleteById, updateById };
