import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { generateToeken } from '../config/generateToken.js';

export const registerUser = asyncHandler(async (req, res) => {
    
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds....")
    }

    const userExist = await User.findOne({ email : email.toLowerCase()  })
    
    if (userExist) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({ 
        name,
        email,
        password,
        pic
     })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToeken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Failed to create the User...")
    }

}) 

export const authUser = asyncHandler(async (req, res) => { 
    const { email, password } = req.body
    const user = await User.findOne({ email:email })
    
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToeken(user._id)
        })
    } else {
        res.status(401).json({
            error : "User or Pasword is incorrect"
        })
    }
})

