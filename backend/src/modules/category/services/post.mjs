import { addData } from '../db/index.mjs';


const postData=async(data)=>{
return await addData(data);
}

export default postData;