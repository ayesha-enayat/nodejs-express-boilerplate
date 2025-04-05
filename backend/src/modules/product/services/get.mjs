import { getAll, getAllPopulated, getAggregate } from "../db/index.mjs";

// const getData =()=>{
//     return getAll();
//     }


// const getData =()=>{
// return getAllPopulated("category");
// }


const getData = (query) => {
    // console.log("query=>",query);
    const { name } = query
    return getAggregate([
        // {
        //     $match: { name }
        // }, 
        {
            $match: {
                name: {
                    $in: ['test1', 'test2']
                }
            }
        }
    ]);
}

export default getData;