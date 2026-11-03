import jwt from 'jsonwebtoken'

export const generateToeken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )
}   