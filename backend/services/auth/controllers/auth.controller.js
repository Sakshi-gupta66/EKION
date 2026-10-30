import { getAuth } from "firebase-admin/auth"
import { app } from "../config/firebase.js"
import User from "../models/user.model.js"
import crypto from "crypto"
import { createConnection } from "mongoose"
import redis from "../../../shared/redis/redis.js"

export const login = async(req, res)=>{
    try{
        const {token} = req.body
        const decoded = await getAuth().verifyIdToken(token)
        let user = await User.findOne({
            firebaseUid: decoded.uid 
        })
        
        if(!user){
            user = await User.create({
                firebaseUid: decoded.uid,
                email: decoded.email,
                name: decoded.name,
                avatar: decoded.picture
            })
        }

        const sessionID = crypto.randomUUID()
        await redis.set(`session:${sessionID}`, JSON.stringify({
            userId: user._id,
            email: user.email,
            name: user.name,
            avatar: user.avatar
        }),
        "EX", 7*24*60*60) //expire in 7 days
        
        res.cookie("session", sessionID, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000 //in ms
        })
        return res.status(200).json(user)

    }catch(error){
        return res.status(500).json({ message: `login error ${error}` })
    }
}




export const logOut = async(req, res)=>{
    try{
        const sessionID = req.cookies?.session
        if(sessionID){
            await redis.del(`session:${sessionID}`)
            res.clearCookie("session")
        }
        return res.status(200).json({ message: "Logged out successfully" })
    }catch(error){
        return res.status(500).json({ message: `logout error ${error}` })
    }

}