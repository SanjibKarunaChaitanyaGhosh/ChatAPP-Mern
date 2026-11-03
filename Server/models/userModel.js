import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        required: true,
        default: "https://i.pravatar.cc/300?img=11"
    },
}, { timestamps: true })

// matching password
userSchema.methods.matchPassword = async (enteredPassword) => {
    return await bcrypt.compare(enteredPassword,this.password)
}

// hashing the password
userSchema.pre('save', async function (next) {

    // Only hash the password if it has been changed
    if (!this.isModified('password')) {
        return next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    this.password = await bcrypt.hash(this.password, salt);

    // password: await bcrypt.hash(password, 10) dont't use directly this
});

const User = mongoose.model("User", userSchema)

export default User

