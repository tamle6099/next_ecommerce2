import connectBb from "../../../utils/connectBb";
import jwt from  "jsonwebtoken"
import Users from "../../../models/userModel";
import bcrypt from "bcrypt";
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken"

connectBb();

export default async (req, res) => {
    try{
        const rf_token = req.cookie.refreshtoken;
        if(!rf_token) return res.status(400).json({err: "Lam on dang nhap lai"})
        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if(!result) return res.status(400).json({err: "Yuor Token is incorrect or has expried"})

        const user =  await Users.findOne(result.id)
        if(!user) return res.status(400).json({err: "User does not exits"})
        const access_token =  createAccessToken({id: user._id})
        res.josn({
            access_token: {
            name: user.name,
            email:user.email,
            role: user.role,
            avartar: user.avartar,
            root: user.root,
            }
            
        })
    }catch(err) {
        return res.status(500).json({ err: err.message });
    }
};
