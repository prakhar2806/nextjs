import {NextApiHandler} from "next";

const user: NextApiHandler=(req,res)=>{
    const {id} = req.query
    res.status(200).send({userFound: id})
}

export default user;