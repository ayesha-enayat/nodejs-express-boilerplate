import jwt from 'jsonwebtoken';
const authentication = (req,res,next)=>{
    console.log(req.header);
    const {authentication}=req.header;
   if(!authentication){
    return res.status(403).send({error:"No Auth"});
   }
    const token =authentication.split(" ")[1];
    jwt.verify (token,"secret_key",(result)=>{
        console.log("result");
        if(result){
            next();
        }
        else{
            res.status(403).send({error:"Unauthorized."});
        }
    })
}

export {
    authentication
}