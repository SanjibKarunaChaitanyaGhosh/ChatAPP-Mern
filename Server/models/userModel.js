import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    pic: {
        type: String,
        required: true,
        default: "https://i.pravatar.cc/300?img=11"
    },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User

